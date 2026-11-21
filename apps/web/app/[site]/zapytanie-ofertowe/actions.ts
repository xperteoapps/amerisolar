"use server";
// apps/web/app/[site]/zapytanie-ofertowe/actions.ts
// Zapis zapytania ofertowego: zod + honeypot + Turnstile (gdy skonfigurowany) + limit
// zgłoszeń z jednego IP → tabela `leads` (service_role tylko na serwerze, CLAUDE.md §2).
import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { rfqSchema, scoreLead, type RfqState } from "@/lib/rfq";
import { getSite, isSiteKey } from "@/lib/sites";

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

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return {
      status: "error",
      message: "Formularz nie przyjmuje teraz zgłoszeń. Spróbuj ponownie później.",
    };
  }
  const db = createClient(url, key, { auth: { persistSession: false } });

  if (ipHash) {
    const since = new Date(Date.now() - WINDOW_MIN * 60_000).toISOString();
    const { count } = await db
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", since);
    if ((count ?? 0) >= RATE_LIMIT) {
      return {
        status: "error",
        message: "Wysłano już kilka zapytań z tego adresu. Spróbuj ponownie za pół godziny.",
      };
    }
  }

  const site = getSite(siteKey);
  const { data: siteRow } = await db.from("sites").select("id").eq("country_code", site.countryCode).single();
  if (!siteRow)
    return { status: "error", message: "Formularz nie przyjmuje teraz zgłoszeń. Spróbuj ponownie później." };

  const d = parsed.data;
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
    return { status: "error", message: "Nie udało się zapisać zapytania. Spróbuj ponownie za chwilę." };
  }
  await db.from("lead_events").insert({ lead_id: lead.id, event: "created", payload: { form: "rfq" } });
  // TODO: wywołanie edge function `lead-notify` (Resend) po skonfigurowaniu RESEND_API_KEY.
  return { status: "ok" };
}
