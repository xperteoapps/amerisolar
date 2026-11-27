# ADR 0002: Serwisy wielojęzyczne — domeny, adresy i słowniki

Data: 2026-11-27 · Status: przyjęta

## Kontekst

Klient prowadzi sprzedaż w PL, DE, HR, RO, UA, HU, IT, FR, ES (umowa z producentem obejmuje te kraje).
Docelowo każdy kraj ma własną domenę. Domeny amerisolar.de / .it / .fr / .co.uk są zajęte (sprawdzone 26.11.2026).

## Decyzja

- 10 serwisów w `apps/web/lib/sites.ts`:

  | Serwis       | Język        | Adres                                              |
  | ------------ | ------------ | -------------------------------------------------- |
  | pl           | pl           | amerisolar.pl                                      |
  | en           | en           | amerisolar.eu                                      |
  | de / it / fr | de / it / fr | amerisolar.eu/de, /it, /fr (domena krajowa zajęta) |
  | es           | es           | amerisolar.es                                      |
  | ro           | ro           | amerisolar.ro                                      |
  | hr           | hr           | amerisolar.hr                                      |
  | hu           | hu           | amerisolar.hu                                      |
  | ua           | uk           | amerisolar.com.ua                                  |

- `basePath` serwisu na wspólnej domenie (amerisolar.eu/de). Proxy wybiera serwis z najdłuższym pasującym prefiksem.
- Przetłumaczone slugi (SEO): `lib/routes.ts` → `slugs`. Foldery w `app/[site]/` mają polskie nazwy; proxy tłumaczy lokalny slug na wewnętrzny. Polski slug w serwisie innego języka → 404 (bez duplikatów treści).
- Teksty: `apps/web/messages/{pl,en,…}.ts`, typ `Messages = typeof pl`. Jeden język = jeden rynek, więc treści specyficzne dla rynku (referencje MW, warunki zimowe, magazyn w kraju) są w słowniku.
- Liczby i daty: `lib/i18n.ts → formatter(site.locale)`; odmiana przez liczby: `Intl.PluralRules`.
- hreflang: każda strona wskazuje odpowiedniki we wszystkich serwisach + `x-default` → amerisolar.eu.
- Przełącznik serwisów linkuje `/{kod}/`: na domenie produkcyjnej proxy przekierowuje 308 na domenę serwisu; na podglądzie (`*.vercel.app`, localhost) wybiera serwis i zapamiętuje go w cookie `preview_site`.
- Wszystkie serwisy `isLive: false` do czasu natywnej redakcji tłumaczeń (CLAUDE.md §5.2, §11).

## Konsekwencje

- Nowy język: słownik `messages/xx.ts` + wpis w `sites.ts` + slugi w `routes.ts` + domena w Vercel.
- Nowa strona: folder w `app/[site]/`, wpis w `routes.ts` (z lokalnymi slugami), teksty we wszystkich słownikach (TypeScript wymusza kompletność).
- Mail z formularza do działu sprzedaży zawsze po polsku, z oznaczeniem języka serwisu w temacie.
