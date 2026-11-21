// apps/web/lib/rfq.ts
// Schemat formularza zapytania ofertowego (CLAUDE.md §4: RFQ krokowy) — wspólny dla
// formularza (klient) i Server Action (serwer).
import { z } from "zod";
import { products } from "@amerisolar/content";

export const leadTypes = [
  { value: "installer", label: "Instalator / firma montażowa" },
  { value: "epc", label: "EPC / deweloper farm PV" },
  { value: "distributor", label: "Hurtownia / dystrybutor" },
  { value: "business", label: "Firma — własny obiekt" },
  { value: "homeowner", label: "Właściciel domu" },
] as const;

export const timelines = [
  { value: "asap", label: "Jak najszybciej" },
  { value: "1-3m", label: "1–3 miesiące" },
  { value: "3-6m", label: "3–6 miesięcy" },
  { value: "6m+", label: "Ponad 6 miesięcy" },
  { value: "tender", label: "Przetarg / projekt w przygotowaniu" },
] as const;

export const modelOptions = products.map((p) => p.model);

const emptyToUndef = (v: unknown) => (typeof v === "string" && v.trim() === "" ? undefined : v);
const optNum = z.preprocess(
  (v) => (emptyToUndef(v) === undefined ? undefined : Number(String(v).replace(",", "."))),
  z.number().positive("Podaj liczbę większą od zera.").max(1_000_000).optional(),
);

export const rfqSchema = z
  .object({
    type: z.enum(["installer", "epc", "distributor", "business", "homeowner"], {
      message: "Wybierz, kim jesteś.",
    }),
    product_interest: z.array(z.enum(modelOptions as [string, ...string[]])).default([]),
    quantity_kwp: optNum,
    quantity_containers: optNum,
    delivery_location: z.preprocess(emptyToUndef, z.string().max(200).optional()),
    timeline: z.preprocess(
      emptyToUndef,
      z.enum(timelines.map((t) => t.value) as [string, ...string[]]).optional(),
    ),
    company: z.preprocess(emptyToUndef, z.string().max(200).optional()),
    nip: z.preprocess(
      emptyToUndef,
      z
        .string()
        .transform((v) => v.replace(/[\s-]/g, ""))
        .pipe(z.string().regex(/^\d{10}$/, "NIP to 10 cyfr."))
        .optional(),
    ),
    name: z.string().trim().min(2, "Podaj imię i nazwisko.").max(120),
    email: z.string().trim().email("Podaj poprawny adres e-mail.").max(200),
    phone: z.preprocess(emptyToUndef, z.string().max(40).optional()),
    message: z.preprocess(emptyToUndef, z.string().max(4000).optional()),
    consent_contact: z.literal("on", {
      message: "Zgoda na kontakt jest wymagana, abyśmy mogli odpowiedzieć.",
    }),
    consent_marketing: z.preprocess((v) => v === "on", z.boolean()),
    landing_page: z.preprocess(emptyToUndef, z.string().max(500).optional()),
    utm_source: z.preprocess(emptyToUndef, z.string().max(200).optional()),
    utm_medium: z.preprocess(emptyToUndef, z.string().max(200).optional()),
    utm_campaign: z.preprocess(emptyToUndef, z.string().max(200).optional()),
    utm_term: z.preprocess(emptyToUndef, z.string().max(200).optional()),
    utm_content: z.preprocess(emptyToUndef, z.string().max(200).optional()),
  })
  .refine(
    (d) => d.type === "homeowner" || d.quantity_kwp !== undefined || d.quantity_containers !== undefined,
    {
      message: "Podaj ilość w kWp albo liczbę kontenerów.",
      path: ["quantity_kwp"],
    },
  );

export type RfqInput = z.infer<typeof rfqSchema>;

export type RfqState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

/** Prosty scoring (docelowo edge function `lead-score`, CLAUDE.md §3). */
export function scoreLead(d: RfqInput): number {
  let s = 0;
  s += { epc: 40, distributor: 35, installer: 25, business: 20, homeowner: 0 }[d.type];
  const kwp = d.quantity_kwp ?? (d.quantity_containers ? d.quantity_containers * 400 : 0);
  if (kwp >= 1000) s += 40;
  else if (kwp >= 400) s += 30;
  else if (kwp >= 100) s += 15;
  if (d.timeline === "asap" || d.timeline === "1-3m") s += 15;
  if (d.company) s += 5;
  return Math.min(100, s);
}
