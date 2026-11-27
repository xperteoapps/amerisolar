// apps/web/messages/fr.ts
// Français — amerisolar.eu/fr (marché : France).
// Traduction assistée : relecture par un locuteur natif nécessaire avant la mise en ligne (CLAUDE.md §5.2).
import type { Plural } from "@/lib/i18n";
import type { Messages } from "./pl";

const fr: Messages = {
  common: {
    home: "Accueil",
    pieces: "pcs",
    years: "{p}/{l} ans",
    yes: "oui",
    no: "non",
    datasheetPdf: "Fiche PDF",
    downloadDatasheet: "Télécharger la fiche technique PDF",
    technicalParams: "Caractéristiques techniques",
    aiCaption: "Visualisation indicative",
    askContainerPrice: "Demander un prix par conteneur",
    askPrice: "Demander un prix",
    seeModules: "Voir les modules",
    notFoundTitle: "Page introuvable",
    notFoundText: "L'adresse a peut-être changé ou la page n'est pas encore publiée.",
    notFoundBack: "Aller à la page d'accueil",
    pdf: "PDF",
    breadcrumbs: "Fil d'Ariane",
  },
  routes: {
    home: "Accueil",
    catalog: "Nos modules",
    installers: "Pour les installateurs",
    farms: "Centrales au sol",
    special: "Applications spéciales",
    wholesale: "Gros et distribution",
    tools: "Outils",
    docs: "Fiches techniques et certificats",
    about: "À propos d'Amerisolar",
    rfq: "Demande de devis",
    contact: "Contact",
    privacy: "Confidentialité",
  },
  header: {
    skip: "Aller au contenu",
    logoAria: "Amerisolar — accueil",
    mainNav: "Menu principal",
    menu: "Menu",
    switcher: "Pays et langue",
  },
  footer: {
    modules: "Modules",
    service: "Site",
    note: "Les données des modules proviennent des fiches techniques du fabricant. Prix sur demande.",
  },
  cta: {
    titleModel: "Prix du {model} par conteneur",
    title: "Un conteneur de modules directement du fabricant",
    text: "Indiquez le modèle, la quantité en kWc ou en conteneurs, le lieu et le délai de livraison. Nous préparerons une offre avec le prix pour la classe de puissance choisie et les conditions de livraison.",
    noForm: "Vous ne voulez pas remplir de formulaire ? Écrivez-nous directement à",
  },
  email: {
    prefix: "ou écrivez-nous directement :",
    prefixShort: "ou écrivez :",
    prefixOr: "ou écrivez :",
    button: "Écrire : {email}",
    mobile: "Envoyer un e-mail",
    mobileForm: "Demander une offre",
    tableLink: "E-mail",
    tableSr: "au sujet du {model}",
    subjectModel: "Demande de prix : {model}",
    subject: "Demande de prix par conteneur",
    subjectAssessment: "Évaluation préliminaire du bâtiment — modules flexibles",
    subjectQuestion: "Question sur les modules Amerisolar",
    subjectDatasheet: "Fiche technique {model}",
    body: {
      greeting: "Bonjour,",
      request: "je souhaite recevoir une offre pour les modules {model}.",
      qty: "Quantité (kWc ou nombre de conteneurs) : {qty}",
      qtyContainers: "{n} × 40'HQ",
      qtyKwp: " (env. {kwp} kWc)",
      delivery: "Lieu de livraison : ",
      term: "Délai : ",
      company: "Société / N° TVA : ",
      phone: "Téléphone : ",
      bye: "Cordialement",
    },
  },
  catalogLib: {
    group: { glass: "Modules TOPCon en verre", flexible: "Gamme flexible" },
    kind: {
      flexTopcon: "module flexible TOPCon",
      flexPerc: "module flexible PERC",
      doubleGlass: "module bifacial TOPCon, verre-verre",
      bifacial: "module bifacial TOPCon",
      topcon: "module TOPCon de type N",
    },
    shortKind: {
      flex: "module flexible",
      doubleGlass: "TOPCon verre-verre",
      bifacial: "TOPCon bifacial",
      topcon: "module TOPCon",
    },
    tech: {
      flexTopcon: "TOPCon, flexible",
      flexPerc: "PERC, flexible",
      doubleGlass: "TOPCon, verre-verre",
      topcon: "TOPCon type N",
    },
    segment: {
      roof: "Toitures résidentielles et tertiaires, carports",
      large: "Toitures industrielles et centrales au sol",
      flex: "Gamme flexible — toitures spéciales",
    },
    cert: {
      number: "{body}, n° {number}",
      validUntil: "valable jusqu'au {date}",
      onDatasheet: "{name} (selon la fiche technique)",
      fullRange: "toute la gamme proposée {range}",
      partial: "classes {covered} (proposées {offer})",
    },
  },
  productCopy: {
    junctionBox: "IP68, 3 diodes",
    connector: { "MC4 lub kompatybilne": "MC4 ou compatibles", "MC4 kompatybilne": "compatibles MC4" },
    opTemp: "de {min} à {max}",
    bySlug: {
      "as-7m108n-bhc": {
        segments: ["toitures résidentielles", "petites entreprises", "installateurs"],
        glass: "3,2 mm trempé avec traitement antireflet (fiche : 'Front/Back Glass')",
      },
      "as-7m120n-hc": {
        segments: ["toitures résidentielles", "toitures tertiaires", "installateurs"],
        glass: "3,2 mm trempé avec traitement antireflet",
      },
      "as-7m120n-bhc": {
        segments: ["carports", "toitures plates", "petites centrales au sol", "installateurs"],
        glass: "3,2 mm trempé avec traitement antireflet ; arrière : backsheet transparent",
      },
      "as-7m144n-hc": {
        segments: ["toitures industrielles", "centrales au sol", "EPC"],
        glass: "3,2 mm trempé avec traitement antireflet",
      },
      "as-8m132n-bhc": {
        segments: [
          "centrales photovoltaïques au sol",
          "EPC",
          "développeurs d'énergies renouvelables",
          "agrivoltaïsme",
        ],
        glass: "2 mm + 2 mm trempé (face avant antireflet)",
      },
      "as-7m144nfl-hc-black": {
        segments: [
          "toitures à faible capacité portante (halls, entrepôts, bâtiments agricoles)",
          "ouvrages soumis aux vibrations et charges dynamiques (stades, salles de sport, arènes, industrie) — après évaluation par l'ingénieur structure",
          "toitures cintrées et courbes",
          "toitures à membrane — après confirmation de la compatibilité de la colle",
        ],
        frontCover: "polymère léger à haute transparence",
        mounting: "collage, sans perçage et sans structure",
      },
      "as-7m132fl-hc": {
        segments: [
          "toitures à faible capacité portante (halls, entrepôts, bâtiments agricoles)",
          "ouvrages soumis aux vibrations et charges dynamiques (stades, salles de sport, arènes, industrie) — après évaluation par l'ingénieur structure",
          "toitures cintrées et courbes",
          "toitures à membrane — après confirmation de la compatibilité de la colle",
        ],
      },
    },
  },
  docTitles: {
    datasheet: "Fiche technique {model}",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0021.pdf": "Certificat TÜV SÜD Z2 093522 0021",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0023.pdf": "Certificat TÜV SÜD Z2 093522 0023",
    "/dokumenty/amerisolar-tuv-rheinland-pv-50674535-0001.pdf": "Certificat TÜV Rheinland PV 50674535 0001",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0025.pdf": "Certificat TÜV SÜD Z2 093522 0025",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0030.pdf": "Certificat TÜV SÜD Z2 093522 0030",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0022-ce.pdf":
      "Attestation de conformité CE TÜV SÜD N8A 093522 0022",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0024-ce.pdf":
      "Attestation de conformité CE TÜV SÜD N8A 093522 0024",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0027-ce.pdf":
      "Attestation de conformité CE TÜV SÜD N8A 093522 0027",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0031-ce.pdf":
      "Attestation de conformité CE TÜV SÜD N8A 093522 0031",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0018-anti-pid.pdf": "Résistance au PID — TÜV SÜD Z2 093522 0018",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0019-mgla-solna.pdf":
      "Résistance au brouillard salin — TÜV SÜD Z2 093522 0019",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0020-amoniak.pdf":
      "Résistance à l'ammoniac — TÜV SÜD Z2 093522 0020",
    "/dokumenty/amerisolar-iso-9001.pdf": "ISO 9001:2015 — management de la qualité",
    "/dokumenty/amerisolar-iso-14001.pdf": "ISO 14001:2015 — management environnemental",
    "/dokumenty/amerisolar-iso-45001.pdf": "ISO 45001:2018 — santé et sécurité au travail",
    "/dokumenty/amerisolar-pv-cycle-wlochy-2026.pdf": "PV CYCLE Italie — conformité DEEE",
    "/dokumenty/amerisolar-pv-cycle-niemcy-weee-2026.pdf": "PV CYCLE Allemagne — conformité DEEE",
  },
  drawing: {
    lineupTitle: "Modules Amerisolar à la même échelle",
    flexSuffix: " (module flexible)",
    flexHeading: "Modules flexibles",
    thickness: "épaisseur {t} mm",
    dimTitle: "Plan coté {model} : {l} × {w} × {t} mm",
    profile: "profil",
  },
  certBadges: {
    title: "Certificats et attestations",
    intro: "Essais réalisés par des organismes indépendants",
    introValid: ", certificats valables jusqu'au {date}",
    introTail: ". Tous les documents sont téléchargeables sans inscription.",
    more: "Voir les fiches techniques et certificats",
    ce: "Attestations CE",
    salt: "Brouillard salin",
    ammonia: "Ammoniac",
    factory: "usine de Nantong",
    weee: "recyclage, directive DEEE",
  },
  media: {
    farm: "Centrale photovoltaïque au sol sur une plaine agricole, rangées de modules sur structures fixes au soleil de l'après-midi",
    warehouseWinter: "Toit plat d'un entrepôt en hiver, légère neige et rangées de modules photovoltaïques",
    archedHall: "Hall cintré avec de fins modules flexibles collés sur la toiture courbe",
    lightRoof:
      "Toiture légère en bac acier d'une plateforme logistique avec modules flexibles collés sans structure",
  },
  home: {
    metaTitle: "Panneaux solaires en gros du fabricant — Amerisolar",
    metaDescription:
      "Modules photovoltaïques Amerisolar par conteneur, directement du fabricant : TOPCon 430–720 W, bifaciaux, verre-verre, flexibles. Demandez un prix.",
    eyebrow: "Par conteneur, directement du fabricant",
    h1: "Panneaux photovoltaïques Amerisolar en gros — conteneurs du fabricant",
    lead: (v) =>
      `Modules TOPCon de type N de ${v.pMin} à ${v.pMax} W, bifaciaux, verre-verre et une gamme flexible de ${v.flexMm} mm. Pour les grossistes, négociants et installateurs qui achètent par conteneur.`,
    bullets: (v) => [
      "Livraisons directement du fabricant",
      `Conteneur 40'HQ : ${v.hqPcsMin}–${v.hqPcsMax} modules`,
      "Fiche technique et certificats pour chaque modèle",
      `Jusqu'à ${v.glassWL} ans de garantie de puissance`,
    ],
    facts: (v) => [
      { value: "depuis 1993", label: "sur le marché — selon le catalogue du fabricant, Californie" },
      { value: "env. 11 GW", label: "de capacité de production selon le fabricant (2025)" },
      { value: `${v.marketMw} MW`, label: "de modules livrés en France en 2025 (selon le catalogue)" },
      { value: v.effMax, label: "rendement maximal des modules de la gamme" },
    ],
    lineupTitle: "Sept modules, une seule échelle",
    lineupText: (v) =>
      `Dessinés d'après les dimensions et le nombre de cellules des fiches techniques — du compact ${v.smallModel} pour les maisons au ${v.farmModel} pour les centrales au sol.`,
    lineupCta: "Comparer tous les modèles",
    directTitle: "Panneaux en gros directement du fabricant",
    directText:
      "Votre commande par conteneur part directement chez le fabricant des modules Amerisolar. Une chaîne d'approvisionnement plus courte, c'est un prix calculé pour tout le lot et une documentation directement du fabricant.",
    directCta: "Un projet de plusieurs centaines de kWc ou plus ?",
    points: (v) => [
      {
        title: "Prix par conteneur",
        text: "Nous chiffrons tout le lot — un conteneur 20' ou 40'HQ — pour la classe de puissance choisie, au lieu d'un prix par palette.",
      },
      {
        title: "Documentation complète",
        text: "Fiches techniques avec tableaux STC et NOCT, coefficients de température et charges mécaniques, ainsi que les certificats de chaque modèle.",
      },
      {
        title: "Une gamme, tous les segments",
        text: `Modules de ${v.roofRange} pour les toitures, de ${v.largeRange} pour les toitures industrielles et les centrales au sol, et une gamme flexible pour les toitures spéciales.`,
      },
      {
        title: "Garantie du fabricant",
        text: `${v.glassWP} ans de garantie produit et ${v.glassWL} ans de garantie linéaire de puissance sur les modules en verre.`,
      },
    ],
    segmentsTitle: "Pour les grossistes, négociants et installateurs qui achètent en volume",
    segments: (v) => [
      {
        title: "Grossistes et distributeurs d'énergies renouvelables",
        value: `${v.hqPcsMin}–${v.hqPcsMax}`,
        valueLabel: "modules par conteneur 40'HQ, selon le modèle",
        cta: "Demander les conditions de gros",
        text: `Toute la gamme d'une seule source — des modules de toiture aux modules pour centrales et flexibles. Fiches techniques et certificats pour la revente, modules sur palettes de ${v.palletMin} à ${v.palletMax} pièces.`,
      },
      {
        title: "Négociants et importateurs",
        value: `${v.kwpMin}–${v.kwpMax} kWc`,
        valueLabel: "par conteneur 40'HQ, selon le modèle (calcul)",
        cta: "Demander des livraisons multi-conteneurs",
        text: "Achat par conteneur directement chez le fabricant, sans grossiste intermédiaire. Spécification, classes de puissance et conditions de livraison sont fixées pour tout le lot.",
      },
      {
        title: "Installateurs et EPC",
        value: `${v.farmKwp} kWc`,
        valueLabel: `par conteneur de modules ${v.farmModel} ${v.farmMaxW} W (calcul)`,
        cta: "Demander une livraison pour un projet",
        text: `Modules de ${v.roofRange} pour toitures tertiaires et carports, et de ${v.largeRange} pour toitures industrielles et centrales au sol. Un conteneur, c'est le stock d'un type de module pour de nombreux chantiers.`,
      },
    ],
    modelsTitle: "Modules photovoltaïques de notre gamme",
    modelsText: (v) => `Rendement jusqu'à ${v.effMax}. Données STC des fiches techniques.`,
    table: {
      model: "Modèle",
      technology: "Technologie",
      power: "Puissance",
      effMax: "Rendement max.",
      mass: "Poids",
      warranty: "Garantie",
      actions: "Fiche technique et demande",
    },
    techTitle: "TOPCon de type N, bifacial, verre-verre — ce que cela change en pratique",
    tech: (v) => [
      {
        title: "Moins de pertes par forte chaleur",
        text: `Les modules TOPCon de la gamme ont un coefficient de température de la puissance de ${v.topconCoeff} %/°C. À titre de comparaison, le module PERC ${v.percModel} : ${v.percCoeff} %/°C. Avec une cellule à 65 °C (40 °C au-dessus des STC), l'écart est d'environ ${v.heatDiff} point de puissance (calcul).`,
      },
      {
        title: "Demi-cellules",
        text: "Tous les modules en verre de la gamme utilisent des demi-cellules (half-cell). Un courant plus faible dans chaque moitié réduit les pertes résistives et l'effet de l'ombrage partiel sur l'ensemble du module.",
      },
      {
        title: "De la puissance des deux côtés",
        text: `Les modules bifaciaux captent aussi la lumière réfléchie par le sol. Le ${v.farmModel} est en plus de construction verre-verre — du verre des deux côtés au lieu d'un backsheet : ${v.farmGlass}.`,
      },
    ],
    bifCaption: (v) =>
      `Gain en face arrière d'un module bifacial — exemple de la fiche ${v.farmModel} (${v.bifBase} W)`,
    bifRowHeader: "Gain arrière",
    bifRow: "Puissance totale",
    bifNote:
      "Le gain réel dépend de l'albédo du sol (herbe, gravier, membrane), de la hauteur de pose et de l'espacement des rangées.",
    logisticsTitle: "Combien de modules et de kWc par conteneur",
    logisticsText:
      "Nombre de pièces selon les fiches techniques. Les kWc sont calculés pour la classe de puissance la plus élevée — l'offre se base sur la classe que vous choisissez.",
    logisticsTable: {
      pallet: "Palette",
      c20: "Conteneur 20'",
      c40: "Conteneur 40'HQ",
      kwp40: "kWc en 40'HQ",
    },
    farmBoxTitle: "Centrale de 1 MWc — combien de conteneurs ?",
    farmBoxText: (v) =>
      `Avec des modules ${v.farmModel} ${v.farmMaxW} W : ${v.farm1MwContainers} conteneurs 40'HQ (${v.farm1MwModules} modules, calcul).`,
    farmBoxStrong: (v) => `${v.farm1MwContainers} conteneurs 40'HQ`,
    farmBoxCta: "Demander une livraison pour une centrale",
    calcTitle: "De combien de conteneurs avez-vous besoin ?",
    calcText:
      "Choisissez le module et la classe de puissance, puis saisissez la puissance de l'installation ou le nombre de conteneurs. Transférez le résultat dans la demande de devis en un clic.",
    stringTitle: "Tension Voc en hiver et longueur de chaîne",
    stringText1:
      "Par une journée froide et ensoleillée, la tension du module dépasse la valeur de la fiche. C'est pourquoi le nombre de modules par chaîne se calcule à la température de cellule la plus basse — ici −25 °C, une valeur de dimensionnement courante en Europe centrale ; le concepteur utilise le minimum du site.",
    stringFormula: "Formule : Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).",
    stringExample: (v) => `Exemple : ${v.industrialModel} ${v.industrialMaxW} W`,
    stringRows: (v) => [
      { k: "Voc aux STC", v: `${v.vocStc} V` },
      { k: "βVoc", v: `${v.betaVoc} %/°C` },
      { k: "Voc à −25 °C", v: `${v.vocCold} V`, strong: true },
      { k: "Modules max. par chaîne, système 1500 V", v: v.str1500, strong: true },
      { k: "Modules max. par chaîne, système 1000 V", v: v.str1000 },
    ],
    stringNote:
      "Calcul indicatif. La longueur finale de la chaîne dépend aussi de la plage MPPT et de la tension d'entrée maximale de l'onduleur — vérifiées par le concepteur de l'installation.",
    flexTitle: "Le toit ne supporte pas les panneaux ? La structure vibre ? Il existe une solution",
    flexText:
      "Les modules flexibles Amerisolar se collent directement sur la couverture — sans structure porteuse et sans perçage.",
    flexStats: (v) => [
      { k: "poids au m²", v: "env. 3 kg" },
      { k: "épaisseur", v: `${v.flexMm} mm` },
      { k: "perçages dans la toiture", v: "0" },
    ],
    flexUses: (v) => [
      {
        title: "Toitures à faible capacité portante",
        text: "Halls en bac acier et panneaux sandwich, bâtiments agricoles, toitures anciennes sans réserve de charge.",
      },
      {
        title: "Ouvrages soumis aux vibrations",
        text: "Stades, salles de sport, arènes, usines avec machines et ponts roulants — faible poids, sans verre ni vis. Choix après évaluation par l'ingénieur structure du bâtiment.",
      },
      {
        title: "Toitures cintrées",
        text: `Rayon de courbure ${v.bendRadius} m — le module épouse la courbe sans structure complexe.`,
      },
    ],
    flexHonest: (v) =>
      `En toute transparence : rendement jusqu'à ${v.flexEff} et garantie ${v.flexWP}/${v.flexWL} ans — moins que les modules en verre. Ce module a du sens là où l'alternative est l'absence d'installation ou le renforcement de la structure.`,
    flexCta: "Demander une évaluation préliminaire du bâtiment",
    massCaption: "Poids du module seul par m² de surface",
    massNote:
      "Données des fiches techniques. Les systèmes en verre ajoutent le poids de la structure porteuse ou du lestage — variable selon le projet, il n'est donc pas inclus ici.",
    winterTitle: "Charges de neige et de vent dans la fiche technique",
    winterText: (v) =>
      `Selon leurs fiches techniques, les modules en verre Amerisolar supportent une charge de neige de ${v.snowPa} Pa et une charge de vent de ${v.windPa} Pa, avec une plage de température de fonctionnement ${v.opTemp} °C. L'adéquation à la zone de neige et de vent du site est confirmée par le concepteur.`,
    europeTitle: "Amerisolar en Europe",
    europeText: (v) =>
      `Livraisons de modules en 2025 selon le catalogue du fabricant. La France, avec ${v.marketMw} MW, fait partie des marchés européens de la marque.`,
    orderTitle: "Comment commander un conteneur de modules",
    orderSteps: [
      {
        t: "Demande",
        d: "Modèle, quantité en kWc ou en conteneurs, lieu et délai de livraison — via le formulaire ou par e-mail.",
      },
      {
        t: "Offre",
        d: "Prix pour la classe de puissance choisie, conditions de livraison, fiches techniques et certificats.",
      },
      { t: "Commande", d: "Confirmation de la spécification, du délai et des conditions de paiement." },
      { t: "Livraison", d: "Un conteneur de modules au lieu et à la date convenus." },
    ],
    orderCta: "Commencez par une demande — cela ne prend que quelques minutes.",
    trustTitle: "Garanties, normes et fabricant",
    trustCta: "Télécharger fiches techniques et certificats",
    trust: (v) => [
      {
        title: "Garanties",
        text: `Modules en verre : ${v.glassWP} ans de garantie produit et ${v.glassWL} ans de garantie linéaire de puissance. Gamme flexible : ${v.flexWP} et ${v.flexWL} ans.`,
      },
      {
        title: "Normes et certificats",
        text: "Certificats TÜV SÜD et TÜV Rheinland (IEC 61215, IEC 61730), attestations CE, essais de résistance au PID, au brouillard salin et à l'ammoniac, et certifications ISO 9001, 14001 et 45001 de l'usine. Pour chaque certificat, nous indiquons la plage de puissance exacte couverte.",
      },
      {
        title: "Fabricant",
        text: "Worldwide Energy and Manufacturing USA Co., Ltd. — selon son catalogue, active depuis 1993 (Californie), avec la marque Amerisolar depuis 2007.",
      },
    ],
    faqTitle: "Questions sur les panneaux solaires en gros",
    faqCta: "Poser une question dans la demande",
    faq: (v) => [
      {
        question: "Puis-je acheter les modules Amerisolar directement au fabricant ?",
        answer:
          "Oui. Nous livrons par conteneur directement depuis le fabricant — Worldwide Energy and Manufacturing USA Co., Ltd., propriétaire de la marque Amerisolar. Le prix et les conditions de livraison figurent dans l'offre.",
      },
      {
        question: "Combien de kWc dans un conteneur 40'HQ ?",
        answer: `Selon le modèle, de ${v.kwpMin} à ${v.kwpMax} kWc (calcul : modules par conteneur selon la fiche × classe de puissance la plus élevée). Par exemple ${v.farmModel} : ${v.farmPieces} pièces, ${v.farmKwp} kWc.`,
      },
      {
        question: "Quelle différence entre TOPCon et PERC ?",
        answer: `Le TOPCon est une cellule de type N à contact arrière passivé. Dans notre gamme, cela se traduit notamment par un coefficient de température de la puissance plus faible : ${v.topconCoeff} %/°C pour les modules TOPCon contre ${v.percCoeff} %/°C pour le module PERC ${v.percModel} — par forte chaleur, un module TOPCon perd moins de puissance.`,
      },
      {
        question: "Les modules bifaciaux sont-ils rentables ?",
        answer: `Sur les centrales au sol, carports et toits plats à surface claire — généralement oui. La fiche ${v.farmModel} donne un exemple : un module de ${v.bifBase} W avec 20 % de gain arrière produit ${v.bifGain20} W. Le gain réel dépend de l'albédo et de la hauteur de pose.`,
      },
      {
        question: "Quelles garanties ont les modules ?",
        answer: `Modules en verre : ${v.glassWP} ans de garantie produit et ${v.glassWL} ans de garantie linéaire de puissance. Gamme flexible : ${v.flexWP} et ${v.flexWL} ans.`,
      },
      {
        question: "Quels certificats ont les modules ?",
        answer:
          "Les modules de la gamme disposent de certificats TÜV SÜD ou TÜV Rheinland selon IEC 61215 et IEC 61730 et d'attestations CE — chacun pour une plage de puissance définie, indiquée sur la page des fiches techniques. L'usine est certifiée ISO 9001, ISO 14001 et ISO 45001. Tous les documents sont téléchargeables sans inscription.",
      },
      {
        question: "Que faire si la toiture ne supporte pas des panneaux classiques ?",
        answer: `Envisagez la gamme flexible : env. 3 kg/m², ${v.flexMm} mm d'épaisseur, pose par collage sans perçage. Le choix pour un bâtiment précis nécessite l'évaluation d'un ingénieur structure — envoyez-nous une description de la toiture dans votre demande.`,
      },
      {
        question: "Avez-vous un entrepôt en France ?",
        answer:
          "Non. Vous commandez par conteneur directement chez le fabricant — le prix s'applique donc à tout le lot, sans les coûts d'un entrepôt intermédiaire. Les conditions et le lieu de livraison sont fixés dans l'offre.",
      },
      {
        question: "Quelle est la commande minimale ?",
        answer:
          "Nous vendons par conteneur. Le tableau ci-dessus indique combien de modules et de kWc tiennent dans un conteneur 20' et 40'HQ pour chaque modèle ; le minimum exact pour le modèle choisi figure dans l'offre.",
      },
      {
        question: "À qui vendez-vous ?",
        answer:
          "Aux entreprises qui achètent par conteneur : grossistes et distributeurs d'énergies renouvelables, négociants et importateurs, installateurs et EPC traitant de gros volumes.",
      },
      {
        question: "Quel est le prix des panneaux ?",
        answer:
          "Prix sur demande. Il dépend du modèle et de la classe de puissance, du nombre de conteneurs, du lieu et du délai de livraison. Envoyez une demande — nous répondrons par une offre précise.",
      },
    ],
  },
  catalog: {
    metaTitle: "Panneaux solaires Amerisolar 430–720 W — catalogue",
    metaDescription:
      "Catalogue des modules Amerisolar : TOPCon type N, bifaciaux, verre-verre et flexibles. Données complètes des fiches, emballage et kWc par conteneur.",
    breadcrumb: "Nos modules",
    h1: "Nos modules — panneaux photovoltaïques Amerisolar",
    lead: "{count} modèles de {min} à {max} W. Pour chaque module, téléchargez la fiche technique PDF — immédiatement, sans inscription ni e-mail.",
    intro: {
      glass:
        "Modules à verre trempé et cadre : pour toitures résidentielles et tertiaires, carports, toitures industrielles et centrales au sol.",
      flexible:
        "Modules de 2 mm d'épaisseur posés par collage, sans structure ni perçage — pour les toitures à capacité portante limitée et les toitures cintrées.",
    },
    stat: { power: "puissance", eff: "rendement max.", dims: "dimensions", hq: "40'HQ" },
    hqValue: "{pcs} pcs, {kwp} kWc",
    note: "kWc par conteneur : calcul à partir du nombre de pièces de la fiche et de la classe de puissance la plus élevée.",
  },
  product: {
    meta: (v) => `${v.model} ${v.minW}–${v.maxW} W — ${v.shortKind}`,
    description: (v) =>
      `${v.model} : ${v.kind} ${v.minW}–${v.maxW} W, rendement jusqu'à ${v.eff}, ${v.weight} kg.`,
    descriptionTail: (v) =>
      ` Tableaux STC/NOCT, ${v.pcsHq} pcs par 40'HQ, garantie ${v.warrantyP}/${v.warrantyL} ans.`,
    benefit: {
      eff: (v) => `rendement max., ${v.cells} cellules, ${v.powerRange}`,
      flexMass: (v) => `${v.weight} kg, épaisseur ${v.thickness} mm`,
      bending: "rayon de courbure minimal — toitures cintrées",
      snow: (v) => `charge de neige, vent ${v.windPa} Pa`,
      bif: (v) => `d'un module de ${v.bifBase} W avec 20 % de gain arrière (exemple de la fiche)`,
      warranty: "garantie produit / linéaire de puissance",
    },
    faq: {
      hq: (v) => ({
        question: `Combien de modules ${v.model} dans un conteneur 40'HQ ?`,
        answer: `Selon la fiche technique, ${v.pcsHq} pièces. À la classe ${v.maxW} W, cela représente ${v.kwpHq} kWc (calcul : pièces × puissance du module). Un conteneur 20' contient ${v.pcs20} pièces.`,
      }),
      pallet: (v) => ({
        question: "Combien de modules par palette ?",
        answer: `${v.pcsPallet} pièces, soit ${v.kwpPallet} kWc à la classe ${v.maxW} W.`,
      }),
      voc: (v) => ({
        question: "Quelle est la tension Voc du module en hiver ?",
        answer: `La Voc aux STC pour la classe ${v.maxW} W est de ${v.vocStc} V, et le coefficient de température de la Voc de ${v.betaVoc} %/°C. À une température de cellule de −25 °C, la tension monte à env. ${v.vocCold} V (calcul indicatif). Le nombre de modules par chaîne est choisi pour ne pas dépasser la tension maximale de l'onduleur et du système (${v.maxSys} V DC).`,
      }),
      warranty: (v) => ({
        question: "Quelle est la garantie ?",
        answer: `${v.warrantyP} ans de garantie produit et ${v.warrantyL} ans de garantie linéaire de puissance.`,
      }),
      certs: (v) => ({ question: "Quels certificats a le module ?", answer: v.certs }),
      dims: (v) => ({
        question: "Combien pèse le module et quelles sont ses dimensions ?",
        answer: `${v.dims} mm, ${v.weight} kg, soit ${v.arealMass} kg/m² (module seul${v.glassSuffix}).`,
      }),
      glassSuffix: ", sans structure porteuse",
      bif: (v) => ({
        question: "Que rapporte la face arrière d'un module bifacial ?",
        answer: `La fiche donne un exemple pour un module de ${v.bifBase} W : avec 10 % de gain, la puissance passe à ${v.bif10} W, avec 20 % à ${v.bif20} W, avec 30 % à ${v.bif30} W. Le gain réel dépend de l'albédo, de la hauteur et de l'espacement des rangées.`,
      }),
      flex: {
        question:
          "Le module convient-il à un ouvrage soumis aux vibrations, comme un stade ou un hall avec pont roulant ?",
        answer:
          "Le faible poids, l'absence de verre et la pose sans perçage sont de vrais atouts sur des structures qui travaillent. Le fabricant n'a toutefois pas encore fourni de résultats d'essais en charge dynamique : le choix pour un bâtiment précis nécessite donc l'évaluation de son ingénieur structure.",
      },
      price: {
        question: "Quel est le prix ?",
        answer:
          "Prix sur demande. Il dépend de la classe de puissance, du nombre de conteneurs, du lieu et du délai de livraison.",
      },
    },
    heroNote: (v) =>
      `Livraisons par conteneur directement du fabricant : ${v.pcsHq} pcs par conteneur 40'HQ.`,
    usesTitle: "Applications",
    flexNote: (v) =>
      `Pose par collage, sans perçage ni structure. Rendement plus faible et garantie plus courte (${v.warrantyP}/${v.warrantyL} ans) que les modules en verre — ce module a du sens là où l'alternative est l'absence d'installation ou le renforcement de la charpente. Les modules sont posés à plat ou suivent la courbe : la production dépend donc de l'orientation de la toiture. Les supports admissibles et la colle sont confirmés avant l'offre.`,
    electricalTitle: "Caractéristiques électriques",
    stcCaption: "Conditions STC (1000 W/m², 25 °C, AM1,5)",
    rows: {
      pmax: "Puissance maximale Pmax",
      eff: "Rendement du module",
      voc: "Tension de circuit ouvert Voc",
      isc: "Courant de court-circuit Isc",
      vmp: "Tension au point de puissance max. Vmp",
      imp: "Courant au point de puissance max. Imp",
    },
    tolerance: "Tolérance Pmax selon la fiche technique du fabricant.",
    noctCaption: "Conditions NOCT (800 W/m², ambiante 20 °C, vent 1 m/s)",
    noctMissing:
      "Les données NOCT de ce modèle seront publiées après confirmation de la fiche à jour par le fabricant.",
    tempCaption: "Coefficients de température",
    value: "Valeur",
    bifCaption: "Gain en face arrière — exemple de la fiche pour {w} W",
    bifRow: "Puissance totale",
    bifNote: "Le gain réel dépend de l'albédo, de la hauteur de pose et de l'espacement des rangées.",
    mechCaption: "Caractéristiques mécaniques et conditions d'utilisation",
    param: "Paramètre",
    mech: {
      dims: "Dimensions",
      mass: "Poids",
      arealMass: "Poids au m² (module seul)",
      cells: "Cellules",
      glass: "Verre",
      frontCover: "Face avant",
      bending: "Rayon de courbure",
      mounting: "Pose",
      snow: "Charge — neige",
      wind: "Charge — vent",
      junctionBox: "Boîte de jonction",
      connector: "Connecteurs",
      maxSys: "Tension système max.",
      fuse: "Calibre max. du fusible série",
      fire: "Classe feu",
      safety: "Classe de protection",
      opTemp: "Température de fonctionnement",
    },
    packCaption: "Emballage et puissance par unité de transport",
    unit: "Unité",
    pcsCol: "Pièces",
    pack: { pallet: "Palette", c20: "Conteneur 20'", c40: "Conteneur 40'HQ" },
    packNote:
      "Pièces selon la fiche technique ; les kWc sont calculés pour la classe de puissance la plus élevée.",
    warrantyTitle: "Garanties et certificats",
    warrantyText: (v) =>
      `${v.warrantyP} ans de garantie produit, ${v.warrantyL} ans de garantie linéaire de puissance.`,
    allDocs: "Toutes les fiches techniques et certificats",
    compareTitle: "Comparaison avec les modèles voisins",
    compareCta: "Besoin du {model} par conteneur ?",
    compare: {
      technology: "Technologie",
      power: "Puissance",
      eff: "Rendement max.",
      dims: "Dimensions",
      mass: "Poids",
      bifacial: "Bifacial",
      warranty: "Garantie",
      pcsHq: "Pièces par 40'HQ",
    },
    faqTitle: "Questions sur le {model}",
    ld: {
      technology: "Technologie",
      power: "Puissance maximale (STC)",
      eff: "Rendement maximal",
      cells: "Nombre de cellules",
      bifacial: "Bifacial",
      coeff: "Coefficient de température Pmax",
      warrantyP: "Garantie produit",
      warrantyL: "Garantie linéaire de puissance",
      years: "ans",
    },
  },
  docs: {
    metaTitle: "Fiches techniques et certificats des modules Amerisolar",
    metaDescription:
      "Fiches techniques PDF et certificats des modules Amerisolar : TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, brouillard salin, ammoniac, ISO, DEEE.",
    h1: "Fiches techniques et certificats",
    lead: "Documentation du fabricant à télécharger sans inscription. Pour chaque module, vous voyez sa fiche technique et les certificats qui le couvrent — avec la plage de puissance exacte.",
    toc: "Sommaire",
    datasheetsAnchor: "Fiches techniques",
    byModuleTitle: "Fiches techniques et certificats par module",
    requestDatasheet: "Demander la fiche technique",
    certsOnRequest: "Les certificats de ce modèle sont fournis avec l'offre.",
    sections: {
      product: {
        title: "Certificats des modules IEC 61215 et IEC 61730",
        intro:
          "Certification de type du module par un organisme indépendant : durabilité et fiabilité (IEC 61215) et sécurité électrique (IEC 61730). Pour chaque certificat, nous indiquons les classes de puissance de notre gamme qu'il couvre.",
      },
      ce: {
        title: "Attestations de conformité CE",
        intro:
          "Attestations TÜV SÜD de conformité à l'EN IEC 61730 — base du marquage CE des modules sur le marché de l'UE.",
      },
      tests: {
        title: "Essais de résistance",
        intro:
          "Essais complémentaires TÜV SÜD : résistance à la dégradation PID, au brouillard salin (installations côtières) et à l'ammoniac (bâtiments agricoles).",
      },
      iso: {
        title: "Systèmes de management de l'usine",
        intro: "Certificats ISO de l'usine de modules de Nantong (Chine).",
      },
      weee: {
        title: "Recyclage et conformité DEEE",
        intro:
          "Enregistrement du fabricant auprès de PV CYCLE — collecte et recyclage des modules en fin de vie selon la directive DEEE.",
      },
    },
    card: {
      body: "Organisme",
      number: "Numéro",
      holder: "Titulaire",
      standards: "Normes",
      issued: "Délivré le",
      validUntil: "Valable jusqu'au",
      modules: "Modules de notre gamme",
      download: "Télécharger le PDF",
    },
  },
  rfqPage: {
    metaTitle: "Demande de devis — modules PV par conteneur | Amerisolar",
    metaDescription:
      "Demandez un prix par conteneur pour les modules Amerisolar, directement du fabricant. Indiquez modèle, quantité en kWc ou conteneurs, lieu et délai.",
    h1: "Demander un prix par conteneur",
    lead: "Nous livrons les modules Amerisolar par conteneur, directement du fabricant. Plus vous décrivez précisément votre besoin — modèle, quantité, lieu et délai de livraison —, plus vite nous préparons une offre concrète.",
    emailBoxStrong: "Vous préférez l'e-mail ?",
    emailBoxText: "Écrivez-nous directement, sans formulaire.",
    asideOfferTitle: "Ce que contient l'offre",
    asideOffer: [
      "Le prix pour la classe de puissance et la quantité choisies",
      "Les conditions et le délai de livraison",
      "Les fiches techniques et certificats des modèles choisis",
    ],
    asideContainerTitle: "Que représente un conteneur ?",
    asideContainer:
      "Un conteneur 40'HQ contient de 558 à 1 260 modules selon le modèle — soit environ 400 à plus de 720 kWc. Vous ne connaissez pas la quantité exacte ? Indiquez la puissance approximative de l'installation.",
  },
  form: {
    honeypot: "Site web",
    s1: "1. Qui êtes-vous ?",
    s2: "2. Modules et quantité",
    s3: "3. Livraison et délai",
    s4: "4. Coordonnées",
    types: {
      distributor: "Grossiste / distributeur d'énergies renouvelables",
      trader: "Négociant / importateur",
      installer: "Entreprise d'installation",
      epc: "EPC / développeur de centrales au sol",
      business: "Entreprise — bâtiment propre",
    },
    timelines: {
      asap: "Dès que possible",
      "1-3m": "1 à 3 mois",
      "3-6m": "3 à 6 mois",
      "6m+": "Plus de 6 mois",
      tender: "Appel d'offres / projet en préparation",
    },
    qtyKwp: "Quantité en kWc",
    qtyKwpPh: "ex. 400",
    qtyContainers: "ou nombre de conteneurs",
    qtyContainersPh: "ex. 1",
    delivery: "Lieu de livraison",
    deliveryPh: "ville ou code postal",
    timeline: "Délai",
    choose: "Choisir",
    name: "Nom et prénom *",
    email: "E-mail *",
    phone: "Téléphone",
    company: "Société",
    vatId: "N° TVA intracommunautaire",
    message: "Message",
    messagePh: "ex. classe de puissance, type de projet, documents requis",
    consent: "* J'accepte d'être contacté au sujet de cette demande.",
    consentAdmin: "Le responsable du traitement des données est TODO(klient) : raison sociale.",
    marketing:
      "Je souhaite recevoir des informations sur la disponibilité des modules et les nouveaux arrivages (facultatif).",
    submit: "Envoyer la demande",
    sending: "Envoi en cours…",
    okTitle: "Demande envoyée",
    okText:
      "Merci. Nous répondrons à l'adresse e-mail indiquée avec une offre ou des questions complémentaires.",
    okUrgent: "En cas d'urgence, écrivez à",
    errors: {
      type: "Indiquez qui vous êtes.",
      number: "Saisissez un nombre supérieur à zéro.",
      vatId: "Saisissez un numéro de TVA valide.",
      name: "Saisissez vos nom et prénom.",
      email: "Saisissez une adresse e-mail valide.",
      consent: "Le consentement au contact est nécessaire pour que nous puissions répondre.",
      qty: "Indiquez la quantité en kWc ou le nombre de conteneurs.",
      fix: "Corrigez les champs signalés.",
      site: "Site inconnu.",
      spam: "La vérification anti-spam a échoué. Rechargez la page et réessayez.",
      rate: "Plusieurs demandes ont déjà été envoyées depuis cette adresse. Réessayez dans une demi-heure.",
      failed: "La demande n'a pas pu être envoyée.",
      fallbackEmail: "Écrivez-nous directement à {email}.",
      fallback: "Réessayez plus tard.",
    },
  },
  calc: {
    s1: "1. Choisissez le module",
    s2: "2. Classe de puissance",
    s3: "3. Que connaissez-vous ?",
    minNote: "Nous vendons par conteneur — le minimum est d'un conteneur.",
    modePower: "Puissance de l'installation",
    modeContainers: "Nombre de conteneurs",
    power: "Puissance de l'installation",
    powerAria: "Puissance de l'installation en MWc",
    oneContainer: "{mw} MWc (1 conteneur)",
    containers: "Nombre de conteneurs 40'HQ",
    containersAria: "Nombre de conteneurs",
    need: "Il vous faut",
    chosen: "Sélectionné",
    containerForms: { one: "conteneur", other: "conteneurs" } as Plural,
    powerLabel: "Puissance",
    modules: "Modules",
    perModule: "pcs de {w} W",
    lastFill:
      "Le dernier conteneur est rempli à {pct} % — ajustez la puissance pour utiliser des conteneurs complets ou ajoutez des modules.",
    quote: {
      one: "Demander un devis pour {n} conteneur",
      other: "Demander un devis pour {n} conteneurs",
    } as Plural,
    datasheet: "Fiche technique PDF",
    note: "Calcul indicatif : {pcs} modules par conteneur 40'HQ selon la fiche{careful}, soit {kwp} kWc par conteneur à {w} W. La quantité exacte et les conditions de livraison figurent dans l'offre.",
    careful: " (nous comptons prudemment sur {min})",
    flexible: "module flexible",
    glass: "module en verre",
  },
};

export default fr;
