"use client";
// apps/web/components/rfq-form.tsx
// Formularz zapytania ofertowego w 4 krokach (CLAUDE.md §4). Działa jako jeden formularz
// z sekcjami — bez ukrywania pól, więc jest dostępny i działa przy wolnym JS.
import { useActionState, useEffect, useRef } from "react";
import { buttonClass } from "@amerisolar/ui";
import { leadTypes, modelOptions, timelines, type RfqState } from "@/lib/rfq";

type Action = (prev: RfqState, form: FormData) => Promise<RfqState>;

const label = "block text-sm font-medium text-ink";
const input =
  "mt-1.5 block w-full rounded-(--radius-sm) border border-ink/25 bg-white px-3.5 py-2.5 text-[0.98rem] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20";

export function RfqForm({ action, defaultModel }: { action: Action; defaultModel?: string }) {
  const [state, serverAction, pending] = useActionState(action, { status: "idle" } as RfqState);
  const formRef = useRef<HTMLFormElement>(null);

  // Prefill modelu z ?model= (link z karty produktu) — bezpośrednio w DOM, bez stanu.
  useEffect(() => {
    const pm = new URLSearchParams(window.location.search).get("model") ?? defaultModel;
    const q = new URLSearchParams(window.location.search);
    // Ilość z kalkulatora kontenerów (?kwp=, ?containers=).
    for (const [param, field] of [
      ["kwp", "quantity_kwp"],
      ["containers", "quantity_containers"],
    ] as const) {
      const v = q.get(param);
      const el = formRef.current?.querySelector<HTMLInputElement>(`input[name="${field}"]`);
      if (v && el && /^\d+([.,]\d+)?$/.test(v)) el.value = v;
    }
    if (!pm || !modelOptions.includes(pm)) return;
    const box = formRef.current?.querySelector<HTMLInputElement>(
      `input[name="product_interest"][value="${CSS.escape(pm)}"]`,
    );
    if (box) box.checked = true;
  }, [defaultModel]);

  // UTM i strona wejścia dopisywane w chwili wysyłki.
  const formAction = (fd: FormData) => {
    const q = new URLSearchParams(window.location.search);
    fd.set("landing_page", document.referrer || window.location.pathname);
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const v = q.get(k);
      if (v) fd.set(k, v);
    }
    return serverAction(fd);
  };

  const err = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const fieldError = (k: string) =>
    err[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-sm text-[#a33a1c]">
        {err[k]}
      </p>
    ) : null;

  if (state.status === "ok") {
    return (
      <div role="status" className="rounded-(--radius-md) border border-leaf bg-forest-100/60 p-8">
        <h2 className="font-wide text-2xl font-semibold">Zapytanie wysłane</h2>
        <p className="mt-3 max-w-prose text-muted">
          Dziękujemy. Odpowiemy na podany adres e-mail z ofertą lub pytaniami doprecyzowującymi.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-12" noValidate>
      {/* honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Strona www
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <fieldset>
        <legend className="font-wide text-xl font-semibold">1. Kim jesteś</legend>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {leadTypes.map((t) => (
            <label
              key={t.value}
              className="flex cursor-pointer items-center gap-3 rounded-(--radius-sm) border border-ink/20 px-4 py-3 has-[:checked]:border-forest-700 has-[:checked]:bg-forest-100/60"
            >
              <input type="radio" name="type" value={t.value} required className="accent-forest-700" />
              {t.label}
            </label>
          ))}
        </div>
        {fieldError("type")}
      </fieldset>

      <fieldset>
        <legend className="font-wide text-xl font-semibold">2. Moduły i ilość</legend>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {modelOptions.map((m) => (
            <label key={m} className="flex items-center gap-3 py-1.5">
              <input
                type="checkbox"
                name="product_interest"
                value={m}
                defaultChecked={m === defaultModel}
                className="accent-forest-700"
              />
              {m}
            </label>
          ))}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="quantity_kwp" className={label}>
              Ilość w kWp
            </label>
            <input
              id="quantity_kwp"
              name="quantity_kwp"
              inputMode="decimal"
              className={input}
              placeholder="np. 400"
              aria-describedby="quantity_kwp-error"
            />
            {fieldError("quantity_kwp")}
          </div>
          <div>
            <label htmlFor="quantity_containers" className={label}>
              albo liczba kontenerów
            </label>
            <input
              id="quantity_containers"
              name="quantity_containers"
              inputMode="decimal"
              className={input}
              placeholder="np. 1"
            />
            {fieldError("quantity_containers")}
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-wide text-xl font-semibold">3. Dostawa i termin</legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="delivery_location" className={label}>
              Miejsce dostawy
            </label>
            <input
              id="delivery_location"
              name="delivery_location"
              className={input}
              placeholder="miejscowość lub kod pocztowy"
            />
          </div>
          <div>
            <label htmlFor="timeline" className={label}>
              Termin
            </label>
            <select id="timeline" name="timeline" className={input} defaultValue="">
              <option value="">Wybierz</option>
              {timelines.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-wide text-xl font-semibold">4. Kontakt</legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={label}>
              Imię i nazwisko *
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className={input}
              aria-describedby="name-error"
            />
            {fieldError("name")}
          </div>
          <div>
            <label htmlFor="email" className={label}>
              E-mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={input}
              aria-describedby="email-error"
            />
            {fieldError("email")}
          </div>
          <div>
            <label htmlFor="phone" className={label}>
              Telefon
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={input} />
          </div>
          <div>
            <label htmlFor="company" className={label}>
              Firma
            </label>
            <input id="company" name="company" autoComplete="organization" className={input} />
          </div>
          <div>
            <label htmlFor="nip" className={label}>
              NIP
            </label>
            <input id="nip" name="nip" inputMode="numeric" className={input} aria-describedby="nip-error" />
            {fieldError("nip")}
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="message" className={label}>
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={input}
            placeholder="np. klasa mocy, typ projektu, wymagane dokumenty"
          />
        </div>
        <div className="mt-6 space-y-3 text-sm text-muted">
          <label className="flex gap-3">
            <input type="checkbox" name="consent_contact" required className="mt-1 accent-forest-700" />
            <span>
              * Zgadzam się na kontakt w sprawie tego zapytania.{" "}
              {/* TODO(klient): administrator danych i link do polityki prywatności */}
              Administratorem danych jest TODO(klient): nazwa firmy.
            </span>
          </label>
          {fieldError("consent_contact")}
          <label className="flex gap-3">
            <input type="checkbox" name="consent_marketing" className="mt-1 accent-forest-700" />
            <span>Chcę otrzymywać informacje o dostępności modułów i nowych dostawach (opcjonalnie).</span>
          </label>
        </div>
      </fieldset>

      {state.status === "error" ? (
        <p
          role="alert"
          className="rounded-(--radius-sm) border border-[#a33a1c]/40 bg-[#a33a1c]/5 px-4 py-3 text-[#7d2a12]"
        >
          {state.message}
        </p>
      ) : null}

      <button type="submit" disabled={pending} className={buttonClass("primary", "px-7 py-3.5 text-base")}>
        {pending ? "Wysyłanie…" : "Wyślij zapytanie"}
      </button>
    </form>
  );
}
