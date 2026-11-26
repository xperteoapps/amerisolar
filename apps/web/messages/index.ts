// apps/web/messages/index.ts
// Słowniki interfejsu per język. Brakujący język → polski (nie powinno wystąpić: typ Record wymusza komplet).
import type { Lang, Site } from "@/lib/sites";
import de from "./de";
import en from "./en";
import es from "./es";
import fr from "./fr";
import hr from "./hr";
import hu from "./hu";
import it from "./it";
import pl, { type Messages } from "./pl";
import ro from "./ro";
import uk from "./uk";

const dictionaries: Record<Lang, Messages> = { pl, en, de, it, fr, es, ro, hr, hu, uk };

export function getMessages(lang: Lang): Messages {
  return dictionaries[lang] ?? pl;
}

export const messagesFor = (site: Site) => getMessages(site.lang);

export type { Messages };
