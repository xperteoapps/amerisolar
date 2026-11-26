// apps/web/lib/i18n.ts
// Słowniki (apps/web/messages/*.ts), formatowanie liczb wg locale serwisu, szablony {zmienna}
// i odmiana przez liczby (Intl.PluralRules). Bez zależności — działa na serwerze i w kliencie.
import { formatNumber } from "@amerisolar/content";

/** Formy liczebnikowe wg kategorii Intl.PluralRules; `other` obowiązkowe. */
export type Plural = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

/** "{n} modułów" + { n: "5" } → "5 modułów". */
export function tpl(s: string, vars: Record<string, string | number> = {}): string {
  return s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

export function plural(locale: string, forms: Plural, n: number, vars: Record<string, string | number> = {}) {
  const cat = new Intl.PluralRules(locale).select(n);
  return tpl(forms[cat] ?? forms.other, { n, ...vars });
}

const NBSP = " ";

/** Formatowanie wg locale serwisu (przecinek/kropka dziesiętna, separatory tysięcy). */
export function formatter(locale: string) {
  const num = (v: number, digits = 2) => formatNumber(v, locale, digits);
  return {
    num,
    unit: (v: number, unit: string, digits = 2) => `${num(v, digits)}${NBSP}${unit}`,
    range: (min: number, max: number, unit: string, digits = 2) =>
      min === max
        ? `${num(min, digits)}${NBSP}${unit}`
        : `${num(min, digits)}–${num(max, digits)}${NBSP}${unit}`,
    pct: (v: number) => `${num(v)}%`,
    /** Wartość ze znakiem (+0,045 / −0,30), do 3 miejsc. */
    signed: (v: number) => (v > 0 ? `+${num(v, 3)}` : num(v, 3)),
    /** Seria z karty w jednolitej precyzji (bez zaokrąglania). */
    series: (arr: number[]) => {
      const d = Math.max(...arr.map((v) => (String(v).split(".")[1] ?? "").length));
      const f = new Intl.NumberFormat(locale, { minimumFractionDigits: d, maximumFractionDigits: d });
      return arr.map((v) => f.format(v));
    },
    date: (iso: string) =>
      new Intl.DateTimeFormat(locale, { day: "2-digit", month: "2-digit", year: "numeric" }).format(
        new Date(`${iso}T00:00:00Z`),
      ),
    country: (code: string) => new Intl.DisplayNames([locale], { type: "region" }).of(code) ?? code,
    plural: (forms: Plural, n: number, vars?: Record<string, string | number>) =>
      plural(locale, forms, n, vars),
  };
}
export type Formatter = ReturnType<typeof formatter>;
