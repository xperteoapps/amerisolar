// apps/web/app/[site]/page.tsx
// Strona główna PL — długi landing B2B. Wszystkie liczby z data/products.json;
// wyliczenia są podpisane, deklaracje producenta oznaczone „według producenta/katalogu”.
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonClass, Container, FaqAccordion, SpecTable } from "@amerisolar/ui";
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
import { CtaBand, InlineCta, rfqHref } from "@/components/cta-band";
import { MediaFigure } from "@/components/media-figure";
import { ModuleLineup, SegmentLegend } from "@/components/module-drawing";
import {
  catalog,
  CATALOG_PATH,
  formatDate,
  kwpLabel,
  maxEfficiency,
  pieces,
  productPath,
  technologyLabel,
  segmentColor,
  segmentOf,
  vocAt,
} from "@/lib/catalog";
import { media } from "@/lib/media";
import { datasheetFor } from "@/lib/documents";
import { RFQ_PATH } from "@/lib/routes";
import { faqLd, JsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, sites } from "@/lib/sites";

export async function generateMetadata({ params }: PageProps<"/[site]">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  return buildMetadata({
    site: sites[key],
    path: "/",
    title: "Panele fotowoltaiczne hurt od producenta — Amerisolar",
    description:
      "Moduły fotowoltaiczne Amerisolar w ilościach kontenerowych prosto od producenta: TOPCon 430–720 W, bifacjalne, double glass, elastyczne. Zapytaj o cenę.",
  });
}

// ---------- dane do sekcji (wyłącznie z products.json) ----------
const glass = catalog.filter((p) => !isFlexible(p));
const flex = catalog.filter(isFlexible);
const by = (slug: string) => catalog.find((p) => p.slug === slug)!;

const allPowers = catalog.flatMap((p) => p.power_bins_w);
const pMin = Math.min(...allPowers);
const pMax = Math.max(...allPowers);
const effMax = Math.max(...catalog.map(maxEfficiency));
const hq = catalog.map((p) => ({ p, k: kwpPer(p, "40ft_hq", powerRange(p).max) }));
const palletPcs = catalog.map((p) => piecesPer(p, "pallet").min);
const hqPcs = catalog.flatMap((p) => {
  const r = piecesPer(p, "40ft_hq");
  return [r.min, r.max];
});
const kwpMin = Math.min(...hq.map((x) => x.k.min));
const kwpMax = Math.max(...hq.map((x) => x.k.max));

const farm = by("as-8m132n-bhc");
const industrial = by("as-7m144n-hc");
const roofModels = glass.filter((p) => powerRange(p).max <= 500);
const roofMin = Math.min(...roofModels.map((p) => powerRange(p).min));
const roofMax = Math.max(...roofModels.map((p) => powerRange(p).max));
const flexHeadline = by("as-7m144nfl-hc-black");
const perc = by("as-7m132fl-hc");
const tuv = flexHeadline.tuv_certificate!;

const facts = productsFile.company_facts as {
  poland_2025_references_mw: number;
  europe_2025_references_mw: Record<string, number>;
};

const massCompare = ["as-7m144nfl-hc-black", "as-7m132fl-hc", "as-7m144n-hc", "as-8m132n-bhc"].map((s) => {
  const p = by(s);
  return {
    key: p.slug,
    label: p.model,
    value: p.areal_mass_kg_m2,
    display: `${formatNumber(p.areal_mass_kg_m2)} kg/m²`,
    tone: isFlexible(p) ? ("flex" as const) : ("muted" as const),
  };
});

const europe = Object.entries({ Polska: facts.poland_2025_references_mw, ...facts.europe_2025_references_mw })
  .sort((a, b) => b[1] - a[1])
  .map(([country, mw]) => ({
    key: country,
    label: country,
    value: mw,
    display: `${mw} MW`,
    tone: country === "Polska" ? ("base" as const) : ("muted" as const),
  }));

// Przykład doboru stringu (wyliczenie poglądowe, wzór z MASTER_PROMPT Faza 2).
const strIdx = industrial.power_bins_w.indexOf(powerRange(industrial).max);
const strVoc = industrial.stc.voc_v[strIdx]!;
const strVocCold = vocAt(industrial, strIdx, -25);
const str1500 = Math.floor(1500 / strVocCold);
const str1000 = Math.floor(1000 / strVocCold);

