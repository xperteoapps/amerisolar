// apps/web/app/[site]/zapytanie-ofertowe/page.tsx
import { notFound } from "next/navigation";
import { Breadcrumbs, Container } from "@amerisolar/ui";
import { RfqForm } from "@/components/rfq-form";
import { EmailQuoteButton } from "@/components/email-quote";
import { RFQ_PATH } from "@/lib/routes";
import { breadcrumbLd, JsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { isSiteKey, sites } from "@/lib/sites";
import { submitRfq } from "./actions";

export async function generateMetadata({ params }: PageProps<"/[site]/zapytanie-ofertowe">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  return buildMetadata({
    site: sites[key],
    path: RFQ_PATH,
    title: "Zapytanie ofertowe — moduły PV w kontenerach | Amerisolar",
    description:
      "Zapytaj o cenę kontenerową modułów Amerisolar bezpośrednio od producenta. Podaj model, ilość w kWp lub kontenerach, miejsce dostawy i termin.",
  });
}

export default async function RfqPage({ params }: PageProps<"/[site]/zapytanie-ofertowe">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];
  const action = submitRfq.bind(null, key);

  return (
    <>
      <JsonLd
        data={breadcrumbLd(site, [
          { name: "Strona główna", path: "/" },
          { name: "Zapytanie ofertowe", path: RFQ_PATH },
        ])}
      />
      <section className="border-b border-line bg-paper">
        <Container className="pt-10 pb-12">
          <Breadcrumbs
            items={[
              { name: "Strona główna", href: "/" },
              { name: "Zapytanie ofertowe", href: RFQ_PATH },
            ]}
            className="text-muted"
          />
          <h1 className="font-wide mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">
            Zapytaj o cenę kontenerową
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Moduły Amerisolar dostarczamy w ilościach kontenerowych, bezpośrednio od producenta. Im dokładniej
            opiszesz potrzebę — model, ilość, miejsce i termin dostawy — tym szybciej przygotujemy konkretną
            ofertę.
          </p>
          {site.company.email ? (
            <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-(--radius-md) border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-ink">
                <strong>Wolisz e-mail?</strong> Napisz od razu, bez formularza.
              </p>
              <EmailQuoteButton email={site.company.email} variant="primary" className="shrink-0" />
            </div>
          ) : null}
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <RfqForm action={action} fallbackEmail={site.company.email} />
          <aside className="space-y-8 text-sm leading-relaxed text-muted lg:pt-2">
            <div className="border-t-2 border-leaf pt-5">
              <h2 className="text-base font-semibold text-ink">Co dostaniesz w ofercie</h2>
              <ul className="mt-3 space-y-2">
                <li>Cenę dla wybranej klasy mocy i ilości</li>
                <li>Warunki i termin dostawy</li>
                <li>Karty katalogowe i certyfikaty wybranych modeli</li>
              </ul>
            </div>
            <div className="border-t border-line pt-5">
              <h2 className="text-base font-semibold text-ink">Ile to jest kontener?</h2>
              <p className="mt-3">
                Kontener 40&apos;HQ mieści od 558 do 1260 modułów, zależnie od modelu — to od ok. 400 do ponad
                720 kWp. Nie znasz dokładnej ilości? Wpisz przybliżoną moc instalacji.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
