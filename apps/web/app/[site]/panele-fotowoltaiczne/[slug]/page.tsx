// apps/web/app/[site]/panele-fotowoltaiczne/[slug]/page.tsx
// Karta produktu (CLAUDE.md §5.2, MASTER_PROMPT Faza 1). Każda liczba z data/products.json.
// Wyliczenia (kWp, Voc w mrozie) są opisane jako wyliczenia. Fakty z `to_verify` nie są publikowane.
// Teksty w języku serwisu: messages → product, productCopy (pola opisowe z karty producenta).
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, buttonClass, Container, FaqAccordion, SpecTable } from "@amerisolar/ui";
import { getProductBySlug, isFlexible, powerRange, products, type Product } from "@amerisolar/content";
import { CtaBand, InlineCta } from "@/components/cta-band";
import { EmailQuoteLink } from "@/components/email-quote";
import { DimensionDrawing } from "@/components/module-drawing";
import { DocLink } from "@/components/doc-link";
import { certificatesForProduct, coverageLabel, datasheetFor, docTitle } from "@/lib/documents";
import {
  certificatesFor,
  kindLabel,
  kwpLabel,
  maxEfficiency,
  neighbours,
  pieces,
  shortKindLabel,
  showGlass,
  technologyLabel,
  vocAt,
} from "@/lib/catalog";
import { formatter, tpl, type Formatter } from "@/lib/i18n";
import { href, localPath, productHref, rfqHref } from "@/lib/routes";
import { breadcrumbLd, faqLd, JsonLd, productLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, siteKeys, sites, type Site } from "@/lib/sites";
import { messagesFor, type Messages } from "@/messages";
import type { ProductV } from "@/messages/pl";

type Props = PageProps<"/[site]/panele-fotowoltaiczne/[slug]">;

export function generateStaticParams() {
  return siteKeys.flatMap((site) => products.map((p) => ({ site, slug: p.slug })));
}

/** Wartości karty sformatowane wg locale serwisu (wejście do szablonów messages → product). */
function productVars(p: Product, m: Messages, f: Formatter): ProductV {
  const { min, max } = powerRange(p);
  const maxIdx = p.power_bins_w.indexOf(max);
  const g = p.bifacial_gain_example;
  const certs = certificatesFor(p, m, f);
  return {
    model: p.model,
    kind: kindLabel(p, m),
    shortKind: shortKindLabel(p, m),
    powerRange: f.range(min, max, "W", 0),
    minW: String(min),
    maxW: String(max),
    eff: f.pct(maxEfficiency(p)),
    cells: String(p.cells),
    weight: f.num(p.weight_kg),
    arealMass: f.num(p.areal_mass_kg_m2),
    thickness: String(p.dimensions_mm[2]),
    bending: p.bending_radius_m ? f.num(p.bending_radius_m) : "",
    snowPa: p.mechanical_load_pa ? f.num(p.mechanical_load_pa.snow, 0) : "",
    windPa: p.mechanical_load_pa ? f.num(p.mechanical_load_pa.wind, 0) : "",
    warrantyP: String(p.warranty_years.product),
    warrantyL: String(p.warranty_years.linear_power),
    pcsHq: pieces(p, "40ft_hq"),
    pcs20: pieces(p, "20ft"),
    pcsPallet: pieces(p, "pallet"),
    kwpHq: kwpLabel(p, "40ft_hq", f),
    kwpPallet: kwpLabel(p, "pallet", f),
    vocStc: f.num(p.stc.voc_v[maxIdx]!),
    betaVoc: f.signed(p.temp_coeff.voc_pct_per_c),
    vocCold: f.num(vocAt(p, maxIdx, -25), 1),
    maxSys: p.max_system_voltage_v.replace(" DC", ""),
    dims: p.dimensions_mm.map((d) => f.num(d, 0)).join(" × "),
    bifBase: g ? String(g.base_w) : "",
    bif10: g ? String(g.gain_pct_to_pmax_w["10"]) : "",
    bif20: g ? String(g.gain_pct_to_pmax_w["20"]) : "",
    bif30: g ? String(g.gain_pct_to_pmax_w["30"]) : "",
    certs: certs.map((c) => (c.detail ? `${c.label} (${c.detail})` : c.label)).join("; ") + ".",
    glassSuffix: isFlexible(p) ? "" : m.product.faq.glassSuffix,
  };
}