const homeFaq = [
  {
    question: "Czy moduły Amerisolar kupię bezpośrednio od producenta?",
    answer:
      "Tak. Dostawy realizujemy w ilościach kontenerowych bezpośrednio od producenta — Worldwide Energy and Manufacturing USA Co., Ltd., właściciela marki Amerisolar. Cenę i warunki dostawy podajemy w ofercie.",
  },
  {
    question: "Ile kWp mieści kontener 40'HQ?",
    answer: `Zależnie od modelu od ${formatNumber(kwpMin)} do ${formatNumber(kwpMax)} kWp (wyliczenie: liczba modułów w kontenerze wg karty katalogowej × najwyższa klasa mocy). Na przykład ${farm.model}: ${pieces(farm, "40ft_hq")} sztuk, ${kwpLabel(farm, "40ft_hq")} kWp.`,
  },
  {
    question: "Czym różni się TOPCon od PERC?",
    answer: `TOPCon to ogniwa typu N z pasywowanym kontaktem tylnym. W naszej ofercie przekłada się to m.in. na niższy współczynnik temperaturowy mocy: ${formatNumber(industrial.temp_coeff.pmax_pct_per_c)}%/°C w modułach TOPCon wobec ${formatNumber(perc.temp_coeff.pmax_pct_per_c)}%/°C w module PERC ${perc.model} — w upale moduł TOPCon traci mniej mocy.`,
  },
  {
    question: "Czy warto kupić moduły bifacjalne?",
    answer: `Na farmach, carportach i dachach płaskich z jasnym podłożem — zwykle tak. Karta ${farm.model} podaje przykład: moduł ${farm.bifacial_gain_example!.base_w} W przy 20% zysku z tyłu daje ${farm.bifacial_gain_example!.gain_pct_to_pmax_w["20"]} W. Rzeczywisty zysk zależy od albedo podłoża i wysokości montażu.`,
  },
  {
    question: "Jakie gwarancje mają moduły?",
    answer: `Moduły szklane: ${glass[0]!.warranty_years.product} lat gwarancji produktowej i ${glass[0]!.warranty_years.linear_power} lat liniowej gwarancji mocy. Linia elastyczna: ${flexHeadline.warranty_years.product} i ${flexHeadline.warranty_years.linear_power} lat.`,
  },
  {
    question: "Jakie certyfikaty mają moduły?",
    answer: `Karty katalogowe modułów szklanych wymieniają IEC 61215, IEC 61730 i CE. Moduł ${flexHeadline.model} ma certyfikat ${tuv.body} nr ${tuv.number}, ważny do ${formatDate(tuv.valid_until)}. Dokumenty przekazujemy z ofertą.`,
  },
  {
    question: "Co zrobić, gdy dach nie uniesie klasycznych paneli?",
    answer: `Rozważ linię elastyczną: ok. 3 kg/m², ${flexHeadline.dimensions_mm[2]} mm grubości, montaż przez klejenie bez przewiertów. Dobór na konkretny obiekt wymaga oceny konstruktora — prześlij nam opis dachu w zapytaniu.`,
  },
  {
    question: "Czy macie magazyn w Polsce?",
    answer:
      "Nie. Moduły zamawiasz w ilościach kontenerowych bezpośrednio od producenta — dzięki temu cena dotyczy całej partii, bez kosztów magazynu pośredniego. Warunki i miejsce dostawy ustalamy w ofercie.",
  },
  {
    question: "Jakie jest minimalne zamówienie?",
    answer:
      "Sprzedajemy w ilościach kontenerowych. Ile modułów i kWp mieści kontener 20' i 40'HQ dla każdego modelu, pokazuje tabela powyżej; dokładne minimum dla wybranego modelu podajemy w ofercie.",
  },
  {
    question: "Komu sprzedajecie moduły?",
    answer:
      "Firmom kupującym w ilościach kontenerowych: hurtowniom i dystrybutorom OZE, traderom i importerom oraz firmom montażowym i EPC realizującym duże wolumeny.",
  },
  {
    question: "Jaka jest cena paneli?",
    answer:
      "Cena na zapytanie. Zależy od modelu i klasy mocy, liczby kontenerów, miejsca dostawy i terminu. Wyślij zapytanie — odpowiemy konkretną ofertą.",
  },
];

