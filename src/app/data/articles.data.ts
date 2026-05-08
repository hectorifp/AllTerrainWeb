export interface Article {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  imageUrl: string;
  externalLinks: { label: string; url: string }[];
  date: string;
  readTime: string;
}

export const ARTICLES: Article[] = [
  {
    id: 'historia-land-rover-defender',
    title: 'Historia del Land Rover Defender',
    excerpt:
      'Desde los campos británicos hasta los rincones más remotos del planeta, el Defender ha sido sinónimo de aventura y resistencia durante más de 70 años.',
    body: `<p>El <strong>Land Rover Defender</strong> nació en 1948, inspirado en el Jeep Willys que los granjeros británicos usaban tras la Segunda Guerra Mundial. Maurice Wilks, ingeniero jefe de Rover, diseñó un vehículo utilitario pensado para el trabajo agrícola en su finca de Anglesey, Gales.</p>

<p>Lo que comenzó como una herramienta de campo se convirtió en un icono global. El Defender original, conocido como <strong>Series I</strong>, destacaba por su chasis de aluminio —elegido por la escasez de acero en la posguerra— y su capacidad para enfrentarse a cualquier terreno imaginable.</p>

<p>A lo largo de las décadas, el modelo evolucionó a través de las Series II y III, manteniendo siempre su carácter robusto y funcional. En los años 80 y 90, el Defender se consolidó como el todoterreno de referencia para expediciones, organizaciones humanitarias y fuerzas armadas de todo el mundo.</p>

<p>En 2016, tras 68 años de producción ininterrumpida, la última unidad del Defender clásico salió de la fábrica de Solihull. Pero la historia no terminó ahí: en 2020, Land Rover presentó el <strong>nuevo Defender</strong>, una reinterpretación moderna que combina tecnología punta con el espíritu aventurero original.</p>

<p>Hoy, el Defender sigue representando la libertad de explorar lo desconocido, desde caminos de montaña hasta las dunas del Sáhara.</p>`,
    externalLinks: [
      {
        label: 'Land Rover España — Defender',
        url: 'https://www.landrover.es/vehicles/defender/index.html',
      },
      {
        label: 'Historia completa en Top Gear',
        url: 'https://www.topgear.com/car-reviews/land-rover/defender',
      },
    ],
    date: '2026-02-15',
    readTime: '5 min',
    imageUrl: '/assets/images/article_defender_1773570211520.png',
  },
  {
    id: 'jeep-wrangler-icono-americano',
    title: 'Jeep Wrangler: El icono americano del todoterreno',
    excerpt:
      'Con sus raíces militares y su diseño inconfundible, el Wrangler es el vehículo que definió una categoría entera.',
    body: `<p>La historia del <strong>Jeep Wrangler</strong> comienza en los campos de batalla de la Segunda Guerra Mundial. El Willys MB, diseñado para el ejército estadounidense, demostró que un vehículo compacto y ligero podía conquistar cualquier terreno. Tras la guerra, los soldados que volvieron a casa querían seguir conduciendo aquel vehículo tan capaz.</p>

<p>Así nació el Jeep civil, que evolucionó a través del CJ-5, CJ-7 y finalmente el <strong>Wrangler</strong> en 1986. Cada generación mantuvo los elementos icónicos: la parrilla de siete ranuras, los faros redondos, las puertas desmontables y el techo descapotable.</p>

<p>El Wrangler actual, conocido como <strong>JL</strong>, ofrece motores más eficientes, tecnología moderna y una capacidad todoterreno que sigue siendo referencia en la industria. Con el sistema <strong>Rock-Trac</strong> y los ejes Dana 44, es capaz de superar obstáculos que dejarían varados a la mayoría de vehículos.</p>

<p>Pero lo que realmente hace especial al Wrangler es su comunidad. Millones de propietarios en todo el mundo comparten una pasión única por la conducción al aire libre, las modificaciones personalizadas y las rutas por caminos imposibles.</p>

<p>El Wrangler no es solo un coche: es un estilo de vida.</p>`,
    externalLinks: [
      {
        label: 'Jeep España — Wrangler',
        url: 'https://www.jeep.es/wrangler.html',
      },
      {
        label: 'Jeep Wrangler en Motor.es',
        url: 'https://www.motor.es/jeep/wrangler/',
      },
    ],
    date: '2026-02-20',
    readTime: '5 min',
    imageUrl: '/assets/images/article_wrangler_1773570230592.png',
  },
  {
    id: 'mejores-todoterrenos-principiantes',
    title: 'Los mejores todoterrenos para principiantes',
    excerpt:
      'Si estás empezando en el mundo del 4x4, estos modelos te ofrecen capacidad, fiabilidad y una curva de aprendizaje amigable.',
    body: `<p>Adentrarse en el mundo del <strong>todoterreno</strong> puede resultar abrumador. La oferta es inmensa y las opiniones, a menudo contradictorias. Sin embargo, hay modelos que destacan por ser accesibles para quienes dan sus primeros pasos fuera del asfalto.</p>

<p>El <strong>Suzuki Jimny</strong> es, quizás, la puerta de entrada más popular. Compacto, ligero y con tracción total permanente, su tamaño reducido permite maniobrar en senderos estrechos donde otros vehículos más grandes no cabrían. Además, su precio accesible lo convierte en una opción muy atractiva.</p>

<p>Para quienes buscan algo más espacioso, el <strong>Dacia Duster</strong> ofrece una relación calidad-precio difícil de igualar. Su sistema de tracción 4x4 es sencillo pero eficaz, ideal para caminos de tierra y pistas forestales sin complicaciones técnicas excesivas.</p>

<p>El <strong>Subaru Forester</strong> es otra excelente opción. Su sistema <strong>Symmetrical AWD</strong> proporciona estabilidad y tracción en todo tipo de superficies, y su diseño discreto lo hace igualmente cómodo en ciudad como en el campo.</p>

<p>Por último, el <strong>Toyota RAV4</strong> combina fiabilidad legendaria con capacidad off-road moderada. Es un todoterreno que no te dará problemas mecánicos y que te llevará a donde necesites sin dramas.</p>

<p>La clave para empezar es elegir un vehículo que te dé <strong>confianza</strong> y que puedas mantener sin arruinarte. El campo siempre estará ahí esperándote.</p>`,
    externalLinks: [
      {
        label: 'Suzuki Jimny en España',
        url: 'https://www.suzuki.es/automobiles/jimny',
      },
      {
        label: 'Guía de todoterrenos — Autobild',
        url: 'https://www.autobild.es/coches/todoterreno',
      },
      {
        label: 'Dacia Duster — Web oficial',
        url: 'https://www.dacia.es/vehiculos/duster.html',
      },
    ],
    date: '2026-01-10',
    readTime: '6 min',
    imageUrl: '/assets/images/article_beginner_1773570245687.png',
  },
  {
    id: 'rutas-todoterreno-espana',
    title: 'Las mejores rutas todoterreno en España',
    excerpt:
      'España ofrece paisajes increíbles para recorrer en 4x4: desde los Pirineos hasta el desierto de Tabernas, hay una ruta para cada nivel.',
    body: `<p>España es un paraíso para los amantes del <strong>todoterreno</strong>. La diversidad geográfica del país ofrece desde alta montaña pirenaica hasta desiertos andaluces, pasando por bosques atlánticos y mesetas castellanas.</p>

<p>La <strong>Ruta de los Pueblos Negros</strong> en Guadalajara es una joya poco conocida. Los caminos de pizarra serpentean entre pueblos con arquitectura medieval, bosques de robles y vistas espectaculares de la Sierra de Ayllón. Apta para vehículos con tracción total sin necesidad de grandes modificaciones.</p>

<p>En <strong>Aragón</strong>, la zona del Prepirineo ofrece pistas forestales que atraviesan barrancos, ríos y aldeas abandonadas. La ruta del <strong>Camino de San Úrbez</strong> es particularmente espectacular, combinando paisajes de cañón con bosques de hayas centenarios.</p>

<p>Para los más aventureros, el <strong>desierto de Tabernas</strong> en Almería es territorio obligado. El único desierto de Europa ofrece terrenos arenosos, cauces secos y formaciones rocosas que recuerdan al Far West americano — no por casualidad se rodaron allí decenas de westerns.</p>

<p>En el norte, la <strong>Senda del Oso</strong> en Asturias y las pistas de los <strong>Picos de Europa</strong> ofrecen rutas de montaña con vistas al Cantábrico que dejan sin aliento.</p>

<p>Recuerda siempre respetar el medio ambiente, llevar el equipo de seguridad adecuado y consultar las regulaciones locales antes de salir de ruta.</p>`,
    externalLinks: [
      {
        label: 'Wikiloc — Rutas 4x4 en España',
        url: 'https://es.wikiloc.com/rutas/todoterreno',
      },
      {
        label: 'Club 4x4 España',
        url: 'https://www.club4x4.es/',
      },
      {
        label: 'Parque Natural Desierto de Tabernas',
        url: 'https://www.juntadeandalucia.es/medioambiente',
      },
    ],
    date: '2026-03-01',
    readTime: '7 min',
    imageUrl: '/assets/images/carousel_mountain_1773570198441.png',
  },
  {
    id: 'toyota-land-cruiser-fiabilidad',
    title: 'Toyota Land Cruiser: Fiabilidad legendaria',
    excerpt:
      'Si tuvieras que elegir un solo vehículo para cruzar un continente, la respuesta de la mayoría de expertos sería la misma: Land Cruiser.',
    body: `<p>El <strong>Toyota Land Cruiser</strong> no necesita presentación. Desde 1951, este todoterreno japonés ha demostrado su fiabilidad en los entornos más hostiles del planeta: desde las minas australianas hasta los conflictos de Oriente Medio, pasando por las junglas africanas y las estepas de Mongolia.</p>

<p>Su reputación se basa en hechos. El Land Cruiser es el vehículo preferido por organizaciones como <strong>Naciones Unidas</strong>, la <strong>Cruz Roja</strong> y decenas de ONGs que operan en zonas donde la fiabilidad puede ser cuestión de vida o muerte.</p>

<p>Mecánicamente, el Land Cruiser destaca por motores sobredimensionados que trabajan muy por debajo de su capacidad máxima, lo que se traduce en una longevidad excepcional. No es raro encontrar unidades con más de <strong>500.000 kilómetros</strong> en perfecto estado de funcionamiento.</p>

<p>El modelo actual, la <strong>Serie 300</strong>, incorpora la plataforma TNGA-F de Toyota con suspensión independiente delantera y eje rígido trasero, una combinación que ofrece confort en carretera sin sacrificar capacidad off-road.</p>

<p>Su sistema <strong>Multi-Terrain Select</strong> permite adaptar la respuesta del vehículo a diferentes superficies: roca, arena, barro o nieve. Y el control de ascenso y descenso en pendientes proporciona seguridad adicional en los tramos más técnicos.</p>

<p>El Land Cruiser es, simplemente, el todoterreno en el que confías tu vida.</p>`,
    externalLinks: [
      {
        label: 'Toyota España — Land Cruiser',
        url: 'https://www.toyota.es/coches/land-cruiser',
      },
      {
        label: 'Land Cruiser Club de España',
        url: 'https://www.landcruiserclub.net/',
      },
    ],
    date: '2026-03-05',
    readTime: '6 min',
    imageUrl: '/assets/images/carousel_forest_1773570176689.png',
  },
  {
    id: 'preparacion-4x4-campo',
    title: 'Cómo preparar tu 4x4 para el campo',
    excerpt:
      'Antes de lanzarte a la aventura, tu vehículo necesita estar listo. Estos son los elementos esenciales para una preparación todoterreno efectiva.',
    body: `<p>Preparar un <strong>4x4 para el campo</strong> no significa convertirlo en un vehículo de competición. Se trata de optimizar sus capacidades y garantizar tu seguridad en entornos donde la asistencia puede tardar horas en llegar.</p>

<p>Lo primero y más importante son los <strong>neumáticos</strong>. Unos buenos neumáticos all-terrain (AT) como los <strong>BF Goodrich KO2</strong> o los <strong>General Grabber AT3</strong> marcan una diferencia enorme en tracción, tanto en barro como en piedra. Son la inversión más rentable que puedes hacer.</p>

<p>La <strong>protección de bajos</strong> es fundamental si piensas circular por terrenos pedregosos. Placas de aluminio o acero que cubren cárter, caja de transferencia y depósito de combustible evitan averías costosas por impactos.</p>

<p>Un <strong>elevador de suspensión</strong> moderado (entre 2 y 4 pulgadas) mejora los ángulos de ataque y salida, permitiendo superar obstáculos mayores sin comprometer excesivamente el centro de gravedad.</p>

<p>El equipo de <strong>recuperación</strong> es innegociable: eslingas de tracción, grilletes, una pala, guantes de trabajo y, si el presupuesto lo permite, un cabrestante. Quedarse atascado no es cuestión de "si", sino de "cuándo".</p>

<p>No olvides llevar siempre <strong>agua potable</strong>, un botiquín de primeros auxilios, una linterna potente y herramientas básicas. La preparación del conductor es tan importante como la del vehículo.</p>

<p>Por último, aprende a usar las <strong>reductoras</strong> y los <strong>bloqueos de diferencial</strong> de tu vehículo antes de necesitarlos. La técnica es la que realmente te saca de apuros.</p>`,
    externalLinks: [
      {
        label: 'BF Goodrich — Neumáticos AT',
        url: 'https://www.bfgoodrichtires.com/',
      },
      {
        label: 'Foro4x4 — Preparaciones',
        url: 'https://www.foro4x4.com/',
      },
      {
        label: 'WARN Industries — Cabrestantes',
        url: 'https://www.warn.com/',
      },
    ],
    date: '2026-03-10',
    readTime: '7 min',
    imageUrl: '/assets/images/carousel_desert_1773570162096.png',
  },
  {
    id: 'suzuki-jimny-pequeno-gigante',
    title: 'Suzuki Jimny: El Pequeño Gigante',
    excerpt:
      'Descubre por qué este diminuto 4x4 japonés se ha ganado el corazón de entusiastas de todo el mundo.',
    body: `<p>El <strong>Suzuki Jimny</strong> es un rara avis en la industria automotriz actual. Mientras la mayoría de fabricantes apuestan por grandes SUVs, Suzuki mantiene vivo su auténtico todoterreno de bolsillo, una fórmula que lleva perfeccionando desde 1970.</p>
<p>Su secreto reside en la simplicidad: un chasis de escalera, ejes rígidos, tracción conectable y reductora. No necesita 300 caballos de potencia para superar obstáculos; sus cotas off-road y su peso pluma le permiten flotar sobre barro y nieve donde otros se hunden.</p>
<p>En definitiva, un coche único que demuestra que el tamaño no importa cuando la técnica es la adecuada.</p>`,
    imageUrl: '/assets/images/article_beginner_1773570245687.png',
    externalLinks: [
      {
        label: 'Suzuki Jimny España',
        url: 'https://auto.suzuki.es/modelos/jimny-pro',
      },
    ],
    date: '2026-03-12',
    readTime: '4 min',
  },
  {
    id: 'ford-bronco-el-regreso',
    title: 'Ford Bronco: El regreso de una leyenda',
    excerpt:
      'Tras 25 años de ausencia, el icónico Ford Bronco vuelve dispuesto a destronar al Jeep Wrangler.',
    body: `<p>El retorno del <strong>Ford Bronco</strong> ha sido uno de los acontecimientos más celebrados en el mundo 4x4. Rescatando el espíritu de la primera generación de 1966, el nuevo Bronco llega con un diseño retro-futurista espectacular y unas capacidades fuera del asfalto innegables.</p>
<p>Disponible en Europa en cantidades limitadas, cuenta con el sistema de tracción G.O.A.T. (Goes Over Any Type of Terrain) y soluciones prácticas como puertas desmontables y herramientas integradas para la acampada y la aventura.</p>
<p>Una verdadera bestia moderna que ha devuelto la competencia directa al segmento de los 4x4 puros.</p>`,
    imageUrl: '/assets/images/article_wrangler_1773570230592.png',
    externalLinks: [
      {
        label: 'Ford España — Bronco',
        url: 'https://www.ford.es/turismos/nuevo-bronco',
      },
    ],
    date: '2026-03-14',
    readTime: '5 min',
  },
  {
    id: 'nissan-patrol-leyenda',
    title: 'Nissan Patrol: La leyenda incombustible',
    excerpt:
      'Un repaso a la historia del todoterreno japonés que conquistó Europa y Oriente Medio.',
    body: `<p>Si hablamos de todoterrenos de pura cepa, no puede faltar el <strong>Nissan Patrol</strong>. Especialmente recordada en España es la generación fabricada en Barcelona, que se convirtió en el coche oficial de la Guardia Civil y multitud de servicios forestales.</p>
<p>Conocido por sus motores diésel de seis cilindros indestructibles (como el famoso SD33 y RD28), el Patrol se ganó una reputación de tanque sobre ruedas, capaz de arrastrar cargas pesadas y no inmutarse ante los peores tratos.</p>
<p>Aunque en Europa ya no se vende, el Patrol sigue vivo y coleando en Oriente Medio, donde sus versiones V8 de lujo dominan las dunas de Dubai y Qatar.</p>`,
    imageUrl: '/assets/images/article_defender_1773570211520.png',
    externalLinks: [
      {
        label: 'Historia de Nissan',
        url: 'https://www.nissan.es/',
      },
    ],
    date: '2026-03-16',
    readTime: '6 min',
  },
  // ─── AÑADIR AL ARRAY ARTICLES EXISTENTE ───────────────────────────────────────

  // ── MODELOS Y MARCAS ──────────────────────────────────────────────────────────

  {
    id: 'mercedes-clase-g-lujo-extremo',
    title: 'Mercedes Clase G: Lujo y capacidad sin compromisos',
    excerpt:
      'El "Geländewagen" lleva más de 40 años demostrando que la elegancia y el barro no son incompatibles.',
    body: `<p>El <strong>Mercedes-Benz Clase G</strong> nació en 1979 como un vehículo militar de encargo, diseñado conjuntamente con el Shah de Persia para las fuerzas armadas iraníes. Nadie imaginaba entonces que esa caja cuadrada sobre ruedas se convertiría en uno de los iconos más reconocibles del mundo del automóvil.</p>

<p>Su clave está en una combinación aparentemente imposible: tres <strong>bloqueos de diferencial</strong> mecánicos (delantero, central y trasero) que le otorgan una capacidad off-road de competición, junto con un interior que rivaliza con el de cualquier berlina de lujo de la marca.</p>

<p>La generación actual, conocida internamente como <strong>W463A</strong>, mantiene la carrocería cuadrada característica pero incorpora una plataforma completamente nueva con suspensión de doble horquilla delantera. El resultado es un vehículo que consume menos, conforta más y sigue siendo capaz de superar pendientes de hasta 100%.</p>

<p>Las versiones <strong>AMG G63</strong> y <strong>G63 4x4²</strong> llevan la propuesta al extremo: un V8 biturbo de 585 CV y un sistema de suspensión de portales elevados que recuerda, por su ingenería, a un camión militar. Son los todoterreneros que aparcan delante de los mejores hoteles del mundo.</p>

<p>Pocos vehículos pueden presumir de haber sido adoptados simultáneamente por fuerzas especiales y celebrities. El Clase G lo consigue con total naturalidad.</p>`,

    imageUrl: '/assets/images/article_mercedes_g_class.jpg',
    externalLinks: [
      {
        label: 'Mercedes-Benz España — Clase G',
        url: 'https://www.mercedes-benz.es/passengercars/mercedes-benz-cars/models/g-class.html',
      },
      {
        label: 'Historia del Geländewagen — Motor.es',
        url: 'https://www.motor.es/mercedes-benz/clase-g/',
      },
    ],
    date: '2026-03-18',
    readTime: '6 min',
  },

  {
    id: 'mitsubishi-pajero-campeon-dakar',
    title: 'Mitsubishi Pajero: El campeón del Dakar',
    excerpt:
      'Doce victorias en el Rally Dakar avalan a un todoterreno que marcó una época dorada en el off-road mundial.',
    body: `<p>Pocos vehículos han escrito una página tan brillante en el deporte del motor como el <strong>Mitsubishi Pajero</strong>. Con doce victorias en el mítico <strong>Rally Dakar</strong> entre 1985 y 2007, este todoterreno japonés se convirtió en sinónimo de velocidad, resistencia y capacidad en los terrenos más duros del planeta.</p>

<p>La primera generación, presentada en 1982, era un vehículo compacto y ligero con una propuesta inédita: cómodo en ciudad, capaz en el campo. Su sistema de tracción total <strong>Super Select 4WD</strong>, introducido en la segunda generación, permitía usar la tracción total en asfalto sin dañar la transmisión, algo revolucionario en su época.</p>

<p>El Pajero Evolution, la versión homologada para competición de los años 90, es hoy una pieza de colección codiciada. Sus guardabarros ensanchados, suspensión larga de carrera y motor 3.5 V6 lo convirtieron en una leyenda que inspira a los preparadores actuales.</p>

<p>Aunque Mitsubishi dejó de vender el Pajero en Europa en 2021, el modelo sigue fabricándose para mercados como Japón, Oriente Medio y África, donde su reputación de fiabilidad extrema lo mantiene vigente décadas después de su presentación.</p>

<p>El Pajero es la prueba de que las victorias en competición sí se trasladan a los vehículos de serie.</p>`,
    externalLinks: [
      {
        label: 'Mitsubishi Pajero — Historia de competición',
        url: 'https://www.mitsubishi-motors.com/',
      },
      {
        label: 'Dakar Rally — Palmarés histórico',
        url: 'https://www.dakar.com/',
      },
    ],
    date: '2026-03-20',
    readTime: '6 min',
    imageUrl: '/assets/images/article_mitsubishi_pajero.jpg',
  },

  {
    id: 'ineos-grenadier-heredero-defender',
    title: 'INEOS Grenadier: El heredero espiritual del Defender clásico',
    excerpt:
      'Cuando Land Rover cerró la era del Defender clásico, Jim Ratcliffe tomó la decisión de construir su sustituto desde cero.',
    body: `<p>La historia del <strong>INEOS Grenadier</strong> comienza en un pub londinense. En 2017, el magnate Sir Jim Ratcliffe, fundador del grupo petroquímico INEOS, lamentaba con amigos la desaparición del Defender original. Su conclusión fue simple: si nadie lo iba a fabricar, lo haría él.</p>

<p>Lo que siguió fue un proceso de desarrollo de seis años, con ingenieros provenientes de Land Rover, BMW y Magna Steyr. El resultado es un vehículo construido sobre una filosofía radical: <strong>funcionalidad ante todo</strong>. Sin pantallas táctiles que controlen cada función, sin sistemas de conducción autónoma, sin artificios innecesarios.</p>

<p>El Grenadier usa mecánica probada de <strong>BMW</strong>: motores de gasolina y diésel de seis cilindros, caja de cambios ZF de ocho velocidades y ejes rígidos Dana con bloqueos electrónicos. Una receta clásica ejecutada con componentes modernos y de altísima calidad.</p>

<p>En sus primeras pruebas independientes, el Grenadier superó al Defender nuevo y al Mercedes Clase G en varios índices de capacidad off-road. Su ángulo de vadeo de 800 mm, los ángulos de ataque y salida, y la geometría de sus ejes son dignos de un vehículo de expedición profesional.</p>

<p>Para los nostálgicos del Defender cuadrado, el Grenadier es la respuesta que estaban esperando.</p>`,
    externalLinks: [
      {
        label: 'INEOS Grenadier España',
        url: 'https://www.ineosgrenadier.com/es-es/',
      },
      {
        label: 'Comparativa Grenadier vs Defender — Autocar',
        url: 'https://www.autocar.co.uk/',
      },
    ],
    date: '2026-03-22',
    readTime: '5 min',
    imageUrl: '/assets/images/article_ineos_grenadier.jpg',
  },

  {
    id: 'lada-niva-leyenda-sovietica',
    title: 'Lada Niva: La leyenda soviética que sigue viva',
    excerpt:
      'Con más de 45 años de producción casi ininterrumpida, el Niva es el todoterreno más longevo de la historia.',
    body: `<p>En 1977, la Unión Soviética lanzó al mercado un vehículo que nadie esperaba: un auténtico <strong>todoterreno monocasco</strong> de tracción total permanente, con reductora y diferencial central, por el precio de un utilitario. El <strong>Lada Niva</strong> había nacido.</p>

<p>Su diseño monocasco, inédito en un todoterreno de la época, le otorgó una rigidez estructural superior a la de sus rivales con chasis de escalera. La tracción total permanente con reductora, un sistema que hoy dan por sentado en vehículos premium, era entonces una solución de vanguardia en un coche asequible.</p>

<p>El Niva conquistó Europa occidental por su precio imbatible y su sorprendente capacidad en nieve y barro. Durante los años 80 y 90 fue un clásico en las estaciones de esquí alpinas y en las zonas rurales de España, Francia y Alemania.</p>

<p>Hoy, el <strong>Lada Niva Legend</strong> sigue fabricándose prácticamente con la misma mecánica que en 1977, mientras que el <strong>Niva Travel</strong> es una versión modernizada con motor actualizado y más comodidades. Ambos se venden por debajo de los 15.000 euros en los mercados donde están disponibles.</p>

<p>En tiempos de todoterrenos de 100.000 euros, el Niva es un recordatorio de que la ingeniería sencilla y honesta nunca pasa de moda.</p>`,
    externalLinks: [
      {
        label: 'Lada Niva — Historia y versiones',
        url: 'https://www.lada.ru/',
      },
      {
        label: 'Club Niva España',
        url: 'https://www.clubnivaespana.com/',
      },
    ],
    date: '2026-03-24',
    readTime: '5 min',
    imageUrl: '/assets/images/article_lada_niva.jpg',
  },

  // ── RUTAS Y DESTINOS ──────────────────────────────────────────────────────────

  {
    id: 'ruta-marruecos-4x4',
    title: 'Marruecos en 4x4: El viaje iniciático del todoterrenero europeo',
    excerpt:
      'A solo 14 kilómetros de Europa espera un continente de contrastes: dunas, médinas, pistas de montaña y hospitalidad sin igual.',
    body: `<p>Para muchos todoterreneros europeos, <strong>Marruecos</strong> representa el primer gran viaje: suficientemente lejos para ser una aventura real, suficientemente cerca para no requerir meses de planificación. Un ferry desde Tarifa o Algeciras y en pocas horas estás en otro mundo.</p>

<p>La ruta clásica recorre el <strong>Alto Atlas</strong> desde Marrakech, cruzando el paso de Tizi n'Tichka (2.260 m) hacia Ouarzazate y el valle del Drâa. Las pistas secundarias que se abren a los lados de la carretera principal llevan a kasbahs abandonadas, aldeas bereberes y paisajes lunares que no aparecen en ningún mapa turístico.</p>

<p>Las dunas de <strong>Erg Chebbi</strong>, cerca de Merzouga, son el destino soñado de cualquier amante del todoterreno. La técnica para conducir en arena —bajar presión en los neumáticos, mantener momentum y no frenar en la cresta de las dunas— se aprende rápido, pero dominarla lleva años.</p>

<p>El <strong>Anti-Atlas</strong>, menos visitado que el Alto Atlas, ofrece pistas de tierra roja entre palmeras y pueblos de adobe donde el tiempo parece haberse detenido. La pista que une Tafraoute con Tiznit es una de las más fotogénicas del país.</p>

<p>Recomendaciones prácticas: lleva siempre agua para dos días, un gato de suelo, compresora portátil y una frase en árabe o bereber. La hospitalidad marroquí hace el resto.</p>`,
    externalLinks: [
      {
        label: 'Rutas 4x4 Marruecos — Tracks4Africa',
        url: 'https://www.tracks4africa.co.za/',
      },
      {
        label: 'Información de viaje — Oficina de Turismo de Marruecos',
        url: 'https://www.visitmorocco.com/es',
      },
    ],
    date: '2026-03-26',
    readTime: '7 min',
    imageUrl: '/assets/images/article_ruta_marruecos.jpg',
  },

  {
    id: 'pirineos-ruta-alta-montana',
    title: 'Pirineos: Rutas de alta montaña para 4x4',
    excerpt:
      'La cordillera que separa España de Francia esconde algunos de los paisajes y caminos más espectaculares de Europa.',
    body: `<p>Los <strong>Pirineos</strong> son el escenario perfecto para el todoterrenero que busca combinarlo todo: altitud, paisaje, cultura y cierta exigencia técnica sin necesidad de cruzar fronteras lejanas. La cordillera ofrece más de 400 km de longitud con una enorme variedad de pistas forestales y caminos de montaña.</p>

<p>En el lado aragonés, la zona de <strong>Hecho y Ansó</strong> es un clásico: pistas entre hayedos y abetos que llevan a miradores sobre los valles pirenaicos más vírgenes. El camino hacia la <strong>Selva de Oza</strong> es especialmente bello en otoño, cuando el suelo se cubre de hojas doradas.</p>

<p>El <strong>Valle de Benasque</strong>, puerta de la Maladeta y el pico Aneto (el más alto de los Pirineos), ofrece pistas que ascienden hasta cotas de 2.000 metros. La pista que rodea el embalse de Paso Nuevo es accesible para vehículos estándar con tracción total y permite disfrutar de vistas directas a los glaciares.</p>

<p>En <strong>Cataluña</strong>, la Cerdanya y el Val d'Aran tienen una red de pistas forestales muy bien documentada. La pista que lleva al refugio de Colomèrs, en los Encantats, combina paisaje de alta montaña con lagos de aguas cristalinas.</p>

<p>Importante: muchas pistas de alta montaña están cerradas entre noviembre y junio. Consulta siempre el estado de los caminos con los agentes forestales locales antes de salir.</p>`,
    externalLinks: [
      {
        label: 'Pistas forestales Aragón — Gobierno de Aragón',
        url: 'https://www.aragon.es/',
      },
      {
        label: 'Rutas Pirineos — Wikiloc',
        url: 'https://es.wikiloc.com/',
      },
    ],
    date: '2026-03-28',
    readTime: '6 min',
    imageUrl: '/assets/images/article_pirineos_4x4.jpg',
  },

  {
    id: 'islandia-4x4-aventura-extrema',
    title: 'Islandia: El paraíso del 4x4 en el fin del mundo',
    excerpt:
      'Glaciares, volcanes, ríos sin puente y pistas que solo abren tres meses al año. Islandia es el destino supremo del todoterrenero.',
    body: `<p><strong>Islandia</strong> es, sin duda, el destino más extremo al que puedes llevar tu 4x4 sin embarcarlo. La isla volcánica del Atlántico Norte ofrece un paisaje que parece de otro planeta: lava negra, géiseres, glaciares kilométricos y ríos de deshielo que debes cruzar sin puente.</p>

<p>Las <strong>F-Roads</strong> o Fjallvegur son la red de pistas de montaña que solo abren entre junio y septiembre. Están señalizadas con la letra F y su acceso está restringido por ley a vehículos con tracción total. La más famosa, la <strong>F26 o Sprengisandur</strong>, atraviesa el interior deshabitado de la isla durante más de 200 km entre dos glaciares.</p>

<p>El cruce de ríos (<em>fording</em>) es la habilidad definitiva en Islandia. Sin puentes en muchos tramos, los todoterreneros deben evaluar profundidad, corriente y tipo de fondo antes de entrar al agua. Equivocarse puede significar perder el vehículo. Por eso se recomienda nunca cruzar solo y siempre hacerlo en diagonal contra la corriente.</p>

<p>La ruta del <strong>Landmannalaugar</strong>, con sus montañas de riolita multicolor y sus piscinas termales naturales, es uno de los paisajes más fotografiados del país. Llegar requiere cruzar varios ríos y circular por pistas de lava suelta, pero el premio es incomparable.</p>

<p>Preparación esencial: seguro de arena y de cruce de ríos (obligatorios para alquilar), snorkel en el tubo de admisión, ropa impermeable y un plan de evacuación. La naturaleza islandesa no perdona la improvisación.</p>`,
    externalLinks: [
      {
        label: 'F-Roads Islandia — Safetravel',
        url: 'https://safetravel.is/',
      },
      {
        label: 'Turismo de Islandia',
        url: 'https://www.visiticeland.com/',
      },
    ],
    date: '2026-04-01',
    readTime: '7 min',
    imageUrl: '/assets/images/article_islandia_froads.jpg',
  },

  {
    id: 'ruta-cabo-norte-escandinavia',
    title: 'De Madrid al Cabo Norte: La gran ruta 4x4 europea',
    excerpt:
      'Más de 7.000 km de carretera y pista hasta el punto más septentrional de Europa. Una aventura para recordar toda la vida.',
    body: `<p>Conducir desde la Península Ibérica hasta el <strong>Cabo Norte</strong>, en el extremo norte de Noruega, es uno de los grandes viajes continentales que puede hacer un todoterrenero europeo. No requiere barco ni trámite aduanero (salvo el ferry Suecia-Finlandia), pero sí exige planificación, tiempo y un vehículo fiable.</p>

<p>La ruta clásica sigue el eje Francia–Alemania–Dinamarca–Suecia–Noruega, con una variante que entra en <strong>Finlandia</strong> para cruzar por Laponia. Esta variante, especialmente en verano, ofrece el fenómeno del <strong>sol de medianoche</strong>: 24 horas de luz continua que desorientan y fascinan a partes iguales.</p>

<p>En el norte de Noruega, los fiordos Lofoten son una parada obligatoria. Las pistas que ascienden a los miradores sobre el <strong>Aurlandsfjord</strong> o el <strong>Geirangerfjord</strong> son estrechas, con desniveles pronunciados y vistas que justifican por sí solas todo el viaje.</p>

<p>Al llegar al Cabo Norte, a 71 grados de latitud norte, el monumento del globo terráqueo marca el final de la carretera. Allí, frente al Ártico, conviene recordar que lo mejor del viaje no fue el destino, sino todo lo que hubo antes.</p>

<p>Presupuesto orientativo: entre 3.000 y 5.000 euros para dos personas en 30 días, dependiendo del alojamiento (muchos viajeros duermen en su vehículo o en camping).</p>`,
    externalLinks: [
      {
        label: 'Visit Norway — Cabo Norte',
        url: 'https://www.visitnorway.com/',
      },
      {
        label: 'Ruta Cabo Norte — Foro 4x4',
        url: 'https://www.foro4x4.com/',
      },
    ],
    date: '2026-04-05',
    readTime: '8 min',
    imageUrl: '/assets/images/article_cabo_norte.jpg',
  },

  // ── PREPARACIÓN Y MECÁNICA ────────────────────────────────────────────────────

  {
    id: 'cabrestante-guia-completa',
    title: 'Guía completa del cabrestante: Cómo elegir e instalar el tuyo',
    excerpt:
      'El cabrestante puede sacarte de situaciones imposibles. Pero elegir el adecuado y saber usarlo correctamente es fundamental.',
    body: `<p>El <strong>cabrestante eléctrico</strong> es, junto con los neumáticos, la inversión más inteligente que puedes hacer en tu 4x4. Un vehículo atascado en barro profundo, sin nadie cerca para remolcarte, es una situación angustiante que el cabrestante resuelve en minutos.</p>

<p>La regla básica para elegir la potencia es multiplicar el peso total del vehículo (con carga y preparación) por <strong>1,5</strong>. Si tu 4x4 pesa 2.500 kg cargado, necesitas un cabrestante de al menos 3.750 kg de capacidad (aproximadamente 8.000 libras). Los modelos más populares en el segmento todoterreno van de las <strong>9.500 a las 12.000 libras</strong>.</p>

<p>Las marcas de referencia son <strong>WARN</strong>, <strong>Rough Country</strong> y <strong>Smittybilt</strong>, con WARN siendo la opción premium con mayor durabilidad demostrada. Un cabrestante barato puede fallar en el peor momento posible.</p>

<p>El cable de acero tradicional está siendo desplazado por la <strong>cuerda sintética</strong> (Dyneema o UHMWPE). Es más ligera, no acumula energía peligrosa al tensarse y no produce cortes en caso de rotura. La única desventaja es que requiere más cuidado ante abrasión y calor.</p>

<p>Accesorios imprescindibles: un bloque de polea (duplica la fuerza y reduce el desgaste del motor), grillos de acero forjado, una correa de anclaje para árboles y guantes de trabajo. Nunca uses el cabrestante sin guantes.</p>

<p>Practicar el uso del cabrestante en condiciones controladas antes de necesitarlo en una situación real marca la diferencia entre una recuperación rápida y una tarde de frustraciones.</p>`,
    externalLinks: [
      {
        label: 'WARN Industries — Cabrestantes',
        url: 'https://www.warn.com/',
      },
      {
        label: 'Guía de recuperación — Off Road Xtreme',
        url: 'https://www.offroadxtreme.com/',
      },
    ],
    date: '2026-04-08',
    readTime: '7 min',
    imageUrl: '/assets/images/article_cabrestante_guia.jpg',
  },

  {
    id: 'neumaticos-at-mt-comparativa',
    title: 'AT vs MT: Elige el neumático según tu estilo de conducción',
    excerpt:
      'All-Terrain o Mud-Terrain: la elección del neumático es la decisión de preparación que más impacto tiene en el comportamiento de tu 4x4.',
    body: `<p>La elección entre un neumático <strong>All-Terrain (AT)</strong> y un <strong>Mud-Terrain (MT)</strong> es la primera gran decisión que afronta cualquier propietario de un 4x4 cuando empieza a salir del asfalto. Y es también la que mayor impacto tendrá en el comportamiento diario del vehículo.</p>

<p>Los <strong>AT</strong> son neumáticos de compromiso: ofrecen suficiente mordiente en barro y piedra gracias a sus tacos más abiertos que un neumático de carretera, pero mantienen un nivel de ruido, consumo y maniobrabilidad aceptable para el uso cotidiano. El <strong>BF Goodrich KO2</strong>, el <strong>General Grabber AT3</strong> y el <strong>Falken Wildpeak AT3W</strong> son los favoritos del mercado.</p>

<p>Los <strong>MT</strong> tienen tacos enormes y separados, diseñados para expulsar el barro y morder en terrenos blandos. En barro profundo, arena y nieve son claramente superiores, pero en asfalto húmedo pueden ser peligrosos y su ruido a alta velocidad resulta fatigoso. El <strong>BF Goodrich Mud-Terrain KM3</strong> y el <strong>Mickey Thompson Baja Boss</strong> son referencias en este segmento.</p>

<p>La regla práctica es clara: si el 80% de tu conducción es asfalto con escapadas ocasionales al campo, los AT son tu opción. Si la proporción se invierte y frecuentas barro o arena regularmente, los MT compensan sus inconvenientes en carretera.</p>

<p>No olvides que reducir la presión de los neumáticos entre 0,8 y 1,5 bares en terrenos blandos mejora dramáticamente la tracción de cualquier tipo de neumático. Una compresora portátil es imprescindible para devolver la presión al salir a asfalto.</p>`,
    externalLinks: [
      {
        label: 'BF Goodrich — Gama Off-Road',
        url: 'https://www.bfgoodrichtires.com/',
      },
      {
        label: 'Comparativa de neumáticos — Tyrereviews',
        url: 'https://www.tyrereviews.com/',
      },
    ],
    date: '2026-04-10',
    readTime: '6 min',
    imageUrl: '/assets/images/article_neumaticos_at_mt.jpg',
  },

  {
    id: 'tecnica-conduccion-barro',
    title: 'Técnica de conducción en barro: Lo que nadie te enseñó',
    excerpt:
      'El barro es el gran igualador de los 4x4: con buena técnica, un Jimny puede pasar donde un G63 se queda clavado.',
    body: `<p>Conducir en barro es tanto una ciencia como un arte. Antes de pisar el acelerador, la preparación mental y la lectura del terreno valen más que cualquier modificación que hayas hecho a tu vehículo.</p>

<p>El principio fundamental es el <strong>momentum</strong>: el barro se conquista manteniendo una velocidad constante y moderada, no a base de aceleraciones fuertes que solo hacen girar las ruedas en el mismo sitio. Cuando las ruedas patinan, el vehículo se hunde; cuando ruedan, avanzan.</p>

<p>Antes de entrar en un tramo de barro, <strong>reduce la presión de los neumáticos</strong> (entre 1,0 y 1,5 bares dependiendo del tipo de terreno y neumático). La huella de contacto se amplía y la tracción mejora notablemente. Es el cambio más eficaz que puedes hacer en segundos.</p>

<p>Activa la <strong>tracción total y la reductora</strong> antes de entrar al barro, no cuando ya estés dentro. Cambiar entre modos de tracción con el vehículo clavado genera tensión en los semiejes que puede romper piezas. Planifica siempre con antelación.</p>

<p>Si el vehículo empieza a desviarse, <strong>no corrijas bruscamente</strong> el volante. El barro empuja el vehículo hacia los lados; una corrección suave acompañando el movimiento es más eficaz que luchar contra él.</p>

<p>Y si te quedas atascado: para el motor, evalúa la situación y usa el equipo de recuperación con calma. El 90% de los atascos se resuelven con una eslinga, paciencia y buen humor.</p>`,
    externalLinks: [
      {
        label: 'Escuela de conducción off-road — RFEDA',
        url: 'https://www.rfeda.es/',
      },
      {
        label: 'Técnica off-road — Land Rover Experience',
        url: 'https://www.landrover.es/experience/',
      },
    ],
    date: '2026-04-12',
    readTime: '6 min',
    imageUrl: '/assets/images/article_conduccion_barro.jpg',
  },

  {
    id: 'mantenimiento-4x4-campo',
    title: 'Mantenimiento básico que todo 4x4 necesita antes de salir al campo',
    excerpt:
      'Un vehículo bien mantenido es aquel que te trae de vuelta a casa. Estas son las revisiones imprescindibles antes de cada salida.',
    body: `<p>El campo no es un concesionario. Si algo falla a 50 km de la carretera más cercana, lo resolverás tú o no lo resolverás. Por eso, el <strong>mantenimiento preventivo</strong> no es una opción, sino la diferencia entre una aventura y un rescate.</p>

<p>Antes de cada salida, revisa los <strong>niveles de fluidos</strong>: aceite de motor, líquido de frenos, refrigerante y dirección asistida. En los 4x4 con mucho kilometraje, añade también los aceites de los diferenciales y la caja de transferencia, que rara vez se revisan en el taller convencional.</p>

<p>Los <strong>ejes homocinéticos</strong> (o juntas de articulación) son el punto débil más común. Un fuelle roto que no se repara a tiempo contamina la grasa y destroza la junta en pocas semanas. Inspecciona visualmente los fuelles en cada lavado de bajos, especialmente tras circular por barro.</p>

<p>Las <strong>pastillas y discos de freno</strong> deben revisarse con atención. El uso intensivo en bajadas largas de montaña somete el sistema de frenado a temperaturas que el uso urbano no genera. Si hay menos de 3 mm de pastilla, cámbialas antes de salir.</p>

<p>El <strong>sistema eléctrico</strong> merece atención especial: bornes de batería, fusibles de recambio y el estado del alternador. Un vehículo con muchos accesorios eléctricos (luces, cabrestante, nevera portátil) necesita una batería en perfecto estado.</p>

<p>Finalmente, lleva siempre en el vehículo un kit básico de herramientas: llaves de vaso, destornilladores, cinta aislante, bridas, un mechero de gas, y al menos un litro de aceite de motor de repuesto.</p>`,
    externalLinks: [
      {
        label: 'Foro4x4 — Mantenimiento y mecánica',
        url: 'https://www.foro4x4.com/',
      },
      {
        label: 'Ruedas y neumáticos — Norauto España',
        url: 'https://www.norauto.es/',
      },
    ],
    date: '2026-04-15',
    readTime: '7 min',
    imageUrl: '/assets/images/article_mantenimiento_4x4.jpg',
  },

  // ── CULTURA Y ESTILO DE VIDA 4x4 ─────────────────────────────────────────────

  {
    id: 'overlanding-estilo-vida',
    title: 'Overlanding: El arte de viajar sin prisa y sin destino fijo',
    excerpt:
      'Más que una modalidad de conducción, el overlanding es una filosofía de vida que pone el viaje por encima del destino.',
    body: `<p>El <strong>overlanding</strong> es la práctica de recorrer grandes distancias por rutas fuera del asfalto, con el vehículo equipado para ser autosuficiente durante días o semanas. No se trata de competir ni de demostrar habilidades técnicas extremas: se trata de <strong>explorar, descubrir y conectar</strong> con el entorno.</p>

<p>El origen del término se remonta a Australia, donde los ganaderos del siglo XIX conducían el ganado a través del interior desértico del continente en travesías que duraban meses. Hoy, el overlanding global tiene su epicentro en las comunidades online y en eventos como el <strong>Overland Expo</strong>, que reúne a miles de viajeros con sus vehículos cargados de equipo y experiencias.</p>

<p>El vehículo típico de overlanding no es necesariamente el más caro ni el más modificado. Es el <strong>más preparado para el viaje específico</strong>: con una tienda de techo o un dormitorio integrado en la carrocería, una nevera de compresor, depósitos de combustible extra, paneles solares para alimentar los equipos y un buen equipo de comunicaciones.</p>

<p>La comunidad de overlanders es notablemente abierta y colaborativa. En las pistas de Namibia, los Andes o Asia Central, es habitual encontrar viajeros de distintos países compartiendo información sobre rutas, mecánicos de confianza o lugares donde acampar sin molestar a nadie.</p>

<p>El overlanding enseña que la riqueza no está en la velocidad ni en los kilómetros recorridos, sino en la calidad de las experiencias y de las personas que encuentras en el camino.</p>`,
    externalLinks: [
      {
        label: 'Overland Expo — Eventos y comunidad',
        url: 'https://www.overlandexpo.com/',
      },
      {
        label: 'Overlanding España — Comunidad',
        url: 'https://www.overlandingespana.com/',
      },
    ],
    date: '2026-04-18',
    readTime: '6 min',
    imageUrl: '/assets/images/article_overlanding.jpg',
  },

  {
    id: 'trail-etiqueta-4x4',
    title: 'Código de conducta en el campo: Cómo ser un todoterrenero responsable',
    excerpt:
      'La libertad de explorar la naturaleza viene acompañada de una responsabilidad ineludible: dejar el campo mejor de como lo encontraste.',
    body: `<p>El acceso al campo en vehículo todo terreno es un privilegio que nos ganamos o perdemos colectivamente. Cada phototerrenero que deja basura, destroza una pista o molesta a la fauna hace más difícil que el resto pueda seguir disfrutando de esos espacios.</p>

<p>El principio fundamental se resume en la filosofía <strong>"Leave No Trace"</strong>: no dejes rastro de tu paso. Lleva siempre bolsas para tus residuos (incluyendo restos de comida), recoge la basura que otros dejaron si puedes hacerlo sin riesgo, y no alteres el entorno con excavaciones ni movimiento de rocas.</p>

<p>Circula <strong>únicamente por pistas habilitadas</strong>. Crear nuevas rodadas en praderas o bosques destruye la vegetación y erosiona el suelo de forma irreversible. Si la pista está cerrada o vedada, respeta la señalización aunque tu GPS diga otra cosa.</p>

<p>El ruido es un factor que muchos ignoran. Los <strong>tubos de escape modificados</strong> que suenan espectacularmente en un parking son una fuente de estrés grave para los animales salvajes, especialmente en períodos de cría. Un motor bien ajustado que trabaja en silencio es señal de respeto y de buen mantenimiento.</p>

<p>Cuando encuentres a otros en el campo —senderistas, ciclistas, ganaderos— cede siempre el paso, apaga el motor si es posible y saluda. La imagen que proyectamos como colectivo depende de cada uno de nosotros.</p>

<p>La naturaleza que protegemos hoy es la que podremos seguir explorando mañana.</p>`,
    externalLinks: [
      {
        label: 'Leave No Trace — Principios',
        url: 'https://lnt.org/',
      },
      {
        label: 'RFEDA — Normativa vehículos todo terreno',
        url: 'https://www.rfeda.es/',
      },
    ],
    date: '2026-04-20',
    readTime: '5 min',
    imageUrl: '/assets/images/article_etiqueta_campo.jpg',
  },

  {
    id: 'mujeres-4x4-rompiendo-barreras',
    title: 'Mujeres todoterreneras: Rompiendo barreras en el off-road',
    excerpt:
      'Cada vez más mujeres lideran expediciones, compiten en el Dakar y construyen comunidades en torno al 4x4. Este es su espacio.',
    body: `<p>El mundo del 4x4 ha sido históricamente masculino, pero eso está cambiando de forma acelerada. Cada vez más mujeres no solo participan en la actividad, sino que la lideran: como instructoras, expedicionarias, mecánicas y competidoras.</p>

<p><strong>Jutta Kleinschmidt</strong> sigue siendo la única mujer en ganar el Rally Dakar en la categoría de coches, una hazaña que logró en 2001 al volante de un Mitsubishi Pajero. Su victoria no fue un accidente: fue el resultado de años de preparación, resistencia y una habilidad técnica excepcional en la arena del desierto.</p>

<p>En España, colectivos como <strong>4x4 Ellas</strong> organizan rutas y talleres mecánicos orientados a mujeres, con el objetivo de crear un espacio donde aprender sin la presión que a veces genera la dinámica de grupo mixta. La respuesta ha sido masiva: los cursos se llenan en horas.</p>

<p>En las redes sociales, cuentas de overlanding femenino acumulan cientos de miles de seguidores, demostrando que el interés por la aventura en 4x4 trasciende cualquier género. Viajeras solitarias que recorren África o Asia en sus vehículos modificados son hoy un referente para toda la comunidad.</p>

<p>La conclusión es simple: el campo no tiene género. Tiene respeto, técnica y pasión. Y eso lo aportan por igual hombres y mujeres.</p>`,
    externalLinks: [
      {
        label: 'Dakar Rally — Historia y palmarés',
        url: 'https://www.dakar.com/',
      },
      {
        label: 'Women Overlanding the World',
        url: 'https://www.womenoverlandingtheworld.com/',
      },
    ],
    date: '2026-04-22',
    readTime: '5 min',
    imageUrl: '/assets/images/article_mujeres_4x4.png',
  },
];
