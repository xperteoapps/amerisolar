// apps/web/lib/contact.ts
// Szybki kontakt mailowy zamiast formularza: link mailto z gotowym tematem i szablonem
// treści w języku serwisu (model, ilość z kalkulatora). Czysta funkcja — działa w komponentach
// serwerowych i klienckich (dostaje wyłącznie teksty ze słownika: messages → email).
import { tpl } from "./i18n";
import type { Messages } from "@/messages";

export type MailTexts = Messages["email"];

export type QuoteMailOptions = {
  model?: string;
  containers?: number;
  kwp?: number;
  /** Własny temat zamiast domyślnego „Zapytanie o cenę…”. */
  subject?: string;
};

export function quoteMailto(email: string, t: MailTexts, o: QuoteMailOptions = {}): string {
  const subject = o.subject ?? (o.model ? tpl(t.subjectModel, { model: o.model }) : t.subject);
  const qty =
    o.containers !== undefined
      ? tpl(t.body.qtyContainers, { n: o.containers }) +
        (o.kwp !== undefined ? tpl(t.body.qtyKwp, { kwp: o.kwp }) : "")
      : "";
  const b = t.body;
  const body = [
    b.greeting,
    "",
    tpl(b.request, { model: o.model ?? "Amerisolar" }),
    "",
    tpl(b.qty, { qty }),
    b.delivery,
    b.term,
    b.company,
    b.phone,
    "",
    b.bye,
  ].join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
