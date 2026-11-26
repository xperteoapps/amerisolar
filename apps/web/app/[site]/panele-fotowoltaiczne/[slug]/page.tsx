// apps/web/app/[site]/panele-fotowoltaiczne/[slug]/page.tsx
// Karta produktu (CLAUDE.md §5.2, MASTER_PROMPT Faza 1). Każda liczba z data/products.json.
// Wyliczenia (kWp, Voc w mrozie) są opisane jako wyliczenia. Fakty z `to_verify` nie są publikowane.
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, buttonClass, Container, FaqAccordion, SpecTable } from "@amerisolar/ui";
import {
  formatNumber,
  getProductBySlug,
  isFlexible,
  percent,
  powerRange,
  products,
  range,
  type Product,
} from "@amerisolar/content";
import { CtaBand, InlineCta, rfqHref } from "@/components/cta-band";
import { EmailQuoteLink } from "@/components/email-quote";
import { DimensionDrawing } from "@/components/module-drawing";
import { DocLink } from "@/components/doc-link";
import { certificatesForProduct, coverageLabel, datasheetFor } from "@/lib/documents";
import {
  CATALOG_PATH,
  certificatesFor,
  kindLabel,
  kwpLabel,
  maxEfficiency,
  neighbours,
  pieces,
  productPath,
  showGlass,
  technologyLabel,
  vocAt,
} from "@/lib/catalog";
import { breadcrumbLd, faqLd, JsonLd, productLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, siteKeys, sites } from "@/lib/sites";

type Props = PageProps<"/[site]/panele-fotowoltaiczne/[slug]">;

export function generateStaticParams() {
  return siteKeys.flatMap((site) => products.map((p) => ({ site, slug: p.slug })));
}

const n = (v: number, digits = 2) => formatNumber(v, "pl-PL", digits);
/** Serie z karty w jednolitej precyzji (tyle miejsc, ile ma najdokładniejsza wartość) — bez zaokrąglania. */
const series = (arr: number[]) => {
  const d = Math.max(...arr.map((v) => (String(v).split(".")[1] ?? "").length));
  const f = new Intl.NumberFormat("pl-PL", { minimumFractionDigits: d, maximumFractionDigits: d });
  return arr.map((v) => f.format(v));
};
const signed = (v: number) => (v > 0 ? `+${n(v, 3)}` : n(v, 3).replace("-", "−"));

export async function generateMetadata({ params }: Props) {
  const { site: key, slug } = await params;
  const p = getProductBySlug(slug);
  if (!isSiteKey(key) || !p) return {};
  const { min, max } = powerRange(p);
  return buildMetadata({
    site: sites[key],
    path: productPath(p),
    title: `${p.model} ${min}–${max} W — ${shortKind(p)}`,
    description: description(p),
  });
}

function shortKind(p: Product) {
  if (isFlexible(p)) return "moduł elastyczny";
  if (p.family.includes("double glass")) return "TOPCon double glass";
  return p.bifacial ? "bifacjalny TOPCon" : "moduł TOPCon";
}

function description(p: Product) {
  const { min, max } = powerRange(p);
  const base = `${p.model}: ${kindLabel(p)} ${min}–${max} W, sprawność do ${percent(maxEfficiency(p))}, ${n(p.weight_kg)} kg.`;
  const tail = ` Tabele STC/NOCT, ${pieces(p, "40ft_hq")} szt. w 40'HQ, gwarancja ${p.warranty_years.product}/${p.warranty_years.linear_power} lat.`;
  return (base + tail).length <= 155 ? base + tail : base;
}

function benefits(p: Product): { value: string; label: string }[] {
  const { min, max } = powerRange(p);
  const list = [
    { value: percent(maxEfficiency(p)), label: `sprawność maks., ${p.cells} ogniw, ${range(min, max, "W")}` },
  ];
  if (isFlexible(p)) {
    list.push({
      value: `${n(p.areal_mass_kg_m2)} kg/m²`,
      label: `${n(p.weight_kg)} kg, grubość ${p.dimensions_mm[2]} mm`,
    });
    if (p.bending_radius_m)
      list.push({ value: `${n(p.bending_radius_m)} m`, label: "minimalny promień gięcia — dachy łukowe" });
  } else if (p.mechanical_load_pa) {
    list.push({
      value: `${n(p.mechanical_load_pa.snow, 0)} Pa`,
      label: `obciążenie śniegiem, wiatr ${n(p.mechanical_load_pa.wind, 0)} Pa`,
    });
  }
  if (p.bifacial_gain_example) {
    const g = p.bifacial_gain_example;
    list.push({
      value: `${g.gain_pct_to_pmax_w["20"]} W`,
      label: `z modułu ${g.base_w} W przy 20% zysku z tyłu (przykład z karty)`,
    });
  }
  list.push({
    value: `${p.warranty_years.product}/${p.warranty_years.linear_power} lat`,
    label: "gwarancja na produkt / liniowa na moc",
  });
  return list.slice(0, 4);
}

