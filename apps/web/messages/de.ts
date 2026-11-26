// apps/web/messages/de.ts
// Deutsch — amerisolar.eu/de (Zielmarkt Deutschland).
// Maschinell unterstützte Übersetzung: muttersprachliches Lektorat vor Go-live erforderlich (CLAUDE.md §5.2).
import type { Plural } from "@/lib/i18n";
import type { Messages } from "./pl";

const de: Messages = {
  common: {
    home: "Startseite",
    pieces: "Stk.",
    years: "{p}/{l} Jahre",
    yes: "ja",
    no: "nein",
    datasheetPdf: "Datenblatt PDF",
    downloadDatasheet: "Datenblatt als PDF herunterladen",
    technicalParams: "Technische Daten",
    aiCaption: "Illustrative Visualisierung",
    askContainerPrice: "Containerpreis anfragen",
    askPrice: "Preis anfragen",
    seeModules: "Module ansehen",
    notFoundTitle: "Seite nicht gefunden",
    notFoundText:
      "Die Adresse hat sich möglicherweise geändert oder die Seite ist noch nicht veröffentlicht.",
    notFoundBack: "Zur Startseite",
    pdf: "PDF",
    breadcrumbs: "Brotkrümelnavigation",
  },
  routes: {
    home: "Startseite",
    catalog: "Unsere Module",
    installers: "Für Installateure",
    farms: "Solarparks",
    special: "Sonderanwendungen",
    wholesale: "Großhandel und Vertrieb",
    tools: "Rechner",
    docs: "Datenblätter und Zertifikate",
    about: "Über Amerisolar",
    rfq: "Angebot anfordern",
    contact: "Kontakt",
    privacy: "Datenschutz",
  },
  header: {
    skip: "Zum Inhalt springen",
    logoAria: "Amerisolar — Startseite",
    mainNav: "Hauptmenü",
    menu: "Menü",
    switcher: "Land und Sprache",
  },
  footer: {
    modules: "Module",
    service: "Website",
    note: "Moduldaten stammen aus den Datenblättern des Herstellers. Preise auf Anfrage.",
  },
  cta: {
    titleModel: "Preis für {model} in Containermengen",
    title: "Ein Container Module direkt vom Hersteller",
    text: "Nennen Sie Modell, Menge in kWp oder Containern, Lieferort und Termin. Wir erstellen ein Angebot mit Preis für die gewählte Leistungsklasse und den Lieferbedingungen.",
    noForm: "Kein Formular ausfüllen? Schreiben Sie uns direkt an",
  },
  email: {
    prefix: "oder direkt per E-Mail:",
    prefixShort: "oder per E-Mail:",
    prefixOr: "oder per E-Mail:",
    button: "E-Mail: {email}",
    mobile: "E-Mail schreiben",
    mobileForm: "Angebot anfordern",
    tableLink: "E-Mail",
    tableSr: "zu {model}",
    subjectModel: "Preisanfrage: {model}",
    subject: "Anfrage Containerpreis",
    subjectAssessment: "Erste Objektbewertung — flexible Module",
    subjectQuestion: "Frage zu Amerisolar-Modulen",
    subjectDatasheet: "Datenblatt {model}",
    body: {
      greeting: "Guten Tag,",
      request: "bitte senden Sie mir ein Angebot für {model}-Module.",
      qty: "Menge (kWp oder Anzahl Container): {qty}",
      qtyContainers: "{n} × 40'HQ",
      qtyKwp: " (ca. {kwp} kWp)",
      delivery: "Lieferort: ",
      term: "Termin: ",
      company: "Firma / USt-IdNr.: ",
      phone: "Telefon: ",
      bye: "Mit freundlichen Grüßen",
    },
  },
  catalogLib: {
    group: { glass: "TOPCon-Glasmodule", flexible: "Flexible Linie" },
    kind: {
      flexTopcon: "flexibles TOPCon-Modul",
      flexPerc: "flexibles PERC-Modul",
      doubleGlass: "bifaziales TOPCon-Modul, Glas-Glas",
      bifacial: "bifaziales TOPCon-Modul",
      topcon: "N-Typ-TOPCon-Modul",
    },
    shortKind: {
      flex: "flexibles Modul",
      doubleGlass: "TOPCon Glas-Glas",
      bifacial: "bifaziales TOPCon",
      topcon: "TOPCon-Modul",
    },
    tech: {
      flexTopcon: "TOPCon, flexibel",
      flexPerc: "PERC, flexibel",
      doubleGlass: "TOPCon, Glas-Glas",
      topcon: "N-Typ TOPCon",
    },
    segment: {
      roof: "Wohn- und Gewerbedächer, Carports",
      large: "Industriedächer und Solarparks",
      flex: "Flexible Linie — Sonderdächer",
    },
    cert: {
      number: "{body}, Nr. {number}",
      validUntil: "gültig bis {date}",
      onDatasheet: "{name} (laut Datenblatt)",
      fullRange: "gesamtes Angebot {range}",
      partial: "Klassen {covered} (im Angebot {offer})",
    },
  },
  productCopy: {
    junctionBox: "IP68, 3 Dioden",
    connector: { "MC4 lub kompatybilne": "MC4 oder kompatibel", "MC4 kompatybilne": "MC4-kompatibel" },
    opTemp: "{min} bis {max}",
    bySlug: {
      "as-7m108n-bhc": {
        segments: ["Wohnhausdächer", "kleine Unternehmen", "Installateure"],
        glass: "3,2 mm gehärtet mit AR-Beschichtung (Datenblatt: 'Front/Back Glass')",
      },
      "as-7m120n-hc": {
        segments: ["Wohnhausdächer", "Gewerbedächer", "Installateure"],
        glass: "3,2 mm gehärtet mit AR-Beschichtung",
      },
      "as-7m120n-bhc": {
        segments: ["Carports", "Flachdächer", "kleine Solarparks", "Installateure"],
        glass: "3,2 mm gehärtet mit AR-Beschichtung; Rückseite: transparente Rückseitenfolie",
      },
      "as-7m144n-hc": {
        segments: ["Industriedächer", "Solarparks", "EPC"],
        glass: "3,2 mm gehärtet mit AR-Beschichtung",
      },
      "as-8m132n-bhc": {
        segments: ["Solarparks", "EPC", "Projektentwickler erneuerbare Energien", "Agri-PV"],
        glass: "2 mm + 2 mm gehärtet (Vorderseite mit AR)",
      },
      "as-7m144nfl-hc-black": {
        segments: [
          "Dächer mit geringer Tragfähigkeit (Hallen, Lager, landwirtschaftliche Gebäude)",
          "Bauwerke mit Schwingungen und dynamischen Lasten (Stadien, Sporthallen, Arenen, Industrie) — nach Prüfung durch den Tragwerksplaner",
          "Bogen- und gekrümmte Dächer",
          "Membrandächer — nach Bestätigung der Klebstoffverträglichkeit",
        ],
        frontCover: "leichtes, hochtransparentes Polymer",
        mounting: "geklebt, ohne Bohrungen und ohne Unterkonstruktion",
      },
      "as-7m132fl-hc": {
        segments: [
          "Dächer mit geringer Tragfähigkeit (Hallen, Lager, landwirtschaftliche Gebäude)",
          "Bauwerke mit Schwingungen und dynamischen Lasten (Stadien, Sporthallen, Arenen, Industrie) — nach Prüfung durch den Tragwerksplaner",
          "Bogen- und gekrümmte Dächer",
          "Membrandächer — nach Bestätigung der Klebstoffverträglichkeit",
        ],
      },
    },
  },
  docTitles: {
    datasheet: "Datenblatt {model}",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0021.pdf": "Zertifikat TÜV SÜD Z2 093522 0021",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0023.pdf": "Zertifikat TÜV SÜD Z2 093522 0023",
    "/dokumenty/amerisolar-tuv-rheinland-pv-50674535-0001.pdf": "Zertifikat TÜV Rheinland PV 50674535 0001",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0025.pdf": "Zertifikat TÜV SÜD Z2 093522 0025",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0030.pdf": "Zertifikat TÜV SÜD Z2 093522 0030",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0022-ce.pdf":
      "CE-Konformitätsbescheinigung TÜV SÜD N8A 093522 0022",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0024-ce.pdf":
      "CE-Konformitätsbescheinigung TÜV SÜD N8A 093522 0024",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0027-ce.pdf":
      "CE-Konformitätsbescheinigung TÜV SÜD N8A 093522 0027",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0031-ce.pdf":
      "CE-Konformitätsbescheinigung TÜV SÜD N8A 093522 0031",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0018-anti-pid.pdf": "PID-Beständigkeit — TÜV SÜD Z2 093522 0018",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0019-mgla-solna.pdf":
      "Salznebelbeständigkeit — TÜV SÜD Z2 093522 0019",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0020-amoniak.pdf":
      "Ammoniakbeständigkeit — TÜV SÜD Z2 093522 0020",
    "/dokumenty/amerisolar-iso-9001.pdf": "ISO 9001:2015 — Qualitätsmanagement",
    "/dokumenty/amerisolar-iso-14001.pdf": "ISO 14001:2015 — Umweltmanagement",
    "/dokumenty/amerisolar-iso-45001.pdf": "ISO 45001:2018 — Arbeitsschutz",
    "/dokumenty/amerisolar-pv-cycle-wlochy-2026.pdf": "PV CYCLE Italien — WEEE-Konformität",
    "/dokumenty/amerisolar-pv-cycle-niemcy-weee-2026.pdf": "PV CYCLE Deutschland — WEEE-Konformität",
  },
  drawing: {
    lineupTitle: "Amerisolar-Module im gleichen Maßstab",
    flexSuffix: " (flexibles Modul)",
    flexHeading: "Flexible Module",
    thickness: "Dicke {t} mm",
    dimTitle: "Maßzeichnung {model}: {l} × {w} × {t} mm",
    profile: "Profil",
  },
  certBadges: {
    title: "Zertifikate und Prüfungen",
    intro: "Geprüft von unabhängigen Stellen",
    introValid: ", Zertifikate gültig bis {date}",
    introTail: ". Alle Dokumente ohne Registrierung herunterladen.",
    more: "Datenblätter und Zertifikate ansehen",
    ce: "CE-Bescheinigungen",
    salt: "Salznebel",
    ammonia: "Ammoniak",
    factory: "Werk in Nantong",
    weee: "Recycling, WEEE-Richtlinie",
  },
  media: {
    farm: "Freiflächen-Solarpark auf ebenem Ackerland, Modulreihen auf festen Gestellen in der Nachmittagssonne",
    warehouseWinter: "Flachdach einer Lagerhalle im Winter mit leichtem Schnee und Reihen von Solarmodulen",
    archedHall: "Bogenhalle mit dünnen flexiblen Modulen, auf das gekrümmte Dach geklebt",
    lightRoof:
      "Leichtes Trapezblechdach einer Logistikhalle mit aufgeklebten flexiblen Modulen ohne Unterkonstruktion",
  },
  home: {
    metaTitle: "Solarmodule im Großhandel vom Hersteller — Amerisolar",
    metaDescription:
      "Amerisolar-Solarmodule in Containermengen direkt vom Hersteller: TOPCon 430–720 W, bifazial, Glas-Glas, flexibel. Jetzt Preis anfragen.",
    eyebrow: "Containermengen, direkt vom Hersteller",
    h1: "Amerisolar-Solarmodule im Großhandel — Container direkt vom Hersteller",
    lead: (v) =>
      `N-Typ-TOPCon-Module von ${v.pMin} bis ${v.pMax} W, bifazial, Glas-Glas und eine flexible Linie mit ${v.flexMm} mm. Für Großhändler, Händler und Installationsbetriebe, die in Containermengen einkaufen.`,
    bullets: (v) => [
      "Lieferung direkt vom Hersteller",
      `40'HQ-Container: ${v.hqPcsMin}–${v.hqPcsMax} Module`,
      "Datenblatt und Zertifikate für jedes Modell",
      `Bis zu ${v.glassWL} Jahre Leistungsgarantie`,
    ],
    facts: (v) => [
      { value: "seit 1993", label: "am Markt — laut Herstellerkatalog, Kalifornien" },
      { value: "ca. 11 GW", label: "Produktionskapazität laut Hersteller (2025)" },
      { value: `${v.marketMw} MW`, label: "Module 2025 nach Deutschland geliefert (laut Katalog)" },
      { value: v.effMax, label: "maximaler Modulwirkungsgrad im Sortiment" },
    ],
    lineupTitle: "Sieben Module, ein Maßstab",
    lineupText: (v) =>
      `Gezeichnet nach Abmessungen und Zellenzahl aus den Datenblättern — vom kompakten ${v.smallModel} für Wohnhäuser bis zum ${v.farmModel} für Solarparks.`,
    lineupCta: "Alle Modelle vergleichen",
    directTitle: "Großhandelsmengen direkt vom Hersteller",
    directText:
      "Ihre Containerbestellung geht direkt an den Hersteller der Amerisolar-Module. Eine kürzere Lieferkette bedeutet einen Preis für die gesamte Charge und Dokumentation direkt vom Hersteller.",
    directCta: "Planen Sie ein Projekt mit mehreren hundert kWp oder mehr?",
    points: (v) => [
      {
        title: "Containerpreis",
        text: "Wir kalkulieren die gesamte Charge — einen 20'- oder 40'HQ-Container — für die gewählte Leistungsklasse statt Preise für einzelne Paletten.",
      },
      {
        title: "Vollständige Dokumentation",
        text: "Datenblätter mit STC- und NOCT-Tabellen, Temperaturkoeffizienten und mechanischen Lasten sowie Zertifikate für jedes Modell.",
      },
      {
        title: "Eine Linie, alle Segmente",
        text: `Module mit ${v.roofRange} für Dächer, ${v.largeRange} für Industriedächer und Solarparks sowie eine flexible Linie für Sonderdächer.`,
      },
      {
        title: "Herstellergarantie",
        text: `${v.glassWP} Jahre Produktgarantie und ${v.glassWL} Jahre lineare Leistungsgarantie bei den Glasmodulen.`,
      },
    ],
    segmentsTitle: "Für Großhändler, Händler und Installateure mit großen Mengen",
    segments: (v) => [
      {
        title: "Großhändler und Distributoren für erneuerbare Energien",
        value: `${v.hqPcsMin}–${v.hqPcsMax}`,
        valueLabel: "Module pro 40'HQ-Container, je nach Modell",
        cta: "Großhandelskonditionen anfragen",
        text: `Die komplette Linie aus einer Hand — von Dach- über Freiflächen- bis zu flexiblen Modulen. Datenblätter und Zertifikate für den Weiterverkauf, Module auf Paletten zu ${v.palletMin}–${v.palletMax} Stück.`,
      },
      {
        title: "Händler und Importeure",
        value: `${v.kwpMin}–${v.kwpMax} kWp`,
        valueLabel: "pro 40'HQ-Container, je nach Modell (berechnet)",
        cta: "Lieferungen mit mehreren Containern anfragen",
        text: "Containereinkauf direkt beim Hersteller, ohne zwischengeschalteten Großhändler. Spezifikation, Leistungsklassen und Lieferbedingungen werden für die gesamte Charge vereinbart.",
      },
      {
        title: "Installationsbetriebe und EPC",
        value: `${v.farmKwp} kWp`,
        valueLabel: `pro Container ${v.farmModel} ${v.farmMaxW} W (berechnet)`,
        cta: "Projektlieferung anfragen",
        text: `Module mit ${v.roofRange} für Gewerbedächer und Carports sowie ${v.largeRange} für Industriedächer und Solarparks. Ein Container ist der Vorrat eines Modultyps für viele Projekte.`,
      },
    ],
    modelsTitle: "Solarmodule in unserem Sortiment",
    modelsText: (v) => `Wirkungsgrad bis ${v.effMax}. STC-Daten aus den Datenblättern.`,
    table: {
      model: "Modell",
      technology: "Technologie",
      power: "Leistung",
      effMax: "Max. Wirkungsgrad",
      mass: "Gewicht",
      warranty: "Garantie",
      actions: "Datenblatt und Anfrage",
    },
    techTitle: "N-Typ TOPCon, bifazial, Glas-Glas — was das in der Praxis bedeutet",
    tech: (v) => [
      {
        title: "Weniger Verluste bei Hitze",
        text: `Die TOPCon-Module im Sortiment haben einen Leistungs-Temperaturkoeffizienten von ${v.topconCoeff} %/°C. Zum Vergleich das PERC-Modul ${v.percModel}: ${v.percCoeff} %/°C. Bei einer Zelltemperatur von 65 °C (40 °C über STC) ergibt das einen Unterschied von ca. ${v.heatDiff} Prozentpunkten Leistung (berechnet).`,
      },
      {
        title: "Halbzellen",
        text: "Alle Glasmodule im Sortiment haben halbierte Zellen (Half-Cell). Geringerer Strom in jeder Hälfte bedeutet geringere ohmsche Verluste und weniger Einfluss von Teilverschattung auf das gesamte Modul.",
      },
      {
        title: "Leistung von beiden Seiten",
        text: `Bifaziale Module nutzen auch das vom Boden reflektierte Licht. Das ${v.farmModel} ist zusätzlich als Glas-Glas-Modul aufgebaut — Glas auf beiden Seiten statt Rückseitenfolie: ${v.farmGlass}.`,
      },
    ],
    bifCaption: (v) =>
      `Rückseitengewinn eines bifazialen Moduls — Beispiel aus dem Datenblatt ${v.farmModel} (${v.bifBase} W)`,
    bifRowHeader: "Rückseitengewinn",
    bifRow: "Gesamtleistung",
    bifNote:
      "Der tatsächliche Gewinn hängt von der Albedo des Untergrunds (Gras, Kies, Dachbahn), der Montagehöhe und dem Reihenabstand ab.",
    logisticsTitle: "Module und kWp pro Container",
    logisticsText:
      "Stückzahlen laut Datenblättern. kWp ist für die höchste Leistungsklasse berechnet — im Angebot rechnen wir mit der von Ihnen gewählten Klasse.",
    logisticsTable: {
      pallet: "Palette",
      c20: "20'-Container",
      c40: "40'HQ-Container",
      kwp40: "kWp im 40'HQ",
    },
    farmBoxTitle: "Solarpark mit 1 MWp — wie viele Container?",
    farmBoxText: (v) =>
      `Mit Modulen ${v.farmModel} ${v.farmMaxW} W: ${v.farm1MwContainers} × 40'HQ-Container (${v.farm1MwModules} Module, berechnet).`,
    farmBoxStrong: (v) => `${v.farm1MwContainers} × 40'HQ-Container`,
    farmBoxCta: "Lieferung für einen Solarpark anfragen",
    calcTitle: "Wie viele Container brauchen Sie?",
    calcText:
      "Wählen Sie Modul und Leistungsklasse, dann geben Sie die Anlagenleistung oder die Containeranzahl ein. Das Ergebnis übernehmen Sie mit einem Klick in die Angebotsanfrage.",
    stringTitle: "Leerlaufspannung im Winter und Stranglänge",
    stringText1:
      "An einem frostigen, sonnigen Tag steigt die Modulspannung über den Datenblattwert. Deshalb wird die Modulanzahl pro Strang für die niedrigste Zelltemperatur berechnet — hier −25 °C, ein in Deutschland üblicher Auslegungswert; der Planer verwendet das Minimum am Standort.",
    stringFormula: "Formel: Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).",
    stringExample: (v) => `Beispiel: ${v.industrialModel} ${v.industrialMaxW} W`,
    stringRows: (v) => [
      { k: "Voc bei STC", v: `${v.vocStc} V` },
      { k: "βVoc", v: `${v.betaVoc} %/°C` },
      { k: "Voc bei −25 °C", v: `${v.vocCold} V`, strong: true },
      { k: "Max. Module pro Strang, 1500-V-System", v: v.str1500, strong: true },
      { k: "Max. Module pro Strang, 1000-V-System", v: v.str1000 },
    ],
    stringNote:
      "Überschlägige Berechnung. Die endgültige Stranglänge hängt auch vom MPPT-Bereich und der maximalen Eingangsspannung des Wechselrichters ab — das prüft der Anlagenplaner.",
    flexTitle: "Dach trägt keine Module? Tragwerk schwingt? Dafür gibt es eine Lösung",
    flexText:
      "Flexible Amerisolar-Module werden direkt auf die Dacheindeckung geklebt — ohne Unterkonstruktion und ohne Bohrungen.",
    flexStats: (v) => [
      { k: "Gewicht pro m²", v: "ca. 3 kg" },
      { k: "Dicke", v: `${v.flexMm} mm` },
      { k: "Bohrungen im Dach", v: "0" },
    ],
    flexUses: (v) => [
      {
        title: "Dächer mit geringer Tragfähigkeit",
        text: "Hallen mit Trapezblech und Sandwichpaneelen, landwirtschaftliche Gebäude, ältere Dächer ohne Tragreserve.",
      },
      {
        title: "Bauwerke mit Schwingungen",
        text: "Stadien, Sporthallen, Arenen, Werke mit Maschinen und Kranen — geringes Gewicht, kein Glas, keine Schrauben. Auswahl nach Prüfung durch den Tragwerksplaner des Gebäudes.",
      },
      {
        title: "Bogendächer",
        text: `Biegeradius ${v.bendRadius} m — das Modul folgt der Wölbung ohne aufwendige Unterkonstruktion.`,
      },
    ],
    flexHonest: (v) =>
      `Ehrlich gesagt: Wirkungsgrad bis ${v.flexEff} und ${v.flexWP}/${v.flexWL} Jahre Garantie — weniger als bei Glasmodulen. Das Modul lohnt sich dort, wo die Alternative keine Anlage oder eine Verstärkung des Tragwerks wäre.`,
    flexCta: "Erste Objektbewertung anfragen",
    massCaption: "Gewicht des Moduls allein pro m² Fläche",
    massNote:
      "Daten aus den Datenblättern. Bei Glassystemen kommt das Gewicht der Unterkonstruktion oder des Ballasts hinzu — projektabhängig, daher hier nicht eingerechnet.",
    winterTitle: "Schnee- und Windlast im Datenblatt",
    winterText: (v) =>
      `Die Amerisolar-Glasmodule sind laut Datenblatt für ${v.snowPa} Pa Schneelast und ${v.windPa} Pa Windlast ausgelegt, bei einem Betriebstemperaturbereich von ${v.opTemp} °C. Die Eignung für die Schnee- und Windlastzone des Standorts bestätigt der Anlagenplaner.`,
    europeTitle: "Amerisolar in Europa",
    europeText: (v) =>
      `Modullieferungen 2025 laut Herstellerkatalog. Deutschland gehört mit ${v.marketMw} MW zu den wichtigen Märkten der Marke in Europa.`,
    orderTitle: "So bestellen Sie einen Container Module",
    orderSteps: [
      {
        t: "Anfrage",
        d: "Modell, Menge in kWp oder Containern, Lieferort und Termin — per Formular oder E-Mail.",
      },
      {
        t: "Angebot",
        d: "Preis für die gewählte Leistungsklasse, Lieferbedingungen sowie Datenblätter und Zertifikate.",
      },
      { t: "Bestellung", d: "Bestätigung von Spezifikation, Termin und Zahlungsbedingungen." },
      { t: "Lieferung", d: "Ein Container Module am vereinbarten Ort und Termin." },
    ],
    orderCta: "Starten Sie mit einer Anfrage — das dauert nur wenige Minuten.",
    trustTitle: "Garantien, Normen und Hersteller",
    trustCta: "Datenblätter und Zertifikate herunterladen",
    trust: (v) => [
      {
        title: "Garantien",
        text: `Glasmodule: ${v.glassWP} Jahre Produktgarantie und ${v.glassWL} Jahre lineare Leistungsgarantie. Flexible Linie: ${v.flexWP} und ${v.flexWL} Jahre.`,
      },
      {
        title: "Normen und Zertifikate",
        text: "Zertifikate von TÜV SÜD und TÜV Rheinland (IEC 61215, IEC 61730), CE-Bescheinigungen, Beständigkeitsprüfungen für PID, Salznebel und Ammoniak sowie ISO 9001, 14001 und 45001 des Werks. Bei jedem Zertifikat nennen wir den genauen Leistungsbereich.",
      },
      {
        title: "Hersteller",
        text: "Worldwide Energy and Manufacturing USA Co., Ltd. — laut Katalog seit 1993 tätig (Kalifornien), die Marke Amerisolar besteht seit 2007.",
      },
    ],
    faqTitle: "Fragen zu Solarmodulen im Großhandel",
    faqCta: "Frage per Anfrage stellen",
    faq: (v) => [
      {
        question: "Kann ich Amerisolar-Module direkt vom Hersteller kaufen?",
        answer:
          "Ja. Wir liefern Containermengen direkt vom Hersteller — Worldwide Energy and Manufacturing USA Co., Ltd., Inhaber der Marke Amerisolar. Preis und Lieferbedingungen nennen wir im Angebot.",
      },
      {
        question: "Wie viele kWp passen in einen 40'HQ-Container?",
        answer: `Je nach Modell ${v.kwpMin} bis ${v.kwpMax} kWp (berechnet: Module pro Container laut Datenblatt × höchste Leistungsklasse). Zum Beispiel ${v.farmModel}: ${v.farmPieces} Stück, ${v.farmKwp} kWp.`,
      },
      {
        question: "Was unterscheidet TOPCon von PERC?",
        answer: `TOPCon ist eine N-Typ-Zelle mit passiviertem Rückkontakt. In unserem Sortiment bedeutet das unter anderem einen niedrigeren Leistungs-Temperaturkoeffizienten: ${v.topconCoeff} %/°C bei den TOPCon-Modulen gegenüber ${v.percCoeff} %/°C beim PERC-Modul ${v.percModel} — bei Hitze verliert ein TOPCon-Modul weniger Leistung.`,
      },
      {
        question: "Lohnen sich bifaziale Module?",
        answer: `Auf Solarparks, Carports und Flachdächern mit hellem Untergrund — meist ja. Das Datenblatt ${v.farmModel} nennt ein Beispiel: ein ${v.bifBase}-W-Modul liefert bei 20 % Rückseitengewinn ${v.bifGain20} W. Der tatsächliche Gewinn hängt von Albedo und Montagehöhe ab.`,
      },
      {
        question: "Welche Garantien haben die Module?",
        answer: `Glasmodule: ${v.glassWP} Jahre Produktgarantie und ${v.glassWL} Jahre lineare Leistungsgarantie. Flexible Linie: ${v.flexWP} und ${v.flexWL} Jahre.`,
      },
      {
        question: "Welche Zertifikate haben die Module?",
        answer:
          "Die Module im Sortiment haben Zertifikate von TÜV SÜD oder TÜV Rheinland nach IEC 61215 und IEC 61730 sowie CE-Bescheinigungen — jeweils mit einem bestimmten Leistungsbereich, den wir auf der Seite mit den Datenblättern angeben. Das Werk ist nach ISO 9001, ISO 14001 und ISO 45001 zertifiziert. Alle Dokumente laden Sie ohne Registrierung herunter.",
      },
      {
        question: "Was tun, wenn das Dach keine klassischen Module trägt?",
        answer: `Prüfen Sie die flexible Linie: ca. 3 kg/m², ${v.flexMm} mm dick, geklebt ohne Bohrungen. Die Auswahl für ein konkretes Gebäude erfordert die Prüfung durch einen Tragwerksplaner — senden Sie uns eine Dachbeschreibung mit Ihrer Anfrage.`,
      },
      {
        question: "Haben Sie ein Lager in Deutschland?",
        answer:
          "Nein. Sie bestellen Containermengen direkt beim Hersteller — dadurch gilt der Preis für die gesamte Charge, ohne Kosten eines Zwischenlagers. Lieferbedingungen und Lieferort vereinbaren wir im Angebot.",
      },
      {
        question: "Wie hoch ist die Mindestbestellmenge?",
        answer:
          "Wir verkaufen in Containermengen. Wie viele Module und kWp in einen 20'- und 40'HQ-Container passen, zeigt die Tabelle oben; das genaue Minimum für das gewählte Modell nennen wir im Angebot.",
      },
      {
        question: "An wen verkaufen Sie?",
        answer:
          "An Unternehmen, die in Containermengen einkaufen: Großhändler und Distributoren für erneuerbare Energien, Händler und Importeure sowie Installations- und EPC-Unternehmen mit großen Volumina.",
      },
      {
        question: "Was kosten die Module?",
        answer:
          "Preis auf Anfrage. Er hängt von Modell und Leistungsklasse, Anzahl der Container, Lieferort und Termin ab. Senden Sie eine Anfrage — wir antworten mit einem konkreten Angebot.",
      },
    ],
  },
  catalog: {
    metaTitle: "Amerisolar-Solarmodule 430–720 W — Katalog",
    metaDescription:
      "Amerisolar-Modulkatalog: N-Typ TOPCon, bifazial, Glas-Glas und flexibel. Vollständige Datenblattwerte, Verpackung und kWp pro Container.",
    breadcrumb: "Unsere Module",
    h1: "Unsere Module — Amerisolar-Solarmodule",
    lead: "{count} Modelle von {min} bis {max} W. Zu jedem Modul laden Sie das PDF-Datenblatt herunter — sofort, ohne Registrierung und ohne E-Mail.",
    intro: {
      glass:
        "Module mit gehärtetem Glas und Rahmen: für Wohn- und Gewerbedächer, Carports, Industriedächer und Solarparks.",
      flexible:
        "2 mm dünne Module, geklebt, ohne Unterkonstruktion und Bohrungen — für Dächer mit begrenzter Tragfähigkeit und Bogendächer.",
    },
    stat: { power: "Leistung", eff: "max. Wirkungsgrad", dims: "Abmessungen", hq: "40'HQ" },
    hqValue: "{pcs} Stk., {kwp} kWp",
    note: "kWp pro Container: berechnet aus der Stückzahl laut Datenblatt und der höchsten Leistungsklasse.",
  },
  product: {
    meta: (v) => `${v.model} ${v.minW}–${v.maxW} W — ${v.shortKind}`,
    description: (v) =>
      `${v.model}: ${v.kind} ${v.minW}–${v.maxW} W, Wirkungsgrad bis ${v.eff}, ${v.weight} kg.`,
    descriptionTail: (v) =>
      ` STC/NOCT-Tabellen, ${v.pcsHq} Stk. pro 40'HQ, ${v.warrantyP}/${v.warrantyL} Jahre Garantie.`,
    benefit: {
      eff: (v) => `max. Wirkungsgrad, ${v.cells} Zellen, ${v.powerRange}`,
      flexMass: (v) => `${v.weight} kg, ${v.thickness} mm dick`,
      bending: "minimaler Biegeradius — Bogendächer",
      snow: (v) => `Schneelast, Wind ${v.windPa} Pa`,
      bif: (v) => `aus einem ${v.bifBase}-W-Modul bei 20 % Rückseitengewinn (Datenblattbeispiel)`,
      warranty: "Produkt- / lineare Leistungsgarantie",
    },
    faq: {
      hq: (v) => ({
        question: `Wie viele ${v.model}-Module passen in einen 40'HQ-Container?`,
        answer: `Laut Datenblatt ${v.pcsHq} Stück. Bei der Klasse ${v.maxW} W sind das ${v.kwpHq} kWp (berechnet: Stückzahl × Modulleistung). Ein 20'-Container fasst ${v.pcs20} Stück.`,
      }),
      pallet: (v) => ({
        question: "Wie viele Module sind auf einer Palette?",
        answer: `${v.pcsPallet} Stück, also ${v.kwpPallet} kWp bei der Klasse ${v.maxW} W.`,
      }),
      voc: (v) => ({
        question: "Wie hoch ist die Leerlaufspannung im Winter?",
        answer: `Voc bei STC beträgt für die Klasse ${v.maxW} W ${v.vocStc} V, der Temperaturkoeffizient von Voc ${v.betaVoc} %/°C. Bei einer Zelltemperatur von −25 °C steigt die Spannung auf ca. ${v.vocCold} V (überschlägige Berechnung). Die Modulanzahl pro Strang wird so gewählt, dass die Summe die maximale Spannung von Wechselrichter und System (${v.maxSys} V DC) nicht überschreitet.`,
      }),
      warranty: (v) => ({
        question: "Welche Garantie gibt es?",
        answer: `${v.warrantyP} Jahre Produktgarantie und ${v.warrantyL} Jahre lineare Leistungsgarantie.`,
      }),
      certs: (v) => ({ question: "Welche Zertifikate hat das Modul?", answer: v.certs }),
      dims: (v) => ({
        question: "Wie schwer ist das Modul und welche Maße hat es?",
        answer: `${v.dims} mm, ${v.weight} kg, also ${v.arealMass} kg/m² (nur das Modul${v.glassSuffix}).`,
      }),
      glassSuffix: ", ohne Unterkonstruktion",
      bif: (v) => ({
        question: "Wie viel bringt die Rückseite eines bifazialen Moduls?",
        answer: `Das Datenblatt nennt ein Beispiel für ein ${v.bifBase}-W-Modul: bei 10 % Gewinn steigt die Leistung auf ${v.bif10} W, bei 20 % auf ${v.bif20} W, bei 30 % auf ${v.bif30} W. Der tatsächliche Gewinn hängt von Albedo, Montagehöhe und Reihenabstand ab.`,
      }),
      flex: {
        question:
          "Eignet sich das Modul für Bauwerke mit Schwingungen, z. B. ein Stadion oder eine Halle mit Kran?",
        answer:
          "Geringes Gewicht, kein Glas und Montage ohne Bohrungen sind echte Vorteile bei Tragwerken, die sich bewegen. Der Hersteller hat jedoch noch keine Ergebnisse dynamischer Lastprüfungen vorgelegt; die Auswahl für ein konkretes Gebäude erfordert daher die Prüfung durch dessen Tragwerksplaner.",
      },
      price: {
        question: "Wie hoch ist der Preis?",
        answer:
          "Preis auf Anfrage. Er hängt von Leistungsklasse, Anzahl der Container, Lieferort und Termin ab.",
      },
    },
    heroNote: (v) => `Containermengen direkt vom Hersteller: ${v.pcsHq} Stk. pro 40'HQ-Container.`,
    usesTitle: "Einsatzbereiche",
    flexNote: (v) =>
      `Geklebt, ohne Bohrungen und ohne Unterkonstruktion. Geringerer Wirkungsgrad und kürzere Garantie (${v.warrantyP}/${v.warrantyL} Jahre) als bei Glasmodulen — das Modul lohnt sich dort, wo die Alternative keine Anlage oder eine Verstärkung des Dachtragwerks wäre. Die Module liegen flach oder folgen der Wölbung, der Ertrag hängt daher von der Dachausrichtung ab. Zulässige Untergründe und Klebstoff bestätigen wir vor dem Angebot.`,
    electricalTitle: "Elektrische Daten",
    stcCaption: "STC (1000 W/m², 25 °C, AM1,5)",
    rows: {
      pmax: "Maximale Leistung Pmax",
      eff: "Modulwirkungsgrad",
      voc: "Leerlaufspannung Voc",
      isc: "Kurzschlussstrom Isc",
      vmp: "Spannung im MPP Vmp",
      imp: "Strom im MPP Imp",
    },
    tolerance: "Pmax-Toleranz laut Datenblatt des Herstellers.",
    noctCaption: "NOCT (800 W/m², Umgebung 20 °C, Wind 1 m/s)",
    noctMissing:
      "NOCT-Daten für dieses Modell veröffentlichen wir, sobald der Hersteller das aktuelle Datenblatt bestätigt.",
    tempCaption: "Temperaturkoeffizienten",
    value: "Wert",
    bifCaption: "Rückseitengewinn — Datenblattbeispiel für {w} W",
    bifRow: "Gesamtleistung",
    bifNote: "Der tatsächliche Gewinn hängt von Albedo, Montagehöhe und Reihenabstand ab.",
    mechCaption: "Mechanik und Betriebsbedingungen",
    param: "Parameter",
    mech: {
      dims: "Abmessungen",
      mass: "Gewicht",
      arealMass: "Gewicht pro m² (nur Modul)",
      cells: "Zellen",
      glass: "Glas",
      frontCover: "Frontabdeckung",
      bending: "Biegeradius",
      mounting: "Montage",
      snow: "Last — Schnee",
      wind: "Last — Wind",
      junctionBox: "Anschlussdose",
      connector: "Steckverbinder",
      maxSys: "Max. Systemspannung",
      fuse: "Max. Strangsicherung",
      fire: "Brandklasse",
      safety: "Schutzklasse",
      opTemp: "Betriebstemperatur",
    },
    packCaption: "Verpackung und Leistung pro Transporteinheit",
    unit: "Einheit",
    pcsCol: "Stück",
    pack: { pallet: "Palette", c20: "20'-Container", c40: "40'HQ-Container" },
    packNote: "Stückzahlen laut Datenblatt; kWp ist für die höchste Leistungsklasse berechnet.",
    warrantyTitle: "Garantien und Zertifikate",
    warrantyText: (v) =>
      `${v.warrantyP} Jahre Produktgarantie, ${v.warrantyL} Jahre lineare Leistungsgarantie.`,
    allDocs: "Alle Datenblätter und Zertifikate",
    compareTitle: "Vergleich mit benachbarten Modellen",
    compareCta: "Brauchen Sie das {model} in Containermengen?",
    compare: {
      technology: "Technologie",
      power: "Leistung",
      eff: "Max. Wirkungsgrad",
      dims: "Abmessungen",
      mass: "Gewicht",
      bifacial: "Bifazial",
      warranty: "Garantie",
      pcsHq: "Stück pro 40'HQ",
    },
    faqTitle: "Fragen zum {model}",
    ld: {
      technology: "Technologie",
      power: "Maximale Leistung (STC)",
      eff: "Maximaler Wirkungsgrad",
      cells: "Zellenanzahl",
      bifacial: "Bifazial",
      coeff: "Temperaturkoeffizient Pmax",
      warrantyP: "Produktgarantie",
      warrantyL: "Lineare Leistungsgarantie",
      years: "Jahre",
    },
  },
  docs: {
    metaTitle: "Datenblätter und Zertifikate der Amerisolar-Module",
    metaDescription:
      "Amerisolar-Datenblätter (PDF) und Zertifikate zum Download: TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, Salznebel, Ammoniak, ISO, WEEE.",
    h1: "Datenblätter und Zertifikate",
    lead: "Herstellerdokumentation zum Download ohne Registrierung. Zu jedem Modul sehen Sie das Datenblatt und die Zertifikate, die es abdecken — mit genauem Leistungsbereich.",
    toc: "Inhalt",
    datasheetsAnchor: "Datenblätter",
    byModuleTitle: "Datenblätter und Zertifikate nach Modul",
    requestDatasheet: "Datenblatt anfordern",
    certsOnRequest: "Zertifikate für dieses Modell erhalten Sie mit dem Angebot.",
    sections: {
      product: {
        title: "Modulzertifikate IEC 61215 und IEC 61730",
        intro:
          "Typzertifizierung des Moduls durch eine unabhängige Stelle: Haltbarkeit und Zuverlässigkeit (IEC 61215) sowie elektrische Sicherheit (IEC 61730). Bei jedem Zertifikat nennen wir, welche Leistungsklassen unseres Sortiments es abdeckt.",
      },
      ce: {
        title: "CE-Konformitätsbescheinigungen",
        intro:
          "Bescheinigungen von TÜV SÜD über die Konformität mit EN IEC 61730 — Grundlage der CE-Kennzeichnung der Module im EU-Markt.",
      },
      tests: {
        title: "Beständigkeitsprüfungen",
        intro:
          "Zusätzliche Prüfungen durch TÜV SÜD: Beständigkeit gegen PID-Degradation, Salznebel (Küstenanlagen) und Ammoniak (landwirtschaftliche Gebäude).",
      },
      iso: {
        title: "Managementsysteme im Werk",
        intro: "ISO-Zertifikate des Modulwerks in Nantong (China).",
      },
      weee: {
        title: "Recycling und WEEE-Konformität",
        intro:
          "Registrierung des Herstellers bei PV CYCLE — Rücknahme und Recycling von Altmodulen gemäß WEEE-Richtlinie.",
      },
    },
    card: {
      body: "Stelle",
      number: "Nummer",
      holder: "Inhaber",
      standards: "Normen",
      issued: "Ausgestellt",
      validUntil: "Gültig bis",
      modules: "Module aus unserem Sortiment",
      download: "PDF herunterladen",
    },
  },
  rfqPage: {
    metaTitle: "Angebot anfordern — PV-Module im Container | Amerisolar",
    metaDescription:
      "Containerpreis für Amerisolar-Module direkt vom Hersteller anfragen. Nennen Sie Modell, Menge in kWp oder Containern, Lieferort und Termin.",
    h1: "Containerpreis anfragen",
    lead: "Wir liefern Amerisolar-Module in Containermengen direkt vom Hersteller. Je genauer Sie Ihren Bedarf beschreiben — Modell, Menge, Lieferort und Termin —, desto schneller erstellen wir ein konkretes Angebot.",
    emailBoxStrong: "Lieber per E-Mail?",
    emailBoxText: "Schreiben Sie uns direkt, ohne Formular.",
    asideOfferTitle: "Was das Angebot enthält",
    asideOffer: [
      "Preis für die gewählte Leistungsklasse und Menge",
      "Lieferbedingungen und Termin",
      "Datenblätter und Zertifikate der gewählten Modelle",
    ],
    asideContainerTitle: "Wie viel ist ein Container?",
    asideContainer:
      "Ein 40'HQ-Container fasst je nach Modell 558 bis 1.260 Module — rund 400 bis über 720 kWp. Sie kennen die genaue Menge nicht? Geben Sie die ungefähre Anlagenleistung an.",
  },
  form: {
    honeypot: "Website",
    s1: "1. Wer sind Sie?",
    s2: "2. Module und Menge",
    s3: "3. Lieferung und Termin",
    s4: "4. Kontakt",
    types: {
      distributor: "Großhändler / Distributor für erneuerbare Energien",
      trader: "Händler / Importeur",
      installer: "Installationsbetrieb",
      epc: "EPC / Solarpark-Projektentwickler",
      business: "Unternehmen — eigenes Gebäude",
    },
    timelines: {
      asap: "So schnell wie möglich",
      "1-3m": "1–3 Monate",
      "3-6m": "3–6 Monate",
      "6m+": "Mehr als 6 Monate",
      tender: "Ausschreibung / Projekt in Vorbereitung",
    },
    qtyKwp: "Menge in kWp",
    qtyKwpPh: "z. B. 400",
    qtyContainers: "oder Anzahl Container",
    qtyContainersPh: "z. B. 1",
    delivery: "Lieferort",
    deliveryPh: "Ort oder Postleitzahl",
    timeline: "Termin",
    choose: "Bitte wählen",
    name: "Vor- und Nachname *",
    email: "E-Mail *",
    phone: "Telefon",
    company: "Firma",
    vatId: "USt-IdNr.",
    message: "Nachricht",
    messagePh: "z. B. Leistungsklasse, Projektart, benötigte Dokumente",
    consent: "* Ich bin mit der Kontaktaufnahme zu dieser Anfrage einverstanden.",
    consentAdmin: "Verantwortlicher für die Datenverarbeitung ist TODO(klient): Firmenname.",
    marketing:
      "Ich möchte Informationen zur Modulverfügbarkeit und zu neuen Lieferungen erhalten (optional).",
    submit: "Anfrage senden",
    sending: "Wird gesendet…",
    okTitle: "Anfrage gesendet",
    okText: "Vielen Dank. Wir antworten an die angegebene E-Mail-Adresse mit einem Angebot oder Rückfragen.",
    okUrgent: "In dringenden Fällen schreiben Sie an",
    errors: {
      type: "Bitte wählen Sie, wer Sie sind.",
      number: "Bitte eine Zahl größer als null eingeben.",
      vatId: "Bitte eine gültige USt-IdNr. eingeben.",
      name: "Bitte Vor- und Nachnamen eingeben.",
      email: "Bitte eine gültige E-Mail-Adresse eingeben.",
      consent: "Die Einwilligung zur Kontaktaufnahme ist erforderlich, damit wir antworten können.",
      qty: "Bitte Menge in kWp oder Anzahl der Container angeben.",
      fix: "Bitte korrigieren Sie die markierten Felder.",
      site: "Unbekannte Website.",
      spam: "Die Spam-Prüfung ist fehlgeschlagen. Laden Sie die Seite neu und versuchen Sie es erneut.",
      rate: "Von dieser Adresse wurden bereits mehrere Anfragen gesendet. Bitte versuchen Sie es in einer halben Stunde erneut.",
      failed: "Die Anfrage konnte nicht gesendet werden.",
      fallbackEmail: "Bitte schreiben Sie direkt an {email}.",
      fallback: "Bitte versuchen Sie es später erneut.",
    },
  },
  calc: {
    s1: "1. Modul wählen",
    s2: "2. Leistungsklasse",
    s3: "3. Was ist bekannt?",
    minNote: "Wir verkaufen in Containermengen — Minimum ist ein Container.",
    modePower: "Anlagenleistung",
    modeContainers: "Anzahl Container",
    power: "Anlagenleistung",
    powerAria: "Anlagenleistung in MWp",
    oneContainer: "{mw} MWp (1 Container)",
    containers: "Anzahl 40'HQ-Container",
    containersAria: "Anzahl Container",
    need: "Sie brauchen",
    chosen: "Gewählt",
    containerForms: { one: "Container", other: "Container" } as Plural,
    powerLabel: "Leistung",
    modules: "Module",
    perModule: "Stk. à {w} W",
    lastFill:
      "Der letzte Container ist zu {pct} % gefüllt — passen Sie die Leistung an volle Container an oder ergänzen Sie Module.",
    quote: {
      one: "Angebot für {n} Container anfordern",
      other: "Angebot für {n} Container anfordern",
    } as Plural,
    datasheet: "Datenblatt PDF",
    note: "Überschlägige Berechnung: {pcs} Module pro 40'HQ-Container laut Datenblatt{careful}, also {kwp} kWp pro Container bei {w} W. Genaue Menge und Lieferbedingungen nennen wir im Angebot.",
    careful: " (wir rechnen vorsichtig mit {min})",
    flexible: "flexibles Modul",
    glass: "Glasmodul",
  },
};

export default de;
