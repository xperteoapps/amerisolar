// packages/ui/src/components/primitives.tsx
// Komponenty bazowe bez JS po stronie klienta (Server Components).
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-(--radius-sm) px-5 py-3 text-[0.95rem] font-semibold transition-colors disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Żółć słońca tylko dla głównego CTA.
  primary: "bg-sun text-ink hover:bg-sun-deep",
  secondary: "bg-forest-900 text-white hover:bg-forest-800",
  ghost: "border border-ink/20 bg-transparent text-ink hover:border-ink/50",
  onDark: "border border-white/30 bg-transparent text-white hover:border-white/70",
};

export function buttonClass(variant: Variant = "primary", className?: string): string {
  return cn(buttonBase, variants[variant], className);
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={buttonClass(variant, className)} {...props} />;
}

/** Link wyglądający jak przycisk — dla linków zewnętrznych/plików. Wewnętrzne: next/link + buttonClass. */
export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return <a className={buttonClass(variant, className)} {...props} />;
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-(--container-site) px-5 sm:px-8", className)}>{children}</div>
  );
}
