// apps/web/messages/en.ts
// English — amerisolar.eu (pan-European site). Market-specific copy refers to Europe, not one country.
// Machine-assisted translation: native review required before go-live (CLAUDE.md §5.2).
import type { Plural } from "@/lib/i18n";
import type { Messages } from "./pl";

const en: Messages = {
  common: {
    home: "Home",
    pieces: "pcs",
    years: "{p}/{l} years",
    yes: "yes",
    no: "no",
    datasheetPdf: "Datasheet PDF",
    downloadDatasheet: "Download datasheet PDF",
    technicalParams: "Technical data",
    aiCaption: "Illustrative visualisation",
    askContainerPrice: "Request a container price",
    askPrice: "Request a price",
    seeModules: "See the modules",
    notFoundTitle: "Page not found",
    notFoundText: "The address may have changed or the page is not published yet.",
    notFoundBack: "Go to the home page",
    pdf: "PDF",
    breadcrumbs: "Breadcrumb",
  },
  routes: {
    home: "Home",
    catalog: "Our modules",
    installers: "For installers",
    farms: "Solar farms",
    special: "Special applications",
    wholesale: "Wholesale and distribution",
    tools: "Tools",
    docs: "Datasheets and certificates",
    about: "About Amerisolar",
    rfq: "Request a quote",
    contact: "Contact",
    privacy: "Privacy policy",
  },
  header: {
    skip: "Skip to content",
    logoAria: "Amerisolar — home",
    mainNav: "Main menu",
    menu: "Menu",
    switcher: "Country and language",
  },
  footer: {
    modules: "Modules",
    service: "Site",
    note: "Module data comes from the manufacturer's datasheets. Prices on request.",
  },
  cta: {
    titleModel: "{model} price in container quantities",
    title: "A container of modules direct from the manufacturer",
    text: "Tell us the model, quantity in kWp or containers, delivery location and timing. We will prepare an offer with a price for the power class you choose and the delivery terms.",
    noForm: "Prefer not to fill in a form? Email us directly at",
  },
  email: {
    prefix: "or email us directly:",
    prefixShort: "or email:",
    prefixOr: "or email:",
    button: "Email: {email}",
    mobile: "Send an email",
    mobileForm: "Request a quote",
    tableLink: "Email",
    tableSr: "about {model}",
    subjectModel: "Price request: {model}",
    subject: "Container price request",
    subjectAssessment: "Preliminary site assessment — flexible modules",
    subjectQuestion: "Question about Amerisolar modules",
    subjectDatasheet: "Datasheet {model}",
    body: {
      greeting: "Hello,",
      request: "please send me an offer for {model} modules.",
      qty: "Quantity (kWp or number of containers): {qty}",
      qtyContainers: "{n} × 40'HQ",
      qtyKwp: " (approx. {kwp} kWp)",
      delivery: "Delivery location: ",
      term: "Timing: ",
      company: "Company / VAT number: ",
      phone: "Phone: ",
      bye: "Kind regards",
    },
  },
  catalogLib: {
    group: { glass: "TOPCon glass modules", flexible: "Flexible line" },
    kind: {
      flexTopcon: "flexible TOPCon module",
      flexPerc: "flexible PERC module",
      doubleGlass: "bifacial TOPCon module, double glass",
      bifacial: "bifacial TOPCon module",
      topcon: "N-type TOPCon module",
    },
    shortKind: {
      flex: "flexible module",
      doubleGlass: "TOPCon double glass",
      bifacial: "bifacial TOPCon",
      topcon: "TOPCon module",
    },
    tech: {
      flexTopcon: "TOPCon, flexible",
      flexPerc: "PERC, flexible",
      doubleGlass: "TOPCon, double glass",
      topcon: "N-type TOPCon",
    },
    segment: {
      roof: "Residential and commercial roofs, carports",
      large: "Industrial roofs and solar farms",
      flex: "Flexible line — special roofs",
    },
    cert: {
      number: "{body}, no. {number}",
      validUntil: "valid until {date}",
      onDatasheet: "{name} (per datasheet)",
      fullRange: "full range offered, {range}",
      partial: "classes {covered} (offered {offer})",
    },
  },
  productCopy: {
    junctionBox: "IP68, 3 diodes",
    connector: { "MC4 lub kompatybilne": "MC4 or compatible", "MC4 kompatybilne": "MC4 compatible" },
    opTemp: "{min} to {max}",
    bySlug: {
      "as-7m108n-bhc": {
        segments: ["residential roofs", "small businesses", "installers"],
        glass: "3.2 mm tempered with AR coating (datasheet: 'Front/Back Glass')",
      },
      "as-7m120n-hc": {
        segments: ["residential roofs", "commercial roofs", "installers"],
        glass: "3.2 mm tempered with AR coating",
      },
      "as-7m120n-bhc": {
        segments: ["carports", "flat roofs", "small solar farms", "installers"],
        glass: "3.2 mm tempered with AR coating; rear: transparent backsheet",
      },
      "as-7m144n-hc": {
        segments: ["industrial roofs", "solar farms", "EPC contractors"],
        glass: "3.2 mm tempered with AR coating",
      },
      "as-8m132n-bhc": {
        segments: ["solar farms", "EPC contractors", "renewable energy developers", "agrivoltaics"],
        glass: "2 mm + 2 mm tempered (AR-coated front)",
      },
      "as-7m144nfl-hc-black": {
        segments: [
          "roofs with low load capacity (halls, warehouses, agricultural buildings)",
          "structures with vibration and dynamic loads (stadiums, sports halls, arenas, industry) — after assessment by a structural engineer",
          "arched and curved roofs",
          "membrane roofs — once adhesive compatibility is confirmed",
        ],
        frontCover: "lightweight, highly transparent polymer",
        mounting: "bonded with adhesive, no drilling and no mounting structure",
      },
      "as-7m132fl-hc": {
        segments: [
          "roofs with low load capacity (halls, warehouses, agricultural buildings)",
          "structures with vibration and dynamic loads (stadiums, sports halls, arenas, industry) — after assessment by a structural engineer",
          "arched and curved roofs",
          "membrane roofs — once adhesive compatibility is confirmed",
        ],
      },
    },
  },
  docTitles: {
    datasheet: "Datasheet {model}",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0021.pdf": "TÜV SÜD certificate Z2 093522 0021",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0023.pdf": "TÜV SÜD certificate Z2 093522 0023",
    "/dokumenty/amerisolar-tuv-rheinland-pv-50674535-0001.pdf": "TÜV Rheinland certificate PV 50674535 0001",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0025.pdf": "TÜV SÜD certificate Z2 093522 0025",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0030.pdf": "TÜV SÜD certificate Z2 093522 0030",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0022-ce.pdf": "CE attestation TÜV SÜD N8A 093522 0022",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0024-ce.pdf": "CE attestation TÜV SÜD N8A 093522 0024",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0027-ce.pdf": "CE attestation TÜV SÜD N8A 093522 0027",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0031-ce.pdf": "CE attestation TÜV SÜD N8A 093522 0031",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0018-anti-pid.pdf": "PID resistance — TÜV SÜD Z2 093522 0018",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0019-mgla-solna.pdf":
      "Salt mist resistance — TÜV SÜD Z2 093522 0019",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0020-amoniak.pdf": "Ammonia resistance — TÜV SÜD Z2 093522 0020",
    "/dokumenty/amerisolar-iso-9001.pdf": "ISO 9001:2015 — quality management",
    "/dokumenty/amerisolar-iso-14001.pdf": "ISO 14001:2015 — environmental management",
    "/dokumenty/amerisolar-iso-45001.pdf": "ISO 45001:2018 — occupational health and safety",
    "/dokumenty/amerisolar-pv-cycle-wlochy-2026.pdf": "PV CYCLE Italy — WEEE compliance",
    "/dokumenty/amerisolar-pv-cycle-niemcy-weee-2026.pdf": "PV CYCLE Germany — WEEE compliance",
  },
  drawing: {
    lineupTitle: "Amerisolar modules to scale",
    flexSuffix: " (flexible module)",
    flexHeading: "Flexible modules",
    thickness: "thickness {t} mm",
    dimTitle: "Dimension drawing {model}: {l} × {w} × {t} mm",
    profile: "profile",
  },
  certBadges: {
    title: "Certificates and attestations",
    intro: "Tested by independent bodies",
    introValid: ", certificates valid up to {date}",
    introTail: ". Download every document without registering.",
    more: "See datasheets and certificates",
    ce: "CE attestations",
    salt: "Salt mist",
    ammonia: "Ammonia",
    factory: "Nantong factory",
    weee: "recycling, WEEE directive",
  },
  media: {
    farm: "Ground-mounted solar farm on flat farmland, rows of modules on fixed racks in afternoon sun",
    warehouseWinter: "Flat warehouse roof in winter with light snow and rows of solar modules",
    archedHall: "Arched hall with thin flexible modules bonded to the curved roof",
    lightRoof:
      "Lightweight logistics hall roof in trapezoidal sheet with flexible modules bonded on without racks",
  },
  home: {
    metaTitle: "Wholesale solar panels from the manufacturer — Amerisolar",
    metaDescription:
      "Amerisolar solar modules in container quantities direct from the manufacturer: TOPCon 430–720 W, bifacial, double glass, flexible. Request a price.",
    eyebrow: "Container quantities, direct from the manufacturer",
    h1: "Amerisolar solar panels wholesale — containers direct from the manufacturer",
    lead: (v) =>
      `N-type TOPCon modules from ${v.pMin} to ${v.pMax} W, bifacial, double glass and a ${v.flexMm} mm flexible line. For wholesalers, traders and installation companies buying in container quantities.`,
    bullets: (v) => [
      "Shipments direct from the manufacturer",
      `40'HQ container: ${v.hqPcsMin}–${v.hqPcsMax} modules`,
      "Datasheet and certificates for every model",
      `Up to ${v.glassWL} years power warranty`,
    ],
    facts: (v) => [
      { value: "since 1993", label: "in business — per the manufacturer's catalogue, California" },
      { value: "approx. 11 GW", label: "production capacity according to the manufacturer (2025)" },
      {
        value: `${v.marketMw} MW`,
        label: "of modules delivered to ten European markets in 2025 (per catalogue)",
      },
      { value: v.effMax, label: "maximum module efficiency in our range" },
    ],
    lineupTitle: "Seven modules, one scale",
    lineupText: (v) =>
      `Drawn from the dimensions and cell counts in the datasheets — from the compact ${v.smallModel} for homes to the ${v.farmModel} for solar farms.`,
    lineupCta: "Compare all models",
    directTitle: "Wholesale panel quantities direct from the manufacturer",
    directText:
      "Your container order goes straight to the manufacturer of Amerisolar modules. A shorter supply chain means a price calculated for the whole batch and documentation direct from the manufacturer.",
    directCta: "Planning a project of several hundred kWp or more?",
    points: (v) => [
      {
        title: "Container pricing",
        text: "We price the whole batch — a 20' or 40'HQ container — for the power class you choose, instead of pricing individual pallets.",
      },
      {
        title: "Complete documentation",
        text: "Datasheets with STC and NOCT tables, temperature coefficients and mechanical loads, plus certificates for every model.",
      },
      {
        title: "One line, every segment",
        text: `${v.roofRange} modules for roofs, ${v.largeRange} for industrial roofs and solar farms, plus a flexible line for special roofs.`,
      },
      {
        title: "Manufacturer's warranty",
        text: `${v.glassWP} years product warranty and ${v.glassWL} years linear power warranty on the glass modules.`,
      },
    ],
    segmentsTitle: "For wholesalers, traders and installers buying in volume",
    segments: (v) => [
      {
        title: "Wholesalers and renewable energy distributors",
        value: `${v.hqPcsMin}–${v.hqPcsMax}`,
        valueLabel: "modules per 40'HQ container, depending on the model",
        cta: "Ask about wholesale terms",
        text: `The full line from one source — from rooftop to utility-scale and flexible modules. Datasheets and certificates for resale, modules packed on pallets of ${v.palletMin}–${v.palletMax}.`,
      },
      {
        title: "Traders and importers",
        value: `${v.kwpMin}–${v.kwpMax} kWp`,
        valueLabel: "per 40'HQ container, depending on the model (calculated)",
        cta: "Ask about multi-container shipments",
        text: "Container purchasing direct from the manufacturer, without an intermediate wholesaler. Specification, power classes and delivery terms are agreed for the whole batch.",
      },
      {
        title: "Installers and EPC contractors",
        value: `${v.farmKwp} kWp`,
        valueLabel: `per container of ${v.farmModel} ${v.farmMaxW} W modules (calculated)`,
        cta: "Ask about project supply",
        text: `${v.roofRange} modules for commercial roofs and carports, and ${v.largeRange} for industrial roofs and solar farms. One container is stock of a single module type for many projects.`,
      },
    ],
    modelsTitle: "Solar modules in our range",
    modelsText: (v) => `Efficiency up to ${v.effMax}. STC data from the datasheets.`,
    table: {
      model: "Model",
      technology: "Technology",
      power: "Power",
      effMax: "Max. efficiency",
      mass: "Weight",
      warranty: "Warranty",
      actions: "Datasheet and enquiry",
    },
    techTitle: "N-type TOPCon, bifacial, double glass — what it means in practice",
    tech: (v) => [
      {
        title: "Lower losses in the heat",
        text: `The TOPCon modules in our range have a power temperature coefficient of ${v.topconCoeff}%/°C. For comparison, the PERC module ${v.percModel}: ${v.percCoeff}%/°C. With the cell at 65 °C (40 °C above STC) that is a difference of about ${v.heatDiff} percentage points of power (calculated).`,
      },
      {
        title: "Half-cut cells",
        text: "All glass modules in our range use half-cut cells. Lower current in each half means lower resistive losses and less impact of partial shading on the whole module.",
      },
      {
        title: "Power from both sides",
        text: `Bifacial modules also collect light reflected from the ground. The ${v.farmModel} also has a double-glass build — glass on both sides instead of a backsheet: ${v.farmGlass}.`,
      },
    ],
    bifCaption: (v) =>
      `Rear-side gain of a bifacial module — example from the ${v.farmModel} datasheet (${v.bifBase} W)`,
    bifRowHeader: "Rear gain",
    bifRow: "Total power",
    bifNote:
      "The actual gain depends on ground albedo (grass, gravel, roof membrane), mounting height and row spacing.",
    logisticsTitle: "Modules and kWp per container",
    logisticsText:
      "Piece counts per the datasheets. kWp is calculated for the highest power class — the offer is based on the class you choose.",
    logisticsTable: {
      pallet: "Pallet",
      c20: "20' container",
      c40: "40'HQ container",
      kwp40: "kWp per 40'HQ",
    },
    farmBoxTitle: "A 1 MWp farm — how many containers?",
    farmBoxText: (v) =>
      `With ${v.farmModel} ${v.farmMaxW} W modules: ${v.farm1MwContainers} × 40'HQ containers (${v.farm1MwModules} modules, calculated).`,
    farmBoxStrong: (v) => `${v.farm1MwContainers} × 40'HQ containers`,
    farmBoxCta: "Ask about supply for a solar farm",
    calcTitle: "How many containers do you need?",
    calcText:
      "Choose a module and power class, then enter the plant size or the number of containers. Send the result to a quote request in one click.",
    stringTitle: "Winter Voc and string length",
    stringText1:
      "On a frosty, sunny day the module voltage rises above the datasheet value. That is why the number of modules per string is calculated for the lowest cell temperature — here −25 °C, a common design value in Central Europe; your designer uses the local minimum for the site.",
    stringFormula: "Formula: Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).",
    stringExample: (v) => `Example: ${v.industrialModel} ${v.industrialMaxW} W`,
    stringRows: (v) => [
      { k: "Voc at STC", v: `${v.vocStc} V` },
      { k: "βVoc", v: `${v.betaVoc}%/°C` },
      { k: "Voc at −25 °C", v: `${v.vocCold} V`, strong: true },
      { k: "Max. modules per string, 1500 V system", v: v.str1500, strong: true },
      { k: "Max. modules per string, 1000 V system", v: v.str1000 },
    ],
    stringNote:
      "Indicative calculation. The final string length also depends on the inverter's MPPT range and maximum input voltage — checked by the system designer.",
    flexTitle: "Roof can't carry panels? Structure moves? There is a solution",
    flexText:
      "Amerisolar flexible modules are bonded directly to the roof covering — no mounting structure and no drilling.",
    flexStats: (v) => [
      { k: "weight per m²", v: "approx. 3 kg" },
      { k: "thickness", v: `${v.flexMm} mm` },
      { k: "holes in the roof", v: "0" },
    ],
    flexUses: (v) => [
      {
        title: "Roofs with low load capacity",
        text: "Halls clad in trapezoidal sheet and sandwich panels, agricultural buildings, older roofs with no spare load capacity.",
      },
      {
        title: "Structures with vibration",
        text: "Stadiums, sports halls, arenas, plants with machinery and cranes — low weight, no glass and no bolts. Selection after assessment by the building's structural engineer.",
      },
      {
        title: "Arched roofs",
        text: `Bending radius ${v.bendRadius} m — the module follows the curve without a complex mounting structure.`,
      },
    ],
    flexHonest: (v) =>
      `To be fair: efficiency up to ${v.flexEff} and a ${v.flexWP}/${v.flexWL}-year warranty — less than glass modules. This module makes sense where the alternative is no installation at all or reinforcing the structure.`,
    flexCta: "Request a preliminary site assessment",
    massCaption: "Module weight per m² of area",
    massNote:
      "Datasheet figures. Glass systems also add the weight of the mounting structure or ballast — project-dependent, so it is not included here.",
    winterTitle: "Snow and wind loads in the datasheet",
    winterText: (v) =>
      `Amerisolar glass modules are rated in their datasheets for ${v.snowPa} Pa snow load and ${v.windPa} Pa wind load, with an operating temperature range of ${v.opTemp} °C. Suitability for the site's snow and wind zone is confirmed by the system designer.`,
    europeTitle: "Amerisolar in Europe",
    europeText: (v) =>
      `Module deliveries in 2025 according to the manufacturer's catalogue — ${v.marketMw} MW across ten European markets.`,
    orderTitle: "How to order a container of modules",
    orderSteps: [
      {
        t: "Enquiry",
        d: "Model, quantity in kWp or containers, delivery location and timing — via the form or by email.",
      },
      {
        t: "Offer",
        d: "Price for the chosen power class, delivery terms, plus datasheets and certificates.",
      },
      { t: "Order", d: "Confirmation of specification, timing and payment terms." },
      { t: "Delivery", d: "A container of modules at the agreed place and time." },
    ],
    orderCta: "Start with an enquiry — it takes a few minutes.",
    trustTitle: "Warranties, standards and manufacturer",
    trustCta: "Download datasheets and certificates",
    trust: (v) => [
      {
        title: "Warranties",
        text: `Glass modules: ${v.glassWP} years product warranty and ${v.glassWL} years linear power warranty. Flexible line: ${v.flexWP} and ${v.flexWL} years.`,
      },
      {
        title: "Standards and certificates",
        text: "TÜV SÜD and TÜV Rheinland certificates (IEC 61215, IEC 61730), CE attestations, PID, salt mist and ammonia resistance tests, and ISO 9001, 14001 and 45001 for the factory. For each certificate we state the exact power range it covers.",
      },
      {
        title: "Manufacturer",
        text: "Worldwide Energy and Manufacturing USA Co., Ltd. — according to its catalogue the company has operated since 1993 (California), with the Amerisolar brand since 2007.",
      },
    ],
    faqTitle: "Questions about wholesale solar panels",
    faqCta: "Ask in an enquiry",
    faq: (v) => [
      {
        question: "Can I buy Amerisolar modules direct from the manufacturer?",
        answer:
          "Yes. We supply container quantities direct from the manufacturer — Worldwide Energy and Manufacturing USA Co., Ltd., owner of the Amerisolar brand. Price and delivery terms are stated in the offer.",
      },
      {
        question: "How many kWp fit in a 40'HQ container?",
        answer: `Depending on the model, from ${v.kwpMin} to ${v.kwpMax} kWp (calculated: modules per container per the datasheet × highest power class). For example the ${v.farmModel}: ${v.farmPieces} pieces, ${v.farmKwp} kWp.`,
      },
      {
        question: "What is the difference between TOPCon and PERC?",
        answer: `TOPCon is an N-type cell with a passivated rear contact. In our range this means, among other things, a lower power temperature coefficient: ${v.topconCoeff}%/°C for the TOPCon modules versus ${v.percCoeff}%/°C for the PERC module ${v.percModel} — in hot weather a TOPCon module loses less power.`,
      },
      {
        question: "Are bifacial modules worth it?",
        answer: `On solar farms, carports and flat roofs with a light surface — usually yes. The ${v.farmModel} datasheet gives an example: a ${v.bifBase} W module with 20% rear gain delivers ${v.bifGain20} W. The actual gain depends on ground albedo and mounting height.`,
      },
      {
        question: "What warranties do the modules have?",
        answer: `Glass modules: ${v.glassWP} years product warranty and ${v.glassWL} years linear power warranty. Flexible line: ${v.flexWP} and ${v.flexWL} years.`,
      },
      {
        question: "What certificates do the modules have?",
        answer:
          "The modules in our range hold TÜV SÜD or TÜV Rheinland certificates to IEC 61215 and IEC 61730 and CE attestations — each covering a specific power range, which we list on the datasheets page. The factory holds ISO 9001, ISO 14001 and ISO 45001 certificates. All documents can be downloaded without registering.",
      },
      {
        question: "What if the roof cannot carry conventional panels?",
        answer: `Consider the flexible line: approx. 3 kg/m², ${v.flexMm} mm thick, bonded with adhesive without drilling. Selecting it for a specific building requires a structural engineer's assessment — send us a description of the roof in your enquiry.`,
      },
      {
        question: "Do you hold stock in Europe?",
        answer:
          "No. You order container quantities direct from the manufacturer — so the price applies to the whole batch, without the cost of an intermediate warehouse. Delivery terms and location are agreed in the offer.",
      },
      {
        question: "What is the minimum order?",
        answer:
          "We sell in container quantities. The table above shows how many modules and kWp fit in a 20' and 40'HQ container for each model; the exact minimum for the chosen model is stated in the offer.",
      },
      {
        question: "Who do you sell to?",
        answer:
          "Businesses buying in container quantities: renewable energy wholesalers and distributors, traders and importers, and installation and EPC companies handling large volumes.",
      },
      {
        question: "What is the price of the panels?",
        answer:
          "Price on request. It depends on the model and power class, number of containers, delivery location and timing. Send an enquiry and we will reply with a specific offer.",
      },
    ],
  },
  catalog: {
    metaTitle: "Amerisolar solar panels 430–720 W — catalogue",
    metaDescription:
      "Amerisolar module catalogue: N-type TOPCon, bifacial, double glass and flexible. Full datasheet specifications, packaging and kWp per container.",
    breadcrumb: "Our modules",
    h1: "Our modules — Amerisolar solar panels",
    lead: "{count} models from {min} to {max} W. Download the PDF datasheet for every module — instantly, no registration and no email needed.",
    intro: {
      glass:
        "Modules with tempered glass and a frame: for residential and commercial roofs, carports, industrial roofs and solar farms.",
      flexible:
        "2 mm thick modules bonded with adhesive, with no mounting structure or drilling — for roofs with limited load capacity and arched roofs.",
    },
    stat: { power: "power", eff: "max. efficiency", dims: "dimensions", hq: "40'HQ" },
    hqValue: "{pcs} pcs, {kwp} kWp",
    note: "kWp per container: calculated from the piece count in the datasheet and the highest power class.",
  },
  product: {
    meta: (v) => `${v.model} ${v.minW}–${v.maxW} W — ${v.shortKind}`,
    description: (v) =>
      `${v.model}: ${v.kind} ${v.minW}–${v.maxW} W, efficiency up to ${v.eff}, ${v.weight} kg.`,
    descriptionTail: (v) =>
      ` STC/NOCT tables, ${v.pcsHq} pcs per 40'HQ, ${v.warrantyP}/${v.warrantyL}-year warranty.`,
    benefit: {
      eff: (v) => `max. efficiency, ${v.cells} cells, ${v.powerRange}`,
      flexMass: (v) => `${v.weight} kg, ${v.thickness} mm thick`,
      bending: "minimum bending radius — arched roofs",
      snow: (v) => `snow load, wind ${v.windPa} Pa`,
      bif: (v) => `from a ${v.bifBase} W module with 20% rear gain (datasheet example)`,
      warranty: "product / linear power warranty",
    },
    faq: {
      hq: (v) => ({
        question: `How many ${v.model} modules fit in a 40'HQ container?`,
        answer: `${v.pcsHq} pieces according to the datasheet. At the ${v.maxW} W class that is ${v.kwpHq} kWp (calculated: pieces × module power). A 20' container holds ${v.pcs20} pieces.`,
      }),
      pallet: (v) => ({
        question: "How many modules are on a pallet?",
        answer: `${v.pcsPallet} pieces, i.e. ${v.kwpPallet} kWp at the ${v.maxW} W class.`,
      }),
      voc: (v) => ({
        question: "What is the module's Voc in winter?",
        answer: `Voc at STC for the ${v.maxW} W class is ${v.vocStc} V, and the Voc temperature coefficient is ${v.betaVoc}%/°C. At a cell temperature of −25 °C the voltage rises to approx. ${v.vocCold} V (indicative calculation). The number of modules per string is chosen so that the total does not exceed the maximum voltage of the inverter and the system (${v.maxSys} V DC).`,
      }),
      warranty: (v) => ({
        question: "What is the warranty?",
        answer: `${v.warrantyP} years product warranty and ${v.warrantyL} years linear power warranty.`,
      }),
      certs: (v) => ({ question: "What certificates does the module have?", answer: v.certs }),
      dims: (v) => ({
        question: "How much does the module weigh and what are its dimensions?",
        answer: `${v.dims} mm, ${v.weight} kg, i.e. ${v.arealMass} kg/m² (module only${v.glassSuffix}).`,
      }),
      glassSuffix: ", without mounting structure",
      bif: (v) => ({
        question: "How much does the rear side of a bifacial module add?",
        answer: `The datasheet gives an example for a ${v.bifBase} W module: with 10% gain the power rises to ${v.bif10} W, with 20% to ${v.bif20} W, with 30% to ${v.bif30} W. The actual gain depends on ground albedo, mounting height and row spacing.`,
      }),
      flex: {
        question:
          "Is the module suitable for a structure with vibration, such as a stadium or a hall with a crane?",
        answer:
          "Low weight, no glass and mounting without drilling are real advantages on structures that move. However, the manufacturer has not yet published dynamic load test results, so selection for a specific building requires assessment by its structural engineer.",
      },
      price: {
        question: "What is the price?",
        answer:
          "Price on request. It depends on the power class, number of containers, delivery location and timing.",
      },
    },
    heroNote: (v) => `Container quantities direct from the manufacturer: ${v.pcsHq} pcs per 40'HQ container.`,
    usesTitle: "Applications",
    flexNote: (v) =>
      `Bonded with adhesive, no drilling and no mounting structure. Lower efficiency and a shorter warranty (${v.warrantyP}/${v.warrantyL} years) than glass modules — this module makes sense where the alternative is no installation or reinforcing the roof structure. The modules lie flat or follow the curve, so yield depends on the roof orientation. Approved substrates and adhesive are confirmed before the offer.`,
    electricalTitle: "Electrical data",
    stcCaption: "STC (1000 W/m², 25 °C, AM1.5)",
    rows: {
      pmax: "Maximum power Pmax",
      eff: "Module efficiency",
      voc: "Open-circuit voltage Voc",
      isc: "Short-circuit current Isc",
      vmp: "Voltage at maximum power Vmp",
      imp: "Current at maximum power Imp",
    },
    tolerance: "Pmax tolerance per the manufacturer's datasheet.",
    noctCaption: "NOCT (800 W/m², ambient 20 °C, wind 1 m/s)",
    noctMissing:
      "NOCT data for this model will be published once the manufacturer confirms the current datasheet.",
    tempCaption: "Temperature coefficients",
    value: "Value",
    bifCaption: "Rear-side gain — datasheet example for {w} W",
    bifRow: "Total power",
    bifNote: "The actual gain depends on ground albedo, mounting height and row spacing.",
    mechCaption: "Mechanical and operating data",
    param: "Parameter",
    mech: {
      dims: "Dimensions",
      mass: "Weight",
      arealMass: "Weight per m² (module only)",
      cells: "Cells",
      glass: "Glass",
      frontCover: "Front cover",
      bending: "Bending radius",
      mounting: "Mounting",
      snow: "Load — snow",
      wind: "Load — wind",
      junctionBox: "Junction box",
      connector: "Connectors",
      maxSys: "Max. system voltage",
      fuse: "Max. series fuse rating",
      fire: "Fire rating",
      safety: "Safety class",
      opTemp: "Operating temperature",
    },
    packCaption: "Packaging and power per shipping unit",
    unit: "Unit",
    pcsCol: "Pieces",
    pack: { pallet: "Pallet", c20: "20' container", c40: "40'HQ container" },
    packNote: "Pieces per datasheet; kWp is calculated for the highest power class.",
    warrantyTitle: "Warranties and certificates",
    warrantyText: (v) => `${v.warrantyP} years product warranty, ${v.warrantyL} years linear power warranty.`,
    allDocs: "All datasheets and certificates",
    compareTitle: "Comparison with neighbouring models",
    compareCta: "Need the {model} in container quantities?",
    compare: {
      technology: "Technology",
      power: "Power",
      eff: "Max. efficiency",
      dims: "Dimensions",
      mass: "Weight",
      bifacial: "Bifacial",
      warranty: "Warranty",
      pcsHq: "Pieces per 40'HQ",
    },
    faqTitle: "Questions about the {model}",
    ld: {
      technology: "Technology",
      power: "Maximum power (STC)",
      eff: "Maximum efficiency",
      cells: "Number of cells",
      bifacial: "Bifacial",
      coeff: "Pmax temperature coefficient",
      warrantyP: "Product warranty",
      warrantyL: "Linear power warranty",
      years: "years",
    },
  },
  docs: {
    metaTitle: "Amerisolar module datasheets and certificates",
    metaDescription:
      "Download Amerisolar module datasheets (PDF) and certificates: TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, salt mist, ammonia, ISO, WEEE.",
    h1: "Datasheets and certificates",
    lead: "Manufacturer documentation to download without registering. For each module you see its datasheet and the certificates that cover it — with the exact power range.",
    toc: "Contents",
    datasheetsAnchor: "Datasheets",
    byModuleTitle: "Datasheets and certificates by module",
    requestDatasheet: "Request the datasheet",
    certsOnRequest: "Certificates for this model are provided with the offer.",
    sections: {
      product: {
        title: "Module certificates IEC 61215 and IEC 61730",
        intro:
          "Module type certification by an independent body: durability and reliability (IEC 61215) and electrical safety (IEC 61730). For each certificate we state which power classes from our range it covers.",
      },
      ce: {
        title: "CE conformity attestations",
        intro:
          "TÜV SÜD attestations confirming conformity with EN IEC 61730 — the basis for CE marking of modules on the EU market.",
      },
      tests: {
        title: "Resistance tests",
        intro:
          "Additional TÜV SÜD testing: resistance to PID degradation, salt mist (coastal installations) and ammonia (agricultural buildings).",
      },
      iso: {
        title: "Factory management systems",
        intro: "ISO certificates of the module factory in Nantong (China).",
      },
      weee: {
        title: "Recycling and WEEE compliance",
        intro:
          "The manufacturer's registration with PV CYCLE — collection and recycling of end-of-life modules under the WEEE directive.",
      },
    },
    card: {
      body: "Body",
      number: "Number",
      holder: "Holder",
      standards: "Standards",
      issued: "Issued",
      validUntil: "Valid until",
      modules: "Modules in our range",
      download: "Download PDF",
    },
  },
  rfqPage: {
    metaTitle: "Request a quote — PV modules by the container | Amerisolar",
    metaDescription:
      "Request a container price for Amerisolar modules direct from the manufacturer. Give the model, quantity in kWp or containers, delivery location and timing.",
    h1: "Request a container price",
    lead: "We supply Amerisolar modules in container quantities, direct from the manufacturer. The more precisely you describe your needs — model, quantity, delivery location and timing — the faster we can prepare a specific offer.",
    emailBoxStrong: "Prefer email?",
    emailBoxText: "Write to us directly, no form needed.",
    asideOfferTitle: "What the offer includes",
    asideOffer: [
      "Price for the chosen power class and quantity",
      "Delivery terms and timing",
      "Datasheets and certificates for the chosen models",
    ],
    asideContainerTitle: "How much is a container?",
    asideContainer:
      "A 40'HQ container holds 558 to 1,260 modules depending on the model — roughly 400 to over 720 kWp. Not sure of the exact quantity? Enter the approximate plant size.",
  },
  form: {
    honeypot: "Website",
    s1: "1. About you",
    s2: "2. Modules and quantity",
    s3: "3. Delivery and timing",
    s4: "4. Contact details",
    types: {
      distributor: "Wholesaler / renewable energy distributor",
      trader: "Trader / importer",
      installer: "Installation company",
      epc: "EPC / solar farm developer",
      business: "Company — own building",
    },
    timelines: {
      asap: "As soon as possible",
      "1-3m": "1–3 months",
      "3-6m": "3–6 months",
      "6m+": "More than 6 months",
      tender: "Tender / project in preparation",
    },
    qtyKwp: "Quantity in kWp",
    qtyKwpPh: "e.g. 400",
    qtyContainers: "or number of containers",
    qtyContainersPh: "e.g. 1",
    delivery: "Delivery location",
    deliveryPh: "city or postcode, country",
    timeline: "Timing",
    choose: "Select",
    name: "Full name *",
    email: "Email *",
    phone: "Phone",
    company: "Company",
    vatId: "VAT number",
    message: "Message",
    messagePh: "e.g. power class, project type, required documents",
    consent: "* I agree to be contacted about this enquiry.",
    consentAdmin: "The data controller is TODO(klient): company name.",
    marketing: "I would like to receive information on module availability and new shipments (optional).",
    submit: "Send enquiry",
    sending: "Sending…",
    okTitle: "Enquiry sent",
    okText: "Thank you. We will reply to the email address provided with an offer or follow-up questions.",
    okUrgent: "For urgent matters, email",
    errors: {
      type: "Tell us who you are.",
      number: "Enter a number greater than zero.",
      vatId: "Enter a valid VAT number.",
      name: "Enter your full name.",
      email: "Enter a valid email address.",
      consent: "Consent to be contacted is required so that we can reply.",
      qty: "Enter the quantity in kWp or the number of containers.",
      fix: "Please correct the highlighted fields.",
      site: "Unknown site.",
      spam: "The anti-spam check failed. Refresh the page and try again.",
      rate: "Several enquiries have already been sent from this address. Please try again in half an hour.",
      failed: "The enquiry could not be sent.",
      fallbackEmail: "Please email us directly at {email}.",
      fallback: "Please try again later.",
    },
  },
  calc: {
    s1: "1. Choose a module",
    s2: "2. Power class",
    s3: "3. What do you know?",
    minNote: "We sell in container quantities — the minimum is one container.",
    modePower: "Plant size",
    modeContainers: "Number of containers",
    power: "Plant size",
    powerAria: "Plant size in MWp",
    oneContainer: "{mw} MWp (1 container)",
    containers: "Number of 40'HQ containers",
    containersAria: "Number of containers",
    need: "You need",
    chosen: "Selected",
    containerForms: { one: "container", other: "containers" } as Plural,
    powerLabel: "Power",
    modules: "Modules",
    perModule: "pcs at {w} W",
    lastFill:
      "The last container is {pct}% full — adjust the plant size to use full containers, or add modules.",
    quote: {
      one: "Request a quote for {n} container",
      other: "Request a quote for {n} containers",
    } as Plural,
    datasheet: "Datasheet PDF",
    note: "Indicative calculation: {pcs} modules per 40'HQ container per the datasheet{careful}, i.e. {kwp} kWp per container at {w} W. The exact quantity and delivery terms are stated in the offer.",
    careful: " (we conservatively use {min})",
    flexible: "flexible module",
    glass: "glass module",
  },
};

export default en;
