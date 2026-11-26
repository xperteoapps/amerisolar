"use client";
// apps/web/app/[site]/not-found.tsx
// not-found nie dostaje params — język bierzemy z segmentu [site] w przeglądarce.
// Teksty zduplikowane z messages/*.ts (common.notFound*), żeby nie ładować słowników do klienta.
import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "@amerisolar/ui";

const t: Record<string, [string, string, string]> = {
  pl: [
    "Nie znaleziono strony",
    "Adres mógł się zmienić albo strona nie jest jeszcze opublikowana.",
    "Przejdź do strony głównej",
  ],
  en: [
    "Page not found",
    "The address may have changed or the page is not published yet.",
    "Go to the home page",
  ],
  de: [
    "Seite nicht gefunden",
    "Die Adresse hat sich möglicherweise geändert oder die Seite ist noch nicht veröffentlicht.",
    "Zur Startseite",
  ],
  it: [
    "Pagina non trovata",
    "L'indirizzo potrebbe essere cambiato o la pagina non è ancora pubblicata.",
    "Vai alla home page",
  ],
  fr: [
    "Page introuvable",
    "L'adresse a peut-être changé ou la page n'est pas encore publiée.",
    "Aller à la page d'accueil",
  ],
  es: [
    "Página no encontrada",
    "Es posible que la dirección haya cambiado o que la página aún no esté publicada.",
    "Ir a la página de inicio",
  ],
  ro: [
    "Pagina nu a fost găsită",
    "Adresa s-ar putea să se fi schimbat sau pagina nu este încă publicată.",
    "Mergi la pagina principală",
  ],
  hr: [
    "Stranica nije pronađena",
    "Adresa se možda promijenila ili stranica još nije objavljena.",
    "Idi na početnu stranicu",
  ],
  hu: [
    "Az oldal nem található",
    "Lehet, hogy megváltozott a cím, vagy az oldal még nincs közzétéve.",
    "Ugrás a kezdőlapra",
  ],
  ua: [
    "Сторінку не знайдено",
    "Адреса могла змінитися або сторінку ще не опубліковано.",
    "Перейти на головну",
  ],
};

export default function NotFound() {
  const params = useParams<{ site?: string }>();
  const [title, text, back] = t[params?.site ?? "pl"] ?? t.pl!;
  return (
    <Container className="py-24">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-muted">{text}</p>
      <Link href="/" className="text-brand-700 mt-6 inline-block font-semibold underline">
        {back}
      </Link>
    </Container>
  );
}
