// apps/web/app/[site]/layout.tsx
// Główny layout serwisu krajowego. Segment [site] ustawia proxy.ts na podstawie hosta.
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCta } from "@/components/mobile-cta";
import { JsonLd, organizationLd, websiteLd } from "@/lib/seo/jsonld";
import { absoluteUrl, isSiteKey, siteKeys, sites } from "@/lib/sites";
import "../globals.css";

// Archivo (OFL) hostowany lokalnie, osie wght + wdth (szeroka odmiana w nagłówkach).
// Dwa zestawy znaków jako osobne rodziny — polskie znaki z latin-ext.
const archivo = localFont({
  src: "../fonts/archivo-latin-standard-normal.woff2",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});
const archivoExt = localFont({
  src: "../fonts/archivo-latin-ext-standard-normal.woff2",
  weight: "100 900",
  variable: "--font-archivo-ext",
  display: "swap",
});

export function generateStaticParams() {
  return siteKeys.map((site) => ({ site }));
}

export async function generateMetadata({ params }: LayoutProps<"/[site]">): Promise<Metadata> {
  const { site: key } = await params;
  if (!isSiteKey(key)) return {};
  const site = sites[key];
  return {
    metadataBase: new URL(absoluteUrl(site, "/")),
    applicationName: "Amerisolar",
    formatDetection: { telephone: false },
    robots: site.isLive ? undefined : { index: false, follow: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function SiteLayout({ children, params }: LayoutProps<"/[site]">) {
  const { site: key } = await params;
  if (!isSiteKey(key)) notFound();
  const site = sites[key];

  return (
    <html lang={site.htmlLang} className={`${archivo.variable} ${archivoExt.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-[4.5rem] md:pb-0">
        <JsonLd data={[organizationLd(site), websiteLd(site)]} />
        <SiteHeader site={site} />
        <main id="tresc" className="flex-1">
          {children}
        </main>
        <SiteFooter site={site} />
        <MobileCta />
        {/* Vercel Analytics działa bez cookies — dozwolone przed zgodą (CLAUDE.md §9). */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
