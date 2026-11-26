// apps/web/messages/hr.ts
// Hrvatski — amerisolar.hr (tržište: Hrvatska). Katalog nema podatke za Hrvatsku → reference na razini Europe.
// Strojno potpomognut prijevod: prije objave potrebna je lektura izvornog govornika (CLAUDE.md §5.2).
import type { Plural } from "@/lib/i18n";
import type { Messages } from "./pl";

const hr: Messages = {
  common: {
    home: "Početna",
    pieces: "kom",
    years: "{p}/{l} god.",
    yes: "da",
    no: "ne",
    datasheetPdf: "Tehnički list PDF",
    downloadDatasheet: "Preuzmi tehnički list PDF",
    technicalParams: "Tehnički podaci",
    aiCaption: "Ilustrativna vizualizacija",
    askContainerPrice: "Zatražite cijenu po kontejneru",
    askPrice: "Zatražite cijenu",
    seeModules: "Pogledajte module",
    notFoundTitle: "Stranica nije pronađena",
    notFoundText: "Adresa se možda promijenila ili stranica još nije objavljena.",
    notFoundBack: "Idi na početnu stranicu",
    pdf: "PDF",
    breadcrumbs: "Navigacijski put",
  },
  routes: {
    home: "Početna",
    catalog: "Naši moduli",
    installers: "Za instalatere",
    farms: "Sunčane elektrane",
    special: "Posebne primjene",
    wholesale: "Veleprodaja i distribucija",
    tools: "Alati",
    docs: "Tehnički listovi i certifikati",
    about: "O Amerisolaru",
    rfq: "Zahtjev za ponudu",
    contact: "Kontakt",
    privacy: "Privatnost",
  },
  header: {
    skip: "Prijeđi na sadržaj",
    logoAria: "Amerisolar — početna",
    mainNav: "Glavni izbornik",
    menu: "Izbornik",
    switcher: "Zemlja i jezik",
  },
  footer: {
    modules: "Moduli",
    service: "Stranica",
    note: "Podaci o modulima potječu iz tehničkih listova proizvođača. Cijene na upit.",
  },
  cta: {
    titleModel: "Cijena za {model} u kontejnerskim količinama",
    title: "Kontejner modula izravno od proizvođača",
    text: "Navedite model, količinu u kWp ili kontejnerima, mjesto i rok isporuke. Pripremit ćemo ponudu s cijenom za odabranu klasu snage i uvjetima isporuke.",
    noForm: "Ne želite ispunjavati obrazac? Pišite nam izravno na",
  },
  email: {
    prefix: "ili nam odmah pišite:",
    prefixShort: "ili pišite na:",
    prefixOr: "ili pišite na:",
    button: "Pišite: {email}",
    mobile: "Pošaljite e-mail",
    mobileForm: "Zatražite ponudu",
    tableLink: "E-mail",
    tableSr: "o modelu {model}",
    subjectModel: "Upit za cijenu: {model}",
    subject: "Upit za cijenu po kontejneru",
    subjectAssessment: "Preliminarna procjena objekta — fleksibilni moduli",
    subjectQuestion: "Pitanje o Amerisolar modulima",
    subjectDatasheet: "Tehnički list {model}",
    body: {
      greeting: "Poštovani,",
      request: "molim ponudu za module {model}.",
      qty: "Količina (kWp ili broj kontejnera): {qty}",
      qtyContainers: "{n} × 40'HQ",
      qtyKwp: " (oko {kwp} kWp)",
      delivery: "Mjesto isporuke: ",
      term: "Rok: ",
      company: "Tvrtka / OIB: ",
      phone: "Telefon: ",
      bye: "Lijep pozdrav",
    },
  },
  catalogLib: {
    group: { glass: "Stakleni TOPCon moduli", flexible: "Fleksibilna linija" },
    kind: {
      flexTopcon: "fleksibilni TOPCon modul",
      flexPerc: "fleksibilni PERC modul",
      doubleGlass: "bifacijalni TOPCon modul, dvostruko staklo",
      bifacial: "bifacijalni TOPCon modul",
      topcon: "TOPCon modul N-tipa",
    },
    shortKind: {
      flex: "fleksibilni modul",
      doubleGlass: "TOPCon dvostruko staklo",
      bifacial: "bifacijalni TOPCon",
      topcon: "TOPCon modul",
    },
    tech: {
      flexTopcon: "TOPCon, fleksibilni",
      flexPerc: "PERC, fleksibilni",
      doubleGlass: "TOPCon, dvostruko staklo",
      topcon: "TOPCon N-tip",
    },
    segment: {
      roof: "Krovovi kuća i tvrtki, nadstrešnice",
      large: "Industrijski krovovi i sunčane elektrane",
      flex: "Fleksibilna linija — posebni krovovi",
    },
    cert: {
      number: "{body}, br. {number}",
      validUntil: "vrijedi do {date}",
      onDatasheet: "{name} (prema tehničkom listu)",
      fullRange: "cijeli raspon u ponudi {range}",
      partial: "klase {covered} (u ponudi {offer})",
    },
  },
  productCopy: {
    junctionBox: "IP68, 3 diode",
    connector: { "MC4 lub kompatybilne": "MC4 ili kompatibilni", "MC4 kompatybilne": "kompatibilni s MC4" },
    opTemp: "od {min} do {max}",
    bySlug: {
      "as-7m108n-bhc": {
        segments: ["krovovi kuća", "mala poduzeća", "instalateri"],
        glass: "3,2 mm kaljeno s antirefleksnim slojem (list: 'Front/Back Glass')",
      },
      "as-7m120n-hc": {
        segments: ["krovovi kuća", "krovovi tvrtki", "instalateri"],
        glass: "3,2 mm kaljeno s antirefleksnim slojem",
      },
      "as-7m120n-bhc": {
        segments: ["nadstrešnice", "ravni krovovi", "male sunčane elektrane", "instalateri"],
        glass: "3,2 mm kaljeno s antirefleksnim slojem; stražnja strana: prozirna folija",
      },
      "as-7m144n-hc": {
        segments: ["industrijski krovovi", "sunčane elektrane", "EPC"],
        glass: "3,2 mm kaljeno s antirefleksnim slojem",
      },
      "as-8m132n-bhc": {
        segments: ["sunčane elektrane", "EPC", "investitori u OIE", "agrosolarni sustavi"],
        glass: "2 mm + 2 mm kaljeno (prednja strana s AR slojem)",
      },
      "as-7m144nfl-hc-black": {
        segments: [
          "krovovi male nosivosti (hale, skladišta, poljoprivredni objekti)",
          "objekti s vibracijama i dinamičkim opterećenjem (stadioni, sportske dvorane, arene, industrija) — nakon procjene statičara",
          "lučni i zakrivljeni krovovi",
          "krovovi s membranom — nakon potvrde kompatibilnosti ljepila",
        ],
        frontCover: "lagani, visoko prozirni polimer",
        mounting: "lijepljenje, bez bušenja i bez konstrukcije",
      },
      "as-7m132fl-hc": {
        segments: [
          "krovovi male nosivosti (hale, skladišta, poljoprivredni objekti)",
          "objekti s vibracijama i dinamičkim opterećenjem (stadioni, sportske dvorane, arene, industrija) — nakon procjene statičara",
          "lučni i zakrivljeni krovovi",
          "krovovi s membranom — nakon potvrde kompatibilnosti ljepila",
        ],
      },
    },
  },
  docTitles: {
    datasheet: "Tehnički list {model}",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0021.pdf": "Certifikat TÜV SÜD Z2 093522 0021",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0023.pdf": "Certifikat TÜV SÜD Z2 093522 0023",
    "/dokumenty/amerisolar-tuv-rheinland-pv-50674535-0001.pdf": "Certifikat TÜV Rheinland PV 50674535 0001",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0025.pdf": "Certifikat TÜV SÜD Z2 093522 0025",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0030.pdf": "Certifikat TÜV SÜD Z2 093522 0030",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0022-ce.pdf":
      "Potvrda o sukladnosti CE TÜV SÜD N8A 093522 0022",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0024-ce.pdf":
      "Potvrda o sukladnosti CE TÜV SÜD N8A 093522 0024",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0027-ce.pdf":
      "Potvrda o sukladnosti CE TÜV SÜD N8A 093522 0027",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0031-ce.pdf":
      "Potvrda o sukladnosti CE TÜV SÜD N8A 093522 0031",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0018-anti-pid.pdf": "Otpornost na PID — TÜV SÜD Z2 093522 0018",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0019-mgla-solna.pdf":
      "Otpornost na slanu maglu — TÜV SÜD Z2 093522 0019",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0020-amoniak.pdf":
      "Otpornost na amonijak — TÜV SÜD Z2 093522 0020",
    "/dokumenty/amerisolar-iso-9001.pdf": "ISO 9001:2015 — upravljanje kvalitetom",
    "/dokumenty/amerisolar-iso-14001.pdf": "ISO 14001:2015 — upravljanje okolišem",
    "/dokumenty/amerisolar-iso-45001.pdf": "ISO 45001:2018 — zaštita zdravlja i sigurnost na radu",
    "/dokumenty/amerisolar-pv-cycle-wlochy-2026.pdf": "PV CYCLE Italija — usklađenost s WEEE",
    "/dokumenty/amerisolar-pv-cycle-niemcy-weee-2026.pdf": "PV CYCLE Njemačka — usklađenost s WEEE",
  },
  drawing: {
    lineupTitle: "Amerisolar moduli u istom mjerilu",
    flexSuffix: " (fleksibilni modul)",
    flexHeading: "Fleksibilni moduli",
    thickness: "debljina {t} mm",
    dimTitle: "Kotirani crtež {model}: {l} × {w} × {t} mm",
    profile: "profil",
  },
  certBadges: {
    title: "Certifikati i potvrde",
    intro: "Ispitivanja neovisnih tijela",
    introValid: ", certifikati vrijede do {date}",
    introTail: ". Sve dokumente preuzimate bez registracije.",
    more: "Pogledajte tehničke listove i certifikate",
    ce: "CE potvrde",
    salt: "Slana magla",
    ammonia: "Amonijak",
    factory: "tvornica u Nantongu",
    weee: "recikliranje, direktiva WEEE",
  },
  media: {
    farm: "Sunčana elektrana na ravnom poljoprivrednom zemljištu, redovi modula na fiksnim konstrukcijama na poslijepodnevnom suncu",
    warehouseWinter: "Ravni krov skladišne hale zimi, malo snijega i redovi fotonaponskih modula",
    archedHall: "Lučna hala s tankim fleksibilnim modulima zalijepljenima na zakrivljeni krov",
    lightRoof:
      "Laki krov logističke hale od trapeznog lima s fleksibilnim modulima zalijepljenima bez konstrukcije",
  },
  home: {
    metaTitle: "Solarni paneli na veliko od proizvođača — Amerisolar",
    metaDescription:
      "Amerisolar fotonaponski moduli u kontejnerskim količinama izravno od proizvođača: TOPCon 430–720 W, bifacijalni, dvostruko staklo, fleksibilni.",
    eyebrow: "Kontejnerske količine, izravno od proizvođača",
    h1: "Amerisolar solarni paneli na veliko — kontejneri izravno od proizvođača",
    lead: (v) =>
      `TOPCon moduli N-tipa od ${v.pMin} do ${v.pMax} W, bifacijalni, s dvostrukim staklom i fleksibilna linija od ${v.flexMm} mm. Za veletrgovce, trgovce i instalaterske tvrtke koje kupuju u kontejnerskim količinama.`,
    bullets: (v) => [
      "Isporuke izravno od proizvođača",
      `Kontejner 40'HQ: ${v.hqPcsMin}–${v.hqPcsMax} modula`,
      "Tehnički list i certifikati za svaki model",
      `Do ${v.glassWL} godina jamstva na snagu`,
    ],
    facts: (v) => [
      { value: "od 1993.", label: "na tržištu — prema katalogu proizvođača, Kalifornija" },
      { value: "oko 11 GW", label: "proizvodnog kapaciteta prema proizvođaču (2025.)" },
      {
        value: `${v.marketMw} MW`,
        label: "modula isporučenih na deset europskih tržišta 2025. (prema katalogu)",
      },
      { value: v.effMax, label: "najveća učinkovitost modula u ponudi" },
    ],
    lineupTitle: "Sedam modula, jedno mjerilo",
    lineupText: (v) =>
      `Nacrtani prema dimenzijama i broju ćelija iz tehničkih listova — od kompaktnog ${v.smallModel} za kuće do ${v.farmModel} za sunčane elektrane.`,
    lineupCta: "Usporedite sve modele",
    directTitle: "Paneli na veliko izravno od proizvođača",
    directText:
      "Narudžba kontejnera ide izravno proizvođaču Amerisolar modula. Kraći opskrbni lanac znači cijenu izračunatu za cijelu seriju i dokumentaciju izravno od proizvođača.",
    directCta: "Imate projekt od nekoliko stotina kWp ili više?",
    points: (v) => [
      {
        title: "Cijena po kontejneru",
        text: "Nudimo cijenu za cijelu seriju — kontejner od 20' ili 40'HQ — za odabranu klasu snage, umjesto cijene po paleti.",
      },
      {
        title: "Potpuna dokumentacija",
        text: "Tehnički listovi s tablicama STC i NOCT, temperaturnim koeficijentima i mehaničkim opterećenjima te certifikati za svaki model.",
      },
      {
        title: "Jedna linija za sve segmente",
        text: `Moduli od ${v.roofRange} za krovove, od ${v.largeRange} za industrijske krovove i sunčane elektrane te fleksibilna linija za posebne krovove.`,
      },
      {
        title: "Jamstvo proizvođača",
        text: `${v.glassWP} godina jamstva na proizvod i ${v.glassWL} godina linearnog jamstva na snagu za staklene module.`,
      },
    ],
    segmentsTitle: "Za veletrgovce, trgovce i instalatere koji kupuju velike količine",
    segments: (v) => [
      {
        title: "Veletrgovci i distributeri OIE",
        value: `${v.hqPcsMin}–${v.hqPcsMax}`,
        valueLabel: "modula u kontejneru 40'HQ, ovisno o modelu",
        cta: "Zatražite veleprodajne uvjete",
        text: `Cijela linija iz jednog izvora — od krovnih modula do modula za elektrane i fleksibilnih. Tehnički listovi i certifikati za daljnju prodaju, moduli na paletama po ${v.palletMin}–${v.palletMax} komada.`,
      },
      {
        title: "Trgovci i uvoznici",
        value: `${v.kwpMin}–${v.kwpMax} kWp`,
        valueLabel: "u jednom kontejneru 40'HQ, ovisno o modelu (izračun)",
        cta: "Zatražite isporuke više kontejnera",
        text: "Kupnja kontejnera izravno od proizvođača, bez posredničkog veletrgovca. Specifikacija, klase snage i uvjeti isporuke dogovaraju se za cijelu seriju.",
      },
      {
        title: "Instalaterske tvrtke i EPC",
        value: `${v.farmKwp} kWp`,
        valueLabel: `u kontejneru modula ${v.farmModel} ${v.farmMaxW} W (izračun)`,
        cta: "Zatražite isporuku za projekt",
        text: `Moduli od ${v.roofRange} za krovove tvrtki i nadstrešnice te od ${v.largeRange} za industrijske krovove i sunčane elektrane. Kontejner je zaliha jednog tipa modula za mnogo projekata.`,
      },
    ],
    modelsTitle: "Fotonaponski moduli u ponudi",
    modelsText: (v) => `Učinkovitost do ${v.effMax}. STC podaci iz tehničkih listova.`,
    table: {
      model: "Model",
      technology: "Tehnologija",
      power: "Snaga",
      effMax: "Najveća učinkovitost",
      mass: "Masa",
      warranty: "Jamstvo",
      actions: "Tehnički list i upit",
    },
    techTitle: "TOPCon N-tipa, bifacijalnost, dvostruko staklo — što to znači u praksi",
    tech: (v) => [
      {
        title: "Manji gubici na vrućini",
        text: `TOPCon moduli u ponudi imaju temperaturni koeficijent snage ${v.topconCoeff} %/°C. Za usporedbu, PERC modul ${v.percModel}: ${v.percCoeff} %/°C. Pri ćeliji zagrijanoj na 65 °C (40 °C iznad STC) razlika iznosi oko ${v.heatDiff} postotnih bodova snage (izračun).`,
      },
      {
        title: "Polućelije",
        text: "Svi stakleni moduli u ponudi imaju ćelije prerezane na pola (half-cell). Manja struja u svakoj polovici znači manje otporske gubitke i manji utjecaj djelomičnog zasjenjenja na cijeli modul.",
      },
      {
        title: "Snaga s obje strane",
        text: `Bifacijalni moduli prikupljaju i svjetlost odbijenu od tla. ${v.farmModel} ima i konstrukciju s dvostrukim staklom — staklo s obje strane umjesto folije: ${v.farmGlass}.`,
      },
    ],
    bifCaption: (v) =>
      `Dobitak sa stražnje strane bifacijalnog modula — primjer iz lista ${v.farmModel} (${v.bifBase} W)`,
    bifRowHeader: "Dobitak sa stražnje strane",
    bifRow: "Ukupna snaga",
    bifNote:
      "Stvarni dobitak ovisi o albedu podloge (trava, šljunak, krovna membrana), visini montaže i razmaku redova.",
    logisticsTitle: "Koliko modula i kWp stane u kontejner",
    logisticsText:
      "Komadi prema tehničkim listovima. kWp je izračunat za najvišu klasu snage — u ponudi računamo s klasom koju odaberete.",
    logisticsTable: { pallet: "Paleta", c20: "Kontejner 20'", c40: "Kontejner 40'HQ", kwp40: "kWp u 40'HQ" },
    farmBoxTitle: "Elektrana od 1 MWp — koliko kontejnera?",
    farmBoxText: (v) =>
      `S modulima ${v.farmModel} ${v.farmMaxW} W: ${v.farm1MwContainers} kontejnera 40'HQ (${v.farm1MwModules} modula, izračun).`,
    farmBoxStrong: (v) => `${v.farm1MwContainers} kontejnera 40'HQ`,
    farmBoxCta: "Zatražite isporuku za elektranu",
    calcTitle: "Koliko vam kontejnera treba?",
    calcText:
      "Odaberite modul i klasu snage, a zatim unesite snagu elektrane ili broj kontejnera. Rezultat jednim klikom prenosite u zahtjev za ponudu.",
    stringTitle: "Napon Voc zimi i duljina stringa",
    stringText1:
      "Za hladnog, sunčanog dana napon modula raste iznad vrijednosti iz lista. Zato se broj modula u stringu računa za najnižu temperaturu ćelije — ovdje −25 °C, uobičajena projektna vrijednost u srednjoj Europi; projektant koristi minimum lokacije.",
    stringFormula: "Formula: Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).",
    stringExample: (v) => `Primjer: ${v.industrialModel} ${v.industrialMaxW} W`,
    stringRows: (v) => [
      { k: "Voc pri STC", v: `${v.vocStc} V` },
      { k: "βVoc", v: `${v.betaVoc} %/°C` },
      { k: "Voc pri −25 °C", v: `${v.vocCold} V`, strong: true },
      { k: "Najviše modula u stringu, sustav 1500 V", v: v.str1500, strong: true },
      { k: "Najviše modula u stringu, sustav 1000 V", v: v.str1000 },
    ],
    stringNote:
      "Okvirni izračun. Konačna duljina stringa ovisi i o MPPT rasponu i najvećem ulaznom naponu izmjenjivača — to provjerava projektant.",
    flexTitle: "Krov ne može nositi panele? Konstrukcija vibrira? Postoji rješenje",
    flexText:
      "Fleksibilni Amerisolar moduli lijepe se izravno na pokrov — bez nosive konstrukcije i bez bušenja.",
    flexStats: (v) => [
      { k: "masa po m²", v: "oko 3 kg" },
      { k: "debljina", v: `${v.flexMm} mm` },
      { k: "rupa u krovu", v: "0" },
    ],
    flexUses: (v) => [
      {
        title: "Krovovi male nosivosti",
        text: "Hale od trapeznog lima i sendvič panela, poljoprivredni objekti, stariji krovovi bez rezerve nosivosti.",
      },
      {
        title: "Objekti s vibracijama",
        text: "Stadioni, sportske dvorane, arene, pogoni sa strojevima i kranovima — mala masa, bez stakla i vijaka. Odabir nakon procjene statičara objekta.",
      },
      {
        title: "Lučni krovovi",
        text: `Polumjer savijanja ${v.bendRadius} m — modul prati luk bez složene konstrukcije.`,
      },
    ],
    flexHonest: (v) =>
      `Iskreno: učinkovitost do ${v.flexEff} i jamstvo ${v.flexWP}/${v.flexWL} godina — manje nego kod staklenih modula. Ovaj modul ima smisla tamo gdje je alternativa bez elektrane ili ojačanje konstrukcije.`,
    flexCta: "Zatražite preliminarnu procjenu objekta",
    massCaption: "Masa samog modula po m² površine",
    massNote:
      "Podaci iz tehničkih listova. Kod staklenih sustava dodaje se masa nosive konstrukcije ili balasta — ovisi o projektu, pa je ovdje ne uračunavamo.",
    winterTitle: "Opterećenje snijegom i vjetrom u tehničkom listu",
    winterText: (v) =>
      `Prema tehničkim listovima stakleni Amerisolar moduli izdržavaju opterećenje snijegom od ${v.snowPa} Pa i vjetrom od ${v.windPa} Pa, uz raspon radne temperature ${v.opTemp} °C. Prikladnost za snježnu i vjetrovnu zonu lokacije potvrđuje projektant.`,
    europeTitle: "Amerisolar u Europi",
    europeText: (v) =>
      `Isporuke modula 2025. prema katalogu proizvođača — ${v.marketMw} MW na deset europskih tržišta.`,
    orderTitle: "Kako naručiti kontejner modula",
    orderSteps: [
      {
        t: "Upit",
        d: "Model, količina u kWp ili kontejnerima, mjesto i rok isporuke — putem obrasca ili e-maila.",
      },
      { t: "Ponuda", d: "Cijena za odabranu klasu snage, uvjeti isporuke, tehnički listovi i certifikati." },
      { t: "Narudžba", d: "Potvrda specifikacije, roka i uvjeta plaćanja." },
      { t: "Isporuka", d: "Kontejner modula na dogovorenom mjestu i u dogovoreno vrijeme." },
    ],
    orderCta: "Počnite upitom — to traje samo nekoliko minuta.",
    trustTitle: "Jamstva, norme i proizvođač",
    trustCta: "Preuzmite tehničke listove i certifikate",
    trust: (v) => [
      {
        title: "Jamstva",
        text: `Stakleni moduli: ${v.glassWP} godina jamstva na proizvod i ${v.glassWL} godina linearnog jamstva na snagu. Fleksibilna linija: ${v.flexWP} i ${v.flexWL} godina.`,
      },
      {
        title: "Norme i certifikati",
        text: "Certifikati TÜV SÜD i TÜV Rheinland (IEC 61215, IEC 61730), CE potvrde, ispitivanja otpornosti na PID, slanu maglu i amonijak te ISO 9001, 14001 i 45001 tvornice. Uz svaki certifikat navodimo točan raspon snage koji obuhvaća.",
      },
      {
        title: "Proizvođač",
        text: "Worldwide Energy and Manufacturing USA Co., Ltd. — prema katalogu posluje od 1993. (Kalifornija), a marku Amerisolar ima od 2007.",
      },
    ],
    faqTitle: "Pitanja o solarnim panelima na veliko",
    faqCta: "Postavite pitanje u upitu",
    faq: (v) => [
      {
        question: "Mogu li Amerisolar module kupiti izravno od proizvođača?",
        answer:
          "Da. Isporučujemo kontejnerske količine izravno od proizvođača — Worldwide Energy and Manufacturing USA Co., Ltd., vlasnika marke Amerisolar. Cijenu i uvjete isporuke navodimo u ponudi.",
      },
      {
        question: "Koliko kWp stane u kontejner 40'HQ?",
        answer: `Ovisno o modelu od ${v.kwpMin} do ${v.kwpMax} kWp (izračun: broj modula u kontejneru prema listu × najviša klasa snage). Na primjer ${v.farmModel}: ${v.farmPieces} komada, ${v.farmKwp} kWp.`,
      },
      {
        question: "Po čemu se TOPCon razlikuje od PERC-a?",
        answer: `TOPCon je ćelija N-tipa s pasiviranim stražnjim kontaktom. U našoj ponudi to znači, među ostalim, niži temperaturni koeficijent snage: ${v.topconCoeff} %/°C kod TOPCon modula naspram ${v.percCoeff} %/°C kod PERC modula ${v.percModel} — na vrućini TOPCon modul gubi manje snage.`,
      },
      {
        question: "Isplate li se bifacijalni moduli?",
        answer: `Na sunčanim elektranama, nadstrešnicama i ravnim krovovima sa svijetlom podlogom — obično da. List ${v.farmModel} daje primjer: modul od ${v.bifBase} W uz 20 % dobitka sa stražnje strane daje ${v.bifGain20} W. Stvarni dobitak ovisi o albedu i visini montaže.`,
      },
      {
        question: "Kakva jamstva imaju moduli?",
        answer: `Stakleni moduli: ${v.glassWP} godina jamstva na proizvod i ${v.glassWL} godina linearnog jamstva na snagu. Fleksibilna linija: ${v.flexWP} i ${v.flexWL} godina.`,
      },
      {
        question: "Koje certifikate imaju moduli?",
        answer:
          "Moduli u ponudi imaju certifikate TÜV SÜD ili TÜV Rheinland prema IEC 61215 i IEC 61730 te CE potvrde — svaki za određeni raspon snage, koji navodimo na stranici s tehničkim listovima. Tvornica ima certifikate ISO 9001, ISO 14001 i ISO 45001. Sve dokumente preuzimate bez registracije.",
      },
      {
        question: "Što ako krov ne može nositi klasične panele?",
        answer: `Razmotrite fleksibilnu liniju: oko 3 kg/m², debljina ${v.flexMm} mm, montaža lijepljenjem bez bušenja. Odabir za konkretan objekt zahtijeva procjenu statičara — pošaljite nam opis krova u upitu.`,
      },
      {
        question: "Imate li skladište u Hrvatskoj?",
        answer:
          "Ne. Kontejnerske količine naručujete izravno od proizvođača — zato se cijena odnosi na cijelu seriju, bez troškova posredničkog skladišta. Uvjete i mjesto isporuke dogovaramo u ponudi.",
      },
      {
        question: "Kolika je minimalna narudžba?",
        answer:
          "Prodajemo u kontejnerskim količinama. Koliko modula i kWp stane u kontejner od 20' i 40'HQ za svaki model, pokazuje tablica iznad; točan minimum za odabrani model navodimo u ponudi.",
      },
      {
        question: "Kome prodajete module?",
        answer:
          "Tvrtkama koje kupuju u kontejnerskim količinama: veletrgovcima i distributerima OIE, trgovcima i uvoznicima te instalaterskim i EPC tvrtkama s velikim volumenima.",
      },
      {
        question: "Kolika je cijena panela?",
        answer:
          "Cijena na upit. Ovisi o modelu i klasi snage, broju kontejnera, mjestu i roku isporuke. Pošaljite upit — odgovorit ćemo konkretnom ponudom.",
      },
    ],
  },
  catalog: {
    metaTitle: "Amerisolar solarni paneli 430–720 W — katalog",
    metaDescription:
      "Katalog Amerisolar modula: TOPCon N-tipa, bifacijalni, dvostruko staklo i fleksibilni. Potpuni podaci iz listova, pakiranje i kWp po kontejneru.",
    breadcrumb: "Naši moduli",
    h1: "Naši moduli — Amerisolar solarni paneli",
    lead: "{count} modela od {min} do {max} W. Za svaki modul preuzmite tehnički list PDF — odmah, bez registracije i bez pisanja e-maila.",
    intro: {
      glass:
        "Moduli s kaljenim staklom i okvirom: za krovove kuća i tvrtki, nadstrešnice, industrijske krovove i sunčane elektrane.",
      flexible:
        "Moduli debljine 2 mm koji se lijepe, bez konstrukcije i bez bušenja — za krovove ograničene nosivosti i lučne krovove.",
    },
    stat: { power: "snaga", eff: "najveća učinkovitost", dims: "dimenzije", hq: "40'HQ" },
    hqValue: "{pcs} kom, {kwp} kWp",
    note: "kWp po kontejneru: izračun iz broja komada prema tehničkom listu i najviše klase snage.",
  },
  product: {
    meta: (v) => `${v.model} ${v.minW}–${v.maxW} W — ${v.shortKind}`,
    description: (v) =>
      `${v.model}: ${v.kind} ${v.minW}–${v.maxW} W, učinkovitost do ${v.eff}, ${v.weight} kg.`,
    descriptionTail: (v) =>
      ` Tablice STC/NOCT, ${v.pcsHq} kom u 40'HQ, jamstvo ${v.warrantyP}/${v.warrantyL} god.`,
    benefit: {
      eff: (v) => `najveća učinkovitost, ${v.cells} ćelija, ${v.powerRange}`,
      flexMass: (v) => `${v.weight} kg, debljina ${v.thickness} mm`,
      bending: "najmanji polumjer savijanja — lučni krovovi",
      snow: (v) => `opterećenje snijegom, vjetar ${v.windPa} Pa`,
      bif: (v) => `iz modula od ${v.bifBase} W uz 20 % dobitka sa stražnje strane (primjer iz lista)`,
      warranty: "jamstvo na proizvod / linearno na snagu",
    },
    faq: {
      hq: (v) => ({
        question: `Koliko modula ${v.model} stane u kontejner 40'HQ?`,
        answer: `Prema tehničkom listu ${v.pcsHq} komada. Pri klasi ${v.maxW} W to je ${v.kwpHq} kWp (izračun: broj komada × snaga modula). Kontejner od 20' prima ${v.pcs20} komada.`,
      }),
      pallet: (v) => ({
        question: "Koliko je modula na paleti?",
        answer: `${v.pcsPallet} komada, odnosno ${v.kwpPallet} kWp pri klasi ${v.maxW} W.`,
      }),
      voc: (v) => ({
        question: "Koliki je napon Voc modula zimi?",
        answer: `Voc pri STC za klasu ${v.maxW} W iznosi ${v.vocStc} V, a temperaturni koeficijent Voc ${v.betaVoc} %/°C. Pri temperaturi ćelije od −25 °C napon raste na oko ${v.vocCold} V (okvirni izračun). Broj modula u stringu bira se tako da zbroj ne prijeđe najveći napon izmjenjivača i sustava (${v.maxSys} V DC).`,
      }),
      warranty: (v) => ({
        question: "Koje je jamstvo?",
        answer: `${v.warrantyP} godina jamstva na proizvod i ${v.warrantyL} godina linearnog jamstva na snagu.`,
      }),
      certs: (v) => ({ question: "Koje certifikate ima modul?", answer: v.certs }),
      dims: (v) => ({
        question: "Koliko modul teži i koje su mu dimenzije?",
        answer: `${v.dims} mm, ${v.weight} kg, odnosno ${v.arealMass} kg/m² (samo modul${v.glassSuffix}).`,
      }),
      glassSuffix: ", bez nosive konstrukcije",
      bif: (v) => ({
        question: "Koliko donosi stražnja strana bifacijalnog modula?",
        answer: `List daje primjer za modul od ${v.bifBase} W: uz dobitak od 10 % snaga raste na ${v.bif10} W, uz 20 % na ${v.bif20} W, uz 30 % na ${v.bif30} W. Stvarni dobitak ovisi o albedu, visini i razmaku redova.`,
      }),
      flex: {
        question: "Je li modul prikladan za objekt s vibracijama, npr. stadion ili halu s kranom?",
        answer:
          "Mala masa, bez stakla i montaža bez bušenja stvarne su prednosti kod konstrukcija koje rade. Proizvođač međutim još nije dostavio rezultate ispitivanja dinamičkog opterećenja, pa odabir za konkretan objekt zahtijeva procjenu njegova statičara.",
      },
      price: {
        question: "Kolika je cijena?",
        answer: "Cijena na upit. Ovisi o klasi snage, broju kontejnera, mjestu i roku isporuke.",
      },
    },
    heroNote: (v) => `Kontejnerske količine izravno od proizvođača: ${v.pcsHq} kom u kontejneru 40'HQ.`,
    usesTitle: "Primjena",
    flexNote: (v) =>
      `Montaža lijepljenjem, bez bušenja i bez konstrukcije. Niža učinkovitost i kraće jamstvo (${v.warrantyP}/${v.warrantyL} god.) nego kod staklenih modula — ovaj modul ima smisla tamo gdje je alternativa bez elektrane ili ojačanje krovne konstrukcije. Moduli leže ravno ili prate luk, pa prinos ovisi o orijentaciji krova. Dopuštene podloge i ljepilo potvrđujemo prije ponude.`,
    electricalTitle: "Električni podaci",
    stcCaption: "Uvjeti STC (1000 W/m², 25 °C, AM1,5)",
    rows: {
      pmax: "Najveća snaga Pmax",
      eff: "Učinkovitost modula",
      voc: "Napon otvorenog kruga Voc",
      isc: "Struja kratkog spoja Isc",
      vmp: "Napon u točki najveće snage Vmp",
      imp: "Struja u točki najveće snage Imp",
    },
    tolerance: "Tolerancija Pmax prema tehničkom listu proizvođača.",
    noctCaption: "Uvjeti NOCT (800 W/m², okolina 20 °C, vjetar 1 m/s)",
    noctMissing:
      "NOCT podatke za ovaj model objavit ćemo nakon što proizvođač potvrdi aktualni tehnički list.",
    tempCaption: "Temperaturni koeficijenti",
    value: "Vrijednost",
    bifCaption: "Dobitak sa stražnje strane — primjer iz lista za {w} W",
    bifRow: "Ukupna snaga",
    bifNote: "Stvarni dobitak ovisi o albedu, visini montaže i razmaku redova.",
    mechCaption: "Mehanički podaci i radni uvjeti",
    param: "Parametar",
    mech: {
      dims: "Dimenzije",
      mass: "Masa",
      arealMass: "Masa po m² (samo modul)",
      cells: "Ćelije",
      glass: "Staklo",
      frontCover: "Prednji pokrov",
      bending: "Polumjer savijanja",
      mounting: "Montaža",
      snow: "Opterećenje — snijeg",
      wind: "Opterećenje — vjetar",
      junctionBox: "Priključna kutija",
      connector: "Konektori",
      maxSys: "Najveći napon sustava",
      fuse: "Najveći serijski osigurač",
      fire: "Razred požarne otpornosti",
      safety: "Razred zaštite",
      opTemp: "Radna temperatura",
    },
    packCaption: "Pakiranje i snaga po transportnoj jedinici",
    unit: "Jedinica",
    pcsCol: "Komada",
    pack: { pallet: "Paleta", c20: "Kontejner 20'", c40: "Kontejner 40'HQ" },
    packNote: "Komadi prema tehničkom listu; kWp je izračunat za najvišu klasu snage.",
    warrantyTitle: "Jamstva i certifikati",
    warrantyText: (v) =>
      `${v.warrantyP} godina jamstva na proizvod, ${v.warrantyL} godina linearnog jamstva na snagu.`,
    allDocs: "Svi tehnički listovi i certifikati",
    compareTitle: "Usporedba sa susjednim modelima",
    compareCta: "Trebate {model} u kontejnerskoj količini?",
    compare: {
      technology: "Tehnologija",
      power: "Snaga",
      eff: "Najveća učinkovitost",
      dims: "Dimenzije",
      mass: "Masa",
      bifacial: "Bifacijalni",
      warranty: "Jamstvo",
      pcsHq: "Komada u 40'HQ",
    },
    faqTitle: "Pitanja o modelu {model}",
    ld: {
      technology: "Tehnologija",
      power: "Najveća snaga (STC)",
      eff: "Najveća učinkovitost",
      cells: "Broj ćelija",
      bifacial: "Bifacijalni",
      coeff: "Temperaturni koeficijent Pmax",
      warrantyP: "Jamstvo na proizvod",
      warrantyL: "Linearno jamstvo na snagu",
      years: "godina",
    },
  },
  docs: {
    metaTitle: "Tehnički listovi i certifikati Amerisolar modula",
    metaDescription:
      "Tehnički listovi PDF i certifikati Amerisolar modula: TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, slana magla, amonijak, ISO, WEEE.",
    h1: "Tehnički listovi i certifikati",
    lead: "Dokumentacija proizvođača za preuzimanje bez registracije. Uz svaki modul vidite njegov tehnički list i certifikate koji ga obuhvaćaju — s točnim rasponom snage.",
    toc: "Sadržaj",
    datasheetsAnchor: "Tehnički listovi",
    byModuleTitle: "Tehnički listovi i certifikati po modulu",
    requestDatasheet: "Zatražite tehnički list",
    certsOnRequest: "Certifikate za ovaj model dostavljamo uz ponudu.",
    sections: {
      product: {
        title: "Certifikati modula IEC 61215 i IEC 61730",
        intro:
          "Tipska certifikacija modula od neovisnog tijela: trajnost i pouzdanost (IEC 61215) te električna sigurnost (IEC 61730). Uz svaki certifikat navodimo koje klase snage iz naše ponude obuhvaća.",
      },
      ce: {
        title: "Potvrde o sukladnosti CE",
        intro: "Potvrde TÜV SÜD o sukladnosti s EN IEC 61730 — osnova CE oznake modula na tržištu EU.",
      },
      tests: {
        title: "Ispitivanja otpornosti",
        intro:
          "Dodatna ispitivanja TÜV SÜD: otpornost na PID degradaciju, slanu maglu (obalne instalacije) i amonijak (poljoprivredni objekti).",
      },
      iso: {
        title: "Sustavi upravljanja u tvornici",
        intro: "ISO certifikati tvornice modula u Nantongu (Kina).",
      },
      weee: {
        title: "Recikliranje i usklađenost s WEEE",
        intro:
          "Registracija proizvođača u sustavu PV CYCLE — prikupljanje i recikliranje istrošenih modula prema direktivi WEEE.",
      },
    },
    card: {
      body: "Tijelo",
      number: "Broj",
      holder: "Nositelj",
      standards: "Norme",
      issued: "Izdan",
      validUntil: "Vrijedi do",
      modules: "Moduli iz naše ponude",
      download: "Preuzmi PDF",
    },
  },
  rfqPage: {
    metaTitle: "Zahtjev za ponudu — FN moduli u kontejnerima | Amerisolar",
    metaDescription:
      "Zatražite cijenu po kontejneru za Amerisolar module izravno od proizvođača. Navedite model, količinu u kWp ili kontejnerima, mjesto i rok.",
    h1: "Zatražite cijenu po kontejneru",
    lead: "Amerisolar module isporučujemo u kontejnerskim količinama, izravno od proizvođača. Što preciznije opišete potrebu — model, količinu, mjesto i rok isporuke — to brže pripremamo konkretnu ponudu.",
    emailBoxStrong: "Više volite e-mail?",
    emailBoxText: "Pišite nam odmah, bez obrasca.",
    asideOfferTitle: "Što sadrži ponuda",
    asideOffer: [
      "Cijenu za odabranu klasu snage i količinu",
      "Uvjete i rok isporuke",
      "Tehničke listove i certifikate odabranih modela",
    ],
    asideContainerTitle: "Koliko je jedan kontejner?",
    asideContainer:
      "Kontejner 40'HQ prima od 558 do 1260 modula, ovisno o modelu — od oko 400 do više od 720 kWp. Ne znate točnu količinu? Unesite približnu snagu elektrane.",
  },
  form: {
    honeypot: "Web stranica",
    s1: "1. Tko ste",
    s2: "2. Moduli i količina",
    s3: "3. Isporuka i rok",
    s4: "4. Kontakt",
    types: {
      distributor: "Veletrgovac / distributer OIE",
      trader: "Trgovac / uvoznik",
      installer: "Instalaterska tvrtka",
      epc: "EPC / investitor u sunčane elektrane",
      business: "Tvrtka — vlastiti objekt",
    },
    timelines: {
      asap: "Što prije",
      "1-3m": "1–3 mjeseca",
      "3-6m": "3–6 mjeseci",
      "6m+": "Više od 6 mjeseci",
      tender: "Natječaj / projekt u pripremi",
    },
    qtyKwp: "Količina u kWp",
    qtyKwpPh: "npr. 400",
    qtyContainers: "ili broj kontejnera",
    qtyContainersPh: "npr. 1",
    delivery: "Mjesto isporuke",
    deliveryPh: "mjesto ili poštanski broj",
    timeline: "Rok",
    choose: "Odaberite",
    name: "Ime i prezime *",
    email: "E-mail *",
    phone: "Telefon",
    company: "Tvrtka",
    vatId: "OIB",
    message: "Poruka",
    messagePh: "npr. klasa snage, vrsta projekta, potrebni dokumenti",
    consent: "* Slažem se da me se kontaktira u vezi s ovim upitom.",
    consentAdmin: "Voditelj obrade podataka je TODO(klient): naziv tvrtke.",
    marketing: "Želim primati informacije o dostupnosti modula i novim isporukama (neobavezno).",
    submit: "Pošalji upit",
    sending: "Slanje…",
    okTitle: "Upit je poslan",
    okText: "Hvala. Odgovorit ćemo na navedenu e-mail adresu ponudom ili dodatnim pitanjima.",
    okUrgent: "Za hitne slučajeve pišite na",
    errors: {
      type: "Odaberite tko ste.",
      number: "Unesite broj veći od nule.",
      vatId: "Unesite ispravan OIB.",
      name: "Unesite ime i prezime.",
      email: "Unesite ispravnu e-mail adresu.",
      consent: "Suglasnost za kontakt potrebna je da bismo vam mogli odgovoriti.",
      qty: "Unesite količinu u kWp ili broj kontejnera.",
      fix: "Ispravite označena polja.",
      site: "Nepoznata stranica.",
      spam: "Antispam provjera nije uspjela. Osvježite stranicu i pokušajte ponovno.",
      rate: "S ove adrese već je poslano nekoliko upita. Pokušajte ponovno za pola sata.",
      failed: "Upit nije moguće poslati.",
      fallbackEmail: "Pišite nam izravno na {email}.",
      fallback: "Pokušajte ponovno kasnije.",
    },
  },
  calc: {
    s1: "1. Odaberite modul",
    s2: "2. Klasa snage",
    s3: "3. Što znate?",
    minNote: "Prodajemo u kontejnerskim količinama — minimum je jedan kontejner.",
    modePower: "Snagu elektrane",
    modeContainers: "Broj kontejnera",
    power: "Snaga elektrane",
    powerAria: "Snaga elektrane u MWp",
    oneContainer: "{mw} MWp (1 kontejner)",
    containers: "Broj kontejnera 40'HQ",
    containersAria: "Broj kontejnera",
    need: "Trebate",
    chosen: "Odabrano",
    containerForms: { one: "kontejner", few: "kontejnera", other: "kontejnera" } as Plural,
    powerLabel: "Snaga",
    modules: "Modula",
    perModule: "kom po {w} W",
    lastFill:
      "Posljednji kontejner popunjen je {pct} % — prilagodite snagu da iskoristite pune kontejnere ili dodajte module.",
    quote: {
      one: "Zatražite ponudu za {n} kontejner",
      other: "Zatražite ponudu za {n} kontejnera",
    } as Plural,
    datasheet: "Tehnički list PDF",
    note: "Okvirni izračun: {pcs} modula u kontejneru 40'HQ prema tehničkom listu{careful}, odnosno {kwp} kWp po kontejneru pri {w} W. Točnu količinu i uvjete isporuke navodimo u ponudi.",
    careful: " (oprezno računamo s {min})",
    flexible: "fleksibilni modul",
    glass: "stakleni modul",
  },
};

export default hr;
