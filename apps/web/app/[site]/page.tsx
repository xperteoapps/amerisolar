// apps/web/app/[site]/page.tsx
// Strona główna PL — długi landing B2B. Wszystkie liczby z data/products.json;
// wyliczenia są podpisane, deklaracje producenta oznaczone „według producenta/katalogu”.
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonClass, Container, FaqAccordion, SpecTable } from "@amerisolar/ui";
import { isFlexible, kwpPer, piecesPer, powerRange, productsFile } from "@amerisolar/content";
import { BarList } from "@/components/bars";
import { CertBadges } from "@/components/cert-badges";
import { ContainerCalculator, type CalcModel } from "@/components/container-calculator";
import { CtaBand, InlineCta } from "@/components/cta-band";
import { EmailQuoteButton, EmailQuoteLink } from "@/components/email-quote";
import { quoteMailto } from "@/lib/contact";
import { MediaFigure } from "@/components/media-figure";
import { DimensionDrawing, ModuleLineup, SegmentLegend } from "@/components/module-drawing";
import {
  catalog,
  kwpLabel,
  maxEfficiency,
  pieces,
  technologyLabel,
  segmentColor,
  segmentOf,
  vocAt,
} from "@/lib/catalog";
import { formatter, tpl, type Formatter } from "@/lib/i18n";
import { media } from "@/lib/media";
import { datasheetFor } from "@/lib/documents";
import { href, productHref, rfqHref } from "@/lib/routes";
import { faqLd, JsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, sites, type Site } from "@/lib/sites";
import { messagesFor } from "@/messages";
import type { HomeV } from "@/messages/pl";

