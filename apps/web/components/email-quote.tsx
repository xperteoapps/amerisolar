// apps/web/components/email-quote.tsx
// „Lub napisz: office@…” — szybka ścieżka obok każdego przycisku wyceny,
// dla klientów, którzy nie chcą wypełniać formularza.
import { buttonClass } from "@amerisolar/ui";
import { quoteMailto, type QuoteMailOptions } from "@/lib/contact";

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`size-4 shrink-0 fill-current ${className}`}>
      <path d="M2 4h16v12H2V4Zm2 2v.6l6 4 6-4V6H4Zm12 2.9-6 4-6-4V14h12V8.9Z" />
    </svg>
  );
}

/** Tekstowy link: „lub napisz: office@amerisolar.pl”. */
export function EmailQuoteLink({
  email,
  tone = "light",
  prefix = "lub napisz od razu:",
  className = "",
  ...opts
}: QuoteMailOptions & {
  email: string | null;
  tone?: "light" | "dark";
  prefix?: string;
  className?: string;
}) {
  if (!email) return null;
  const color = tone === "dark" ? "text-white/85 hover:text-white" : "text-muted hover:text-ink";
  return (
    <a
      href={quoteMailto(email, opts)}
      className={`inline-flex items-center gap-2 text-sm ${color} ${className}`}
    >
      <MailIcon />
      <span>
        {prefix} <span className="font-semibold underline underline-offset-2">{email}</span>
      </span>
    </a>
  );
}

/** Przycisk: „Napisz: office@amerisolar.pl”. */
export function EmailQuoteButton({
  email,
  variant = "ghost",
  className = "",
  ...opts
}: QuoteMailOptions & {
  email: string | null;
  variant?: "ghost" | "onDark" | "primary" | "secondary";
  className?: string;
}) {
  if (!email) return null;
  return (
    <a href={quoteMailto(email, opts)} className={buttonClass(variant, className)}>
      <MailIcon />
      <span>Napisz: {email}</span>
    </a>
  );
}
