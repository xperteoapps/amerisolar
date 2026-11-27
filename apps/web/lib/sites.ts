// apps/web/lib/sites.ts
// Multi-tenant po domenie (CLAUDE.md §2, ADR 0001/0002): host (+ prefiks ścieżki) → serwis → język.
// Konfiguracja trzymana w kodzie, bo proxy musi działać bez zapytań do bazy.
// Tabela `sites` w Supabase jest jej lustrem (dane kontaktowe, is_live).

export const siteKeys = ["pl", "en", "de", "it", "fr", "es", "ro", "hr", "hu", "ua"] as const;
export type SiteKey = (typeof siteKeys)[number];

/** Język treści (słownik w apps/web/messages/). */
export type Lang = "pl" | "en" | "de" | "it" | "fr" | "es" | "ro" | "hr" | "hu" | "uk";

export type Site = {
  key: SiteKey;
  lang: Lang;
  /** Kraj docelowy (ISO 3166-1) — null dla serwisu ogólnoeuropejskiego. */
  countryCode: string | null;
  /** Etykieta w przełączniku serwisów, np. „PL”, „EU”. */
  switchLabel: string;
  /** Locale do formatowania liczb i dat (Intl). */
  locale: string;
  /** Wartość hreflang. */
  hreflang: string;
  htmlLang: string;
  currency: string;
  /** Domena produkcyjna (kanoniczna). */
  domain: string;
  /** Prefiks ścieżki na wspólnej domenie (np. "/de" na amerisolar.eu); "" = cała domena. */
  basePath: string;
  /** Hosty przekierowywane 308 na domenę kanoniczną. */
  aliases: string[];
  /**
   * false => cała witryna ma noindex (metadata + X-Robots-Tag + robots.txt Disallow).
   * Przełączamy dopiero w Fazie 4 (CLAUDE.md §11), po natywnej redakcji tłumaczenia.
   */
  isLive: boolean;
  company: {
    name: string | null; // TODO(klient): pełna nazwa firmy partnera
    vatId: string | null; // TODO(klient): NIP
    address: string | null; // TODO(klient)
    phone: string | null; // TODO(klient)
    email: string | null; // e-mail kontaktowy (26.11.2026: office@amerisolar.pl dla wszystkich serwisów)
  };
};

const company = (): Site["company"] => ({
  name: null,
  vatId: null,
  address: null,
  phone: null,
  email: "office@amerisolar.pl",
});

const EU = "amerisolar.eu";

export const sites: Record<SiteKey, Site> = {
  pl: {
    key: "pl",
    lang: "pl",
    countryCode: "PL",
    switchLabel: "PL",
    locale: "pl-PL",
    hreflang: "pl-PL",
    htmlLang: "pl",
    currency: "PLN",
    domain: "amerisolar.pl",
    basePath: "",
    aliases: ["www.amerisolar.pl"],
    isLive: true,
    company: company(),
  },
  en: {
    key: "en",
    lang: "en",
    countryCode: null,
    switchLabel: "EN",
    locale: "en-GB",
    hreflang: "en",
    htmlLang: "en",
    currency: "EUR",
    domain: EU,
    basePath: "",
    aliases: [`www.${EU}`],
    isLive: false,
    company: company(),
  },
  de: {
    key: "de",
    lang: "de",
    countryCode: "DE",
    switchLabel: "DE",
    locale: "de-DE",
    hreflang: "de-DE",
    htmlLang: "de",
    currency: "EUR",
    domain: EU,
    basePath: "/de",
    aliases: [],
    isLive: false,
    company: company(),
  },
  it: {
    key: "it",
    lang: "it",
    countryCode: "IT",
    switchLabel: "IT",
    locale: "it-IT",
    hreflang: "it-IT",
    htmlLang: "it",
    currency: "EUR",
    domain: EU,
    basePath: "/it",
    aliases: [],
    isLive: false,
    company: company(),
  },
  fr: {
    key: "fr",
    lang: "fr",
    countryCode: "FR",
    switchLabel: "FR",
    locale: "fr-FR",
    hreflang: "fr-FR",
    htmlLang: "fr",
    currency: "EUR",
    domain: EU,
    basePath: "/fr",
    aliases: [],
    isLive: false,
    company: company(),
  },
  es: {
    key: "es",
    lang: "es",
    countryCode: "ES",
    switchLabel: "ES",
    locale: "es-ES",
    hreflang: "es-ES",
    htmlLang: "es",
    currency: "EUR",
    domain: "amerisolar.es",
    basePath: "",
    aliases: ["www.amerisolar.es"],
    isLive: false,
    company: company(),
  },
  ro: {
    key: "ro",
    lang: "ro",
    countryCode: "RO",
    switchLabel: "RO",
    locale: "ro-RO",
    hreflang: "ro-RO",
    htmlLang: "ro",
    currency: "RON",
    domain: "amerisolar.ro",
    basePath: "",
    aliases: ["www.amerisolar.ro"],
    isLive: false,
    company: company(),
  },
  hr: {
    key: "hr",
    lang: "hr",
    countryCode: "HR",
    switchLabel: "HR",
    locale: "hr-HR",
    hreflang: "hr-HR",
    htmlLang: "hr",
    currency: "EUR",
    domain: "amerisolar.hr",
    basePath: "",
    aliases: ["www.amerisolar.hr"],
    isLive: false,
    company: company(),
  },
  hu: {
    key: "hu",
    lang: "hu",
    countryCode: "HU",
    switchLabel: "HU",
    locale: "hu-HU",
    hreflang: "hu-HU",
    htmlLang: "hu",
    currency: "HUF",
    domain: "amerisolar.hu",
    basePath: "",
    aliases: ["www.amerisolar.hu"],
    isLive: false,
    company: company(),
  },
  ua: {
    key: "ua",
    lang: "uk",
    countryCode: "UA",
    switchLabel: "UA",
    locale: "uk-UA",
    hreflang: "uk-UA",
    htmlLang: "uk",
    currency: "UAH",
    domain: "amerisolar.com.ua",
    basePath: "",
    aliases: ["www.amerisolar.com.ua"],
    isLive: false,
    company: company(),
  },
};

