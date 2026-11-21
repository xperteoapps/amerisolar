# Instrukcje projektu: Amerisolar — sieć stron krajowych (start: Polska)

> Stałe instrukcje projektu. Każda sesja pracy nad projektem zaczyna się od przeczytania tego pliku oraz `docs/decisions/` i `docs/open-questions.md`.

## 0. Stan wdrożenia (aktualizuj przy zmianach)

| Zasób      | Wartość                                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domena PL  | `amerisolar.pl` (`www.` → 308)                                                                                                                              |
| Repo       | `xperteoapps/amerisolar`                                                                                                                                    |
| Vercel     | zespół `xperteoapps`, projekt `amerisolar` (`prj_Q67U3RvEc2blBQvfLjyS2cQwkfxS`), Root Directory `apps/web`                                                  |
| Supabase   | TODO: projekt do założenia (limit planu Free — patrz `docs/open-questions.md`)                                                                              |
| Next.js    | 16.4 — **`proxy.ts` zamiast `middleware.ts`** (zmiana nazwy w v16), Cache Components włączone. Dokumentacja wersji: `apps/web/node_modules/next/dist/docs/` |
| Indeksacja | wyłączona (`isLive: false` w `apps/web/lib/sites.ts`) do Fazy 4                                                                                             |

---

## 1. Cel biznesowy

Budujemy sieć stron krajowych promujących moduły fotowoltaiczne **Amerisolar** (Worldwide Energy and Manufacturing USA Co., Ltd.). Strony mają **ściągać ruch organiczny i zamieniać go na zapytania ofertowe (leady)**. Zaczynamy od Polski, potem kolejne kraje na tym samym kodzie.

**Model sprzedaży (decyzja klienta, 21.11.2026):** wyłącznie **ilości kontenerowe, bezpośrednio od producenta**. **Brak magazynu w Polsce** — nie oferujemy sprzedaży paletowej z magazynu; dane o paletach pokazujemy tylko jako informację o pakowaniu.

**Główna grupa docelowa (B2B, priorytet):**

1. Hurtownie i dystrybutorzy OZE.
2. Traderzy i importerzy kupujący duże wolumeny (wiele kontenerów).
3. Firmy montażowe i EPC realizujące duże ilości (dachy przemysłowe, farmy PV, moduły 600–720 W, bifacjalne, double glass).
4. Właściciele i zarządcy obiektów, na których klasyczny moduł się nie sprawdza: dachy o niskiej nośności, obiekty z drganiami i obciążeniem dynamicznym (stadiony, hale sportowe, areny, obiekty przemysłowe z maszynami), dachy łukowe. Dla nich jest **linia elastyczna**: 2 mm, ok. 3 kg/m², montaż klejony bez przewiertów. Szczegóły w §4A.

**B2C:** nie jest grupą docelową (brak sprzedaży detalicznej i magazynu w PL).