export async function generateMetadata({ params }: PageProps<"/[site]">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  const site = sites[key];
  const t = messagesFor(site).home;
  return buildMetadata({ site, route: { id: "home" }, title: t.metaTitle, description: t.metaDescription });
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

const facts = productsFile.company_facts as {
  poland_2025_references_mw: number;
  europe_2025_references_mw: Record<string, number>;
};

/** Kraje z katalogu (nazwy PL w products.json) → ISO, do nazw w języku serwisu. */
const ISO: Record<string, string> = {
  Polska: "PL",
  Dania: "DK",
  Węgry: "HU",
  Niemcy: "DE",
  Hiszpania: "ES",
  Włochy: "IT",
  Francja: "FR",
  Holandia: "NL",
  Belgia: "BE",
  Norwegia: "NO",
};
const europeMw: { code: string; mw: number }[] = Object.entries({
  Polska: facts.poland_2025_references_mw,
  ...facts.europe_2025_references_mw,
})
  .map(([name, mw]) => ({ code: ISO[name] ?? name, mw }))
  .sort((a, b) => b.mw - a.mw);
const europeTotal = europeMw.reduce((s, x) => s + x.mw, 0);

/** Referencje rynku serwisu: MW dla kraju z katalogu, w innym przypadku suma Europy. */
const marketMw = (site: Site) => europeMw.find((x) => x.code === site.countryCode)?.mw ?? europeTotal;

function massCompare(f: Formatter) {
  return ["as-7m144nfl-hc-black", "as-7m132fl-hc", "as-7m144n-hc", "as-8m132n-bhc"].map((s) => {
    const p = by(s);
    return {
      key: p.slug,
      label: p.model,
      value: p.areal_mass_kg_m2,
      display: `${f.num(p.areal_mass_kg_m2)} kg/m²`,
      tone: isFlexible(p) ? ("flex" as const) : ("muted" as const),
    };
  });
}

function europeBars(site: Site, f: Formatter) {
  return europeMw.map(({ code, mw }) => ({
    key: code,
    label: f.country(code),
    value: mw,
    display: `${mw} MW`,
    tone: code === (site.countryCode ?? "PL") ? ("base" as const) : ("muted" as const),
  }));
}

// Przykład doboru stringu (wyliczenie poglądowe, wzór z MASTER_PROMPT Faza 2).
const strIdx = industrial.power_bins_w.indexOf(powerRange(industrial).max);
const strVoc = industrial.stc.voc_v[strIdx]!;
const strVocCold = vocAt(industrial, strIdx, -25);
const str1500 = Math.floor(1500 / strVocCold);
const str1000 = Math.floor(1000 / strVocCold);

const calcModels: CalcModel[] = catalog.map((p) => {
  const r = piecesPer(p, "40ft_hq");
  return {
    slug: p.slug,
    model: p.model,
    bins: p.power_bins_w,
    pcsMin: r.min,
    pcsMax: r.max,
    flexible: isFlexible(p),
    datasheet: datasheetFor(p.slug)?.file,
  };
});

function homeVars(site: Site, f: Formatter): HomeV {
  const g = farm.bifacial_gain_example!;
  return {
    pMin: String(pMin),
    pMax: String(pMax),
    flexMm: String(flexHeadline.dimensions_mm[2]),
    hqPcsMin: f.num(Math.min(...hqPcs), 0),
    hqPcsMax: f.num(Math.max(...hqPcs), 0),
    glassWP: String(glass[0]!.warranty_years.product),
    glassWL: String(glass[0]!.warranty_years.linear_power),
    flexWP: String(flexHeadline.warranty_years.product),
    flexWL: String(flexHeadline.warranty_years.linear_power),
    marketMw: String(marketMw(site)),
    effMax: f.pct(effMax),
    smallModel: by("as-7m108n-bhc").model,
    farmModel: farm.model,
    farmMaxW: String(powerRange(farm).max),
    roofRange: f.range(roofMin, roofMax, "W"),
    largeRange: f.range(powerRange(industrial).min, powerRange(farm).max, "W"),
    palletMin: String(Math.min(...palletPcs)),
    palletMax: String(Math.max(...palletPcs)),
    kwpMin: f.num(kwpMin),
    kwpMax: f.num(kwpMax),
    farmKwp: kwpLabel(farm, "40ft_hq", f),
    farmPieces: pieces(farm, "40ft_hq"),
    topconCoeff: f.num(industrial.temp_coeff.pmax_pct_per_c),
    percModel: perc.model,
    percCoeff: f.num(perc.temp_coeff.pmax_pct_per_c),
    heatDiff: f.num((perc.temp_coeff.pmax_pct_per_c - industrial.temp_coeff.pmax_pct_per_c) * -40, 1),
    farmGlass: messagesFor(site).productCopy.bySlug[farm.slug]?.glass ?? farm.glass ?? "",
    bifBase: String(g.base_w),
    bifGain20: String(g.gain_pct_to_pmax_w["20"]),
    farm1MwContainers: String(Math.ceil(1000 / kwpPer(farm, "40ft_hq", powerRange(farm).max).max)),
    farm1MwModules: f.num(Math.ceil(1_000_000 / powerRange(farm).max), 0),
    industrialModel: industrial.model,
    industrialMaxW: String(powerRange(industrial).max),
    vocStc: new Intl.NumberFormat(site.locale, { minimumFractionDigits: 1, maximumFractionDigits: 2 }).format(
      strVoc,
    ),
    betaVoc: f.num(industrial.temp_coeff.voc_pct_per_c),
    vocCold: f.num(strVocCold, 1),
    str1500: String(str1500),
    str1000: String(str1000),
    bendRadius: f.num(flexHeadline.bending_radius_m!),
    flexEff: f.pct(maxEfficiency(flexHeadline)),
    snowPa: f.num(glass[0]!.mechanical_load_pa!.snow, 0),
    windPa: f.num(glass[0]!.mechanical_load_pa!.wind, 0),
    opTemp: tpl(messagesFor(site).productCopy.opTemp, {
      min: glass[0]!.operating_temp_c.split(" ")[0]!.replace("-", "−"),
      max: glass[0]!.operating_temp_c.split(" ").at(-1)!,
    }),
    certValidUntil: "",
  };
}

export default async function HomePage({ params }: PageProps<"/[site]">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];
  const m = messagesFor(site);
  const t = m.home;
  const f = formatter(site.locale);
  const v = homeVars(site, f);
  const faq = t.faq(v);
  const segColors = ["var(--color-ink)", segmentColor.large, segmentColor.roof];
  const segModels = [undefined, undefined, farm.model];

  return (
    <>
      <JsonLd data={faqLd(faq)} />

      {/* 1. HERO */}
      <section className="relative isolate overflow-hidden bg-forest-950 text-white">
        <Image
          src={media.farm.src}
          alt={m.media.farm}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/10" />
        <Container className="flex min-h-[82svh] flex-col justify-end pt-32 pb-12">
          <p className="max-w-xl text-lg font-medium text-sun">{t.eyebrow}</p>
          <h1 className="font-wide mt-4 max-w-5xl text-[2.5rem] leading-[1.02] font-bold text-balance sm:text-6xl lg:text-[4.6rem]">
            {t.h1}
          </h1>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-white/85">{t.lead(v)}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={href(site, "rfq")} className={buttonClass("primary", "px-6 py-3.5 text-base")}>
                {m.common.askContainerPrice}
              </Link>
              <Link href={href(site, "catalog")} className={buttonClass("onDark", "px-6 py-3.5 text-base")}>
                {m.common.seeModules}
              </Link>
              <EmailQuoteLink site={site} tone="dark" className="basis-full" />
            </div>
          </div>
          <ul className="mt-12 grid gap-4 border-t border-white/15 pt-6 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-4">
            {t.bullets(v).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-white/50">{m.common.aiCaption}</p>
        </Container>
      </section>

      {/* 2. LICZBY PRODUCENTA */}
      <section className="border-b border-line">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4">
          {t.facts(v).map((x) => (
            <Fact key={x.label} value={x.value} label={x.label} />
          ))}
        </Container>
      </section>

      {/* 2b. CERTYFIKATY */}
      <CertBadges site={site} />

      {/* 3. OFERTA W JEDNEJ SKALI */}
      <section className="bg-forest-950 text-white">
        <Container className="py-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">{t.lineupTitle}</h2>
            <p className="max-w-lg text-forest-300">{t.lineupText(v)}</p>
          </div>
          <ModuleLineup site={site} items={catalog} className="mt-14 h-auto w-full" />
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <SegmentLegend site={site} />
            <Link href={href(site, "catalog")} className={buttonClass("onDark")}>
              {t.lineupCta}
            </Link>
          </div>
        </Container>
      </section>

      {/* 4. DLACZEGO OD PRODUCENTA */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-wide text-3xl font-semibold text-balance sm:text-4xl">{t.directTitle}</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{t.directText}</p>
            <InlineCta site={site} text={t.directCta} />
          </div>
          <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {t.points(v).map((x) => (
              <Point key={x.title} title={x.title}>
                {x.text}
              </Point>
            ))}
          </dl>
        </Container>
      </section>

      {/* 5. DLA KOGO */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container>
          <h2 className="font-wide max-w-3xl text-3xl font-semibold sm:text-4xl">{t.segmentsTitle}</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.segments(v).map((x, i) => (
              <Segment
                key={x.title}
                color={segColors[i]!}
                title={x.title}
                value={x.value}
                valueLabel={x.valueLabel}
                href={rfqHref(site, segModels[i])}
                cta={x.cta}
                site={site}
                model={segModels[i]}
              >
                {x.text}
              </Segment>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. MODELE */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">{t.modelsTitle}</h2>
            <p className="max-w-sm text-muted">{t.modelsText(v)}</p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="nums w-full min-w-[52rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-ink/80 text-sm text-muted">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    {t.table.model}
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    {t.table.technology}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {t.table.power}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {t.table.effMax}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {t.table.mass}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {t.table.warranty}
                  </th>
                  <th scope="col" className="py-3 pl-4 text-right font-medium">
                    <span className="sr-only">{t.table.actions}</span>
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
                          href={productHref(site, p.slug)}
                          className="text-forest-700 underline-offset-4 group-hover:underline"
                        >
                          {p.model}
                        </Link>
                      </span>
                    </th>
                    <td className="px-4 py-4 text-muted">{technologyLabel(p, m)}</td>
                    <td className="px-4 py-4 text-right">
                      {f.range(powerRange(p).min, powerRange(p).max, "W")}
                    </td>
                    <td className="px-4 py-4 text-right">{f.pct(maxEfficiency(p))}</td>
                    <td className="px-4 py-4 text-right">{f.unit(p.weight_kg, "kg")}</td>
                    <td className="px-4 py-4 text-right">
                      {tpl(m.common.years, { p: p.warranty_years.product, l: p.warranty_years.linear_power })}
                    </td>
                    <td className="py-4 pl-4 text-right">
                      <span className="flex justify-end gap-5 whitespace-nowrap">
                        {datasheetFor(p.slug) ? (
                          <a
                            href={datasheetFor(p.slug)!.file}
                            download
                            className="text-sm font-semibold text-forest-700 hover:underline"
                          >
                            {m.common.datasheetPdf}
                            <span className="sr-only"> {p.model}</span>
                          </a>
                        ) : null}
                        <Link
                          href={rfqHref(site, p.model)}
                          className="text-sm font-semibold text-sun-deep hover:underline"
                        >
                          {m.common.askPrice}
                        </Link>
                        {site.company.email ? (
                          <a
                            href={quoteMailto(site.company.email, m.email, { model: p.model })}
                            className="text-sm font-semibold text-forest-700 hover:underline"
                          >
                            {m.email.tableLink}
                            <span className="sr-only"> {tpl(m.email.tableSr, { model: p.model })}</span>
                          </a>
                        ) : null}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SegmentLegend site={site} tone="light" className="mt-6" />
        </Container>
      </section>

      {/* 7. TECHNOLOGIA */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container>
          <h2 className="font-wide max-w-3xl text-3xl font-semibold sm:text-4xl">{t.techTitle}</h2>
          <div className="mt-14 grid gap-14 lg:grid-cols-3">
            {t.tech(v).map((x) => (
              <article key={x.title}>
                <h3 className="text-xl font-semibold">{x.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{x.text}</p>
              </article>
            ))}
          </div>
          <SpecTable
            className="mt-14"
            caption={t.bifCaption(v)}
            rowHeaderLabel={t.bifRowHeader}
            columns={Object.keys(farm.bifacial_gain_example!.gain_pct_to_pmax_w).map((k) => `+${k}%`)}
            rows={[
              {
                label: t.bifRow,
                unit: "W",
                values: Object.values(farm.bifacial_gain_example!.gain_pct_to_pmax_w).map((x) => f.num(x, 0)),
              },
            ]}
            note={t.bifNote}
          />
        </Container>
      </section>

      {/* 8. LOGISTYKA */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">{t.logisticsTitle}</h2>
            <p className="max-w-lg text-muted">{t.logisticsText}</p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="nums w-full min-w-[46rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-ink/80 text-sm text-muted">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    {t.table.model}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {t.logisticsTable.pallet}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {t.logisticsTable.c20}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {t.logisticsTable.c40}
                  </th>
                  <th scope="col" className="py-3 pl-4 text-right font-medium">
                    {t.logisticsTable.kwp40}
                  </th>
                </tr>
              </thead>
              <tbody>
                {catalog.map((p) => (
                  <tr key={p.slug} className="border-b border-line">
                    <th scope="row" className="py-3.5 pr-4 font-semibold">
                      <Link href={productHref(site, p.slug)} className="text-forest-700 hover:underline">
                        {p.model}
                      </Link>
                    </th>
                    <td className="px-4 py-3.5 text-right">
                      {pieces(p, "pallet")} {m.common.pieces}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      {pieces(p, "20ft")} {m.common.pieces}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      {pieces(p, "40ft_hq")} {m.common.pieces}
                    </td>
                    <td className="py-3.5 pl-4 text-right font-semibold">{kwpLabel(p, "40ft_hq", f)}</td>
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
                display: k.min === k.max ? `${f.num(k.max)} kWp` : `${f.num(k.min)}–${f.num(k.max)} kWp`,
                tone: isFlexible(p) ? ("flex" as const) : ("base" as const),
              }))}
            />
            <div className="rounded-(--radius-md) bg-forest-950 p-8 text-white">
              <h3 className="font-wide text-xl font-semibold">{t.farmBoxTitle}</h3>
              <p className="mt-4 text-forest-100">{t.farmBoxText(v)}</p>
              <Link href={rfqHref(site, farm.model)} className={buttonClass("primary", "mt-6")}>
                {t.farmBoxCta}
              </Link>
              <EmailQuoteLink site={site} model={farm.model} tone="dark" className="mt-4 flex" />
            </div>
          </div>
        </Container>
      </section>

      {/* 8b. KALKULATOR KONTENERÓW */}
      <section id="kalkulator-kontenerow" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">{t.calcTitle}</h2>
            <p className="max-w-lg text-muted">{t.calcText}</p>
          </div>
          <ContainerCalculator
            models={calcModels}
            rfqPath={href(site, "rfq")}
            email={site.company.email}
            t={m.calc}
            mail={m.email}
            locale={site.locale}
            drawings={Object.fromEntries(
              catalog.map((p) => [
                p.slug,
                <DimensionDrawing key={p.slug} site={site} product={p} className="h-auto w-full" />,
              ]),
            )}
          />
        </Container>
      </section>

      {/* 9. DOBÓR STRINGU */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">{t.stringTitle}</h2>
            <p className="mt-6 leading-relaxed text-muted">{t.stringText1}</p>
            <p className="mt-4 leading-relaxed text-muted">{t.stringFormula}</p>
          </div>
          <div className="rounded-(--radius-md) border border-line bg-white p-8">
            <h3 className="font-semibold">{t.stringExample(v)}</h3>
            <dl className="nums mt-6 space-y-3">
              {t.stringRows(v).map((r) => (
                <Row key={r.k} k={r.k} v={r.v} strong={"strong" in r ? r.strong : false} />
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted">{t.stringNote}</p>
          </div>
        </Container>
      </section>

      {/* 10. ROZWIĄZANIA SPECJALNE (CLAUDE.md §4A) */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-wide text-3xl font-semibold text-balance sm:text-4xl">{t.flexTitle}</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{t.flexText}</p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t-2 border-[#7fb3d5] pt-6">
              {t.flexStats(v).map((x) => (
                <div key={x.k}>
                  <dt className="text-sm text-muted">{x.k}</dt>
                  <dd className="nums font-wide mt-1 text-2xl font-semibold sm:text-3xl">{x.v}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-10 space-y-5">
              {t.flexUses(v).map((x) => (
                <UseRow key={x.title} title={x.title}>
                  {x.text}
                </UseRow>
              ))}
            </ul>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted">{t.flexHonest(v)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={rfqHref(site, flexHeadline.model)} className={buttonClass("primary")}>
                {t.flexCta}
              </Link>
              <EmailQuoteButton site={site} subject={m.email.subjectAssessment} model={flexHeadline.model} />
              {flex.map((p) => (
                <Link key={p.slug} href={productHref(site, p.slug)} className={buttonClass("ghost")}>
                  {p.model}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <MediaFigure site={site} asset={media.lightRoof} />
            <figure>
              <figcaption className="mb-4 text-base font-semibold">{t.massCaption}</figcaption>
              <BarList bars={massCompare(f)} />
              <p className="mt-4 text-sm text-muted">{t.massNote}</p>
            </figure>
            <MediaFigure site={site} asset={media.archedHall} />
          </div>
        </Container>
      </section>

      {/* 11. ZIMA */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <MediaFigure site={site} asset={media.warehouseWinter} />
          <div>
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">{t.winterTitle}</h2>
            <p className="mt-6 leading-relaxed text-muted">{t.winterText(v)}</p>
          </div>
        </Container>
      </section>

      {/* 12. EUROPA */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">{t.europeTitle}</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">{t.europeText(v)}</p>
          </div>
          <BarList bars={europeBars(site, f)} />
        </Container>
      </section>

      {/* 13. JAK ZAMÓWIĆ — sekwencja */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container>
          <h2 className="font-wide max-w-2xl text-3xl font-semibold sm:text-4xl">{t.orderTitle}</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {t.orderSteps.map(({ t: title, d }, i) => (
              <li key={title} className="border-t-2 border-leaf pt-5">
                <span className="nums font-wide text-4xl font-semibold text-forest-700">{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ol>
          <InlineCta site={site} text={t.orderCta} />
        </Container>
      </section>

      {/* 14. GWARANCJE I PRODUCENT */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-wide max-w-2xl text-3xl font-semibold sm:text-4xl">{t.trustTitle}</h2>
            <Link href={href(site, "docs")} className={buttonClass("ghost")}>
              {t.trustCta}
            </Link>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {t.trust(v).map((x) => (
              <div key={x.title} className="border-t border-ink/80 pt-6">
                <h3 className="font-semibold">{x.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{x.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 15. FAQ */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="font-wide text-3xl font-semibold sm:text-4xl">{t.faqTitle}</h2>
            <Link href={href(site, "rfq")} className={buttonClass("primary", "mt-8")}>
              {t.faqCta}
            </Link>
            <EmailQuoteLink
              site={site}
              subject={m.email.subjectQuestion}
              prefix="prefixOr"
              className="mt-4 flex"
            />
          </div>
          <FaqAccordion items={faq} />
        </Container>
      </section>

      <CtaBand site={site} />
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
  site,
  model,
  children,
}: {
  color: string;
  title: string;
  value: string;
  valueLabel: string;
  href: string;
  cta: string;
  site: Site;
  model?: string;
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
      <EmailQuoteLink site={site} model={model} prefix="prefixShort" className="mt-2" />
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
