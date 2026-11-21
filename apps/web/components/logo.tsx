// apps/web/components/logo.tsx
// Znak Amerisolar odrysowany wektorowo ze zrzutu strony producenta (weamerisolar.com),
// kolory próbkowane: zieleń #529e4a, pomarańcz #d07c35.
// TODO(klient): podmienić na oficjalny plik SVG od producenta.
// Użycie znaku wymaga pisemnej zgody Amerisolar (CLAUDE.md §9) — przed startem produkcyjnym.

export function LogoMark({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  const green = "#529e4a";
  const orange = "#d07c35";
  const cut = onDark ? "var(--color-forest-950)" : "#ffffff"; // „wycięcia” w kolorze tła
  return (
    <svg viewBox="60 20 810 550" className={className} aria-hidden="true" focusable="false">
      {/* promienie słońca */}
      <rect x="397" y="30" width="125" height="92" fill={green} />
      <rect
        x="-55"
        y="-52"
        width="110"
        height="104"
        fill={green}
        transform="translate(288 132) rotate(-38)"
      />
      <rect x="-55" y="-52" width="110" height="104" fill={green} transform="translate(632 135) rotate(40)" />
      <rect
        x="-50"
        y="-58"
        width="100"
        height="116"
        fill={green}
        transform="translate(727 282) rotate(-16)"
      />
      {/* tarcza słońca */}
      <path d="M318 355 A178 178 0 0 1 674 355 Z" fill={green} />
      {/* litera A: ramiona jako wycięcia + trójkątne wnętrze */}
      <path d="M300 150 L262 360 L284 360 L304 250 Z" fill={cut} />
      <path d="M300 150 L338 360 L362 360 L318 175 Z" fill={cut} />
      <path d="M297 300 L270 355 L325 355 Z" fill={green} />
      {/* listwy po lewej */}
      <g fill={green}>
        <rect x="135" y="180" width="128" height="16" />
        <rect x="124" y="220" width="138" height="16" />
        <rect x="98" y="260" width="142" height="16" />
        <rect x="85" y="298" width="140" height="16" />
        <rect x="72" y="338" width="143" height="16" />
      </g>
      {/* napis w tarczy */}
      <text
        x="368"
        y="350"
        fill="#ffffff"
        fontSize="76"
        fontWeight="700"
        textLength="272"
        lengthAdjust="spacingAndGlyphs"
        style={{ fontStretch: "62%" }}
      >
        MERISOLAR
      </text>
      {/* łuk */}
      <path d="M40 560 Q330 400 860 422 Q560 440 380 486 Q200 520 40 560 Z" fill={orange} />
    </svg>
  );
}

export function Logo({ tone = "dark", countryCode }: { tone?: "dark" | "light"; countryCode: string }) {
  const word = tone === "dark" ? "text-forest-700" : "text-white";
  const sub = tone === "dark" ? "text-muted" : "text-forest-300";
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-9 w-auto" onDark={tone === "light"} />
      <span className={`text-[1.3rem] font-semibold tracking-tight ${word}`}>Amerisolar</span>
      <span className={`self-end pb-1 text-xs font-medium ${sub}`}>{countryCode}</span>
    </span>
  );
}
