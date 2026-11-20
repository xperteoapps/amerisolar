# ADR 0001: Multi-tenant po domenie przez `proxy.ts` i segment `[site]`

Data: 2026-11-20 · Status: przyjęta

## Kontekst

Jedna aplikacja Next.js 16 obsługuje wiele krajów, każdy na własnej domenie (CLAUDE.md §2).
W Next.js 16 plik `middleware.ts` został przemianowany na `proxy.ts` (stara nazwa jest przestarzała).

## Decyzja

- `apps/web/proxy.ts` mapuje nagłówek Host na serwis (`lib/sites.ts`) i robi wewnętrzny rewrite na `/{site}/…`.
- Wszystkie strony leżą w `app/[site]/…` z `generateStaticParams` po kluczach serwisów, więc są prerenderowane statycznie per kraj (bez odczytu nagłówków w czasie renderu).
- Aliasy (np. `www.`) → 308 na domenę kanoniczną.
- Hosty nieprodukcyjne (`*.vercel.app`, podglądy PR, localhost) oraz serwisy z `isLive: false`: `X-Robots-Tag: noindex, nofollow`, `<meta name="robots" content="noindex">`, `robots.txt` z `Disallow: /`.
- `/sitemap.xml` → route handler `app/[site]/sitemap-xml` (nazwa folderu bez kropki, bo `sitemap.xml` to zarezerwowana konwencja metadanych).
- Konfiguracja serwisów jest w kodzie (proxy bez zapytań do bazy); tabela `sites` w Supabase jest lustrem danych kontaktowych.

## Konsekwencje

Nowy kraj = wpis w `lib/sites.ts` + rekord w `sites` + domena w projekcie Vercel + lokalna treść.