export async function generateMetadata({ params }: Props) {
  const { site: key, slug } = await params;
  const p = getProductBySlug(slug);
  if (!isSiteKey(key) || !p) return {};
  const site = sites[key];
  const m = messagesFor(site);
  const v = productVars(p, m, formatter(site.locale));
  const base = m.product.description(v);
  const tail = m.product.descriptionTail(v);
  return buildMetadata({
    site,
    route: { id: "catalog", sub: p.slug },
    title: m.product.meta(v),
    description: (base + tail).length <= 155 ? base + tail : base,
  });
}

function benefits(p: Product, v: ProductV, m: Messages, f: Formatter): { value: string; label: string }[] {
  const b = m.product.benefit;
  const list = [{ value: v.eff, label: b.eff(v) }];
  if (isFlexible(p)) {
    list.push({ value: `${v.arealMass} kg/m²`, label: b.flexMass(v) });
    if (p.bending_radius_m) list.push({ value: `${v.bending} m`, label: b.bending });
  } else if (p.mechanical_load_pa) {
    list.push({ value: `${v.snowPa} Pa`, label: b.snow(v) });
  }
  if (p.bifacial_gain_example) list.push({ value: `${v.bif20} W`, label: b.bif(v) });
  list.push({ value: tpl(m.common.years, { p: v.warrantyP, l: v.warrantyL }), label: b.warranty });
  void f;
  return list.slice(0, 4);
}

function faq(p: Product, v: ProductV, m: Messages): { question: string; answer: string }[] {
  const q = m.product.faq;
  const items = [q.hq(v), q.pallet(v), q.voc(v), q.warranty(v), q.certs(v), q.dims(v)];
  if (p.bifacial && p.bifacial_gain_example) items.push(q.bif(v));
  if (isFlexible(p)) items.push(q.flex);
  items.push(q.price);
  return items.slice(0, 8);
}

