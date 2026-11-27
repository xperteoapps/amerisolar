// apps/web/messages/ro.ts
// Română — amerisolar.ro (piață: România). Catalogul nu are date pentru România → referințe la nivel european.
// Traducere asistată: este necesară revizuirea de către un vorbitor nativ înainte de lansare (CLAUDE.md §5.2).
import type { Plural } from "@/lib/i18n";
import type { Messages } from "./pl";

const ro: Messages = {
  common: {
    home: "Acasă",
    pieces: "buc.",
    years: "{p}/{l} ani",
    yes: "da",
    no: "nu",
    datasheetPdf: "Fișă PDF",
    downloadDatasheet: "Descarcă fișa tehnică PDF",
    technicalParams: "Date tehnice",
    aiCaption: "Vizualizare orientativă",
    askContainerPrice: "Cere prețul pe container",
    askPrice: "Cere prețul",
    seeModules: "Vezi modulele",
    notFoundTitle: "Pagina nu a fost găsită",
    notFoundText: "Adresa s-ar putea să se fi schimbat sau pagina nu este încă publicată.",
    notFoundBack: "Mergi la pagina principală",
    pdf: "PDF",
    breadcrumbs: "Cale de navigare",
  },
  routes: {
    home: "Acasă",
    catalog: "Modulele noastre",
    installers: "Pentru instalatori",
    farms: "Parcuri fotovoltaice",
    special: "Aplicații speciale",
    wholesale: "En-gros și distribuție",
    tools: "Instrumente",
    docs: "Fișe tehnice și certificate",
    about: "Despre Amerisolar",
    rfq: "Cerere de ofertă",
    contact: "Contact",
    privacy: "Confidențialitate",
  },
  header: {
    skip: "Sari la conținut",
    logoAria: "Amerisolar — pagina principală",
    mainNav: "Meniu principal",
    menu: "Meniu",
    switcher: "Țară și limbă",
  },
  footer: {
    modules: "Module",
    service: "Site",
    note: "Datele modulelor provin din fișele tehnice ale producătorului. Prețuri la cerere.",
  },
  cta: {
    titleModel: "Prețul {model} pe container",
    title: "Un container de module direct de la producător",
    text: "Indicați modelul, cantitatea în kWp sau containere, locul și termenul de livrare. Pregătim o ofertă cu prețul pentru clasa de putere aleasă și condițiile de livrare.",
    noForm: "Nu doriți să completați formularul? Scrieți-ne direct la",
  },
  email: {
    prefix: "sau scrieți-ne direct:",
    prefixShort: "sau scrieți la:",
    prefixOr: "sau scrieți la:",
    button: "Scrieți: {email}",
    mobile: "Trimite un e-mail",
    mobileForm: "Cere o ofertă",
    tableLink: "E-mail",
    tableSr: "despre {model}",
    subjectModel: "Cerere de preț: {model}",
    subject: "Cerere de preț pe container",
    subjectAssessment: "Evaluare preliminară a clădirii — module flexibile",
    subjectQuestion: "Întrebare despre modulele Amerisolar",
    subjectDatasheet: "Fișă tehnică {model}",
    body: {
      greeting: "Bună ziua,",
      request: "vă rog să-mi trimiteți o ofertă pentru modulele {model}.",
      qty: "Cantitate (kWp sau număr de containere): {qty}",
      qtyContainers: "{n} × 40'HQ",
      qtyKwp: " (aprox. {kwp} kWp)",
      delivery: "Loc de livrare: ",
      term: "Termen: ",
      company: "Firmă / CUI: ",
      phone: "Telefon: ",
      bye: "Cu stimă",
    },
  },
  catalogLib: {
    group: { glass: "Module TOPCon din sticlă", flexible: "Linia flexibilă" },
    kind: {
      flexTopcon: "modul flexibil TOPCon",
      flexPerc: "modul flexibil PERC",
      doubleGlass: "modul bifacial TOPCon, dublă sticlă",
      bifacial: "modul bifacial TOPCon",
      topcon: "modul TOPCon de tip N",
    },
    shortKind: {
      flex: "modul flexibil",
      doubleGlass: "TOPCon dublă sticlă",
      bifacial: "TOPCon bifacial",
      topcon: "modul TOPCon",
    },
    tech: {
      flexTopcon: "TOPCon, flexibil",
      flexPerc: "PERC, flexibil",
      doubleGlass: "TOPCon, dublă sticlă",
      topcon: "TOPCon tip N",
    },
    segment: {
      roof: "Acoperișuri de case și firme, carporturi",
      large: "Acoperișuri industriale și parcuri fotovoltaice",
      flex: "Linia flexibilă — acoperișuri speciale",
    },
    cert: {
      number: "{body}, nr. {number}",
      validUntil: "valabil până la {date}",
      onDatasheet: "{name} (conform fișei tehnice)",
      fullRange: "întreaga gamă oferită {range}",
      partial: "clasele {covered} (în ofertă {offer})",
    },
  },
  productCopy: {
    junctionBox: "IP68, 3 diode",
    connector: { "MC4 lub kompatybilne": "MC4 sau compatibile", "MC4 kompatybilne": "compatibile MC4" },
    opTemp: "de la {min} la {max}",
    bySlug: {
      "as-7m108n-bhc": {
        segments: ["acoperișuri de case", "firme mici", "instalatori"],
        glass: "3,2 mm călită cu strat antireflex (fișă: 'Front/Back Glass')",
      },
      "as-7m120n-hc": {
        segments: ["acoperișuri de case", "acoperișuri de firme", "instalatori"],
        glass: "3,2 mm călită cu strat antireflex",
      },
      "as-7m120n-bhc": {
        segments: ["carporturi", "acoperișuri plate", "parcuri fotovoltaice mici", "instalatori"],
        glass: "3,2 mm călită cu strat antireflex; spate: backsheet transparent",
      },
      "as-7m144n-hc": {
        segments: ["acoperișuri industriale", "parcuri fotovoltaice", "EPC"],
        glass: "3,2 mm călită cu strat antireflex",
      },
      "as-8m132n-bhc": {
        segments: ["parcuri fotovoltaice", "EPC", "dezvoltatori de energie regenerabilă", "agrivoltaic"],
        glass: "2 mm + 2 mm călită (față cu antireflex)",
      },
      "as-7m144nfl-hc-black": {
        segments: [
          "acoperișuri cu capacitate portantă redusă (hale, depozite, clădiri agricole)",
          "structuri cu vibrații și sarcini dinamice (stadioane, săli de sport, arene, industrie) — după evaluarea inginerului structurist",
          "acoperișuri arcuite și curbe",
          "acoperișuri cu membrană — după confirmarea compatibilității adezivului",
        ],
        frontCover: "polimer ușor, cu transparență ridicată",
        mounting: "lipire, fără găurire și fără structură",
      },
      "as-7m132fl-hc": {
        segments: [
          "acoperișuri cu capacitate portantă redusă (hale, depozite, clădiri agricole)",
          "structuri cu vibrații și sarcini dinamice (stadioane, săli de sport, arene, industrie) — după evaluarea inginerului structurist",
          "acoperișuri arcuite și curbe",
          "acoperișuri cu membrană — după confirmarea compatibilității adezivului",
        ],
      },
    },
  },
  docTitles: {
    datasheet: "Fișă tehnică {model}",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0021.pdf": "Certificat TÜV SÜD Z2 093522 0021",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0023.pdf": "Certificat TÜV SÜD Z2 093522 0023",
    "/dokumenty/amerisolar-tuv-rheinland-pv-50674535-0001.pdf": "Certificat TÜV Rheinland PV 50674535 0001",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0025.pdf": "Certificat TÜV SÜD Z2 093522 0025",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0030.pdf": "Certificat TÜV SÜD Z2 093522 0030",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0022-ce.pdf":
      "Atestat de conformitate CE TÜV SÜD N8A 093522 0022",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0024-ce.pdf":
      "Atestat de conformitate CE TÜV SÜD N8A 093522 0024",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0027-ce.pdf":
      "Atestat de conformitate CE TÜV SÜD N8A 093522 0027",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0031-ce.pdf":
      "Atestat de conformitate CE TÜV SÜD N8A 093522 0031",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0018-anti-pid.pdf": "Rezistență la PID — TÜV SÜD Z2 093522 0018",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0019-mgla-solna.pdf":
      "Rezistență la ceață salină — TÜV SÜD Z2 093522 0019",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0020-amoniak.pdf":
      "Rezistență la amoniac — TÜV SÜD Z2 093522 0020",
    "/dokumenty/amerisolar-iso-9001.pdf": "ISO 9001:2015 — managementul calității",
    "/dokumenty/amerisolar-iso-14001.pdf": "ISO 14001:2015 — management de mediu",
    "/dokumenty/amerisolar-iso-45001.pdf": "ISO 45001:2018 — sănătate și securitate în muncă",
    "/dokumenty/amerisolar-pv-cycle-wlochy-2026.pdf": "PV CYCLE Italia — conformitate DEEE",
    "/dokumenty/amerisolar-pv-cycle-niemcy-weee-2026.pdf": "PV CYCLE Germania — conformitate DEEE",
  },
  drawing: {
    lineupTitle: "Module Amerisolar la aceeași scară",
    flexSuffix: " (modul flexibil)",
    flexHeading: "Module flexibile",
    thickness: "grosime {t} mm",
    dimTitle: "Desen cotat {model}: {l} × {w} × {t} mm",
    profile: "profil",
  },
  certBadges: {
    title: "Certificate și atestate",
    intro: "Testate de organisme independente",
    introValid: ", certificate valabile până la {date}",
    introTail: ". Toate documentele se descarcă fără înregistrare.",
    more: "Vezi fișele tehnice și certificatele",
    ce: "Atestate CE",
    salt: "Ceață salină",
    ammonia: "Amoniac",
    factory: "fabrica din Nantong",
    weee: "reciclare, directiva DEEE",
  },
  media: {
    farm: "Parc fotovoltaic pe teren agricol plat, rânduri de module pe structuri fixe în soarele de după-amiază",
    warehouseWinter: "Acoperiș plat de depozit iarna, zăpadă ușoară și rânduri de module fotovoltaice",
    archedHall: "Hală arcuită cu module flexibile subțiri lipite pe acoperișul curb",
    lightRoof:
      "Acoperiș ușor din tablă cutată al unei hale logistice cu module flexibile lipite fără structură",
  },
  home: {
    metaTitle: "Panouri fotovoltaice en-gros de la producător — Amerisolar",
    metaDescription:
      "Module fotovoltaice Amerisolar pe container, direct de la producător: TOPCon 430–720 W, bifaciale, dublă sticlă, flexibile. Cereți prețul.",
    eyebrow: "Cantități pe container, direct de la producător",
    h1: "Panouri fotovoltaice Amerisolar en-gros — containere de la producător",
    lead: (v) =>
      `Module TOPCon de tip N de la ${v.pMin} la ${v.pMax} W, bifaciale, dublă sticlă și o linie flexibilă de ${v.flexMm} mm. Pentru angrosiști, traderi și firme de instalare care cumpără pe container.`,
    bullets: (v) => [
      "Livrări direct de la producător",
      `Container 40'HQ: ${v.hqPcsMin}–${v.hqPcsMax} module`,
      "Fișă tehnică și certificate pentru fiecare model",
      `Până la ${v.glassWL} ani garanție de putere`,
    ],
    facts: (v) => [
      { value: "din 1993", label: "pe piață — conform catalogului producătorului, California" },
      { value: "aprox. 11 GW", label: "capacitate de producție conform producătorului (2025)" },
      {
        value: `${v.marketMw} MW`,
        label: "module livrate pe zece piețe europene în 2025 (conform catalogului)",
      },
      { value: v.effMax, label: "eficiența maximă a modulelor din ofertă" },
    ],
    lineupTitle: "Șapte module, o singură scară",
    lineupText: (v) =>
      `Desenate după dimensiunile și numărul de celule din fișele tehnice — de la compactul ${v.smallModel} pentru case până la ${v.farmModel} pentru parcuri fotovoltaice.`,
    lineupCta: "Compară toate modelele",
    directTitle: "Panouri en-gros direct de la producător",
    directText:
      "Comanda pe container ajunge direct la producătorul modulelor Amerisolar. Un lanț de aprovizionare mai scurt înseamnă un preț calculat pentru tot lotul și documentație direct de la producător.",
    directCta: "Aveți un proiect de câteva sute de kWp sau mai mult?",
    points: (v) => [
      {
        title: "Preț pe container",
        text: "Ofertăm tot lotul — un container de 20' sau 40'HQ — pentru clasa de putere aleasă, în loc de prețuri pe palet.",
      },
      {
        title: "Documentație completă",
        text: "Fișe tehnice cu tabele STC și NOCT, coeficienți de temperatură și sarcini mecanice, plus certificate pentru fiecare model.",
      },
      {
        title: "O linie pentru toate segmentele",
        text: `Module de ${v.roofRange} pentru acoperișuri, de ${v.largeRange} pentru acoperișuri industriale și parcuri fotovoltaice, plus o linie flexibilă pentru acoperișuri speciale.`,
      },
      {
        title: "Garanția producătorului",
        text: `${v.glassWP} ani garanție de produs și ${v.glassWL} ani garanție liniară de putere pentru modulele din sticlă.`,
      },
    ],
    segmentsTitle: "Pentru angrosiști, traderi și instalatori care cumpără în volume mari",
    segments: (v) => [
      {
        title: "Angrosiști și distribuitori de energie regenerabilă",
        value: `${v.hqPcsMin}–${v.hqPcsMax}`,
        valueLabel: "module într-un container 40'HQ, în funcție de model",
        cta: "Cereți condițiile en-gros",
        text: `Întreaga linie dintr-o singură sursă — de la module pentru acoperiș la module pentru parcuri și flexibile. Fișe tehnice și certificate pentru revânzare, module pe paleți de ${v.palletMin}–${v.palletMax} bucăți.`,
      },
      {
        title: "Traderi și importatori",
        value: `${v.kwpMin}–${v.kwpMax} kWp`,
        valueLabel: "într-un container 40'HQ, în funcție de model (calcul)",
        cta: "Cereți livrări cu mai multe containere",
        text: "Achiziție pe container direct de la producător, fără angrosist intermediar. Specificațiile, clasele de putere și condițiile de livrare se stabilesc pentru tot lotul.",
      },
      {
        title: "Firme de instalare și EPC",
        value: `${v.farmKwp} kWp`,
        valueLabel: `într-un container de module ${v.farmModel} ${v.farmMaxW} W (calcul)`,
        cta: "Cereți livrare pentru proiect",
        text: `Module de ${v.roofRange} pentru acoperișuri de firme și carporturi și de ${v.largeRange} pentru acoperișuri industriale și parcuri fotovoltaice. Un container înseamnă stocul unui tip de modul pentru multe lucrări.`,
      },
    ],
    modelsTitle: "Module fotovoltaice din oferta noastră",
    modelsText: (v) => `Eficiență de până la ${v.effMax}. Date STC din fișele tehnice.`,
    table: {
      model: "Model",
      technology: "Tehnologie",
      power: "Putere",
      effMax: "Eficiență max.",
      mass: "Greutate",
      warranty: "Garanție",
      actions: "Fișă tehnică și cerere",
    },
    techTitle: "TOPCon de tip N, bifacial, dublă sticlă — ce înseamnă în practică",
    tech: (v) => [
      {
        title: "Pierderi mai mici la căldură",
        text: `Modulele TOPCon din ofertă au un coeficient de temperatură al puterii de ${v.topconCoeff}%/°C. Pentru comparație, modulul PERC ${v.percModel}: ${v.percCoeff}%/°C. La o celulă de 65 °C (cu 40 °C peste STC) diferența este de aprox. ${v.heatDiff} puncte procentuale de putere (calcul).`,
      },
      {
        title: "Celule tăiate pe jumătate",
        text: "Toate modulele din sticlă din ofertă au celule tăiate pe jumătate (half-cell). Un curent mai mic în fiecare jumătate înseamnă pierderi rezistive mai mici și un efect mai redus al umbririi parțiale asupra întregului modul.",
      },
      {
        title: "Putere de pe ambele fețe",
        text: `Modulele bifaciale captează și lumina reflectată de sol. ${v.farmModel} are în plus construcție dublă sticlă — sticlă pe ambele fețe în loc de folie: ${v.farmGlass}.`,
      },
    ],
    bifCaption: (v) =>
      `Câștigul feței posterioare a unui modul bifacial — exemplu din fișa ${v.farmModel} (${v.bifBase} W)`,
    bifRowHeader: "Câștig posterior",
    bifRow: "Putere totală",
    bifNote:
      "Câștigul real depinde de albedoul solului (iarbă, pietriș, membrană), de înălțimea de montaj și de distanța dintre rânduri.",
    logisticsTitle: "Câte module și kWp într-un container",
    logisticsText:
      "Bucăți conform fișelor tehnice. kWp este calculat pentru cea mai mare clasă de putere — în ofertă calculăm pe clasa pe care o alegeți.",
    logisticsTable: { pallet: "Palet", c20: "Container 20'", c40: "Container 40'HQ", kwp40: "kWp în 40'HQ" },
    farmBoxTitle: "Parc de 1 MWp — câte containere?",
    farmBoxText: (v) =>
      `Cu module ${v.farmModel} ${v.farmMaxW} W: ${v.farm1MwContainers} containere 40'HQ (${v.farm1MwModules} module, calcul).`,
    farmBoxStrong: (v) => `${v.farm1MwContainers} containere 40'HQ`,
    farmBoxCta: "Cereți livrare pentru un parc fotovoltaic",
    calcTitle: "De câte containere aveți nevoie?",
    calcText:
      "Alegeți modulul și clasa de putere, apoi introduceți puterea instalației sau numărul de containere. Transferați rezultatul în cererea de ofertă cu un clic.",
    stringTitle: "Tensiunea Voc iarna și lungimea stringului",
    stringText1:
      "Într-o zi geroasă și însorită, tensiunea modulului crește peste valoarea din fișă. De aceea numărul de module pe string se calculează pentru temperatura minimă a celulei — aici −25 °C, valoare de proiectare uzuală în Europa Centrală; proiectantul folosește minimul local.",
    stringFormula: "Formula: Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).",
    stringExample: (v) => `Exemplu: ${v.industrialModel} ${v.industrialMaxW} W`,
    stringRows: (v) => [
      { k: "Voc la STC", v: `${v.vocStc} V` },
      { k: "βVoc", v: `${v.betaVoc}%/°C` },
      { k: "Voc la −25 °C", v: `${v.vocCold} V`, strong: true },
      { k: "Max. module pe string, sistem 1500 V", v: v.str1500, strong: true },
      { k: "Max. module pe string, sistem 1000 V", v: v.str1000 },
    ],
    stringNote:
      "Calcul orientativ. Lungimea finală a stringului depinde și de domeniul MPPT și de tensiunea maximă de intrare a invertorului — le verifică proiectantul.",
    flexTitle: "Acoperișul nu suportă panouri? Structura vibrează? Există o soluție",
    flexText:
      "Modulele flexibile Amerisolar se lipesc direct pe învelitoare — fără structură de susținere și fără găurire.",
    flexStats: (v) => [
      { k: "greutate pe m²", v: "aprox. 3 kg" },
      { k: "grosime", v: `${v.flexMm} mm` },
      { k: "găuri în acoperiș", v: "0" },
    ],
    flexUses: (v) => [
      {
        title: "Acoperișuri cu capacitate portantă redusă",
        text: "Hale din tablă cutată și panouri sandwich, clădiri agricole, acoperișuri vechi fără rezervă de capacitate.",
      },
      {
        title: "Structuri cu vibrații",
        text: "Stadioane, săli de sport, arene, fabrici cu utilaje și poduri rulante — greutate mică, fără sticlă și fără șuruburi. Alegerea după evaluarea inginerului structurist al clădirii.",
      },
      {
        title: "Acoperișuri arcuite",
        text: `Raza de curbură ${v.bendRadius} m — modulul urmează arcul fără structuri complicate.`,
      },
    ],
    flexHonest: (v) =>
      `Sincer: eficiență de până la ${v.flexEff} și garanție ${v.flexWP}/${v.flexWL} ani — mai puțin decât la modulele din sticlă. Acest modul are sens acolo unde alternativa este lipsa instalației sau consolidarea structurii.`,
    flexCta: "Cereți o evaluare preliminară a clădirii",
    massCaption: "Greutatea modulului singur pe m² de suprafață",
    massNote:
      "Date din fișele tehnice. La sistemele din sticlă se adaugă greutatea structurii de susținere sau a balastului — depinde de proiect, de aceea nu o includem aici.",
    winterTitle: "Sarcini de zăpadă și vânt în fișa tehnică",
    winterText: (v) =>
      `Conform fișelor tehnice, modulele din sticlă Amerisolar suportă o sarcină de zăpadă de ${v.snowPa} Pa și de vânt de ${v.windPa} Pa, cu un domeniu de temperatură de funcționare ${v.opTemp} °C. Adecvarea la zona de zăpadă și vânt a amplasamentului o confirmă proiectantul.`,
    europeTitle: "Amerisolar în Europa",
    europeText: (v) =>
      `Livrări de module în 2025 conform catalogului producătorului — ${v.marketMw} MW pe zece piețe europene.`,
    orderTitle: "Cum comandați un container de module",
    orderSteps: [
      {
        t: "Cerere",
        d: "Model, cantitate în kWp sau containere, locul și termenul de livrare — prin formular sau e-mail.",
      },
      {
        t: "Ofertă",
        d: "Preț pentru clasa de putere aleasă, condiții de livrare, fișe tehnice și certificate.",
      },
      { t: "Comandă", d: "Confirmarea specificațiilor, a termenului și a condițiilor de plată." },
      { t: "Livrare", d: "Un container de module la locul și data convenite." },
    ],
    orderCta: "Începeți cu o cerere — durează doar câteva minute.",
    trustTitle: "Garanții, standarde și producător",
    trustCta: "Descarcă fișele tehnice și certificatele",
    trust: (v) => [
      {
        title: "Garanții",
        text: `Module din sticlă: ${v.glassWP} ani garanție de produs și ${v.glassWL} ani garanție liniară de putere. Linia flexibilă: ${v.flexWP} și ${v.flexWL} ani.`,
      },
      {
        title: "Standarde și certificate",
        text: "Certificate TÜV SÜD și TÜV Rheinland (IEC 61215, IEC 61730), atestate CE, teste de rezistență la PID, ceață salină și amoniac, plus ISO 9001, 14001 și 45001 ale fabricii. Pentru fiecare certificat indicăm exact intervalul de putere acoperit.",
      },
      {
        title: "Producător",
        text: "Worldwide Energy and Manufacturing USA Co., Ltd. — conform catalogului, activă din 1993 (California), cu marca Amerisolar din 2007.",
      },
    ],
    faqTitle: "Întrebări despre panourile fotovoltaice en-gros",
    faqCta: "Puneți o întrebare în cerere",
    faq: (v) => [
      {
        question: "Pot cumpăra modulele Amerisolar direct de la producător?",
        answer:
          "Da. Livrăm pe container direct de la producător — Worldwide Energy and Manufacturing USA Co., Ltd., proprietarul mărcii Amerisolar. Prețul și condițiile de livrare sunt indicate în ofertă.",
      },
      {
        question: "Câți kWp încap într-un container 40'HQ?",
        answer: `În funcție de model, între ${v.kwpMin} și ${v.kwpMax} kWp (calcul: module pe container conform fișei × cea mai mare clasă de putere). De exemplu ${v.farmModel}: ${v.farmPieces} bucăți, ${v.farmKwp} kWp.`,
      },
      {
        question: "Prin ce diferă TOPCon de PERC?",
        answer: `TOPCon este o celulă de tip N cu contact posterior pasivat. În oferta noastră aceasta înseamnă, printre altele, un coeficient de temperatură al puterii mai mic: ${v.topconCoeff}%/°C la modulele TOPCon față de ${v.percCoeff}%/°C la modulul PERC ${v.percModel} — pe căldură, modulul TOPCon pierde mai puțină putere.`,
      },
      {
        question: "Merită modulele bifaciale?",
        answer: `În parcuri fotovoltaice, pe carporturi și pe acoperișuri plate cu suprafață deschisă la culoare — de obicei da. Fișa ${v.farmModel} dă un exemplu: un modul de ${v.bifBase} W cu un câștig posterior de 20% oferă ${v.bifGain20} W. Câștigul real depinde de albedo și de înălțimea de montaj.`,
      },
      {
        question: "Ce garanții au modulele?",
        answer: `Module din sticlă: ${v.glassWP} ani garanție de produs și ${v.glassWL} ani garanție liniară de putere. Linia flexibilă: ${v.flexWP} și ${v.flexWL} ani.`,
      },
      {
        question: "Ce certificate au modulele?",
        answer:
          "Modulele din ofertă au certificate TÜV SÜD sau TÜV Rheinland conform IEC 61215 și IEC 61730 și atestate CE — fiecare pentru un interval de putere definit, pe care îl indicăm pe pagina cu fișe tehnice. Fabrica are certificări ISO 9001, ISO 14001 și ISO 45001. Toate documentele se descarcă fără înregistrare.",
      },
      {
        question: "Ce faceți dacă acoperișul nu suportă panouri clasice?",
        answer: `Luați în calcul linia flexibilă: aprox. 3 kg/m², ${v.flexMm} mm grosime, montaj prin lipire fără găurire. Alegerea pentru o clădire anume necesită evaluarea unui inginer structurist — trimiteți-ne descrierea acoperișului în cerere.`,
      },
      {
        question: "Aveți depozit în România?",
        answer:
          "Nu. Comandați pe container direct de la producător — astfel prețul se aplică întregului lot, fără costurile unui depozit intermediar. Condițiile și locul de livrare se stabilesc în ofertă.",
      },
      {
        question: "Care este comanda minimă?",
        answer:
          "Vindem pe container. Tabelul de mai sus arată câte module și kWp încap într-un container de 20' și 40'HQ pentru fiecare model; minimul exact pentru modelul ales este indicat în ofertă.",
      },
      {
        question: "Cui vindeți modulele?",
        answer:
          "Firmelor care cumpără pe container: angrosiști și distribuitori de energie regenerabilă, traderi și importatori, firme de instalare și EPC cu volume mari.",
      },
      {
        question: "Care este prețul panourilor?",
        answer:
          "Preț la cerere. Depinde de model și clasa de putere, numărul de containere, locul și termenul de livrare. Trimiteți o cerere — vă răspundem cu o ofertă concretă.",
      },
    ],
  },
  catalog: {
    metaTitle: "Panouri fotovoltaice Amerisolar 430–720 W — catalog",
    metaDescription:
      "Catalogul modulelor Amerisolar: TOPCon tip N, bifaciale, dublă sticlă și flexibile. Date complete din fișe, ambalare și kWp pe container.",
    breadcrumb: "Modulele noastre",
    h1: "Modulele noastre — panouri fotovoltaice Amerisolar",
    lead: "{count} modele de la {min} la {max} W. Pentru fiecare modul descărcați fișa tehnică PDF — imediat, fără înregistrare și fără e-mail.",
    intro: {
      glass:
        "Module cu sticlă călită și ramă: pentru acoperișuri de case și firme, carporturi, acoperișuri industriale și parcuri fotovoltaice.",
      flexible:
        "Module de 2 mm grosime montate prin lipire, fără structură și fără găurire — pentru acoperișuri cu capacitate portantă limitată și acoperișuri arcuite.",
    },
    stat: { power: "putere", eff: "eficiență max.", dims: "dimensiuni", hq: "40'HQ" },
    hqValue: "{pcs} buc., {kwp} kWp",
    note: "kWp pe container: calcul din numărul de bucăți din fișa tehnică și cea mai mare clasă de putere.",
  },
  product: {
    meta: (v) => `${v.model} ${v.minW}–${v.maxW} W — ${v.shortKind}`,
    description: (v) =>
      `${v.model}: ${v.kind} ${v.minW}–${v.maxW} W, eficiență până la ${v.eff}, ${v.weight} kg.`,
    descriptionTail: (v) =>
      ` Tabele STC/NOCT, ${v.pcsHq} buc. pe 40'HQ, garanție ${v.warrantyP}/${v.warrantyL} ani.`,
    benefit: {
      eff: (v) => `eficiență max., ${v.cells} celule, ${v.powerRange}`,
      flexMass: (v) => `${v.weight} kg, grosime ${v.thickness} mm`,
      bending: "raza minimă de curbură — acoperișuri arcuite",
      snow: (v) => `sarcină de zăpadă, vânt ${v.windPa} Pa`,
      bif: (v) => `dintr-un modul de ${v.bifBase} W cu 20% câștig posterior (exemplu din fișă)`,
      warranty: "garanție de produs / liniară de putere",
    },
    faq: {
      hq: (v) => ({
        question: `Câte module ${v.model} încap într-un container 40'HQ?`,
        answer: `Conform fișei tehnice, ${v.pcsHq} bucăți. La clasa ${v.maxW} W înseamnă ${v.kwpHq} kWp (calcul: bucăți × puterea modulului). Un container de 20' are ${v.pcs20} bucăți.`,
      }),
      pallet: (v) => ({
        question: "Câte module sunt pe un palet?",
        answer: `${v.pcsPallet} bucăți, adică ${v.kwpPallet} kWp la clasa ${v.maxW} W.`,
      }),
      voc: (v) => ({
        question: "Ce tensiune Voc are modulul iarna?",
        answer: `Voc la STC pentru clasa ${v.maxW} W este ${v.vocStc} V, iar coeficientul de temperatură al Voc este ${v.betaVoc}%/°C. La o temperatură a celulei de −25 °C tensiunea crește la aprox. ${v.vocCold} V (calcul orientativ). Numărul de module pe string se alege astfel încât suma să nu depășească tensiunea maximă a invertorului și a sistemului (${v.maxSys} V DC).`,
      }),
      warranty: (v) => ({
        question: "Ce garanție are?",
        answer: `${v.warrantyP} ani garanție de produs și ${v.warrantyL} ani garanție liniară de putere.`,
      }),
      certs: (v) => ({ question: "Ce certificate are modulul?", answer: v.certs }),
      dims: (v) => ({
        question: "Cât cântărește modulul și ce dimensiuni are?",
        answer: `${v.dims} mm, ${v.weight} kg, adică ${v.arealMass} kg/m² (doar modulul${v.glassSuffix}).`,
      }),
      glassSuffix: ", fără structură de susținere",
      bif: (v) => ({
        question: "Cât aduce fața posterioară a unui modul bifacial?",
        answer: `Fișa dă un exemplu pentru un modul de ${v.bifBase} W: la un câștig de 10% puterea crește la ${v.bif10} W, la 20% la ${v.bif20} W, la 30% la ${v.bif30} W. Câștigul real depinde de albedo, înălțime și distanța dintre rânduri.`,
      }),
      flex: {
        question:
          "Este modulul potrivit pentru o structură cu vibrații, de exemplu un stadion sau o hală cu pod rulant?",
        answer:
          "Greutatea mică, lipsa sticlei și montajul fără găurire sunt avantaje reale la structurile care lucrează. Totuși, producătorul nu a prezentat încă rezultatele testelor la sarcini dinamice, așa că alegerea pentru o clădire anume necesită evaluarea inginerului său structurist.",
      },
      price: {
        question: "Care este prețul?",
        answer:
          "Preț la cerere. Depinde de clasa de putere, numărul de containere, locul și termenul de livrare.",
      },
    },
    heroNote: (v) => `Livrări pe container direct de la producător: ${v.pcsHq} buc. într-un container 40'HQ.`,
    usesTitle: "Aplicații",
    flexNote: (v) =>
      `Montaj prin lipire, fără găurire și fără structură. Eficiență mai mică și garanție mai scurtă (${v.warrantyP}/${v.warrantyL} ani) decât la modulele din sticlă — acest modul are sens acolo unde alternativa este lipsa instalației sau consolidarea structurii acoperișului. Modulele stau plat sau pe arc, deci producția depinde de orientarea acoperișului. Suporturile admise și adezivul le confirmăm înainte de ofertă.`,
    electricalTitle: "Date electrice",
    stcCaption: "Condiții STC (1000 W/m², 25 °C, AM1,5)",
    rows: {
      pmax: "Putere maximă Pmax",
      eff: "Eficiența modulului",
      voc: "Tensiune în gol Voc",
      isc: "Curent de scurtcircuit Isc",
      vmp: "Tensiune la putere maximă Vmp",
      imp: "Curent la putere maximă Imp",
    },
    tolerance: "Toleranța Pmax conform fișei tehnice a producătorului.",
    noctCaption: "Condiții NOCT (800 W/m², mediu 20 °C, vânt 1 m/s)",
    noctMissing:
      "Datele NOCT pentru acest model le publicăm după confirmarea fișei actuale de către producător.",
    tempCaption: "Coeficienți de temperatură",
    value: "Valoare",
    bifCaption: "Câștig posterior — exemplu din fișă pentru {w} W",
    bifRow: "Putere totală",
    bifNote: "Câștigul real depinde de albedo, înălțimea de montaj și distanța dintre rânduri.",
    mechCaption: "Date mecanice și condiții de funcționare",
    param: "Parametru",
    mech: {
      dims: "Dimensiuni",
      mass: "Greutate",
      arealMass: "Greutate pe m² (doar modulul)",
      cells: "Celule",
      glass: "Sticlă",
      frontCover: "Strat frontal",
      bending: "Raza de curbură",
      mounting: "Montaj",
      snow: "Sarcină — zăpadă",
      wind: "Sarcină — vânt",
      junctionBox: "Cutie de joncțiune",
      connector: "Conectori",
      maxSys: "Tensiune max. a sistemului",
      fuse: "Siguranță max. în serie",
      fire: "Clasa de foc",
      safety: "Clasa de protecție",
      opTemp: "Temperatură de funcționare",
    },
    packCaption: "Ambalare și putere pe unitate de transport",
    unit: "Unitate",
    pcsCol: "Bucăți",
    pack: { pallet: "Palet", c20: "Container 20'", c40: "Container 40'HQ" },
    packNote: "Bucăți conform fișei tehnice; kWp este calculat pentru cea mai mare clasă de putere.",
    warrantyTitle: "Garanții și certificate",
    warrantyText: (v) =>
      `${v.warrantyP} ani garanție de produs, ${v.warrantyL} ani garanție liniară de putere.`,
    allDocs: "Toate fișele tehnice și certificatele",
    compareTitle: "Comparație cu modelele apropiate",
    compareCta: "Aveți nevoie de {model} pe container?",
    compare: {
      technology: "Tehnologie",
      power: "Putere",
      eff: "Eficiență max.",
      dims: "Dimensiuni",
      mass: "Greutate",
      bifacial: "Bifacial",
      warranty: "Garanție",
      pcsHq: "Bucăți în 40'HQ",
    },
    faqTitle: "Întrebări despre {model}",
    ld: {
      technology: "Tehnologie",
      power: "Putere maximă (STC)",
      eff: "Eficiență maximă",
      cells: "Număr de celule",
      bifacial: "Bifacial",
      coeff: "Coeficient de temperatură Pmax",
      warrantyP: "Garanție de produs",
      warrantyL: "Garanție liniară de putere",
      years: "ani",
    },
  },
  docs: {
    metaTitle: "Fișe tehnice și certificate ale modulelor Amerisolar",
    metaDescription:
      "Fișe tehnice PDF și certificate ale modulelor Amerisolar: TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, ceață salină, amoniac, ISO, DEEE.",
    h1: "Fișe tehnice și certificate",
    lead: "Documentația producătorului, descărcabilă fără înregistrare. Pentru fiecare modul vedeți fișa tehnică și certificatele care îl acoperă — cu intervalul exact de putere.",
    toc: "Cuprins",
    datasheetsAnchor: "Fișe tehnice",
    byModuleTitle: "Fișe tehnice și certificate pe modul",
    requestDatasheet: "Cereți fișa tehnică",
    certsOnRequest: "Certificatele pentru acest model le transmitem împreună cu oferta.",
    sections: {
      product: {
        title: "Certificate de modul IEC 61215 și IEC 61730",
        intro:
          "Certificarea de tip a modulului de către un organism independent: durabilitate și fiabilitate (IEC 61215) și siguranță electrică (IEC 61730). Pentru fiecare certificat indicăm ce clase de putere din oferta noastră acoperă.",
      },
      ce: {
        title: "Atestate de conformitate CE",
        intro:
          "Atestate TÜV SÜD care confirmă conformitatea cu EN IEC 61730 — baza marcajului CE al modulelor pe piața UE.",
      },
      tests: {
        title: "Teste de rezistență",
        intro:
          "Teste suplimentare TÜV SÜD: rezistență la degradarea PID, la ceață salină (instalații de coastă) și la amoniac (clădiri agricole).",
      },
      iso: {
        title: "Sistemele de management ale fabricii",
        intro: "Certificatele ISO ale fabricii de module din Nantong (China).",
      },
      weee: {
        title: "Reciclare și conformitate DEEE",
        intro:
          "Înregistrarea producătorului în sistemul PV CYCLE — colectarea și reciclarea modulelor uzate conform directivei DEEE.",
      },
    },
    card: {
      body: "Organism",
      number: "Număr",
      holder: "Titular",
      standards: "Standarde",
      issued: "Emis",
      validUntil: "Valabil până la",
      modules: "Module din oferta noastră",
      download: "Descarcă PDF",
    },
  },
  rfqPage: {
    metaTitle: "Cerere de ofertă — module PV pe container | Amerisolar",
    metaDescription:
      "Cereți prețul pe container pentru modulele Amerisolar direct de la producător. Indicați modelul, cantitatea în kWp sau containere, locul și termenul.",
    h1: "Cereți prețul pe container",
    lead: "Livrăm modulele Amerisolar pe container, direct de la producător. Cu cât descrieți mai precis nevoia — model, cantitate, locul și termenul de livrare —, cu atât pregătim mai repede o ofertă concretă.",
    emailBoxStrong: "Preferați e-mailul?",
    emailBoxText: "Scrieți-ne direct, fără formular.",
    asideOfferTitle: "Ce conține oferta",
    asideOffer: [
      "Prețul pentru clasa de putere și cantitatea alese",
      "Condițiile și termenul de livrare",
      "Fișele tehnice și certificatele modelelor alese",
    ],
    asideContainerTitle: "Cât înseamnă un container?",
    asideContainer:
      "Un container 40'HQ conține între 558 și 1.260 de module, în funcție de model — aprox. 400 până la peste 720 kWp. Nu știți cantitatea exactă? Introduceți puterea aproximativă a instalației.",
  },
  form: {
    honeypot: "Site web",
    s1: "1. Cine sunteți",
    s2: "2. Module și cantitate",
    s3: "3. Livrare și termen",
    s4: "4. Date de contact",
    types: {
      distributor: "Angrosist / distribuitor de energie regenerabilă",
      trader: "Trader / importator",
      installer: "Firmă de instalare",
      epc: "EPC / dezvoltator de parcuri fotovoltaice",
      business: "Firmă — clădire proprie",
    },
    timelines: {
      asap: "Cât mai repede",
      "1-3m": "1–3 luni",
      "3-6m": "3–6 luni",
      "6m+": "Peste 6 luni",
      tender: "Licitație / proiect în pregătire",
    },
    qtyKwp: "Cantitate în kWp",
    qtyKwpPh: "ex. 400",
    qtyContainers: "sau număr de containere",
    qtyContainersPh: "ex. 1",
    delivery: "Loc de livrare",
    deliveryPh: "localitate sau cod poștal",
    timeline: "Termen",
    choose: "Alegeți",
    name: "Nume și prenume *",
    email: "E-mail *",
    phone: "Telefon",
    company: "Firmă",
    vatId: "CUI / Cod de TVA",
    message: "Mesaj",
    messagePh: "ex. clasa de putere, tipul proiectului, documente necesare",
    consent: "* Sunt de acord să fiu contactat în legătură cu această cerere.",
    consentAdmin: "Operatorul datelor este TODO(klient): denumirea firmei.",
    marketing: "Doresc să primesc informații despre disponibilitatea modulelor și livrări noi (opțional).",
    submit: "Trimite cererea",
    sending: "Se trimite…",
    okTitle: "Cerere trimisă",
    okText:
      "Mulțumim. Vă răspundem la adresa de e-mail indicată cu o ofertă sau cu întrebări de clarificare.",
    okUrgent: "Pentru urgențe scrieți la",
    errors: {
      type: "Alegeți cine sunteți.",
      number: "Introduceți un număr mai mare decât zero.",
      vatId: "Introduceți un cod fiscal valid.",
      name: "Introduceți numele și prenumele.",
      email: "Introduceți o adresă de e-mail validă.",
      consent: "Acordul pentru contact este necesar ca să vă putem răspunde.",
      qty: "Introduceți cantitatea în kWp sau numărul de containere.",
      fix: "Corectați câmpurile marcate.",
      site: "Site necunoscut.",
      spam: "Verificarea antispam a eșuat. Reîncărcați pagina și încercați din nou.",
      rate: "De la această adresă s-au trimis deja mai multe cereri. Încercați din nou peste o jumătate de oră.",
      failed: "Cererea nu a putut fi trimisă.",
      fallbackEmail: "Scrieți-ne direct la {email}.",
      fallback: "Încercați din nou mai târziu.",
    },
  },
  calc: {
    s1: "1. Alegeți modulul",
    s2: "2. Clasa de putere",
    s3: "3. Ce știți?",
    minNote: "Vindem pe container — minimul este un container.",
    modePower: "Puterea instalației",
    modeContainers: "Numărul de containere",
    power: "Puterea instalației",
    powerAria: "Puterea instalației în MWp",
    oneContainer: "{mw} MWp (1 container)",
    containers: "Număr de containere 40'HQ",
    containersAria: "Număr de containere",
    need: "Aveți nevoie de",
    chosen: "Ales",
    containerForms: { one: "container", few: "containere", other: "de containere" } as Plural,
    powerLabel: "Putere",
    modules: "Module",
    perModule: "buc. de {w} W",
    lastFill:
      "Ultimul container este plin în proporție de {pct}% — ajustați puterea pentru a folosi containere complete sau adăugați module.",
    quote: {
      one: "Cereți oferta pentru {n} container",
      few: "Cereți oferta pentru {n} containere",
      other: "Cereți oferta pentru {n} de containere",
    } as Plural,
    datasheet: "Fișă tehnică PDF",
    note: "Calcul orientativ: {pcs} module într-un container 40'HQ conform fișei{careful}, adică {kwp} kWp pe container la {w} W. Cantitatea exactă și condițiile de livrare le indicăm în ofertă.",
    careful: " (calculăm prudent cu {min})",
    flexible: "modul flexibil",
    glass: "modul din sticlă",
  },
};

export default ro;
