// packages/content/src/format.ts
// Polski zapis liczb i jednostek (CLAUDE.md §7): przecinek dziesiętny,
// spacja (niełamliwa) przed jednostką, półpauza w zakresach.

const NBSP = " ";

export function formatNumber(value: number, locale = "pl-PL", maxFractionDigits = 2): string {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: maxFractionDigits,
    useGrouping: true,
  }).format(value);
}

export function withUnit(value: number, unit: string, locale = "pl-PL", maxFractionDigits = 2): string {
  return `${formatNumber(value, locale, maxFractionDigits)}${NBSP}${unit}`;
}

export function range(min: number, max: number, unit: string, locale = "pl-PL"): string {
  if (min === max) return withUnit(min, unit, locale);
  return `${formatNumber(min, locale)}–${formatNumber(max, locale)}${NBSP}${unit}`;
}

/** 23.22 -> "23,22%" (bez spacji przed %, zgodnie z przykładem w CLAUDE.md §7). */
export function percent(value: number, locale = "pl-PL"): string {
  return `${formatNumber(value, locale)}%`;
}
