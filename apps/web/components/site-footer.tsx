// apps/web/components/site-footer.tsx
import Link from "next/link";
import { Container } from "@amerisolar/ui";
import { catalog, productPath } from "@/lib/catalog";
import { plRoutes } from "@/lib/routes";
import type { Site } from "@/lib/sites";
import { Logo } from "./logo";

export function SiteFooter({ site }: { site: Site }) {
  const links = plRoutes.filter((r) => (r.nav === "footer" || r.nav === "main") && r.ready);
  const c = site.company;

  return (
    <footer className="mt-auto bg-forest-950 text-forest-100">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo tone="light" countryCode={site.countryCode} />
          {/* Dane firmy wymagane w stopce (CLAUDE.md §9). */}
          <div className="space-y-1 text-sm text-forest-300">
            {/* TODO(klient): nazwa firmy — do czasu uzupełnienia w lib/sites.ts linia jest pomijana. */}
            {c.name ? <p className="text-forest-100">{c.name}</p> : null}
            {c.address ? <p>{c.address}</p> : null}
            {c.vatId ? <p>NIP: {c.vatId}</p> : null}
            {c.phone ? (
              <p>
                <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>
              </p>
            ) : null}
            {c.email ? (
              <p>
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </p>
            ) : null}
            {/* TODO(klient): dokładne brzmienie statusu (agent / dystrybutor) po potwierdzeniu umowy. */}
          </div>
        </div>

        <nav aria-label="Moduły">
          <p className="mb-4 text-sm font-semibold text-white">Moduły</p>
          <ul className="space-y-2 text-sm">
            {catalog.map((p) => (
              <li key={p.slug}>
                <Link href={productPath(p)} className="text-forest-300 hover:text-white">
                  {p.model}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {links.length > 0 ? (
          <nav aria-label="Serwis">
            <p className="mb-4 text-sm font-semibold text-white">Serwis</p>
            <ul className="space-y-2 text-sm">
              {links.map((r) => (
                <li key={r.path}>
                  <Link href={r.path} className="text-forest-300 hover:text-white">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </Container>
      <Container className="border-t border-white/10 py-6 text-xs text-forest-300">
        Parametry modułów pochodzą z kart katalogowych producenta. Ceny na zapytanie.
      </Container>
    </footer>
  );
}
