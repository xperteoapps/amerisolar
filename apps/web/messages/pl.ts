// apps/web/messages/pl.ts
// Słownik PL — wzorzec dla wszystkich języków (typ Messages = typeof pl).
// Teksty specyficzne dla rynku (kraj, referencje, warunki zimowe) też są tutaj: 1 język = 1 serwis.
// Zmienne w {nawiasach} wstawia tpl(); funkcje dostają już sformatowane wartości (lib/i18n.ts).
import type { Plural } from "@/lib/i18n";

/** Wartości strony głównej (sformatowane wg locale serwisu). */
export type HomeV = {
  pMin: string;
  pMax: string;
  flexMm: string;
  hqPcsMin: string;
  hqPcsMax: string;
  glassWP: string;
  glassWL: string;
  flexWP: string;
  flexWL: string;
  marketMw: string;
  effMax: string;
  smallModel: string;
  farmModel: string;
  farmMaxW: string;
  roofRange: string;
  largeRange: string;
  palletMin: string;
  palletMax: string;
  kwpMin: string;
  kwpMax: string;
  farmKwp: string;
  farmPieces: string;
  topconCoeff: string;
  percModel: string;
  percCoeff: string;
  heatDiff: string;
  farmGlass: string;
  bifBase: string;
  bifGain20: string;
  farm1MwContainers: string;
  farm1MwModules: string;
  industrialModel: string;
  industrialMaxW: string;
  vocStc: string;
  betaVoc: string;
  vocCold: string;
  str1500: string;
  str1000: string;
  bendRadius: string;
  flexEff: string;
  snowPa: string;
  windPa: string;
  opTemp: string;
  certValidUntil: string;
};

/** Wartości karty produktu. */
export type ProductV = {
  model: string;
  kind: string;
  shortKind: string;
  powerRange: string;
  minW: string;
  maxW: string;
  eff: string;
  cells: string;
  weight: string;
  arealMass: string;
  thickness: string;
  bending: string;
  snowPa: string;
  windPa: string;
  warrantyP: string;
  warrantyL: string;
  pcsHq: string;
  pcs20: string;
  pcsPallet: string;
  kwpHq: string;
  kwpPallet: string;
  vocStc: string;
  betaVoc: string;
  vocCold: string;
  maxSys: string;
  dims: string;
  bifBase: string;
  bif10: string;
  bif20: string;
  bif30: string;
  certs: string;
  glassSuffix: string;
};