Uzasadnienie: cennik producenta jest kontenerowy (FOB, minimum 1×40'). Polski rynek prosumencki zwolnił po zakończeniu programu Mój Prąd. Wzrost mocy PV w Polsce napędzają głównie instalacje powyżej 1 MW.

**KPI:** liczba kwalifikowanych leadów miesięcznie (kWp lub kontenery w zapytaniu), konwersja RFQ, ruch organiczny niebrandowy, widoczność TOP10 na frazy transakcyjne, Core Web Vitals „Good” na 100% URL-i.

---

## 2. Stack i zasady techniczne

| Warstwa   | Technologia                                            | Zasady                                                                                        |
| --------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Kod       | **GitHub**, monorepo                                   | `main` = produkcja, każda zmiana przez PR, conventional commits                               |
| Framework | **Next.js 16 (App Router) + TypeScript strict**        | SSG/ISR dla treści, Server Components domyślnie, minimum JS po stronie klienta                |
| UI        | Tailwind CSS + shadcn/ui                               | Własny design system Amerisolar (tokeny w `packages/ui`)                                      |
| Hosting   | **Vercel**                                             | Preview deploy na każdy PR, wiele domen w jednym projekcie, Vercel Analytics + Speed Insights |
| Dane      | **Supabase** (Postgres, Storage, Auth, Edge Functions) | Migracje tylko w `supabase/migrations`, RLS włączone na każdej tabeli                         |
| Media AI  | **Higgsfield** (API lub MCP)                           | Tylko obrazy i wideo kontekstowe. Nigdy „realizacje”. Zasady w sekcji 8                       |
| E-mail    | Resend (lub SMTP klienta)                              | Powiadomienia o leadach + autoresponder                                                       |
| Antyspam  | Cloudflare Turnstile + honeypot + rate limit           | Na każdym formularzu                                                                          |

**Architektura wielokrajowa:** jedna aplikacja Next.js, **multi-tenant po domenie**. `proxy.ts` (dawniej `middleware.ts`) mapuje host na `site` (kraj, język, waluta, dane kontaktowe) i robi rewrite na segment `app/[site]/…` (ADR 0001). Każdy kraj dostaje własną domenę krajową (ccTLD) albo subdomenę, zależnie od decyzji z sekcji 12. Treść, produkty i ustawienia SEO są w Supabase, z kluczem `site_id` + `locale`. Kod jest wspólny, a treść w 100% lokalna.

### Struktura repozytorium

```
/apps/web                 # Next.js — wszystkie strony krajowe
  /proxy.ts               # host → site (rewrite na /[site]/…), noindex dla podglądów
  /app/[site]/…           # routing, layouty, metadata
  /lib/sites.ts           # rozpoznawanie site po domenie
  /lib/routes.ts          # rejestr adresów z §4 (nawigacja i sitemap tylko z gotowych)
  /lib/seo/               # generatory metadata, JSON-LD, hreflang
  /components/            # sekcje, karty produktów, formularze, kalkulatory
/packages/ui              # design system
/packages/content         # typy, walidacja (zod), helpery treści
/supabase/migrations      # SQL
/supabase/functions       # edge functions (lead-notify, lead-score)
/data/products.json       # ŹRÓDŁO PRAWDY parametrów (seed do Supabase)
/docs/                    # keyword map, briefy treści, decyzje (ADR)
/assets/source/           # oryginalne PDF-y producenta
/scripts/                 # m.in. check-products.mjs (strażnik faktów w CI)
```

### Środowiska i sekrety

- `.env.local` nigdy w repo. Sekrety trzymamy w Vercel Env + Supabase.
- Zmienne: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (tylko serwer), `RESEND_API_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET`, `HF_API_KEY_ID`, `HF_API_KEY_SECRET`, `LEAD_NOTIFY_EMAILS`.
- `service_role` nigdy nie trafia do klienta.

---

## 3. Model danych (Supabase)

Minimalny schemat, który rozszerzamy migracjami (stan bazowy: `supabase/migrations/20261120000001_init_schema.sql`):

- `sites` (id, country_code, default_locale, domain, currency, company_name, phone, email, address, vat_id, is_live)
- `products` (id, model, slug, family, bifacial, cells, dimensions, weight, warranty, packaging, status). Seed z `data/products.json`
- `product_variants` (product_id, power_w, efficiency, voc, isc, vmp, imp, noct_pmax)
- `product_i18n` (product_id, locale, name, short_desc, long_desc, use_cases, faq jsonb, meta_title, meta_description)
- `certificates` (id, number, body, standards[], valid_until, covered_models[], file_url)
- `documents` (product_id, type: datasheet|certificate|manual|warranty, locale, file_url, version)
- `pages` (strony i artykuły w jednej tabeli z polem `type`: site_id, locale, slug, type, title, body_mdx, meta, schema_type, status, published_at, updated_at, author_id, reviewed_by)
- `authors` (imię, rola, bio, zdjęcie: prawdziwe osoby, E-E-A-T)
- `faqs`, `glossary_terms`, `redirects` (from, to, code), `keywords` (fraza, klaster, intencja, docelowy URL, wolumen, KD)
- `leads` (site_id, type: installer|epc|distributor|business|homeowner, company, nip, name, email, phone, product_interest[], quantity_kwp, quantity_containers, delivery_location, timeline, message, utm_*, landing_page, consent_marketing, consent_ts, score, status)
- `lead_events` (lead_id, event, payload, ts)
- `media_assets` (url, source: photo|higgsfield|manufacturer, prompt, model, alt_pl, license_note, used_on[])

**RLS:** publiczny `select` tylko dla rekordów `status='published'`. `leads` nie mają odczytu publicznego, a zapis idzie przez Server Action z walidacją zod + Turnstile. Po zapisie edge function `lead-notify` wysyła e-mail do handlowca i autoresponder do klienta, a `lead-score` liczy scoring (kWp, typ firmy, termin).

---

## 4. Architektura informacji: Polska (`pl-PL`)

Slugi po polsku, bez polskich znaków, małymi literami, z myślnikami. Maksymalnie 3 poziomy.

```
/                                         Strona główna (B2B, H1: „Panele fotowoltaiczne Amerisolar w hurcie — kontenery od producenta”)
/panele-fotowoltaiczne/                   Katalog z filtrami (moc, technologia, bifacjalne, elastyczne, kolor ramy)
  /panele-fotowoltaiczne/topcon/          Kategorie = landing pages pod klastry fraz
  /panele-fotowoltaiczne/bifacjalne/
  /panele-fotowoltaiczne/elastyczne/
  /panele-fotowoltaiczne/full-black/
  /panele-fotowoltaiczne/na-farmy/        (600–720 W)
  /panele-fotowoltaiczne/[model-slug]/    Karta produktu (np. as-8m132n-bhc)
/dla-instalatorow/                        Warunki współpracy, palety, logistyka, wsparcie techniczne
/farmy-fotowoltaiczne/                    Oferta dla EPC/deweloperów, bankowalność, dokumentacja
/hurt-i-dystrybucja/                      Dla hurtowni
/rozwiazania-specjalne/                   HUB linii elastycznej (patrz §4A)
  /rozwiazania-specjalne/dachy-o-niskiej-nosnosci/
  /rozwiazania-specjalne/obiekty-z-drganiami/          (stadiony, hale sportowe, areny, przemysł)
  /rozwiazania-specjalne/stadiony-i-hale-sportowe/
  /rozwiazania-specjalne/dachy-lukowe-i-zakrzywione/
  /rozwiazania-specjalne/dachy-membranowe/             (PVC/TPO/EPDM — po potwierdzeniu kompatybilności kleju)
  /rozwiazania-specjalne/kwalifikacja-obiektu/         Formularz oceny obiektu (RFQ+)
/narzedzia/
  /narzedzia/kalkulator-stringow/         Dobór liczby modułów w stringu (Voc przy -25°C, Vmp przy +70°C)
  /narzedzia/kalkulator-kontenera/        Ile kWp mieści paleta / 20' / 40'HQ dla danego modelu
  /narzedzia/zysk-bifacjalny/             Moc z tyłu modułu przy albedo 10–30%
  /narzedzia/porownywarka/                Porównanie 2–3 modeli
  /narzedzia/kalkulator-obciazenia-dachu/ kg/m² i łączna masa: moduł elastyczny vs klasyczny (+ konstrukcja/balast jako parametr)
/certyfikaty-i-dokumenty/                 Karty katalogowe PDF, certyfikaty, gwarancja
/o-amerisolar/                            Historia, fabryki, moce produkcyjne, referencje
/referencje/                              Projekty (tylko prawdziwe, z liczbami z katalogu)
/baza-wiedzy/                             Blog / poradniki (klastry tematyczne)
  /baza-wiedzy/[slug]/
/slownik/[termin]/                        Słownik pojęć (TOPCon, NOCT, PID, LID, bifacjalność…)
/zapytanie-ofertowe/                      Główny formularz RFQ
/kontakt/
/polityka-prywatnosci/  /cookies/  /regulamin/
```

**CTA na każdej stronie:** „Zapytaj o cenę kontenerową” (główne, prefill modelu `?model=`), „Pobierz kartę katalogową” (lead magnet: PDF po podaniu e-maila jest opcjonalny, bo karty muszą być też dostępne bez bramki), „Porozmawiaj z inżynierem”. Na mobile przycisk „Zapytaj o ofertę” jest przyklejony do dołu ekranu.

**Formularz RFQ (krokowy):** 1) kim jesteś (hurtownia / trader / firma montażowa / EPC / firma), 2) model(e) i ilość (kWp lub palety lub kontenery), 3) miejsce dostawy i termin, 4) kontakt + NIP (opcjonalnie) + zgody RODO. Zapisujemy UTM i landing page.

