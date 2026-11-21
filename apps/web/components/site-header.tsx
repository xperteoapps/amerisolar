// apps/web/components/site-header.tsx
import Link from "next/link";
import { buttonClass, Container } from "@amerisolar/ui";
import { isReady, plRoutes, RFQ_PATH } from "@/lib/routes";
import { sites, type Site } from "@/lib/sites";
import { Logo } from "./logo";

export function SiteHeader({ site }: { site: Site }) {
  const nav = plRoutes.filter((r) => r.nav === "main" && r.ready);
  const otherSites = Object.values(sites).filter((s) => s.key !== site.key);
  const rfqReady = isReady(RFQ_PATH);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-3 focus:py-2"
      >
        Przejdź do treści
      </a>
      <Container className="flex h-16 items-center justify-between gap-8">
        <Link href="/" aria-label="Amerisolar — strona główna">
          <Logo countryCode={site.countryCode} />
        </Link>

        <nav aria-label="Menu główne" className="hidden flex-1 md:block">
          <ul className="flex gap-7 text-[0.95rem]">
            {nav.map((r) => (
              <li key={r.path}>
                <Link href={r.path} className="text-ink/80 hover:text-ink">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {otherSites.map((s) => (
            <a key={s.key} href={`https://${s.domain}/`} hrefLang={s.locale} className="text-sm text-muted">
              {s.countryCode}
            </a>
          ))}
          {rfqReady ? (
            <Link href={RFQ_PATH} className={buttonClass("primary", "hidden px-4 py-2.5 sm:inline-flex")}>
              Zapytaj o cenę kontenerową
            </Link>
          ) : null}
          {nav.length > 0 ? (
            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-(--radius-sm) border border-ink/20 px-3 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
                Menu
              </summary>
              <ul className="absolute right-0 mt-2 w-60 border border-ink/10 bg-white p-2 shadow-lg">
                {nav.map((r) => (
                  <li key={r.path}>
                    <Link href={r.path} className="block px-3 py-2.5 hover:bg-paper">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
