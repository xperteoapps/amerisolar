// apps/web/components/site-header.tsx
import Link from "next/link";
import { buttonClass, Container } from "@amerisolar/ui";
import { quoteMailto } from "@/lib/contact";
import { href, isReady, routes } from "@/lib/routes";
import { sites, siteKeys, type Site } from "@/lib/sites";
import { messagesFor } from "@/messages";
import { Logo } from "./logo";

export function SiteHeader({ site }: { site: Site }) {
  const m = messagesFor(site);
  const nav = routes.filter((r) => r.nav === "main" && r.ready);
  const rfqReady = isReady("rfq");

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-3 focus:py-2"
      >
        {m.header.skip}
      </a>
      <Container className="flex h-16 items-center justify-between gap-8">
        <Link href={href(site, "home")} aria-label={m.header.logoAria}>
          <Logo label={site.switchLabel} />
        </Link>

        <nav aria-label={m.header.mainNav} className="hidden flex-1 md:block">
          <ul className="flex gap-7 text-[0.95rem]">
            {nav.map((r) => (
              <li key={r.id}>
                <Link href={href(site, r.id)} className="text-ink/80 hover:text-ink">
                  {m.routes[r.id]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <LangSwitch site={site} label={m.header.switcher} />
          {site.company.email ? (
            <a
              href={quoteMailto(site.company.email, m.email)}
              className="hidden text-sm font-medium text-ink/80 hover:text-ink xl:inline"
            >
              {site.company.email}
            </a>
          ) : null}
          {rfqReady ? (
            <Link
              href={href(site, "rfq")}
              className={buttonClass("primary", "hidden px-4 py-2.5 sm:inline-flex")}
            >
              {m.common.askContainerPrice}
            </Link>
          ) : null}
          {nav.length > 0 ? (
            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-(--radius-sm) border border-ink/20 px-3 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
                {m.header.menu}
              </summary>
              <ul className="absolute right-0 mt-2 w-60 border border-ink/10 bg-white p-2 shadow-lg">
                {nav.map((r) => (
                  <li key={r.id}>
                    <Link href={href(site, r.id)} className="block px-3 py-2.5 hover:bg-paper">
                      {m.routes[r.id]}
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

/**
 * Przełącznik serwisów. Link „/{kod}/” działa wszędzie: na domenie produkcyjnej proxy
 * przekierowuje 308 na domenę serwisu, na podglądzie wybiera serwis (ADR 0002).
 */
function LangSwitch({ site, label }: { site: Site; label: string }) {
  return (
    <details className="relative">
      <summary
        aria-label={label}
        className="cursor-pointer list-none rounded-(--radius-sm) border border-ink/20 px-2.5 py-1.5 text-sm font-medium [&::-webkit-details-marker]:hidden"
      >
        {site.switchLabel}
      </summary>
      <ul className="absolute right-0 z-40 mt-2 grid w-44 grid-cols-2 gap-1 border border-ink/10 bg-white p-2 shadow-lg">
        {siteKeys.map((k) => {
          const s = sites[k];
          return (
            <li key={k}>
              <a
                href={`/${k}/`}
                hrefLang={s.hreflang}
                lang={s.htmlLang}
                aria-current={k === site.key ? "true" : undefined}
                className={`block rounded-(--radius-sm) px-2.5 py-1.5 text-sm hover:bg-paper ${k === site.key ? "font-semibold text-forest-700" : ""}`}
              >
                {s.switchLabel}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
