// apps/web/app/[site]/robots.txt/route.ts
// robots.txt dla domeny produkcyjnej. Hosty podglądowe i serwisy z isLive=false
// dostają Disallow: / już w proxy.ts.
import { absoluteUrl, isSiteKey, siteKeys, sites } from "@/lib/sites";

export function generateStaticParams() {
  return siteKeys.map((site) => ({ site }));
}

export async function GET(_req: Request, { params }: RouteContext<"/[site]/robots.txt">) {
  const key = (await params).site;
  if (!isSiteKey(key)) return new Response("Not found", { status: 404 });
  const site = sites[key];
  const body = site.isLive
    ? `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${absoluteUrl(site, "/sitemap.xml")}\n`
    : "User-agent: *\nDisallow: /\n";
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
