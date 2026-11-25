// apps/web/lib/documents.ts
// Rejestr plików do pobrania (CLAUDE.md §4: /certyfikaty-i-dokumenty/).
// Karty katalogowe producenta w wersji EN, ze stopki usunięto dane kontaktowe producenta
// (www i e-mail) — zgoda producenta na publikację: patrz docs/open-questions.md.
// Klucz = slug produktu z data/products.json.

export type DatasheetFile = {
  /** Ścieżka publiczna (apps/web/public). */
  href: string;
  /** Wersja z nagłówka/stopki karty producenta. */
  version: string;
  language: "EN";
  sizeBytes: number;
};

const base = "/dokumenty/karty-katalogowe";

export const datasheets: Record<string, DatasheetFile> = {
  "as-7m108n-bhc": {
    href: `${base}/as-7m108n-bhc.pdf`,
    version: "EN-V1.0-2024",
    language: "EN",
    sizeBytes: 885914,
  },
  "as-7m120n-hc": {
    href: `${base}/as-7m120n-hc.pdf`,
    version: "EN-V1.0-2024",
    language: "EN",
    sizeBytes: 997715,
  },
  "as-7m120n-bhc": {
    href: `${base}/as-7m120n-bhc.pdf`,
    version: "EN-V1.0-2024",
    language: "EN",
    sizeBytes: 1032632,
  },
  "as-7m144n-hc": {
    href: `${base}/as-7m144n-hc.pdf`,
    version: "EN-V1.0-2024",
    language: "EN",
    sizeBytes: 1008181,
  },
  "as-8m132n-bhc": {
    href: `${base}/as-8m132n-bhc.pdf`,
    version: "EN-V1.0-2024",
    language: "EN",
    sizeBytes: 1017888,
  },
  "as-7m144nfl-hc-black": {
    href: `${base}/as-7m144nfl-hc-black.pdf`,
    version: "EN-V1.0-2025",
    language: "EN",
    sizeBytes: 775644,
  },
  "as-7m132fl-hc": {
    href: `${base}/as-7m132fl-hc.pdf`,
    version: "EN-V1.0-2025",
    language: "EN",
    sizeBytes: 1302007,
  },
};

export function getDatasheet(slug: string): DatasheetFile | undefined {
  return datasheets[slug];
}

/** Rozmiar pliku po polsku, np. „0,9 MB”. */
export function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toLocaleString("pl-PL", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MB`;
}
