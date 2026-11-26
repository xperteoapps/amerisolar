# Otwarte pytania (TODO(klient))

Źródło: CLAUDE.md §6 i §12. Odhaczamy po otrzymaniu odpowiedzi na piśmie.

## Dostępy i infrastruktura

- [ ] Supabase: limit 2 aktywnych darmowych projektów — wstrzymać jeden projekt albo przejść na plan Pro (zalecane dla produkcji z leadami).
- [ ] Vercel: konto na planie Hobby (tylko użytek niekomercyjny) — przejście na Pro przed startem produkcji.
- [ ] Vercel: konektor nie ma dostępu do projektu `prj_Q67U3RvEc2blBQvfLjyS2cQwkfxS` (amerisolar) — połączyć repo ręcznie lub nadać dostęp.
- [ ] Klucze: Resend, Cloudflare Turnstile, adresy `LEAD_NOTIFY_EMAILS`.

## Firma i marka

- [ ] Status prawny wobec Amerisolar, zgoda na użycie znaku i domeny amerisolar.pl (CLAUDE.md §9).
- [x] Zgoda producenta na publikację kart katalogowych bez danych kontaktowych producenta w stopce: potwierdzona przez klienta 2026-11-25 (dołączyć kopię zgody na piśmie). Wersje bez kontaktu: `apps/web/public/dokumenty/*-karta-katalogowa.pdf`; oryginały: `assets/source/`.
- [ ] Dane firmy: nazwa, NIP, KRS, adres, telefon, e-mail handlowy, osoby do sekcji „Zespół”.
- [ ] Logo Amerisolar (SVG) i kolory marki — obecnie tokeny tymczasowe w `packages/ui/src/tokens.css`.

## Oferta

- [x] Magazyn w PL: brak — sprzedaż wyłącznie kontenerowa, bezpośrednio od producenta (21.11.2026).
- [ ] Incoterms dla klientów PL i minimalne zamówienie (kontener 20' czy 40'HQ).
- [ ] Polityka cenowa (domyślnie „Cena na zapytanie”); aktualny cennik po 30.10.2026.

## Produkty (blokują publikację faktów)

- [ ] Certyfikaty IEC/TÜV obejmujące pełny zakres mocy: AS-7M120N-HC 465–495 W, AS-7M144N-HC 560–595 W, AS-7M132FL-HC 480 W (obecne certyfikaty: tylko 500 W / 600 W / do 475 W).
- [ ] Klasyfikacja ogniowa dla AS-7M144NFL-HC i AS-7M132FL-HC (na dysku są tylko dla innych modeli).
- [ ] AS-8M132N-BHC: 730 W w cenniku vs 720 W w karcie.
- [ ] AS-7M120N-BHC: tabela NOCT (5 kolumn dla 8 klas mocy).
- [ ] Nazewnictwo „AS-FL7M…” (cennik) vs „AS-7M…FL” (karty).
- [ ] Karty modeli z cennika bez kart (AS-7M132N-HC 525 W, AS-7M144N-BHC, AS-7M132N-BHCR 650 W i in.).
- [ ] AS-7M108N-BHC: konstrukcja tyłu (szkło vs folia transparentna).
- [ ] Linia elastyczna: klej i podłoża, testy obciążeń dynamicznych/cyklicznych i EL po gięciu, klasyfikacja ogniowa w układzie dachowym, zasady gwarancji przy klejeniu, zdjęcia montażu.
- [ ] Prawdziwe zdjęcia produktów, fabryki i polskich realizacji + zgody.

## Wysyłka zapytań e-mailem (26.11.2026)

- [ ] Konto Resend + weryfikacja domeny `amerisolar.pl` (rekordy DNS SPF/DKIM u rejestratora domeny).
- [ ] Zmienne w Vercel (Production + Preview): `RESEND_API_KEY`, `LEAD_NOTIFY_EMAILS=office@amerisolar.pl`, `LEAD_FROM_EMAIL="Formularz amerisolar.pl <formularz@amerisolar.pl>"`. Bez nich formularz pokazuje komunikat „napisz bezpośrednio na office@amerisolar.pl”.
- [x] Tłumaczenia serwisu: EN, DE, HR, RO, UK, HU, IT, FR, ES — gotowe w kodzie (ADR 0002), podgląd pod `/{kraj}/` na adresach preview. Domeny: EN/DE/IT/FR na wspólnej `amerisolar.eu` (`/`, `/de/`, `/it/`, `/fr/`), ES `amerisolar.es`, RO `amerisolar.ro`, HR `amerisolar.hr`, HU `amerisolar.hu`, UA `amerisolar.com.ua`.
- [ ] Zakup i podpięcie w Vercel domen: amerisolar.eu, .es, .ro, .hr, .hu, .com.ua.
- [ ] Natywna redakcja każdego języka przed włączeniem `isLive` (tłumaczenia wykonane z pomocą AI).
- [ ] Dane prawne podmiotu (administrator danych w formularzu: `TODO(klient): nazwa firmy`) — dotyczy wszystkich języków.
