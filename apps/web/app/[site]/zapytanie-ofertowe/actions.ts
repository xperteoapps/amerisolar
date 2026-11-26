"use server";
// apps/web/app/[site]/zapytanie-ofertowe/actions.ts
// Zapytanie ofertowe: zod + honeypot + Turnstile (gdy skonfigurowany) → e-mail do sprzedaży
// (Resend, odbiorca LEAD_NOTIFY_EMAILS lub e-mail serwisu) oraz — gdy Supabase jest
// skonfigurowany — zapis w tabeli `leads` z limitem zgłoszeń z IP (service_role tylko na serwerze).
import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { leadTypes, rfqSchema, scoreLead, timelines, type RfqInput, type RfqState } from "@/lib/rfq";
import { getSite, isSiteKey, type Site } from "@/lib/sites";

const RATE_LIMIT = 5; // zgłoszeń na IP w oknie
const WINDOW_MIN = 30;

export async function submitRfq(siteKey: string, _prev: RfqState, form: FormData): Promise<RfqState> {
  if (!isSiteKey(siteKey)) return { status: "error", message: "Nieznany serwis." };

  // Honeypot: pole niewidoczne dla ludzi. Udajemy sukces, żeby nie uczyć botów.
  if (String(form.get("website") ?? "") !== "") return { status: "ok" };

  const raw = Object.fromEntries(
    [...form.keys()].map((k) => [k, k === "product_interest" ? form.getAll(k) : form.get(k)]),
  );
  const parsed = rfqSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    return { status: "error", message: "Popraw zaznaczone pola.", fieldErrors };
  }

  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0]?.trim() ?? "";
  const ipHash = ip
    ? createHash("sha256")
        .update(`${ip}:${process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""}`)
        .digest("hex")
    : null;

  const turnstileSecret = process.env.TURNSTILE_SECRET;
  if (turnstileSecret) {
    const token = String(form.get("cf-turnstile-response") ?? "");
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    });
    const verdict = (await res.json()) as { success?: boolean };
    if (!verdict.success)
      return {
        status: "error",
        message: "Weryfikacja antyspamowa nie powiodła się. Odśwież stronę i spróbuj ponownie.",
      };
  }

  const site = getSite(siteKey);
  const d = parsed.data;
  const fallback = site.company.email
    ? `Napisz bezpośrednio na ${site.company.email}.`
    : "Spróbuj ponownie później.";

  // 1) Baza (opcjonalnie, gdy Supabase skonfigurowany): zapis leada + limit zgłoszeń z IP.
  const db = supabaseAdmin();
  if (db && ipHash) {
    const since = new Date(Date.now() - WINDOW_MIN * 60_000).toISOString();
    const { count } = await db
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", since);
    if ((count ?? 0) >= RATE_LIMIT) {
      return {
        status: "error",
        message: `Wysłano już kilka zapytań z tego adresu. Spróbuj za pół godziny albo ${fallback.charAt(0).toLowerCase()}${fallback.slice(1)}`,
      };
    }
  }
  const saved = db ? await saveLead(db, site.countryCode, d, ipHash) : false;

  // 2) E-mail do działu sprzedaży (Resend). Odpowiedź („Odpowiedz”) trafia wprost do klienta.
  const mailed = await notifySales(site, d);

  if (!saved && !mailed) {
    return { status: "error", message: `Nie udało się wysłać zapytania. ${fallback}` };
  }
  return { status: "ok" };
}

function supabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
}

async function saveLead(
  db: SupabaseClient,
  countryCode: string,
  d: RfqInput,
  ipHash: string | null,
): Promise<boolean> {
  const { data: siteRow } = await db.from("sites").select("id").eq("country_code", countryCode).single();
  if (!siteRow) return false;
  const { data: lead, error } = await db
    .from("leads")
    .insert({
      site_id: siteRow.id,
      type: d.type,
      form: "rfq",
      company: d.company ?? null,
      nip: d.nip ?? null,
      name: d.name,
      email: d.email,
      phone: d.phone ?? null,
      product_interest: d.product_interest,
      quantity_kwp: d.quantity_kwp ?? null,
      quantity_containers: d.quantity_containers ?? null,
      delivery_location: d.delivery_location ?? null,
      timeline: d.timeline ?? null,
      message: d.message ?? null,
      utm_source: d.utm_source ?? null,
      utm_medium: d.utm_medium ?? null,
      utm_campaign: d.utm_campaign ?? null,
      utm_term: d.utm_term ?? null,
      utm_content: d.utm_content ?? null,
      landing_page: d.landing_page ?? null,
      consent_contact: true,
      consent_marketing: d.consent_marketing,
      ip_hash: ipHash,
      score: scoreLead(d),
    })
    .select("id")
    .single();
  if (error || !lead) {
    console.error("rfq insert failed", error?.message);
    return false;
  }
  await db.from("lead_events").insert({ lead_id: lead.id, event: "created", payload: { form: "rfq" } });
  return true;
}

/** Wysyła zapytanie na adres sprzedaży: LEAD_NOTIFY_EMAILS (po przecinku) albo e-mail serwisu. */
async function notifySales(site: Site, d: RfqInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.LEAD_NOTIFY_EMAILS ?? site.company.email ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (!apiKey || to.length === 0) return false;

  const from = process.env.LEAD_FROM_EMAIL ?? `Formularz ${site.domain} <formularz@${site.domain}>`;
  const label = (list: readonly { value: string; label: string }[], v?: string) =>
    list.find((x) => x.value === v)?.label ?? v ?? "—";
  const models = d.product_interest.length ? d.product_interest.join(", ") : "nie wskazano";
  const qty = [
    d.quantity_kwp !== undefined ? `${d.quantity_kwp} kWp` : null,
    d.quantity_containers !== undefined ? `${d.quantity_containers} kontener(y)` : null,
  ]
    .filter(Boolean)
    .join(" / ");

  const text = [
    `Nowe zapytanie ofertowe z ${site.domain}`,
    "",
    `Kto: ${label(leadTypes, d.type)}`,
    `Firma: ${d.company ?? "—"}${d.nip ? ` (NIP ${d.nip})` : ""}`,
    `Osoba: ${d.name}`,
    `E-mail: ${d.email}`,
    `Telefon: ${d.phone ?? "—"}`,
    "",
    `Modele: ${models}`,
    `Ilość: ${qty || "—"}`,
    `Miejsce dostawy: ${d.delivery_location ?? "—"}`,
    `Termin: ${label(timelines, d.timeline)}`,
    "",
    "Wiadomość:",
    d.message ?? "—",
    "",
    `Zgoda marketingowa: ${d.consent_marketing ? "tak" : "nie"}`,
    `Strona wejścia: ${d.landing_page ?? "—"}`,
    d.utm_source ? `UTM: ${d.utm_source} / ${d.utm_medium ?? ""} / ${d.utm_campaign ?? ""}` : "",
    `Ocena leada: ${scoreLead(d)}/100`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        reply_to: d.email,
        subject: `Zapytanie: ${models} — ${d.company ?? d.name}${qty ? ` (${qty})` : ""}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("rfq mail failed", res.status, await res.text());
      return false;
    }
    return true;
  } catch (e) {
    console.error("rfq mail error", e);
    return false;
  }
}
