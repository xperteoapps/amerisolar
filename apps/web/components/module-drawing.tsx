// apps/web/components/module-drawing.tsx
// Schematy modułów rysowane z danych z kart katalogowych: wymiary (mm), liczba ogniw
// (układ 6 kolumn ogniw połówkowych), kolor ramy (frame_color), brak ramy w linii elastycznej.
// To schematy, nie wizerunek produktu (CLAUDE.md §8) — podpisujemy je jako schematy.
import { formatNumber, isFlexible, powerRange, type Product } from "@amerisolar/content";
import { segmentColor, segmentLabel, segmentOf, type Segment } from "@/lib/catalog";

const shortModel = (p: Product) => p.model.replace(/ Black$/, "");

/** Lico modułu: rama + siatka ogniw (6 kolumn, ogniwa połówkowe z przerwą w połowie). */
function ModuleFace({ p, x, y }: { p: Product; x: number; y: number }) {
  const [L, W] = p.dimensions_mm;
  const flex = isFlexible(p);
  const frame = flex ? 0 : 35;
  const edge = flex ? 30 : 20;
  const cols = 6;
  const rows = Math.round(p.cells / cols);
  const midGap = 30;
  const gap = 6;
  const innerX = x + frame + edge;
  const innerY = y + frame + edge;
  const innerW = W - 2 * (frame + edge);
  const innerH = L - 2 * (frame + edge) - midGap;
  const cw = (innerW - gap * (cols - 1)) / cols;
  const ch = (innerH - gap * (rows - 2)) / rows;
  const black = p.frame_color === "black" || p.model.endsWith("Black");
  const frameFill = black ? "#1a1d22" : "#c9d0d8";
  const cellFill = black ? "#161b26" : "#1f3157";
  const backFill = black ? "#0e1117" : "#dfe6ee";

  const cells = [];
  for (let r = 0; r < rows; r++) {
    const cy = innerY + r * (ch + gap) + (r >= rows / 2 ? midGap - gap : 0);
    for (let c = 0; c < cols; c++) {
      cells.push(
        <rect key={`${r}-${c}`} x={innerX + c * (cw + gap)} y={cy} width={cw} height={ch} fill={cellFill} />,
      );
    }
  }

  return (
    <g>
      {flex ? (
        <rect
          x={x}
          y={y}
          width={W}
          height={L}
          rx={30}
          fill={backFill}
          stroke={segmentColor.flex}
          strokeWidth={14}
        />
      ) : (
        <>
          <rect x={x} y={y} width={W} height={L} rx={8} fill={frameFill} />
          <rect x={x + frame} y={y + frame} width={W - 2 * frame} height={L - 2 * frame} fill={backFill} />
        </>
      )}
      {cells}
      {!flex ? (
        <path
          d={`M${x + frame} ${y + frame} L${x + W * 0.55} ${y + frame} L${x + frame} ${y + L * 0.38} Z`}
          fill="#ffffff"
          opacity={0.07}
        />
      ) : null}
    </g>
  );
}

/** Wszystkie moduły w jednej skali (wysokość = długość modułu), z kolorem grupy zastosowań. */
export function ModuleLineup({
  items,
  tone = "dark",
  className,
}: {
  items: Product[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const gap = 150;
  const labelSpace = 470;
  const maxL = Math.max(...items.map((p) => p.dimensions_mm[0]));
  const totalW = items.reduce((s, p) => s + p.dimensions_mm[1], 0) + gap * (items.length - 1);
  const top = 120;
  const H = maxL + top + labelSpace;
  const text = tone === "dark" ? "#ffffff" : "var(--color-ink)";
  const sub = tone === "dark" ? "var(--color-forest-300)" : "var(--color-muted)";
  const floor = tone === "dark" ? "rgba(255,255,255,0.25)" : "var(--color-line)";
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
      <line x1={0} x2={totalW} y1={top + maxL + 20} y2={top + maxL + 20} stroke={floor} strokeWidth={6} />
      {items.map((p, i) => {
        const [L, W] = p.dimensions_mm;
        const x = xs[i]!;
        const y = top + maxL - L;
        return (
          <g key={p.slug} className="lineup-item" style={{ animationDelay: `${120 + i * 70}ms` }}>
            <ModuleFace p={p} x={x} y={y} />
            <text x={x + W / 2} y={y - 40} textAnchor="middle" fill={sub} fontSize={74}>
              {formatNumber(L, "pl-PL", 0)} mm
            </text>
            <rect x={x} y={top + maxL + 60} width={W} height={18} rx={9} fill={segmentColor[segmentOf(p)]} />
            <text x={x} y={top + maxL + 190} fill={text} fontSize={96} fontWeight={600}>
              {powerRange(p).max} W
            </text>
            <text x={x} y={top + maxL + 290} fill={sub} fontSize={64}>
              {shortModel(p)}
            </text>
            <text x={x} y={top + maxL + 380} fill={sub} fontSize={56} opacity={0.9}>
              {isFlexible(p)
                ? `${p.dimensions_mm[2]} mm, ${formatNumber(p.weight_kg)} kg`
                : `${formatNumber(p.weight_kg)} kg`}
            </text>
          </g>
        );
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
      <ModuleFace p={product} x={pad} y={pad} />
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
      <text x={pad + W / 2} y={pad - 160} textAnchor="middle" fontSize={80} fill="var(--color-ink)">
        {formatNumber(W, "pl-PL", 0)} mm
      </text>
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
      >
        {formatNumber(L, "pl-PL", 0)} mm
      </text>
      <rect
        x={pad + W + sideGap}
        y={pad}
        width={sideW}
        height={L}
        rx={flex ? sideW / 2 : 0}
        fill={flex ? segmentColor.flex : product.frame_color === "black" ? "#1a1d22" : "#c9d0d8"}
      />
      <text
        x={pad + W + sideGap + sideW / 2}
        y={pad - 160}
        textAnchor="middle"
        fontSize={80}
        fill="var(--color-ink)"
      >
        {T} mm
      </text>
      <text x={pad + W + sideGap + sideW / 2} y={pad + L + 140} textAnchor="middle" fontSize={56} fill={dim}>
        profil
      </text>
    </svg>
  );
}

/** Legenda kolorów grup zastosowań. */
export function SegmentLegend({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const keys: Segment[] = ["roof", "large", "flex"];
  return (
    <ul
      className={`flex flex-wrap gap-x-6 gap-y-2 text-sm ${tone === "dark" ? "text-forest-300" : "text-muted"} ${className}`}
    >
      {keys.map((k) => (
        <li key={k} className="flex items-center gap-2">
          <span aria-hidden="true" className="h-2 w-6 rounded-full" style={{ background: segmentColor[k] }} />
          {segmentLabel[k]}
        </li>
      ))}
    </ul>
  );
}
