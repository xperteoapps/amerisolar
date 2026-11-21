// apps/web/app/[site]/panele-fotowoltaiczne/page.tsx
// Katalog modułów. Kategorie (topcon, bifacjalne, elastyczne, full-black, na-farmy) — kolejny etap Fazy 1.
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Container } from "@amerisolar/ui";
import { formatNumber, percent, powerRange, range } from "@amerisolar/content";
import { CtaBand } from "@/components/cta-band";
import { ModuleLineup } from "@/components/module-drawing";
import {
  catalog,
  CATALOG_PATH,
  groupLabel,
  groupOf,
  kindLabel,
  kwpLabel,
  maxEfficiency,
  pieces,
  productPath,
  type ProductGroup,
} from "@/lib/catalog";
import { breadcrumbLd, JsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, sites } from "@/lib/sites";

export async function generateMetadata({ params }: PageProps<"/[site]/panele-fotowoltaiczne">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  return buildMetadata({
    site: sites[key],
    path: CATALOG_PATH,
    title: "Panele fotowoltaiczne Amerisolar 430–720 W — katalog",
    description:
      "Katalog modułów Amerisolar: TOPCon N-type, bifacjalne, double glass i elastyczne. Pełne parametry z kart katalogowych, pakowanie i kWp na kontener.",
  });
}

const groupIntro: Record<ProductGroup, string> = {
  glass:
    "Moduły z hartowanym szkłem i ramą: na dachy domów i firm, carporty, dachy przemysłowe oraz farmy fotowoltaiczne.",
  flexible:
    "Moduły o grubości 2 mm montowane przez klejenie, bez konstrukcji i przewiertów — do dachów o ograniczonej nośności i dachów łukowych.",
};

export default async function CatalogPage({ params }: PageProps<"/[site]/panele-fotowoltaiczne">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];
  const groups: ProductGroup[] = ["glass", "flexible"];

  return (
    <>
      <JsonLd
        data={breadcrumbLd(site, [
          { name: "Strona główna", path: "/" },
          { name: "Panele fotowoltaiczne", path: CATALOG_PATH },
        ])}
      />
      <section className="border-b border-line bg-paper">
        <Container className="pt-10 pb-14">
          <Breadcrumbs
            items={[
              { name: "Strona główna", href: "/" },
              { name: "Panele fotowoltaiczne", href: CATALOG_PATH },
            ]}
            className="text-muted"
          />
          <h1 className="font-wide mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">
            Panele fotowoltaiczne Amerisolar
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {catalog.length} modeli od {Math.min(...catalog.map((p) => powerRange(p).min))} do{" "}
            {Math.max(...catalog.map((p) => powerRange(p).max))} W. Każda karta zawiera pełne tabele STC i
            NOCT, wymiary, pakowanie z liczbą kWp na paletę i kontener, gwarancje oraz certyfikaty.
          </p>
          <ModuleLineup items={catalog} tone="light" className="mt-12 h-auto w-full max-w-5xl" />
        </Container>
      </section>

      {groups.map((g) => {
        const items = catalog.filter((p) => groupOf(p) === g);
        return (
          <section key={g} className="py-16 sm:py-20">
            <Container>
              <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:items-end">
                <h2 className="font-wide text-3xl font-semibold">{groupLabel[g]}</h2>
                <p className="max-w-xl text-muted">{groupIntro[g]}</p>
              </div>
              <ul className="mt-10 border-t-2 border-ink">
                {items.map((p) => {
                  const pr = powerRange(p);
                  return (
                    <li key={p.slug} className="border-b border-line">
                      <Link
                        href={productPath(p)}
                        className="group grid gap-4 py-7 md:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))] md:items-baseline"
                      >
                        <span>
                          <span className="font-wide block text-xl font-semibold text-forest-700 group-hover:underline">
                            {p.model}
                          </span>
                          <span className="mt-1 block text-sm text-muted">{kindLabel(p)}</span>
                        </span>
                        <Stat label="moc" value={range(pr.min, pr.max, "W")} />
                        <Stat label="sprawność maks." value={percent(maxEfficiency(p))} />
                        <Stat
                          label="wymiary"
                          value={`${p.dimensions_mm.map((d) => formatNumber(d, "pl-PL", 0)).join(" × ")} mm`}
                        />
                        <Stat
                          label="40'HQ"
                          value={`${pieces(p, "40ft_hq")} szt., ${kwpLabel(p, "40ft_hq")} kWp`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-sm text-muted">
                kWp w kontenerze: wyliczenie z liczby sztuk wg karty katalogowej i najwyższej klasy mocy.
              </p>
            </Container>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <span className="nums block">
      <span className="block text-xs text-muted">{label}</span>
      <span className="mt-0.5 block font-medium">{value}</span>
    </span>
  );
}