function faq(p: Product): { question: string; answer: string }[] {
  const { max } = powerRange(p);
  const maxIdx = p.power_bins_w.indexOf(max);
  const vocCold = vocAt(p, maxIdx, -25);
  const certs = certificatesFor(p);
  const items = [
    {
      question: `Ile modułów ${p.model} mieści kontener 40'HQ?`,
      answer: `Według karty katalogowej ${pieces(p, "40ft_hq")} sztuk. Przy klasie ${max} W daje to ${kwpLabel(p, "40ft_hq")} kWp (wyliczenie: liczba sztuk × moc modułu). Kontener 20' mieści ${pieces(p, "20ft")} sztuk.`,
    },
    {
      question: "Ile modułów jest na palecie?",
      answer: `${pieces(p, "pallet")} sztuk, czyli ${kwpLabel(p, "pallet")} kWp przy klasie ${max} W.`,
    },
    {
      question: "Jakie napięcie Voc ma moduł zimą?",
      answer: `Voc w STC dla klasy ${max} W wynosi ${n(p.stc.voc_v[maxIdx]!)} V, a współczynnik temperaturowy Voc ${signed(p.temp_coeff.voc_pct_per_c)}%/°C. Przy temperaturze ogniwa −25 °C napięcie rośnie do ok. ${n(vocCold, 1)} V (wyliczenie poglądowe). Liczbę modułów w stringu dobiera się tak, aby suma nie przekroczyła napięcia maksymalnego falownika i systemu (${p.max_system_voltage_v.replace(" DC", "")} V DC).`,
    },
    {
      question: "Jaka jest gwarancja?",
      answer: `${p.warranty_years.product} lat gwarancji produktowej i ${p.warranty_years.linear_power} lat liniowej gwarancji mocy.`,
    },
    {
      question: "Jakie certyfikaty ma moduł?",
      answer: certs.map((c) => (c.detail ? `${c.label} (${c.detail})` : c.label)).join("; ") + ".",
    },
    {
      question: "Ile waży moduł i jakie ma wymiary?",
      answer: `${p.dimensions_mm.map((d) => n(d, 0)).join(" × ")} mm, ${n(p.weight_kg)} kg, czyli ${n(p.areal_mass_kg_m2)} kg/m² (masa samego modułu${isFlexible(p) ? "" : ", bez konstrukcji wsporczej"}).`,
    },
  ];
  if (p.bifacial && p.bifacial_gain_example) {
    const g = p.bifacial_gain_example;
    items.push({
      question: "Ile daje strona tylna modułu bifacjalnego?",
      answer: `Karta podaje przykład dla modułu ${g.base_w} W: przy zysku 10% moc rośnie do ${g.gain_pct_to_pmax_w["10"]} W, przy 20% do ${g.gain_pct_to_pmax_w["20"]} W, przy 30% do ${g.gain_pct_to_pmax_w["30"]} W. Rzeczywisty zysk zależy od albedo podłoża, wysokości i rozstawu rzędów.`,
    });
  }
  if (isFlexible(p)) {
    items.push({
      question: "Czy moduł nadaje się na obiekt z drganiami, np. stadion lub halę z suwnicą?",
      answer:
        "Mała masa, brak szkła i montaż bez przewiertów to realne argumenty przy konstrukcjach, które pracują. Producent nie przedstawił jednak jeszcze wyników testów obciążeń dynamicznych, dlatego dobór na konkretny obiekt wymaga oceny konstruktora obiektu.",
    });
  }
  items.push({
    question: "Jaka jest cena?",
    answer:
      "Cena na zapytanie. Zależy od klasy mocy, ilości (palety lub kontenery), miejsca dostawy i terminu.",
  });
  return items.slice(0, 8);
}

