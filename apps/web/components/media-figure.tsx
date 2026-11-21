// apps/web/components/media-figure.tsx
import Image from "next/image";
import type { MediaAsset } from "@/lib/media";

/** Grafika w kadrze o stałych proporcjach z podpisem (dla AI: „Wizualizacja poglądowa”). */
export function MediaFigure({
  asset,
  className = "",
  aspect = "aspect-[16/9]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  asset: MediaAsset;
  className?: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-(--radius-md) bg-paper ${aspect}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="mt-2 text-xs text-muted">{asset.caption}</figcaption>
    </figure>
  );
}
