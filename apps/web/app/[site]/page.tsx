// apps/web/app/[site]/page.tsx
// Strona główna PL. Wszystkie liczby z data/products.json; wyliczenia są podpisane.
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonClass, Container } from "@amerisolar/ui";
import {
  formatNumber,
  isFlexible,
  kwpPer,
  percent,
  piecesPer,
  powerRange,
  productsFile,
  range,
} from "@amerisolar/content";
import { BarList } from "@/components/bars";
import { CtaBand } from "@/components/cta-band";
import { MediaFigure } from "@/components/media-figure";
import { ModuleLineup } from "@/components/module-drawing";
import {
  catalog,
  CATALOG_PATH,
  formatDate,
  maxEfficiency,
  productPath,
  technologyLabel,
} from "@/lib/catalog";
import { media } from "@/lib/media";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, sites } from "@/lib/sites";

export async function generateMetadata({ params }: PageProps<"/[site]">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  return buildMetadata({
    site: sites[key],
    path: "/",
    title: "Moduły PV Amerisolar — dostawy paletowe i kontenerowe",
    description:
      "Moduły fotowoltaiczne Amerisolar TOPCon 430–720 W i linia elastyczna dla instalatorów, EPC i hurtowni. Dostawy paletowe i kontenerowe. Cena na zapytanie.",
  });
}

const glass = catalog.filter((p) => !isFlexible(p));
const flex = catalog.filter(isFlexible);

const allPowers = catalog.flatMap((p) => p.power_bins_w);
const pMin = Math.min(...allPowers);
const pMax = Math.max(...allPowers);
const effMax = Math.max(...catalog.map(maxEfficiency));

const palletPcs = catalog.map((p) => piecesPer(p, "pallet").min);
const hqPcs = catalog.flatMap((p) => {
  const r = piecesPer(p, "40ft_hq");
  return [r.min, r.max];
});
const farm = catalog.find((p) => p.slug === "as-8m132n-bhc")!;
const farmKwp = kwpPer(farm, "40ft_hq", powerRange(farm).max).max;
const roofModels = glass.filter((p) => powerRange(p).max <= 500);
const roofMin = Math.min(...roofModels.map((p) => powerRange(p).min));
const roofMax = Math.max(...roofModels.map((p) => powerRange(p).max));

const flexHeadline = catalog.find((p) => p.slug === "as-7m144nfl-hc-black")!;
const massCompare = ["as-7m144nfl-hc-black", "as-7m132fl-hc", "as-7m144n-hc", "as-8m132n-bhc"]
  .map((s) => catalog.find((p) => p.slug === s)!)
  .map((p) => ({
    key: p.slug,
    label: p.model,
    value: p.areal_mass_kg_m2,
    display: `${formatNumber(p.areal_mass_kg_m2)} kg/m²`,
    tone: isFlexible(p) ? ("flex" as const) : ("muted" as const),
  }));

const containerBars = catalog.map((p) => {
  const k = kwpPer(p, "40ft_hq", powerRange(p).max);
  return {
    key: p.slug,
    label: p.model,
    value: k.max,
    display:
      k.min === k.max ? `${formatNumber(k.max)} kWp` : `${formatNumber(k.min)}–${formatNumber(k.max)} kWp`,
    tone: isFlexible(p) ? ("flex" as const) : ("base" as const),
  };
});

const facts = productsFile.company_facts as { poland_2025_references_mw: number };
const tuv = flexHeadline.tuv_certificate!;

