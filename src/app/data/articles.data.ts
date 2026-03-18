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
];
