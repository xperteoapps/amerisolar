# Amerisolar — sieć stron krajowych

Monorepo (pnpm + Turborepo). Start: Polska, **amerisolar.pl**. Zasady projektu: [`CLAUDE.md`](./CLAUDE.md).

| Ścieżka              | Zawartość                                                                      |
| -------------------- | ------------------------------------------------------------------------------ |
| `apps/web`           | Next.js 16 (App Router, Cache Components) — wszystkie serwisy krajowe          |
| `packages/ui`        | Design system (tokeny Tailwind v4, komponenty bez JS po stronie klienta)       |
| `packages/content`   | Typy i walidacja (zod) `data/products.json`, helpery (kWp/kontener, format PL) |
| `data/products.json` | **Jedyne źródło prawdy** parametrów modułów                                    |
| `supabase/`          | Migracje SQL i edge functions                                                  |
| `docs/`              | Decyzje (ADR), briefy, keyword map, otwarte pytania                            |

## Start lokalny

```bash
pnpm install
pnpm dev            # http://localhost:3000 (serwis domyślny: pl)
pnpm test && pnpm typecheck && pnpm lint && pnpm check:facts
```

## Vercel

Projekt `amerisolar`, **Root Directory: `apps/web`**, framework Next.js. Domena produkcyjna: `amerisolar.pl`.
Zmienne środowiskowe: patrz `.env.example`. Do czasu startu (Faza 4) cała witryna ma `noindex`.
