// apps/web/app/[site]/certyfikaty-i-dokumenty/page.tsx
// Karty katalogowe i certyfikaty do pobrania, skatalogowane wg rodzaju.
// Certyfikat pokazujemy przy modelu tylko w zakresie mocy z certyfikatu (CLAUDE.md §6).
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Container } from "@amerisolar/ui";
import { powerRange } from "@amerisolar/content";
import { CtaBand } from "@/components/cta-band";
import { DocLink } from "@/components/doc-link";
import { EmailQuoteLink } from "@/components/email-quote";
import { catalog } from "@/lib/catalog";
import {
  certCategories,
  certificatesForProduct,
  certificatesInCategory,
  coverageLabel,
  coverageOf,
  datasheetFor,
  docTitle,
  type Certificate,
} from "@/lib/documents";
import { formatter, type Formatter } from "@/lib/i18n";
import { href, localPath, productHref, rfqHref } from "@/lib/routes";
import { breadcrumbLd, JsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, sites, type Site } from "@/lib/sites";
import { messagesFor, type Messages } from "@/messages";

export async function generateMetadata({ params }: PageProps<"/[site]/certyfikaty-i-dokumenty">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  const site = sites[key];
  const t = messagesFor(site).docs;
  return buildMetadata({ site, route: { id: "docs" }, title: t.metaTitle, description: t.metaDescription });
}

export default async function DocumentsPage({ params }: PageProps<"/[site]/certyfikaty-i-dokumenty">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];
  const m = messagesFor(site);
  const t = m.docs;
  const f = formatter(site.locale);
  const crumbs = [
    { name: m.common.home, id: "home" as const },
    { name: t.h1, id: "docs" as const },
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
          <nav aria-label={t.toc} className="mt-8">
            <ul className="flex flex-wrap gap-2 text-sm">
              {[
                { id: "karty", title: t.datasheetsAnchor },
                ...certCategories.map((id) => ({ id, title: t.sections[id].title })),
              ].map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-block rounded-full border border-ink/15 bg-white px-4 py-2 hover:border-forest-700"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {/* KARTY KATALOGOWE + CERTYFIKATY PER MODUŁ */}
      <section id="karty" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <h2 className="font-wide text-3xl font-semibold">{t.byModuleTitle}</h2>
          <ul className="mt-10 border-t-2 border-ink">
            {catalog.map((p) => {
              const ds = datasheetFor(p.slug);
              const certs = certificatesForProduct(p).filter(
                (c) => c.cert.category === "product" || c.cert.category === "ce",
              );
              return (
                <li key={p.slug} className="grid gap-6 border-b border-line py-8 lg:grid-cols-[1fr_1.6fr]">
                  <div>
                    <Link
                      href={productHref(site, p.slug)}
                      className="font-wide text-xl font-semibold text-forest-700 hover:underline"
                    >
                      {p.model}
                    </Link>
                    <p className="mt-1 text-sm text-muted">
                      {f.range(powerRange(p).min, powerRange(p).max, "W")}
                    </p>
                    <div className="mt-4">
                      {ds ? (
                        <DocLink doc={ds} title={docTitle(ds, m, p.model)} />
                      ) : (
                        <Link
                          href={rfqHref(site, p.model)}
                          className="text-sm font-semibold text-sun-deep hover:underline"
                        >
                          {t.requestDatasheet}
                        </Link>
                      )}
                      {ds ? null : (
                        <EmailQuoteLink
                          site={site}
                          subject={m.email.subjectDatasheet.replace("{model}", p.model)}
                          prefix="prefixShort"
                          className="mt-2 flex"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    {certs.length ? (
                      <ul className="space-y-3">
                        {certs.map(({ cert, coverage }) => (
                          <li
                            key={cert.file}
                            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                          >
                            <a
                              href={cert.file}
                              download
                              className="font-medium text-ink hover:text-forest-700 hover:underline"
                            >
                              {docTitle(cert, m)}
                            </a>
                            <span className="text-sm text-muted sm:text-right">
                              {coverageLabel(coverage, m, f)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted">{t.certsOnRequest}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* KATALOG CERTYFIKATÓW WG RODZAJU */}
      {certCategories.map((id, i) => {
        const certs = certificatesInCategory(id);
        if (!certs.length) return null;
        const s = t.sections[id];
        return (
          <section
            key={id}
            id={id}
            className={`scroll-mt-20 border-t border-line py-16 sm:py-20 ${i % 2 === 0 ? "bg-paper" : ""}`}
          >
            <Container>
              <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:items-end">
                <h2 className="font-wide text-3xl font-semibold">{s.title}</h2>
                <p className="max-w-2xl text-muted">{s.intro}</p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {certs.map((c) => (
                  <CertCard key={c.file} cert={c} site={site} m={m} f={f} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CtaBand site={site} />
    </>
  );
}

function CertCard({ cert, site, m, f }: { cert: Certificate; site: Site; m: Messages; f: Formatter }) {
  const cov = coverageOf(cert);
  const c = m.docs.card;
  return (
    <article className="flex flex-col rounded-(--radius-md) border border-line bg-white p-6">
      <h3 className="text-lg font-semibold">{docTitle(cert, m)}</h3>
      <dl className="mt-4 space-y-2 text-sm">
        <Row k={c.body} v={cert.body} />
        <Row k={c.number} v={cert.number} />
        {cert.holder ? <Row k={c.holder} v={cert.holder} /> : null}
        <Row k={c.standards} v={cert.standards.join(", ")} />
        {cert.issued ? <Row k={c.issued} v={f.date(cert.issued)} /> : null}
        {cert.validUntil ? <Row k={c.validUntil} v={f.date(cert.validUntil)} /> : null}
      </dl>
      {cov.length ? (
        <div className="mt-5 border-t border-line pt-4">
          <p className="text-sm font-medium">{c.modules}</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {cov.map((x) => (
              <li key={x.product.slug} className="flex flex-wrap justify-between gap-x-4">
                <Link
                  href={productHref(site, x.product.slug)}
                  className="font-medium text-forest-700 hover:underline"
                >
                  {x.product.model}
                </Link>
                <span className="text-muted">{coverageLabel(x, m, f)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-auto pt-6">
        <DocLink doc={cert} title={c.download} />
      </div>
    </article>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[6.5rem_1fr] gap-3">
      <dt className="text-muted">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
