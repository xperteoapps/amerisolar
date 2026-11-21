import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Adresy z CLAUDE.md §4 kończą się ukośnikiem.
  trailingSlash: true,
  transpilePackages: ["@amerisolar/ui", "@amerisolar/content"],
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Tymczasowo: grafiki Higgsfield z CDN (docelowo Supabase Storage — lib/media.ts).
    remotePatterns: [{ protocol: "https", hostname: "d8j0ntlcm91z4.cloudfront.net" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
