// apps/web/lib/documents.ts
// Rejestr dokumentów do pobrania (karty katalogowe, certyfikaty) — data/documents.json.
// Link pokazujemy tylko, gdy plik jest w rejestrze (i w apps/web/public/dokumenty/).
import { z } from "zod";
import raw from "../../../data/documents.json" with { type: "json" };

const fileSchema = z.object({
  file: z.string().regex(/^\/dokumenty\/[a-z0-9._-]+\.pdf$/),
  title: z.string(),
  version: z.string().optional(),
  lang: z.string().default("EN"),
  sizeKb: z.number().optional(),
});

const schema = z.object({
  _meta: z.record(z.string(), z.string()),
  datasheets: z.record(z.string(), fileSchema),
  certificates: z.array(
    fileSchema.extend({ number: z.string(), body: z.string(), models: z.array(z.string()) }),
  ),
});

export const documents = schema.parse(raw);
export type DocFile = z.infer<typeof fileSchema>;

export const datasheetFor = (slug: string): DocFile | undefined => documents.datasheets[slug];
export const certificatesForModel = (model: string) =>
  documents.certificates.filter((c) => c.models.includes(model.replace(/ Black$/, "")));
