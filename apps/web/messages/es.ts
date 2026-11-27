// apps/web/messages/es.ts
// Español — amerisolar.es (mercado: España).
// Traducción asistida: revisión por hablante nativo necesaria antes de publicar (CLAUDE.md §5.2).
import type { Plural } from "@/lib/i18n";
import type { Messages } from "./pl";

const es: Messages = {
  common: {
    home: "Inicio",
    pieces: "uds.",
    years: "{p}/{l} años",
    yes: "sí",
    no: "no",
    datasheetPdf: "Ficha PDF",
    downloadDatasheet: "Descargar la ficha técnica PDF",
    technicalParams: "Datos técnicos",
    aiCaption: "Visualización ilustrativa",
    askContainerPrice: "Pedir precio por contenedor",
    askPrice: "Pedir precio",
    seeModules: "Ver los módulos",
    notFoundTitle: "Página no encontrada",
    notFoundText: "Es posible que la dirección haya cambiado o que la página aún no esté publicada.",
    notFoundBack: "Ir a la página de inicio",
    pdf: "PDF",
    breadcrumbs: "Ruta de navegación",
  },
  routes: {
    home: "Inicio",
    catalog: "Nuestros módulos",
    installers: "Para instaladores",
    farms: "Plantas solares",
    special: "Aplicaciones especiales",
    wholesale: "Mayorista y distribución",
    tools: "Herramientas",
    docs: "Fichas técnicas y certificados",
    about: "Sobre Amerisolar",
    rfq: "Solicitar presupuesto",
    contact: "Contacto",
    privacy: "Privacidad",
  },
  header: {
    skip: "Ir al contenido",
    logoAria: "Amerisolar — inicio",
    mainNav: "Menú principal",
    menu: "Menú",
    switcher: "País e idioma",
  },
  footer: {
    modules: "Módulos",
    service: "Sitio",
    note: "Los datos de los módulos proceden de las fichas técnicas del fabricante. Precios bajo consulta.",
  },
  cta: {
    titleModel: "Precio del {model} por contenedor",
    title: "Un contenedor de módulos directo del fabricante",
    text: "Indique el modelo, la cantidad en kWp o contenedores, el lugar y el plazo de entrega. Prepararemos una oferta con el precio para la clase de potencia elegida y las condiciones de entrega.",
    noForm: "¿Prefiere no rellenar el formulario? Escríbanos directamente a",
  },
  email: {
    prefix: "o escríbanos directamente:",
    prefixShort: "o escriba a:",
    prefixOr: "o escriba a:",
    button: "Escribir: {email}",
    mobile: "Enviar un email",
    mobileForm: "Pedir oferta",
    tableLink: "Email",
    tableSr: "sobre {model}",
    subjectModel: "Solicitud de precio: {model}",
    subject: "Solicitud de precio por contenedor",
    subjectAssessment: "Evaluación preliminar del edificio — módulos flexibles",
    subjectQuestion: "Consulta sobre módulos Amerisolar",
    subjectDatasheet: "Ficha técnica {model}",
    body: {
      greeting: "Buenos días:",
      request: "les solicito una oferta de módulos {model}.",
      qty: "Cantidad (kWp o número de contenedores): {qty}",
      qtyContainers: "{n} × 40'HQ",
      qtyKwp: " (aprox. {kwp} kWp)",
      delivery: "Lugar de entrega: ",
      term: "Plazo: ",
      company: "Empresa / NIF: ",
      phone: "Teléfono: ",
      bye: "Un saludo",
    },
  },
  catalogLib: {
    group: { glass: "Módulos TOPCon de vidrio", flexible: "Línea flexible" },
    kind: {
      flexTopcon: "módulo flexible TOPCon",
      flexPerc: "módulo flexible PERC",
      doubleGlass: "módulo bifacial TOPCon, doble vidrio",
      bifacial: "módulo bifacial TOPCon",
      topcon: "módulo TOPCon tipo N",
    },
    shortKind: {
      flex: "módulo flexible",
      doubleGlass: "TOPCon doble vidrio",
      bifacial: "TOPCon bifacial",
      topcon: "módulo TOPCon",
    },
    tech: {
      flexTopcon: "TOPCon, flexible",
      flexPerc: "PERC, flexible",
      doubleGlass: "TOPCon, doble vidrio",
      topcon: "TOPCon tipo N",
    },
    segment: {
      roof: "Cubiertas residenciales y de empresas, marquesinas",
      large: "Cubiertas industriales y plantas solares",
      flex: "Línea flexible — cubiertas especiales",
    },
    cert: {
      number: "{body}, n.º {number}",
      validUntil: "válido hasta el {date}",
      onDatasheet: "{name} (según ficha técnica)",
      fullRange: "toda la gama ofertada {range}",
      partial: "clases {covered} (ofertadas {offer})",
    },
  },
  productCopy: {
    junctionBox: "IP68, 3 diodos",
    connector: { "MC4 lub kompatybilne": "MC4 o compatibles", "MC4 kompatybilne": "compatibles con MC4" },
    opTemp: "de {min} a {max}",
    bySlug: {
      "as-7m108n-bhc": {
        segments: ["cubiertas residenciales", "pequeñas empresas", "instaladores"],
        glass: "3,2 mm templado con capa antirreflectante (ficha: 'Front/Back Glass')",
      },
      "as-7m120n-hc": {
        segments: ["cubiertas residenciales", "cubiertas de empresas", "instaladores"],
        glass: "3,2 mm templado con capa antirreflectante",
      },
      "as-7m120n-bhc": {
        segments: ["marquesinas", "cubiertas planas", "plantas solares pequeñas", "instaladores"],
        glass: "3,2 mm templado con capa antirreflectante; trasera: backsheet transparente",
      },
      "as-7m144n-hc": {
        segments: ["cubiertas industriales", "plantas solares", "EPC"],
        glass: "3,2 mm templado con capa antirreflectante",
      },
      "as-8m132n-bhc": {
        segments: ["plantas fotovoltaicas", "EPC", "promotores de renovables", "agrivoltaica"],
        glass: "2 mm + 2 mm templado (frontal con antirreflectante)",
      },
      "as-7m144nfl-hc-black": {
        segments: [
          "cubiertas con baja capacidad portante (naves, almacenes, edificios agrícolas)",
          "estructuras con vibraciones y cargas dinámicas (estadios, pabellones, arenas, industria) — previa evaluación del ingeniero de estructuras",
          "cubiertas en arco y curvas",
          "cubiertas con membrana — tras confirmar la compatibilidad del adhesivo",
        ],
        frontCover: "polímero ligero de alta transparencia",
        mounting: "pegado, sin perforaciones y sin estructura",
      },
      "as-7m132fl-hc": {
        segments: [
          "cubiertas con baja capacidad portante (naves, almacenes, edificios agrícolas)",
          "estructuras con vibraciones y cargas dinámicas (estadios, pabellones, arenas, industria) — previa evaluación del ingeniero de estructuras",
          "cubiertas en arco y curvas",
          "cubiertas con membrana — tras confirmar la compatibilidad del adhesivo",
        ],
      },
    },
  },
  docTitles: {
    datasheet: "Ficha técnica {model}",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0021.pdf": "Certificado TÜV SÜD Z2 093522 0021",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0023.pdf": "Certificado TÜV SÜD Z2 093522 0023",
    "/dokumenty/amerisolar-tuv-rheinland-pv-50674535-0001.pdf": "Certificado TÜV Rheinland PV 50674535 0001",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0025.pdf": "Certificado TÜV SÜD Z2 093522 0025",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0030.pdf": "Certificado TÜV SÜD Z2 093522 0030",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0022-ce.pdf":
      "Certificado de conformidad CE TÜV SÜD N8A 093522 0022",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0024-ce.pdf":
      "Certificado de conformidad CE TÜV SÜD N8A 093522 0024",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0027-ce.pdf":
      "Certificado de conformidad CE TÜV SÜD N8A 093522 0027",
    "/dokumenty/amerisolar-tuv-sud-n8a-093522-0031-ce.pdf":
      "Certificado de conformidad CE TÜV SÜD N8A 093522 0031",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0018-anti-pid.pdf":
      "Resistencia al PID — TÜV SÜD Z2 093522 0018",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0019-mgla-solna.pdf":
      "Resistencia a la niebla salina — TÜV SÜD Z2 093522 0019",
    "/dokumenty/amerisolar-tuv-sud-z2-093522-0020-amoniak.pdf":
      "Resistencia al amoníaco — TÜV SÜD Z2 093522 0020",
    "/dokumenty/amerisolar-iso-9001.pdf": "ISO 9001:2015 — gestión de la calidad",
    "/dokumenty/amerisolar-iso-14001.pdf": "ISO 14001:2015 — gestión ambiental",
    "/dokumenty/amerisolar-iso-45001.pdf": "ISO 45001:2018 — seguridad y salud en el trabajo",
    "/dokumenty/amerisolar-pv-cycle-wlochy-2026.pdf": "PV CYCLE Italia — cumplimiento RAEE",
    "/dokumenty/amerisolar-pv-cycle-niemcy-weee-2026.pdf": "PV CYCLE Alemania — cumplimiento RAEE",
  },
  drawing: {
    lineupTitle: "Módulos Amerisolar a la misma escala",
    flexSuffix: " (módulo flexible)",
    flexHeading: "Módulos flexibles",
    thickness: "espesor {t} mm",
    dimTitle: "Plano acotado {model}: {l} × {w} × {t} mm",
    profile: "perfil",
  },
  certBadges: {
    title: "Certificados y ensayos",
    intro: "Ensayos de organismos independientes",
    introValid: ", certificados válidos hasta el {date}",
    introTail: ". Todos los documentos se descargan sin registro.",
    more: "Ver fichas técnicas y certificados",
    ce: "Certificados CE",
    salt: "Niebla salina",
    ammonia: "Amoníaco",
    factory: "fábrica de Nantong",
    weee: "reciclaje, directiva RAEE",
  },
  media: {
    farm: "Planta fotovoltaica sobre terreno agrícola llano, filas de módulos en estructuras fijas al sol de la tarde",
    warehouseWinter:
      "Cubierta plana de un almacén en invierno con nieve ligera y filas de módulos fotovoltaicos",
    archedHall: "Nave en arco con finos módulos flexibles pegados a la cubierta curva",
    lightRoof:
      "Cubierta ligera de chapa grecada de una nave logística con módulos flexibles pegados sin estructura",
  },
  home: {
    metaTitle: "Paneles solares al por mayor del fabricante — Amerisolar",
    metaDescription:
      "Módulos fotovoltaicos Amerisolar por contenedor, directos del fabricante: TOPCon 430–720 W, bifaciales, doble vidrio, flexibles. Pida precio.",
    eyebrow: "Por contenedor, directo del fabricante",
    h1: "Paneles solares Amerisolar al por mayor — contenedores del fabricante",
    lead: (v) =>
      `Módulos TOPCon tipo N de ${v.pMin} a ${v.pMax} W, bifaciales, doble vidrio y una línea flexible de ${v.flexMm} mm. Para mayoristas, traders e instaladoras que compran por contenedor.`,
    bullets: (v) => [
      "Suministro directo del fabricante",
      `Contenedor 40'HQ: ${v.hqPcsMin}–${v.hqPcsMax} módulos`,
      "Ficha técnica y certificados de cada modelo",
      `Hasta ${v.glassWL} años de garantía de potencia`,
    ],
    facts: (v) => [
      { value: "desde 1993", label: "en el mercado — según el catálogo del fabricante, California" },
      { value: "aprox. 11 GW", label: "de capacidad de producción según el fabricante (2025)" },
      { value: `${v.marketMw} MW`, label: "de módulos suministrados a España en 2025 (según catálogo)" },
      { value: v.effMax, label: "eficiencia máxima de los módulos de la gama" },
    ],
    lineupTitle: "Siete módulos, una misma escala",
    lineupText: (v) =>
      `Dibujados con las dimensiones y el número de células de las fichas técnicas — desde el compacto ${v.smallModel} para viviendas hasta el ${v.farmModel} para plantas solares.`,
    lineupCta: "Comparar todos los modelos",
    directTitle: "Paneles al por mayor directos del fabricante",
    directText:
      "Su pedido por contenedor va directamente al fabricante de los módulos Amerisolar. Una cadena de suministro más corta significa un precio calculado para todo el lote y documentación directa del fabricante.",
    directCta: "¿Tiene un proyecto de varios cientos de kWp o más?",
    points: (v) => [
      {
        title: "Precio por contenedor",
        text: "Cotizamos todo el lote — un contenedor de 20' o 40'HQ — para la clase de potencia elegida, en lugar de precios por palé.",
      },
      {
        title: "Documentación completa",
        text: "Fichas técnicas con tablas STC y NOCT, coeficientes de temperatura y cargas mecánicas, además de certificados de cada modelo.",
      },
      {
        title: "Una línea para todos los segmentos",
        text: `Módulos de ${v.roofRange} para cubiertas, de ${v.largeRange} para cubiertas industriales y plantas solares, y una línea flexible para cubiertas especiales.`,
      },
      {
        title: "Garantía del fabricante",
        text: `${v.glassWP} años de garantía de producto y ${v.glassWL} años de garantía lineal de potencia en los módulos de vidrio.`,
      },
    ],
    segmentsTitle: "Para mayoristas, traders e instaladoras que compran en volumen",
    segments: (v) => [
      {
        title: "Mayoristas y distribuidores de renovables",
        value: `${v.hqPcsMin}–${v.hqPcsMax}`,
        valueLabel: "módulos por contenedor 40'HQ, según el modelo",
        cta: "Consultar condiciones mayoristas",
        text: `Toda la línea de un solo proveedor — desde módulos para cubierta hasta módulos para plantas y flexibles. Fichas técnicas y certificados para la reventa, módulos en palés de ${v.palletMin}–${v.palletMax} unidades.`,
      },
      {
        title: "Traders e importadores",
        value: `${v.kwpMin}–${v.kwpMax} kWp`,
        valueLabel: "por contenedor 40'HQ, según el modelo (cálculo)",
        cta: "Consultar envíos de varios contenedores",
        text: "Compra por contenedor directa al fabricante, sin mayorista intermedio. Especificación, clases de potencia y condiciones de entrega se acuerdan para todo el lote.",
      },
      {
        title: "Instaladoras y EPC",
        value: `${v.farmKwp} kWp`,
        valueLabel: `por contenedor de módulos ${v.farmModel} ${v.farmMaxW} W (cálculo)`,
        cta: "Consultar suministro para un proyecto",
        text: `Módulos de ${v.roofRange} para cubiertas de empresas y marquesinas y de ${v.largeRange} para cubiertas industriales y plantas solares. Un contenedor es el stock de un tipo de módulo para muchas obras.`,
      },
    ],
    modelsTitle: "Módulos fotovoltaicos de nuestra gama",
    modelsText: (v) => `Eficiencia de hasta el ${v.effMax}. Datos STC de las fichas técnicas.`,
    table: {
      model: "Modelo",
      technology: "Tecnología",
      power: "Potencia",
      effMax: "Eficiencia máx.",
      mass: "Peso",
      warranty: "Garantía",
      actions: "Ficha técnica y consulta",
    },
    techTitle: "TOPCon tipo N, bifacial, doble vidrio — qué aporta en la práctica",
    tech: (v) => [
      {
        title: "Menos pérdidas con calor",
        text: `Los módulos TOPCon de la gama tienen un coeficiente de temperatura de potencia de ${v.topconCoeff} %/°C. Como comparación, el módulo PERC ${v.percModel}: ${v.percCoeff} %/°C. Con la célula a 65 °C (40 °C por encima de STC) la diferencia es de unos ${v.heatDiff} puntos porcentuales de potencia (cálculo).`,
      },
      {
        title: "Medias células",
        text: "Todos los módulos de vidrio de la gama tienen células cortadas por la mitad (half-cell). Una corriente menor en cada mitad reduce las pérdidas resistivas y el efecto del sombreado parcial en todo el módulo.",
      },
      {
        title: "Potencia por ambas caras",
        text: `Los módulos bifaciales captan también la luz reflejada por el suelo. El ${v.farmModel} tiene además construcción de doble vidrio — vidrio en ambas caras en lugar de backsheet: ${v.farmGlass}.`,
      },
    ],
    bifCaption: (v) =>
      `Ganancia trasera de un módulo bifacial — ejemplo de la ficha ${v.farmModel} (${v.bifBase} W)`,
    bifRowHeader: "Ganancia trasera",
    bifRow: "Potencia total",
    bifNote:
      "La ganancia real depende del albedo del suelo (césped, grava, membrana), de la altura de montaje y de la separación entre filas.",
    logisticsTitle: "Módulos y kWp por contenedor",
    logisticsText:
      "Unidades según las fichas técnicas. Los kWp se calculan para la clase de potencia más alta — en la oferta calculamos con la clase que usted elija.",
    logisticsTable: { pallet: "Palé", c20: "Contenedor 20'", c40: "Contenedor 40'HQ", kwp40: "kWp en 40'HQ" },
    farmBoxTitle: "Planta de 1 MWp — ¿cuántos contenedores?",
    farmBoxText: (v) =>
      `Con módulos ${v.farmModel} ${v.farmMaxW} W: ${v.farm1MwContainers} contenedores 40'HQ (${v.farm1MwModules} módulos, cálculo).`,
    farmBoxStrong: (v) => `${v.farm1MwContainers} contenedores 40'HQ`,
    farmBoxCta: "Consultar suministro para una planta",
    calcTitle: "¿Cuántos contenedores necesita?",
    calcText:
      "Elija el módulo y la clase de potencia, e introduzca la potencia de la instalación o el número de contenedores. Lleve el resultado a la solicitud de presupuesto con un clic.",
    stringTitle: "Voc en invierno y longitud del string",
    stringText1:
      "En un día frío y soleado la tensión del módulo supera el valor de la ficha. Por eso el número de módulos por string se calcula para la temperatura mínima de célula — aquí −25 °C, un valor de diseño habitual en Europa central; el proyectista usa la mínima del emplazamiento.",
    stringFormula: "Fórmula: Voc(T) = Voc(STC) × (1 + βVoc × (T − 25 °C)).",
    stringExample: (v) => `Ejemplo: ${v.industrialModel} ${v.industrialMaxW} W`,
    stringRows: (v) => [
      { k: "Voc en STC", v: `${v.vocStc} V` },
      { k: "βVoc", v: `${v.betaVoc} %/°C` },
      { k: "Voc a −25 °C", v: `${v.vocCold} V`, strong: true },
      { k: "Máx. módulos por string, sistema 1500 V", v: v.str1500, strong: true },
      { k: "Máx. módulos por string, sistema 1000 V", v: v.str1000 },
    ],
    stringNote:
      "Cálculo orientativo. La longitud final del string depende también del rango MPPT y de la tensión máxima de entrada del inversor — los comprueba el proyectista.",
    flexTitle: "¿La cubierta no soporta paneles? ¿La estructura vibra? Hay solución",
    flexText:
      "Los módulos flexibles Amerisolar se pegan directamente sobre la cubierta — sin estructura de soporte y sin perforaciones.",
    flexStats: (v) => [
      { k: "peso por m²", v: "aprox. 3 kg" },
      { k: "espesor", v: `${v.flexMm} mm` },
      { k: "perforaciones en la cubierta", v: "0" },
    ],
    flexUses: (v) => [
      {
        title: "Cubiertas con baja capacidad portante",
        text: "Naves de chapa grecada y panel sándwich, edificios agrícolas, cubiertas antiguas sin reserva de carga.",
      },
      {
        title: "Estructuras con vibraciones",
        text: "Estadios, pabellones deportivos, arenas, plantas con maquinaria y puentes grúa — poco peso, sin vidrio ni tornillos. Selección previa evaluación del ingeniero de estructuras del edificio.",
      },
      {
        title: "Cubiertas en arco",
        text: `Radio de curvatura ${v.bendRadius} m — el módulo se adapta a la curva sin estructuras complejas.`,
      },
    ],
    flexHonest: (v) =>
      `Con sinceridad: eficiencia de hasta el ${v.flexEff} y garantía de ${v.flexWP}/${v.flexWL} años — menos que en los módulos de vidrio. Este módulo tiene sentido donde la alternativa es no instalar o reforzar la estructura.`,
    flexCta: "Solicitar una evaluación preliminar del edificio",
    massCaption: "Peso del módulo solo por m² de superficie",
    massNote:
      "Datos de las fichas técnicas. En los sistemas de vidrio se suma el peso de la estructura o del lastre — depende del proyecto, por eso no lo incluimos aquí.",
    winterTitle: "Cargas de nieve y viento en la ficha técnica",
    winterText: (v) =>
      `Según sus fichas técnicas, los módulos de vidrio Amerisolar soportan una carga de nieve de ${v.snowPa} Pa y de viento de ${v.windPa} Pa, con un rango de temperatura de funcionamiento ${v.opTemp} °C. La idoneidad para la zona de nieve y viento del emplazamiento la confirma el proyectista.`,
    europeTitle: "Amerisolar en Europa",
    europeText: (v) =>
      `Suministros de módulos en 2025 según el catálogo del fabricante. España, con ${v.marketMw} MW, es uno de los mercados europeos de la marca.`,
    orderTitle: "Cómo pedir un contenedor de módulos",
    orderSteps: [
      {
        t: "Consulta",
        d: "Modelo, cantidad en kWp o contenedores, lugar y plazo de entrega — por formulario o email.",
      },
      {
        t: "Oferta",
        d: "Precio para la clase de potencia elegida, condiciones de entrega, fichas técnicas y certificados.",
      },
      { t: "Pedido", d: "Confirmación de especificación, plazo y condiciones de pago." },
      { t: "Entrega", d: "Un contenedor de módulos en el lugar y la fecha acordados." },
    ],
    orderCta: "Empiece con una consulta — solo lleva unos minutos.",
    trustTitle: "Garantías, normas y fabricante",
    trustCta: "Descargar fichas técnicas y certificados",
    trust: (v) => [
      {
        title: "Garantías",
        text: `Módulos de vidrio: ${v.glassWP} años de producto y ${v.glassWL} años de garantía lineal de potencia. Línea flexible: ${v.flexWP} y ${v.flexWL} años.`,
      },
      {
        title: "Normas y certificados",
        text: "Certificados TÜV SÜD y TÜV Rheinland (IEC 61215, IEC 61730), certificados CE, ensayos de resistencia a PID, niebla salina y amoníaco, e ISO 9001, 14001 y 45001 de la fábrica. En cada certificado indicamos el rango de potencia exacto que cubre.",
      },
      {
        title: "Fabricante",
        text: "Worldwide Energy and Manufacturing USA Co., Ltd. — según su catálogo opera desde 1993 (California) y con la marca Amerisolar desde 2007.",
      },
    ],
    faqTitle: "Preguntas sobre paneles solares al por mayor",
    faqCta: "Preguntar en una consulta",
    faq: (v) => [
      {
        question: "¿Puedo comprar módulos Amerisolar directamente al fabricante?",
        answer:
          "Sí. Suministramos por contenedor directamente desde el fabricante — Worldwide Energy and Manufacturing USA Co., Ltd., propietaria de la marca Amerisolar. El precio y las condiciones de entrega se indican en la oferta.",
      },
      {
        question: "¿Cuántos kWp caben en un contenedor 40'HQ?",
        answer: `Según el modelo, de ${v.kwpMin} a ${v.kwpMax} kWp (cálculo: módulos por contenedor según la ficha × clase de potencia más alta). Por ejemplo, ${v.farmModel}: ${v.farmPieces} unidades, ${v.farmKwp} kWp.`,
      },
      {
        question: "¿En qué se diferencia TOPCon de PERC?",
        answer: `TOPCon es una célula tipo N con contacto trasero pasivado. En nuestra gama se traduce, entre otras cosas, en un coeficiente de temperatura de potencia más bajo: ${v.topconCoeff} %/°C en los módulos TOPCon frente a ${v.percCoeff} %/°C en el módulo PERC ${v.percModel} — con calor, el módulo TOPCon pierde menos potencia.`,
      },
      {
        question: "¿Merecen la pena los módulos bifaciales?",
        answer: `En plantas solares, marquesinas y cubiertas planas con superficie clara — normalmente sí. La ficha del ${v.farmModel} da un ejemplo: un módulo de ${v.bifBase} W con un 20 % de ganancia trasera da ${v.bifGain20} W. La ganancia real depende del albedo y de la altura de montaje.`,
      },
      {
        question: "¿Qué garantías tienen los módulos?",
        answer: `Módulos de vidrio: ${v.glassWP} años de garantía de producto y ${v.glassWL} años de garantía lineal de potencia. Línea flexible: ${v.flexWP} y ${v.flexWL} años.`,
      },
      {
        question: "¿Qué certificados tienen los módulos?",
        answer:
          "Los módulos de la gama tienen certificados TÜV SÜD o TÜV Rheinland según IEC 61215 e IEC 61730 y certificados CE — cada uno para un rango de potencia concreto, que indicamos en la página de fichas técnicas. La fábrica tiene certificados ISO 9001, ISO 14001 e ISO 45001. Todos los documentos se descargan sin registro.",
      },
      {
        question: "¿Qué hacer si la cubierta no soporta paneles convencionales?",
        answer: `Considere la línea flexible: aprox. 3 kg/m², ${v.flexMm} mm de espesor, montaje pegado sin perforaciones. La selección para un edificio concreto requiere la evaluación de un ingeniero de estructuras — envíenos una descripción de la cubierta en la consulta.`,
      },
      {
        question: "¿Tienen almacén en España?",
        answer:
          "No. Usted pide por contenedor directamente al fabricante — así el precio se aplica a todo el lote, sin costes de un almacén intermedio. Las condiciones y el lugar de entrega se acuerdan en la oferta.",
      },
      {
        question: "¿Cuál es el pedido mínimo?",
        answer:
          "Vendemos por contenedor. La tabla anterior muestra cuántos módulos y kWp caben en un contenedor de 20' y de 40'HQ para cada modelo; el mínimo exacto para el modelo elegido se indica en la oferta.",
      },
      {
        question: "¿A quién venden los módulos?",
        answer:
          "A empresas que compran por contenedor: mayoristas y distribuidores de renovables, traders e importadores, e instaladoras y EPC con grandes volúmenes.",
      },
      {
        question: "¿Cuál es el precio de los paneles?",
        answer:
          "Precio bajo consulta. Depende del modelo y la clase de potencia, del número de contenedores, del lugar y del plazo de entrega. Envíe una consulta y le responderemos con una oferta concreta.",
      },
    ],
  },
  catalog: {
    metaTitle: "Paneles solares Amerisolar 430–720 W — catálogo",
    metaDescription:
      "Catálogo de módulos Amerisolar: TOPCon tipo N, bifaciales, doble vidrio y flexibles. Datos completos de las fichas, embalaje y kWp por contenedor.",
    breadcrumb: "Nuestros módulos",
    h1: "Nuestros módulos — paneles solares Amerisolar",
    lead: "{count} modelos de {min} a {max} W. Descargue la ficha técnica PDF de cada módulo — al momento, sin registro y sin escribir un email.",
    intro: {
      glass:
        "Módulos con vidrio templado y marco: para cubiertas residenciales y de empresas, marquesinas, cubiertas industriales y plantas solares.",
      flexible:
        "Módulos de 2 mm de espesor montados con adhesivo, sin estructura ni perforaciones — para cubiertas con capacidad portante limitada y cubiertas en arco.",
    },
    stat: { power: "potencia", eff: "eficiencia máx.", dims: "dimensiones", hq: "40'HQ" },
    hqValue: "{pcs} uds., {kwp} kWp",
    note: "kWp por contenedor: cálculo a partir de las unidades de la ficha técnica y la clase de potencia más alta.",
  },
  product: {
    meta: (v) => `${v.model} ${v.minW}–${v.maxW} W — ${v.shortKind}`,
    description: (v) =>
      `${v.model}: ${v.kind} ${v.minW}–${v.maxW} W, eficiencia hasta el ${v.eff}, ${v.weight} kg.`,
    descriptionTail: (v) =>
      ` Tablas STC/NOCT, ${v.pcsHq} uds. por 40'HQ, garantía ${v.warrantyP}/${v.warrantyL} años.`,
    benefit: {
      eff: (v) => `eficiencia máx., ${v.cells} células, ${v.powerRange}`,
      flexMass: (v) => `${v.weight} kg, espesor ${v.thickness} mm`,
      bending: "radio mínimo de curvatura — cubiertas en arco",
      snow: (v) => `carga de nieve, viento ${v.windPa} Pa`,
      bif: (v) => `de un módulo de ${v.bifBase} W con un 20 % de ganancia trasera (ejemplo de la ficha)`,
      warranty: "garantía de producto / lineal de potencia",
    },
    faq: {
      hq: (v) => ({
        question: `¿Cuántos módulos ${v.model} caben en un contenedor 40'HQ?`,
        answer: `Según la ficha técnica, ${v.pcsHq} unidades. Con la clase de ${v.maxW} W son ${v.kwpHq} kWp (cálculo: unidades × potencia del módulo). Un contenedor de 20' lleva ${v.pcs20} unidades.`,
      }),
      pallet: (v) => ({
        question: "¿Cuántos módulos hay en un palé?",
        answer: `${v.pcsPallet} unidades, es decir, ${v.kwpPallet} kWp con la clase de ${v.maxW} W.`,
      }),
      voc: (v) => ({
        question: "¿Qué tensión Voc tiene el módulo en invierno?",
        answer: `La Voc en STC para la clase de ${v.maxW} W es de ${v.vocStc} V y el coeficiente de temperatura de la Voc es de ${v.betaVoc} %/°C. Con la célula a −25 °C la tensión sube a unos ${v.vocCold} V (cálculo orientativo). El número de módulos por string se elige para no superar la tensión máxima del inversor y del sistema (${v.maxSys} V DC).`,
      }),
      warranty: (v) => ({
        question: "¿Cuál es la garantía?",
        answer: `${v.warrantyP} años de garantía de producto y ${v.warrantyL} años de garantía lineal de potencia.`,
      }),
      certs: (v) => ({ question: "¿Qué certificados tiene el módulo?", answer: v.certs }),
      dims: (v) => ({
        question: "¿Cuánto pesa el módulo y qué dimensiones tiene?",
        answer: `${v.dims} mm, ${v.weight} kg, es decir, ${v.arealMass} kg/m² (solo el módulo${v.glassSuffix}).`,
      }),
      glassSuffix: ", sin estructura de soporte",
      bif: (v) => ({
        question: "¿Cuánto aporta la cara trasera de un módulo bifacial?",
        answer: `La ficha da un ejemplo para un módulo de ${v.bifBase} W: con un 10 % de ganancia la potencia sube a ${v.bif10} W, con un 20 % a ${v.bif20} W y con un 30 % a ${v.bif30} W. La ganancia real depende del albedo, de la altura y de la separación entre filas.`,
      }),
      flex: {
        question:
          "¿Sirve el módulo para una estructura con vibraciones, como un estadio o una nave con puente grúa?",
        answer:
          "El poco peso, la ausencia de vidrio y el montaje sin perforaciones son ventajas reales en estructuras que trabajan. Sin embargo, el fabricante aún no ha presentado resultados de ensayos de carga dinámica, por lo que la selección para un edificio concreto requiere la evaluación de su ingeniero de estructuras.",
      },
      price: {
        question: "¿Cuál es el precio?",
        answer:
          "Precio bajo consulta. Depende de la clase de potencia, del número de contenedores, del lugar y del plazo de entrega.",
      },
    },
    heroNote: (v) =>
      `Suministro por contenedor directo del fabricante: ${v.pcsHq} uds. por contenedor 40'HQ.`,
    usesTitle: "Aplicaciones",
    flexNote: (v) =>
      `Montaje pegado, sin perforaciones ni estructura. Menor eficiencia y garantía más corta (${v.warrantyP}/${v.warrantyL} años) que los módulos de vidrio — este módulo tiene sentido donde la alternativa es no instalar o reforzar la estructura de la cubierta. Los módulos van en plano o siguiendo la curva, por lo que la producción depende de la orientación de la cubierta. Los soportes admitidos y el adhesivo se confirman antes de la oferta.`,
    electricalTitle: "Datos eléctricos",
    stcCaption: "Condiciones STC (1000 W/m², 25 °C, AM1,5)",
    rows: {
      pmax: "Potencia máxima Pmax",
      eff: "Eficiencia del módulo",
      voc: "Tensión en circuito abierto Voc",
      isc: "Corriente de cortocircuito Isc",
      vmp: "Tensión en el punto de máxima potencia Vmp",
      imp: "Corriente en el punto de máxima potencia Imp",
    },
    tolerance: "Tolerancia de Pmax según la ficha técnica del fabricante.",
    noctCaption: "Condiciones NOCT (800 W/m², ambiente 20 °C, viento 1 m/s)",
    noctMissing:
      "Publicaremos los datos NOCT de este modelo cuando el fabricante confirme la ficha técnica actual.",
    tempCaption: "Coeficientes de temperatura",
    value: "Valor",
    bifCaption: "Ganancia trasera — ejemplo de la ficha para {w} W",
    bifRow: "Potencia total",
    bifNote: "La ganancia real depende del albedo, de la altura de montaje y de la separación entre filas.",
    mechCaption: "Datos mecánicos y condiciones de funcionamiento",
    param: "Parámetro",
    mech: {
      dims: "Dimensiones",
      mass: "Peso",
      arealMass: "Peso por m² (solo módulo)",
      cells: "Células",
      glass: "Vidrio",
      frontCover: "Cubierta frontal",
      bending: "Radio de curvatura",
      mounting: "Montaje",
      snow: "Carga — nieve",
      wind: "Carga — viento",
      junctionBox: "Caja de conexiones",
      connector: "Conectores",
      maxSys: "Tensión máx. del sistema",
      fuse: "Fusible en serie máx.",
      fire: "Clase de fuego",
      safety: "Clase de protección",
      opTemp: "Temperatura de funcionamiento",
    },
    packCaption: "Embalaje y potencia por unidad de transporte",
    unit: "Unidad",
    pcsCol: "Unidades",
    pack: { pallet: "Palé", c20: "Contenedor 20'", c40: "Contenedor 40'HQ" },
    packNote: "Unidades según la ficha técnica; los kWp se calculan para la clase de potencia más alta.",
    warrantyTitle: "Garantías y certificados",
    warrantyText: (v) =>
      `${v.warrantyP} años de garantía de producto, ${v.warrantyL} años de garantía lineal de potencia.`,
    allDocs: "Todas las fichas técnicas y certificados",
    compareTitle: "Comparación con modelos cercanos",
    compareCta: "¿Necesita el {model} por contenedor?",
    compare: {
      technology: "Tecnología",
      power: "Potencia",
      eff: "Eficiencia máx.",
      dims: "Dimensiones",
      mass: "Peso",
      bifacial: "Bifacial",
      warranty: "Garantía",
      pcsHq: "Unidades por 40'HQ",
    },
    faqTitle: "Preguntas sobre el {model}",
    ld: {
      technology: "Tecnología",
      power: "Potencia máxima (STC)",
      eff: "Eficiencia máxima",
      cells: "Número de células",
      bifacial: "Bifacial",
      coeff: "Coeficiente de temperatura Pmax",
      warrantyP: "Garantía de producto",
      warrantyL: "Garantía lineal de potencia",
      years: "años",
    },
  },
  docs: {
    metaTitle: "Fichas técnicas y certificados de módulos Amerisolar",
    metaDescription:
      "Fichas técnicas PDF y certificados de módulos Amerisolar: TÜV SÜD, TÜV Rheinland, IEC 61215/61730, CE, PID, niebla salina, amoníaco, ISO, RAEE.",
    h1: "Fichas técnicas y certificados",
    lead: "Documentación del fabricante para descargar sin registro. Para cada módulo verá su ficha técnica y los certificados que lo cubren — con el rango de potencia exacto.",
    toc: "Índice",
    datasheetsAnchor: "Fichas técnicas",
    byModuleTitle: "Fichas técnicas y certificados por módulo",
    requestDatasheet: "Solicitar la ficha técnica",
    certsOnRequest: "Los certificados de este modelo se entregan con la oferta.",
    sections: {
      product: {
        title: "Certificados de módulos IEC 61215 e IEC 61730",
        intro:
          "Certificación de tipo del módulo por un organismo independiente: durabilidad y fiabilidad (IEC 61215) y seguridad eléctrica (IEC 61730). En cada certificado indicamos qué clases de potencia de nuestra gama cubre.",
      },
      ce: {
        title: "Certificados de conformidad CE",
        intro:
          "Certificados de TÜV SÜD de conformidad con la EN IEC 61730 — base del marcado CE de los módulos en el mercado de la UE.",
      },
      tests: {
        title: "Ensayos de resistencia",
        intro:
          "Ensayos adicionales de TÜV SÜD: resistencia a la degradación PID, a la niebla salina (instalaciones costeras) y al amoníaco (edificios agrícolas).",
      },
      iso: {
        title: "Sistemas de gestión de la fábrica",
        intro: "Certificados ISO de la fábrica de módulos de Nantong (China).",
      },
      weee: {
        title: "Reciclaje y cumplimiento RAEE",
        intro:
          "Registro del fabricante en PV CYCLE — recogida y reciclaje de módulos al final de su vida útil según la directiva RAEE.",
      },
    },
    card: {
      body: "Organismo",
      number: "Número",
      holder: "Titular",
      standards: "Normas",
      issued: "Emitido",
      validUntil: "Válido hasta",
      modules: "Módulos de nuestra gama",
      download: "Descargar PDF",
    },
  },
  rfqPage: {
    metaTitle: "Presupuesto de módulos FV por contenedor | Amerisolar",
    metaDescription:
      "Pida el precio por contenedor de los módulos Amerisolar directo del fabricante. Indique modelo, cantidad en kWp o contenedores, lugar y plazo.",
    h1: "Pedir precio por contenedor",
    lead: "Suministramos módulos Amerisolar por contenedor, directamente del fabricante. Cuanto más precisa sea su consulta — modelo, cantidad, lugar y plazo de entrega —, antes prepararemos una oferta concreta.",
    emailBoxStrong: "¿Prefiere el email?",
    emailBoxText: "Escríbanos directamente, sin formulario.",
    asideOfferTitle: "Qué incluye la oferta",
    asideOffer: [
      "Precio para la clase de potencia y la cantidad elegidas",
      "Condiciones y plazo de entrega",
      "Fichas técnicas y certificados de los modelos elegidos",
    ],
    asideContainerTitle: "¿Cuánto es un contenedor?",
    asideContainer:
      "Un contenedor 40'HQ lleva de 558 a 1260 módulos según el modelo — de unos 400 a más de 720 kWp. ¿No conoce la cantidad exacta? Indique la potencia aproximada de la instalación.",
  },
  form: {
    honeypot: "Sitio web",
    s1: "1. ¿Quién es usted?",
    s2: "2. Módulos y cantidad",
    s3: "3. Entrega y plazo",
    s4: "4. Contacto",
    types: {
      distributor: "Mayorista / distribuidor de renovables",
      trader: "Trader / importador",
      installer: "Empresa instaladora",
      epc: "EPC / promotor de plantas solares",
      business: "Empresa — edificio propio",
    },
    timelines: {
      asap: "Lo antes posible",
      "1-3m": "1–3 meses",
      "3-6m": "3–6 meses",
      "6m+": "Más de 6 meses",
      tender: "Licitación / proyecto en preparación",
    },
    qtyKwp: "Cantidad en kWp",
    qtyKwpPh: "p. ej. 400",
    qtyContainers: "o número de contenedores",
    qtyContainersPh: "p. ej. 1",
    delivery: "Lugar de entrega",
    deliveryPh: "localidad o código postal",
    timeline: "Plazo",
    choose: "Seleccione",
    name: "Nombre y apellidos *",
    email: "Email *",
    phone: "Teléfono",
    company: "Empresa",
    vatId: "NIF / CIF",
    message: "Mensaje",
    messagePh: "p. ej. clase de potencia, tipo de proyecto, documentos necesarios",
    consent: "* Acepto ser contactado en relación con esta consulta.",
    consentAdmin: "El responsable del tratamiento de los datos es TODO(klient): razón social.",
    marketing: "Deseo recibir información sobre disponibilidad de módulos y nuevos envíos (opcional).",
    submit: "Enviar consulta",
    sending: "Enviando…",
    okTitle: "Consulta enviada",
    okText:
      "Gracias. Responderemos a la dirección de email indicada con una oferta o con preguntas para concretar.",
    okUrgent: "Para asuntos urgentes, escriba a",
    errors: {
      type: "Indique quién es usted.",
      number: "Introduzca un número mayor que cero.",
      vatId: "Introduzca un NIF/CIF válido.",
      name: "Introduzca su nombre y apellidos.",
      email: "Introduzca una dirección de email válida.",
      consent: "El consentimiento de contacto es necesario para poder responderle.",
      qty: "Indique la cantidad en kWp o el número de contenedores.",
      fix: "Corrija los campos marcados.",
      site: "Sitio desconocido.",
      spam: "La verificación antispam ha fallado. Recargue la página e inténtelo de nuevo.",
      rate: "Ya se han enviado varias consultas desde esta dirección. Inténtelo de nuevo dentro de media hora.",
      failed: "No se ha podido enviar la consulta.",
      fallbackEmail: "Escríbanos directamente a {email}.",
      fallback: "Inténtelo de nuevo más tarde.",
    },
  },
  calc: {
    s1: "1. Elija el módulo",
    s2: "2. Clase de potencia",
    s3: "3. ¿Qué dato conoce?",
    minNote: "Vendemos por contenedor — el mínimo es un contenedor.",
    modePower: "Potencia de la instalación",
    modeContainers: "Número de contenedores",
    power: "Potencia de la instalación",
    powerAria: "Potencia de la instalación en MWp",
    oneContainer: "{mw} MWp (1 contenedor)",
    containers: "Número de contenedores 40'HQ",
    containersAria: "Número de contenedores",
    need: "Necesita",
    chosen: "Seleccionado",
    containerForms: { one: "contenedor", other: "contenedores" } as Plural,
    powerLabel: "Potencia",
    modules: "Módulos",
    perModule: "uds. de {w} W",
    lastFill:
      "El último contenedor está lleno al {pct} % — ajuste la potencia para aprovechar contenedores completos o añada módulos.",
    quote: {
      one: "Pedir presupuesto para {n} contenedor",
      other: "Pedir presupuesto para {n} contenedores",
    } as Plural,
    datasheet: "Ficha técnica PDF",
    note: "Cálculo orientativo: {pcs} módulos por contenedor 40'HQ según la ficha{careful}, es decir, {kwp} kWp por contenedor a {w} W. La cantidad exacta y las condiciones de entrega se indican en la oferta.",
    careful: " (calculamos con prudencia sobre {min})",
    flexible: "módulo flexible",
    glass: "módulo de vidrio",
  },
};

export default es;
