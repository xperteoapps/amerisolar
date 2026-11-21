// apps/web/components/cta-band.tsx
// Pas CTA na dole stron: zapytanie o cenę kontenerową (z prefillem modelu na kartach).
import Link from "next/link";
import { buttonClass, Container } from "@amerisolar/ui";
import { CATALOG_PATH } from "@/lib/catalog";
import { isReady, RFQ_PATH } from "@/lib/routes";

export const rfqHref = (model?: string) =>
  model ? `${RFQ_PATH}?model=${encodeURIComponent(model)}` : RFQ_PATH;

export function CtaBand({ model }: { model?: string }) {
  const rfq = isReady(RFQ_PATH);
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <div
        aria-hidden="true"
        className="absolute -right-24 -bottom-40 size-[28rem] rounded-full bg-sun/25 blur-3xl"
      />
      <Container className="relative flex flex-col gap-8 py-16 sm:py-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-wide text-3xl font-semibold text-balance sm:text-4xl">
            {model ? `Cena ${model} w ilości kontenerowej` : "Kontener modułów bezpośrednio od producenta"}
          </h2>
          <p className="mt-4 text-lg text-forest-100">
            Podaj model, ilość w kWp lub kontenerach, miejsce dostawy i termin. Przygotujemy ofertę z ceną dla
            wybranej klasy mocy i warunkami dostawy.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          {rfq ? (
            <Link href={rfqHref(model)} className={buttonClass("primary", "px-6 py-3.5 text-base")}>
              Zapytaj o cenę kontenerową
            </Link>
          ) : null}
          {model ? null : (
            <Link href={CATALOG_PATH} className={buttonClass("onDark", "px-6 py-3.5 text-base")}>
              Zobacz moduły
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}

/** Pośrednie CTA w treści sekcji. */
export function InlineCta({
  text,
  model,
  tone = "light",
}: {
  text: string;
  model?: string;
  tone?: "light" | "dark";
}) {
  if (!isReady(RFQ_PATH)) return null;
  return (
    <div
      className={`mt-12 flex flex-col gap-4 rounded-(--radius-md) border px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
        tone === "dark" ? "border-white/15 bg-white/5" : "border-line bg-white"
      }`}
    >
      <p className={`font-medium ${tone === "dark" ? "text-white" : "text-ink"}`}>{text}</p>
      <Link href={rfqHref(model)} className={buttonClass("primary", "shrink-0")}>
        Zapytaj o cenę kontenerową
      </Link>
    </div>
  );
}
