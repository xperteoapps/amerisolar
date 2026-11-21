// apps/web/app/[site]/sitemap-xml/route.ts — serwowany pod /sitemap.xml (rewrite w proxy.ts)
// Mapa witryny: tylko gotowe adresy z lib/routes.ts (+ w Fazie 1: produkty i treści z Supabase).
import { catalog, productPath } from "@/lib/catalog";
import { plRoutes } from "@/lib/routes";
import { absoluteUrl, isSiteKey, siteKeys, sites } from "@/lib/sites";

export function generateStaticParams() {
  return siteKeys.map((site) => ({ site }));
}

const escapeXml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET(_req: Request, { params }: RouteContext<"/[site]/sitemap-xml">) {
  const key = (await params).site;
  if (!isSiteKey(key)) return new Response("Not found", { status: 404 });
  const site = sites[key];
  const paths = [
    ...plRoutes.filter((r) => r.ready && r.sitemap).map((r) => r.path),
    ...catalog.map(productPath),
  ];
  const urls = paths.map((p) => `  <url><loc>${escapeXml(absoluteUrl(site, p))}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
