// apps/web/lib/documents.ts
// Rejestr dokumentów do pobrania (karty katalogowe, certyfikaty) — data/documents.json.
// Link pokazujemy tylko, gdy plik jest w rejestrze (i w apps/web/public/dokumenty/).
// Certyfikat przypisujemy modelowi wyłącznie w zakresie mocy z certyfikatu (CLAUDE.md §6).
import { z } from "zod";
import { products, type Product } from "@amerisolar/content";
import { tpl, type Formatter } from "./i18n";
import type { Messages } from "@/messages";
import raw from "../../../data/documents.json" with { type: "json" };

const fileSchema = z.object({
  file: z.string().regex(/^\/dokumenty\/[a-z0-9._-]+\.pdf$/),
  title: z.string(),
  version: z.string().optional(),
  lang: z.string().default("EN"),
  sizeKb: z.number().optional(),
});

export const certCategories = ["product", "ce", "tests", "iso", "weee"] as const;
export type CertCategory = (typeof certCategories)[number];

const certSchema = fileSchema.extend({
  category: z.enum(certCategories),
  number: z.string(),
  body: z.string(),
  holder: z.string().optional(),
  standards: z.array(z.string()),
  issued: z.string().optional(),
  validUntil: z.string().optional(),
  coverage: z.array(z.object({ model: z.string(), range: z.tuple([z.number(), z.number()]) })),
});

const schema = z.object({
  _meta: z.record(z.string(), z.string()),
  datasheets: z.record(z.string(), fileSchema),
  certificates: z.array(certSchema),
});

export const documents = schema.parse(raw);
export type DocFile = z.infer<typeof fileSchema>;
export type Certificate = z.infer<typeof certSchema>;

const baseModel = (model: string) => model.replace(/ Black$/, "");

export const datasheetFor = (slug: string): DocFile | undefined => documents.datasheets[slug];

/** Część wspólna zakresu mocy certyfikatu z klasami mocy w ofercie. */
export type Coverage = {
  product: Product;
  certRange: [number, number];
  covered: number[]; // klasy mocy z oferty objęte certyfikatem
  full: boolean;
};

export function coverageOf(cert: Certificate): Coverage[] {
  return cert.coverage.flatMap((c) => {
    const product = products.find((p) => baseModel(p.model) === c.model);
    if (!product) return [];
    const covered = product.power_bins_w.filter((w) => w >= c.range[0] && w <= c.range[1]);
    if (covered.length === 0) return [];
    return [{ product, certRange: c.range, covered, full: covered.length === product.power_bins_w.length }];
  });
}

/** Certyfikaty obejmujące przynajmniej jedną klasę mocy danego modelu z oferty. */
export function certificatesForProduct(p: Product): { cert: Certificate; coverage: Coverage }[] {
  return documents.certificates.flatMap((cert) => {
    const cov = coverageOf(cert).find((c) => c.product.slug === p.slug);
    return cov ? [{ cert, coverage: cov }] : [];
  });
}

export const certificatesInCategory = (cat: CertCategory) =>
  documents.certificates.filter(
    (c) => c.category === cat && (c.coverage.length === 0 || coverageOf(c).length > 0),
  );

/** Opis objęcia: „pełen zakres oferty 430–450 W” albo „klasy 690–700 W (w ofercie 690–720 W)”. */
export function coverageLabel(c: Coverage, m: Messages, f: Formatter): string {
  const r = (a: number[]) => f.range(Math.min(...a), Math.max(...a), "W", 0);
  const t = m.catalogLib.cert;
  return c.full
    ? tpl(t.fullRange, { range: r(c.product.power_bins_w) })
    : tpl(t.partial, { covered: r(c.covered), offer: r(c.product.power_bins_w) });
}

/** Tytuł dokumentu w języku serwisu (fallback: tytuł z rejestru). */
export function docTitle(doc: DocFile, m: Messages, model?: string): string {
  if (model) return tpl(m.docTitles.datasheet ?? doc.title, { model });
  return m.docTitles[doc.file] ?? doc.title;
}
