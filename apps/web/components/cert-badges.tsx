// apps/web/components/cert-badges.tsx
// Pasek certyfikatów na stronie głównej. Własne, neutralne odznaki (nazwa jednostki + norma)
// zamiast logotypów jednostek certyfikujących — znaków TÜV/PV CYCLE nie kopiujemy.
// Każda odznaka prowadzi do odpowiedniej sekcji strony z certyfikatami (dane: data/documents.json).
import Link from "next/link";
import { Container } from "@amerisolar/ui";
import { documents } from "@/lib/documents";
import { formatter, tpl } from "@/lib/i18n";
import { href } from "@/lib/routes";
import type { Site } from "@/lib/sites";
import { messagesFor, type Messages } from "@/messages";

type Badge = {
  title: string;
  sub: string;
  href: string;
  icon: "shield" | "ce" | "drop" | "leaf" | "factory" | "cycle";
};

const badgesFor = (DOCS: string, t: Messages["certBadges"]): Badge[] => [
  { title: "TÜV SÜD", sub: "IEC 61215, IEC 61730", href: `${DOCS}#product`, icon: "shield" },
  { title: "TÜV Rheinland", sub: "IEC 61215, IEC 61730", href: `${DOCS}#product`, icon: "shield" },
  { title: t.ce, sub: "EN IEC 61730, TÜV SÜD", href: `${DOCS}#ce`, icon: "ce" },
  { title: "Anti-PID", sub: "IEC TS 62804-1", href: `${DOCS}#tests`, icon: "shield" },
  { title: t.salt, sub: "IEC 61701", href: `${DOCS}#tests`, icon: "drop" },
  { title: t.ammonia, sub: "IEC 62716", href: `${DOCS}#tests`, icon: "leaf" },
  { title: "ISO 9001, 14001, 45001", sub: t.factory, href: `${DOCS}#iso`, icon: "factory" },
  { title: "PV CYCLE", sub: t.weee, href: `${DOCS}#weee`, icon: "cycle" },
];

function Icon({ kind }: { kind: Badge["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "ce":
      return (
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path {...common} d="M10 7a5 5 0 1 0 0 10M20 7a5 5 0 1 0 0 10M14.5 12H19" />
        </svg>
      );
    case "drop":
      return (
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path {...common} d="M12 3.5c3 4 5.5 7 5.5 10a5.5 5.5 0 0 1-11 0c0-3 2.5-6 5.5-10Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path {...common} d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Zm0 0 7-7" />
        </svg>
      );
    case "factory":
      return (
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path {...common} d="M3 20V10l5 3V10l5 3V6h4l1 14H3Zm4-3h2m3 0h2" />
        </svg>
      );
    case "cycle":
      return (
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path {...common} d="M19 12a7 7 0 0 1-12 4.9M5 12a7 7 0 0 1 12-4.9M17 3v4.1h-4.1M7 21v-4.1h4.1" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path {...common} d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z" />
          <path {...common} d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export function CertBadges({ site }: { site: Site }) {
  const t = messagesFor(site).certBadges;
  const f = formatter(site.locale);
  const DOCS = href(site, "docs");
  const badges = badgesFor(DOCS, t);
  const longest = documents.certificates
    .filter((c) => c.category === "product" && c.validUntil)
    .map((c) => c.validUntil!)
    .sort()
    .at(-1);
  return (
    <section className="border-b border-line bg-paper">
      <Container className="py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">{t.title}</h2>
          <p className="max-w-md text-sm text-muted">
            {t.intro}
            {longest ? tpl(t.introValid, { date: f.date(longest) }) : ""}
            {t.introTail}
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {badges.map((b) => (
            <li key={b.title}>
              <Link
                href={b.href}
                className="group flex h-full items-center gap-4 rounded-(--radius-md) border border-line bg-white px-4 py-4 transition-colors hover:border-forest-700"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700 ring-1 ring-leaf/40 group-hover:bg-leaf group-hover:text-white">
                  <Icon kind={b.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block leading-tight font-semibold">{b.title}</span>
                  <span className="mt-0.5 block text-xs text-muted">{b.sub}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href={DOCS} className="mt-6 inline-block text-sm font-semibold text-forest-700 hover:underline">
          {t.more}
        </Link>
      </Container>
    </section>
  );
}
