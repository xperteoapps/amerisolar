// apps/web/lib/seo/jsonld.tsx
// Dane strukturalne JSON-LD (CLAUDE.md §5.1).
// ZAKAZ: AggregateRating / Review. `offers` tylko przy prawdziwej cenie (domyślnie brak).
import { powerRange, type Product } from "@amerisolar/content";
import { absoluteUrl, type Site } from "../sites";

type Thing = Record<string, unknown>;

/** Bezpieczne osadzenie JSON w <script> (bez możliwości zamknięcia tagu). */
export function JsonLd({ data }: { data: Thing | Thing[] }) {
  const json = JSON.stringify(Array.isArray(data) ? data : data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export const BRAND = { "@type": "Brand", name: "Amerisolar" } as const;

export function organizationLd(site: Site): Thing {
  const c = site.company;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl(site, "/")}#organization`,
    url: absoluteUrl(site, "/"),
    // TODO(klient): nazwa prawna, NIP, adres — do czasu uzupełnienia pola są pomijane.
    ...(c.name ? { name: c.name, legalName: c.name } : { name: "Amerisolar Polska" }),
    ...(c.vatId ? { vatID: c.vatId } : {}),
    ...(c.email ? { email: c.email } : {}),
    ...(c.phone ? { telephone: c.phone } : {}),
    ...(c.address ? { address: c.address } : {}),
    brand: BRAND,
  };
}

export function websiteLd(site: Site): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl(site, "/")}#website`,
    url: absoluteUrl(site, "/"),
    inLanguage: site.locale,
    publisher: { "@id": `${absoluteUrl(site, "/")}#organization` },
  };
}

export function breadcrumbLd(site: Site, items: { name: string; path: string }[]): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(site, it.path),
    })),
  };
}

export function faqLd(items: { question: string; answer: string }[]): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleLd(
  site: Site,
  a: {
    path: string;
    headline: string;
    description: string;
    author: { name: string; role: string };
    published: string;
    modified: string;
  },
): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    mainEntityOfPage: absoluteUrl(site, a.path),
    inLanguage: site.locale,
    author: { "@type": "Person", name: a.author.name, jobTitle: a.author.role },
    datePublished: a.published,
    dateModified: a.modified,
    publisher: { "@id": `${absoluteUrl(site, "/")}#organization` },
  };
}

/** Product bez offers/ratingów; parametry jako additionalProperty (wartości 1:1 z products.json). */
export function productLd(site: Site, p: Product, path: string): Thing {
  const { min, max } = powerRange(p);
  const [length, width, thickness] = p.dimensions_mm;
  const prop = (name: string, value: number | string, unitText?: string) => ({
    "@type": "PropertyValue",
    name,
    value,
    ...(unitText ? { unitText } : {}),
  });
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${p.model} ${min}–${max} W`,
    model: p.model,
    sku: p.model,
    brand: BRAND,
    url: absoluteUrl(site, path),
    weight: { "@type": "QuantitativeValue", value: p.weight_kg, unitCode: "KGM" },
    depth: { "@type": "QuantitativeValue", value: thickness, unitCode: "MMT" },
    width: { "@type": "QuantitativeValue", value: width, unitCode: "MMT" },
    height: { "@type": "QuantitativeValue", value: length, unitCode: "MMT" },
    additionalProperty: [
      prop("Technologia", p.family),
      prop("Moc maksymalna (STC)", `${min}–${max}`, "W"),
      prop("Sprawność maksymalna", Math.max(...p.efficiency_pct), "%"),
      prop("Liczba ogniw", p.cells),
      prop("Bifacjalny", p.bifacial ? "tak" : "nie"),
      prop("Współczynnik temperaturowy Pmax", p.temp_coeff.pmax_pct_per_c, "%/°C"),
      prop("Gwarancja produktowa", p.warranty_years.product, "lat"),
      prop("Gwarancja liniowa mocy", p.warranty_years.linear_power, "lat"),
    ],
  };
}
