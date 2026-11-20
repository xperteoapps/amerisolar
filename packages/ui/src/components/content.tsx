// packages/ui/src/components/content.tsx
// Komponenty treści: tabela parametrów (HTML, nie obrazek — CLAUDE.md §5.1),
// okruszki i FAQ (natywne <details>, zero JS).
import type { ReactNode } from "react";
import { cn } from "../cn";

export type SpecTableProps = {
  caption: string;
  /** Nagłówki kolumn, np. klasy mocy. Pierwsza kolumna to nazwa parametru. */
  columns: string[];
  /** Nagłówek pierwszej kolumny (domyślnie „Parametr”). */
  rowHeaderLabel?: string;
  rows: { label: string; unit?: string; values: ReactNode[] }[];
  note?: ReactNode;
  className?: string;
};

export function SpecTable({
  caption,
  columns,
  rowHeaderLabel = "Parametr",
  rows,
  note,
  className,
}: SpecTableProps) {
  return (
    <figure className={cn("overflow-x-auto", className)}>
      <table className="w-full min-w-max border-collapse text-sm">
        <caption className="mb-2 text-left font-semibold text-ink">{caption}</caption>
        <thead>
          <tr className="bg-surface">
            <th scope="col" className="border border-line px-3 py-2 text-left font-medium">
              {rowHeaderLabel}
            </th>
            {columns.map((c) => (
              <th key={c} scope="col" className="border border-line px-3 py-2 text-right font-medium">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope="row" className="border border-line px-3 py-2 text-left font-normal">
                {r.label}
                {r.unit ? <span className="text-muted"> [{r.unit}]</span> : null}
              </th>
              {r.values.map((v, i) => (
                <td key={i} className="border border-line px-3 py-2 text-right tabular-nums">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {note ? <figcaption className="mt-2 text-xs text-muted">{note}</figcaption> : null}
    </figure>
  );
}

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Okruszki" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {c.name}
                </span>
              ) : (
                <>
                  <a href={c.href} className="hover:underline">
                    {c.name}
                  </a>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export type FaqItem = { question: string; answer: ReactNode };

export function FaqAccordion({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={cn("divide-y divide-line rounded-(--radius-card) border border-line", className)}>
      {items.map((f) => (
        <details key={f.question} className="group px-5 py-4">
          <summary className="cursor-pointer list-none font-medium text-ink marker:hidden">
            <span className="flex items-center justify-between gap-4">
              {f.question}
              <span aria-hidden="true" className="transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <div className="mt-3 text-muted">{f.answer}</div>
        </details>
      ))}
    </div>
  );
}
