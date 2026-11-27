// apps/web/proxy.ts
// (Next.js 16: dawny middleware.ts nazywa się teraz proxy.ts.) ADR 0001 i 0002.
// 1) host (+ basePath, np. amerisolar.eu/de) → serwis; lokalny slug → folder wewnętrzny;
//    wewnętrzny rewrite na /{site}/...
// 2) aliasy (www) → 308 na domenę kanoniczną; /{kod}/ innego serwisu → 308 na jego domenę
// 3) podglądy (*.vercel.app, localhost): /{kod}/… wybiera serwis i zapamiętuje go w cookie
// 4) hosty nieprodukcyjne i serwisy z isLive=false: X-Robots-Tag noindex + robots.txt Disallow
import { NextResponse, type NextRequest } from "next/server";
import { toInternal } from "./lib/routes";
import { resolveRequest } from "./lib/sites";

const NOINDEX = "noindex, nofollow";
const PREVIEW_COOKIE = "preview_site";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const resolved = resolveRequest(
    request.headers.get("host"),
    pathname,
    request.cookies.get(PREVIEW_COOKIE)?.value,
  );

  if (resolved.kind === "alias") {
    return NextResponse.redirect(`https://${resolved.site.domain}${pathname}${search}`, 308);
  }
  if (resolved.kind === "redirect") return NextResponse.redirect(resolved.url, 308);

  const { site, rest } = resolved;
  const indexable = resolved.production && site.isLive;

  if (!indexable && rest === "/robots.txt") {
    return new NextResponse("User-agent: *\nDisallow: /\n", {
      headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": NOINDEX },
    });
  }

  // /sitemap.xml obsługuje route handler w segmencie bez kropki (nazwa „sitemap.xml”
  // jest zarezerwowana dla konwencji metadanych Next.js).
  const special = rest === "/sitemap.xml" ? "/sitemap-xml" : rest === "/robots.txt" ? rest : null;
  const internal = special ?? toInternal(site.lang, rest) ?? "/__not-found__/";

  const url = request.nextUrl.clone();
  url.pathname = `/${site.key}${internal}`;
  const response = NextResponse.rewrite(url);
  if (!indexable) response.headers.set("x-robots-tag", NOINDEX);
  if (resolved.kind === "fallback" && resolved.previewKey) {
    response.cookies.set(PREVIEW_COOKIE, resolved.previewKey, { path: "/", sameSite: "lax" });
  }
  return response;
}

export const config = {
  matcher: [
    // Wszystko poza zasobami Next.js, API i plikami statycznymi z rozszerzeniem
    // (robots.txt i sitemap.xml obsługujemy jawnie per serwis).
    "/((?!_next/|api/|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|pdf|woff2?|mp4|webm)$).*)",
  ],
};