---

## 4A. Linia elastyczna: filar „Rozwiązania specjalne”

### Pozycja na stronie

Linia elastyczna to **drugi filar oferty, a nie produkt numer 1**. Strona główna i nawigacja nadal prowadzą przede wszystkim do modułów TOPCon dla instalatorów i farm. Linia elastyczna dostaje jednak wyraźne, stałe miejsce:

| Miejsce                   | Jak                                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Menu główne               | Pozycja „Rozwiązania specjalne” (4.–5. w kolejności, po Panelach, Instalatorach i Farmach) z mega-menu: Dachy o niskiej nośności · Obiekty z drganiami · Stadiony i hale sportowe · Dachy łukowe |
| Strona główna             | Jedna pełnej szerokości sekcja (3. lub 4. od góry): „Dach nie uniesie paneli? Konstrukcja pracuje? Jest na to rozwiązanie”, 3 liczby (ok. 3 kg/m², 2 mm, 0 przewiertów) i 2 CTA                  |
| Katalog                   | Filtr „Elastyczne” + baner kontekstowy w kategorii                                                                                                                                               |
| Karty modułów klasycznych | Sekcja „Twój dach ma ograniczoną nośność?” z linkiem do hubu (cross-sell, bez przerywania głównej ścieżki)                                                                                       |
| Poradniki                 | Klaster treści (patrz niżej) z linkami do hubu                                                                                                                                                   |
| Udział w treści           | Ok. 20–25% stron i artykułów. Nie więcej, żeby nie rozmyć głównej oferty                                                                                                                         |

### Dane, na których opieramy komunikację (z `products.json`)

| Model                          | Moc       | Masa    | Masa na m²                              | Grubość | Technologia                 | Gwarancja                   |
| ------------------------------ | --------- | ------- | --------------------------------------- | ------- | --------------------------- | --------------------------- |
| AS-7M144NFL-HC Black           | 550–575 W | 8,0 kg  | ok. 3,0 kg/m²                           | 2 mm    | TOPCon, sprawność do 21,60% | 12 lat produkt / 25 lat moc |
| AS-7M132FL-HC                  | 460–480 W | 7,2 kg  | ok. 2,8 kg/m²                           | 2 mm    | PERC, sprawność do 18,88%   | 12 / 25                     |
| _dla porównania_ AS-7M144N-HC  | 560–600 W | 27,5 kg | ok. 10,6 kg/m² **+ konstrukcja/balast** | 30 mm   | TOPCon                      | 20 / 30                     |
| _dla porównania_ AS-8M132N-BHC | 690–720 W | 38,5 kg | ok. 12,4 kg/m² **+ konstrukcja/balast** | 35 mm   | TOPCon, double glass        | 20 / 30                     |

Producent deklaruje też: promień gięcia 0,30 m, montaż przez klejenie bez przewiertów i bez konstrukcji, „70% lżejszy przy tej samej mocy”. Dla AS-7M144NFL-HC jest certyfikat TÜV SÜD (IEC 61215:2021 / IEC 61730:2023).

### Segmenty i komunikaty

