// apps/web/messages/index.ts
// Słownik dla języka serwisu. Brakujący język → PL (tylko na czas budowy tłumaczeń).
import type { Lang, Site } from "@/lib/sites";
import en from "./en";
import pl, { type Messages } from "./pl";

const dictionaries: Partial<Record<Lang, Messages>> = { pl, en };

export function getMessages(lang: Lang): Messages {
  return dictionaries[lang] ?? pl;
}

export const messagesFor = (site: Site) => getMessages(site.lang);
export type { Messages };
