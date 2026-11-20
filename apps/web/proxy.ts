// apps/web/proxy.ts
// (Next.js 16: dawny middleware.ts nazywa się teraz proxy.ts.)
// 1) host → serwis krajowy; wewnętrzny rewrite na /{site}/...
// 2) aliasy (www) → 308 na domenę kanoniczną
// 3) hosty nieprodukcyjne (podglądy, *.vercel.app) i serwisy z isLive=false
//    dostają X-Robots-Tag: noindex oraz robots.txt z Disallow: /
import { NextResponse, type NextRequest } from "next/server";
import { resolveHost } from "./lib/sites";

const NOINDEX = "noindex, nofollow";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const resolved = resolveHost(request.headers.get("host"));

  if (resolved.kind === "alias") {
    return NextResponse.redirect(`https://${resolved.site.domain}${pathname}${search}`, 308);
  }

  const { site } = resolved;
  const indexable = resolved.production && site.isLive;

  if (!indexable && pathname === "/robots.txt") {
    return new NextResponse("User-agent: *\nDisallow: /\n", {
      headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": NOINDEX },
    });
  }

  const url = request.nextUrl.clone();
  // /sitemap.xml obsługuje route handler w segmencie bez kropki (nazwa „sitemap.xml”
  // jest zarezerwowana dla konwencji metadanych Next.js).
  const internalPath = pathname === "/sitemap.xml" ? "/sitemap-xml" : pathname;
  url.pathname = `/${site.key}${internalPath}`;
  const response = NextResponse.rewrite(url);
  if (!indexable) response.headers.set("x-robots-tag", NOINDEX);
  return response;
}

export const config = {
  matcher: [
    // Wszystko poza zasobami Next.js, API i plikami statycznymi z rozszerzeniem
    // (robots.txt i sitemap.xml obsługujemy jawnie per serwis).
    "/((?!_next/|api/|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|pdf|woff2?|mp4|webm)$).*)",
  ],
};
