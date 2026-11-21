// apps/web/components/module-drawing.tsx
// Schematy wymiarowe modułów rysowane z wymiarów z kart katalogowych.
// To rysunki techniczne (obrys + wymiary), nie wizerunek produktu: bez układu ogniw,
// koloru ramy ani innych szczegółów, których nie ma w danych (CLAUDE.md §8).
import { formatNumber, isFlexible, powerRange, type Product } from "@amerisolar/content";

const shortModel = (p: Product) => p.model.replace(/ Black$/, "");

/**
 * Wszystkie moduły w jednej skali, stojące obok siebie (wysokość = długość modułu).
 * Używane w hero strony głównej i w katalogu.
 */
export function ModuleLineup({
  items,
  tone = "dark",
  className,
}: {
  items: Product[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const gap = 150; // mm między modułami na rysunku
  const labelSpace = 420; // mm pod modułami na podpisy
  const maxL = Math.max(...items.map((p) => p.dimensions_mm[0]));
  const totalW = items.reduce((s, p) => s + p.dimensions_mm[1], 0) + gap * (items.length - 1);
  const top = 120;
  const H = maxL + top + labelSpace;

  const stroke = tone === "dark" ? "var(--color-cell-line)" : "var(--color-frame)";
  const glassFill = tone === "dark" ? "var(--color-cell)" : "var(--color-cell)";
  const text = tone === "dark" ? "#ffffff" : "var(--color-ink)";
  const sub = tone === "dark" ? "var(--color-forest-300)" : "var(--color-muted)";

  // Pozycje X liczone z góry (bez mutacji w renderze).
  const xs = items.map((_, i) => items.slice(0, i).reduce((s, q) => s + q.dimensions_mm[1] + gap, 0));
  return (
    <svg
      viewBox={`0 0 ${totalW} ${H}`}
      className={className}
      role="img"
      aria-labelledby="lineup-title lineup-desc"
    >
      <title id="lineup-title">Moduły Amerisolar w jednej skali</title>
      <desc id="lineup-desc">
        {items
          .map(
            (p) =>
              `${shortModel(p)}: ${p.dimensions_mm[0]} × ${p.dimensions_mm[1]} × ${p.dimensions_mm[2]} mm, ${powerRange(p).min}–${powerRange(p).max} W`,
          )
          .join("; ")}
      </desc>
      {/* linia „podłogi” */}
      <line
        x1={0}
        x2={totalW}
        y1={top + maxL}
        y2={top + maxL}
        stroke={stroke}
        strokeWidth={6}
        opacity={0.5}
      />
      {items.map((p, i) => {
        const [L, W] = p.dimensions_mm;
        const x = xs[i]!;
        const flex = isFlexible(p);
        const y = top + maxL - L;
        const g = (
          <g key={p.slug} className="lineup-item" style={{ animationDelay: `${120 + i * 70}ms` }}>
            <rect
              x={x}
              y={y}
              width={W}
              height={L}
              fill={flex ? "none" : glassFill}
              stroke={flex ? "var(--color-flex)" : stroke}
              strokeWidth={flex ? 14 : 22}
              rx={flex ? 40 : 6}
            />
            {flex ? (
              <rect
                x={x + 60}
                y={y + 60}
                width={W - 120}
                height={L - 120}
                fill="var(--color-flex)"
                opacity={0.16}
                rx={24}
              />
            ) : null}
            <text x={x + W / 2} y={y - 40} textAnchor="middle" fill={sub} fontSize={78} className="nums">
              {formatNumber(L, "pl-PL", 0)} mm
            </text>
            <text x={x} y={top + maxL + 130} fill={text} fontSize={92} fontWeight={600}>
              {powerRange(p).max} W
            </text>
            <text x={x} y={top + maxL + 240} fill={sub} fontSize={66}>
              {shortModel(p)}
            </text>
            <text x={x} y={top + maxL + 330} fill={sub} fontSize={58} opacity={0.85}>
              {flex
                ? `${p.dimensions_mm[2]} mm, ${formatNumber(p.weight_kg)} kg`
                : `${formatNumber(p.weight_kg)} kg`}
            </text>
          </g>
        );
        return g;
      })}
    </svg>
  );
}

/** Rzut z przodu + profil z wymiarami (karta produktu). */
export function DimensionDrawing({ product, className }: { product: Product; className?: string }) {
  const [L, W, T] = product.dimensions_mm;
  const flex = isFlexible(product);
  const pad = 260;
  const sideGap = 420;
  // Profil: grubość pogrubiona do czytelności, z adnotacją.
  const sideW = Math.max(T * 4, 60);
  const width = pad + W + sideGap + sideW + pad;
  const height = pad + L + pad;
  const dim = "var(--color-muted)";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-labelledby={`dim-${product.slug}`}
    >
      <title id={`dim-${product.slug}`}>
        Schemat wymiarowy {shortModel(product)}: {L} × {W} × {T} mm
      </title>
      <defs>
        <marker
          id="arr"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={dim} />
        </marker>
      </defs>
      {/* rzut z przodu */}
      <rect
        x={pad}
        y={pad}
        width={W}
        height={L}
        fill={flex ? "var(--color-flex)" : "var(--color-cell)"}
        fillOpacity={flex ? 0.18 : 1}
        stroke={flex ? "var(--color-flex)" : "var(--color-frame)"}
        strokeWidth={flex ? 10 : 18}
        rx={flex ? 30 : 4}
      />
      {/* wymiar szerokości */}
      <line
        x1={pad}
        x2={pad + W}
        y1={pad - 120}
        y2={pad - 120}
        stroke={dim}
        strokeWidth={5}
        markerStart="url(#arr)"
        markerEnd="url(#arr)"
      />
      <text
        x={pad + W / 2}
        y={pad - 160}
        textAnchor="middle"
        fontSize={80}
        fill="var(--color-ink)"
        className="nums"
      >
        {formatNumber(W, "pl-PL", 0)} mm
      </text>
      {/* wymiar długości */}
      <line
        x1={pad - 120}
        x2={pad - 120}
        y1={pad}
        y2={pad + L}
        stroke={dim}
        strokeWidth={5}
        markerStart="url(#arr)"
        markerEnd="url(#arr)"
      />
      <text
        x={pad - 160}
        y={pad + L / 2}
        textAnchor="middle"
        fontSize={80}
        fill="var(--color-ink)"
        transform={`rotate(-90 ${pad - 160} ${pad + L / 2})`}
        className="nums"
      >
        {formatNumber(L, "pl-PL", 0)} mm
      </text>
      {/* profil */}
      <rect
        x={pad + W + sideGap}
        y={pad}
        width={sideW}
        height={L}
        fill={flex ? "var(--color-flex)" : "var(--color-frame)"}
        fillOpacity={flex ? 0.5 : 0.8}
      />
      <text
        x={pad + W + sideGap + sideW / 2}
        y={pad - 160}
        textAnchor="middle"
        fontSize={80}
        fill="var(--color-ink)"
        className="nums"
      >
        {T} mm
      </text>
      <text x={pad + W + sideGap + sideW / 2} y={pad + L + 140} textAnchor="middle" fontSize={56} fill={dim}>
        profil (pogrubiony)
      </text>
    </svg>
  );
}
