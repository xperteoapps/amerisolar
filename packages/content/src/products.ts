// packages/content/src/products.ts
// Typy, walidacja i helpery dla data/products.json — jedynego źródła prawdy
// parametrów modułów (CLAUDE.md §6). Nic tu nie zaokrągla ani nie „poprawia”
// wartości z kart; wyliczenia (kWp na kontener) są jawnie oznaczone jako pochodne.
import { z } from "zod";
import raw from "../../../data/products.json" with { type: "json" };

const num = z.number();
const nums = z.array(num).min(1);

/** Pakowanie może być liczbą albo zakresem z karty, np. "720/740". */
const packagingCount = z.union([z.number().int().positive(), z.string().regex(/^\d+\/\d+$/)]);

export const productSchema = z
  .object({
    model: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    family: z.string(),
    segment_pl: z.array(z.string()),
    bifacial: z.boolean(),
    frame_color: z.string().optional(),
    cell: z.string(),
    cells: z.number().int(),
    power_bins_w: z.array(z.number().int()).min(1),
    efficiency_pct: nums,
    stc: z.object({ voc_v: nums, isc_a: nums, vmp_v: nums, imp_a: nums }),
    noct_pmax_w: nums.optional(),
    noct_note: z.string().optional(),
    bifacial_gain_example: z
      .object({ base_w: num, gain_pct_to_pmax_w: z.record(z.string(), num) })
      .optional(),
    temp_coeff: z.object({
      pmax_pct_per_c: num,
      voc_pct_per_c: num,
      isc_pct_per_c: num,
      noct_c: z.string(),
    }),
    dimensions_mm: z.tuple([num, num, num]),
    weight_kg: num,
    glass: z.string().optional(),
    front_cover: z.string().optional(),
    bending_radius_m: num.optional(),
    mounting: z.string().optional(),
    claim_weight: z.string().optional(),
    junction_box: z.string(),
    connector: z.string(),
    max_system_voltage_v: z.string(),
    max_series_fuse_a: num,
    fire_rating: z.string().optional(),
    safety_class: z.string().optional(),
    mechanical_load_pa: z.object({ wind: num, snow: num }).optional(),
    operating_temp_c: z.string(),
    warranty_years: z.object({ product: z.number().int(), linear_power: z.number().int() }),
    certifications_on_datasheet: z.array(z.string()),
    tuv_certificate: z
      .object({
        number: z.string(),
        body: z.string(),
        standards: z.array(z.string()),
        issued: z.string(),
        valid_until: z.string(),
        covered_range: z.string(),
      })
      .optional(),
    packaging: z.object({
      pcs_per_pallet: packagingCount,
      pcs_per_20ft: packagingCount,
      pcs_per_40ft_hq: packagingCount,
    }),
    to_verify: z.array(z.string()),
    area_m2: num,
    areal_mass_kg_m2: num,
    max_power_density_w_m2: num,
    areal_mass_note: z.string().optional(),
  })
  .superRefine((p, ctx) => {
    // Każda tabela per klasa mocy musi mieć tyle wartości, ile klas mocy.
    const n = p.power_bins_w.length;
    const series: Record<string, number[] | undefined> = {
      efficiency_pct: p.efficiency_pct,
      "stc.voc_v": p.stc.voc_v,
      "stc.isc_a": p.stc.isc_a,
      "stc.vmp_v": p.stc.vmp_v,
      "stc.imp_a": p.stc.imp_a,
      noct_pmax_w: p.noct_pmax_w,
    };
    for (const [key, arr] of Object.entries(series)) {
      if (arr && arr.length !== n) {
        ctx.addIssue({
          code: "custom",
          message: `${p.model}: ${key} ma ${arr.length} wartości, a klas mocy jest ${n}`,
        });
      }
    }
  });

export const productsFileSchema = z.object({
  _meta: z.record(z.string(), z.string()),
  products: z.array(productSchema),
  price_list_models_without_datasheet: z.array(z.string()),
  company_facts: z.record(z.string(), z.unknown()),
});

export type Product = z.infer<typeof productSchema>;
export type ProductsFile = z.infer<typeof productsFileSchema>;

/** Walidowane w momencie importu — błędny products.json zatrzymuje build. */
export const productsFile: ProductsFile = productsFileSchema.parse(raw);
export const products: readonly Product[] = productsFile.products;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const isFlexible = (p: Product): boolean => p.bending_radius_m !== undefined;

/** Zakres mocy do H1/tytułów, np. "690–720 W". */
export function powerRange(p: Product): { min: number; max: number } {
  const bins = p.power_bins_w;
  return { min: Math.min(...bins), max: Math.max(...bins) };
}

export type PackagingUnit = "pallet" | "20ft" | "40ft_hq";
const packagingKey = {
  pallet: "pcs_per_pallet",
  "20ft": "pcs_per_20ft",
  "40ft_hq": "pcs_per_40ft_hq",
} as const satisfies Record<PackagingUnit, keyof Product["packaging"]>;

/** Liczba sztuk w jednostce; zakres "720/740" zwracany jako {min,max}. */
export function piecesPer(p: Product, unit: PackagingUnit): { min: number; max: number } {
  const v = p.packaging[packagingKey[unit]];
  if (typeof v === "number") return { min: v, max: v };
  const [a, b] = v.split("/").map(Number) as [number, number];
  return { min: Math.min(a, b), max: Math.max(a, b) };
}

/**
 * kWp w jednostce transportowej — wartość POCHODNA (sztuki × moc klasy / 1000),
 * liczona z danych karty. Na stronie podpisujemy ją jako wyliczenie.
 */
export function kwpPer(p: Product, unit: PackagingUnit, powerW: number): { min: number; max: number } {
  if (!p.power_bins_w.includes(powerW)) {
    throw new Error(`${p.model} nie ma klasy mocy ${powerW} W`);
  }
  const pcs = piecesPer(p, unit);
  return { min: (pcs.min * powerW) / 1000, max: (pcs.max * powerW) / 1000 };
}

/** Certyfikat TÜV przypisujemy WYŁĄCZNIE modelom, które go mają w danych (CLAUDE.md §6). */
export const hasTuvCertificate = (p: Product): boolean => p.tuv_certificate !== undefined;
