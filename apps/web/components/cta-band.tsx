// apps/web/components/cta-band.tsx
// Pas CTA na dole stron: zapytanie o cenę kontenerową (z prefillem modelu na kartach) + e-mail.
import Link from "next/link";
import { buttonClass, Container } from "@amerisolar/ui";
import { tpl } from "@/lib/i18n";
import { href, isReady, rfqHref } from "@/lib/routes";
import type { Site } from "@/lib/sites";
import { messagesFor } from "@/messages";
import { EmailQuoteButton, EmailQuoteLink } from "./email-quote";

export function CtaBand({ site, model }: { site: Site; model?: string }) {
  const m = messagesFor(site);
  const rfq = isReady("rfq");
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <div
        aria-hidden="true"
        className="absolute -right-24 -bottom-40 size-[28rem] rounded-full bg-sun/25 blur-3xl"
      />
      <Container className="relative flex flex-col gap-8 py-16 sm:py-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-wide text-3xl font-semibold text-balance sm:text-4xl">
            {model ? tpl(m.cta.titleModel, { model }) : m.cta.title}
          </h2>
          <p className="mt-4 text-lg text-forest-100">{m.cta.text}</p>
          {site.company.email ? (
            <p className="mt-3 text-forest-100">
              {m.cta.noForm}{" "}
              <a href={`mailto:${site.company.email}`} className="font-semibold text-white underline">
                {site.company.email}
              </a>
              .
            </p>
          ) : null}
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          {rfq ? (
            <Link href={rfqHref(site, model)} className={buttonClass("primary", "px-6 py-3.5 text-base")}>
              {m.common.askContainerPrice}
            </Link>
          ) : null}
          <EmailQuoteButton site={site} model={model} variant="onDark" className="px-6 py-3.5 text-base" />
          {model ? null : (
            <Link href={href(site, "catalog")} className={buttonClass("onDark", "px-6 py-3.5 text-base")}>
              {m.common.seeModules}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}

/** Pośrednie CTA w treści sekcji. */
export function InlineCta({
  site,
  text,
  model,
  tone = "light",
}: {
  site: Site;
  text: string;
  model?: string;
  tone?: "light" | "dark";
}) {
  if (!isReady("rfq")) return null;
  const m = messagesFor(site);
  return (
    <div
      className={`mt-12 flex flex-col gap-4 rounded-(--radius-md) border px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
        tone === "dark" ? "border-white/15 bg-white/5" : "border-line bg-white"
      }`}
    >
      <p className={`font-medium ${tone === "dark" ? "text-white" : "text-ink"}`}>{text}</p>
      <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
        <Link href={rfqHref(site, model)} className={buttonClass("primary", "shrink-0")}>
          {m.common.askContainerPrice}
        </Link>
        <EmailQuoteLink site={site} model={model} tone={tone} />
      </div>
    </div>
  );
}