**1. Dachy o niskiej nośności**
Hale magazynowe, produkcyjne i logistyczne z lekką obudową (blacha trapezowa, płyta warstwowa), obiekty rolnicze, starsze dachy bez rezerwy nośności, dachy, na których klasyczna instalacja wymagałaby wzmocnienia konstrukcji.

- Główny komunikat: _„Fotowoltaika tam, gdzie konstruktor powiedział »nie«”_: ok. 3 kg/m² zamiast kilkunastu kg/m² dla modułu szklanego z konstrukcją lub balastem.
- Korzyści: brak przewiertów, więc brak ryzyka nieszczelności pokrycia; brak konstrukcji wsporczej; szybszy montaż; niski profil, który ogranicza oddziaływanie wiatru (wymaga potwierdzenia w wytycznych klejenia).
- Pokazujemy rachunek: masa instalacji 100 kWp elastycznej vs klasycznej (kalkulator obciążenia).

**2. Obiekty z drganiami i obciążeniem dynamicznym**
Stadiony i trybuny (kibice skaczą, a drgania przenoszą się na zadaszenie i dźwigary), hale sportowe i widowiskowe, areny koncertowe, obiekty przemysłowe z maszynami, prasami lub suwnicami, dachy przy torach i estakadach, parkingi wielopoziomowe.

- Główny komunikat: _„Konstrukcja pracuje — instalacja też musi”_.
- Uczciwe argumenty: (a) bardzo mała masa dodana, więc minimalny wpływ na masę drgającą i obciążenia dynamiczne konstrukcji; (b) brak szkła i sztywnej ramy, więc nie ma szyby, która mogłaby pęknąć, ani sztywnych mocowań, które przenoszą drgania i luzują się z czasem; (c) brak śrub i przewiertów, które w konstrukcji pracującej są źródłem nieszczelności i luzów; (d) moduł podąża za odkształceniem podłoża w granicach promienia gięcia.
- **Zakazane twierdzenia** (dopóki producent nie dostarczy dowodów): „odporny na drgania”, „certyfikowany do obiektów z drganiami”, „zero mikropęknięć”, „nie wpływa na konstrukcję”. Zawsze piszemy, że dobór wymaga **oceny konstruktora obiektu**.
- Do uzyskania od producenta: wyniki testów obciążeń dynamicznych i cyklicznych (np. IEC 62782 DML, IEC TS 62782), wyniki testów EL po cyklach gięcia, specyfikacja kleju (podłoża, zakres temperatur, siła odrywania, starzenie UV), klasyfikacja ogniowa w układzie z pokryciem dachowym.

**3. Stadiony i hale sportowe (osobny landing)**
Odbiorcy: samorządy i spółki miejskie (zarządcy obiektów), kluby, operatorzy aren, generalni wykonawcy modernizacji. Wątki: wysokie rachunki za oświetlenie i zaplecze, wizerunek „zielonego stadionu” i cele ESG, duże powierzchnie zadaszeń trybun, praca konstrukcji podczas wydarzeń. Ścieżka zakupowa jest długa (przetargi, PZP), więc CTA to **„Zamów wstępną ocenę obiektu”**, a lead magnet to **„Checklista: fotowoltaika na obiekcie sportowym”** (PDF, e-mail). Nie wymieniamy realnych stadionów jako referencji, dopóki nie mamy realizacji i zgody.

**4. Dachy łukowe i zakrzywione**
Hale łukowe, wiaty, obiekty rolnicze. Promień gięcia 0,30 m. Pokazujemy, że klasyczny moduł wymagałby skomplikowanej konstrukcji.

**5. Dachy membranowe (PVC/TPO/EPDM)**
Publikujemy dopiero po potwierdzeniu przez producenta kompatybilności kleju z danym pokryciem i zasad zachowania gwarancji producenta membrany.

### Uczciwe ograniczenia (zawsze widoczne na stronach linii elastycznej)

- Niższa sprawność i krótsza gwarancja niż w modułach szklanych (12/25 vs 20/30 lat). Mówimy to wprost i pokazujemy, kiedy to się opłaca: gdy alternatywą jest brak instalacji albo kosztowne wzmocnienie konstrukcji.
- Moduły leżą płasko lub na łuku, więc uzysk zależy od orientacji dachu, a temperatura pracy jest wyższa (brak wentylacji od spodu).
- Brak danych o obciążeniach mechanicznych w kartach modułów elastycznych.
- Obiekty użyteczności publicznej: wymagania ppoż. (uzgodnienie z rzeczoznawcą ds. zabezpieczeń przeciwpożarowych), ekspertyza konstrukcyjna, zgoda właściciela lub zarządcy, ewentualnie zgłoszenie lub pozwolenie. Opisujemy ścieżkę, a nie obiecujemy jej pominięcia.

### Formularz „Kwalifikacja obiektu” (rozszerzony RFQ)

Pola: typ obiektu (hala / stadion / hala sportowa / przemysł / rolniczy / inny), pokrycie dachu (blacha trapezowa, płyta warstwowa, membrana PVC/TPO/EPDM, papa, inne), kształt (płaski / spadzisty / łukowy), powierzchnia do zabudowy (m²), znana rezerwa nośności (kg/m² lub „nie wiem”), źródło drgań (kibice, maszyny, suwnice, ruch drogowy lub kolejowy, brak), wiek dachu i planowany remont, roczne zużycie energii (kWh), zdjęcia lub rzut dachu (upload do Supabase Storage), termin, rola (właściciel, zarządca, wykonawca, projektant). Lead dostaje tag `flex` i wyższy scoring przy powierzchni powyżej 1000 m².

