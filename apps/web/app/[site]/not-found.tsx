import { Container } from "@amerisolar/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-3xl font-bold">Nie znaleziono strony</h1>
      <p className="mt-4 text-muted">Adres mógł się zmienić albo strona nie jest jeszcze opublikowana.</p>
      <Link href="/" className="mt-6 inline-block font-semibold text-brand-700 underline">
        Przejdź do strony głównej
      </Link>
    </Container>
  );
}
