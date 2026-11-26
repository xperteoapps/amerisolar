// apps/web/app/[site]/panele-fotowoltaiczne/page.tsx
// Katalog modułów. Kategorie (topcon, bifacjalne, elastyczne, full-black, na-farmy) — kolejny etap Fazy 1.
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Container } from "@amerisolar/ui";
import { powerRange } from "@amerisolar/content";
import { CtaBand } from "@/components/cta-band";
import { ModuleLineup } from "@/components/module-drawing";
import {
  catalog,
  groupOf,
  kindLabel,
  kwpLabel,
  maxEfficiency,
  pieces,
  type ProductGroup,
} from "@/lib/catalog";
import { datasheetFor } from "@/lib/documents";
import { formatter, tpl } from "@/lib/i18n";
import { href, localPath, productHref } from "@/lib/routes";
import { breadcrumbLd, JsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, sites } from "@/lib/sites";
import { messagesFor } from "@/messages";

export async function generateMetadata({ params }: PageProps<"/[site]/panele-fotowoltaiczne">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  const site = sites[key];
  const t = messagesFor(site).catalog;
  return buildMetadata({
    site,
    route: { id: "catalog" },
    title: t.metaTitle,
    description: t.metaDescription,
  });
}

export default async function CatalogPage({ params }: PageProps<"/[site]/panele-fotowoltaiczne">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];
  const m = messagesFor(site);
  const t = m.catalog;
  const f = formatter(site.locale);
  const groups: ProductGroup[] = ["glass", "flexible"];
  const crumbs = [
    { name: m.common.home, id: "home" as const },
    { name: t.breadcrumb, id: "catalog" as const },
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
        <Container className="pt-10 pb-14">
          <Breadcrumbs
            ariaLabel={m.common.breadcrumbs}
            items={crumbs.map((c) => ({ name: c.name, href: href(site, c.id) }))}
            className="text-muted"
          />
          <h1 className="font-wide mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">{t.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {tpl(t.lead, {
              count: catalog.length,
              min: Math.min(...catalog.map((p) => powerRange(p).min)),
              max: Math.max(...catalog.map((p) => powerRange(p).max)),
            })}
          </p>
          <ModuleLineup site={site} items={catalog} tone="light" className="mt-12 h-auto w-full" />
        </Container>
      </section>

      {groups.map((g) => {
        const items = catalog.filter((p) => groupOf(p) === g);
        return (
          <section key={g} className="py-16 sm:py-20">
            <Container>
              <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:items-end">
                <h2 className="font-wide text-3xl font-semibold">{m.catalogLib.group[g]}</h2>
                <p className="max-w-xl text-muted">{t.intro[g]}</p>
              </div>
              <ul className="mt-10 border-t-2 border-ink">
                {items.map((p) => {
                  const pr = powerRange(p);
                  return (
                    <li
                      key={p.slug}
                      className="grid gap-4 border-b border-line py-7 md:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))_auto] md:items-center"
                    >
                      <Link href={productHref(site, p.slug)} className="group block">
                        <span className="font-wide block text-xl font-semibold text-forest-700 group-hover:underline">
                          {p.model}
                        </span>
                        <span className="mt-1 block text-sm text-muted">{kindLabel(p, m)}</span>
                      </Link>
                      <Stat label={t.stat.power} value={f.range(pr.min, pr.max, "W")} />
                      <Stat label={t.stat.eff} value={f.pct(maxEfficiency(p))} />
                      <Stat
                        label={t.stat.dims}
                        value={`${p.dimensions_mm.map((d) => f.num(d, 0)).join(" × ")} mm`}
                      />
                      <Stat
                        label={t.stat.hq}
                        value={tpl(t.hqValue, { pcs: pieces(p, "40ft_hq"), kwp: kwpLabel(p, "40ft_hq", f) })}
                      />
                      {datasheetFor(p.slug) ? (
                        <a
                          href={datasheetFor(p.slug)!.file}
                          download
                          className="inline-flex items-center gap-2 justify-self-start rounded-(--radius-sm) border border-ink/20 bg-white px-3.5 py-2 text-sm font-semibold hover:border-forest-700"
                        >
                          <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 fill-forest-700">
                            <path d="M10 13.5 5.5 9l1.4-1.4L9 9.7V3h2v6.7l2.1-2.1L14.5 9 10 13.5ZM4 15h12v2H4z" />
                          </svg>
                          {m.common.datasheetPdf}
                          <span className="sr-only"> {p.model}</span>
                        </a>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-sm text-muted">{t.note}</p>
            </Container>
          </section>
        );
      })}

      <CtaBand site={site} />
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