### Klaster fraz i treści

Frazy: panele elastyczne, panele fotowoltaiczne elastyczne cena, panele giętkie, panele klejone, fotowoltaika na dach o niskiej nośności, fotowoltaika na dach hali bez wzmacniania, lekkie panele fotowoltaiczne, fotowoltaika na blachę trapezową bez przewiertów, fotowoltaika na płytę warstwową, fotowoltaika na dach łukowy, fotowoltaika na stadionie, fotowoltaika na hali sportowej, fotowoltaika na membranie PVC, ile waży instalacja fotowoltaiczna na m².
Artykuły (6–8): „Ile waży fotowoltaika na dachu? kg/m² dla różnych systemów”, „Dach hali nie uniesie paneli — co dalej?”, „Fotowoltaika na obiektach z drganiami: stadiony, hale, przemysł”, „Panele elastyczne vs klasyczne: uczciwe porównanie”, „Fotowoltaika na dachu łukowym”, „Klejenie paneli PV: podłoża, kleje, trwałość”, „Fotowoltaika na obiekcie sportowym: przetarg krok po kroku”, „Ekspertyza konstrukcyjna dachu pod PV: kiedy i ile kosztuje”.

### Grafika (Higgsfield)

Sceny generyczne, bez rozpoznawalnych obiektów: lekkie zadaszenie trybuny z modułami elastycznymi, łukowa hala z modułami na łuku, płaski dach hali z blachy trapezowej. Każda grafika AI na stronach tej linii ma w podpisie „Wizualizacja poglądowa”. Zdjęcia montażu (klejenie, detale) tylko prawdziwe, od producenta lub z realizacji.

---

## 5. Strategia SEO: zasady obowiązkowe

### 5.1 Technika

- Każda strona: unikalny `<title>` (≤60 znaków), `meta description` (≤155), jeden `<h1>`, `canonical`, `og:*`, `hreflang` (gdy istnieją odpowiedniki w innych krajach) + `x-default`. Generator: `apps/web/lib/seo/metadata.ts` (rzuca błąd przy przekroczeniu limitów).
- Sitemap (`/sitemap.xml`, podział: produkty, kategorie, wiedza, narzędzia) i `robots.txt` per serwis. Preview i domeny `*.vercel.app` mają `noindex`.
- Dane strukturalne JSON-LD: `Organization` (sprzedawca), `Brand`, `Product` (+ `additionalProperty` ze specyfikacją, `offers` tylko gdy mamy prawdziwą cenę), `BreadcrumbList`, `Article` z prawdziwym autorem, `FAQPage`, `HowTo` dla kalkulatorów, `WebSite`. **Zakaz** fikcyjnych `AggregateRating`/`Review`.
- Core Web Vitals: LCP < 2,0 s, INP < 200 ms, CLS < 0,1 na 4G. Obrazy przez `next/image` (AVIF/WebP), fonty przez `next/font` (lokalnie hostowane), zero blokujących skryptów zewnętrznych przed zgodą.
- Treść renderowana po stronie serwera, a parametry techniczne jako tabele HTML (nie obrazki), żeby czytały je Google i wyszukiwarki AI.
- Przekierowania 301 w tabeli `redirects`. Zero 404 z linków wewnętrznych (link checker w CI; nawigacja pokazuje tylko adresy z `ready: true` w `lib/routes.ts`).
- `llms.txt` i czytelne, cytowalne akapity z liczbami (widoczność w AI Overviews / ChatGPT / Perplexity).

### 5.2 Treść

- Każda karta produktu ma: opis zastosowań w polskich warunkach, pełną tabelę STC/NOCT, współczynniki temperaturowe, wymiary i wagę, pakowanie (szt./paleta/kontener + **kWp na kontener**), gwarancje, certyfikaty z numerami, PDF do pobrania, FAQ (5–8 pytań), porównanie z sąsiednimi modelami i CTA.
- **Unikalna wartość, nie masa.** Każdy URL musi odpowiadać na realne pytanie lub intencję. Nie tworzymy setek prawie identycznych stron „panele fotowoltaiczne [miasto]”, bo Google traktuje to jako doorway pages / scaled content abuse. Strony lokalne powstają tylko tam, gdzie mamy realnego partnera-instalatora lub magazyn.
- Treści generowane z AI zawsze przechodzą redakcję człowieka (pole `reviewed_by`; baza nie pozwala opublikować strony bez niego). Liczby pochodzą wyłącznie z `products.json` / Supabase.
- E-E-A-T: prawdziwi autorzy z bio i rolą (inżynier PV, handlowiec), data aktualizacji, źródła (PSE, URE, NFOŚiGW, IEO, normy PN-EN).
- Linkowanie wewnętrzne: poradnik → kategoria → produkt → RFQ. Każdy artykuł linkuje do ≥2 produktów lub narzędzi, a każdy produkt do ≥2 poradników.
- Aktualizacja: strony z datami i programami (dotacje, net-billing, RCE) przeglądamy co kwartał.

### 5.3 Mapa fraz: Polska (punkt startowy, wolumeny zweryfikować w Senuto / Ahrefs / GSC)

