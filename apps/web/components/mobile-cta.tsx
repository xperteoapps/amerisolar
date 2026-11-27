// apps/web/components/mobile-cta.tsx
// Przyklejony pasek na telefonach (CLAUDE.md §4): szybki e-mail + formularz wyceny.
import Link from "next/link";
import { buttonClass } from "@amerisolar/ui";
import { quoteMailto } from "@/lib/contact";
import { href, isReady } from "@/lib/routes";
import type { Site } from "@/lib/sites";
import { messagesFor } from "@/messages";

export function MobileCta({ site }: { site: Site }) {
  const email = site.company.email;
  const rfq = isReady("rfq");
  if (!rfq && !email) return null;
  const t = messagesFor(site).email;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-white/95 p-3 backdrop-blur md:hidden">
      {email ? (
        <a href={quoteMailto(email, t)} className={buttonClass(rfq ? "ghost" : "primary", "flex-1 py-3.5")}>
          {t.mobile}
        </a>
      ) : null}
      {rfq ? (
        <Link href={href(site, "rfq")} className={buttonClass("primary", "flex-1 py-3.5")}>
          {t.mobileForm}
        </Link>
      ) : null}
    </div>
  );
}
