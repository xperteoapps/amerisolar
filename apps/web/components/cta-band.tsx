// apps/web/components/cta-band.tsx
// Pas CTA na dole stron. Główne CTA „Zapytaj o cenę kontenerową” pojawia się,
// gdy formularz RFQ jest gotowy (lib/routes.ts); do tego czasu prowadzi do katalogu.
import Link from "next/link";
import { buttonClass, Container } from "@amerisolar/ui";
import { CATALOG_PATH } from "@/lib/catalog";
import { isReady, RFQ_PATH } from "@/lib/routes";

export function CtaBand({ model }: { model?: string }) {
  const rfq = isReady(RFQ_PATH);
  const rfqHref = model ? `${RFQ_PATH}?model=${encodeURIComponent(model)}` : RFQ_PATH;
  return (
    <section className="bg-forest-900 text-white">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-wide text-2xl font-semibold sm:text-3xl">
            {model ? `Cena ${model} na zapytanie` : "Ceny paletowe i kontenerowe na zapytanie"}
          </h2>
          <p className="mt-3 text-forest-300">
            Podaj model, ilość w kWp, paletach lub kontenerach oraz miejsce dostawy — przygotujemy ofertę.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {rfq ? (
            <Link href={rfqHref} className={buttonClass("primary")}>
              Zapytaj o cenę kontenerową
            </Link>
          ) : null}
          {model ? null : (
            <Link href={CATALOG_PATH} className={buttonClass(rfq ? "onDark" : "primary")}>
              Zobacz moduły
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
