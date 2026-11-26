// apps/web/components/site-footer.tsx
import Link from "next/link";
import { Container } from "@amerisolar/ui";
import { catalog } from "@/lib/catalog";
import { href, productHref, routes } from "@/lib/routes";
import type { Site } from "@/lib/sites";
import { messagesFor } from "@/messages";
import { Logo } from "./logo";

export function SiteFooter({ site }: { site: Site }) {
  const m = messagesFor(site);
  const links = routes.filter((r) => (r.nav === "footer" || r.nav === "main") && r.ready);
  const c = site.company;

  return (
    <footer className="mt-auto bg-forest-950 text-forest-100">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo tone="light" label={site.switchLabel} />
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

        <nav aria-label={m.footer.modules}>
          <p className="mb-4 text-sm font-semibold text-white">{m.footer.modules}</p>
          <ul className="space-y-2 text-sm">
            {catalog.map((p) => (
              <li key={p.slug}>
                <Link href={productHref(site, p.slug)} className="text-forest-300 hover:text-white">
                  {p.model}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {links.length > 0 ? (
          <nav aria-label={m.footer.service}>
            <p className="mb-4 text-sm font-semibold text-white">{m.footer.service}</p>
            <ul className="space-y-2 text-sm">
              {links.map((r) => (
                <li key={r.id}>
                  <Link href={href(site, r.id)} className="text-forest-300 hover:text-white">
                    {m.routes[r.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </Container>
      <Container className="border-t border-white/10 py-6 text-xs text-forest-300">{m.footer.note}</Container>
    </footer>
  );
}
