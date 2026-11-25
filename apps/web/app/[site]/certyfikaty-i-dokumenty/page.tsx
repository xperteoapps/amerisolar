// apps/web/app/[site]/certyfikaty-i-dokumenty/page.tsx
// Karty katalogowe do pobrania (bez bramki e-mail — CLAUDE.md §4).
// Lista modeli z data/products.json; pliki z lib/documents.ts.
import { notFound } from "next/navigation";
import { Breadcrumbs, ButtonLink, Container } from "@amerisolar/ui";
import { isFlexible, powerRange, products, range } from "@amerisolar/content";
import { formatFileSize, getDatasheet } from "@/lib/documents";
import { RFQ_PATH, isReady } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbLd } from "@/lib/seo/jsonld";
import { isSiteKey, sites } from "@/lib/sites";

const PATH = "/certyfikaty-i-dokumenty/";
const TITLE = "Karty katalogowe modułów Amerisolar (PDF)";

export async function generateMetadata({ params }: PageProps<"/[site]/certyfikaty-i-dokumenty">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  return buildMetadata({
    site: sites[key],
    path: PATH,
    title: TITLE,
    description:
      "Pobierz karty katalogowe PDF modułów Amerisolar: TOPCon 430–720 W, bifacjalne, double glass i elastyczne. Pełne parametry STC, NOCT, wymiary i pakowanie.",
  });
}

export default async function DocumentsPage({ params }: PageProps<"/[site]/certyfikaty-i-dokumenty">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];

  const crumbs = [
    { name: "Strona główna", path: "/" },
    { name: "Certyfikaty i dokumenty", path: PATH },
  ];

  const groups = [
    { title: "Moduły szklane TOPCon (rama aluminiowa)", items: products.filter((p) => !isFlexible(p)) },
    { title: "Moduły elastyczne (2 mm, montaż klejony)", items: products.filter(isFlexible) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(site, crumbs)} />
      <section className="py-10">
        <Container>
          <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.path }))} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight">{TITLE}</h1>
          <p className="mt-4 max-w-3xl text-muted">
            Oficjalne karty katalogowe producenta w języku angielskim. Zawierają parametry elektryczne w
            warunkach STC i NOCT, współczynniki temperaturowe, wymiary, masę, rysunki techniczne, krzywe I-V
            oraz dane o pakowaniu. Pliki są dostępne bez rejestracji.
          </p>
        </Container>
      </section>

      {groups.map((g) => (
        <section key={g.title} className="pb-10">
          <Container>
            <h2 className="mb-4 text-xl font-semibold">{g.title}</h2>
            <ul className="divide-y divide-line rounded-(--radius-card) border border-line bg-white">
              {g.items.map((p) => {
                const file = getDatasheet(p.slug);
                const { min, max } = powerRange(p);
                return (
                  <li key={p.slug} className="flex flex-wrap items-center justify-between gap-4 p-5">
                    <div>
                      <p className="font-semibold text-ink">{p.model}</p>
                      <p className="text-sm text-muted">
                        {p.family} · {range(min, max, "W")}
                        {file ? ` · wersja ${file.version}` : ""}
                      </p>
                    </div>
                    {file ? (
                      <ButtonLink
                        href={file.href}
                        variant="ghost"
                        download
                        aria-label={`Pobierz kartę katalogową ${p.model} (PDF, ${formatFileSize(file.sizeBytes)})`}
                      >
                        Pobierz PDF ({formatFileSize(file.sizeBytes)})
                      </ButtonLink>
                    ) : (
                      <p className="text-sm text-muted">Karta w przygotowaniu</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      ))}

      <section className="pb-16">
        <Container>
          <div className="rounded-(--radius-card) bg-surface p-6">
            <h2 className="text-lg font-semibold">
              Potrzebujesz certyfikatów lub dokumentacji do przetargu?
            </h2>
            <p className="mt-2 max-w-3xl text-muted">
              Certyfikaty, warunki gwarancji i dokumenty do projektu przekazujemy na zapytanie, razem z ofertą
              na dostawę paletową lub kontenerową.
            </p>
            {isReady(RFQ_PATH) ? (
              <ButtonLink href={RFQ_PATH} className="mt-4">
                Zapytaj o cenę kontenerową
              </ButtonLink>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}
