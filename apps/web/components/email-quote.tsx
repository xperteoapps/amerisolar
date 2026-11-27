// apps/web/components/email-quote.tsx
// „Lub napisz: office@…” — szybka ścieżka obok każdego przycisku wyceny,
// dla klientów, którzy nie chcą wypełniać formularza. Teksty w języku serwisu.
import { buttonClass } from "@amerisolar/ui";
import { quoteMailto, type QuoteMailOptions } from "@/lib/contact";
import { tpl } from "@/lib/i18n";
import type { Site } from "@/lib/sites";
import { messagesFor } from "@/messages";

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`size-4 shrink-0 fill-current ${className}`}>
      <path d="M2 4h16v12H2V4Zm2 2v.6l6 4 6-4V6H4Zm12 2.9-6 4-6-4V14h12V8.9Z" />
    </svg>
  );
}

/** Tekstowy link: „lub napisz od razu: office@amerisolar.pl”. */
export function EmailQuoteLink({
  site,
  tone = "light",
  prefix = "prefix",
  className = "",
  ...opts
}: QuoteMailOptions & {
  site: Site;
  tone?: "light" | "dark";
  prefix?: "prefix" | "prefixShort" | "prefixOr";
  className?: string;
}) {
  const email = site.company.email;
  if (!email) return null;
  const t = messagesFor(site).email;
  const color = tone === "dark" ? "text-white/85 hover:text-white" : "text-muted hover:text-ink";
  return (
    <a
      href={quoteMailto(email, t, opts)}
      className={`inline-flex items-center gap-2 text-sm ${color} ${className}`}
    >
      <MailIcon />
      <span>
        {t[prefix]} <span className="font-semibold underline underline-offset-2">{email}</span>
      </span>
    </a>
  );
}

/** Przycisk: „Napisz: office@amerisolar.pl”. */
export function EmailQuoteButton({
  site,
  variant = "ghost",
  className = "",
  ...opts
}: QuoteMailOptions & {
  site: Site;
  variant?: "ghost" | "onDark" | "primary" | "secondary";
  className?: string;
}) {
  const email = site.company.email;
  if (!email) return null;
  const t = messagesFor(site).email;
  return (
    <a href={quoteMailto(email, t, opts)} className={buttonClass(variant, className)}>
      <MailIcon />
      <span>{tpl(t.button, { email })}</span>
    </a>
  );
}