export default async function ProductPage({ params }: Props) {
  const { site: key, slug } = await params;
  const p = getProductBySlug(slug);
  if (!isSiteKey(key) || !p) notFound();
  const site = sites[key];
  const m = messagesFor(site);
  const t = m.product;
  const f = formatter(site.locale);
  const v = productVars(p, m, f);
  const copy = m.productCopy.bySlug[p.slug] ?? { segments: [] };
  const { max } = powerRange(p);
  const bins = p.power_bins_w.map((w) => `${w} W`);
  const faqs = faq(p, v, m);
  const crumbs = [
    { name: m.common.home, href: href(site, "home"), path: localPath(site.lang, "home") },
    { name: m.catalog.breadcrumb, href: href(site, "catalog"), path: localPath(site.lang, "catalog") },
    { name: p.model, href: productHref(site, p.slug), path: localPath(site.lang, "catalog", p.slug) },
  ];
  const flex = isFlexible(p);
  const ds = datasheetFor(p.slug);
  const opTemp = tpl(m.productCopy.opTemp, {
    min: p.operating_temp_c.split(" ")[0]!.replace("-", "−"),
    max: p.operating_temp_c.split(" ").at(-1)!,
  });

  return (
    <>
      <JsonLd
        data={[
          productLd(site, p, localPath(site.lang, "catalog", p.slug), m),
          breadcrumbLd(
            site,
            crumbs.map((c) => ({ name: c.name, path: c.path })),
          ),
          faqLd(faqs),
        ]}
      />

      {/* NAGŁÓWEK KARTY */}
      <section className="border-b border-line bg-paper">
        <Container className="grid gap-12 pt-10 pb-16 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} className="text-muted" />
            <p className="mt-10 text-sm font-medium text-forest-700">{v.kind}</p>
            <h1 className="font-wide mt-2 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              {p.model}
              <span className="mt-2 block text-muted">{v.powerRange}</span>
            </h1>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t-2 border-leaf pt-8 sm:grid-cols-4">
              {benefits(p, v, m, f).map((b) => (
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
              <Link href={rfqHref(site, p.model)} className={buttonClass("primary", "px-6 py-3.5 text-base")}>
                {m.common.askContainerPrice}
              </Link>
              {ds ? (
                <a href={ds.file} download className={buttonClass("ghost", "px-6 py-3.5 text-base")}>
                  {m.common.downloadDatasheet}
                </a>
              ) : (
                <a href="#parametry" className={buttonClass("ghost", "px-6 py-3.5 text-base")}>
                  {m.common.technicalParams}
                </a>
              )}
            </div>
            <EmailQuoteLink site={site} model={p.model} className="mt-4 flex" />
            <p className="mt-4 text-sm text-muted">{t.heroNote(v)}</p>
          </div>
          <DimensionDrawing
            site={site}
            product={p}
            className="mx-auto h-auto max-h-[30rem] w-full max-w-xs lg:mt-6"
          />
        </Container>
      </section>

      {/* ZASTOSOWANIA */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">{t.usesTitle}</h2>
          <div>
            <ul className="space-y-3 text-lg">
              {copy.segments.map((s) => (
                <li key={s} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-0.5 w-4 shrink-0 bg-leaf" />
                  <span>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
                </li>
              ))}
            </ul>
            {flex ? <p className="mt-8 max-w-prose leading-relaxed text-muted">{t.flexNote(v)}</p> : null}
          </div>
        </Container>
      </section>

      {/* PARAMETRY ELEKTRYCZNE */}
      <section id="parametry" className="scroll-mt-20 border-t border-line py-16 sm:py-20">
        <Container className="space-y-14">
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">{t.electricalTitle}</h2>
          <SpecTable
            caption={t.stcCaption}
            columns={bins}
            rows={[
              { label: t.rows.pmax, unit: "W", values: p.power_bins_w.map((x) => f.num(x, 0)) },
              { label: t.rows.eff, unit: "%", values: f.series(p.efficiency_pct) },
              { label: t.rows.voc, unit: "V", values: f.series(p.stc.voc_v) },
              { label: t.rows.isc, unit: "A", values: f.series(p.stc.isc_a) },
              { label: t.rows.vmp, unit: "V", values: f.series(p.stc.vmp_v) },
              { label: t.rows.imp, unit: "A", values: f.series(p.stc.imp_a) },
            ]}
            note={t.tolerance}
          />
          {p.noct_pmax_w ? (
            <SpecTable
              caption={t.noctCaption}
              columns={bins}
              rows={[{ label: t.rows.pmax, unit: "W", values: p.noct_pmax_w.map((x) => f.num(x, 0)) }]}
            />
          ) : (
            <p className="max-w-prose text-muted">{t.noctMissing}</p>
          )}
          <SpecTable
            caption={t.tempCaption}
            columns={[t.value]}
            rows={[
              { label: "Pmax", unit: "%/°C", values: [f.signed(p.temp_coeff.pmax_pct_per_c)] },
              { label: "Voc", unit: "%/°C", values: [f.signed(p.temp_coeff.voc_pct_per_c)] },
              { label: "Isc", unit: "%/°C", values: [f.signed(p.temp_coeff.isc_pct_per_c)] },
              { label: "NOCT", unit: "°C", values: [p.temp_coeff.noct_c] },
            ]}
            className="max-w-md"
          />
          {p.bifacial_gain_example ? (
            <SpecTable
              caption={tpl(t.bifCaption, { w: p.bifacial_gain_example.base_w })}
              columns={Object.keys(p.bifacial_gain_example.gain_pct_to_pmax_w).map((k) => `+${k}%`)}
              rows={[
                {
                  label: t.bifRow,
                  unit: "W",
                  values: Object.values(p.bifacial_gain_example.gain_pct_to_pmax_w).map((x) => f.num(x, 0)),
                },
              ]}
              note={t.bifNote}
            />
          ) : null}
        </Container>
      </section>

      {/* MECHANIKA */}
      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <SpecTable
            caption={t.mechCaption}
            rowHeaderLabel={t.param}
            columns={[t.value]}
            rows={[
              { label: t.mech.dims, values: [`${v.dims} mm`] },
              { label: t.mech.mass, values: [`${v.weight} kg`] },
              { label: t.mech.arealMass, values: [`${v.arealMass} kg/m²`] },
              { label: t.mech.cells, values: [`${p.cells}, ${p.cell}`] },
              ...(showGlass(p) && copy.glass ? [{ label: t.mech.glass, values: [copy.glass] }] : []),
              ...(copy.frontCover ? [{ label: t.mech.frontCover, values: [copy.frontCover] }] : []),
              ...(p.bending_radius_m ? [{ label: t.mech.bending, values: [`${v.bending} m`] }] : []),
              ...(copy.mounting ? [{ label: t.mech.mounting, values: [copy.mounting] }] : []),
              ...(p.mechanical_load_pa
                ? [
                    { label: t.mech.snow, values: [`${v.snowPa} Pa`] },
                    { label: t.mech.wind, values: [`${v.windPa} Pa`] },
                  ]
                : []),
              { label: t.mech.junctionBox, values: [m.productCopy.junctionBox] },
              { label: t.mech.connector, values: [m.productCopy.connector[p.connector] ?? p.connector] },
              { label: t.mech.maxSys, values: [`${v.maxSys} V DC`] },
              { label: t.mech.fuse, values: [`${f.num(p.max_series_fuse_a, 0)} A`] },
              ...(p.fire_rating ? [{ label: t.mech.fire, values: [p.fire_rating] }] : []),
              ...(p.safety_class ? [{ label: t.mech.safety, values: [p.safety_class] }] : []),
              { label: t.mech.opTemp, values: [`${opTemp} °C`] },
            ]}
          />
          <div className="space-y-12">
            <SpecTable
              caption={t.packCaption}
              rowHeaderLabel={t.unit}
              columns={[t.pcsCol, `kWp (${max} W)`]}
              rows={[
                { label: t.pack.pallet, values: [v.pcsPallet, v.kwpPallet] },
                { label: t.pack.c20, values: [v.pcs20, kwpLabel(p, "20ft", f)] },
                { label: t.pack.c40, values: [v.pcsHq, v.kwpHq] },
              ]}
              note={t.packNote}
            />
            <div>
              <h3 className="text-base font-semibold">{t.warrantyTitle}</h3>
              <p className="mt-3 text-muted">{t.warrantyText(v)}</p>
              <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                {certificatesFor(p, m, f).map((c) => (
                  <li key={c.label}>
                    <span className="font-medium">{c.label}</span>
                    {c.detail ? <span className="block text-muted">{c.detail}</span> : null}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col items-start gap-3">
                {ds ? <DocLink doc={ds} title={docTitle(ds, m, p.model)} /> : null}
                {certificatesForProduct(p).map(({ cert, coverage }) => (
                  <span key={cert.file} className="flex flex-col gap-1">
                    <DocLink doc={cert} title={docTitle(cert, m)} />
                    <span className="text-xs text-muted">{coverageLabel(coverage, m, f)}</span>
                  </span>
                ))}
                <Link
                  href={href(site, "docs")}
                  className="text-sm font-semibold text-forest-700 hover:underline"
                >
                  {t.allDocs}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PORÓWNANIE */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">{t.compareTitle}</h2>
          <Compare items={[p, ...neighbours(p)]} current={p.slug} site={site} m={m} f={f} />
          <InlineCta site={site} text={tpl(t.compareCta, { model: p.model })} model={p.model} />
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">
            {tpl(t.faqTitle, { model: p.model })}
          </h2>
          <FaqAccordion items={faqs} />
        </Container>
      </section>

      <CtaBand site={site} model={p.model} />
    </>
  );
}

function Compare({
  items,
  current,
  site,
  m,
  f,
}: {
  items: Product[];
  current: string;
  site: Site;
  m: Messages;
  f: Formatter;
}) {
  const c = m.product.compare;
  const rows: { label: string; get: (p: Product) => string }[] = [
    { label: c.technology, get: (p) => technologyLabel(p, m) },
    { label: c.power, get: (p) => f.range(powerRange(p).min, powerRange(p).max, "W") },
    { label: c.eff, get: (p) => f.pct(maxEfficiency(p)) },
    { label: c.dims, get: (p) => `${p.dimensions_mm.map((d) => f.num(d, 0)).join(" × ")} mm` },
    { label: c.mass, get: (p) => `${f.num(p.weight_kg)} kg` },
    { label: c.bifacial, get: (p) => (p.bifacial ? m.common.yes : m.common.no) },
    {
      label: c.warranty,
      get: (p) => tpl(m.common.years, { p: p.warranty_years.product, l: p.warranty_years.linear_power }),
    },
    { label: c.pcsHq, get: (p) => pieces(p, "40ft_hq") },
  ];
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="nums w-full min-w-[40rem] border-collapse text-left text-[0.95rem]">
        <thead>
          <tr className="border-y border-ink/80">
            <th scope="col" className="py-3 pr-6 font-medium text-muted">
              {m.product.param}
            </th>
            {items.map((p) => (
              <th key={p.slug} scope="col" className="px-4 py-3 font-semibold">
                {p.slug === current ? (
                  <span>{p.model}</span>
                ) : (
                  <Link
                    href={productHref(site, p.slug)}
                    className="text-forest-700 underline underline-offset-4"
                  >
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
