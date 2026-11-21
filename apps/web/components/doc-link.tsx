// apps/web/components/doc-link.tsx
import type { DocFile } from "@/lib/documents";

/** Link do pobrania PDF (bez bramki e-mail — karty muszą być dostępne swobodnie, CLAUDE.md §4). */
export function DocLink({ doc, className = "" }: { doc: DocFile; className?: string }) {
  return (
    <a
      href={doc.file}
      download
      className={`inline-flex items-center gap-3 rounded-(--radius-sm) border border-ink/20 bg-white px-4 py-2.5 text-sm font-semibold hover:border-forest-700 ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 fill-forest-700">
        <path d="M10 13.5 5.5 9l1.4-1.4L9 9.7V3h2v6.7l2.1-2.1L14.5 9 10 13.5ZM4 15h12v2H4z" />
      </svg>
      <span>
        {doc.title}
        <span className="ml-2 font-normal text-muted">
          PDF{doc.lang ? `, ${doc.lang}` : ""}
          {doc.sizeKb ? `, ${doc.sizeKb} kB` : ""}
        </span>
      </span>
    </a>
  );
}
