// apps/web/lib/rfq.ts
// Schemat formularza zapytania ofertowego (CLAUDE.md §4: RFQ krokowy) — wspólny dla
// formularza (klient) i Server Action (serwer).
import { z } from "zod";
import { products } from "@amerisolar/content";

export const leadTypeValues = ["distributor", "trader", "installer", "epc", "business"] as const;
export const timelineValues = ["asap", "1-3m", "3-6m", "6m+", "tender"] as const;
export type LeadType = (typeof leadTypeValues)[number];
export type Timeline = (typeof timelineValues)[number];

export const modelOptions = products.map((p) => p.model);

/** Komunikaty walidacji (messages → form.errors). */
export type RfqErrors = {
  type: string;
  number: string;
  vatId: string;
  name: string;
  email: string;
  consent: string;
  qty: string;
};

const emptyToUndef = (v: unknown) => (typeof v === "string" && v.trim() === "" ? undefined : v);

/**
 * Schemat zapytania w języku serwisu. `polishVat`: w PL NIP (10 cyfr); w innych krajach
 * numer VAT / podatkowy jako dowolny tekst (różne formaty krajowe).
 */
export function rfqSchema(e: RfqErrors, polishVat: boolean) {
  const optNum = z.preprocess(
    (v) => (emptyToUndef(v) === undefined ? undefined : Number(String(v).replace(",", "."))),
    z.number().positive(e.number).max(1_000_000).optional(),
  );
  const vat = polishVat
    ? z
        .string()
        .transform((v) => v.replace(/[\s-]/g, ""))
        .pipe(z.string().regex(/^\d{10}$/, e.vatId))
    : z.string().trim().max(40);
  return z
    .object({
      type: z.enum(leadTypeValues, { message: e.type }),
      product_interest: z.array(z.enum(modelOptions as [string, ...string[]])).default([]),
      quantity_kwp: optNum,
      quantity_containers: optNum,
      delivery_location: z.preprocess(emptyToUndef, z.string().max(200).optional()),
      timeline: z.preprocess(emptyToUndef, z.enum(timelineValues).optional()),
      company: z.preprocess(emptyToUndef, z.string().max(200).optional()),
      nip: z.preprocess(emptyToUndef, vat.optional()),
      name: z.string().trim().min(2, e.name).max(120),
      email: z.string().trim().email(e.email).max(200),
      phone: z.preprocess(emptyToUndef, z.string().max(40).optional()),
      message: z.preprocess(emptyToUndef, z.string().max(4000).optional()),
      consent_contact: z.literal("on", { message: e.consent }),
      consent_marketing: z.preprocess((v) => v === "on", z.boolean()),
      landing_page: z.preprocess(emptyToUndef, z.string().max(500).optional()),
      utm_source: z.preprocess(emptyToUndef, z.string().max(200).optional()),
      utm_medium: z.preprocess(emptyToUndef, z.string().max(200).optional()),
      utm_campaign: z.preprocess(emptyToUndef, z.string().max(200).optional()),
      utm_term: z.preprocess(emptyToUndef, z.string().max(200).optional()),
      utm_content: z.preprocess(emptyToUndef, z.string().max(200).optional()),
    })
    .refine((d) => d.quantity_kwp !== undefined || d.quantity_containers !== undefined, {
      message: e.qty,
      path: ["quantity_kwp"],
    });
}

export type RfqInput = z.infer<ReturnType<typeof rfqSchema>>;

export type RfqState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

/** Prosty scoring (docelowo edge function `lead-score`, CLAUDE.md §3). */
export function scoreLead(d: RfqInput): number {
  let s = 0;
  s += { distributor: 40, trader: 40, epc: 35, installer: 30, business: 20 }[d.type];
  const kwp = d.quantity_kwp ?? (d.quantity_containers ? d.quantity_containers * 400 : 0);
  if (kwp >= 1000) s += 40;
  else if (kwp >= 400) s += 30;
  else if (kwp >= 100) s += 15;
  if (d.timeline === "asap" || d.timeline === "1-3m") s += 15;
  if (d.company) s += 5;
  return Math.min(100, s);
}
