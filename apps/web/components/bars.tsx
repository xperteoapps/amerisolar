// apps/web/components/bars.tsx
// Proste poziome wykresy słupkowe w HTML (czytelne dla wyszukiwarek, bez JS).
import type { ReactNode } from "react";

export type Bar = {
  label: ReactNode;
  value: number;
  display: string;
  tone?: "base" | "flex" | "muted";
  key: string;
};

export function BarList({ bars, max, className }: { bars: Bar[]; max?: number; className?: string }) {
  const top = max ?? Math.max(...bars.map((b) => b.value));
  const tone = {
    base: "bg-forest-700",
    flex: "bg-flex",
    muted: "bg-frame",
  } as const;
  return (
    <ul className={className}>
      {bars.map((b) => (
        <li
          key={b.key}
          className="grid grid-cols-[minmax(9rem,13rem)_1fr] items-center gap-4 py-2 sm:grid-cols-[13rem_1fr]"
        >
          <span className="text-sm text-muted">{b.label}</span>
          <span className="flex items-center gap-3">
            <span
              className={`h-3 rounded-full ${tone[b.tone ?? "base"]}`}
              style={{ width: `${Math.max(2, (b.value / top) * 100)}%` }}
              aria-hidden="true"
            />
            <span className="nums shrink-0 text-sm font-semibold">{b.display}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
