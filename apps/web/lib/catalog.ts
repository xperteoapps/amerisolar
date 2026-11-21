// apps/web/lib/catalog.ts
// Widok katalogu dla stron: grupowanie, nazwy, fakty dopuszczone do publikacji.
// Wszystkie liczby pochodzą z data/products.json (przez @amerisolar/content).
// Wartości wyliczone (kWp/kontener, Voc w mrozie) są oznaczane na stronach jako wyliczenia.
import {
  formatNumber,
  hasTuvCertificate,
  isFlexible,
  kwpPer,
  piecesPer,
  powerRange,
  products,
  type Product,
} from "@amerisolar/content";

export const CATALOG_PATH = "/panele-fotowoltaiczne/";
export const productPath = (p: Product) => `${CATALOG_PATH}${p.slug}/`;

export type ProductGroup = "glass" | "flexible";
export const groupOf = (p: Product): ProductGroup => (isFlexible(p) ? "flexible" : "glass");

export const groupLabel: Record<ProductGroup, string> = {
  glass: "Moduły szklane TOPCon",
  flexible: "Linia elastyczna",
};

/** Katalog posortowany wg grupy, potem mocy. */
export const catalog: Product[] = [...products].sort((a, b) => {
  const g = Number(isFlexible(a)) - Number(isFlexible(b));
  return g !== 0 ? g : powerRange(a).min - powerRange(b).min;
});

export const maxEfficiency = (p: Product) => Math.max(...p.efficiency_pct);

/** Krótki opis typu modułu do tytułów (bez superlatywów, wg danych). */
export function kindLabel(p: Product): string {
  if (isFlexible(p)) return p.family.includes("TOPCon") ? "moduł elastyczny TOPCon" : "moduł elastyczny PERC";
  if (p.family.includes("double glass")) return "moduł bifacjalny TOPCon, double glass";
  return p.bifacial ? "moduł bifacjalny TOPCon" : "moduł TOPCon N-type";
}

/** Technologia ogniwa do tabel. */
export function technologyLabel(p: Product): string {
  if (isFlexible(p)) return p.family.includes("TOPCon") ? "TOPCon, elastyczny" : "PERC, elastyczny";
  return p.family.includes("double glass") ? "TOPCon, double glass" : "TOPCon N-type";
}

/**
 * Fakty wstrzymane do czasu potwierdzenia przez producenta (pola `to_verify`).
 * Mapowanie ręczne: każdy wpis odpowiada konkretnej pozycji z to_verify w products.json.
 */
const withheld: Record<string, { glass?: true }> = {
  // to_verify: „konstrukcja tyłu (szkło vs folia transparentna)”
  "as-7m108n-bhc": { glass: true },
};
export const showGlass = (p: Product) => Boolean(p.glass) && !withheld[p.slug]?.glass;

/** Certyfikaty do publikacji zgodnie z CLAUDE.md §6. */
export function certificatesFor(p: Product): { label: string; detail?: string }[] {
  const fromDatasheet = p.certifications_on_datasheet.map((c) => ({ label: c }));
  if (!hasTuvCertificate(p) || !p.tuv_certificate) return fromDatasheet;
  const t = p.tuv_certificate;
  return [
    {
      label: `${t.body}, certyfikat nr ${t.number}`,
      detail: `${t.standards.join(", ")}; zakres: ${t.covered_range}; ważny do ${formatDate(t.valid_until)}`,
    },
    ...fromDatasheet,
  ];
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

export function pieces(p: Product, unit: "pallet" | "20ft" | "40ft_hq"): string {
  const { min, max } = piecesPer(p, unit);
  return min === max ? `${min}` : `${min}–${max}`;
}

export function kwpLabel(
  p: Product,
  unit: "pallet" | "20ft" | "40ft_hq",
  powerW = powerRange(p).max,
): string {
  const { min, max } = kwpPer(p, unit, powerW);
  return min === max ? formatNumber(max) : `${formatNumber(min)}–${formatNumber(max)}`;
}

/** Sąsiednie modele w tej samej grupie (do porównania na karcie). */
export function neighbours(p: Product, count = 2): Product[] {
  const same = catalog.filter((x) => groupOf(x) === groupOf(p));
  const i = same.findIndex((x) => x.slug === p.slug);
  const others = same.filter((x) => x.slug !== p.slug);
  others.sort(
    (a, b) =>
      Math.abs(same.indexOf(a) - i) - Math.abs(same.indexOf(b) - i) || same.indexOf(a) - same.indexOf(b),
  );
  const picked = others.slice(0, count);
  // Moduł elastyczny porównujemy też z klasycznym — taki jest realny wybór klienta (CLAUDE.md §4A).
  if (picked.length < count) {
    const glass = catalog.find((x) => x.slug === "as-7m144n-hc");
    if (glass) picked.push(glass);
  }
  return picked;
}

/**
 * Voc przy temperaturze ogniwa t (°C): Voc·(1 + βVoc·(t − 25)). Wyliczenie poglądowe,
 * te same wzory co w kalkulatorze stringów (MASTER_PROMPT, Faza 2).
 */
export function vocAt(p: Product, binIndex: number, t: number): number {
  const voc = p.stc.voc_v[binIndex]!;
  return voc * (1 + (p.temp_coeff.voc_pct_per_c / 100) * (t - 25));
}

/** Grupa zastosowań do kolorowania schematów i legend (z pola segment_pl w products.json). */
export type Segment = "roof" | "large" | "flex";
export const segmentOf = (p: Product): Segment =>
  isFlexible(p) ? "flex" : powerRange(p).max > 500 ? "large" : "roof";
export const segmentLabel: Record<Segment, string> = {
  roof: "Dachy domów i firm, carporty",
  large: "Dachy przemysłowe i farmy PV",
  flex: "Linia elastyczna — dachy specjalne",
};
/** Kolory legend: zieleń i pomarańcz marki + błękit linii elastycznej. */
export const segmentColor: Record<Segment, string> = {
  roof: "#529e4a",
  large: "#d07c35",
  flex: "#7fb3d5",
};