/** Serwis używany dla hostów bez mapowania (localhost, *.vercel.app, podglądy PR). */
export const DEFAULT_SITE: SiteKey = "pl";
/** x-default dla hreflang: serwis ogólnoeuropejski po angielsku. */
export const X_DEFAULT_SITE: SiteKey = "en";

export function isSiteKey(value: string): value is SiteKey {
  return (siteKeys as readonly string[]).includes(value);
}

export function getSite(key: string): Site {
  if (!isSiteKey(key)) throw new Error(`Nieznany serwis: ${key}`);
  return sites[key];
}

/** Bezwzględny URL dla ścieżki w danym serwisie (ścieżka BEZ basePath). */
export function absoluteUrl(site: Site, path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `https://${site.domain}${site.basePath}${p}`;
}

export type HostResolution =
  | { kind: "alias"; site: Site }
  | { kind: "site"; site: Site; production: true; rest: string }
  | { kind: "redirect"; url: string }
  | { kind: "fallback"; site: Site; production: false; rest: string; previewKey?: SiteKey };

const stripPrefix = (path: string, prefix: string) =>
  prefix && (path === prefix || path.startsWith(`${prefix}/`)) ? path.slice(prefix.length) || "/" : null;

/**
 * Rozpoznaje serwis po hoście i ścieżce.
 * - domena produkcyjna: serwis z najdłuższym pasującym basePath (amerisolar.eu/de/… → de);
 *   /{kod}/ innego serwisu → 308 na jego domenę (przełącznik języków działa wszędzie);
 * - host podglądowy: /{kod}/… wybiera serwis (zapamiętywany w cookie), bez prefiksu → cookie lub PL.
 */
export function resolveRequest(rawHost: string | null, pathname: string, cookieKey?: string): HostResolution {
  const host = (rawHost ?? "").toLowerCase().replace(/:\d+$/, "");
  const all = Object.values(sites);
  const alias = all.find((s) => s.aliases.includes(host));
  if (alias) return { kind: "alias", site: alias };

  const onDomain = all.filter((s) => s.domain === host).sort((a, b) => b.basePath.length - a.basePath.length);
  if (onDomain.length > 0) {
    for (const s of onDomain) {
      const rest = s.basePath ? stripPrefix(pathname, s.basePath) : pathname;
      if (rest !== null) {
        const switchTo = switchTarget(rest);
        if (switchTo) return { kind: "redirect", url: absoluteUrl(switchTo, "/") };
        return { kind: "site", site: s, production: true, rest };
      }
    }
  }

  // Podgląd: /{kod}/… → serwis; reszta ścieżki bez prefiksu i bez basePath.
  const first = pathname.split("/")[1] ?? "";
  if (isSiteKey(first)) {
    const s = sites[first];
    return {
      kind: "fallback",
      site: s,
      production: false,
      rest: stripPrefix(pathname, `/${first}`)!,
      previewKey: s.key,
    };
  }
  const s = cookieKey && isSiteKey(cookieKey) ? sites[cookieKey] : sites[DEFAULT_SITE];
  return { kind: "fallback", site: s, production: false, rest: pathname };
}

/** „/de/” na obcej domenie = przełącznik serwisu (tylko do serwisów uruchomionych — domena musi istnieć). */
function switchTarget(rest: string): Site | null {
  const m = /^\/([a-z]{2})\/?$/.exec(rest);
  return m && isSiteKey(m[1]!) && sites[m[1] as SiteKey].isLive ? sites[m[1] as SiteKey] : null;
}

/** Serwisy uruchomione (isLive): tylko one trafiają do hreflang i przełącznika języków. */
export const liveSites = (): Site[] => Object.values(sites).filter((s) => s.isLive);

/** Wszystkie hosty produkcyjne (do testów i dokumentacji). */
export const productionHosts = [...new Set(Object.values(sites).flatMap((s) => [s.domain, ...s.aliases]))];
