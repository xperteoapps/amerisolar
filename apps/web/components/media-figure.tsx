// apps/web/components/media-figure.tsx
import Image from "next/image";
import type { MediaAsset } from "@/lib/media";
import type { Site } from "@/lib/sites";
import { messagesFor } from "@/messages";

/** Grafika w kadrze o stałych proporcjach z podpisem (dla AI: „Wizualizacja poglądowa”). */
export function MediaFigure({
  site,
  asset,
  className = "",
  aspect = "aspect-[16/9]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  site: Site;
  asset: MediaAsset & { key: keyof ReturnType<typeof messagesFor>["media"] };
  className?: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const m = messagesFor(site);
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-(--radius-md) bg-paper ${aspect}`}>
        <Image
          src={asset.src}
          alt={m.media[asset.key]}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="mt-2 text-xs text-muted">{m.common.aiCaption}</figcaption>
    </figure>
  );
}
