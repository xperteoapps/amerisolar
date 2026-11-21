// apps/web/lib/media.ts
// Rejestr grafik (lustro przyszłej tabeli media_assets, CLAUDE.md §8).
// Grafiki Higgsfield: wyłącznie sceny poglądowe — nigdy realizacje ani produkt.
// Każda ma podpis „Wizualizacja poglądowa”.
// TODO: przenieść pliki do Supabase Storage (bucket `media`) po założeniu projektu;
// do tego czasu serwowane z CDN Higgsfield przez next/image.

export type MediaAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  source: "higgsfield" | "photo" | "manufacturer";
  model?: string;
  jobId?: string;
  prompt?: string;
  caption: string;
};

const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3FXNGw8f2f1hQm0DlDovEN823AQ";
const AI_CAPTION = "Wizualizacja poglądowa";

export const media = {
  farm: {
    src: `${HF}/hf_20261121_094912_3c5ed8b0-6fda-4588-818c-de868de9938e.png`,
    width: 1536,
    height: 864,
    alt: "Farma fotowoltaiczna na równinie rolniczej, rzędy modułów na stałych konstrukcjach w popołudniowym słońcu",
    source: "higgsfield",
    model: "gpt_image_2_6",
    jobId: "3c5ed8b0-6fda-4588-818c-de868de9938e",
    prompt:
      "Photorealistic wide aerial shot, large ground-mounted solar farm in the Polish countryside, flat farmland with tree lines and a distant village, late afternoon golden light, long even rows of dark monocrystalline solar modules on fixed steel racks with green grass beneath, realistic proportions, clean professional installation, no people, no logos, no text, natural colors, 35mm lens, high detail",
    caption: AI_CAPTION,
  },
  warehouseWinter: {
    src: `${HF}/hf_20261121_094912_c8d8c3b8-7187-428a-9570-442adebc90a4.png`,
    width: 1536,
    height: 864,
    alt: "Płaski dach hali magazynowej zimą, lekki śnieg, rzędy modułów fotowoltaicznych",
    source: "higgsfield",
    model: "gpt_image_2_6",
    jobId: "c8d8c3b8-7187-428a-9570-442adebc90a4",
    prompt:
      "Photorealistic wide shot, large flat industrial warehouse roof in Poland, overcast winter light, light snow on the roof membrane, rows of black-frame monocrystalline solar modules with half-cut cells on low tilted mounting, realistic proportions, clean professional installation, no people, no logos, no text, natural muted colors, 35mm lens, high detail",
    caption: AI_CAPTION,
  },
  archedHall: {
    src: `${HF}/hf_20261121_094911_feaba131-b2cb-4919-b60a-13614f2bdfcf.png`,
    width: 1536,
    height: 864,
    alt: "Hala łukowa z cienkimi modułami elastycznymi przyklejonymi do zakrzywionego dachu",
    source: "higgsfield",
    model: "gpt_image_2_6",
    jobId: "feaba131-b2cb-4919-b60a-13614f2bdfcf",
    prompt:
      "Photorealistic wide shot, arched barrel-vault agricultural hall with a curved light grey metal roof, ultra-thin frameless flexible solar modules glued directly onto the curved roof and following its curvature, no mounting frames, rural Poland, soft overcast daylight, realistic proportions, no people, no logos, no text, natural colors, 35mm lens, high detail",
    caption: AI_CAPTION,
  },
  lightRoof: {
    src: `${HF}/hf_20261121_094910_424a4b1a-1757-4c6e-8faf-706611f7a22c.png`,
    width: 1536,
    height: 864,
    alt: "Lekki dach hali logistycznej z blachy trapezowej z modułami elastycznymi przyklejonymi bez konstrukcji",
    source: "higgsfield",
    model: "gpt_image_2_6",
    jobId: "424a4b1a-1757-4c6e-8faf-706611f7a22c",
    prompt:
      "Photorealistic high-angle wide shot, very large flat roof of a lightweight logistics hall with trapezoidal light grey steel sheeting, rows of ultra-thin frameless flexible solar modules glued flat directly to the roof surface without any racks or ballast, very low profile, clear spring daylight, Polish industrial park in background, no people, no logos, no text, natural colors, 35mm lens, high detail",
    caption: AI_CAPTION,
  },
} satisfies Record<string, MediaAsset>;