export default async function ProductPage({ params }: Props) {
  const { site: key, slug } = await params;
  const p = getProductBySlug(slug);
  if (!isSiteKey(key) || !p) notFound();
  const site = sites[key];
  const path = productPath(p);
  const { min, max } = powerRange(p);
  const bins = p.power_bins_w.map((w) => `${w} W`);
  const faqs = faq(p);
  const crumbs = [
    { name: "Strona główna", href: "/" },
    { name: "Moduły w ofercie", href: CATALOG_PATH },
    { name: p.model, href: path },
  ];
  const flex = isFlexible(p);

  return (
    <>
      <JsonLd
        data={[
          productLd(site, p, path),
          breadcrumbLd(
            site,
            crumbs.map((c) => ({ name: c.name, path: c.href })),
          ),
          faqLd(faqs),
        ]}
      />

      {/* NAGŁÓWEK KARTY */}
      <section className="border-b border-line bg-paper">
        <Container className="grid gap-12 pt-10 pb-16 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <Breadcrumbs items={crumbs} className="text-muted" />
            <p className="mt-10 text-sm font-medium text-forest-700">{kindLabel(p)}</p>
            <h1 className="font-wide mt-2 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              {p.model}
              <span className="mt-2 block text-muted">{range(min, max, "W")}</span>
            </h1>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t-2 border-leaf pt-8 sm:grid-cols-4">
              {benefits(p).map((b) => (
                <div key={b.label}>
                  <dt className="sr-only">{b.label}</dt>
                  <dd>
                    <span className="nums font-wide block text-2xl font-semibold">{b.value}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{b.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={rfqHref(p.model)} className={buttonClass("primary", "px-6 py-3.5 text-base")}>
                Zapytaj o cenę kontenerową
              </Link>
              {datasheetFor(p.slug) ? (
                <a
                  href={datasheetFor(p.slug)!.file}
                  download
                  className={buttonClass("ghost", "px-6 py-3.5 text-base")}
                >
                  Pobierz kartę katalogową PDF
                </a>
              ) : (
                <a href="#parametry" className={buttonClass("ghost", "px-6 py-3.5 text-base")}>
                  Parametry techniczne
                </a>
              )}
            </div>
            <EmailQuoteLink email={site.company.email} model={p.model} className="mt-4 flex" />
            <p className="mt-4 text-sm text-muted">
              Dostawy w ilościach kontenerowych bezpośrednio od producenta: {pieces(p, "40ft_hq")} szt. w
              kontenerze 40&apos;HQ.
            </p>
          </div>
          <DimensionDrawing product={p} className="mx-auto h-auto max-h-[30rem] w-full max-w-xs lg:mt-6" />
        </Container>
      </section>

      {/* ZASTOSOWANIA */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">Zastosowania</h2>
          <div>
            <ul className="space-y-3 text-lg">
              {p.segment_pl.map((s) => (
                <li key={s} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-0.5 w-4 shrink-0 bg-leaf" />
                  <span>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
                </li>
              ))}
            </ul>
            {flex ? (
              <p className="mt-8 max-w-prose leading-relaxed text-muted">
                Montaż przez klejenie, bez przewiertów i bez konstrukcji. Niższa sprawność i krótsza gwarancja
                ({p.warranty_years.product}/{p.warranty_years.linear_power} lat) niż w modułach szklanych —
                ten moduł ma sens tam, gdzie alternatywą jest brak instalacji albo wzmocnienie konstrukcji
                dachu. Moduły leżą płasko lub na łuku, więc uzysk zależy od orientacji dachu. Dopuszczalne
                podłoża i klej potwierdzamy przed ofertą.
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      {/* PARAMETRY ELEKTRYCZNE */}
      <section id="parametry" className="scroll-mt-20 border-t border-line py-16 sm:py-20">
        <Container className="space-y-14">
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">Parametry elektryczne</h2>
          <SpecTable
            caption="Warunki STC (1000 W/m², 25 °C, AM1,5)"
            columns={bins}
            rows={[
              { label: "Moc maksymalna Pmax", unit: "W", values: p.power_bins_w.map((v) => n(v, 0)) },
              { label: "Sprawność modułu", unit: "%", values: series(p.efficiency_pct) },
              { label: "Napięcie obwodu otwartego Voc", unit: "V", values: series(p.stc.voc_v) },
              { label: "Prąd zwarcia Isc", unit: "A", values: series(p.stc.isc_a) },
              { label: "Napięcie w punkcie mocy maks. Vmp", unit: "V", values: series(p.stc.vmp_v) },
              { label: "Prąd w punkcie mocy maks. Imp", unit: "A", values: series(p.stc.imp_a) },
            ]}
            note="Tolerancja Pmax wg karty katalogowej producenta."
          />
          {p.noct_pmax_w ? (
            <SpecTable
              caption="Warunki NOCT (800 W/m², otoczenie 20 °C, wiatr 1 m/s)"
              columns={bins}
              rows={[{ label: "Moc maksymalna Pmax", unit: "W", values: p.noct_pmax_w.map((v) => n(v, 0)) }]}
            />
          ) : (
            <p className="max-w-prose text-muted">
              Parametry NOCT dla tego modelu publikujemy po potwierdzeniu aktualnej karty katalogowej przez
              producenta.
            </p>
          )}
          <SpecTable
            caption="Współczynniki temperaturowe"
            columns={["Wartość"]}
            rows={[
              { label: "Pmax", unit: "%/°C", values: [signed(p.temp_coeff.pmax_pct_per_c)] },
              { label: "Voc", unit: "%/°C", values: [signed(p.temp_coeff.voc_pct_per_c)] },
              { label: "Isc", unit: "%/°C", values: [signed(p.temp_coeff.isc_pct_per_c)] },
              { label: "NOCT", unit: "°C", values: [p.temp_coeff.noct_c] },
            ]}
            className="max-w-md"
          />
          {p.bifacial_gain_example ? (
            <SpecTable
              caption={`Zysk z tyłu modułu — przykład z karty dla ${p.bifacial_gain_example.base_w} W`}
              columns={Object.keys(p.bifacial_gain_example.gain_pct_to_pmax_w).map((k) => `+${k}%`)}
              rows={[
                {
                  label: "Moc łączna",
                  unit: "W",
                  values: Object.values(p.bifacial_gain_example.gain_pct_to_pmax_w).map((v) => n(v, 0)),
                },
              ]}
              note="Rzeczywisty zysk zależy od albedo podłoża, wysokości montażu i rozstawu rzędów."
            />
          ) : null}
        </Container>
      </section>

      {/* MECHANIKA */}
      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <SpecTable
            caption="Mechanika i warunki pracy"
            rowHeaderLabel="Parametr"
            columns={["Wartość"]}
            rows={[
              { label: "Wymiary", values: [`${p.dimensions_mm.map((d) => n(d, 0)).join(" × ")} mm`] },
              { label: "Masa", values: [`${n(p.weight_kg)} kg`] },
              { label: "Masa na m² (sam moduł)", values: [`${n(p.areal_mass_kg_m2)} kg/m²`] },
              { label: "Ogniwa", values: [`${p.cells}, ${p.cell}`] },
              ...(showGlass(p) ? [{ label: "Szkło", values: [p.glass!] }] : []),
              ...(p.front_cover ? [{ label: "Pokrycie przednie", values: [p.front_cover] }] : []),
              ...(p.bending_radius_m
                ? [{ label: "Promień gięcia", values: [`${n(p.bending_radius_m)} m`] }]
                : []),
              ...(p.mounting ? [{ label: "Montaż", values: [p.mounting] }] : []),
              ...(p.mechanical_load_pa
                ? [
                    { label: "Obciążenie — śnieg", values: [`${n(p.mechanical_load_pa.snow, 0)} Pa`] },
                    { label: "Obciążenie — wiatr", values: [`${n(p.mechanical_load_pa.wind, 0)} Pa`] },
                  ]
                : []),
              { label: "Puszka przyłączeniowa", values: [p.junction_box] },
              { label: "Złącza", values: [p.connector] },
              {
                label: "Napięcie maks. systemu",
                values: [`${p.max_system_voltage_v.replace(" DC", "")} V DC`],
              },
              { label: "Maks. bezpiecznik szeregowy", values: [`${n(p.max_series_fuse_a, 0)} A`] },
              ...(p.fire_rating ? [{ label: "Klasa ogniowa", values: [p.fire_rating] }] : []),
              ...(p.safety_class ? [{ label: "Klasa ochronności", values: [p.safety_class] }] : []),
              { label: "Temperatura pracy", values: [`${p.operating_temp_c.replace("-", "−")} °C`] },
            ]}
          />
          <div className="space-y-12">
            <SpecTable
              caption="Pakowanie i moc w jednostce transportowej"
              rowHeaderLabel="Jednostka"
              columns={["Sztuki", `kWp (${max} W)`]}
              rows={[
                { label: "Paleta", values: [pieces(p, "pallet"), kwpLabel(p, "pallet")] },
                { label: "Kontener 20'", values: [pieces(p, "20ft"), kwpLabel(p, "20ft")] },
                { label: "Kontener 40'HQ", values: [pieces(p, "40ft_hq"), kwpLabel(p, "40ft_hq")] },
              ]}
              note="Sztuki wg karty katalogowej; kWp to wyliczenie dla najwyższej klasy mocy."
            />
            <div>
              <h3 className="text-base font-semibold">Gwarancje i certyfikaty</h3>
              <p className="mt-3 text-muted">
                {p.warranty_years.product} lat gwarancji produktowej, {p.warranty_years.linear_power} lat
                liniowej gwarancji mocy.
              </p>
              <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                {certificatesFor(p).map((c) => (
                  <li key={c.label}>
                    <span className="font-medium">{c.label}</span>
                    {c.detail ? <span className="block text-muted">{c.detail}</span> : null}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col items-start gap-3">
                {datasheetFor(p.slug) ? <DocLink doc={datasheetFor(p.slug)!} /> : null}
                {certificatesForProduct(p).map(({ cert, coverage }) => (
                  <span key={cert.file} className="flex flex-col gap-1">
                    <DocLink doc={cert} />
                    <span className="text-xs text-muted">{coverageLabel(coverage)}</span>
                  </span>
                ))}
                <Link
                  href="/certyfikaty-i-dokumenty/"
                  className="text-sm font-semibold text-forest-700 hover:underline"
                >
                  Wszystkie karty katalogowe i certyfikaty
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PORÓWNANIE */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">Porównanie z sąsiednimi modelami</h2>
          <Compare items={[p, ...neighbours(p)]} current={p.slug} />
          <InlineCta site={site} text={`Potrzebujesz ${p.model} w ilości kontenerowej?`} model={p.model} />
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">Pytania o {p.model}</h2>
          <FaqAccordion items={faqs} />
        </Container>
      </section>

      <CtaBand site={site} model={p.model} />
    </>
  );
}

function Compare({ items, current }: { items: Product[]; current: string }) {
  const rows: { label: string; get: (p: Product) => string }[] = [
    { label: "Technologia", get: technologyLabel },
    { label: "Moc", get: (p) => range(powerRange(p).min, powerRange(p).max, "W") },
    { label: "Sprawność maks.", get: (p) => percent(maxEfficiency(p)) },
    { label: "Wymiary", get: (p) => `${p.dimensions_mm.map((d) => n(d, 0)).join(" × ")} mm` },
    { label: "Masa", get: (p) => `${n(p.weight_kg)} kg` },
    { label: "Bifacjalny", get: (p) => (p.bifacial ? "tak" : "nie") },
    { label: "Gwarancja", get: (p) => `${p.warranty_years.product}/${p.warranty_years.linear_power} lat` },
    { label: "Sztuk w 40'HQ", get: (p) => pieces(p, "40ft_hq") },
  ];
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="nums w-full min-w-[40rem] border-collapse text-left text-[0.95rem]">
        <thead>
          <tr className="border-y border-ink/80">
            <th scope="col" className="py-3 pr-6 font-medium text-muted">
              Parametr
            </th>
            {items.map((p) => (
              <th key={p.slug} scope="col" className="px-4 py-3 font-semibold">
                {p.slug === current ? (
                  <span>{p.model}</span>
                ) : (
                  <Link href={productPath(p)} className="text-forest-700 underline underline-offset-4">
                    {p.model}
                  </Link>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-line">
              <th scope="row" className="py-3 pr-6 font-normal text-muted">
                {r.label}
              </th>
              {items.map((p) => (
                <td
                  key={p.slug}
                  className={`px-4 py-3 ${p.slug === current ? "bg-forest-100/60 font-medium" : ""}`}
                >
                  {r.get(p)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
