import Link from "next/link";
// apps/web/components/site-footer.tsx
import { Container } from "@amerisolar/ui";
import { plRoutes } from "@/lib/routes";
import type { Site } from "@/lib/sites";

export function SiteFooter({ site }: { site: Site }) {
  const links = plRoutes.filter((r) => r.nav === "footer" && r.ready);
  const c = site.company;

  return (
    <footer className="mt-auto border-t border-line bg-surface py-10 text-sm text-muted">
      <Container className="grid gap-6 md:grid-cols-2">
        <div className="space-y-1">
          {/* Dane firmy wymagane w stopce (CLAUDE.md §9). */}
          <p className="font-semibold text-ink">{c.name ?? "TODO(klient): nazwa firmy"}</p>
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
        {links.length > 0 ? (
          <nav aria-label="Stopka">
            <ul className="grid gap-2 md:justify-end">
              {links.map((r) => (
                <li key={r.path}>
                  <Link href={r.path} className="hover:text-ink">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </Container>
    </footer>
  );
}
