// apps/web/components/mobile-cta.tsx
// Przyklejony przycisk „Zapytaj o ofertę” na telefonach (CLAUDE.md §4).
import Link from "next/link";
import { buttonClass } from "@amerisolar/ui";
import { isReady, RFQ_PATH } from "@/lib/routes";

export function MobileCta() {
  if (!isReady(RFQ_PATH)) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <Link href={RFQ_PATH} className={buttonClass("primary", "w-full py-3.5")}>
        Zapytaj o ofertę
      </Link>
    </div>
  );
}
