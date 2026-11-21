// apps/web/app/[site]/certyfikaty-i-dokumenty/page.tsx
// Karty katalogowe i certyfikaty do pobrania, skatalogowane wg rodzaju.
// Certyfikat pokazujemy przy modelu tylko w zakresie mocy z certyfikatu (CLAUDE.md §6).
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Container } from "@amerisolar/ui";
import { powerRange, range } from "@amerisolar/content";
import { CtaBand, rfqHref } from "@/components/cta-band";
import { DocLink } from "@/components/doc-link";
import { catalog, formatDate, productPath } from "@/lib/catalog";
import {
  certificatesForProduct,
  certificatesInCategory,
  coverageLabel,
  coverageOf,
  datasheetFor,
  type CertCategory,
  type Certificate,
} from "@/lib/documents";
import { breadcrumbLd, JsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, sites } from "@/lib/sites";

const PATH = "/certyfikaty-i-dokumenty/";

export async function generateMetadata({ params }: PageProps<"/[site]/certyfikaty-i-dokumenty">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  return buildMetadata({
    site: sites[key],
    path: PATH,
    title: "Karty katalogowe i certyfikaty modułów Amerisolar",
    description:
      "Karty katalogowe PDF i certyfikaty modułów Amerisolar do pobrania: TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, mgła solna, amoniak, ISO, WEEE.",
  });
}

const sections: { id: CertCategory; title: string; intro: string }[] = [
  {
    id: "product",
    title: "Certyfikaty modułów IEC 61215 i IEC 61730",
    intro:
      "Certyfikacja typu modułu przez niezależną jednostkę: trwałość i niezawodność (IEC 61215) oraz bezpieczeństwo elektryczne (IEC 61730). Przy każdym certyfikacie podajemy, które klasy mocy z naszej oferty obejmuje.",
  },
  {
    id: "ce",
    title: "Atesty zgodności CE",
    intro:
      "Atesty TÜV SÜD potwierdzające zgodność z normami EN IEC 61730 — podstawa oznakowania CE modułów na rynku UE.",
  },
  {
    id: "tests",
    title: "Testy odporności",
    intro:
      "Dodatkowe badania TÜV SÜD: odporność na degradację PID, mgłę solną (instalacje nadmorskie) i amoniak (obiekty rolnicze).",
  },
  {
    id: "iso",
    title: "Systemy zarządzania w fabryce",
    intro: "Certyfikaty ISO zakładu produkcyjnego modułów w Nantong (Chiny).",
  },
  {
    id: "weee",
    title: "Recykling i zgodność z WEEE",
    intro:
      "Rejestracja producenta w systemie PV CYCLE — odbiór i recykling zużytych modułów zgodnie z dyrektywą WEEE.",
  },
];

export default async function DocumentsPage({ params }: PageProps<"/[site]/certyfikaty-i-dokumenty">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];

  return (
    <>
      <JsonLd
        data={breadcrumbLd(site, [
          { name: "Strona główna", path: "/" },
          { name: "Karty katalogowe i certyfikaty", path: PATH },
        ])}
      />
      <section className="border-b border-line bg-paper">
        <Container className="pt-10 pb-12">
          <Breadcrumbs
            items={[
              { name: "Strona główna", href: "/" },
              { name: "Karty katalogowe i certyfikaty", href: PATH },
            ]}
            className="text-muted"
          />
          <h1 className="font-wide mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">
            Karty katalogowe i certyfikaty
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Dokumentacja producenta do pobrania bez rejestracji. Przy każdym module widzisz jego kartę
            katalogową i certyfikaty, które go obejmują — z dokładnym zakresem mocy.
          </p>
          <nav aria-label="Spis treści" className="mt-8">
            <ul className="flex flex-wrap gap-2 text-sm">
              {[{ id: "karty", title: "Karty katalogowe" }, ...sections].map((s) => (
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
          <h2 className="font-wide text-3xl font-semibold">Karty katalogowe i certyfikaty według modułu</h2>
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
                      href={productPath(p)}
                      className="font-wide text-xl font-semibold text-forest-700 hover:underline"
                    >
                      {p.model}
                    </Link>
                    <p className="mt-1 text-sm text-muted">
                      {range(powerRange(p).min, powerRange(p).max, "W")}
                    </p>
                    <div className="mt-4">
                      {ds ? (
                        <DocLink doc={ds} />
                      ) : (
                        <Link
                          href={rfqHref(p.model)}
                          className="text-sm font-semibold text-sun-deep hover:underline"
                        >
                          Poproś o kartę katalogową
                        </Link>
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
                              {cert.title}
                            </a>
                            <span className="text-sm text-muted sm:text-right">
                              {coverageLabel(coverage)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted">Certyfikaty dla tego modelu przekazujemy z ofertą.</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* KATALOG CERTYFIKATÓW WG RODZAJU */}
      {sections.map((s, i) => {
        const certs = certificatesInCategory(s.id);
        if (!certs.length) return null;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-20 border-t border-line py-16 sm:py-20 ${i % 2 === 0 ? "bg-paper" : ""}`}
          >
            <Container>
              <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:items-end">
                <h2 className="font-wide text-3xl font-semibold">{s.title}</h2>
                <p className="max-w-2xl text-muted">{s.intro}</p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {certs.map((c) => (
                  <CertCard key={c.file} cert={c} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}

function CertCard({ cert }: { cert: Certificate }) {
  const cov = coverageOf(cert);
  return (
    <article className="flex flex-col rounded-(--radius-md) border border-line bg-white p-6">
      <h3 className="text-lg font-semibold">{cert.title}</h3>
      <dl className="mt-4 space-y-2 text-sm">
        <Row k="Jednostka" v={cert.body} />
        <Row k="Numer" v={cert.number} />
        {cert.holder ? <Row k="Posiadacz" v={cert.holder} /> : null}
        <Row k="Normy" v={cert.standards.join(", ")} />
        {cert.issued ? <Row k="Wydany" v={formatDate(cert.issued)} /> : null}
        {cert.validUntil ? <Row k="Ważny do" v={formatDate(cert.validUntil)} /> : null}
      </dl>
      {cov.length ? (
        <div className="mt-5 border-t border-line pt-4">
          <p className="text-sm font-medium">Moduły z naszej oferty</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {cov.map((c) => (
              <li key={c.product.slug} className="flex flex-wrap justify-between gap-x-4">
                <Link href={productPath(c.product)} className="font-medium text-forest-700 hover:underline">
                  {c.product.model}
                </Link>
                <span className="text-muted">{coverageLabel(c)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-auto pt-6">
        <DocLink doc={{ ...cert, title: "Pobierz PDF" }} />
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
