// packages/ui/src/components/primitives.tsx
// Komponenty bazowe bez JS po stronie klienta (Server Components).
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type Variant = "primary" | "secondary" | "ghost";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent-400 text-ink hover:bg-accent-500",
  secondary: "bg-brand-700 text-white hover:bg-brand-900",
  ghost: "border border-line bg-white text-ink hover:bg-surface",
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

/** Link wyglądający jak przycisk — dla CTA prowadzących do formularzy. */
export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return <a className={buttonClass(variant, className)} {...props} />;
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-(--container-site) px-4 sm:px-6", className)}>{children}</div>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-(--radius-card) border border-line bg-white p-6", className)}>{children}</div>
  );
}