| Klaster                            | Przykładowe frazy                                                                                                                                                                         | Intencja                    | Docelowy URL                                                                  |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------- |
| Hurt / B2B                         | panele fotowoltaiczne hurt, moduły fotowoltaiczne hurtownia, panele fotowoltaiczne kontener, panele PV cena za Wp, dystrybutor paneli fotowoltaicznych, panele od producenta              | transakcyjna                | `/`, `/hurt-i-dystrybucja/`, `/dla-instalatorow/`                             |
| Farmy PV                           | panele na farmę fotowoltaiczną, moduły 700 W, panele bifacjalne farma, panele double glass, moduły do farmy 1 MW                                                                          | transakcyjna/komercyjna     | `/farmy-fotowoltaiczne/`, `/panele-fotowoltaiczne/na-farmy/`, `as-8m132n-bhc` |
| Technologia                        | panele TOPCon, panele N-type, TOPCon vs PERC, panele bifacjalne czy warto, panele full black                                                                                              | komercyjna/informacyjna     | kategorie + poradniki                                                         |
| Moc                                | panele fotowoltaiczne 450W / 500W / 600W / 720W                                                                                                                                           | transakcyjna                | karty produktów                                                               |
| Elastyczne / rozwiązania specjalne | panele elastyczne, panele giętkie, fotowoltaika na dach o niskiej nośności, fotowoltaika na stadionie, fotowoltaika na hali sportowej, panele klejone bez przewiertów (pełna lista w §4A) | komercyjna                  | `/panele-fotowoltaiczne/elastyczne/`, `/rozwiazania-specjalne/*`              |
| Marka                              | Amerisolar, Amerisolar opinie, Amerisolar panele, Amerisolar karta katalogowa, AS-7M144N-HC                                                                                               | nawigacyjna                 | strona główna, `/o-amerisolar/`, produkty                                     |
| Projektowanie                      | dobór stringów falownik, napięcie Voc w zimie, współczynnik temperaturowy panelu, obciążenie śniegiem 5400 Pa, ile paneli w kontenerze                                                    | informacyjna (instalatorzy) | `/narzedzia/*`, poradniki                                                     |
| Rynek / prawo                      | net-billing 2026, RCE, magazyn energii a fotowoltaika, cable pooling, warunki przyłączenia farmy PV                                                                                       | informacyjna                | `/baza-wiedzy/*`                                                              |

Pełna mapa trafia do tabeli `keywords` oraz do `docs/keyword-map-pl.md`. Jedna fraza główna to jeden URL (bez kanibalizacji; wymusza to unikalny indeks w tabeli `keywords`).

### 5.4 Off-page i lokalne

- Profil Firmy w Google (jeśli jest fizyczne biuro lub magazyn w PL), wpisy w katalogach branżowych OZE, profile na portalach B2B, PR branżowy (gramwzielone.pl, globenergia.pl, magazynfotowoltaika.pl), targi (ENEX, Solar Energy Expo).
- **Zakaz** kupowania linków, PBN-ów i wzajemnego linkowania stron sieci w celu manipulacji. Strony krajowe łączymy tylko przez `hreflang` i przełącznik kraju.
- Zarządzanie SERP-em marki: w wynikach na „Amerisolar opinie” mogą być stare, negatywne recenzje. Odpowiadamy rzetelną stroną o gwarancji, certyfikatach, ubezpieczeniu i polskich referencjach, a nie fałszywymi opiniami.

---

## 6. Fakty o produktach i firmie: zasady użycia

- **Jedyne źródło prawdy:** `data/products.json` (wyciąg z kart katalogowych EN-V1.0-2024/2025, katalogu 2026 i certyfikatu TÜV). Nie zaokrąglamy, nie „poprawiamy” i nie wymyślamy parametrów. Plik jest walidowany schematem zod w `packages/content` (błędny plik zatrzymuje build).
- Pola `to_verify` blokują publikację danego faktu do czasu potwierdzenia przez producenta.
- **Certyfikaty (stan 21.11.2026, zweryfikowane z PDF z dysku klienta):** rejestr w `data/documents.json` (pole `coverage`: model + zakres mocy dokładnie wg certyfikatu). Strona pokazuje certyfikat przy modelu **tylko dla klas mocy, które obejmuje** (`lib/documents.ts`). Stan na dziś:
  - TÜV SÜD Z2 093522 0021 (do 17.04.2029): AS-7M108N-BHC 415–465 W, AS-7M120N-BHC 460–520 W, AS-8M132N-BHC 675–700 W
  - TÜV SÜD Z2 093522 0023 (do 17.04.2029): AS-7M120N-HC 500–520 W, AS-7M144N-HC 600–620 W — **z oferty tylko 500 W i 600 W**
  - TÜV Rheinland PV 50674535 0001 (do 17.08.2027): AS-8M132N-BHC 695–725 W
  - TÜV SÜD Z2 093522 0025 (do 31.03.2029): AS-7M132FL-HC 460–475 W — **480 W nieobjęte**
  - TÜV SÜD Z2 093522 0030 (do 15.01.2031): AS-7M144NFL-HC 550–575 W
  - atesty CE TÜV SÜD N8A 0022 / 0024 / 0027 / 0031 (te same zakresy co odpowiednie certyfikaty), testy PID / mgła solna / amoniak Z2 0018–0020 (AS-7M108N-BHC 390–435 W, AS-7M120N-BHC 430–480 W), ISO 9001/14001/45001 fabryki w Nantong (do 08.06.2029), PV CYCLE WEEE Włochy i Niemcy (do 31.12.2026)
  - pominięte: certyfikaty modeli spoza oferty (P-type, poly, BHCR, BC), krajowe dla rynków pozaeuropejskich (SEC, RETIE, FIDE), MCS (UK), włoskie klasy ogniowe (dotyczą AS-7M132-HC i AS-6M144FL-HC, nie naszych modeli), Top PV Brand 2021 (Brazylia)
  - do uzyskania: certyfikaty obejmujące AS-7M120N-HC 465–495 W, AS-7M144N-HC 560–595 W, AS-7M132FL-HC 480 W
