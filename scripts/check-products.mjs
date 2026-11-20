// scripts/check-products.mjs
// Strażnik faktów (CLAUDE.md §10 pkt 6): treści nie mogą zawierać modeli spoza
// products.json ani przypisywać certyfikatu TÜV Z2 093522 0030 innym modelom.
// Uruchamiany w CI. Rozbudowa w Fazie 1 o weryfikację liczb w MDX.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const data = JSON.parse(readFileSync("data/products.json", "utf8"));
const models = new Set(data.products.map((p) => p.model.replace(/ Black$/, "")));
const tuvModels = data.products.filter((p) => p.tuv_certificate).map((p) => p.model.replace(/ Black$/, ""));

const roots = ["apps/web/app", "apps/web/components", "docs/briefs", "content"];
const exts = new Set([".tsx", ".ts", ".md", ".mdx"]);
const files = [];
const walk = (dir) => {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const e of entries) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (exts.has(extname(p))) files.push(p);
  }
};
roots.forEach(walk);

const errors = [];
const modelRe = /\bAS-[0-9A-Z]+(?:-[0-9A-Z]+)*\b/g;
for (const f of files) {
  const text = readFileSync(f, "utf8");
  for (const m of text.match(modelRe) ?? []) {
    if (!models.has(m)) errors.push(`${f}: model „${m}” nie istnieje w data/products.json`);
  }
  if (text.includes("Z2 093522 0030")) {
    const mentioned = [...new Set(text.match(modelRe) ?? [])].filter(
      (m) => !tuvModels.includes(m) && !/N-HCR/.test(m),
    );
    if (mentioned.length)
      errors.push(`${f}: certyfikat Z2 093522 0030 obok modeli spoza zakresu: ${mentioned.join(", ")}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`OK: ${files.length} plików, ${models.size} modeli w products.json`);
