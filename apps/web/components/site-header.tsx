import Link from "next/link";
// apps/web/components/site-header.tsx
import { ButtonLink, Container } from "@amerisolar/ui";
import { isReady, plRoutes, RFQ_PATH } from "@/lib/routes";
import { sites, type Site } from "@/lib/sites";

export function SiteHeader({ site }: { site: Site }) {
  const nav = plRoutes.filter((r) => r.nav === "main" && r.ready);
  const otherSites = Object.values(sites).filter((s) => s.key !== site.key);
  const rfqReady = isReady(RFQ_PATH);

  return (
    <header className="border-b border-line bg-white">
      <Container className="flex h-16 items-center justify-between gap-6">
        {/* TODO(klient): logo Amerisolar (SVG) — wymaga zgody na użycie znaku (CLAUDE.md §9). */}
        <Link href="/" className="text-lg font-bold tracking-tight text-brand-900">
          Amerisolar <span className="font-normal text-muted">{site.countryCode}</span>
        </Link>
        {nav.length > 0 ? (
          <nav aria-label="Menu główne" className="hidden md:block">
            <ul className="flex gap-6 text-sm">
              {nav.map((r) => (
                <li key={r.path}>
                  <Link href={r.path} className="hover:text-brand-700">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
        <div className="flex items-center gap-3">
          {otherSites.length > 0 ? (
            <nav aria-label="Wybór kraju" className="text-sm">
              {otherSites.map((s) => (
                <a key={s.key} href={`https://${s.domain}/`} hrefLang={s.locale}>
                  {s.countryCode}
                </a>
              ))}
            </nav>
          ) : null}
          {rfqReady ? (
            <ButtonLink href={RFQ_PATH} className="hidden sm:inline-flex">
              Zapytaj o cenę kontenerową
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
