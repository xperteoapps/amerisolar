// apps/web/lib/seo/metadata.ts
// Generator metadata wg CLAUDE.md §5.1: unikalny title ≤60, description ≤155,
// canonical, og:*, hreflang + x-default, noindex dla serwisów przed startem.
import type { Metadata } from "next";
import { absoluteUrl, sites, type Site, type SiteKey } from "../sites";

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

export type PageSeo = {
  site: Site;
  /** Ścieżka bez domeny, z końcowym ukośnikiem, np. "/panele-fotowoltaiczne/". */
  path: string;
  title: string;
  description: string;
  /** Odpowiedniki strony w innych krajach (hreflang). Klucz = serwis. */
  alternates?: Partial<Record<SiteKey, string>>;
  /** Serwis/ścieżka dla x-default (domyślnie: brak, gdy jest tylko jeden kraj). */
  xDefault?: { site: SiteKey; path: string };
  ogImage?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

function assertLength(label: string, value: string, max: number) {
  if (value.length > max) {
    throw new Error(`${label} ma ${value.length} znaków (limit ${max}): "${value}"`);
  }
}

export function buildMetadata(seo: PageSeo): Metadata {
  assertLength("title", seo.title, TITLE_MAX);
  assertLength("description", seo.description, DESCRIPTION_MAX);

  const canonical = absoluteUrl(seo.site, seo.path);
  const languages: Record<string, string> = {};
  for (const [key, path] of Object.entries(seo.alternates ?? {})) {
    const alt = sites[key as SiteKey];
    if (alt && path) languages[alt.locale] = absoluteUrl(alt, path);
  }
  if (Object.keys(languages).length > 0) {
    languages[seo.site.locale] = canonical;
    if (seo.xDefault) languages["x-default"] = absoluteUrl(sites[seo.xDefault.site], seo.xDefault.path);
  }

  const index = seo.site.isLive && !seo.noindex;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    openGraph: {
      type: seo.type ?? "website",
      url: canonical,
      title: seo.title,
      description: seo.description,
      locale: seo.site.locale.replace("-", "_"),
      ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
    },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
  };
}
