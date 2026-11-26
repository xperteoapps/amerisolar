"use client";
// apps/web/components/container-calculator.tsx
// Kalkulator kontenerów: moduł + klasa mocy → MW ↔ liczba kontenerów 40'HQ.
// Dane (sztuki w 40'HQ, klasy mocy) z products.json, przekazane z serwera.
// Schematy modułów renderuje serwer (props `drawings`). Wynik → RFQ z prefillem.
import { useMemo, useState, type ReactNode } from "react";
import { buttonClass } from "@amerisolar/ui";
import { quoteMailto } from "@/lib/contact";

export type CalcModel = {
  slug: string;
  model: string;
  bins: number[];
  pcsMin: number; // sztuk w 40'HQ wg karty (dolna wartość przy zakresie 720/740)
  pcsMax: number;
  flexible: boolean;
  datasheet?: string;
};

type Mode = "power" | "containers";

const nf = (v: number, d = 2) => new Intl.NumberFormat("pl-PL", { maximumFractionDigits: d }).format(v);
const MAX_ICONS = 40;

export function ContainerCalculator({
  models,
  drawings,
  rfqPath,
  email,
}: {
  models: CalcModel[];
  drawings: Record<string, ReactNode>;
  rfqPath: string;
  email?: string | null;
}) {
  const [slug, setSlug] = useState(models.find((m) => m.slug === "as-8m132n-bhc")?.slug ?? models[0]!.slug);
  const m = models.find((x) => x.slug === slug)!;
  const [powerW, setPowerW] = useState(m.bins[m.bins.length - 1]!);
  const bin = m.bins.includes(powerW) ? powerW : m.bins[m.bins.length - 1]!;
  const [mode, setMode] = useState<Mode>("power");
  const [mw, setMw] = useState(1);
  const [containers, setContainers] = useState(3);

  const kwpPerContainer = (m.pcsMin * bin) / 1000; // ostrożnie: dolna liczba sztuk
  const kwpPerContainerMax = (m.pcsMax * bin) / 1000;
  // Sprzedaż wyłącznie kontenerowa: minimalna moc = jeden pełny kontener wybranego modułu.
  const minMw = kwpPerContainer / 1000;
  const mwEff = Math.max(mw, minMw);

  const result = useMemo(() => {
    if (mode === "power") {
      const kwp = mwEff * 1000;
      const modules = Math.ceil((kwp * 1000) / bin - 1e-6);
      const exact = modules / m.pcsMin;
      const full = Math.ceil(exact - 1e-9);
      const lastFill = exact - Math.floor(exact - 1e-9);
      return { modules, containers: full, lastFill: lastFill === 0 ? 1 : lastFill, kwp };
    }
    const modules = containers * m.pcsMin;
    return { modules, containers, lastFill: 1, kwp: (modules * bin) / 1000 };
  }, [mode, mwEff, containers, bin, m.pcsMin]);

  const pickModel = (s: string) => {
    const next = models.find((x) => x.slug === s)!;
    setSlug(s);
    setPowerW(next.bins[next.bins.length - 1]!);
  };

  const quoteHref = (() => {
    const q = new URLSearchParams({ model: m.model });
    q.set("kwp", String(Math.round(result.kwp)));
    q.set("containers", String(result.containers));
    return `${rfqPath}?${q.toString()}`;
  })();

  const icons = Math.min(result.containers, MAX_ICONS);

  return (
    <div className="grid gap-10 rounded-(--radius-md) bg-forest-950 p-6 text-white sm:p-10 lg:grid-cols-[1.25fr_0.75fr]">
      <div>
        {/* 1. Moduł */}
        <fieldset>
          <legend className="text-sm font-semibold text-forest-300">1. Wybierz moduł</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {models.map((x) => (
              <button
                key={x.slug}
                type="button"
                onClick={() => pickModel(x.slug)}
                aria-pressed={x.slug === slug}
                className={`rounded-full border px-3.5 py-2 text-sm transition-colors ${
                  x.slug === slug
                    ? "border-sun bg-sun font-semibold text-ink"
                    : "border-white/25 text-white hover:border-white/60"
                }`}
              >
                {x.model}
              </button>
            ))}
          </div>
        </fieldset>

        {/* 2. Klasa mocy */}
        <fieldset className="mt-7">
          <legend className="text-sm font-semibold text-forest-300">2. Klasa mocy</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {m.bins.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setPowerW(w)}
                aria-pressed={w === bin}
                className={`nums rounded-(--radius-sm) border px-3 py-1.5 text-sm ${
                  w === bin
                    ? "border-white bg-white font-semibold text-ink"
                    : "border-white/25 hover:border-white/60"
                }`}
              >
                {w} W
              </button>
            ))}
          </div>
        </fieldset>

        {/* 3. Tryb + wartość */}
        <fieldset className="mt-7">
          <legend className="text-sm font-semibold text-forest-300">3. Co znasz?</legend>
          <p className="mt-1 text-xs text-white/55">
            Sprzedajemy w ilościach kontenerowych — minimum to jeden kontener.
          </p>
          <div className="mt-3 inline-flex rounded-full border border-white/25 p-1 text-sm">
            {(
              [
                ["power", "Moc instalacji"],
                ["containers", "Liczbę kontenerów"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => setMode(k)}
                aria-pressed={mode === k}
                className={`rounded-full px-4 py-1.5 ${mode === k ? "bg-white font-semibold text-ink" : "text-white/80"}`}
              >
                {label}
              </button>
            ))}
          </div>

          {mode === "power" ? (
            <div className="mt-5">
              <label htmlFor="calc-mw" className="flex items-baseline justify-between gap-4">
                <span className="text-white/85">Moc instalacji</span>
                <span className="flex items-baseline gap-2">
                  <input
                    id="calc-mw-num"
                    type="number"
                    min={minMw}
                    max={100}
                    step={0.001}
                    value={mwEff === minMw ? Number(minMw.toFixed(5)) : mwEff}
                    onChange={(e) => setMw(Math.max(minMw, Math.min(100, Number(e.target.value) || minMw)))}
                    className="nums w-24 rounded-(--radius-sm) border border-white/30 bg-transparent px-2 py-1 text-right text-2xl font-semibold"
                    aria-label="Moc instalacji w MWp"
                  />
                  <span className="text-lg">MWp</span>
                </span>
              </label>
              <input
                id="calc-mw"
                type="range"
                min={minMw}
                max={20}
                step={0.001}
                value={Math.min(mwEff, 20)}
                onChange={(e) => setMw(Number(e.target.value))}
                className="mt-4 w-full accent-sun"
              />
              <div className="nums mt-1 flex justify-between text-xs text-white/50">
                <span>{nf(minMw, 3)} MWp (1 kontener)</span>
                <span>20 MWp</span>
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <label htmlFor="calc-cont" className="flex items-baseline justify-between gap-4">
                <span className="text-white/85">Liczba kontenerów 40&apos;HQ</span>
                <input
                  id="calc-cont-num"
                  type="number"
                  min={1}
                  max={200}
                  step={1}
                  value={containers}
                  onChange={(e) =>
                    setContainers(Math.max(1, Math.min(200, Math.round(Number(e.target.value) || 1))))
                  }
                  className="nums w-24 rounded-(--radius-sm) border border-white/30 bg-transparent px-2 py-1 text-right text-2xl font-semibold"
                  aria-label="Liczba kontenerów"
                />
              </label>
              <input
                id="calc-cont"
                type="range"
                min={1}
                max={50}
                step={1}
                value={Math.min(containers, 50)}
                onChange={(e) => setContainers(Number(e.target.value))}
                className="mt-4 w-full accent-sun"
              />
              <div className="nums mt-1 flex justify-between text-xs text-white/50">
                <span>1</span>
                <span>50</span>
              </div>
            </div>
          )}
        </fieldset>

        {/* Wynik */}
        <div className="mt-9 border-t border-white/15 pt-7" aria-live="polite">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-forest-300">{mode === "power" ? "Potrzebujesz" : "Wybrano"}</p>
              <p className="nums font-wide text-4xl font-bold text-sun">
                {result.containers}
                <span className="ml-2 text-lg font-semibold text-white">
                  {result.containers === 1
                    ? "kontener"
                    : result.containers % 10 >= 2 &&
                        result.containers % 10 <= 4 &&
                        (result.containers % 100 < 12 || result.containers % 100 > 14)
                      ? "kontenery"
                      : "kontenerów"}
                </span>
              </p>
              <p className="text-xs text-white/60">40&apos;HQ</p>
            </div>
            <div>
              <p className="text-sm text-forest-300">Moc</p>
              <p className="nums font-wide text-4xl font-bold">
                {nf(result.kwp / 1000, 3)}
                <span className="ml-2 text-lg font-semibold">MWp</span>
              </p>
              <p className="nums text-xs text-white/60">{nf(result.kwp, 0)} kWp</p>
            </div>
            <div>
              <p className="text-sm text-forest-300">Modułów</p>
              <p className="nums font-wide text-4xl font-bold">{nf(result.modules, 0)}</p>
              <p className="text-xs text-white/60">szt. po {bin} W</p>
            </div>
          </div>

          {/* kontenery w grafice */}
          <div className="mt-7 flex flex-wrap gap-1.5" aria-hidden="true">
            {Array.from({ length: icons }, (_, i) => {
              const last = i === result.containers - 1;
              const fill = last ? result.lastFill : 1;
              return (
                <span
                  key={i}
                  className="relative h-5 w-11 overflow-hidden rounded-[3px] border border-white/40"
                >
                  <span
                    className="absolute inset-y-0 left-0 bg-sun"
                    style={{ width: `${Math.round(fill * 100)}%` }}
                  />
                </span>
              );
            })}
            {result.containers > MAX_ICONS ? (
              <span className="self-center text-xs text-white/60">+{result.containers - MAX_ICONS}</span>
            ) : null}
          </div>
          {mode === "power" && result.lastFill < 1 ? (
            <p className="mt-3 text-sm text-white/70">
              Ostatni kontener zapełniony w {Math.round(result.lastFill * 100)}% — dobierz moc tak, by
              wykorzystać pełne kontenery, albo dołóż moduły.
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={quoteHref} className={buttonClass("primary", "px-6 py-3.5 text-base")}>
              Zamów wycenę dla {result.containers} {result.containers === 1 ? "kontenera" : "kontenerów"}
            </a>
            {email ? (
              <a
                href={quoteMailto(email, {
                  model: m.model,
                  containers: result.containers,
                  kwp: Math.round(result.kwp),
                })}
                className={buttonClass("onDark", "px-5 py-3.5")}
              >
                Napisz: {email}
              </a>
            ) : null}
            {m.datasheet ? (
              <a href={m.datasheet} download className={buttonClass("onDark", "px-5 py-3.5")}>
                Karta katalogowa PDF
              </a>
            ) : null}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/55">
            Wyliczenie poglądowe: {m.pcsMin === m.pcsMax ? m.pcsMin : `${m.pcsMin}–${m.pcsMax}`} modułów w
            kontenerze 40&apos;HQ wg karty katalogowej
            {m.pcsMin !== m.pcsMax ? ` (liczymy ostrożnie na ${m.pcsMin})` : ""}, czyli{" "}
            {m.pcsMin === m.pcsMax ? nf(kwpPerContainer) : `${nf(kwpPerContainer)}–${nf(kwpPerContainerMax)}`}{" "}
            kWp na kontener przy {bin} W. Dokładną liczbę i warunki dostawy podajemy w ofercie.
          </p>
        </div>
      </div>

      {/* schemat modułu */}
      <div className="flex flex-col items-center justify-center rounded-(--radius-md) bg-white p-6 text-ink">
        <div key={slug} className="lineup-item w-full max-w-[16rem]">
          {drawings[slug]}
        </div>
        <p className="mt-4 text-center font-semibold">{m.model}</p>
        <p className="text-center text-sm text-muted">
          {m.flexible ? "moduł elastyczny" : "moduł szklany"}, {bin} W
        </p>
      </div>
    </div>
  );
}
