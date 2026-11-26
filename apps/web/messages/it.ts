// apps/web/messages/it.ts
// Italiano — amerisolar.eu/it (mercato: Italia).
// Traduzione assistita: revisione madrelingua necessaria prima della pubblicazione (CLAUDE.md §5.2).
import type { Plural } from "@/lib/i18n";
import type { Messages } from "./pl";

const it: Messages = {
  common: {
    home: "Home",
    pieces: "pz",
    years: "{p}/{l} anni",
    yes: "sì",
    no: "no",
    datasheetPdf: "Scheda PDF",
    downloadDatasheet: "Scarica la scheda tecnica PDF",
    technicalParams: "Dati tecnici",
    aiCaption: "Visualizzazione illustrativa",
    askContainerPrice: "Chiedi il prezzo per container",
    askPrice: "Chiedi il prezzo",
    seeModules: "Vedi i moduli",
    notFoundTitle: "Pagina non trovata",
    notFoundText: "L'indirizzo potrebbe essere cambiato o la pagina non è ancora pubblicata.",
    notFoundBack: "Vai alla home page",
    pdf: "PDF",
    breadcrumbs: "Percorso di navigazione",
  },
  routes: {
    home: "Home",
    catalog: "I nostri moduli",
    installers: "Per installatori",
    farms: "Impianti a terra",
    special: "Applicazioni speciali",
    wholesale: "Ingrosso e distribuzione",
    tools: "Strumenti",
    docs: "Schede tecniche e certificati",
    about: "Chi è Amerisolar",
    rfq: "Richiesta di preventivo",
    contact: "Contatti",
    privacy: "Privacy",
  },
  header: {
    skip: "Vai al contenuto",
    logoAria: "Amerisolar — home",
    mainNav: "Menu principale",
    menu: "Menu",
    switcher: "Paese e lingua",
  },
  footer: {
    modules: "Moduli",
    service: "Sito",
    note: "I dati dei moduli provengono dalle schede tecniche del produttore. Prezzi su richiesta.",
  },
  cta: {
    titleModel: "Prezzo di {model} in quantità da container",
    title: "Un container di moduli direttamente dal produttore",
    text: "Indica modello, quantità in kWp o container, luogo e tempi di consegna. Prepareremo un'offerta con il prezzo per la classe di potenza scelta e le condizioni di consegna.",
    noForm: "Non vuoi compilare il modulo? Scrivici direttamente a",
  },
  email: {
    prefix: "oppure scrivi subito:",
    prefixShort: "oppure scrivi:",
    prefixOr: "oppure scrivi:",
    button: "Scrivi: {email}",
    mobile: "Scrivi un'email",
    mobileForm: "Chiedi un'offerta",
    tableLink: "Email",
    tableSr: "su {model}",
    subjectModel: "Richiesta di prezzo: {model}",
    subject: "Richiesta di prezzo per container",
    subjectAssessment: "Valutazione preliminare dell'edificio — moduli flessibili",
    subjectQuestion: "Domanda sui moduli Amerisolar",
    subjectDatasheet: "Scheda tecnica {model}",
    body: {
      greeting: "Buongiorno,",
      request: "vi chiedo un'offerta per i moduli {model}.",
      qty: "Quantità (kWp o numero di container): {qty}",
      qtyContainers: "{n} × 40'HQ",
      qtyKwp: " (circa {kwp} kWp)",
      delivery: "Luogo di consegna: ",
      term: "Tempi: ",
      company: "Azienda / Partita IVA: ",
      phone: "Telefono: ",
      bye: "Cordiali saluti",
    },
  },
  catalogLib: {
    group: { glass: "Moduli TOPCon in vetro", flexible: "Linea flessibile" },
    kind: {
      flexTopcon: "modulo flessibile TOPCon",
      flexPerc: "modulo flessibile PERC",
      doubleGlass: "modulo bifacciale TOPCon, doppio vetro",
      bifacial: "modulo bifacciale TOPCon",
      topcon: "modulo TOPCon di tipo N",
    },
    shortKind: {
      flex: "modulo flessibile",
      doubleGlass: "TOPCon doppio vetro",
      bifacial: "TOPCon bifacciale",
      topcon: "modulo TOPCon",
    },
    tech: {
      flexTopcon: "TOPCon, flessibile",
      flexPerc: "PERC, flessibile",
      doubleGlass: "TOPCon, doppio vetro",
      topcon: "TOPCon tipo N",
    },
    segment: {
      roof: "Tetti residenziali e aziendali, pensiline",
      large: "Tetti industriali e impianti a terra",
      flex: "Linea flessibile — tetti speciali",
    },
    cert: {
      number: "{body}, n. {number}",
      validUntil: "valido fino al {date}",
      onDatasheet: "{name} (secondo la scheda tecnica)",
      fullRange: "intera gamma offerta {range}",
      partial: "classi {covered} (in offerta {offer})",
    },
  },
  productCopy: {
    junctionBox: "IP68, 3 diodi",
    connector: { "MC4 lub kompatybilne": "MC4 o compatibili", "MC4 kompatybilne": "compatibili MC4" },
    opTemp: "da {min} a {max}",
    bySlug: {
      "as-7m108n-bhc": {
        segments: ["tetti residenziali", "piccole imprese", "installatori"],
        glass: "3,2 mm temperato con rivestimento AR (scheda: 'Front/Back Glass')",
      },
      "as-7m120n-hc": {
        segments: ["tetti residenziali", "tetti aziendali", "installatori"],
        glass: "3,2 mm temperato con rivestimento AR",
      },
      "as-7m120n-bhc": {
        segments: ["pensiline", "tetti piani", "piccoli impianti a terra", "installatori"],
        glass: "3,2 mm temperato con rivestimento AR; retro: backsheet trasparente",
      },
      "as-7m144n-hc": {
        segments: ["tetti industriali", "impianti a terra", "EPC"],
        glass: "3,2 mm temperato con rivestimento AR",
      },
      "as-8m132n-bhc": {
        segments: ["impianti fotovoltaici a terra", "EPC", "sviluppatori di rinnovabili", "agrivoltaico"],
        glass: "2 mm + 2 mm temperato (fronte con AR)",
      },
      "as-7m144nfl-hc-black": {
        segments: [
          "tetti con bassa portata (capannoni, magazzini, edifici agricoli)",
          "strutture soggette a vibrazioni e carichi dinamici (stadi, palazzetti, arene, industria) — previa valutazione dello strutturista",
          "tetti curvi e ad arco",
          "tetti con membrana — previa conferma della compatibilità dell'adesivo",
        ],
        frontCover: "polimero leggero ad alta trasparenza",
        mounting: "incollaggio, senza forature e senza struttura",
      },
      "as-7m132fl-hc": {
        segments: [
          "tetti con bassa portata (capannoni, magazzini, edifici agricoli)",
          "strutture soggette a vibrazioni e carichi dinamici (stadi, palazzetti, arene, industria) — previa valutazione dello strutturista",
          "tetti curvi e ad arco",
          "tetti con membrana — previa conferma della compatibilità dell'adesivo",
        ],
      },
    },
  },
  docTitles: {
    datasheet: "Scheda tecnica {model}",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0021.pdf": "Certificato TÜV SÜD Z2 093522 0021",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0023.pdf": "Certificato TÜV SÜD Z2 093522 0023",
    "/dokumenty/amerisolar-tuv-rheinland-pv-50674535-0001.pdf": "Certificato TÜV Rheinland PV 50674535 0001",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0025.pdf": "Certificato TÜV SÜD Z2 093522 0025",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0030.pdf": "Certificato TÜV SÜD Z2 093522 0030",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0022-ce.pdf":
      "Attestato di conformità CE TÜV SÜD N8A 093522 0022",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0024-ce.pdf":
      "Attestato di conformità CE TÜV SÜD N8A 093522 0024",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0027-ce.pdf":
      "Attestato di conformità CE TÜV SÜD N8A 093522 0027",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0031-ce.pdf":
      "Attestato di conformità CE TÜV SÜD N8A 093522 0031",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0018-anti-pid.pdf": "Resistenza al PID — TÜV SÜD Z2 093522 0018",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0019-mgla-solna.pdf":
      "Resistenza alla nebbia salina — TÜV SÜD Z2 093522 0019",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0020-amoniak.pdf":
      "Resistenza all'ammoniaca — TÜV SÜD Z2 093522 0020",
    "/dokumenty/amerisolar-iso-9001.pdf": "ISO 9001:2015 — gestione della qualità",
    "/dokumenty/amerisolar-iso-14001.pdf": "ISO 14001:2015 — gestione ambientale",
    "/dokumenty/amerisolar-iso-45001.pdf": "ISO 45001:2018 — salute e sicurezza sul lavoro",
    "/dokumenty/amerisolar-pv-cycle-wlochy-2026.pdf": "PV CYCLE Italia — conformità RAEE",
    "/dokumenty/amerisolar-pv-cycle-niemcy-weee-2026.pdf": "PV CYCLE Germania — conformità RAEE",
  },
  drawing: {
    lineupTitle: "Moduli Amerisolar in scala",
    flexSuffix: " (modulo flessibile)",
    flexHeading: "Moduli flessibili",
    thickness: "spessore {t} mm",
    dimTitle: "Disegno quotato {model}: {l} × {w} × {t} mm",
    profile: "profilo",
  },
  certBadges: {
    title: "Certificati e attestati",
    intro: "Prove di enti indipendenti",
    introValid: ", certificati validi fino al {date}",
    introTail: ". Tutti i documenti si scaricano senza registrazione.",
    more: "Vedi schede tecniche e certificati",
    ce: "Attestati CE",
    salt: "Nebbia salina",
    ammonia: "Ammoniaca",
    factory: "stabilimento di Nantong",
    weee: "riciclo, direttiva RAEE",
  },
  media: {
    farm: "Impianto fotovoltaico a terra in pianura agricola, file di moduli su strutture fisse nel sole del pomeriggio",
    warehouseWinter: "Tetto piano di un magazzino d'inverno con neve leggera e file di moduli fotovoltaici",
    archedHall: "Capannone ad arco con sottili moduli flessibili incollati sul tetto curvo",
    lightRoof:
      "Tetto leggero in lamiera grecata di un centro logistico con moduli flessibili incollati senza struttura",
  },
  home: {
    metaTitle: "Pannelli fotovoltaici all'ingrosso — Amerisolar",
    metaDescription:
      "Moduli fotovoltaici Amerisolar in quantità da container direttamente dal produttore: TOPCon 430–720 W, bifacciali, doppio vetro, flessibili.",
    eyebrow: "Quantità da container, direttamente dal produttore",
    h1: "Pannelli fotovoltaici Amerisolar all'ingrosso — container dal produttore",
    lead: (v) =>
      `Moduli TOPCon di tipo N da ${v.pMin} a ${v.pMax} W, bifacciali, doppio vetro e una linea flessibile da ${v.flexMm} mm. Per grossisti, trader e installatori che acquistano in quantità da container.`,
    bullets: (v) => [
      "Forniture direttamente dal produttore",
      `Container 40'HQ: ${v.hqPcsMin}–${v.hqPcsMax} moduli`,
      "Scheda tecnica e certificati per ogni modello",
      `Fino a ${v.glassWL} anni di garanzia sulla potenza`,
    ],
    facts: (v) => [
      { value: "dal 1993", label: "sul mercato — secondo il catalogo del produttore, California" },
      { value: "circa 11 GW", label: "di capacità produttiva secondo il produttore (2025)" },
      { value: `${v.marketMw} MW`, label: "di moduli forniti in Italia nel 2025 (secondo il catalogo)" },
      { value: v.effMax, label: "efficienza massima dei moduli in gamma" },
    ],
    lineupTitle: "Sette moduli, una sola scala",
    lineupText: (v) =>
      `Disegnati da dimensioni e numero di celle delle schede tecniche — dal compatto ${v.smallModel} per le abitazioni al ${v.farmModel} per gli impianti a terra.`,
    lineupCta: "Confronta tutti i modelli",
    directTitle: "Pannelli all'ingrosso direttamente dal produttore",
    directText:
      "L'ordine per container arriva direttamente al produttore dei moduli Amerisolar. Una filiera più corta significa un prezzo calcolato sull'intero lotto e documentazione direttamente dal produttore.",
    directCta: "Hai un progetto da alcune centinaia di kWp o più?",
    points: (v) => [
      {
        title: "Prezzo per container",
        text: "Quotiamo l'intero lotto — un container da 20' o 40'HQ — per la classe di potenza scelta, invece del prezzo per singolo pallet.",
      },
      {
        title: "Documentazione completa",
        text: "Schede tecniche con tabelle STC e NOCT, coefficienti di temperatura e carichi meccanici, oltre ai certificati per ogni modello.",
      },
      {
        title: "Una linea, tutti i segmenti",
        text: `Moduli da ${v.roofRange} per i tetti, da ${v.largeRange} per tetti industriali e impianti a terra, e una linea flessibile per tetti speciali.`,
      },
      {
        title: "Garanzia del produttore",
        text: `${v.glassWP} anni di garanzia sul prodotto e ${v.glassWL} anni di garanzia lineare sulla potenza per i moduli in vetro.`,
      },
    ],
    segmentsTitle: "Per grossisti, trader e installatori che acquistano grandi volumi",
    segments: (v) => [
      {
        title: "Grossisti e distributori di rinnovabili",
        value: `${v.hqPcsMin}–${v.hqPcsMax}`,
        valueLabel: "moduli per container 40'HQ, a seconda del modello",
        cta: "Chiedi le condizioni all'ingrosso",
        text: `L'intera linea da un'unica fonte — dai moduli per tetti a quelli per impianti a terra e flessibili. Schede tecniche e certificati per la rivendita, moduli su pallet da ${v.palletMin}–${v.palletMax} pezzi.`,
      },
      {
        title: "Trader e importatori",
        value: `${v.kwpMin}–${v.kwpMax} kWp`,
        valueLabel: "per container 40'HQ, a seconda del modello (calcolo)",
        cta: "Chiedi forniture su più container",
        text: "Acquisto per container direttamente dal produttore, senza grossisti intermedi. Specifiche, classi di potenza e condizioni di consegna si concordano per l'intero lotto.",
      },
      {
        title: "Installatori ed EPC",
        value: `${v.farmKwp} kWp`,
        valueLabel: `per container di moduli ${v.farmModel} ${v.farmMaxW} W (calcolo)`,
        cta: "Chiedi una fornitura per progetto",
        text: `Moduli da ${v.roofRange} per tetti aziendali e pensiline e da ${v.largeRange} per tetti industriali e impianti a terra. Un container è la scorta di un tipo di modulo per molti cantieri.`,
      },
    ],
    modelsTitle: "Moduli fotovoltaici in gamma",
    modelsText: (v) => `Efficienza fino a ${v.effMax}. Dati STC dalle schede tecniche.`,
    table: {
      model: "Modello",
      technology: "Tecnologia",
      power: "Potenza",
      effMax: "Efficienza max",
      mass: "Peso",
      warranty: "Garanzia",
      actions: "Scheda tecnica e richiesta",
    },
    techTitle: "TOPCon di tipo N, bifacciale, doppio vetro — cosa significa in pratica",
    tech: (v) => [
      {
        title: "Meno perdite con il caldo",
        text: `I moduli TOPCon in gamma hanno un coefficiente di temperatura della potenza di ${v.topconCoeff}%/°C. Per confronto, il modulo PERC ${v.percModel}: ${v.percCoeff}%/°C. Con la cella a 65 °C (40 °C sopra STC) la differenza è di circa ${v.heatDiff} punti percentuali di potenza (calcolo).`,
      },
      {
        title: "Celle dimezzate",
        text: "Tutti i moduli in vetro della gamma hanno celle tagliate a metà (half-cell). Una corrente minore in ogni metà significa minori perdite resistive e un minore effetto dell'ombreggiamento parziale sull'intero modulo.",
      },
      {
        title: "Potenza da entrambi i lati",
        text: `I moduli bifacciali raccolgono anche la luce riflessa dal suolo. Il ${v.farmModel} ha inoltre una struttura doppio vetro — vetro su entrambi i lati al posto del backsheet: ${v.farmGlass}.`,
      },
    ],
    bifCaption: (v) =>
      `Guadagno posteriore di un modulo bifacciale — esempio dalla scheda ${v.farmModel} (${v.bifBase} W)`,
    bifRowHeader: "Guadagno posteriore",
    bifRow: "Potenza totale",
    bifNote:
      "Il guadagno reale dipende dall'albedo del suolo (erba, ghiaia, membrana), dall'altezza di montaggio e dalla distanza tra le file.",
    logisticsTitle: "Quanti moduli e kWp in un container",
    logisticsText:
      "Pezzi secondo le schede tecniche. I kWp sono calcolati sulla classe di potenza più alta — nell'offerta calcoliamo sulla classe che sceglierai.",
    logisticsTable: { pallet: "Pallet", c20: "Container 20'", c40: "Container 40'HQ", kwp40: "kWp in 40'HQ" },
    farmBoxTitle: "Impianto da 1 MWp — quanti container?",
    farmBoxText: (v) =>
      `Con moduli ${v.farmModel} ${v.farmMaxW} W: ${v.farm1MwContainers} container 40'HQ (${v.farm1MwModules} moduli, calcolo).`,
    farmBoxStrong: (v) => `${v.farm1MwContainers} container 40'HQ`,
    farmBoxCta: "Chiedi una fornitura per impianto a terra",
    calcTitle: "Quanti container ti servono?",
    calcText:
      "Scegli il modulo e la classe di potenza, poi inserisci la potenza dell'impianto o il numero di container. Con un clic porti il risultato nella richiesta di preventivo.",
    stringTitle: "Voc in inverno e lunghezza della stringa",
    stringText1:
      "In una giornata fredda e soleggiata la tensione del modulo supera il valore di scheda. Per questo il numero di moduli per stringa si calcola alla temperatura minima della cella — qui −25 °C, valore di progetto diffuso nell'Europa centrale; il progettista usa il minimo del sito.",
    stringFormula: "Formula: Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).",
    stringExample: (v) => `Esempio: ${v.industrialModel} ${v.industrialMaxW} W`,
    stringRows: (v) => [
      { k: "Voc in STC", v: `${v.vocStc} V` },
      { k: "βVoc", v: `${v.betaVoc}%/°C` },
      { k: "Voc a −25 °C", v: `${v.vocCold} V`, strong: true },
      { k: "Moduli max per stringa, sistema 1500 V", v: v.str1500, strong: true },
      { k: "Moduli max per stringa, sistema 1000 V", v: v.str1000 },
    ],
    stringNote:
      "Calcolo indicativo. La lunghezza finale della stringa dipende anche dal range MPPT e dalla tensione massima di ingresso dell'inverter — li verifica il progettista.",
    flexTitle: "Il tetto non regge i pannelli? La struttura vibra? Esiste una soluzione",
    flexText:
      "I moduli flessibili Amerisolar si incollano direttamente sul manto di copertura — senza struttura di supporto e senza forature.",
    flexStats: (v) => [
      { k: "peso al m²", v: "circa 3 kg" },
      { k: "spessore", v: `${v.flexMm} mm` },
      { k: "forature nel tetto", v: "0" },
    ],
    flexUses: (v) => [
      {
        title: "Tetti con bassa portata",
        text: "Capannoni in lamiera grecata e pannelli sandwich, edifici agricoli, tetti datati senza riserva di portata.",
      },
      {
        title: "Strutture soggette a vibrazioni",
        text: "Stadi, palazzetti, arene, stabilimenti con macchinari e carroponti — peso ridotto, niente vetro né viti. Scelta previa valutazione dello strutturista dell'edificio.",
      },
      {
        title: "Tetti ad arco",
        text: `Raggio di curvatura ${v.bendRadius} m — il modulo segue la curva senza strutture complesse.`,
      },
    ],
    flexHonest: (v) =>
      `In tutta onestà: efficienza fino a ${v.flexEff} e garanzia ${v.flexWP}/${v.flexWL} anni — meno dei moduli in vetro. Questo modulo ha senso dove l'alternativa è nessun impianto o il rinforzo della struttura.`,
    flexCta: "Richiedi una valutazione preliminare dell'edificio",
    massCaption: "Peso del solo modulo per m² di superficie",
    massNote:
      "Dati delle schede tecniche. Nei sistemi in vetro si aggiunge il peso della struttura di supporto o della zavorra — dipende dal progetto, per questo non lo includiamo.",
    winterTitle: "Carichi di neve e vento nella scheda tecnica",
    winterText: (v) =>
      `Secondo le schede tecniche i moduli in vetro Amerisolar reggono un carico neve di ${v.snowPa} Pa e un carico vento di ${v.windPa} Pa, con temperatura di esercizio ${v.opTemp} °C. L'idoneità alla zona di neve e vento del sito è confermata dal progettista.`,
    europeTitle: "Amerisolar in Europa",
    europeText: (v) =>
      `Forniture di moduli nel 2025 secondo il catalogo del produttore. L'Italia, con ${v.marketMw} MW, è uno dei mercati europei del marchio.`,
    orderTitle: "Come ordinare un container di moduli",
    orderSteps: [
      {
        t: "Richiesta",
        d: "Modello, quantità in kWp o container, luogo e tempi di consegna — tramite modulo o email.",
      },
      {
        t: "Offerta",
        d: "Prezzo per la classe di potenza scelta, condizioni di consegna, schede tecniche e certificati.",
      },
      { t: "Ordine", d: "Conferma di specifiche, tempi e condizioni di pagamento." },
      { t: "Consegna", d: "Un container di moduli nel luogo e nei tempi concordati." },
    ],
    orderCta: "Inizia con una richiesta — bastano pochi minuti.",
    trustTitle: "Garanzie, norme e produttore",
    trustCta: "Scarica schede tecniche e certificati",
    trust: (v) => [
      {
        title: "Garanzie",
        text: `Moduli in vetro: ${v.glassWP} anni sul prodotto e ${v.glassWL} anni di garanzia lineare sulla potenza. Linea flessibile: ${v.flexWP} e ${v.flexWL} anni.`,
      },
      {
        title: "Norme e certificati",
        text: "Certificati TÜV SÜD e TÜV Rheinland (IEC 61215, IEC 61730), attestati CE, prove di resistenza a PID, nebbia salina e ammoniaca e certificazioni ISO 9001, 14001 e 45001 dello stabilimento. Per ogni certificato indichiamo l'esatta gamma di potenza coperta.",
      },
      {
        title: "Produttore",
        text: "Worldwide Energy and Manufacturing USA Co., Ltd. — secondo il catalogo opera dal 1993 (California), con il marchio Amerisolar dal 2007.",
      },
    ],
    faqTitle: "Domande sui pannelli fotovoltaici all'ingrosso",
    faqCta: "Fai una domanda nella richiesta",
    faq: (v) => [
      {
        question: "Posso acquistare i moduli Amerisolar direttamente dal produttore?",
        answer:
          "Sì. Forniamo quantità da container direttamente dal produttore — Worldwide Energy and Manufacturing USA Co., Ltd., titolare del marchio Amerisolar. Prezzo e condizioni di consegna sono indicati nell'offerta.",
      },
      {
        question: "Quanti kWp entrano in un container 40'HQ?",
        answer: `A seconda del modello da ${v.kwpMin} a ${v.kwpMax} kWp (calcolo: moduli per container secondo la scheda × classe di potenza più alta). Ad esempio ${v.farmModel}: ${v.farmPieces} pezzi, ${v.farmKwp} kWp.`,
      },
      {
        question: "Che differenza c'è tra TOPCon e PERC?",
        answer: `TOPCon è una cella di tipo N con contatto posteriore passivato. Nella nostra gamma si traduce, tra l'altro, in un coefficiente di temperatura della potenza più basso: ${v.topconCoeff}%/°C nei moduli TOPCon contro ${v.percCoeff}%/°C nel modulo PERC ${v.percModel} — con il caldo il modulo TOPCon perde meno potenza.`,
      },
      {
        question: "Conviene acquistare moduli bifacciali?",
        answer: `Su impianti a terra, pensiline e tetti piani con superficie chiara — di solito sì. La scheda ${v.farmModel} riporta un esempio: un modulo da ${v.bifBase} W con il 20% di guadagno posteriore dà ${v.bifGain20} W. Il guadagno reale dipende dall'albedo e dall'altezza di montaggio.`,
      },
      {
        question: "Che garanzie hanno i moduli?",
        answer: `Moduli in vetro: ${v.glassWP} anni di garanzia sul prodotto e ${v.glassWL} anni di garanzia lineare sulla potenza. Linea flessibile: ${v.flexWP} e ${v.flexWL} anni.`,
      },
      {
        question: "Che certificati hanno i moduli?",
        answer:
          "I moduli in gamma hanno certificati TÜV SÜD o TÜV Rheinland secondo IEC 61215 e IEC 61730 e attestati CE — ciascuno con una gamma di potenza definita, che indichiamo nella pagina delle schede tecniche. Lo stabilimento è certificato ISO 9001, ISO 14001 e ISO 45001. Tutti i documenti si scaricano senza registrazione.",
      },
      {
        question: "Cosa fare se il tetto non regge i pannelli tradizionali?",
        answer: `Valuta la linea flessibile: circa 3 kg/m², ${v.flexMm} mm di spessore, montaggio per incollaggio senza forature. La scelta per un edificio specifico richiede la valutazione di uno strutturista — inviaci una descrizione del tetto nella richiesta.`,
      },
      {
        question: "Avete un magazzino in Italia?",
        answer:
          "No. Ordini quantità da container direttamente dal produttore — così il prezzo riguarda l'intero lotto, senza costi di un magazzino intermedio. Condizioni e luogo di consegna si concordano nell'offerta.",
      },
      {
        question: "Qual è l'ordine minimo?",
        answer:
          "Vendiamo in quantità da container. La tabella sopra mostra quanti moduli e kWp entrano in un container da 20' e 40'HQ per ogni modello; il minimo esatto per il modello scelto è indicato nell'offerta.",
      },
      {
        question: "A chi vendete i moduli?",
        answer:
          "Ad aziende che acquistano in quantità da container: grossisti e distributori di rinnovabili, trader e importatori, installatori ed EPC con grandi volumi.",
      },
      {
        question: "Qual è il prezzo dei pannelli?",
        answer:
          "Prezzo su richiesta. Dipende da modello e classe di potenza, numero di container, luogo e tempi di consegna. Invia una richiesta — risponderemo con un'offerta concreta.",
      },
    ],
  },
  catalog: {
    metaTitle: "Pannelli fotovoltaici Amerisolar 430–720 W — catalogo",
    metaDescription:
      "Catalogo moduli Amerisolar: TOPCon tipo N, bifacciali, doppio vetro e flessibili. Dati completi delle schede, imballo e kWp per container.",
    breadcrumb: "I nostri moduli",
    h1: "I nostri moduli — pannelli fotovoltaici Amerisolar",
    lead: "{count} modelli da {min} a {max} W. Per ogni modulo scarichi la scheda tecnica PDF — subito, senza registrazione e senza email.",
    intro: {
      glass:
        "Moduli con vetro temperato e cornice: per tetti residenziali e aziendali, pensiline, tetti industriali e impianti a terra.",
      flexible:
        "Moduli da 2 mm di spessore montati per incollaggio, senza struttura e senza forature — per tetti con portata limitata e tetti ad arco.",
    },
    stat: { power: "potenza", eff: "efficienza max", dims: "dimensioni", hq: "40'HQ" },
    hqValue: "{pcs} pz, {kwp} kWp",
    note: "kWp per container: calcolo dal numero di pezzi secondo la scheda e dalla classe di potenza più alta.",
  },
  product: {
    meta: (v) => `${v.model} ${v.minW}–${v.maxW} W — ${v.shortKind}`,
    description: (v) =>
      `${v.model}: ${v.kind} ${v.minW}–${v.maxW} W, efficienza fino a ${v.eff}, ${v.weight} kg.`,
    descriptionTail: (v) =>
      ` Tabelle STC/NOCT, ${v.pcsHq} pz per 40'HQ, garanzia ${v.warrantyP}/${v.warrantyL} anni.`,
    benefit: {
      eff: (v) => `efficienza max, ${v.cells} celle, ${v.powerRange}`,
      flexMass: (v) => `${v.weight} kg, spessore ${v.thickness} mm`,
      bending: "raggio minimo di curvatura — tetti ad arco",
      snow: (v) => `carico neve, vento ${v.windPa} Pa`,
      bif: (v) => `da un modulo da ${v.bifBase} W con il 20% di guadagno posteriore (esempio di scheda)`,
      warranty: "garanzia prodotto / lineare sulla potenza",
    },
    faq: {
      hq: (v) => ({
        question: `Quanti moduli ${v.model} entrano in un container 40'HQ?`,
        answer: `Secondo la scheda tecnica ${v.pcsHq} pezzi. Con la classe ${v.maxW} W sono ${v.kwpHq} kWp (calcolo: pezzi × potenza del modulo). Un container da 20' contiene ${v.pcs20} pezzi.`,
      }),
      pallet: (v) => ({
        question: "Quanti moduli ci sono su un pallet?",
        answer: `${v.pcsPallet} pezzi, cioè ${v.kwpPallet} kWp con la classe ${v.maxW} W.`,
      }),
      voc: (v) => ({
        question: "Qual è la Voc del modulo in inverno?",
        answer: `La Voc in STC per la classe ${v.maxW} W è ${v.vocStc} V e il coefficiente di temperatura della Voc è ${v.betaVoc}%/°C. Con la cella a −25 °C la tensione sale a circa ${v.vocCold} V (calcolo indicativo). Il numero di moduli per stringa si sceglie in modo da non superare la tensione massima dell'inverter e del sistema (${v.maxSys} V DC).`,
      }),
      warranty: (v) => ({
        question: "Qual è la garanzia?",
        answer: `${v.warrantyP} anni di garanzia sul prodotto e ${v.warrantyL} anni di garanzia lineare sulla potenza.`,
      }),
      certs: (v) => ({ question: "Che certificati ha il modulo?", answer: v.certs }),
      dims: (v) => ({
        question: "Quanto pesa il modulo e che dimensioni ha?",
        answer: `${v.dims} mm, ${v.weight} kg, cioè ${v.arealMass} kg/m² (solo il modulo${v.glassSuffix}).`,
      }),
      glassSuffix: ", senza struttura di supporto",
      bif: (v) => ({
        question: "Quanto rende il lato posteriore di un modulo bifacciale?",
        answer: `La scheda riporta un esempio per un modulo da ${v.bifBase} W: con il 10% di guadagno la potenza sale a ${v.bif10} W, con il 20% a ${v.bif20} W, con il 30% a ${v.bif30} W. Il guadagno reale dipende da albedo, altezza e distanza tra le file.`,
      }),
      flex: {
        question:
          "Il modulo è adatto a una struttura soggetta a vibrazioni, ad esempio uno stadio o un capannone con carroponte?",
        answer:
          "Peso ridotto, assenza di vetro e montaggio senza forature sono vantaggi concreti su strutture che si muovono. Il produttore però non ha ancora fornito risultati di prove a carico dinamico, quindi la scelta per un edificio specifico richiede la valutazione del suo strutturista.",
      },
      price: {
        question: "Qual è il prezzo?",
        answer:
          "Prezzo su richiesta. Dipende dalla classe di potenza, dal numero di container, dal luogo e dai tempi di consegna.",
      },
    },
    heroNote: (v) =>
      `Forniture in quantità da container direttamente dal produttore: ${v.pcsHq} pz per container 40'HQ.`,
    usesTitle: "Applicazioni",
    flexNote: (v) =>
      `Montaggio per incollaggio, senza forature e senza struttura. Efficienza più bassa e garanzia più breve (${v.warrantyP}/${v.warrantyL} anni) rispetto ai moduli in vetro — questo modulo ha senso dove l'alternativa è nessun impianto o il rinforzo della struttura del tetto. I moduli sono posati in piano o sulla curva, quindi la resa dipende dall'orientamento del tetto. Supporti ammessi e adesivo vengono confermati prima dell'offerta.`,
    electricalTitle: "Dati elettrici",
    stcCaption: "Condizioni STC (1000 W/m², 25 °C, AM1,5)",
    rows: {
      pmax: "Potenza massima Pmax",
      eff: "Efficienza del modulo",
      voc: "Tensione a circuito aperto Voc",
      isc: "Corrente di cortocircuito Isc",
      vmp: "Tensione alla potenza massima Vmp",
      imp: "Corrente alla potenza massima Imp",
    },
    tolerance: "Tolleranza Pmax secondo la scheda tecnica del produttore.",
    noctCaption: "Condizioni NOCT (800 W/m², ambiente 20 °C, vento 1 m/s)",
    noctMissing:
      "I dati NOCT di questo modello saranno pubblicati dopo la conferma della scheda aggiornata da parte del produttore.",
    tempCaption: "Coefficienti di temperatura",
    value: "Valore",
    bifCaption: "Guadagno posteriore — esempio di scheda per {w} W",
    bifRow: "Potenza totale",
    bifNote: "Il guadagno reale dipende dall'albedo, dall'altezza di montaggio e dalla distanza tra le file.",
    mechCaption: "Dati meccanici e condizioni di esercizio",
    param: "Parametro",
    mech: {
      dims: "Dimensioni",
      mass: "Peso",
      arealMass: "Peso al m² (solo modulo)",
      cells: "Celle",
      glass: "Vetro",
      frontCover: "Copertura frontale",
      bending: "Raggio di curvatura",
      mounting: "Montaggio",
      snow: "Carico — neve",
      wind: "Carico — vento",
      junctionBox: "Scatola di giunzione",
      connector: "Connettori",
      maxSys: "Tensione max di sistema",
      fuse: "Fusibile in serie max",
      fire: "Classe di reazione al fuoco",
      safety: "Classe di protezione",
      opTemp: "Temperatura di esercizio",
    },
    packCaption: "Imballo e potenza per unità di trasporto",
    unit: "Unità",
    pcsCol: "Pezzi",
    pack: { pallet: "Pallet", c20: "Container 20'", c40: "Container 40'HQ" },
    packNote: "Pezzi secondo la scheda tecnica; i kWp sono calcolati sulla classe di potenza più alta.",
    warrantyTitle: "Garanzie e certificati",
    warrantyText: (v) =>
      `${v.warrantyP} anni di garanzia sul prodotto, ${v.warrantyL} anni di garanzia lineare sulla potenza.`,
    allDocs: "Tutte le schede tecniche e i certificati",
    compareTitle: "Confronto con i modelli vicini",
    compareCta: "Ti serve il {model} in quantità da container?",
    compare: {
      technology: "Tecnologia",
      power: "Potenza",
      eff: "Efficienza max",
      dims: "Dimensioni",
      mass: "Peso",
      bifacial: "Bifacciale",
      warranty: "Garanzia",
      pcsHq: "Pezzi per 40'HQ",
    },
    faqTitle: "Domande sul {model}",
    ld: {
      technology: "Tecnologia",
      power: "Potenza massima (STC)",
      eff: "Efficienza massima",
      cells: "Numero di celle",
      bifacial: "Bifacciale",
      coeff: "Coefficiente di temperatura Pmax",
      warrantyP: "Garanzia sul prodotto",
      warrantyL: "Garanzia lineare sulla potenza",
      years: "anni",
    },
  },
  docs: {
    metaTitle: "Schede tecniche e certificati dei moduli Amerisolar",
    metaDescription:
      "Schede tecniche PDF e certificati dei moduli Amerisolar da scaricare: TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, nebbia salina, ISO, RAEE.",
    h1: "Schede tecniche e certificati",
    lead: "Documentazione del produttore da scaricare senza registrazione. Per ogni modulo vedi la scheda tecnica e i certificati che lo coprono — con l'esatta gamma di potenza.",
    toc: "Indice",
    datasheetsAnchor: "Schede tecniche",
    byModuleTitle: "Schede tecniche e certificati per modulo",
    requestDatasheet: "Richiedi la scheda tecnica",
    certsOnRequest: "I certificati di questo modello vengono forniti con l'offerta.",
    sections: {
      product: {
        title: "Certificati dei moduli IEC 61215 e IEC 61730",
        intro:
          "Certificazione di tipo del modulo da parte di un ente indipendente: durata e affidabilità (IEC 61215) e sicurezza elettrica (IEC 61730). Per ogni certificato indichiamo quali classi di potenza della nostra gamma copre.",
      },
      ce: {
        title: "Attestati di conformità CE",
        intro:
          "Attestati TÜV SÜD di conformità alla EN IEC 61730 — base per la marcatura CE dei moduli sul mercato UE.",
      },
      tests: {
        title: "Prove di resistenza",
        intro:
          "Prove aggiuntive TÜV SÜD: resistenza al degrado PID, alla nebbia salina (impianti costieri) e all'ammoniaca (edifici agricoli).",
      },
      iso: {
        title: "Sistemi di gestione dello stabilimento",
        intro: "Certificati ISO dello stabilimento di moduli di Nantong (Cina).",
      },
      weee: {
        title: "Riciclo e conformità RAEE",
        intro:
          "Iscrizione del produttore a PV CYCLE — ritiro e riciclo dei moduli a fine vita secondo la direttiva RAEE.",
      },
    },
    card: {
      body: "Ente",
      number: "Numero",
      holder: "Titolare",
      standards: "Norme",
      issued: "Rilasciato",
      validUntil: "Valido fino al",
      modules: "Moduli della nostra gamma",
      download: "Scarica il PDF",
    },
  },
  rfqPage: {
    metaTitle: "Preventivo moduli FV in container | Amerisolar",
    metaDescription:
      "Chiedi il prezzo per container dei moduli Amerisolar direttamente dal produttore. Indica modello, quantità in kWp o container, luogo e tempi.",
    h1: "Chiedi il prezzo per container",
    lead: "Forniamo i moduli Amerisolar in quantità da container, direttamente dal produttore. Più descrivi con precisione l'esigenza — modello, quantità, luogo e tempi di consegna — più velocemente prepariamo un'offerta concreta.",
    emailBoxStrong: "Preferisci l'email?",
    emailBoxText: "Scrivici subito, senza modulo.",
    asideOfferTitle: "Cosa contiene l'offerta",
    asideOffer: [
      "Prezzo per la classe di potenza e la quantità scelte",
      "Condizioni e tempi di consegna",
      "Schede tecniche e certificati dei modelli scelti",
    ],
    asideContainerTitle: "Quanto è un container?",
    asideContainer:
      "Un container 40'HQ contiene da 558 a 1.260 moduli a seconda del modello — da circa 400 a oltre 720 kWp. Non conosci la quantità esatta? Indica la potenza approssimativa dell'impianto.",
  },
  form: {
    honeypot: "Sito web",
    s1: "1. Chi sei",
    s2: "2. Moduli e quantità",
    s3: "3. Consegna e tempi",
    s4: "4. Contatti",
    types: {
      distributor: "Grossista / distributore di rinnovabili",
      trader: "Trader / importatore",
      installer: "Azienda di installazione",
      epc: "EPC / sviluppatore di impianti a terra",
      business: "Azienda — edificio proprio",
    },
    timelines: {
      asap: "Il prima possibile",
      "1-3m": "1–3 mesi",
      "3-6m": "3–6 mesi",
      "6m+": "Oltre 6 mesi",
      tender: "Gara / progetto in preparazione",
    },
    qtyKwp: "Quantità in kWp",
    qtyKwpPh: "es. 400",
    qtyContainers: "oppure numero di container",
    qtyContainersPh: "es. 1",
    delivery: "Luogo di consegna",
    deliveryPh: "città o CAP",
    timeline: "Tempi",
    choose: "Seleziona",
    name: "Nome e cognome *",
    email: "Email *",
    phone: "Telefono",
    company: "Azienda",
    vatId: "Partita IVA",
    message: "Messaggio",
    messagePh: "es. classe di potenza, tipo di progetto, documenti richiesti",
    consent: "* Acconsento a essere contattato in merito a questa richiesta.",
    consentAdmin: "Il titolare del trattamento dei dati è TODO(klient): ragione sociale.",
    marketing:
      "Desidero ricevere informazioni sulla disponibilità dei moduli e sulle nuove forniture (facoltativo).",
    submit: "Invia la richiesta",
    sending: "Invio in corso…",
    okTitle: "Richiesta inviata",
    okText: "Grazie. Risponderemo all'indirizzo email indicato con un'offerta o con domande di chiarimento.",
    okUrgent: "Per urgenze scrivi a",
    errors: {
      type: "Indica chi sei.",
      number: "Inserisci un numero maggiore di zero.",
      vatId: "Inserisci una partita IVA valida.",
      name: "Inserisci nome e cognome.",
      email: "Inserisci un indirizzo email valido.",
      consent: "Il consenso al contatto è necessario per poterti rispondere.",
      qty: "Indica la quantità in kWp o il numero di container.",
      fix: "Correggi i campi evidenziati.",
      site: "Sito sconosciuto.",
      spam: "Il controllo antispam non è riuscito. Ricarica la pagina e riprova.",
      rate: "Da questo indirizzo sono già state inviate diverse richieste. Riprova tra mezz'ora.",
      failed: "Non è stato possibile inviare la richiesta.",
      fallbackEmail: "Scrivi direttamente a {email}.",
      fallback: "Riprova più tardi.",
    },
  },
  calc: {
    s1: "1. Scegli il modulo",
    s2: "2. Classe di potenza",
    s3: "3. Cosa conosci?",
    minNote: "Vendiamo in quantità da container — il minimo è un container.",
    modePower: "Potenza dell'impianto",
    modeContainers: "Numero di container",
    power: "Potenza dell'impianto",
    powerAria: "Potenza dell'impianto in MWp",
    oneContainer: "{mw} MWp (1 container)",
    containers: "Numero di container 40'HQ",
    containersAria: "Numero di container",
    need: "Ti servono",
    chosen: "Selezionati",
    containerForms: { one: "container", other: "container" } as Plural,
    powerLabel: "Potenza",
    modules: "Moduli",
    perModule: "pz da {w} W",
    lastFill:
      "L'ultimo container è pieno al {pct}% — scegli la potenza per usare container completi o aggiungi moduli.",
    quote: {
      one: "Chiedi il preventivo per {n} container",
      other: "Chiedi il preventivo per {n} container",
    } as Plural,
    datasheet: "Scheda tecnica PDF",
    note: "Calcolo indicativo: {pcs} moduli per container 40'HQ secondo la scheda{careful}, cioè {kwp} kWp per container a {w} W. Quantità esatta e condizioni di consegna sono indicate nell'offerta.",
    careful: " (calcoliamo prudenzialmente su {min})",
    flexible: "modulo flessibile",
    glass: "modulo in vetro",
  },
};

export default it;
