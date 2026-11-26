// apps/web/messages/hu.ts
// Magyar — amerisolar.hu (piac: Magyarország).
// Gépi segítséggel készült fordítás: élesítés előtt anyanyelvi lektorálás szükséges (CLAUDE.md §5.2).
import type { Plural } from "@/lib/i18n";
import type { Messages } from "./pl";

const hu: Messages = {
  common: {
    home: "Kezdőlap",
    pieces: "db",
    years: "{p}/{l} év",
    yes: "igen",
    no: "nem",
    datasheetPdf: "Adatlap PDF",
    downloadDatasheet: "Adatlap letöltése (PDF)",
    technicalParams: "Műszaki adatok",
    aiCaption: "Illusztratív látványterv",
    askContainerPrice: "Konténerár kérése",
    askPrice: "Árajánlat kérése",
    seeModules: "Modulok megtekintése",
    notFoundTitle: "Az oldal nem található",
    notFoundText: "Lehet, hogy megváltozott a cím, vagy az oldal még nincs közzétéve.",
    notFoundBack: "Ugrás a kezdőlapra",
    pdf: "PDF",
    breadcrumbs: "Morzsamenü",
  },
  routes: {
    home: "Kezdőlap",
    catalog: "Moduljaink",
    installers: "Telepítőknek",
    farms: "Naperőművek",
    special: "Különleges alkalmazások",
    wholesale: "Nagykereskedelem és forgalmazás",
    tools: "Eszközök",
    docs: "Adatlapok és tanúsítványok",
    about: "Az Amerisolarról",
    rfq: "Ajánlatkérés",
    contact: "Kapcsolat",
    privacy: "Adatvédelem",
  },
  header: {
    skip: "Ugrás a tartalomra",
    logoAria: "Amerisolar — kezdőlap",
    mainNav: "Főmenü",
    menu: "Menü",
    switcher: "Ország és nyelv",
  },
  footer: {
    modules: "Modulok",
    service: "Weboldal",
    note: "A moduladatok a gyártó adatlapjaiból származnak. Árak ajánlatkérésre.",
  },
  cta: {
    titleModel: "{model} ára konténeres mennyiségben",
    title: "Egy konténer modul közvetlenül a gyártótól",
    text: "Adja meg a modellt, a mennyiséget kWp-ben vagy konténerben, a szállítási helyet és határidőt. Ajánlatot készítünk a választott teljesítményosztály árával és a szállítási feltételekkel.",
    noForm: "Nem szeretné kitölteni az űrlapot? Írjon nekünk közvetlenül:",
  },
  email: {
    prefix: "vagy írjon közvetlenül:",
    prefixShort: "vagy írjon:",
    prefixOr: "vagy írjon:",
    button: "Írjon: {email}",
    mobile: "E-mail küldése",
    mobileForm: "Ajánlatkérés",
    tableLink: "E-mail",
    tableSr: "a(z) {model} ügyében",
    subjectModel: "Árajánlatkérés: {model}",
    subject: "Konténerár-ajánlatkérés",
    subjectAssessment: "Előzetes épületfelmérés — flexibilis modulok",
    subjectQuestion: "Kérdés az Amerisolar modulokról",
    subjectDatasheet: "Adatlap: {model}",
    body: {
      greeting: "Tisztelt Hölgyem/Uram!",
      request: "Kérek ajánlatot {model} modulokra.",
      qty: "Mennyiség (kWp vagy konténerek száma): {qty}",
      qtyContainers: "{n} × 40'HQ",
      qtyKwp: " (kb. {kwp} kWp)",
      delivery: "Szállítási hely: ",
      term: "Határidő: ",
      company: "Cég / adószám: ",
      phone: "Telefon: ",
      bye: "Üdvözlettel",
    },
  },
  catalogLib: {
    group: { glass: "TOPCon üvegmodulok", flexible: "Flexibilis termékcsalád" },
    kind: {
      flexTopcon: "flexibilis TOPCon modul",
      flexPerc: "flexibilis PERC modul",
      doubleGlass: "kétoldalas TOPCon modul, üveg-üveg",
      bifacial: "kétoldalas TOPCon modul",
      topcon: "N-típusú TOPCon modul",
    },
    shortKind: {
      flex: "flexibilis modul",
      doubleGlass: "TOPCon üveg-üveg",
      bifacial: "kétoldalas TOPCon",
      topcon: "TOPCon modul",
    },
    tech: {
      flexTopcon: "TOPCon, flexibilis",
      flexPerc: "PERC, flexibilis",
      doubleGlass: "TOPCon, üveg-üveg",
      topcon: "N-típusú TOPCon",
    },
    segment: {
      roof: "Lakó- és céges tetők, autóbeállók",
      large: "Ipari tetők és naperőművek",
      flex: "Flexibilis termékcsalád — különleges tetők",
    },
    cert: {
      number: "{body}, szám: {number}",
      validUntil: "érvényes: {date}",
      onDatasheet: "{name} (az adatlap szerint)",
      fullRange: "a teljes kínálat {range}",
      partial: "{covered} osztályok (kínálatban: {offer})",
    },
  },
  productCopy: {
    junctionBox: "IP68, 3 dióda",
    connector: { "MC4 lub kompatybilne": "MC4 vagy kompatibilis", "MC4 kompatybilne": "MC4-kompatibilis" },
    opTemp: "{min} és {max} között",
    bySlug: {
      "as-7m108n-bhc": {
        segments: ["lakóházak teteje", "kisvállalkozások", "telepítők"],
        glass: "3,2 mm edzett, tükröződésmentes bevonattal (adatlap: 'Front/Back Glass')",
      },
      "as-7m120n-hc": {
        segments: ["lakóházak teteje", "céges tetők", "telepítők"],
        glass: "3,2 mm edzett, tükröződésmentes bevonattal",
      },
      "as-7m120n-bhc": {
        segments: ["autóbeállók", "lapostetők", "kis naperőművek", "telepítők"],
        glass: "3,2 mm edzett, tükröződésmentes bevonattal; hátoldal: átlátszó hátlapfólia",
      },
      "as-7m144n-hc": {
        segments: ["ipari tetők", "naperőművek", "EPC"],
        glass: "3,2 mm edzett, tükröződésmentes bevonattal",
      },
      "as-8m132n-bhc": {
        segments: ["naperőművek", "EPC", "megújulóenergia-fejlesztők", "agrovoltaikus rendszerek"],
        glass: "2 mm + 2 mm edzett (előlap tükröződésmentes bevonattal)",
      },
      "as-7m144nfl-hc-black": {
        segments: [
          "alacsony teherbírású tetők (csarnokok, raktárak, mezőgazdasági épületek)",
          "rezgésnek és dinamikus terhelésnek kitett szerkezetek (stadionok, sportcsarnokok, arénák, ipar) — statikus értékelése után",
          "íves és görbült tetők",
          "membrántetők — a ragasztó kompatibilitásának igazolása után",
        ],
        frontCover: "könnyű, nagy átlátszóságú polimer",
        mounting: "ragasztás, fúrás és tartószerkezet nélkül",
      },
      "as-7m132fl-hc": {
        segments: [
          "alacsony teherbírású tetők (csarnokok, raktárak, mezőgazdasági épületek)",
          "rezgésnek és dinamikus terhelésnek kitett szerkezetek (stadionok, sportcsarnokok, arénák, ipar) — statikus értékelése után",
          "íves és görbült tetők",
          "membrántetők — a ragasztó kompatibilitásának igazolása után",
        ],
      },
    },
  },
  docTitles: {
    datasheet: "Adatlap: {model}",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0021.pdf": "TÜV SÜD tanúsítvány Z2 093522 0021",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0023.pdf": "TÜV SÜD tanúsítvány Z2 093522 0023",
    "/dokumenty/amerisolar-tuv-rheinland-pv-50674535-0001.pdf": "TÜV Rheinland tanúsítvány PV 50674535 0001",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0025.pdf": "TÜV SÜD tanúsítvány Z2 093522 0025",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0030.pdf": "TÜV SÜD tanúsítvány Z2 093522 0030",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0022-ce.pdf":
      "CE megfelelőségi igazolás TÜV SÜD N8A 093522 0022",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0024-ce.pdf":
      "CE megfelelőségi igazolás TÜV SÜD N8A 093522 0024",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0027-ce.pdf":
      "CE megfelelőségi igazolás TÜV SÜD N8A 093522 0027",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0031-ce.pdf":
      "CE megfelelőségi igazolás TÜV SÜD N8A 093522 0031",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0018-anti-pid.pdf": "PID-állóság — TÜV SÜD Z2 093522 0018",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0019-mgla-solna.pdf": "Sóköd-állóság — TÜV SÜD Z2 093522 0019",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0020-amoniak.pdf": "Ammóniaállóság — TÜV SÜD Z2 093522 0020",
    "/dokumenty/amerisolar-iso-9001.pdf": "ISO 9001:2015 — minőségirányítás",
    "/dokumenty/amerisolar-iso-14001.pdf": "ISO 14001:2015 — környezetirányítás",
    "/dokumenty/amerisolar-iso-45001.pdf": "ISO 45001:2018 — munkahelyi egészségvédelem és biztonság",
    "/dokumenty/amerisolar-pv-cycle-wlochy-2026.pdf": "PV CYCLE Olaszország — WEEE-megfelelőség",
    "/dokumenty/amerisolar-pv-cycle-niemcy-weee-2026.pdf": "PV CYCLE Németország — WEEE-megfelelőség",
  },
  drawing: {
    lineupTitle: "Amerisolar modulok azonos léptékben",
    flexSuffix: " (flexibilis modul)",
    flexHeading: "Flexibilis modulok",
    thickness: "vastagság {t} mm",
    dimTitle: "Méretrajz: {model}, {l} × {w} × {t} mm",
    profile: "profil",
  },
  certBadges: {
    title: "Tanúsítványok és igazolások",
    intro: "Független szervezetek vizsgálatai",
    introValid: ", a tanúsítványok akár {date}-ig érvényesek",
    introTail: ". Minden dokumentum regisztráció nélkül letölthető.",
    more: "Adatlapok és tanúsítványok megtekintése",
    ce: "CE-igazolások",
    salt: "Sóköd",
    ammonia: "Ammónia",
    factory: "nantongi gyár",
    weee: "újrahasznosítás, WEEE-irányelv",
  },
  media: {
    farm: "Naperőmű sík mezőgazdasági területen, modulsorok fix tartószerkezeteken a délutáni napsütésben",
    warehouseWinter: "Raktárcsarnok lapos teteje télen, enyhe hóval és napelemsorokkal",
    archedHall: "Íves csarnok vékony, az ívelt tetőre ragasztott flexibilis modulokkal",
    lightRoof:
      "Logisztikai csarnok könnyű trapézlemez teteje tartószerkezet nélkül felragasztott flexibilis modulokkal",
  },
  home: {
    metaTitle: "Napelemek nagykereskedelme a gyártótól — Amerisolar",
    metaDescription:
      "Amerisolar napelemmodulok konténeres mennyiségben, közvetlenül a gyártótól: TOPCon 430–720 W, kétoldalas, üveg-üveg, flexibilis. Kérjen árat.",
    eyebrow: "Konténeres mennyiség, közvetlenül a gyártótól",
    h1: "Amerisolar napelemek nagykereskedelme — konténerek a gyártótól",
    lead: (v) =>
      `N-típusú TOPCon modulok ${v.pMin}–${v.pMax} W teljesítménnyel, kétoldalas és üveg-üveg kivitelben, valamint ${v.flexMm} mm-es flexibilis termékcsalád. Nagykereskedőknek, kereskedőknek és telepítő cégeknek, akik konténeres mennyiségben vásárolnak.`,
    bullets: (v) => [
      "Szállítás közvetlenül a gyártótól",
      `40'HQ konténer: ${v.hqPcsMin}–${v.hqPcsMax} modul`,
      "Adatlap és tanúsítványok minden modellhez",
      `Akár ${v.glassWL} év teljesítménygarancia`,
    ],
    facts: (v) => [
      { value: "1993 óta", label: "a piacon — a gyártó katalógusa szerint, Kalifornia" },
      { value: "kb. 11 GW", label: "gyártókapacitás a gyártó szerint (2025)" },
      { value: `${v.marketMw} MW`, label: "Magyarországra szállított modul 2025-ben (a katalógus szerint)" },
      { value: v.effMax, label: "a kínálat legnagyobb modulhatásfoka" },
    ],
    lineupTitle: "Hét modul, egy lépték",
    lineupText: (v) =>
      `Az adatlapok méretei és cellaszámai alapján rajzolva — a lakóházakra szánt kompakt ${v.smallModel} típustól a naperőművekhez készült ${v.farmModel} típusig.`,
    lineupCta: "Összes modell összehasonlítása",
    directTitle: "Nagykereskedelmi mennyiség közvetlenül a gyártótól",
    directText:
      "A konténeres megrendelés közvetlenül az Amerisolar modulok gyártójához kerül. A rövidebb ellátási lánc a teljes tételre számolt árat és közvetlenül a gyártótól származó dokumentációt jelent.",
    directCta: "Több száz kWp-os vagy nagyobb projektet tervez?",
    points: (v) => [
      {
        title: "Konténerár",
        text: "A teljes tételt — egy 20'-os vagy 40'HQ konténert — árazzuk a választott teljesítményosztályra, nem raklaponként.",
      },
      {
        title: "Teljes dokumentáció",
        text: "Adatlapok STC- és NOCT-táblázatokkal, hőmérsékleti együtthatókkal és mechanikai terhelésekkel, valamint tanúsítványok minden modellhez.",
      },
      {
        title: "Egy termékcsalád minden szegmensre",
        text: `${v.roofRange} modulok tetőkre, ${v.largeRange} ipari tetőkre és naperőművekhez, valamint flexibilis termékcsalád különleges tetőkre.`,
      },
      {
        title: "Gyártói garancia",
        text: `${v.glassWP} év termékgarancia és ${v.glassWL} év lineáris teljesítménygarancia az üvegmodulokra.`,
      },
    ],
    segmentsTitle: "Nagykereskedőknek, kereskedőknek és telepítőknek nagy mennyiségekhez",
    segments: (v) => [
      {
        title: "Nagykereskedők és megújulóenergia-forgalmazók",
        value: `${v.hqPcsMin}–${v.hqPcsMax}`,
        valueLabel: "modul egy 40'HQ konténerben, modelltől függően",
        cta: "Nagykereskedelmi feltételek kérése",
        text: `A teljes termékcsalád egy forrásból — a tetőmoduloktól a naperőművi és flexibilis modulokig. Adatlapok és tanúsítványok a továbbértékesítéshez, a modulok ${v.palletMin}–${v.palletMax} darabos raklapokon.`,
      },
      {
        title: "Kereskedők és importőrök",
        value: `${v.kwpMin}–${v.kwpMax} kWp`,
        valueLabel: "egy 40'HQ konténerben, modelltől függően (számított érték)",
        cta: "Több konténeres szállítás kérése",
        text: "Konténeres beszerzés közvetlenül a gyártótól, köztes nagykereskedő nélkül. A specifikációt, a teljesítményosztályokat és a szállítási feltételeket a teljes tételre egyeztetjük.",
      },
      {
        title: "Telepítő cégek és EPC",
        value: `${v.farmKwp} kWp`,
        valueLabel: `egy konténer ${v.farmModel} ${v.farmMaxW} W modulban (számított érték)`,
        cta: "Projektszállítás kérése",
        text: `${v.roofRange} modulok céges tetőkre és autóbeállókra, valamint ${v.largeRange} ipari tetőkre és naperőművekhez. Egy konténer egyféle modul készlete sok projekthez.`,
      },
    ],
    modelsTitle: "Napelemmodulok a kínálatunkban",
    modelsText: (v) => `Hatásfok akár ${v.effMax}. STC-adatok az adatlapokból.`,
    table: {
      model: "Modell",
      technology: "Technológia",
      power: "Teljesítmény",
      effMax: "Max. hatásfok",
      mass: "Tömeg",
      warranty: "Garancia",
      actions: "Adatlap és ajánlatkérés",
    },
    techTitle: "N-típusú TOPCon, kétoldalas, üveg-üveg — mit jelent ez a gyakorlatban",
    tech: (v) => [
      {
        title: "Kisebb veszteség melegben",
        text: `A kínálat TOPCon moduljainak teljesítmény-hőmérsékleti együtthatója ${v.topconCoeff}%/°C. Összehasonlításként a ${v.percModel} PERC modulé ${v.percCoeff}%/°C. 65 °C-os cellahőmérsékletnél (40 °C-kal az STC felett) ez kb. ${v.heatDiff} százalékpont teljesítménykülönbség (számított érték).`,
      },
      {
        title: "Félcellák",
        text: "A kínálat minden üvegmodulja félbevágott cellákkal (half-cell) készül. Az egyes felekben folyó kisebb áram kisebb ellenállási veszteséget és a részleges árnyékolás kisebb hatását jelenti a teljes modulra.",
      },
      {
        title: "Teljesítmény mindkét oldalról",
        text: `A kétoldalas modulok a talajról visszavert fényt is hasznosítják. A ${v.farmModel} emellett üveg-üveg felépítésű — fólia helyett mindkét oldalon üveg: ${v.farmGlass}.`,
      },
    ],
    bifCaption: (v) =>
      `Kétoldalas modul hátoldali többlete — példa a(z) ${v.farmModel} adatlapjáról (${v.bifBase} W)`,
    bifRowHeader: "Hátoldali többlet",
    bifRow: "Összteljesítmény",
    bifNote:
      "A tényleges többlet a talaj albedójától (fű, kavics, tetőmembrán), a szerelési magasságtól és a sortávolságtól függ.",
    logisticsTitle: "Hány modul és kWp fér egy konténerbe",
    logisticsText:
      "Darabszám az adatlapok szerint. A kWp a legmagasabb teljesítményosztályra számolt érték — az ajánlatban az Ön által választott osztállyal számolunk.",
    logisticsTable: {
      pallet: "Raklap",
      c20: "20'-os konténer",
      c40: "40'HQ konténer",
      kwp40: "kWp 40'HQ-ban",
    },
    farmBoxTitle: "1 MWp-os naperőmű — hány konténer?",
    farmBoxText: (v) =>
      `${v.farmModel} ${v.farmMaxW} W modulokkal: ${v.farm1MwContainers} db 40'HQ konténer (${v.farm1MwModules} modul, számított érték).`,
    farmBoxStrong: (v) => `${v.farm1MwContainers} db 40'HQ konténer`,
    farmBoxCta: "Naperőművi szállítás kérése",
    calcTitle: "Hány konténerre van szüksége?",
    calcText:
      "Válassza ki a modult és a teljesítményosztályt, majd adja meg a rendszer teljesítményét vagy a konténerek számát. Az eredményt egy kattintással átviheti az ajánlatkérésbe.",
    stringTitle: "Téli Voc feszültség és stringhossz",
    stringText1:
      "Hideg, napos időben a modul feszültsége az adatlapi érték fölé emelkedik. Ezért a stringenkénti modulszámot a legalacsonyabb cellahőmérsékletre számolják — itt −25 °C, ami Közép-Európában szokásos tervezési érték; a tervező a helyszín minimumával számol.",
    stringFormula: "Képlet: Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).",
    stringExample: (v) => `Példa: ${v.industrialModel} ${v.industrialMaxW} W`,
    stringRows: (v) => [
      { k: "Voc STC-n", v: `${v.vocStc} V` },
      { k: "βVoc", v: `${v.betaVoc}%/°C` },
      { k: "Voc −25 °C-on", v: `${v.vocCold} V`, strong: true },
      { k: "Max. modul stringenként, 1500 V-os rendszer", v: v.str1500, strong: true },
      { k: "Max. modul stringenként, 1000 V-os rendszer", v: v.str1000 },
    ],
    stringNote:
      "Tájékoztató számítás. A végleges stringhossz az inverter MPPT-tartományától és maximális bemeneti feszültségétől is függ — ezt a rendszertervező ellenőrzi.",
    flexTitle: "Nem bírja el a tető a paneleket? Rezeg a szerkezet? Van megoldás",
    flexText:
      "Az Amerisolar flexibilis modulokat közvetlenül a tetőfedésre ragasztják — tartószerkezet és fúrás nélkül.",
    flexStats: (v) => [
      { k: "tömeg m²-enként", v: "kb. 3 kg" },
      { k: "vastagság", v: `${v.flexMm} mm` },
      { k: "furat a tetőben", v: "0" },
    ],
    flexUses: (v) => [
      {
        title: "Alacsony teherbírású tetők",
        text: "Trapézlemez- és szendvicspanel-fedésű csarnokok, mezőgazdasági épületek, teherbírási tartalék nélküli régebbi tetők.",
      },
      {
        title: "Rezgésnek kitett szerkezetek",
        text: "Stadionok, sportcsarnokok, arénák, gépekkel és darukkal működő üzemek — kis tömeg, üveg és csavarok nélkül. Kiválasztás az épület statikusának értékelése után.",
      },
      {
        title: "Íves tetők",
        text: `Hajlítási sugár ${v.bendRadius} m — a modul bonyolult tartószerkezet nélkül követi az ívet.`,
      },
    ],
    flexHonest: (v) =>
      `Őszintén: hatásfok akár ${v.flexEff} és ${v.flexWP}/${v.flexWL} év garancia — kevesebb, mint az üvegmoduloknál. Ennek a modulnak ott van értelme, ahol az alternatíva a rendszer elmaradása vagy a szerkezet megerősítése.`,
    flexCta: "Előzetes épületfelmérés kérése",
    massCaption: "Csak a modul tömege felületi m²-enként",
    massNote:
      "Adatlapi adatok. Üvegrendszereknél ehhez jön a tartószerkezet vagy a ballaszt tömege — ez projektfüggő, ezért itt nem számoljuk bele.",
    winterTitle: "Hó- és szélterhelés az adatlapon",
    winterText: (v) =>
      `Az Amerisolar üvegmodulok adatlap szerint ${v.snowPa} Pa hóterhelést és ${v.windPa} Pa szélterhelést viselnek, ${v.opTemp} °C üzemi hőmérséklet-tartományban. A helyszín hó- és szélzónájához való megfelelést a rendszertervező igazolja.`,
    europeTitle: "Amerisolar Európában",
    europeText: (v) =>
      `Modulszállítások 2025-ben a gyártó katalógusa szerint. Magyarország ${v.marketMw} MW-tal a márka egyik legnagyobb európai piaca.`,
    orderTitle: "Hogyan rendelhet egy konténer modult",
    orderSteps: [
      {
        t: "Ajánlatkérés",
        d: "Modell, mennyiség kWp-ben vagy konténerben, szállítási hely és határidő — űrlapon vagy e-mailben.",
      },
      {
        t: "Ajánlat",
        d: "Ár a választott teljesítményosztályra, szállítási feltételek, adatlapok és tanúsítványok.",
      },
      { t: "Megrendelés", d: "A specifikáció, a határidő és a fizetési feltételek visszaigazolása." },
      { t: "Szállítás", d: "Egy konténer modul a megbeszélt helyen és időpontban." },
    ],
    orderCta: "Kezdje ajánlatkéréssel — csak néhány percet vesz igénybe.",
    trustTitle: "Garanciák, szabványok és gyártó",
    trustCta: "Adatlapok és tanúsítványok letöltése",
    trust: (v) => [
      {
        title: "Garanciák",
        text: `Üvegmodulok: ${v.glassWP} év termékgarancia és ${v.glassWL} év lineáris teljesítménygarancia. Flexibilis termékcsalád: ${v.flexWP} és ${v.flexWL} év.`,
      },
      {
        title: "Szabványok és tanúsítványok",
        text: "TÜV SÜD és TÜV Rheinland tanúsítványok (IEC 61215, IEC 61730), CE-igazolások, PID-, sóköd- és ammóniaállósági vizsgálatok, valamint a gyár ISO 9001, 14001 és 45001 tanúsítványai. Minden tanúsítványnál feltüntetjük a pontosan lefedett teljesítménytartományt.",
      },
      {
        title: "Gyártó",
        text: "Worldwide Energy and Manufacturing USA Co., Ltd. — a katalógus szerint 1993 óta működik (Kalifornia), az Amerisolar márka 2007 óta létezik.",
      },
    ],
    faqTitle: "Kérdések a napelemek nagykereskedelméről",
    faqCta: "Kérdés feltevése ajánlatkérésben",
    faq: (v) => [
      {
        question: "Megvásárolhatom az Amerisolar modulokat közvetlenül a gyártótól?",
        answer:
          "Igen. Konténeres mennyiségben szállítunk közvetlenül a gyártótól — a Worldwide Energy and Manufacturing USA Co., Ltd.-től, az Amerisolar márka tulajdonosától. Az árat és a szállítási feltételeket az ajánlat tartalmazza.",
      },
      {
        question: "Hány kWp fér egy 40'HQ konténerbe?",
        answer: `Modelltől függően ${v.kwpMin}–${v.kwpMax} kWp (számítás: konténerenkénti modulszám az adatlap szerint × legmagasabb teljesítményosztály). Például ${v.farmModel}: ${v.farmPieces} darab, ${v.farmKwp} kWp.`,
      },
      {
        question: "Miben különbözik a TOPCon a PERC-től?",
        answer: `A TOPCon passzivált hátoldali kontaktusú N-típusú cella. Kínálatunkban ez többek között alacsonyabb teljesítmény-hőmérsékleti együtthatót jelent: ${v.topconCoeff}%/°C a TOPCon moduloknál, szemben a ${v.percModel} PERC modul ${v.percCoeff}%/°C értékével — melegben a TOPCon modul kevesebb teljesítményt veszít.`,
      },
      {
        question: "Megérik a kétoldalas modulok?",
        answer: `Naperőművekben, autóbeállókon és világos felületű lapostetőkön — általában igen. A(z) ${v.farmModel} adatlapja példát ad: egy ${v.bifBase} W-os modul 20%-os hátoldali többlettel ${v.bifGain20} W-ot ad. A tényleges többlet az albedótól és a szerelési magasságtól függ.`,
      },
      {
        question: "Milyen garanciák vonatkoznak a modulokra?",
        answer: `Üvegmodulok: ${v.glassWP} év termékgarancia és ${v.glassWL} év lineáris teljesítménygarancia. Flexibilis termékcsalád: ${v.flexWP} és ${v.flexWL} év.`,
      },
      {
        question: "Milyen tanúsítványai vannak a moduloknak?",
        answer:
          "A kínálat moduljai IEC 61215 és IEC 61730 szerinti TÜV SÜD vagy TÜV Rheinland tanúsítvánnyal és CE-igazolással rendelkeznek — mindegyik meghatározott teljesítménytartományra, amelyet az adatlapok oldalán tüntetünk fel. A gyár ISO 9001, ISO 14001 és ISO 45001 tanúsítvánnyal rendelkezik. Minden dokumentum regisztráció nélkül letölthető.",
      },
      {
        question: "Mi a teendő, ha a tető nem bírja el a hagyományos paneleket?",
        answer: `Fontolja meg a flexibilis termékcsaládot: kb. 3 kg/m², ${v.flexMm} mm vastag, fúrás nélküli ragasztásos szerelés. Egy adott épületre a kiválasztás statikus értékelését igényli — küldje el nekünk a tető leírását az ajánlatkérésben.`,
      },
      {
        question: "Van raktáruk Magyarországon?",
        answer:
          "Nincs. A konténeres mennyiséget közvetlenül a gyártótól rendeli meg — így az ár a teljes tételre vonatkozik, köztes raktár költsége nélkül. A szállítási feltételeket és helyet az ajánlatban egyeztetjük.",
      },
      {
        question: "Mekkora a minimális rendelés?",
        answer:
          "Konténeres mennyiségben értékesítünk. A fenti táblázat mutatja, hány modul és kWp fér egy 20'-os és egy 40'HQ konténerbe modellenként; a választott modell pontos minimumát az ajánlat tartalmazza.",
      },
      {
        question: "Kiknek értékesítik a modulokat?",
        answer:
          "Konténeres mennyiségben vásárló cégeknek: megújulóenergia-nagykereskedőknek és -forgalmazóknak, kereskedőknek és importőröknek, valamint nagy volumenű telepítő és EPC cégeknek.",
      },
      {
        question: "Mennyibe kerülnek a panelek?",
        answer:
          "Ár ajánlatkérésre. A modelltől és teljesítményosztálytól, a konténerek számától, a szállítási helytől és határidőtől függ. Küldjön ajánlatkérést — konkrét ajánlattal válaszolunk.",
      },
    ],
  },
  catalog: {
    metaTitle: "Amerisolar napelemek 430–720 W — katalógus",
    metaDescription:
      "Amerisolar modulkatalógus: N-típusú TOPCon, kétoldalas, üveg-üveg és flexibilis. Teljes adatlapadatok, csomagolás és kWp konténerenként.",
    breadcrumb: "Moduljaink",
    h1: "Moduljaink — Amerisolar napelemek",
    lead: "{count} modell {min} és {max} W között. Minden modulhoz letöltheti a PDF-adatlapot — azonnal, regisztráció és e-mail nélkül.",
    intro: {
      glass:
        "Edzett üveges, keretes modulok: lakó- és céges tetőkre, autóbeállókra, ipari tetőkre és naperőművekhez.",
      flexible:
        "2 mm vastag, ragasztással szerelt modulok tartószerkezet és fúrás nélkül — korlátozott teherbírású és íves tetőkre.",
    },
    stat: { power: "teljesítmény", eff: "max. hatásfok", dims: "méretek", hq: "40'HQ" },
    hqValue: "{pcs} db, {kwp} kWp",
    note: "kWp konténerenként: az adatlap szerinti darabszámból és a legmagasabb teljesítményosztályból számolva.",
  },
  product: {
    meta: (v) => `${v.model} ${v.minW}–${v.maxW} W — ${v.shortKind}`,
    description: (v) =>
      `${v.model}: ${v.kind} ${v.minW}–${v.maxW} W, hatásfok akár ${v.eff}, ${v.weight} kg.`,
    descriptionTail: (v) =>
      ` STC/NOCT-táblázatok, ${v.pcsHq} db/40'HQ, ${v.warrantyP}/${v.warrantyL} év garancia.`,
    benefit: {
      eff: (v) => `max. hatásfok, ${v.cells} cella, ${v.powerRange}`,
      flexMass: (v) => `${v.weight} kg, ${v.thickness} mm vastag`,
      bending: "minimális hajlítási sugár — íves tetők",
      snow: (v) => `hóterhelés, szél ${v.windPa} Pa`,
      bif: (v) => `egy ${v.bifBase} W-os modulból 20% hátoldali többlettel (adatlapi példa)`,
      warranty: "termék- / lineáris teljesítménygarancia",
    },
    faq: {
      hq: (v) => ({
        question: `Hány ${v.model} modul fér egy 40'HQ konténerbe?`,
        answer: `Az adatlap szerint ${v.pcsHq} darab. ${v.maxW} W-os osztállyal ez ${v.kwpHq} kWp (számítás: darabszám × modulteljesítmény). Egy 20'-os konténerbe ${v.pcs20} darab fér.`,
      }),
      pallet: (v) => ({
        question: "Hány modul van egy raklapon?",
        answer: `${v.pcsPallet} darab, azaz ${v.kwpPallet} kWp ${v.maxW} W-os osztállyal.`,
      }),
      voc: (v) => ({
        question: "Mekkora a modul Voc feszültsége télen?",
        answer: `A ${v.maxW} W-os osztály Voc értéke STC-n ${v.vocStc} V, a Voc hőmérsékleti együtthatója ${v.betaVoc}%/°C. −25 °C-os cellahőmérsékletnél a feszültség kb. ${v.vocCold} V-ra nő (tájékoztató számítás). A stringenkénti modulszámot úgy kell megválasztani, hogy az összeg ne lépje túl az inverter és a rendszer maximális feszültségét (${v.maxSys} V DC).`,
      }),
      warranty: (v) => ({
        question: "Milyen garancia van rá?",
        answer: `${v.warrantyP} év termékgarancia és ${v.warrantyL} év lineáris teljesítménygarancia.`,
      }),
      certs: (v) => ({ question: "Milyen tanúsítványai vannak a modulnak?", answer: v.certs }),
      dims: (v) => ({
        question: "Mennyi a modul tömege és mekkorák a méretei?",
        answer: `${v.dims} mm, ${v.weight} kg, azaz ${v.arealMass} kg/m² (csak a modul${v.glassSuffix}).`,
      }),
      glassSuffix: ", tartószerkezet nélkül",
      bif: (v) => ({
        question: "Mennyit ad a kétoldalas modul hátoldala?",
        answer: `Az adatlap egy ${v.bifBase} W-os modulra ad példát: 10% többletnél a teljesítmény ${v.bif10} W-ra, 20%-nál ${v.bif20} W-ra, 30%-nál ${v.bif30} W-ra nő. A tényleges többlet az albedótól, a magasságtól és a sortávolságtól függ.`,
      }),
      flex: {
        question: "Alkalmas-e a modul rezgésnek kitett szerkezetre, például stadionra vagy darus csarnokra?",
        answer:
          "A kis tömeg, az üveg hiánya és a fúrás nélküli szerelés valódi előnyök a mozgó szerkezeteknél. A gyártó azonban még nem tett közzé dinamikus terhelési vizsgálati eredményeket, ezért egy adott épületre a kiválasztás az épület statikusának értékelését igényli.",
      },
      price: {
        question: "Mennyi az ára?",
        answer:
          "Ár ajánlatkérésre. A teljesítményosztálytól, a konténerek számától, a szállítási helytől és határidőtől függ.",
      },
    },
    heroNote: (v) => `Konténeres mennyiség közvetlenül a gyártótól: ${v.pcsHq} db 40'HQ konténerenként.`,
    usesTitle: "Alkalmazási területek",
    flexNote: (v) =>
      `Ragasztásos szerelés, fúrás és tartószerkezet nélkül. Alacsonyabb hatásfok és rövidebb garancia (${v.warrantyP}/${v.warrantyL} év), mint az üvegmoduloknál — ennek a modulnak ott van értelme, ahol az alternatíva a rendszer elmaradása vagy a tetőszerkezet megerősítése. A modulok síkban vagy az ívet követve fekszenek, így a hozam a tető tájolásától függ. Az engedélyezett aljzatokat és a ragasztót az ajánlat előtt egyeztetjük.`,
    electricalTitle: "Elektromos adatok",
    stcCaption: "STC-feltételek (1000 W/m², 25 °C, AM1,5)",
    rows: {
      pmax: "Maximális teljesítmény Pmax",
      eff: "Modulhatásfok",
      voc: "Üresjárási feszültség Voc",
      isc: "Rövidzárási áram Isc",
      vmp: "Feszültség a maximális teljesítményen Vmp",
      imp: "Áram a maximális teljesítményen Imp",
    },
    tolerance: "Pmax-tűrés a gyártó adatlapja szerint.",
    noctCaption: "NOCT-feltételek (800 W/m², környezet 20 °C, szél 1 m/s)",
    noctMissing:
      "A modell NOCT-adatait azután tesszük közzé, hogy a gyártó megerősíti az aktuális adatlapot.",
    tempCaption: "Hőmérsékleti együtthatók",
    value: "Érték",
    bifCaption: "Hátoldali többlet — adatlapi példa {w} W-ra",
    bifRow: "Összteljesítmény",
    bifNote: "A tényleges többlet az albedótól, a szerelési magasságtól és a sortávolságtól függ.",
    mechCaption: "Mechanikai adatok és üzemi feltételek",
    param: "Paraméter",
    mech: {
      dims: "Méretek",
      mass: "Tömeg",
      arealMass: "Tömeg m²-enként (csak a modul)",
      cells: "Cellák",
      glass: "Üveg",
      frontCover: "Előlap",
      bending: "Hajlítási sugár",
      mounting: "Szerelés",
      snow: "Terhelés — hó",
      wind: "Terhelés — szél",
      junctionBox: "Csatlakozódoboz",
      connector: "Csatlakozók",
      maxSys: "Max. rendszerfeszültség",
      fuse: "Max. soros biztosító",
      fire: "Tűzvédelmi osztály",
      safety: "Érintésvédelmi osztály",
      opTemp: "Üzemi hőmérséklet",
    },
    packCaption: "Csomagolás és teljesítmény szállítási egységenként",
    unit: "Egység",
    pcsCol: "Darab",
    pack: { pallet: "Raklap", c20: "20'-os konténer", c40: "40'HQ konténer" },
    packNote: "Darabszám az adatlap szerint; a kWp a legmagasabb teljesítményosztályra számolt érték.",
    warrantyTitle: "Garanciák és tanúsítványok",
    warrantyText: (v) => `${v.warrantyP} év termékgarancia, ${v.warrantyL} év lineáris teljesítménygarancia.`,
    allDocs: "Összes adatlap és tanúsítvány",
    compareTitle: "Összehasonlítás a szomszédos modellekkel",
    compareCta: "Konténeres mennyiségben van szüksége a(z) {model} modulra?",
    compare: {
      technology: "Technológia",
      power: "Teljesítmény",
      eff: "Max. hatásfok",
      dims: "Méretek",
      mass: "Tömeg",
      bifacial: "Kétoldalas",
      warranty: "Garancia",
      pcsHq: "Darab 40'HQ-ban",
    },
    faqTitle: "Kérdések a(z) {model} modulról",
    ld: {
      technology: "Technológia",
      power: "Maximális teljesítmény (STC)",
      eff: "Maximális hatásfok",
      cells: "Cellák száma",
      bifacial: "Kétoldalas",
      coeff: "Pmax hőmérsékleti együttható",
      warrantyP: "Termékgarancia",
      warrantyL: "Lineáris teljesítménygarancia",
      years: "év",
    },
  },
  docs: {
    metaTitle: "Amerisolar modulok adatlapjai és tanúsítványai",
    metaDescription:
      "Amerisolar modulok PDF-adatlapjai és tanúsítványai: TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, sóköd, ammónia, ISO, WEEE.",
    h1: "Adatlapok és tanúsítványok",
    lead: "A gyártó dokumentációja regisztráció nélkül letölthető. Minden modulnál látja az adatlapját és az azt lefedő tanúsítványokat — pontos teljesítménytartománnyal.",
    toc: "Tartalom",
    datasheetsAnchor: "Adatlapok",
    byModuleTitle: "Adatlapok és tanúsítványok modulonként",
    requestDatasheet: "Adatlap kérése",
    certsOnRequest: "A modell tanúsítványait az ajánlattal együtt küldjük.",
    sections: {
      product: {
        title: "IEC 61215 és IEC 61730 modultanúsítványok",
        intro:
          "A modul független szervezet általi típustanúsítása: tartósság és megbízhatóság (IEC 61215), valamint elektromos biztonság (IEC 61730). Minden tanúsítványnál feltüntetjük, kínálatunk mely teljesítményosztályaira vonatkozik.",
      },
      ce: {
        title: "CE megfelelőségi igazolások",
        intro:
          "A TÜV SÜD igazolásai az EN IEC 61730 szerinti megfelelőségről — ez a modulok uniós CE-jelölésének alapja.",
      },
      tests: {
        title: "Állósági vizsgálatok",
        intro:
          "További TÜV SÜD vizsgálatok: PID-degradációval, sóköddel (tengerparti telepítések) és ammóniával (mezőgazdasági épületek) szembeni állóság.",
      },
      iso: { title: "A gyár irányítási rendszerei", intro: "A nantongi (Kína) modulgyár ISO-tanúsítványai." },
      weee: {
        title: "Újrahasznosítás és WEEE-megfelelőség",
        intro:
          "A gyártó regisztrációja a PV CYCLE rendszerben — az elhasznált modulok begyűjtése és újrahasznosítása a WEEE-irányelv szerint.",
      },
    },
    card: {
      body: "Szervezet",
      number: "Szám",
      holder: "Tulajdonos",
      standards: "Szabványok",
      issued: "Kiállítva",
      validUntil: "Érvényes",
      modules: "Modulok a kínálatunkból",
      download: "PDF letöltése",
    },
  },
  rfqPage: {
    metaTitle: "Ajánlatkérés — napelemmodulok konténerben | Amerisolar",
    metaDescription:
      "Kérjen konténerárat az Amerisolar modulokra közvetlenül a gyártótól. Adja meg a modellt, a mennyiséget kWp-ben vagy konténerben, a helyet és határidőt.",
    h1: "Konténerár kérése",
    lead: "Az Amerisolar modulokat konténeres mennyiségben, közvetlenül a gyártótól szállítjuk. Minél pontosabban írja le az igényét — modell, mennyiség, szállítási hely és határidő —, annál gyorsabban készítünk konkrét ajánlatot.",
    emailBoxStrong: "Inkább e-mailben?",
    emailBoxText: "Írjon nekünk közvetlenül, űrlap nélkül.",
    asideOfferTitle: "Mit tartalmaz az ajánlat",
    asideOffer: [
      "Árat a választott teljesítményosztályra és mennyiségre",
      "Szállítási feltételeket és határidőt",
      "A választott modellek adatlapjait és tanúsítványait",
    ],
    asideContainerTitle: "Mennyi egy konténer?",
    asideContainer:
      "Egy 40'HQ konténerbe modelltől függően 558–1260 modul fér — ez kb. 400 és több mint 720 kWp közötti teljesítmény. Nem tudja a pontos mennyiséget? Adja meg a rendszer hozzávetőleges teljesítményét.",
  },
  form: {
    honeypot: "Weboldal",
    s1: "1. Kicsoda Ön?",
    s2: "2. Modulok és mennyiség",
    s3: "3. Szállítás és határidő",
    s4: "4. Kapcsolat",
    types: {
      distributor: "Nagykereskedő / megújulóenergia-forgalmazó",
      trader: "Kereskedő / importőr",
      installer: "Telepítő cég",
      epc: "EPC / naperőmű-fejlesztő",
      business: "Cég — saját épület",
    },
    timelines: {
      asap: "A lehető leghamarabb",
      "1-3m": "1–3 hónap",
      "3-6m": "3–6 hónap",
      "6m+": "Több mint 6 hónap",
      tender: "Pályázat / előkészítés alatt álló projekt",
    },
    qtyKwp: "Mennyiség kWp-ben",
    qtyKwpPh: "pl. 400",
    qtyContainers: "vagy a konténerek száma",
    qtyContainersPh: "pl. 1",
    delivery: "Szállítási hely",
    deliveryPh: "település vagy irányítószám",
    timeline: "Határidő",
    choose: "Válasszon",
    name: "Név *",
    email: "E-mail *",
    phone: "Telefon",
    company: "Cég",
    vatId: "Adószám",
    message: "Üzenet",
    messagePh: "pl. teljesítményosztály, projekt típusa, szükséges dokumentumok",
    consent: "* Hozzájárulok, hogy ezzel az ajánlatkéréssel kapcsolatban felvegyék velem a kapcsolatot.",
    consentAdmin: "Az adatkezelő: TODO(klient): cégnév.",
    marketing:
      "Szeretnék tájékoztatást kapni a modulok elérhetőségéről és az új szállítmányokról (nem kötelező).",
    submit: "Ajánlatkérés küldése",
    sending: "Küldés…",
    okTitle: "Ajánlatkérés elküldve",
    okText: "Köszönjük. A megadott e-mail-címre ajánlattal vagy pontosító kérdésekkel válaszolunk.",
    okUrgent: "Sürgős esetben írjon ide:",
    errors: {
      type: "Válassza ki, kicsoda Ön.",
      number: "Nullánál nagyobb számot adjon meg.",
      vatId: "Adjon meg érvényes adószámot.",
      name: "Adja meg a nevét.",
      email: "Adjon meg érvényes e-mail-címet.",
      consent: "A kapcsolatfelvételi hozzájárulás szükséges ahhoz, hogy válaszolni tudjunk.",
      qty: "Adja meg a mennyiséget kWp-ben vagy a konténerek számát.",
      fix: "Javítsa a megjelölt mezőket.",
      site: "Ismeretlen weboldal.",
      spam: "A spamszűrő ellenőrzés sikertelen. Frissítse az oldalt, és próbálja újra.",
      rate: "Erről a címről már több ajánlatkérés érkezett. Próbálja újra fél óra múlva.",
      failed: "Az ajánlatkérést nem sikerült elküldeni.",
      fallbackEmail: "Írjon közvetlenül ide: {email}.",
      fallback: "Próbálja újra később.",
    },
  },
  calc: {
    s1: "1. Válasszon modult",
    s2: "2. Teljesítményosztály",
    s3: "3. Mit ismer?",
    minNote: "Konténeres mennyiségben értékesítünk — a minimum egy konténer.",
    modePower: "Rendszerteljesítmény",
    modeContainers: "Konténerek száma",
    power: "Rendszerteljesítmény",
    powerAria: "Rendszerteljesítmény MWp-ben",
    oneContainer: "{mw} MWp (1 konténer)",
    containers: "40'HQ konténerek száma",
    containersAria: "Konténerek száma",
    need: "Szükséges",
    chosen: "Kiválasztva",
    containerForms: { one: "konténer", other: "konténer" } as Plural,
    powerLabel: "Teljesítmény",
    modules: "Modul",
    perModule: "db, egyenként {w} W",
    lastFill:
      "Az utolsó konténer {pct}%-ig van megtöltve — igazítsa a teljesítményt teljes konténerekhez, vagy egészítse ki modulokkal.",
    quote: { one: "Ajánlatkérés {n} konténerre", other: "Ajánlatkérés {n} konténerre" } as Plural,
    datasheet: "Adatlap PDF",
    note: "Tájékoztató számítás: {pcs} modul egy 40'HQ konténerben az adatlap szerint{careful}, azaz {kwp} kWp konténerenként {w} W-tal. A pontos mennyiséget és a szállítási feltételeket az ajánlat tartalmazza.",
    careful: " (óvatosan {min} darabbal számolunk)",
    flexible: "flexibilis modul",
    glass: "üvegmodul",
  },
};

export default hu;
