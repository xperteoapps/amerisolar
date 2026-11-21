// packages/ui/src/components/content.tsx
// Komponenty treści: tabela parametrów (HTML, nie obrazek — CLAUDE.md §5.1),
// okruszki i FAQ (natywne <details>, zero JS).
import type { ReactNode } from "react";
import { cn } from "../cn";

export type SpecTableProps = {
  caption: ReactNode;
  /** Nagłówki kolumn, np. klasy mocy. Pierwsza kolumna to nazwa parametru. */
  columns: ReactNode[];
  /** Nagłówek pierwszej kolumny (domyślnie „Parametr”). */
  rowHeaderLabel?: string;
  rows: { label: ReactNode; unit?: string; values: ReactNode[]; key?: string }[];
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
    <figure className={cn("max-w-full", className)}>
      <div className="overflow-x-auto">
        <table className="nums w-full min-w-max border-collapse text-[0.92rem]">
          <caption className="mb-3 text-left text-base font-semibold text-ink">{caption}</caption>
          <thead>
            <tr className="border-y border-ink/80">
              <th scope="col" className="py-2.5 pr-6 text-left font-medium text-muted">
                {rowHeaderLabel}
              </th>
              {columns.map((c, i) => (
                <th key={i} scope="col" className="px-3 py-2.5 text-right font-semibold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.key ?? i} className="border-b border-line">
                <th scope="row" className="py-2.5 pr-6 text-left font-normal text-muted">
                  {r.label}
                  {r.unit ? <span className="text-muted/80"> [{r.unit}]</span> : null}
                </th>
                {r.values.map((v, j) => (
                  <td key={j} className="px-3 py-2.5 text-right">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <figcaption className="mt-3 max-w-prose text-sm text-muted">{note}</figcaption> : null}
    </figure>
  );
}

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Okruszki" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <>
                  <a href={c.href} className="opacity-75 hover:underline hover:opacity-100">
                    {c.name}
                  </a>
                  <span aria-hidden="true" className="opacity-50">
                    /
                  </span>
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
    <div className={cn("border-t border-ink/80", className)}>
      {items.map((f) => (
        <details key={f.question} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.05rem] font-medium [&::-webkit-details-marker]:hidden">
            {f.question}
            <span
              aria-hidden="true"
              className="mt-1 inline-block size-3 shrink-0 rotate-45 border-r-2 border-b-2 border-ink/60 transition-transform group-open:rotate-[225deg]"
            />
          </summary>
          <div className="max-w-prose pb-6 leading-relaxed text-muted">{f.answer}</div>
        </details>
      ))}
    </div>
  );
}
