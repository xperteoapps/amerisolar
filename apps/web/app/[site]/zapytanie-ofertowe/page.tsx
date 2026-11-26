// apps/web/app/[site]/zapytanie-ofertowe/page.tsx
// Formularz zapytania ofertowego (CLAUDE.md §4) + szybka ścieżka e-mail.
import { notFound } from "next/navigation";
import { Breadcrumbs, Container } from "@amerisolar/ui";
import { EmailQuoteButton } from "@/components/email-quote";
import { RfqForm } from "@/components/rfq-form";
import { href, localPath } from "@/lib/routes";
import { breadcrumbLd, JsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, sites } from "@/lib/sites";
import { messagesFor } from "@/messages";
import { submitRfq } from "./actions";

export async function generateMetadata({ params }: PageProps<"/[site]/zapytanie-ofertowe">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  const site = sites[key];
  const t = messagesFor(site).rfqPage;
  return buildMetadata({
    site,
    route: { id: "rfq" },
    title: t.metaTitle,
    description: t.metaDescription,
  });
}

export default async function RfqPage({ params }: PageProps<"/[site]/zapytanie-ofertowe">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];
  const m = messagesFor(site);
  const t = m.rfqPage;
  const action = submitRfq.bind(null, key);
  const crumbs = [
    { name: m.common.home, id: "home" as const },
    { name: m.routes.rfq, id: "rfq" as const },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbLd(
          site,
          crumbs.map((c) => ({ name: c.name, path: localPath(site.lang, c.id) })),
        )}
      />
      <section className="border-b border-line bg-paper">
        <Container className="pt-10 pb-12">
          <Breadcrumbs
            items={crumbs.map((c) => ({ name: c.name, href: href(site, c.id) }))}
            className="text-muted"
          />
          <h1 className="font-wide mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">{t.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t.lead}</p>
          {site.company.email ? (
            <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-(--radius-md) border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-ink">
                <strong>{t.emailBoxStrong}</strong> {t.emailBoxText}
              </p>
              <EmailQuoteButton site={site} variant="primary" className="shrink-0" />
            </div>
          ) : null}
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <RfqForm action={action} fallbackEmail={site.company.email} t={m.form} />
          <aside className="space-y-8 text-sm leading-relaxed text-muted lg:pt-2">
            <div className="border-t-2 border-leaf pt-5">
              <h2 className="text-base font-semibold text-ink">{t.asideOfferTitle}</h2>
              <ul className="mt-3 space-y-2">
                {t.asideOffer.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-line pt-5">
              <h2 className="text-base font-semibold text-ink">{t.asideContainerTitle}</h2>
              <p className="mt-3">{t.asideContainer}</p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
