// apps/web/app/[site]/page.tsx
// Strona główna — szkielet Fazy 0 (noindex do startu). Wszystkie liczby z data/products.json.
import { notFound } from "next/navigation";
import { Container, SpecTable } from "@amerisolar/ui";
import { formatNumber, kwpPer, percent, powerRange, products, range } from "@amerisolar/content";
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

export default async function HomePage({ params }: PageProps<"/[site]">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();

  const rows = products.map((p) => {
    const { min, max } = powerRange(p);
    const kwp = kwpPer(p, "40ft_hq", max);
    return { p, min, max, kwp };
  });

  return (
    <>
      <section className="bg-brand-900 py-16 text-white">
        <Container>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Moduły PV Amerisolar — dostawy paletowe i kontenerowe
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Moduły TOPCon N-type od 430 do 720 W, wersje bifacjalne i double glass oraz linia elastyczna 2 mm
            do dachów o niskiej nośności. Oferta dla instalatorów, EPC, deweloperów farm PV i hurtowni.
          </p>
          <p className="mt-6 text-sm text-brand-100">Cena na zapytanie.</p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Modele w ofercie</h2>
          <SpecTable
            caption="Zestawienie modułów (dane z kart katalogowych producenta, STC)"
            rowHeaderLabel="Model"
            columns={["Technologia", "Moc", "Sprawność maks.", "Masa", "Gwarancja", "kWp w 40'HQ*"]}
            rows={rows.map(({ p, min, max, kwp }) => ({
              label: p.model,
              values: [
                p.family,
                range(min, max, "W"),
                percent(Math.max(...p.efficiency_pct)),
                `${formatNumber(p.weight_kg)} kg`,
                `${p.warranty_years.product}/${p.warranty_years.linear_power} lat`,
                kwp.min === kwp.max
                  ? formatNumber(kwp.max)
                  : `${formatNumber(kwp.min)}–${formatNumber(kwp.max)}`,
              ],
            }))}
            note="* Wyliczenie: liczba sztuk w kontenerze 40'HQ wg karty katalogowej × najwyższa klasa mocy. Gwarancja: produktowa/liniowa mocy."
          />
        </Container>
      </section>
    </>
  );
}
