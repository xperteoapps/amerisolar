// apps/web/lib/sites.ts
// Multi-tenant po domenie (CLAUDE.md §2): host → site → locale.
// Konfiguracja trzymana w kodzie, bo proxy musi działać bez zapytań do bazy.
// Tabela `sites` w Supabase jest jej lustrem (dane kontaktowe, is_live).

export type SiteKey = "pl";

export type Site = {
  key: SiteKey;
  countryCode: string;
  locale: string; // BCP 47, np. "pl-PL"
  htmlLang: string; // atrybut <html lang>
  currency: string;
  /** Domena produkcyjna (kanoniczna). */
  domain: string;
  /** Hosty przekierowywane 308 na domenę kanoniczną. */
  aliases: string[];
  /**
   * false => cała witryna ma noindex (metadata + X-Robots-Tag + robots.txt Disallow).
   * Przełączamy dopiero w Fazie 4 (CLAUDE.md §11).
   */
  isLive: boolean;
  company: {
    name: string | null; // TODO(klient): pełna nazwa firmy partnera
    vatId: string | null; // TODO(klient): NIP
    address: string | null; // TODO(klient)
    phone: string | null; // TODO(klient)
    email: string | null; // e-mail kontaktowy (PL: office@amerisolar.pl, 26.11.2026)
  };
};

export const sites: Record<SiteKey, Site> = {
  pl: {
    key: "pl",
    countryCode: "PL",
    locale: "pl-PL",
    htmlLang: "pl",
    currency: "PLN",
    domain: "amerisolar.pl",
    aliases: ["www.amerisolar.pl"],
    isLive: false,
    company: { name: null, vatId: null, address: null, phone: null, email: "office@amerisolar.pl" },
  },
};

export const siteKeys = Object.keys(sites) as SiteKey[];

/** Serwis używany dla hostów bez mapowania (localhost, *.vercel.app, podglądy PR). */
export const DEFAULT_SITE: SiteKey = "pl";

export function isSiteKey(value: string): value is SiteKey {
  return value in sites;
}

export function getSite(key: string): Site {
  if (!isSiteKey(key)) throw new Error(`Nieznany serwis: ${key}`);
  return sites[key];
}

export type HostResolution =
  | { kind: "site"; site: Site; production: true }
  | { kind: "alias"; site: Site }
  | { kind: "fallback"; site: Site; production: false };

/** Rozpoznaje serwis po nagłówku Host (bez portu). */
export function resolveHost(rawHost: string | null): HostResolution {
  const host = (rawHost ?? "").toLowerCase().replace(/:\d+$/, "");
  for (const site of Object.values(sites)) {
    if (host === site.domain) return { kind: "site", site, production: true };
    if (site.aliases.includes(host)) return { kind: "alias", site };
  }
  return { kind: "fallback", site: sites[DEFAULT_SITE], production: false };
}

/** Bezwzględny URL kanoniczny dla ścieżki w danym serwisie. */
export function absoluteUrl(site: Site, path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `https://${site.domain}${p}`;
}