- **Ceny:** otrzymany cennik jest FOB, w USD/EUR za Wp, na minimum 1 kontener 40', i był **ważny do 30.10.2026 (wygasł)**. Nie publikujemy cen FOB. Domyślnie stosujemy „Cena na zapytanie”. Ceny publiczne (np. „od X zł/Wp netto, DDP Polska”) wolno pokazać tylko po pisemnej decyzji klienta.
- **Niespójności do wyjaśnienia** (nie publikować, dopóki nie są rozstrzygnięte): 730 W w cenniku vs 720 W w karcie AS-8M132N-BHC; nazwy „AS-FL7M…” w cenniku vs „AS-7M…FL” w kartach; NOCT w karcie AS-7M120N-BHC (5 kolumn dla 8 klas mocy); modele z cennika bez kart (AS-7M132N-HC 525 W, AS-7M144N-BHC, AS-7M132N-BHCR 650 W).
- **Domeny producenta:** karty i katalog podają `amerisolar-usa.com` / `sales@amerisolar-usa.com`; strona partnera to `weamerisolar.com`. Linkujemy do tej, którą wskaże klient.
- Deklaracje marketingowe producenta („11 GW”, „ponad 130 krajów”, „150 patentów”, „Top PV Brand 2021 — Hiszpania i Brazylia”) podajemy jako „według producenta” i z rokiem.
- Polska referencja: **58 MW dostaw do Polski w 2025 r.** (wg katalogu). To silny argument, ale bez konkretnych nazw projektów, dopóki klient ich nie potwierdzi.

---

## 7. Ton i język (Polska)

- Polski, rzeczowy, inżynierski, bez przesady. Odbiorca to instalator lub inwestor, który liczy waty, wolty i złotówki.
- Jednostki: W, Wp, kWp, MWp, V, A, Pa, mm, kg; przecinek dziesiętny (23,22%); spacja przed jednostką (600 W). Helpery: `packages/content/src/format.ts`.
- Bez superlatywów bez pokrycia („najlepsze”, „najtańsze”). Bez porównań z nazwanymi konkurentami bez źródła.
- Dotacje i prawo: tylko aktualny stan ze źródłem i datą. Uwaga: program Mój Prąd w dotychczasowej formie się zakończył, a programy dla prosumentów przesunęły się w stronę magazynów energii. Przed publikacją zawsze sprawdzamy aktualny stan na gov.pl/nfosigw.

---

## 8. Higgsfield: zasady dla grafik i wideo AI

**Do czego używamy:**

- obrazy hero i tła sekcji (polskie dachy, hale, farmy PV w polskim krajobrazie, zimowe ujęcia ze śniegiem pod argument 5400 Pa),
- ilustracje do poradników (scenariusze użycia: carport, dach łukowy hali, agro-PV),
- krótkie pętle wideo 5–10 s (bez dźwięku, `muted`, `playsInline`, poster + lazy load, ≤2 MB) i rolki do social mediów.

**Twarde zakazy:**

- Grafika AI **nigdy** nie udaje realizacji, referencji, zdjęcia z fabryki ani zdjęcia certyfikatu.
- Bez wygenerowanych „packshotów” produktu na kartach produktów. Tam idą tylko prawdziwe zdjęcia i rysunki od producenta (wymiary, układ ogniw i kolor ramy muszą się zgadzać z modelem).
- Bez realnych osób, logotypów innych firm i rozpoznawalnych budynków.
- Bez tekstu w obrazie (tekst nakładamy w HTML).

**Proces:** prompt + model + seed zapisujemy w `media_assets`. Eksport WebP/AVIF, wersje 16:9, 4:3, 1:1 i 9:16, `alt` po polsku z opisem sceny (bez upychania fraz). Pliki trafiają do Supabase Storage (lub Vercel Blob) i są serwowane przez `next/image`.

**Szablon promptu (EN dla modelu):**
`Photorealistic wide shot, [scene: e.g. large flat industrial warehouse roof in Poland, overcast winter light, light snow], rows of black-frame monocrystalline solar modules with half-cut cells, realistic proportions, clean professional installation, no people, no logos, no text, natural colors, 35mm lens, high detail`.

---

## 9. Zgodność prawna (PL / UE)

