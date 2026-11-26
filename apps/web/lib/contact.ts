// apps/web/lib/contact.ts
// Szybki kontakt mailowy zamiast formularza: link mailto z gotowym tematem i szablonem
// treści (model, ilość z kalkulatora). Czysta funkcja — działa w komponentach serwerowych
// i klienckich.

export type QuoteMailOptions = {
  model?: string;
  containers?: number;
  kwp?: number;
  /** Własny temat zamiast domyślnego „Zapytanie o cenę…”. */
  subject?: string;
};

export function quoteMailto(email: string, o: QuoteMailOptions = {}): string {
  const subject = o.subject ?? (o.model ? `Zapytanie o cenę: ${o.model}` : "Zapytanie o cenę kontenerową");
  const qty =
    o.containers !== undefined
      ? `${o.containers} × 40'HQ${o.kwp !== undefined ? ` (ok. ${o.kwp} kWp)` : ""}`
      : "";
  const body = [
    "Dzień dobry,",
    "",
    `proszę o ofertę na moduły ${o.model ?? "Amerisolar"}.`,
    "",
    `Ilość (kWp lub liczba kontenerów): ${qty}`,
    "Miejsce dostawy: ",
    "Termin: ",
    "Firma / NIP: ",
    "Telefon: ",
    "",
    "Pozdrawiam",
  ].join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
