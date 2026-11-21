// apps/web/lib/routes.ts
// Rejestr adresów z CLAUDE.md §4. `ready: true` = strona istnieje w kodzie.
// Nawigacja i sitemap pokazują wyłącznie gotowe adresy (zero 404 z linków wewnętrznych).

export type RouteEntry = {
  path: string;
  label: string;
  nav?: "main" | "footer";
  ready: boolean;
  sitemap?: "pages" | "products" | "categories" | "knowledge" | "tools";
};

export const plRoutes: RouteEntry[] = [
  { path: "/", label: "Strona główna", ready: true, sitemap: "pages" },
  {
    path: "/panele-fotowoltaiczne/",
    label: "Panele fotowoltaiczne",
    nav: "main",
    ready: true,
    sitemap: "categories",
  },
  { path: "/dla-instalatorow/", label: "Dla instalatorów", nav: "main", ready: false, sitemap: "pages" },
  { path: "/farmy-fotowoltaiczne/", label: "Farmy PV", nav: "main", ready: false, sitemap: "pages" },
  {
    path: "/rozwiazania-specjalne/",
    label: "Rozwiązania specjalne",
    nav: "main",
    ready: false,
    sitemap: "pages",
  },
  { path: "/hurt-i-dystrybucja/", label: "Hurt i dystrybucja", nav: "main", ready: false, sitemap: "pages" },
  { path: "/narzedzia/", label: "Narzędzia", nav: "main", ready: false, sitemap: "tools" },
  {
    path: "/certyfikaty-i-dokumenty/",
    label: "Certyfikaty i dokumenty",
    nav: "footer",
    ready: false,
    sitemap: "pages",
  },
  { path: "/o-amerisolar/", label: "O Amerisolar", nav: "footer", ready: false, sitemap: "pages" },
  { path: "/zapytanie-ofertowe/", label: "Zapytanie ofertowe", ready: false, sitemap: "pages" },
  { path: "/kontakt/", label: "Kontakt", nav: "footer", ready: false, sitemap: "pages" },
  {
    path: "/polityka-prywatnosci/",
    label: "Polityka prywatności",
    nav: "footer",
    ready: false,
    sitemap: "pages",
  },
];

export const RFQ_PATH = "/zapytanie-ofertowe/";

export function isReady(path: string): boolean {
  return plRoutes.some((r) => r.path === path && r.ready);
}