export default async function HomePage({ params }: PageProps<"/[site]">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();

  return (
    <>
      <JsonLd data={faqLd(homeFaq)} />

      {/* 1. HERO */}
      <section className="relative isolate overflow-hidden bg-forest-950 text-white">
        <Image
          src={media.farm.src}
          alt={media.farm.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/10" />
        <Container className="flex min-h-[82svh] flex-col justify-end pt-32 pb-12">
          <p className="max-w-xl text-lg font-medium text-sun">
            Ilości kontenerowe, bezpośrednio od producenta
          </p>
          <h1 className="font-wide mt-4 max-w-5xl text-[2.5rem] leading-[1.02] font-bold text-balance sm:text-6xl lg:text-[4.6rem]">
            Panele fotowoltaiczne Amerisolar w hurcie — kontenery od producenta
          </h1>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-white/85">
              Moduły TOPCon N-type od {pMin} do {pMax} W, bifacjalne, double glass i linia elastyczna{" "}
              {flexHeadline.dimensions_mm[2]} mm. Dla hurtowni, traderów i firm montażowych kupujących w
              ilościach kontenerowych.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={RFQ_PATH} className={buttonClass("primary", "px-6 py-3.5 text-base")}>
                Zapytaj o cenę kontenerową
              </Link>
              <Link href={CATALOG_PATH} className={buttonClass("onDark", "px-6 py-3.5 text-base")}>
                Zobacz moduły
              </Link>
            </div>
          </div>
          <ul className="mt-12 grid gap-4 border-t border-white/15 pt-6 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-4">
            <li>Dostawy bezpośrednio od producenta</li>
            <li>
              Kontener 40&apos;HQ: {formatNumber(Math.min(...hqPcs), "pl-PL", 0)}–
              {formatNumber(Math.max(...hqPcs), "pl-PL", 0)} modułów
            </li>
            <li>Karta katalogowa i certyfikaty dla każdego modelu</li>
            <li>Gwarancja do {glass[0]!.warranty_years.linear_power} lat na moc</li>
          </ul>
          <p className="mt-6 text-xs text-white/50">{media.farm.caption}</p>
        </Container>
      </section>

      {/* 2. LICZBY PRODUCENTA */}
      <section className="border-b border-line">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4">
          <Fact value="od 1993" label="na rynku — według katalogu producenta, Kalifornia" />
          <Fact value="ok. 11 GW" label="mocy produkcyjnej według producenta (2025)" />
          <Fact
            value={`${facts.poland_2025_references_mw} MW`}
            label="modułów dostarczonych do Polski w 2025 r. (wg katalogu)"
          />
          <Fact value={percent(effMax)} label="maksymalna sprawność modułu w ofercie" />
        </Container>
      </section>

      {/* 3. OFERTA W JEDNEJ SKALI */}
      <section className="bg-forest-950 text-white">
        <Container className="py-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">Siedem modułów, jedna skala</h2>
            <p className="max-w-lg text-forest-300">
              Schematy narysowane z wymiarów i liczby ogniw z kart katalogowych — od kompaktowego{" "}
              {by("as-7m108n-bhc").model} na dachy domów po {farm.model} na farmy fotowoltaiczne.
            </p>
          </div>
          <ModuleLineup items={catalog} className="mt-14 h-auto w-full" />
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <SegmentLegend />
            <Link href={CATALOG_PATH} className={buttonClass("onDark")}>
              Porównaj wszystkie modele
            </Link>
          </div>
        </Container>
      </section>

      {/* 4. DLACZEGO OD PRODUCENTA */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-wide text-3xl font-semibold text-balance sm:text-4xl">
              Hurtowe ilości paneli prosto od producenta
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Zamówienie kontenerowe trafia bezpośrednio do producenta modułów Amerisolar. Krótszy łańcuch
              dostaw to cena liczona dla całej partii i dokumentacja prosto od producenta.
            </p>
            <InlineCta text="Masz projekt na kilkaset kWp lub więcej?" />
          </div>
          <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            <Point title="Cena kontenerowa">
              Wyceniamy całą partię — kontener 20&apos; albo 40&apos;HQ — dla wybranej klasy mocy, zamiast
              ceny za pojedyncze palety.
            </Point>
            <Point title="Pełna dokumentacja">
              Karty katalogowe z tabelami STC i NOCT, współczynnikami temperaturowymi i obciążeniami
              mechanicznymi oraz certyfikaty dla każdego modelu.
            </Point>
            <Point title="Jedna linia, wszystkie segmenty">
              Moduły {range(roofMin, roofMax, "W")} na dachy,{" "}
              {range(powerRange(industrial).min, powerRange(farm).max, "W")} na dachy przemysłowe i farmy oraz
              linia elastyczna do dachów specjalnych.
            </Point>
            <Point title="Gwarancja producenta">
              {glass[0]!.warranty_years.product} lat na produkt i {glass[0]!.warranty_years.linear_power} lat
              liniowej gwarancji mocy w modułach szklanych.
            </Point>
          </dl>
        </Container>
      </section>

      {/* 5. DLA KOGO */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container>
          <h2 className="font-wide max-w-3xl text-3xl font-semibold sm:text-4xl">
            Dla hurtowni, traderów i firm montażowych kupujących w dużych ilościach
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Segment
              color="var(--color-ink)"
              title="Hurtownie i dystrybutorzy OZE"
              value={`${formatNumber(Math.min(...hqPcs), "pl-PL", 0)}–${formatNumber(Math.max(...hqPcs), "pl-PL", 0)}`}
              valueLabel="modułów w kontenerze 40'HQ, zależnie od modelu"
              href={rfqHref()}
              cta="Zapytaj o warunki hurtowe"
            >
              Pełna linia w jednym źródle — od modułów dachowych po farmowe i elastyczne. Karty katalogowe i
              certyfikaty do dalszej sprzedaży, moduły pakowane na paletach po {Math.min(...palletPcs)}–
              {Math.max(...palletPcs)} sztuk.
            </Segment>
            <Segment
              color={segmentColor.large}
              title="Traderzy i importerzy"
              value={`${formatNumber(kwpMin)}–${formatNumber(kwpMax)} kWp`}
              valueLabel="w jednym kontenerze 40'HQ, zależnie od modelu (wyliczenie)"
              href={rfqHref()}
              cta="Zapytaj o dostawy wielokontenerowe"
            >
              Zakup kontenerowy bezpośrednio od producenta, bez pośredniczącej hurtowni. Specyfikację, klasy
              mocy i warunki dostawy ustalamy dla całej partii.
            </Segment>
            <Segment
              color={segmentColor.roof}
              title="Firmy montażowe i EPC"
              value={`${kwpLabel(farm, "40ft_hq")} kWp`}
              valueLabel={`w kontenerze modułów ${farm.model} ${powerRange(farm).max} W (wyliczenie)`}
              href={rfqHref(farm.model)}
              cta="Zapytaj o dostawę na projekt"
            >
              Moduły {range(roofMin, roofMax, "W")} na dachy firm i carporty oraz{" "}
              {range(powerRange(industrial).min, powerRange(farm).max, "W")} na dachy przemysłowe i farmy
              fotowoltaiczne. Kontener to zapas jednego typu modułu na wiele realizacji.
            </Segment>
          </div>
        </Container>
      </section>

      {/* 6. MODELE */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">Moduły fotowoltaiczne w ofercie</h2>
            <p className="max-w-sm text-muted">
              Sprawność do {percent(effMax)}. Parametry STC z kart katalogowych.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="nums w-full min-w-[52rem] border-collapse text-left">
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
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    Gwarancja
                  </th>
                  <th scope="col" className="py-3 pl-4 text-right font-medium">
                    <span className="sr-only">Karta katalogowa i zapytanie</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...glass, ...flex].map((p) => (
                  <tr key={p.slug} className="group border-b border-line">
                    <th scope="row" className="py-4 pr-4 font-semibold">
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="h-6 w-1.5 rounded-full"
                          style={{ background: segmentColor[segmentOf(p)] }}
                        />
                        <Link
                          href={productPath(p)}
                          className="text-forest-700 underline-offset-4 group-hover:underline"
                        >
                          {p.model}
                        </Link>
                      </span>
                    </th>
                    <td className="px-4 py-4 text-muted">{technologyLabel(p)}</td>
                    <td className="px-4 py-4 text-right">
                      {range(powerRange(p).min, powerRange(p).max, "W")}
                    </td>
                    <td className="px-4 py-4 text-right">{percent(maxEfficiency(p))}</td>
                    <td className="px-4 py-4 text-right">{formatNumber(p.weight_kg)}&nbsp;kg</td>
                    <td className="px-4 py-4 text-right">
                      {p.warranty_years.product}/{p.warranty_years.linear_power} lat
                    </td>
                    <td className="py-4 pl-4 text-right">
                      <span className="flex justify-end gap-5 whitespace-nowrap">
                        {datasheetFor(p.slug) ? (
                          <a
                            href={datasheetFor(p.slug)!.file}
                            download
                            className="text-sm font-semibold text-forest-700 hover:underline"
                          >
                            Karta PDF<span className="sr-only"> {p.model}</span>
                          </a>
                        ) : null}
                        <Link
                          href={rfqHref(p.model)}
                          className="text-sm font-semibold text-sun-deep hover:underline"
                        >
                          Zapytaj o cenę
                        </Link>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SegmentLegend tone="light" className="mt-6" />
        </Container>
      </section>

      {/* 7. TECHNOLOGIA */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container>
          <h2 className="font-wide max-w-3xl text-3xl font-semibold sm:text-4xl">
            TOPCon N-type, bifacjalność, double glass — co to daje w praktyce
          </h2>
          <div className="mt-14 grid gap-14 lg:grid-cols-3">
            <article>
              <h3 className="text-xl font-semibold">Mniejsze straty w upale</h3>
              <p className="mt-4 leading-relaxed text-muted">
                Moduły TOPCon w ofercie mają współczynnik temperaturowy mocy{" "}
                {formatNumber(industrial.temp_coeff.pmax_pct_per_c)}
                %/°C. Dla porównania moduł PERC {perc.model}: {formatNumber(perc.temp_coeff.pmax_pct_per_c)}
                %/°C. Przy ogniwie nagrzanym do 65 °C (40 °C powyżej STC) to różnica ok.{" "}
                {formatNumber(
                  (perc.temp_coeff.pmax_pct_per_c - industrial.temp_coeff.pmax_pct_per_c) * -40,
                  "pl-PL",
                  1,
                )}{" "}
                punktu procentowego mocy (wyliczenie).
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Ogniwa połówkowe</h3>
              <p className="mt-4 leading-relaxed text-muted">
                Wszystkie moduły szklane w ofercie mają ogniwa cięte na pół (half-cell). Mniejszy prąd w
                każdej połówce oznacza mniejsze straty rezystancyjne i mniejszy wpływ częściowego zacienienia
                na cały moduł.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Moc z obu stron</h3>
              <p className="mt-4 leading-relaxed text-muted">
                Moduły bifacjalne zbierają też światło odbite od podłoża. {farm.model} ma dodatkowo
                konstrukcję double glass — szkło z obu stron zamiast folii: {farm.glass}.
              </p>
            </article>
          </div>
          <SpecTable
            className="mt-14"
            caption={`Zysk z tyłu modułu bifacjalnego — przykład z karty ${farm.model} (${farm.bifacial_gain_example!.base_w} W)`}
            rowHeaderLabel="Zysk z tyłu"
            columns={Object.keys(farm.bifacial_gain_example!.gain_pct_to_pmax_w).map((k) => `+${k}%`)}
            rows={[
              {
                label: "Moc łączna",
                unit: "W",
                values: Object.values(farm.bifacial_gain_example!.gain_pct_to_pmax_w).map((v) =>
                  formatNumber(v, "pl-PL", 0),
                ),
              },
            ]}
            note="Rzeczywisty zysk zależy od albedo podłoża (trawa, żwir, membrana dachowa), wysokości montażu i rozstawu rzędów."
          />
        </Container>
      </section>

      {/* 8. LOGISTYKA */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">Ile modułów i kWp w kontenerze</h2>
            <p className="max-w-lg text-muted">
              Sztuki według kart katalogowych. kWp to wyliczenie dla najwyższej klasy mocy — w ofercie liczymy
              na klasie, którą wybierzesz.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="nums w-full min-w-[46rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-ink/80 text-sm text-muted">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Model
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    Paleta
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    Kontener 20&apos;
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    Kontener 40&apos;HQ
                  </th>
                  <th scope="col" className="py-3 pl-4 text-right font-medium">
                    kWp w 40&apos;HQ
                  </th>
                </tr>
              </thead>
              <tbody>
                {catalog.map((p) => (
                  <tr key={p.slug} className="border-b border-line">
                    <th scope="row" className="py-3.5 pr-4 font-semibold">
                      <Link href={productPath(p)} className="text-forest-700 hover:underline">
                        {p.model}
                      </Link>
                    </th>
                    <td className="px-4 py-3.5 text-right">{pieces(p, "pallet")} szt.</td>
                    <td className="px-4 py-3.5 text-right">{pieces(p, "20ft")} szt.</td>
                    <td className="px-4 py-3.5 text-right">{pieces(p, "40ft_hq")} szt.</td>
                    <td className="py-3.5 pl-4 text-right font-semibold">{kwpLabel(p, "40ft_hq")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <BarList
              bars={hq.map(({ p, k }) => ({
                key: p.slug,
                label: p.model,
                value: k.max,
                display:
                  k.min === k.max
                    ? `${formatNumber(k.max)} kWp`
                    : `${formatNumber(k.min)}–${formatNumber(k.max)} kWp`,
                tone: isFlexible(p) ? ("flex" as const) : ("base" as const),
              }))}
            />
            <div className="rounded-(--radius-md) bg-forest-950 p-8 text-white">
              <h3 className="font-wide text-xl font-semibold">Farma 1 MWp — ile kontenerów?</h3>
              <p className="mt-4 text-forest-100">
                Z modułami {farm.model} {powerRange(farm).max} W:{" "}
                <strong className="text-white">
                  {Math.ceil(1000 / kwpPer(farm, "40ft_hq", powerRange(farm).max).max)} kontenery 40&apos;HQ
                </strong>{" "}
                ({formatNumber(Math.ceil(1_000_000 / powerRange(farm).max), "pl-PL", 0)} modułów, wyliczenie).
              </p>
              <Link href={rfqHref(farm.model)} className={buttonClass("primary", "mt-6")}>
                Zapytaj o dostawę na farmę
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. DOBÓR STRINGU */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">
              Napięcie Voc zimą i długość stringu
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              W mroźny, słoneczny dzień napięcie modułu rośnie ponad wartość z karty. Dlatego liczbę modułów w
              stringu liczy się dla najniższej temperatury ogniwa, zwykle −25 °C w polskich warunkach
              projektowych.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Wzór: Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).
            </p>
          </div>
          <div className="rounded-(--radius-md) border border-line bg-white p-8">
            <h3 className="font-semibold">
              Przykład: {industrial.model} {powerRange(industrial).max} W
            </h3>
            <dl className="nums mt-6 space-y-3">
              <Row
                k="Voc w STC"
                v={`${formatNumber(strVoc, "pl-PL", 1).includes(",") ? formatNumber(strVoc) : formatNumber(strVoc) + ",0"} V`}
              />
              <Row k="βVoc" v={`${formatNumber(industrial.temp_coeff.voc_pct_per_c)}%/°C`} />
              <Row k="Voc przy −25 °C" v={`${formatNumber(strVocCold, "pl-PL", 1)} V`} strong />
              <Row k="Maks. modułów w stringu, system 1500 V" v={`${str1500}`} strong />
              <Row k="Maks. modułów w stringu, system 1000 V" v={`${str1000}`} />
            </dl>
            <p className="mt-6 text-sm text-muted">
              Wyliczenie poglądowe. O ostatecznej długości stringu decydują też zakres MPPT i maksymalne
              napięcie wejściowe falownika — sprawdza je projektant instalacji.
            </p>
          </div>
        </Container>
      </section>

      {/* 10. ROZWIĄZANIA SPECJALNE (CLAUDE.md §4A) */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-wide text-3xl font-semibold text-balance sm:text-4xl">
              Dach nie uniesie paneli? Konstrukcja pracuje? Jest na to rozwiązanie
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Moduły elastyczne Amerisolar klei się bezpośrednio do pokrycia — bez konstrukcji wsporczej i bez
              przewiertów.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t-2 border-[#7fb3d5] pt-6">
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
            <ul className="mt-10 space-y-5">
              <UseRow title="Dachy o niskiej nośności">
                Hale z blachy trapezowej i płyty warstwowej, obiekty rolnicze, starsze dachy bez rezerwy
                nośności.
              </UseRow>
              <UseRow title="Obiekty z drganiami">
                Stadiony, hale sportowe, areny, zakłady z maszynami i suwnicami — mała masa, brak szkła i
                śrub. Dobór po ocenie konstruktora obiektu.
              </UseRow>
              <UseRow title="Dachy łukowe">
                Promień gięcia {formatNumber(flexHeadline.bending_radius_m!)} m — moduł układa się na łuku bez
                skomplikowanej konstrukcji.
              </UseRow>
            </ul>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted">
              Uczciwie: sprawność do {percent(maxEfficiency(flexHeadline))} i gwarancja{" "}
              {flexHeadline.warranty_years.product}/{flexHeadline.warranty_years.linear_power} lat — mniej niż
              w modułach szklanych. Ten moduł ma sens tam, gdzie alternatywą jest brak instalacji albo
              wzmocnienie konstrukcji.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={rfqHref(flexHeadline.model)} className={buttonClass("primary")}>
                Zamów wstępną ocenę obiektu
              </Link>
              {flex.map((p) => (
                <Link key={p.slug} href={productPath(p)} className={buttonClass("ghost")}>
                  {p.model}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <MediaFigure asset={media.lightRoof} />
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
            <MediaFigure asset={media.archedHall} />
          </div>
        </Container>
      </section>

      {/* 11. ZIMA */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
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

      {/* 12. EUROPA */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">Amerisolar w Europie</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Dostawy modułów w 2025 r. według katalogu producenta. Polska z {facts.poland_2025_references_mw}{" "}
              MW jest jednym z ważniejszych rynków marki w Europie.
            </p>
          </div>
          <BarList bars={europe} />
        </Container>
      </section>

      {/* 13. JAK ZAMÓWIĆ — sekwencja */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container>
          <h2 className="font-wide max-w-2xl text-3xl font-semibold sm:text-4xl">
            Jak zamówić kontener modułów
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {[
              [
                "Zapytanie",
                "Model, ilość w kWp lub kontenerach, miejsce dostawy i termin — przez formularz.",
              ],
              [
                "Oferta",
                "Cena dla wybranej klasy mocy, warunki dostawy oraz karty katalogowe i certyfikaty.",
              ],
              ["Zamówienie", "Potwierdzenie specyfikacji, terminu i warunków płatności."],
              ["Dostawa", "Kontener z modułami w uzgodnionym miejscu i terminie."],
            ].map(([t, d], i) => (
              <li key={t} className="border-t-2 border-leaf pt-5">
                <span className="nums font-wide text-4xl font-semibold text-forest-700">{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ol>
          <InlineCta text="Zacznij od zapytania — to zajmuje kilka minut." />
        </Container>
      </section>

      {/* 14. GWARANCJE I PRODUCENT */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-wide max-w-2xl text-3xl font-semibold sm:text-4xl">
              Gwarancje, normy i producent
            </h2>
            <Link href="/certyfikaty-i-dokumenty/" className={buttonClass("ghost")}>
              Karty katalogowe i certyfikaty do pobrania
            </Link>
          </div>
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
                Worldwide Energy and Manufacturing USA Co., Ltd. — według katalogu firma działa od 1993 r.
                (Kalifornia), marka Amerisolar od 2007 r.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 15. FAQ */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">
              Pytania o panele fotowoltaiczne w hurcie
            </h2>
            <Link href={RFQ_PATH} className={buttonClass("primary", "mt-8")}>
              Zadaj pytanie w zapytaniu
            </Link>
          </div>
          <FaqAccordion items={homeFaq} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="nums font-wide text-3xl font-semibold text-forest-700 sm:text-4xl">{value}</p>
      <p className="mt-2 max-w-[16rem] text-sm leading-snug text-muted">{label}</p>
    </div>
  );
}

function Point({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t-2 border-leaf pt-5">
      <dt className="text-lg font-semibold">{title}</dt>
      <dd className="mt-2 leading-relaxed text-muted">{children}</dd>
    </div>
  );
}

function Segment({
  color,
  title,
  value,
  valueLabel,
  href,
  cta,
  children,
}: {
  color: string;
  title: string;
  value: string;
  valueLabel: string;
  href: string;
  cta: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className="flex flex-col rounded-(--radius-md) bg-white p-7"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="nums font-wide mt-5 text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-sm text-muted">{valueLabel}</p>
      <p className="mt-5 flex-1 leading-relaxed text-muted">{children}</p>
      <Link href={href} className="mt-6 font-semibold text-sun-deep hover:underline">
        {cta}
      </Link>
    </article>
  );
}

function Row({ k, v, strong = false }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
      <dt className="text-muted">{k}</dt>
      <dd className={strong ? "text-lg font-semibold" : ""}>{v}</dd>
    </div>
  );
}

function UseRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="grid gap-1 border-l-2 border-[#7fb3d5] pl-5">
      <span className="font-semibold">{title}</span>
      <span className="leading-relaxed text-muted">{children}</span>
    </li>
  );
}
