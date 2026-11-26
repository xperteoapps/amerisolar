// apps/web/lib/routes.ts
// Rejestr adresów z CLAUDE.md §4. `ready: true` = strona istnieje w kodzie.
// Nawigacja i sitemap pokazują wyłącznie gotowe adresy (zero 404 z linków wewnętrznych).
// Każdy język ma własne, przetłumaczone slugi (SEO). Foldery w app/[site]/ mają nazwy polskie —
// proxy.ts tłumaczy lokalny slug na wewnętrzny (ADR 0002). Etykiety: messages/*.ts → routes.
import type { Lang, Site } from "./sites";

export type RouteId =
  | "home"
  | "catalog"
  | "installers"
  | "farms"
  | "special"
  | "wholesale"
  | "tools"
  | "docs"
  | "about"
  | "rfq"
  | "contact"
  | "privacy";

export type RouteEntry = {
  id: RouteId;
  /** Ścieżka wewnętrzna = folder w app/[site]/ (polski slug). */
  internal: string;
  /** Lokalne slugi; brak wpisu = slug polski. */
  slugs?: Partial<Record<Lang, string>>;
  nav?: "main" | "footer";
  ready: boolean;
  sitemap?: "pages" | "products" | "categories" | "knowledge" | "tools";
};

export const routes: RouteEntry[] = [
  { id: "home", internal: "/", ready: true, sitemap: "pages" },
  {
    id: "catalog",
    internal: "/panele-fotowoltaiczne/",
    slugs: {
      en: "/solar-panels/",
      de: "/solarmodule/",
      it: "/pannelli-fotovoltaici/",
      fr: "/panneaux-photovoltaiques/",
      es: "/paneles-solares/",
      ro: "/panouri-fotovoltaice/",
      hr: "/solarni-paneli/",
      hu: "/napelemek/",
      uk: "/soniachni-paneli/",
    },
    nav: "main",
    ready: true,
    sitemap: "categories",
  },
  { id: "installers", internal: "/dla-instalatorow/", nav: "main", ready: false, sitemap: "pages" },
  { id: "farms", internal: "/farmy-fotowoltaiczne/", nav: "main", ready: false, sitemap: "pages" },
  { id: "special", internal: "/rozwiazania-specjalne/", nav: "main", ready: false, sitemap: "pages" },
  { id: "wholesale", internal: "/hurt-i-dystrybucja/", nav: "main", ready: false, sitemap: "pages" },
  { id: "tools", internal: "/narzedzia/", nav: "main", ready: false, sitemap: "tools" },
  {
    id: "docs",
    internal: "/certyfikaty-i-dokumenty/",
    slugs: {
      en: "/datasheets-and-certificates/",
      de: "/datenblaetter-und-zertifikate/",
      it: "/schede-tecniche-e-certificati/",
      fr: "/fiches-techniques-et-certificats/",
      es: "/fichas-tecnicas-y-certificados/",
      ro: "/fise-tehnice-si-certificate/",
      hr: "/tehnicki-listovi-i-certifikati/",
      hu: "/adatlapok-es-tanusitvanyok/",
      uk: "/tekhnichni-dani-ta-sertyfikaty/",
    },
    nav: "main",
    ready: true,
    sitemap: "pages",
  },
  { id: "about", internal: "/o-amerisolar/", nav: "footer", ready: false, sitemap: "pages" },
  {
    id: "rfq",
    internal: "/zapytanie-ofertowe/",
    slugs: {
      en: "/request-a-quote/",
      de: "/angebot-anfordern/",
      it: "/richiesta-preventivo/",
      fr: "/demande-de-devis/",
      es: "/solicitar-presupuesto/",
      ro: "/cerere-oferta/",
      hr: "/zahtjev-za-ponudu/",
      hu: "/ajanlatkeres/",
      uk: "/zapyt-tsiny/",
    },
    ready: true,
    sitemap: "pages",
  },
  { id: "contact", internal: "/kontakt/", nav: "footer", ready: false, sitemap: "pages" },
  { id: "privacy", internal: "/polityka-prywatnosci/", nav: "footer", ready: false, sitemap: "pages" },
];

const byId = Object.fromEntries(routes.map((r) => [r.id, r])) as Record<RouteId, RouteEntry>;

export function isReady(id: RouteId): boolean {
  return byId[id].ready;
}

/** Lokalny slug trasy (bez basePath), np. "/solar-panels/". */
export function localPath(lang: Lang, id: RouteId, sub?: string): string {
  const r = byId[id];
  const base = r.slugs?.[lang] ?? r.internal;
  return sub ? `${base}${sub}/` : base;
}

/** Link wewnętrzny w serwisie (z basePath), np. "/de/solarmodule/as-8m132n-bhc/". */
export function href(site: Site, id: RouteId, sub?: string): string {
  return `${site.basePath}${localPath(site.lang, id, sub)}`;
}

/** Link do produktu w serwisie. */
export const productHref = (site: Site, slug: string) => href(site, "catalog", slug);

/** Link do formularza z prefillem modelu (?model=). */
export function rfqHref(site: Site, model?: string): string {
  const base = href(site, "rfq");
  return model ? `${base}?model=${encodeURIComponent(model)}` : base;
}

/**
 * Lokalna ścieżka (bez basePath) → wewnętrzna (folder w app/[site]/).
 * Zwraca null, gdy pierwszy segment to polski slug w serwisie innego języka (unikamy duplikatów).
 */
export function toInternal(lang: Lang, path: string): string | null {
  if (path === "/" || path === "") return "/";
  for (const r of routes) {
    if (r.internal === "/") continue;
    const local = r.slugs?.[lang] ?? r.internal;
    if (path === local.slice(0, -1) || path.startsWith(local)) {
      return r.internal + path.slice(local.length);
    }
    if (
      lang !== "pl" &&
      r.slugs?.[lang] &&
      (path === r.internal.slice(0, -1) || path.startsWith(r.internal))
    ) {
      return null;
    }
  }
  return path;
}

/** Odpowiedniki trasy we wszystkich serwisach (hreflang). Klucz = serwis. */
export function alternatesFor(allSites: Site[], id: RouteId, sub?: string): Record<string, string> {
  return Object.fromEntries(allSites.map((s) => [s.key, localPath(s.lang, id, sub)]));
}
