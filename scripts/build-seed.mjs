// scripts/build-seed.mjs
// Generuje supabase/seed.sql z data/products.json (jedyne źródło prawdy).
// Uruchom: pnpm seed:build — wynik commitujemy razem ze zmianą products.json.
import { readFileSync, writeFileSync } from "node:fs";

const data = JSON.parse(readFileSync("data/products.json", "utf8"));
const q = (v) => (v === null || v === undefined ? "null" : `'${String(v).replace(/'/g, "''")}'`);
const j = (v) => `${q(JSON.stringify(v))}::jsonb`;
const arr = (a) => `array[${a.map(q).join(", ")}]::text[]`;

const SPEC_KEYS_EXCLUDED = new Set([
  "model",
  "slug",
  "family",
  "bifacial",
  "cells",
  "dimensions_mm",
  "weight_kg",
  "warranty_years",
  "packaging",
  "to_verify",
  "power_bins_w",
  "efficiency_pct",
  "stc",
  "noct_pmax_w",
]);

let sql = `-- supabase/seed.sql — WYGENEROWANE przez scripts/build-seed.mjs z data/products.json. Nie edytuj ręcznie.\n`;
sql += `begin;\n\n`;
sql += `insert into public.sites (country_code, default_locale, domain, currency, is_live)\n`;
sql += `values ('PL', 'pl-PL', 'amerisolar.pl', 'PLN', false)\n`;
sql += `on conflict (country_code) do update set default_locale = excluded.default_locale, domain = excluded.domain, currency = excluded.currency;\n\n`;

data.products.forEach((p, i) => {
  const specs = Object.fromEntries(Object.entries(p).filter(([k]) => !SPEC_KEYS_EXCLUDED.has(k)));
  const flexible = p.bending_radius_m !== undefined;
  sql += `insert into public.products (model, slug, family, is_flexible, bifacial, cells, dimensions_mm, weight_kg, warranty_product_years, warranty_linear_power_years, packaging, specs, to_verify, status, sort_order)\n`;
  sql += `values (${q(p.model)}, ${q(p.slug)}, ${q(p.family)}, ${flexible}, ${p.bifacial}, ${p.cells}, array[${p.dimensions_mm.join(", ")}], ${p.weight_kg}, ${p.warranty_years.product}, ${p.warranty_years.linear_power}, ${j(p.packaging)}, ${j(specs)}, ${arr(p.to_verify)}, 'draft', ${i})\n`;
  sql += `on conflict (model) do update set slug = excluded.slug, family = excluded.family, is_flexible = excluded.is_flexible, bifacial = excluded.bifacial, cells = excluded.cells, dimensions_mm = excluded.dimensions_mm, weight_kg = excluded.weight_kg, warranty_product_years = excluded.warranty_product_years, warranty_linear_power_years = excluded.warranty_linear_power_years, packaging = excluded.packaging, specs = excluded.specs, to_verify = excluded.to_verify, sort_order = excluded.sort_order;\n\n`;
  sql += `delete from public.product_variants where product_id = (select id from public.products where model = ${q(p.model)});\n`;
  sql += `insert into public.product_variants (product_id, power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)\nselect id, v.* from public.products, (values\n`;
  sql += p.power_bins_w
    .map(
      (w, k) =>
        `  (${w}, ${p.efficiency_pct[k]}, ${p.stc.voc_v[k]}, ${p.stc.isc_a[k]}, ${p.stc.vmp_v[k]}, ${p.stc.imp_a[k]}, ${p.noct_pmax_w ? p.noct_pmax_w[k] : "null::integer"})`,
    )
    .join(",\n");
  sql += `\n) as v(power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)\nwhere model = ${q(p.model)};\n\n`;
  if (p.tuv_certificate) {
    const c = p.tuv_certificate;
    sql += `insert into public.certificates (number, body, standards, issued_on, valid_until, covered_models, status)\n`;
    sql += `values (${q(c.number)}, ${q(c.body)}, ${arr(c.standards)}, ${q(c.issued)}, ${q(c.valid_until)}, ${arr([p.model.replace(/ Black$/, "")])}, 'draft')\n`;
    sql += `on conflict (number) do update set body = excluded.body, standards = excluded.standards, issued_on = excluded.issued_on, valid_until = excluded.valid_until, covered_models = excluded.covered_models;\n\n`;
  }
});
sql += `commit;\n`;
writeFileSync("supabase/seed.sql", sql);
console.log(`supabase/seed.sql: ${data.products.length} produktów`);
