// apps/web/app/[site]/certyfikaty-i-dokumenty/page.tsx
// Karty katalogowe i certyfikaty do pobrania. Certyfikat TÜV tylko przy modelach,
// które obejmuje (CLAUDE.md §6). Pliki: data/documents.json + public/dokumenty/.
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, buttonClass, Container } from "@amerisolar/ui";
import { powerRange, range } from "@amerisolar/content";
import { CtaBand, rfqHref } from "@/components/cta-band";
import { DocLink } from "@/components/doc-link";
import { catalog, certificatesFor, formatDate, productPath } from "@/lib/catalog";
import { datasheetFor, documents } from "@/lib/documents";
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
      "Karty katalogowe PDF modułów Amerisolar i certyfikat TÜV SÜD do pobrania. Normy IEC 61215 i IEC 61730, gwarancje i parametry z dokumentacji producenta.",
  });
}

export default async function DocumentsPage({ params }: PageProps<"/[site]/certyfikaty-i-dokumenty">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];
  const tuvModel = catalog.find((p) => p.tuv_certificate)!;
  const tuv = tuvModel.tuv_certificate!;
  const tuvFile = documents.certificates.find(
    (c) => tuv.number.startsWith(c.number) || c.number === tuv.number,
  );

  return (
    <>
      <JsonLd
        data={breadcrumbLd(site, [
          { name: "Strona główna", path: "/" },
          { name: "Certyfikaty i dokumenty", path: PATH },
        ])}
      />
      <section className="border-b border-line bg-paper">
        <Container className="pt-10 pb-12">
          <Breadcrumbs
            items={[
              { name: "Strona główna", href: "/" },
              { name: "Certyfikaty i dokumenty", href: PATH },
            ]}
            className="text-muted"
          />
          <h1 className="font-wide mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">
            Karty katalogowe i certyfikaty
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Dokumentacja producenta do pobrania bez rejestracji: karty katalogowe wszystkich modeli i
            certyfikat TÜV SÜD. Parametry na naszych stronach pochodzą z tych samych dokumentów.
          </p>
        </Container>
      </section>

      {/* KARTY KATALOGOWE */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-wide text-3xl font-semibold">Karty katalogowe</h2>
          <ul className="mt-10 border-t-2 border-ink">
            {catalog.map((p) => {
              const ds = datasheetFor(p.slug);
              return (
                <li
                  key={p.slug}
                  className="grid gap-4 border-b border-line py-6 md:grid-cols-[1.2fr_1fr_auto] md:items-center"
                >
                  <div>
                    <Link
                      href={productPath(p)}
                      className="font-wide text-lg font-semibold text-forest-700 hover:underline"
                    >
                      {p.model}
                    </Link>
                    <p className="text-sm text-muted">{range(powerRange(p).min, powerRange(p).max, "W")}</p>
                  </div>
                  <p className="text-sm text-muted">{p.certifications_on_datasheet.join(", ")}</p>
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
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* CERTYFIKAT TÜV */}
      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-wide text-3xl font-semibold">Certyfikat TÜV SÜD</h2>
            <dl className="mt-8 space-y-4 border-t-2 border-leaf pt-6">
              <Row k="Jednostka" v={tuv.body} />
              <Row k="Numer" v={tuv.number} />
              <Row k="Normy" v={tuv.standards.join(", ")} />
              <Row k="Wydany" v={formatDate(tuv.issued)} />
              <Row k="Ważny do" v={formatDate(tuv.valid_until)} />
              <Row k="Zakres" v={tuv.covered_range} />
            </dl>
            <div className="mt-8">
              {tuvFile ? (
                <DocLink doc={tuvFile} />
              ) : (
                <Link href={rfqHref(tuvModel.model)} className={buttonClass("ghost")}>
                  Poproś o kopię certyfikatu
                </Link>
              )}
            </div>
          </div>
          <div className="space-y-5 leading-relaxed text-muted lg:pt-16">
            <p>
              Certyfikat obejmuje moduł elastyczny{" "}
              <Link href={productPath(tuvModel)} className="font-semibold text-forest-700 hover:underline">
                {tuvModel.model}
              </Link>{" "}
              w klasach mocy {range(powerRange(tuvModel).min, powerRange(tuvModel).max, "W")}.
            </p>
            <p>
              Dla pozostałych modeli normy wymienione na kartach katalogowych to:{" "}
              {[
                ...new Set(
                  catalog.filter((p) => !p.tuv_certificate).flatMap((p) => p.certifications_on_datasheet),
                ),
              ].join(", ")}
              . Certyfikaty dla tych modeli przekazujemy wraz z ofertą.
            </p>
            <ul className="space-y-2 text-sm">
              {certificatesFor(tuvModel)
                .filter((c) => !c.detail)
                .map((c) => (
                  <li key={c.label}>{c.label}</li>
                ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-4">
      <dt className="text-muted">{k}</dt>
      <dd className="font-medium">{v}</dd>
    </div>
  );
}