const pl = {
  common: {
    home: "Strona główna",
    pieces: "szt.",
    years: "{p}/{l} lat",
    yes: "tak",
    no: "nie",
    datasheetPdf: "Karta PDF",
    downloadDatasheet: "Pobierz kartę katalogową PDF",
    technicalParams: "Parametry techniczne",
    aiCaption: "Wizualizacja poglądowa",
    askContainerPrice: "Zapytaj o cenę kontenerową",
    askPrice: "Zapytaj o cenę",
    seeModules: "Zobacz moduły",
    notFoundTitle: "Nie znaleziono strony",
    notFoundText: "Adres mógł się zmienić albo strona nie jest jeszcze opublikowana.",
    notFoundBack: "Przejdź do strony głównej",
    pdf: "PDF",
    breadcrumbs: "Okruszki",
  },
  routes: {
    home: "Strona główna",
    catalog: "Moduły w naszej ofercie",
    installers: "Dla instalatorów",
    farms: "Farmy PV",
    special: "Rozwiązania specjalne",
    wholesale: "Hurt i dystrybucja",
    tools: "Narzędzia",
    docs: "Karty katalogowe i certyfikaty",
    about: "O Amerisolar",
    rfq: "Zapytanie ofertowe",
    contact: "Kontakt",
    privacy: "Polityka prywatności",
  },
  header: {
    skip: "Przejdź do treści",
    logoAria: "Amerisolar — strona główna",
    mainNav: "Menu główne",
    menu: "Menu",
    switcher: "Kraj i język",
  },
  footer: {
    modules: "Moduły",
    service: "Serwis",
    note: "Parametry modułów pochodzą z kart katalogowych producenta. Ceny na zapytanie.",
  },
  cta: {
    titleModel: "Cena {model} w ilości kontenerowej",
    title: "Kontener modułów bezpośrednio od producenta",
    text: "Podaj model, ilość w kWp lub kontenerach, miejsce dostawy i termin. Przygotujemy ofertę z ceną dla wybranej klasy mocy i warunkami dostawy.",
    noForm: "Nie chcesz wypełniać formularza? Napisz od razu na",
  },
  email: {
    prefix: "lub napisz od razu:",
    prefixShort: "lub napisz:",
    prefixOr: "albo napisz:",
    button: "Napisz: {email}",
    mobile: "Napisz e-mail",
    mobileForm: "Zapytaj o ofertę",
    tableLink: "E-mail",
    tableSr: "w sprawie {model}",
    subjectModel: "Zapytanie o cenę: {model}",
    subject: "Zapytanie o cenę kontenerową",
    subjectAssessment: "Wstępna ocena obiektu — moduły elastyczne",
    subjectQuestion: "Pytanie o moduły Amerisolar",
    subjectDatasheet: "Karta katalogowa {model}",
    body: {
      greeting: "Dzień dobry,",
      request: "proszę o ofertę na moduły {model}.",
      qty: "Ilość (kWp lub liczba kontenerów): {qty}",
      qtyContainers: "{n} × 40'HQ",
      qtyKwp: " (ok. {kwp} kWp)",
      delivery: "Miejsce dostawy: ",
      term: "Termin: ",
      company: "Firma / NIP: ",
      phone: "Telefon: ",
      bye: "Pozdrawiam",
    },
  },
  catalogLib: {
    group: { glass: "Moduły szklane TOPCon", flexible: "Linia elastyczna" },
    kind: {
      flexTopcon: "moduł elastyczny TOPCon",
      flexPerc: "moduł elastyczny PERC",
      doubleGlass: "moduł bifacjalny TOPCon, double glass",
      bifacial: "moduł bifacjalny TOPCon",
      topcon: "moduł TOPCon N-type",
    },
    shortKind: {
      flex: "moduł elastyczny",
      doubleGlass: "TOPCon double glass",
      bifacial: "bifacjalny TOPCon",
      topcon: "moduł TOPCon",
    },
    tech: {
      flexTopcon: "TOPCon, elastyczny",
      flexPerc: "PERC, elastyczny",
      doubleGlass: "TOPCon, double glass",
      topcon: "TOPCon N-type",
    },
    segment: {
      roof: "Dachy domów i firm, carporty",
      large: "Dachy przemysłowe i farmy PV",
      flex: "Linia elastyczna — dachy specjalne",
    },
    cert: {
      number: "{body}, nr {number}",
      validUntil: "ważny do {date}",
      onDatasheet: "{name} (wg karty katalogowej)",
      fullRange: "pełen zakres oferty {range}",
      partial: "klasy {covered} (w ofercie {offer})",
    },
  },
  /** Treści z karty producenta w danym języku (pola tekstowe products.json). */
  productCopy: {
    junctionBox: "IP68, 3 diody",
    connector: {
      "MC4 lub kompatybilne": "MC4 lub kompatybilne",
      "MC4 kompatybilne": "MC4 kompatybilne",
    } as Record<string, string>,
    opTemp: "{min} do {max}",
    bySlug: {
      "as-7m108n-bhc": {
        segments: ["dachy domów", "małe firmy", "instalatorzy"],
        glass: "3,2 mm hartowane z powłoką AR (wg karty: 'Front/Back Glass')",
      },
      "as-7m120n-hc": {
        segments: ["dachy domów", "dachy firm", "instalatorzy"],
        glass: "3,2 mm hartowane z powłoką AR",
      },
      "as-7m120n-bhc": {
        segments: ["carporty", "dachy płaskie", "małe farmy", "instalatorzy"],
        glass: "3,2 mm hartowane z powłoką AR; tył: transparentny backsheet",
      },
      "as-7m144n-hc": {
        segments: ["dachy przemysłowe", "farmy PV", "EPC"],
        glass: "3,2 mm hartowane z powłoką AR",
      },
      "as-8m132n-bhc": {
        segments: ["farmy fotowoltaiczne", "EPC", "deweloperzy OZE", "agro-PV"],
        glass: "2 mm + 2 mm hartowane (przód z AR)",
      },
      "as-7m144nfl-hc-black": {
        segments: [
          "dachy o niskiej nośności (hale, magazyny, obiekty rolnicze)",
          "obiekty z drganiami i obciążeniem dynamicznym (stadiony, hale sportowe, areny, przemysł) — po ocenie konstruktora",
          "dachy łukowe i zakrzywione",
          "dachy membranowe — po potwierdzeniu kompatybilności kleju",
        ],
        frontCover: "lekki, wysokoprzezroczysty polimer",
        mounting: "klejenie, bez przewiertów i bez konstrukcji",
      },
      "as-7m132fl-hc": {
        segments: [
          "dachy o niskiej nośności (hale, magazyny, obiekty rolnicze)",
          "obiekty z drganiami i obciążeniem dynamicznym (stadiony, hale sportowe, areny, przemysł) — po ocenie konstruktora",
          "dachy łukowe i zakrzywione",
          "dachy membranowe — po potwierdzeniu kompatybilności kleju",
        ],
      },
    } as Record<string, { segments: string[]; glass?: string; frontCover?: string; mounting?: string }>,
  },
  /** Tytuły dokumentów (klucz = plik w data/documents.json). */
  docTitles: {
    datasheet: "Karta katalogowa {model}",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0021.pdf": "Certyfikat TÜV SÜD Z2 093522 0021",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0023.pdf": "Certyfikat TÜV SÜD Z2 093522 0023",
    "/dokumenty/amerisolar-tuv-rheinland-pv-50674535-0001.pdf": "Certyfikat TÜV Rheinland PV 50674535 0001",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0025.pdf": "Certyfikat TÜV SÜD Z2 093522 0025",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0030.pdf": "Certyfikat TÜV SÜD Z2 093522 0030",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0022-ce.pdf": "Atest zgodności CE TÜV SÜD N8A 093522 0022",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0024-ce.pdf": "Atest zgodności CE TÜV SÜD N8A 093522 0024",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0027-ce.pdf": "Atest zgodności CE TÜV SÜD N8A 093522 0027",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0031-ce.pdf": "Atest zgodności CE TÜV SÜD N8A 093522 0031",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0018-anti-pid.pdf": "Odporność na PID — TÜV SÜD Z2 093522 0018",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0019-mgla-solna.pdf":
      "Odporność na mgłę solną — TÜV SÜD Z2 093522 0019",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0020-amoniak.pdf":
      "Odporność na amoniak — TÜV SÜD Z2 093522 0020",
    "/dokumenty/amerisolar-iso-9001.pdf": "ISO 9001:2015 — zarządzanie jakością",
    "/dokumenty/amerisolar-iso-14001.pdf": "ISO 14001:2015 — zarządzanie środowiskowe",
    "/dokumenty/amerisolar-iso-45001.pdf": "ISO 45001:2018 — BHP",
    "/dokumenty/amerisolar-pv-cycle-wlochy-2026.pdf": "PV CYCLE Włochy — zgodność z WEEE",
    "/dokumenty/amerisolar-pv-cycle-niemcy-weee-2026.pdf": "PV CYCLE Niemcy — zgodność z WEEE",
  } as Record<string, string>,
  drawing: {
    lineupTitle: "Moduły Amerisolar w jednej skali",
    flexSuffix: " (moduł elastyczny)",
    flexHeading: "Moduły elastyczne",
    thickness: "grubość {t} mm",
    dimTitle: "Schemat wymiarowy {model}: {l} × {w} × {t} mm",
    profile: "profil",
  },
  certBadges: {
    title: "Certyfikaty i atesty",
    intro: "Badania niezależnych jednostek",
    introValid: ", certyfikaty ważne nawet do {date}",
    introTail: ". Wszystkie dokumenty pobierzesz bez rejestracji.",
    more: "Zobacz karty katalogowe i certyfikaty",
    ce: "Atesty CE",
    salt: "Mgła solna",
    ammonia: "Amoniak",
    factory: "fabryka w Nantong",
    weee: "recykling, dyrektywa WEEE",
  },
  media: {
    farm: "Farma fotowoltaiczna na równinie rolniczej, rzędy modułów na stałych konstrukcjach w popołudniowym słońcu",
    warehouseWinter: "Płaski dach hali magazynowej zimą, lekki śnieg, rzędy modułów fotowoltaicznych",
    archedHall: "Hala łukowa z cienkimi modułami elastycznymi przyklejonymi do zakrzywionego dachu",
    lightRoof:
      "Lekki dach hali logistycznej z blachy trapezowej z modułami elastycznymi przyklejonymi bez konstrukcji",
  },
  home: {
    metaTitle: "Panele fotowoltaiczne hurt od producenta — Amerisolar",
    metaDescription:
      "Moduły fotowoltaiczne Amerisolar w ilościach kontenerowych prosto od producenta: TOPCon 430–720 W, bifacjalne, double glass, elastyczne. Zapytaj o cenę.",
    eyebrow: "Ilości kontenerowe, bezpośrednio od producenta",
    h1: "Panele fotowoltaiczne Amerisolar w hurcie — kontenery od producenta",
    lead: (v: HomeV) =>
      `Moduły TOPCon N-type od ${v.pMin} do ${v.pMax} W, bifacjalne, double glass i linia elastyczna ${v.flexMm} mm. Dla hurtowni, traderów i firm montażowych kupujących w ilościach kontenerowych.`,
    bullets: (v: HomeV) => [
      "Dostawy bezpośrednio od producenta",
      `Kontener 40'HQ: ${v.hqPcsMin}–${v.hqPcsMax} modułów`,
      "Karta katalogowa i certyfikaty dla każdego modelu",
      `Gwarancja do ${v.glassWL} lat na moc`,
    ],
    facts: (v: HomeV) => [
      { value: "od 1993", label: "na rynku — według katalogu producenta, Kalifornia" },
      { value: "ok. 11 GW", label: "mocy produkcyjnej według producenta (2025)" },
      { value: `${v.marketMw} MW`, label: "modułów dostarczonych do Polski w 2025 r. (wg katalogu)" },
      { value: v.effMax, label: "maksymalna sprawność modułu w ofercie" },
    ],
    lineupTitle: "Siedem modułów, jedna skala",
    lineupText: (v: HomeV) =>
      `Schematy narysowane z wymiarów i liczby ogniw z kart katalogowych — od kompaktowego ${v.smallModel} na dachy domów po ${v.farmModel} na farmy fotowoltaiczne.`,
    lineupCta: "Porównaj wszystkie modele",
    directTitle: "Hurtowe ilości paneli prosto od producenta",
    directText:
      "Zamówienie kontenerowe trafia bezpośrednio do producenta modułów Amerisolar. Krótszy łańcuch dostaw to cena liczona dla całej partii i dokumentacja prosto od producenta.",
    directCta: "Masz projekt na kilkaset kWp lub więcej?",
    points: (v: HomeV) => [
      {
        title: "Cena kontenerowa",
        text: "Wyceniamy całą partię — kontener 20' albo 40'HQ — dla wybranej klasy mocy, zamiast ceny za pojedyncze palety.",
      },
      {
        title: "Pełna dokumentacja",
        text: "Karty katalogowe z tabelami STC i NOCT, współczynnikami temperaturowymi i obciążeniami mechanicznymi oraz certyfikaty dla każdego modelu.",
      },
      {
        title: "Jedna linia, wszystkie segmenty",
        text: `Moduły ${v.roofRange} na dachy, ${v.largeRange} na dachy przemysłowe i farmy oraz linia elastyczna do dachów specjalnych.`,
      },
      {
        title: "Gwarancja producenta",
        text: `${v.glassWP} lat na produkt i ${v.glassWL} lat liniowej gwarancji mocy w modułach szklanych.`,
      },
    ],
    segmentsTitle: "Dla hurtowni, traderów i firm montażowych kupujących w dużych ilościach",
    segments: (v: HomeV) => [
      {
        title: "Hurtownie i dystrybutorzy OZE",
        value: `${v.hqPcsMin}–${v.hqPcsMax}`,
        valueLabel: "modułów w kontenerze 40'HQ, zależnie od modelu",
        cta: "Zapytaj o warunki hurtowe",
        text: `Pełna linia w jednym źródle — od modułów dachowych po farmowe i elastyczne. Karty katalogowe i certyfikaty do dalszej sprzedaży, moduły pakowane na paletach po ${v.palletMin}–${v.palletMax} sztuk.`,
      },
      {
        title: "Traderzy i importerzy",
        value: `${v.kwpMin}–${v.kwpMax} kWp`,
        valueLabel: "w jednym kontenerze 40'HQ, zależnie od modelu (wyliczenie)",
        cta: "Zapytaj o dostawy wielokontenerowe",
        text: "Zakup kontenerowy bezpośrednio od producenta, bez pośredniczącej hurtowni. Specyfikację, klasy mocy i warunki dostawy ustalamy dla całej partii.",
      },
      {
        title: "Firmy montażowe i EPC",
        value: `${v.farmKwp} kWp`,
        valueLabel: `w kontenerze modułów ${v.farmModel} ${v.farmMaxW} W (wyliczenie)`,
        cta: "Zapytaj o dostawę na projekt",
        text: `Moduły ${v.roofRange} na dachy firm i carporty oraz ${v.largeRange} na dachy przemysłowe i farmy fotowoltaiczne. Kontener to zapas jednego typu modułu na wiele realizacji.`,
      },
    ],
    modelsTitle: "Moduły fotowoltaiczne w ofercie",
    modelsText: (v: HomeV) => `Sprawność do ${v.effMax}. Parametry STC z kart katalogowych.`,
    table: {
      model: "Model",
      technology: "Technologia",
      power: "Moc",
      effMax: "Sprawność maks.",
      mass: "Masa",
      warranty: "Gwarancja",
      actions: "Karta katalogowa i zapytanie",
    },
    techTitle: "TOPCon N-type, bifacjalność, double glass — co to daje w praktyce",
    tech: (v: HomeV) => [
      {
        title: "Mniejsze straty w upale",
        text: `Moduły TOPCon w ofercie mają współczynnik temperaturowy mocy ${v.topconCoeff}%/°C. Dla porównania moduł PERC ${v.percModel}: ${v.percCoeff}%/°C. Przy ogniwie nagrzanym do 65 °C (40 °C powyżej STC) to różnica ok. ${v.heatDiff} punktu procentowego mocy (wyliczenie).`,
      },
      {
        title: "Ogniwa połówkowe",
        text: "Wszystkie moduły szklane w ofercie mają ogniwa cięte na pół (half-cell). Mniejszy prąd w każdej połówce oznacza mniejsze straty rezystancyjne i mniejszy wpływ częściowego zacienienia na cały moduł.",
      },
      {
        title: "Moc z obu stron",
        text: `Moduły bifacjalne zbierają też światło odbite od podłoża. ${v.farmModel} ma dodatkowo konstrukcję double glass — szkło z obu stron zamiast folii: ${v.farmGlass}.`,
      },
    ],
    bifCaption: (v: HomeV) =>
      `Zysk z tyłu modułu bifacjalnego — przykład z karty ${v.farmModel} (${v.bifBase} W)`,
    bifRowHeader: "Zysk z tyłu",
    bifRow: "Moc łączna",
    bifNote:
      "Rzeczywisty zysk zależy od albedo podłoża (trawa, żwir, membrana dachowa), wysokości montażu i rozstawu rzędów.",
    logisticsTitle: "Ile modułów i kWp w kontenerze",
    logisticsText:
      "Sztuki według kart katalogowych. kWp to wyliczenie dla najwyższej klasy mocy — w ofercie liczymy na klasie, którą wybierzesz.",
    logisticsTable: { pallet: "Paleta", c20: "Kontener 20'", c40: "Kontener 40'HQ", kwp40: "kWp w 40'HQ" },
    farmBoxTitle: "Farma 1 MWp — ile kontenerów?",
    farmBoxText: (v: HomeV) =>
      `Z modułami ${v.farmModel} ${v.farmMaxW} W: ${v.farm1MwContainers} kontenery 40'HQ (${v.farm1MwModules} modułów, wyliczenie).`,
    farmBoxStrong: (v: HomeV) => `${v.farm1MwContainers} kontenery 40'HQ`,
    farmBoxCta: "Zapytaj o dostawę na farmę",
    calcTitle: "Ile kontenerów potrzebujesz?",
    calcText:
      "Wybierz moduł i klasę mocy, a potem wpisz moc instalacji albo liczbę kontenerów. Wynik przeniesiesz jednym kliknięciem do zapytania o wycenę.",
    stringTitle: "Napięcie Voc zimą i długość stringu",
    stringText1:
      "W mroźny, słoneczny dzień napięcie modułu rośnie ponad wartość z karty. Dlatego liczbę modułów w stringu liczy się dla najniższej temperatury ogniwa, zwykle −25 °C w polskich warunkach projektowych.",
    stringFormula: "Wzór: Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).",
    stringExample: (v: HomeV) => `Przykład: ${v.industrialModel} ${v.industrialMaxW} W`,
    stringRows: (v: HomeV) => [
      { k: "Voc w STC", v: `${v.vocStc} V` },
      { k: "βVoc", v: `${v.betaVoc}%/°C` },
      { k: "Voc przy −25 °C", v: `${v.vocCold} V`, strong: true },
      { k: "Maks. modułów w stringu, system 1500 V", v: v.str1500, strong: true },
      { k: "Maks. modułów w stringu, system 1000 V", v: v.str1000 },
    ],
    stringNote:
      "Wyliczenie poglądowe. O ostatecznej długości stringu decydują też zakres MPPT i maksymalne napięcie wejściowe falownika — sprawdza je projektant instalacji.",
    flexTitle: "Dach nie uniesie paneli? Konstrukcja pracuje? Jest na to rozwiązanie",
    flexText:
      "Moduły elastyczne Amerisolar klei się bezpośrednio do pokrycia — bez konstrukcji wsporczej i bez przewiertów.",
    flexStats: (v: HomeV) => [
      { k: "masa na m²", v: "ok. 3 kg" },
      { k: "grubość", v: `${v.flexMm} mm` },
      { k: "przewiertów w dachu", v: "0" },
    ],
    flexUses: (v: HomeV) => [
      {
        title: "Dachy o niskiej nośności",
        text: "Hale z blachy trapezowej i płyty warstwowej, obiekty rolnicze, starsze dachy bez rezerwy nośności.",
      },
      {
        title: "Obiekty z drganiami",
        text: "Stadiony, hale sportowe, areny, zakłady z maszynami i suwnicami — mała masa, brak szkła i śrub. Dobór po ocenie konstruktora obiektu.",
      },
      {
        title: "Dachy łukowe",
        text: `Promień gięcia ${v.bendRadius} m — moduł układa się na łuku bez skomplikowanej konstrukcji.`,
      },
    ],
    flexHonest: (v: HomeV) =>
      `Uczciwie: sprawność do ${v.flexEff} i gwarancja ${v.flexWP}/${v.flexWL} lat — mniej niż w modułach szklanych. Ten moduł ma sens tam, gdzie alternatywą jest brak instalacji albo wzmocnienie konstrukcji.`,
    flexCta: "Zamów wstępną ocenę obiektu",
    massCaption: "Masa samego modułu na m² powierzchni",
    massNote:
      "Dane z kart katalogowych. W systemach szklanych dochodzi masa konstrukcji wsporczej lub balastu — zależna od projektu, dlatego jej tu nie doliczamy.",
    winterTitle: "Polska zima w karcie katalogowej",
    winterText: (v: HomeV) =>
      `Moduły szklane Amerisolar mają w kartach katalogowych obciążenie śniegiem ${v.snowPa} Pa i wiatrem ${v.windPa} Pa oraz zakres temperatur pracy od ${v.opTemp} °C. Dobór do strefy śniegowej i wiatrowej obiektu potwierdza projektant instalacji.`,
    europeTitle: "Amerisolar w Europie",
    europeText: (v: HomeV) =>
      `Dostawy modułów w 2025 r. według katalogu producenta. Polska z ${v.marketMw} MW jest jednym z ważniejszych rynków marki w Europie.`,
    orderTitle: "Jak zamówić kontener modułów",
    orderSteps: [
      {
        t: "Zapytanie",
        d: "Model, ilość w kWp lub kontenerach, miejsce dostawy i termin — przez formularz lub e-mail.",
      },
      {
        t: "Oferta",
        d: "Cena dla wybranej klasy mocy, warunki dostawy oraz karty katalogowe i certyfikaty.",
      },
      { t: "Zamówienie", d: "Potwierdzenie specyfikacji, terminu i warunków płatności." },
      { t: "Dostawa", d: "Kontener z modułami w uzgodnionym miejscu i terminie." },
    ],
    orderCta: "Zacznij od zapytania — to zajmuje kilka minut.",
    trustTitle: "Gwarancje, normy i producent",
    trustCta: "Karty katalogowe i certyfikaty do pobrania",
    trust: (v: HomeV) => [
      {
        title: "Gwarancje",
        text: `Moduły szklane: ${v.glassWP} lat na produkt i ${v.glassWL} lat liniowej gwarancji mocy. Linia elastyczna: ${v.flexWP} i ${v.flexWL} lat.`,
      },
      {
        title: "Normy i certyfikaty",
        text: "Certyfikaty TÜV SÜD i TÜV Rheinland (IEC 61215, IEC 61730), atesty CE, testy odporności na PID, mgłę solną i amoniak oraz ISO 9001, 14001 i 45001 fabryki. Przy każdym certyfikacie podajemy dokładny zakres mocy, który obejmuje.",
      },
      {
        title: "Producent",
        text: "Worldwide Energy and Manufacturing USA Co., Ltd. — według katalogu firma działa od 1993 r. (Kalifornia), marka Amerisolar od 2007 r.",
      },
    ],
    faqTitle: "Pytania o panele fotowoltaiczne w hurcie",
    faqCta: "Zadaj pytanie w zapytaniu",
    faq: (v: HomeV) => [
      {
        question: "Czy moduły Amerisolar kupię bezpośrednio od producenta?",
        answer:
          "Tak. Dostawy realizujemy w ilościach kontenerowych bezpośrednio od producenta — Worldwide Energy and Manufacturing USA Co., Ltd., właściciela marki Amerisolar. Cenę i warunki dostawy podajemy w ofercie.",
      },
      {
        question: "Ile kWp mieści kontener 40'HQ?",
        answer: `Zależnie od modelu od ${v.kwpMin} do ${v.kwpMax} kWp (wyliczenie: liczba modułów w kontenerze wg karty katalogowej × najwyższa klasa mocy). Na przykład ${v.farmModel}: ${v.farmPieces} sztuk, ${v.farmKwp} kWp.`,
      },
      {
        question: "Czym różni się TOPCon od PERC?",
        answer: `TOPCon to ogniwa typu N z pasywowanym kontaktem tylnym. W naszej ofercie przekłada się to m.in. na niższy współczynnik temperaturowy mocy: ${v.topconCoeff}%/°C w modułach TOPCon wobec ${v.percCoeff}%/°C w module PERC ${v.percModel} — w upale moduł TOPCon traci mniej mocy.`,
      },
      {
        question: "Czy warto kupić moduły bifacjalne?",
        answer: `Na farmach, carportach i dachach płaskich z jasnym podłożem — zwykle tak. Karta ${v.farmModel} podaje przykład: moduł ${v.bifBase} W przy 20% zysku z tyłu daje ${v.bifGain20} W. Rzeczywisty zysk zależy od albedo podłoża i wysokości montażu.`,
      },
      {
        question: "Jakie gwarancje mają moduły?",
        answer: `Moduły szklane: ${v.glassWP} lat gwarancji produktowej i ${v.glassWL} lat liniowej gwarancji mocy. Linia elastyczna: ${v.flexWP} i ${v.flexWL} lat.`,
      },
      {
        question: "Jakie certyfikaty mają moduły?",
        answer:
          "Moduły w ofercie mają certyfikaty TÜV SÜD lub TÜV Rheinland według IEC 61215 i IEC 61730 oraz atesty CE — każdy z określonym zakresem mocy, który podajemy na stronie z kartami katalogowymi. Fabryka ma certyfikaty ISO 9001, ISO 14001 i ISO 45001. Wszystkie dokumenty pobierzesz bez rejestracji.",
      },
      {
        question: "Co zrobić, gdy dach nie uniesie klasycznych paneli?",
        answer: `Rozważ linię elastyczną: ok. 3 kg/m², ${v.flexMm} mm grubości, montaż przez klejenie bez przewiertów. Dobór na konkretny obiekt wymaga oceny konstruktora — prześlij nam opis dachu w zapytaniu.`,
      },
      {
        question: "Czy macie magazyn w Polsce?",
        answer:
          "Nie. Moduły zamawiasz w ilościach kontenerowych bezpośrednio od producenta — dzięki temu cena dotyczy całej partii, bez kosztów magazynu pośredniego. Warunki i miejsce dostawy ustalamy w ofercie.",
      },
      {
        question: "Jakie jest minimalne zamówienie?",
        answer:
          "Sprzedajemy w ilościach kontenerowych. Ile modułów i kWp mieści kontener 20' i 40'HQ dla każdego modelu, pokazuje tabela powyżej; dokładne minimum dla wybranego modelu podajemy w ofercie.",
      },
      {
        question: "Komu sprzedajecie moduły?",
        answer:
          "Firmom kupującym w ilościach kontenerowych: hurtowniom i dystrybutorom OZE, traderom i importerom oraz firmom montażowym i EPC realizującym duże wolumeny.",
      },
      {
        question: "Jaka jest cena paneli?",
        answer:
          "Cena na zapytanie. Zależy od modelu i klasy mocy, liczby kontenerów, miejsca dostawy i terminu. Wyślij zapytanie — odpowiemy konkretną ofertą.",
      },
    ],
  },
  catalog: {
    metaTitle: "Panele fotowoltaiczne Amerisolar 430–720 W — katalog",
    metaDescription:
      "Katalog modułów Amerisolar: TOPCon N-type, bifacjalne, double glass i elastyczne. Pełne parametry z kart katalogowych, pakowanie i kWp na kontener.",
    breadcrumb: "Moduły w ofercie",
    h1: "Moduły w naszej ofercie — panele fotowoltaiczne Amerisolar",
    lead: "{count} modeli od {min} do {max} W. Przy każdym module pobierzesz kartę katalogową PDF — od razu, bez rejestracji i bez pisania maila.",
    intro: {
      glass:
        "Moduły z hartowanym szkłem i ramą: na dachy domów i firm, carporty, dachy przemysłowe oraz farmy fotowoltaiczne.",
      flexible:
        "Moduły o grubości 2 mm montowane przez klejenie, bez konstrukcji i przewiertów — do dachów o ograniczonej nośności i dachów łukowych.",
    },
    stat: { power: "moc", eff: "sprawność maks.", dims: "wymiary", hq: "40'HQ" },
    hqValue: "{pcs} szt., {kwp} kWp",
    note: "kWp w kontenerze: wyliczenie z liczby sztuk wg karty katalogowej i najwyższej klasy mocy.",
  },
  product: {
    meta: (v: ProductV) => `${v.model} ${v.minW}–${v.maxW} W — ${v.shortKind}`,
    description: (v: ProductV) =>
      `${v.model}: ${v.kind} ${v.minW}–${v.maxW} W, sprawność do ${v.eff}, ${v.weight} kg.`,
    descriptionTail: (v: ProductV) =>
      ` Tabele STC/NOCT, ${v.pcsHq} szt. w 40'HQ, gwarancja ${v.warrantyP}/${v.warrantyL} lat.`,
    benefit: {
      eff: (v: ProductV) => `sprawność maks., ${v.cells} ogniw, ${v.powerRange}`,
      flexMass: (v: ProductV) => `${v.weight} kg, grubość ${v.thickness} mm`,
      bending: "minimalny promień gięcia — dachy łukowe",
      snow: (v: ProductV) => `obciążenie śniegiem, wiatr ${v.windPa} Pa`,
      bif: (v: ProductV) => `z modułu ${v.bifBase} W przy 20% zysku z tyłu (przykład z karty)`,
      warranty: "gwarancja na produkt / liniowa na moc",
    },
    faq: {
      hq: (v: ProductV) => ({
        question: `Ile modułów ${v.model} mieści kontener 40'HQ?`,
        answer: `Według karty katalogowej ${v.pcsHq} sztuk. Przy klasie ${v.maxW} W daje to ${v.kwpHq} kWp (wyliczenie: liczba sztuk × moc modułu). Kontener 20' mieści ${v.pcs20} sztuk.`,
      }),
      pallet: (v: ProductV) => ({
        question: "Ile modułów jest na palecie?",
        answer: `${v.pcsPallet} sztuk, czyli ${v.kwpPallet} kWp przy klasie ${v.maxW} W.`,
      }),
      voc: (v: ProductV) => ({
        question: "Jakie napięcie Voc ma moduł zimą?",
        answer: `Voc w STC dla klasy ${v.maxW} W wynosi ${v.vocStc} V, a współczynnik temperaturowy Voc ${v.betaVoc}%/°C. Przy temperaturze ogniwa −25 °C napięcie rośnie do ok. ${v.vocCold} V (wyliczenie poglądowe). Liczbę modułów w stringu dobiera się tak, aby suma nie przekroczyła napięcia maksymalnego falownika i systemu (${v.maxSys} V DC).`,
      }),
      warranty: (v: ProductV) => ({
        question: "Jaka jest gwarancja?",
        answer: `${v.warrantyP} lat gwarancji produktowej i ${v.warrantyL} lat liniowej gwarancji mocy.`,
      }),
      certs: (v: ProductV) => ({ question: "Jakie certyfikaty ma moduł?", answer: v.certs }),
      dims: (v: ProductV) => ({
        question: "Ile waży moduł i jakie ma wymiary?",
        answer: `${v.dims} mm, ${v.weight} kg, czyli ${v.arealMass} kg/m² (masa samego modułu${v.glassSuffix}).`,
      }),
      glassSuffix: ", bez konstrukcji wsporczej",
      bif: (v: ProductV) => ({
        question: "Ile daje strona tylna modułu bifacjalnego?",
        answer: `Karta podaje przykład dla modułu ${v.bifBase} W: przy zysku 10% moc rośnie do ${v.bif10} W, przy 20% do ${v.bif20} W, przy 30% do ${v.bif30} W. Rzeczywisty zysk zależy od albedo podłoża, wysokości i rozstawu rzędów.`,
      }),
      flex: {
        question: "Czy moduł nadaje się na obiekt z drganiami, np. stadion lub halę z suwnicą?",
        answer:
          "Mała masa, brak szkła i montaż bez przewiertów to realne argumenty przy konstrukcjach, które pracują. Producent nie przedstawił jednak jeszcze wyników testów obciążeń dynamicznych, dlatego dobór na konkretny obiekt wymaga oceny konstruktora obiektu.",
      },
      price: {
        question: "Jaka jest cena?",
        answer: "Cena na zapytanie. Zależy od klasy mocy, ilości kontenerów, miejsca dostawy i terminu.",
      },
    },
    heroNote: (v: ProductV) =>
      `Dostawy w ilościach kontenerowych bezpośrednio od producenta: ${v.pcsHq} szt. w kontenerze 40'HQ.`,
    usesTitle: "Zastosowania",
    flexNote: (v: ProductV) =>
      `Montaż przez klejenie, bez przewiertów i bez konstrukcji. Niższa sprawność i krótsza gwarancja (${v.warrantyP}/${v.warrantyL} lat) niż w modułach szklanych — ten moduł ma sens tam, gdzie alternatywą jest brak instalacji albo wzmocnienie konstrukcji dachu. Moduły leżą płasko lub na łuku, więc uzysk zależy od orientacji dachu. Dopuszczalne podłoża i klej potwierdzamy przed ofertą.`,
    electricalTitle: "Parametry elektryczne",
    stcCaption: "Warunki STC (1000 W/m², 25 °C, AM1,5)",
    rows: {
      pmax: "Moc maksymalna Pmax",
      eff: "Sprawność modułu",
      voc: "Napięcie obwodu otwartego Voc",
      isc: "Prąd zwarcia Isc",
      vmp: "Napięcie w punkcie mocy maks. Vmp",
      imp: "Prąd w punkcie mocy maks. Imp",
    },
    tolerance: "Tolerancja Pmax wg karty katalogowej producenta.",
    noctCaption: "Warunki NOCT (800 W/m², otoczenie 20 °C, wiatr 1 m/s)",
    noctMissing:
      "Parametry NOCT dla tego modelu publikujemy po potwierdzeniu aktualnej karty katalogowej przez producenta.",
    tempCaption: "Współczynniki temperaturowe",
    value: "Wartość",
    bifCaption: "Zysk z tyłu modułu — przykład z karty dla {w} W",
    bifRow: "Moc łączna",
    bifNote: "Rzeczywisty zysk zależy od albedo podłoża, wysokości montażu i rozstawu rzędów.",
    mechCaption: "Mechanika i warunki pracy",
    param: "Parametr",
    mech: {
      dims: "Wymiary",
      mass: "Masa",
      arealMass: "Masa na m² (sam moduł)",
      cells: "Ogniwa",
      glass: "Szkło",
      frontCover: "Pokrycie przednie",
      bending: "Promień gięcia",
      mounting: "Montaż",
      snow: "Obciążenie — śnieg",
      wind: "Obciążenie — wiatr",
      junctionBox: "Puszka przyłączeniowa",
      connector: "Złącza",
      maxSys: "Napięcie maks. systemu",
      fuse: "Maks. bezpiecznik szeregowy",
      fire: "Klasa ogniowa",
      safety: "Klasa ochronności",
      opTemp: "Temperatura pracy",
    },
    packCaption: "Pakowanie i moc w jednostce transportowej",
    unit: "Jednostka",
    pcsCol: "Sztuki",
    pack: { pallet: "Paleta", c20: "Kontener 20'", c40: "Kontener 40'HQ" },
    packNote: "Sztuki wg karty katalogowej; kWp to wyliczenie dla najwyższej klasy mocy.",
    warrantyTitle: "Gwarancje i certyfikaty",
    warrantyText: (v: ProductV) =>
      `${v.warrantyP} lat gwarancji produktowej, ${v.warrantyL} lat liniowej gwarancji mocy.`,
    allDocs: "Wszystkie karty katalogowe i certyfikaty",
    compareTitle: "Porównanie z sąsiednimi modelami",
    compareCta: "Potrzebujesz {model} w ilości kontenerowej?",
    compare: {
      technology: "Technologia",
      power: "Moc",
      eff: "Sprawność maks.",
      dims: "Wymiary",
      mass: "Masa",
      bifacial: "Bifacjalny",
      warranty: "Gwarancja",
      pcsHq: "Sztuk w 40'HQ",
    },
    faqTitle: "Pytania o {model}",
    ld: {
      technology: "Technologia",
      power: "Moc maksymalna (STC)",
      eff: "Sprawność maksymalna",
      cells: "Liczba ogniw",
      bifacial: "Bifacjalny",
      coeff: "Współczynnik temperaturowy Pmax",
      warrantyP: "Gwarancja produktowa",
      warrantyL: "Gwarancja liniowa mocy",
      years: "lat",
    },
  },
  docs: {
    metaTitle: "Karty katalogowe i certyfikaty modułów Amerisolar",
    metaDescription:
      "Karty katalogowe PDF i certyfikaty modułów Amerisolar do pobrania: TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, mgła solna, amoniak, ISO, WEEE.",
    h1: "Karty katalogowe i certyfikaty",
    lead: "Dokumentacja producenta do pobrania bez rejestracji. Przy każdym module widzisz jego kartę katalogową i certyfikaty, które go obejmują — z dokładnym zakresem mocy.",
    toc: "Spis treści",
    datasheetsAnchor: "Karty katalogowe",
    byModuleTitle: "Karty katalogowe i certyfikaty według modułu",
    requestDatasheet: "Poproś o kartę katalogową",
    certsOnRequest: "Certyfikaty dla tego modelu przekazujemy z ofertą.",
    sections: {
      product: {
        title: "Certyfikaty modułów IEC 61215 i IEC 61730",
        intro:
          "Certyfikacja typu modułu przez niezależną jednostkę: trwałość i niezawodność (IEC 61215) oraz bezpieczeństwo elektryczne (IEC 61730). Przy każdym certyfikacie podajemy, które klasy mocy z naszej oferty obejmuje.",
      },
      ce: {
        title: "Atesty zgodności CE",
        intro:
          "Atesty TÜV SÜD potwierdzające zgodność z normami EN IEC 61730 — podstawa oznakowania CE modułów na rynku UE.",
      },
      tests: {
        title: "Testy odporności",
        intro:
          "Dodatkowe badania TÜV SÜD: odporność na degradację PID, mgłę solną (instalacje nadmorskie) i amoniak (obiekty rolnicze).",
      },
      iso: {
        title: "Systemy zarządzania w fabryce",
        intro: "Certyfikaty ISO zakładu produkcyjnego modułów w Nantong (Chiny).",
      },
      weee: {
        title: "Recykling i zgodność z WEEE",
        intro:
          "Rejestracja producenta w systemie PV CYCLE — odbiór i recykling zużytych modułów zgodnie z dyrektywą WEEE.",
      },
    },
    card: {
      body: "Jednostka",
      number: "Numer",
      holder: "Posiadacz",
      standards: "Normy",
      issued: "Wydany",
      validUntil: "Ważny do",
      modules: "Moduły z naszej oferty",
      download: "Pobierz PDF",
    },
  },
  rfqPage: {
    metaTitle: "Zapytanie ofertowe — moduły PV w kontenerach | Amerisolar",
    metaDescription:
      "Zapytaj o cenę kontenerową modułów Amerisolar bezpośrednio od producenta. Podaj model, ilość w kWp lub kontenerach, miejsce dostawy i termin.",
    h1: "Zapytaj o cenę kontenerową",
    lead: "Moduły Amerisolar dostarczamy w ilościach kontenerowych, bezpośrednio od producenta. Im dokładniej opiszesz potrzebę — model, ilość, miejsce i termin dostawy — tym szybciej przygotujemy konkretną ofertę.",
    emailBoxStrong: "Wolisz e-mail?",
    emailBoxText: "Napisz od razu, bez formularza.",
    asideOfferTitle: "Co dostaniesz w ofercie",
    asideOffer: [
      "Cenę dla wybranej klasy mocy i ilości",
      "Warunki i termin dostawy",
      "Karty katalogowe i certyfikaty wybranych modeli",
    ],
    asideContainerTitle: "Ile to jest kontener?",
    asideContainer:
      "Kontener 40'HQ mieści od 558 do 1260 modułów, zależnie od modelu — to od ok. 400 do ponad 720 kWp. Nie znasz dokładnej ilości? Wpisz przybliżoną moc instalacji.",
  },
  /** Formularz (komponent kliencki — wyłącznie teksty, bez funkcji). */
  form: {
    honeypot: "Strona www",
    s1: "1. Kim jesteś",
    s2: "2. Moduły i ilość",
    s3: "3. Dostawa i termin",
    s4: "4. Kontakt",
    types: {
      distributor: "Hurtownia / dystrybutor OZE",
      trader: "Trader / importer",
      installer: "Firma montażowa",
      epc: "EPC / deweloper farm PV",
      business: "Firma — własny obiekt",
    },
    timelines: {
      asap: "Jak najszybciej",
      "1-3m": "1–3 miesiące",
      "3-6m": "3–6 miesięcy",
      "6m+": "Ponad 6 miesięcy",
      tender: "Przetarg / projekt w przygotowaniu",
    },
    qtyKwp: "Ilość w kWp",
    qtyKwpPh: "np. 400",
    qtyContainers: "albo liczba kontenerów",
    qtyContainersPh: "np. 1",
    delivery: "Miejsce dostawy",
    deliveryPh: "miejscowość lub kod pocztowy",
    timeline: "Termin",
    choose: "Wybierz",
    name: "Imię i nazwisko *",
    email: "E-mail *",
    phone: "Telefon",
    company: "Firma",
    vatId: "NIP",
    message: "Wiadomość",
    messagePh: "np. klasa mocy, typ projektu, wymagane dokumenty",
    consent: "* Zgadzam się na kontakt w sprawie tego zapytania.",
    consentAdmin:
      "Administratorem danych jest operator serwisu amerisolar.pl (kontakt: office@amerisolar.pl).",
    marketing: "Chcę otrzymywać informacje o dostępności modułów i nowych dostawach (opcjonalnie).",
    submit: "Wyślij zapytanie",
    sending: "Wysyłanie…",
    okTitle: "Zapytanie wysłane",
    okText: "Dziękujemy. Odpowiemy na podany adres e-mail z ofertą lub pytaniami doprecyzowującymi.",
    okUrgent: "W pilnej sprawie napisz na",
    errors: {
      type: "Wybierz, kim jesteś.",
      number: "Podaj liczbę większą od zera.",
      vatId: "NIP to 10 cyfr.",
      name: "Podaj imię i nazwisko.",
      email: "Podaj poprawny adres e-mail.",
      consent: "Zgoda na kontakt jest wymagana, abyśmy mogli odpowiedzieć.",
      qty: "Podaj ilość w kWp albo liczbę kontenerów.",
      fix: "Popraw zaznaczone pola.",
      site: "Nieznany serwis.",
      spam: "Weryfikacja antyspamowa nie powiodła się. Odśwież stronę i spróbuj ponownie.",
      rate: "Wysłano już kilka zapytań z tego adresu. Spróbuj za pół godziny.",
      failed: "Nie udało się wysłać zapytania.",
      fallbackEmail: "Napisz bezpośrednio na {email}.",
      fallback: "Spróbuj ponownie później.",
    },
  },
  /** Kalkulator kontenerów (komponent kliencki — wyłącznie teksty). */
  calc: {
    s1: "1. Wybierz moduł",
    s2: "2. Klasa mocy",
    s3: "3. Co znasz?",
    minNote: "Sprzedajemy w ilościach kontenerowych — minimum to jeden kontener.",
    modePower: "Moc instalacji",
    modeContainers: "Liczbę kontenerów",
    power: "Moc instalacji",
    powerAria: "Moc instalacji w MWp",
    oneContainer: "{mw} MWp (1 kontener)",
    containers: "Liczba kontenerów 40'HQ",
    containersAria: "Liczba kontenerów",
    need: "Potrzebujesz",
    chosen: "Wybrano",
    containerForms: { one: "kontener", few: "kontenery", many: "kontenerów", other: "kontenera" } as Plural,
    powerLabel: "Moc",
    modules: "Modułów",
    perModule: "szt. po {w} W",
    lastFill:
      "Ostatni kontener zapełniony w {pct}% — dobierz moc tak, by wykorzystać pełne kontenery, albo dołóż moduły.",
    quote: { one: "Zamów wycenę dla {n} kontenera", other: "Zamów wycenę dla {n} kontenerów" } as Plural,
    datasheet: "Karta katalogowa PDF",
    note: "Wyliczenie poglądowe: {pcs} modułów w kontenerze 40'HQ wg karty katalogowej{careful}, czyli {kwp} kWp na kontener przy {w} W. Dokładną liczbę i warunki dostawy podajemy w ofercie.",
    careful: " (liczymy ostrożnie na {min})",
    flexible: "moduł elastyczny",
    glass: "moduł szklany",
  },
};

export type Messages = typeof pl;
export default pl;
