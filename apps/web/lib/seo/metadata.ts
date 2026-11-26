// apps/web/lib/seo/metadata.ts
// Generator metadata wg CLAUDE.md §5.1: unikalny title ≤60, description ≤155,
// canonical, og:*, hreflang + x-default, noindex dla serwisów przed startem.
import type { Metadata } from "next";
import { localPath, type RouteId } from "../routes";
import { absoluteUrl, sites, X_DEFAULT_SITE, type Site, type SiteKey } from "../sites";

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

export type PageSeo = {
  site: Site;
  /** Trasa strony — z niej liczymy lokalną ścieżkę, canonical i hreflang wszystkich serwisów. */
  route: { id: RouteId; sub?: string };
  title: string;
  description: string;
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

  const { id, sub } = seo.route;
  const canonical = absoluteUrl(seo.site, localPath(seo.site.lang, id, sub));
  // hreflang: odpowiednik strony w każdym serwisie + x-default (serwis EU po angielsku).
  const languages: Record<string, string> = {};
  for (const alt of Object.values(sites))
    languages[alt.hreflang] = absoluteUrl(alt, localPath(alt.lang, id, sub));
  const xd = sites[X_DEFAULT_SITE as SiteKey];
  languages["x-default"] = absoluteUrl(xd, localPath(xd.lang, id, sub));

  const index = seo.site.isLive && !seo.noindex;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages,
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