export default async function HomePage({ params }: PageProps<"/[site]">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-forest-950 text-white">
        <Image
          src={media.farm.src}
          alt={media.farm.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/10" />
        <Container className="flex min-h-[78svh] flex-col justify-end pt-32 pb-14">
          <h1 className="font-wide max-w-5xl text-[2.5rem] leading-[1.02] font-bold text-balance sm:text-6xl lg:text-[4.6rem]">
            Moduły PV Amerisolar — dostawy paletowe i kontenerowe
          </h1>
          <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-white/85">
              Siedem modułów od {pMin} do {pMax} W: TOPCon N-type, bifacjalne, double glass i linia elastyczna{" "}
              {flexHeadline.dimensions_mm[2]} mm. Dla instalatorów, EPC, deweloperów farm PV i hurtowni.
            </p>
            <Link href={CATALOG_PATH} className={buttonClass("primary", "shrink-0 px-6 py-3.5")}>
              Zobacz moduły
            </Link>
          </div>
          <p className="mt-10 text-xs text-white/60">{media.farm.caption}</p>
        </Container>
      </section>

      {/* CAŁA OFERTA W JEDNEJ SKALI */}
      <section className="bg-forest-950 text-white">
        <Container className="pt-6 pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/15 pt-10">
            <h2 className="font-wide text-2xl font-semibold sm:text-3xl">Cała oferta w jednej skali</h2>
            <p className="max-w-md text-sm text-forest-300">
              Obrysy narysowane z wymiarów z kart katalogowych. Od{" "}
              {formatNumber(Math.min(...catalog.map((p) => p.dimensions_mm[0])), "pl-PL", 0)} do{" "}
              {formatNumber(Math.max(...catalog.map((p) => p.dimensions_mm[0])), "pl-PL", 0)} mm długości.
            </p>
          </div>
          <ModuleLineup items={catalog} className="mt-12 h-auto w-full" />
        </Container>
      </section>

      {/* DLA KOGO */}
      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="font-wide max-w-2xl text-3xl font-semibold sm:text-4xl">
            Dla instalatorów, farm fotowoltaicznych i hurtowni
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            <article className="border-t-2 border-leaf pt-6">
              <h3 className="text-xl font-semibold">Instalatorzy</h3>
              <p className="nums font-wide mt-4 text-4xl font-semibold text-forest-700">
                {Math.min(...palletPcs)}–{Math.max(...palletPcs)}
              </p>
              <p className="mt-1 text-sm text-muted">modułów na palecie, zależnie od modelu</p>
              <p className="mt-5 leading-relaxed text-muted">
                Moduły {range(roofMin, roofMax, "W")} na dachy domów i firm, w tym wersje bifacjalne na
                carporty i dachy płaskie.
              </p>
            </article>
            <article className="border-t-2 border-leaf pt-6">
              <h3 className="text-xl font-semibold">Farmy PV i EPC</h3>
              <p className="nums font-wide mt-4 text-4xl font-semibold text-forest-700">
                {formatNumber(farmKwp)} kWp
              </p>
              <p className="mt-1 text-sm text-muted">
                w kontenerze 40&apos;HQ modułów {farm.model} {powerRange(farm).max} W (wyliczenie)
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                Bifacjalny double glass {range(powerRange(farm).min, powerRange(farm).max, "W")}, sprawność do{" "}
                {percent(maxEfficiency(farm))}, gwarancja {farm.warranty_years.product} lat na produkt i{" "}
                {farm.warranty_years.linear_power} lat na moc.
              </p>
            </article>
            <article className="border-t-2 border-leaf pt-6">
              <h3 className="text-xl font-semibold">Hurtownie i dystrybutorzy</h3>
              <p className="nums font-wide mt-4 text-4xl font-semibold text-forest-700">
                {Math.min(...hqPcs)}–{formatNumber(Math.max(...hqPcs))}
              </p>
              <p className="mt-1 text-sm text-muted">modułów w kontenerze 40&apos;HQ, zależnie od modelu</p>
              <p className="mt-5 leading-relaxed text-muted">
                Pełna linia w jednym źródle: od modułów dachowych po farmowe i elastyczne. Karta katalogowa i
                certyfikaty dla każdego modelu.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* MODELE */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">Modele w ofercie</h2>
            <p className="max-w-sm text-muted">
              Sprawność do {percent(effMax)}. Parametry STC z kart katalogowych.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="nums w-full min-w-[46rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-ink/80 text-sm text-muted">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Model
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Technologia
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    Moc
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    Sprawność maks.
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    Masa
                  </th>
                  <th scope="col" className="py-3 pl-4 text-right font-medium">
                    Gwarancja produkt/moc
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...glass, ...flex].map((p) => (
                  <tr key={p.slug} className="group border-b border-line">
                    <th scope="row" className="py-4 pr-4 font-semibold">
                      <Link
                        href={productPath(p)}
                        className="text-forest-700 underline-offset-4 group-hover:underline"
                      >
                        {p.model}
                      </Link>
                    </th>
                    <td className="px-4 py-4 text-muted">{technologyLabel(p)}</td>
                    <td className="px-4 py-4 text-right">
                      {range(powerRange(p).min, powerRange(p).max, "W")}
                    </td>
                    <td className="px-4 py-4 text-right">{percent(maxEfficiency(p))}</td>
                    <td className="px-4 py-4 text-right">{formatNumber(p.weight_kg)}&nbsp;kg</td>
                    <td className="py-4 pl-4 text-right">
                      {p.warranty_years.product}/{p.warranty_years.linear_power} lat
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ROZWIĄZANIA SPECJALNE (CLAUDE.md §4A) */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-wide text-3xl font-semibold text-balance sm:text-4xl">
              Dach nie uniesie paneli? Konstrukcja pracuje? Jest na to rozwiązanie
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Moduły elastyczne Amerisolar klei się bezpośrednio do pokrycia — bez konstrukcji wsporczej i bez
              przewiertów. Do hal o lekkiej obudowie, dachów łukowych i obiektów, na których klasyczna
              instalacja wymagałaby wzmocnienia konstrukcji.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t-2 border-leaf pt-6">
              <div>
                <dt className="text-sm text-muted">masa na m²</dt>
                <dd className="nums font-wide mt-1 text-2xl font-semibold sm:text-3xl">ok. 3 kg</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">grubość</dt>
                <dd className="nums font-wide mt-1 text-2xl font-semibold sm:text-3xl">
                  {flexHeadline.dimensions_mm[2]} mm
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">przewiertów w dachu</dt>
                <dd className="nums font-wide mt-1 text-2xl font-semibold sm:text-3xl">0</dd>
              </div>
            </dl>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted">
              Uczciwie: sprawność do {percent(maxEfficiency(flexHeadline))} i gwarancja{" "}
              {flexHeadline.warranty_years.product}/{flexHeadline.warranty_years.linear_power} lat — mniej niż
              w modułach szklanych. Dobór na obiekt z drganiami lub o ograniczonej nośności wymaga oceny
              konstruktora obiektu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {flex.map((p) => (
                <Link key={p.slug} href={productPath(p)} className={buttonClass("ghost")}>
                  {p.model}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <MediaFigure asset={media.archedHall} />
            <figure>
              <figcaption className="mb-4 text-base font-semibold">
                Masa samego modułu na m² powierzchni
              </figcaption>
              <BarList bars={massCompare} />
              <p className="mt-4 text-sm text-muted">
                Dane z kart katalogowych. W systemach szklanych dochodzi masa konstrukcji wsporczej lub
                balastu — zależna od projektu, dlatego jej tu nie doliczamy.
              </p>
            </figure>
          </div>
        </Container>
      </section>

      {/* KONTENER */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">
              Ile mocy mieści kontener 40&apos;HQ
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Liczba modułów w kontenerze wg karty katalogowej pomnożona przez najwyższą klasę mocy danego
              modelu. Przy zamówieniu liczymy na wybranej klasie mocy.
            </p>
          </div>
          <BarList bars={containerBars} />
        </Container>
      </section>

      {/* ZIMA I ŚNIEG */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <MediaFigure asset={media.warehouseWinter} />
          <div>
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">Polska zima w karcie katalogowej</h2>
            <p className="mt-6 leading-relaxed text-muted">
              Moduły szklane Amerisolar mają w kartach katalogowych obciążenie śniegiem{" "}
              {formatNumber(glass[0]!.mechanical_load_pa!.snow, "pl-PL", 0)} Pa i wiatrem{" "}
              {formatNumber(glass[0]!.mechanical_load_pa!.wind, "pl-PL", 0)} Pa oraz zakres temperatur pracy
              od {glass[0]!.operating_temp_c.replace("-", "−")} °C. Dobór do strefy śniegowej i wiatrowej
              obiektu potwierdza projektant instalacji.
            </p>
          </div>
        </Container>
      </section>

      {/* DOKUMENTY I PRODUCENT */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <h2 className="font-wide max-w-2xl text-3xl font-semibold sm:text-4xl">
            Gwarancje, normy i producent
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div className="border-t border-ink/80 pt-6">
              <h3 className="font-semibold">Gwarancje</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Moduły szklane: {glass[0]!.warranty_years.product} lat na produkt i{" "}
                {glass[0]!.warranty_years.linear_power} lat liniowej gwarancji mocy. Linia elastyczna:{" "}
                {flexHeadline.warranty_years.product} i {flexHeadline.warranty_years.linear_power} lat.
              </p>
            </div>
            <div className="border-t border-ink/80 pt-6">
              <h3 className="font-semibold">Normy i certyfikaty</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Karty katalogowe modułów szklanych: IEC 61215, IEC 61730, CE. Moduł {flexHeadline.model}:
                certyfikat {tuv.body} nr {tuv.number}, ważny do {formatDate(tuv.valid_until)}.
              </p>
            </div>
            <div className="border-t border-ink/80 pt-6">
              <h3 className="font-semibold">Producent</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Worldwide Energy and Manufacturing USA Co., Ltd., marka Amerisolar od 2007 r. Według katalogu
                producenta w 2025 r. do Polski trafiło {facts.poland_2025_references_mw} MW modułów.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