- **Znak towarowy:** przed uruchomieniem domen i użyciem logo trzeba mieć pisemną zgodę Amerisolar (umowa agencyjna lub dystrybucyjna). W stopce piszemy „Autoryzowany partner/agent Amerisolar w Polsce” zgodnie z faktycznym statusem.
- **RODO:** polityka prywatności, administrator danych = firma partnera, osobne zgody (kontakt handlowy vs marketing), retencja leadów, prawo do usunięcia.
- **Cookies:** baner CMP z Google Consent Mode v2. Analityka i piksele uruchamiamy dopiero po zgodzie. Vercel Analytics działa bez cookies.
- **Dostępność:** WCAG 2.1 AA (kontrast, fokus, etykiety formularzy, alt).
- Dane firmy (nazwa, NIP, KRS, adres) w stopce i w `/kontakt/`.

---

## 10. Workflow pracy z Claude / Claude Code

1. Każde zadanie zaczyna się od przeczytania tego pliku i sprawdzenia `docs/decisions/`.
2. Małe PR-y: jedna funkcja lub sekcja na PR, opis + zrzut ekranu z Preview Vercel.
3. Zmiana schematu = nowa migracja SQL + regeneracja typów (`supabase gen types`).
4. Treść: brief (`docs/briefs/…`) → szkic → weryfikacja faktów z `products.json` → redakcja → publikacja (`status='published'`).
5. Definition of Done dla strony: Lighthouse ≥95 (Performance, SEO, Accessibility, Best Practices), poprawny JSON-LD (Rich Results Test), brak błędów w link checkerze, `title`/`description`/`h1` unikalne, CTA działa, lead zapisuje się w Supabase i przychodzi e-mail.
6. CI (GitHub Actions): `lint`, `typecheck`, `test`, `build`, link checker, Lighthouse CI na Preview, walidacja JSON-LD, sprawdzenie, czy liczby w treści zgadzają się z `products.json` (`scripts/check-products.mjs`).
7. Niczego nie zgadujemy. Jeśli brakuje danych (zdjęcia, ceny, certyfikaty, dane firmy), dodajemy `TODO(klient):` i wpis do `docs/open-questions.md`.

---

## 11. Plan wdrożenia

| Faza             | Zakres                                                                                                                                                                                                                                                                   | Rezultat                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| 0. Fundament     | repo, Vercel, Supabase, schemat, seed produktów, design system, multi-tenant                                                                                                                                                                                             | Działający szkielet PL na domenie testowej (noindex)    |
| 1. MVP PL        | strona główna, katalog + 7 kart produktów, 5 kategorii, B2B landingi (instalatorzy, farmy, hurt), hub „Rozwiązania specjalne” + landingi: niska nośność, obiekty z drganiami, stadiony i hale sportowe, formularz kwalifikacji obiektu, RFQ, dokumenty, o firmie, prawne | Indeksacja, pierwsze leady                              |
| 2. Narzędzia     | kalkulator stringów, kontenera, zysku bifacjalnego, obciążenia dachu, porównywarka                                                                                                                                                                                       | Linkowalne zasoby dla instalatorów i zarządców obiektów |
| 3. Treść         | 20–30 poradników w klastrach z sekcji 5.3, słownik pojęć                                                                                                                                                                                                                 | Ruch informacyjny → leady                               |
| 4. Optymalizacja | GSC, testy A/B CTA i formularza, CRO, rozbudowa fraz                                                                                                                                                                                                                     | Wzrost konwersji                                        |
| 5. Kolejne kraje | nowy rekord w `sites`, lokalna keyword map, natywna redakcja (nie tłumaczenie maszynowe), hreflang                                                                                                                                                                       | Strona kraju #2                                         |

---

## 12. Decyzje otwarte (do uzupełnienia przez klienta)

Bieżąca lista: `docs/open-questions.md`.

- [ ] Status prawny partnera wobec Amerisolar i zgoda na użycie znaku i domen
- [x] Strategia domen: ccTLD per kraj (PL: `amerisolar.pl`)
- [ ] Dane firmy (nazwa, NIP, adres, telefon, e-mail handlowy, osoby do sekcji „Zespół”)
- [x] Magazyn w PL: **brak**; sprzedaż wyłącznie kontenerowa, bezpośrednio od producenta
- [ ] Incoterms dla klientów PL (FOB / CIF / DAP / DDP) i minimalna ilość zamówienia (20' czy 40'HQ)
- [ ] Polityka cenowa na stronie (cena na zapytanie vs „od … zł/Wp”) i aktualny cennik po 30.10.2026
- [ ] Certyfikaty IEC/TÜV dla modeli spoza certyfikatu Z2 093522 0030, aktualne karty (730 W, modele bez kart)
- [ ] Prawdziwe zdjęcia produktów, fabryki i polskich realizacji + zgody na publikację
- [ ] Linia elastyczna: specyfikacja kleju i lista dopuszczonych podłoży, wyniki testów obciążeń dynamicznych i cyklicznych oraz gięcia (EL), klasyfikacja ogniowa w układzie dachowym, zasady gwarancji przy klejeniu, zdjęcia montażu, ewentualne realizacje na obiektach sportowych lub przemysłowych
- [ ] Czy oferujemy montaż lub współpracę z wykonawcą dla linii elastycznej (obiekty publiczne wymagają wykonawcy z doświadczeniem)
- [ ] CRM docelowy (Pipedrive / HubSpot / własny w Supabase)
- [ ] Kolejność krajów po Polsce
