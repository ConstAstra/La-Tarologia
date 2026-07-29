import { Article } from "@/types/tarot";

// Traducción al español de los artículos gratuitos. Los artículos premium aún no están
// traducidos y usan el francés como repliegue — ver src/data/i18n/index.ts.
export const articlesEs: Article[] = [
  {
    id: "art-histoire-origines",
    category: "histoire",
    title: "¿De dónde viene el tarot?",
    isFree: true,
    summary: "Un rápido viaje en el tiempo, desde simples cartas de juego italianas hasta la herramienta de reflexión que conocemos hoy.",
    body: [
      "El tarot no nació como una herramienta de adivinación. Sus primeros rastros se remontan al norte de Italia, en el siglo quince, donde familias adineradas encargaban lujosos mazos de cartas para jugar a un juego de bazas parecido al bridge actual. A estos mazos se los llamaba entonces «tarocchi», y ya incluían una serie de triunfos ilustrados, antepasados directos de nuestros arcanos mayores.",
      "Durante mucho tiempo, estas cartas siguieron siendo un simple entretenimiento de corte. No fue hasta el siglo dieciocho, en un clima europeo fascinado por las ciencias ocultas y las tradiciones egipcias o hebreas, cuando algunos autores empezaron a ver en estas imágenes mucho más que un juego: un sistema simbólico capaz de contar una historia universal, la de un camino de vida jalonado de pruebas y revelaciones.",
      "De este encuentro entre un juego popular y una sed de esoterismo nació el tarot adivinatorio tal como se practica hoy. Las figuras se cargaron de sentido: el Mago se convirtió en el inicio del camino, el Mundo en su culminación, y cada carta intermedia en una etapa de esa travesía simbólica.",
      "Desde entonces, el tarot no ha dejado de evolucionar. Cada época, cada corriente espiritual o artística le ha añadido su capa de significado, lo que explica la gran diversidad de mazos que se encuentran hoy, manteniendo a la vez una arquitectura común: veintidós arcanos mayores y cincuenta y seis arcanos menores repartidos en cuatro familias.",
    ],
  },
  {
    id: "art-histoire-evolution",
    category: "histoire",
    title: "Del juego de corte a la herramienta de desarrollo personal",
    isFree: true,
    summary: "Cómo el tarot pasó del salón aristocrático a la mesita de noche, cambiando de función varias veces.",
    body: [
      "A lo largo de los siglos, el tarot ha cambiado de estatus varias veces. Juego de sociedad en la Italia del Renacimiento, se convierte en el siglo diecinueve en objeto de estudio para círculos esotéricos que buscan descifrar sus correspondencias ocultas con la astrología, la cábala o la alquimia. Es en esta época cuando se fija buena parte de las asociaciones simbólicas todavía usadas hoy.",
      "En el siglo veinte, con la difusión de mazos más accesibles y numerosas obras de divulgación, el tarot sale poco a poco de los círculos iniciados para llegar a los hogares. Se convierte en un soporte de reflexión personal tanto como en una herramienta de consulta, usado tanto para interrogar el futuro como para comprender mejor una situación presente.",
      "Hoy, una gran parte de las personas que tiran las cartas lo hacen menos para predecir un futuro fijo que para explorar una pregunta, tomar distancia o aclarar una intuición. Es esta dimensión de espejo y de diálogo con uno mismo la que esta aplicación busca poner en valor, sin pretender nunca sustituir una elección personal informada.",
    ],
  },
  {
    id: "art-chemin-du-fou",
    category: "histoire",
    title: "El camino del Loco: la historia que cuentan los arcanos mayores",
    isFree: true,
    summary: "Del Loco que salta al vacío al Mundo que cierra el círculo, los 22 arcanos mayores no son una simple lista: es un recorrido. Aquí está la historia que cuentan, paso a paso.",
    body: [
      "Tomados uno a uno, los veintidós arcanos mayores parecen una galería de retratos sin relación aparente. Puestos de nuevo en orden, cuentan otra cosa muy distinta: una sola historia, la de un personaje que atraviesa una existencia entera en veintidós etapas. La tradición llama a este recorrido el camino del Loco, porque es él, el número cero, sin siquiera una cifra completa que lo ancle, quien abre la marcha.",
      "Todo empieza con un salto. El Loco no tiene equipaje sólido ni plan establecido, solo el impulso. No es casualidad que abra el camino: plantea la pregunta que el resto del recorrido tardará veintiún arcanos en explorar: ¿qué pasa cuando avanzas sin saber qué te espera al final? Cada carta siguiente es una respuesta parcial, una lección que el Loco encuentra en su camino y que lo transforma.",
      "Las siete primeras etapas, del Mago al Carro, construyen a alguien en el mundo. El Mago aprende a actuar, la Sacerdotisa a escuchar lo que no se ve, la Emperatriz a crear y dar sin contar, el Emperador a estructurar, el Sumo Sacerdote a recibir un saber transmitido, los Enamorados a elegir de verdad, el Carro a sostener juntas dos fuerzas contrarias para avanzar. Al final de este primer tercio, el Loco tiene un nombre, un lugar, una voluntad. Y eso es solo la mitad del trabajo.",
      "Las siete etapas siguientes, de la Justicia a la Templanza, ya no construyen nada: hacen limpieza. La Justicia impone mirar de frente las consecuencias. El Ermitaño aparta al personaje del ruido del mundo que acaba de conquistar, para obligarlo a oírse pensar. La Rueda de la Fortuna le recuerda que nada de lo que ha construido está totalmente bajo su control. La Fuerza le enseña a domar sin violencia. El Colgado lo suspende, literalmente, para que vea de otra manera. El Arcano sin Nombre termina lo que debe terminar. La Templanza recompone los pedazos con paciencia. Es la travesía más exigente del camino: aquí no se gana nada, todo se aclara.",
      "Las siete últimas etapas, del Diablo al Mundo, son las de la liberación. El Diablo obliga a mirar de frente lo que todavía encadena. La Torre derriba, sin avisar, lo que reposaba sobre falsos cimientos. La Estrella cura, con sinceridad, lo que la caída acaba de dejar al descubierto. La Luna atraviesa una última zona de sombra, hecha de intuiciones y miedos mezclados. El Sol por fin disipa toda niebla. El Juicio impone una decisión que el personaje ya no puede posponer. El Mundo cierra el círculo: un objetivo alcanzado, un ciclo plenamente vivido.",
      "¿Y después del Mundo? Nada se detiene de verdad. El vigésimo segundo arcano no lleva a un punto final, lleva de vuelta al Loco, listo para saltar de nuevo, en otro lugar, de otra manera, con lo que el camino anterior le ha enseñado. Es esta circularidad la que da todo su sentido a la posición de un arcano mayor en una tirada: no dice solo qué está en juego, sitúa dónde estás en este camino, sin fijarlo nunca en tu lugar. El camino traza un mapa, no una ruta impuesta: lo que hagas con él sigue siendo, en cada etapa, enteramente asunto tuyo.",
    ],
  },
  {
    id: "art-marseille-vs-riderwaite",
    category: "styles",
    title: "Tarot de Marsella y Rider-Waite: dos caras del mismo camino",
    isFree: true,
    summary: "Las dos grandes familias de tarot no comparten ni el mismo estilo ni del todo la misma forma de leerse. Aquí tienes cómo distinguirlas.",
    body: [
      "Al empezar, la diversidad de mazos de tarot puede sorprender. Dos grandes familias dominan ampliamente el panorama: el tarot de Marsella, de estilo más antiguo, y el tarot Rider-Waite-Smith, creado a principios del siglo veinte en Inglaterra, que ha influido fuertemente en la mayoría de los mazos modernos, incluidos los visuales de esta aplicación.",
      "El tarot de Marsella se mantiene fiel a una estética más antigua y estilizada. Sus arcanos menores, en particular, se representan de forma casi abstracta: cuatro bastos cruzados para el Cuatro de Bastos, copas alineadas para el Tres de Copas, sin escena ni personaje. Leer este mazo exige por tanto conocer bien el simbolismo de los números y las familias, ya que la imagen sola no cuenta una historia.",
      "El tarot Rider-Waite-Smith, al contrario, tomó una decisión que cambió de forma duradera la práctica del tarot: ilustrar cada carta menor con una escena concreta, con personajes en acción. El Tres de Copas muestra a tres mujeres celebrando juntas, el Cinco de Espadas a un vencedor amargo rodeado de adversarios que se alejan. Este enfoque narrativo hace que el mazo sea mucho más intuitivo para los principiantes, ya que la imagen ya aporta buena parte del significado.",
      "Las dos tradiciones tampoco se ponen del todo de acuerdo sobre el orden de dos arcanos mayores: el tarot de Marsella coloca la Justicia en octava posición y la Fuerza en la undécima, mientras que el Rider-Waite-Smith invierte estas dos cartas, por razones de correspondencias astrológicas establecidas por los círculos esotéricos ingleses del siglo diecinueve. Esta aplicación ha elegido el orden histórico del tarot de Marsella, apoyándose a la vez en unos visuales y una lectura inspirados en la tradición Rider-Waite-Smith por su claridad.",
      "Más allá de la estética, la diferencia es sobre todo una cuestión de enfoque: el tarot de Marsella invita a una lectura más simbólica y personal, donde quien interpreta construye el sentido a partir de formas simples, mientras que el Rider-Waite-Smith ofrece un sentido más inmediatamente accesible gracias a sus escenas ilustradas. Ninguno de los dos es «superior» al otro, son dos lenguajes diferentes para explorar las mismas preguntas.",
    ],
  },
  {
    id: "art-majeurs-mineurs",
    category: "pratique",
    title: "Arcanos mayores y menores: ¿cuál es la diferencia?",
    isFree: true,
    summary: "Entender la estructura de la baraja de tarot para leer mejor lo que cuenta una tirada.",
    body: [
      "Una baraja de tarot completa tiene setenta y ocho cartas, repartidas en dos grandes conjuntos que no juegan el mismo papel en una lectura. Los veintidós arcanos mayores, del Loco al Mundo, representan grandes etapas existenciales: temas universales como el amor, la pérdida, la transformación o el logro. Cuando aparecen varios arcanos mayores en una tirada, suele ser señal de que se está jugando un período importante, casi iniciático.",
      "Los cincuenta y seis arcanos menores, por su parte, están más cerca de lo cotidiano. Repartidos en cuatro familias (Bastos para la acción y la energía, Copas para las emociones, Espadas para el pensamiento y Oros para lo concreto), describen situaciones más ordinarias: una conversación, un contratiempo pasajero, una buena noticia profesional. Una tirada compuesta sobre todo de arcanos menores habla en general de un momento más ligero, más terrenal.",
      "Entender esta distinción ya cambia mucho la forma de leer una tirada: la presencia o ausencia de arcanos mayores da una indicación sobre la intensidad de lo que está en juego, incluso antes de fijarse en el significado preciso de cada carta.",
    ],
  },
  {
    id: "art-familles-mineures",
    category: "pratique",
    title: "Las cuatro familias de los arcanos menores",
    isFree: true,
    summary: "Bastos, Copas, Espadas, Oros: cada familia cubre una parcela distinta de la vida. Aquí tienes cómo reconocerlas y leerlas.",
    body: [
      "Los cincuenta y seis arcanos menores se reparten en cuatro familias de catorce cartas cada una, un poco como los palos de una baraja clásica. Cada familia está asociada a un elemento y a un ámbito de vida muy concreto, lo que permite, desde el primer vistazo a una tirada, sentir de qué va a tratarse realmente antes incluso de leer el detalle de cada carta.",
      "Los Bastos pertenecen al elemento Fuego. Llevan todo lo relacionado con el impulso, la acción y el deseo: las ganas de emprender, la ambición, la pasión, la creatividad que empuja a lanzarse. Una mano de tirada rica en Bastos habla generalmente de movimiento, de proyectos, de energía por canalizar, a veces también de competición o de precipitación cuando esa energía carece de dirección. Es la familia del «hacer» y del «querer».",
      "Las Copas pertenecen al elemento Agua. Cubren todo lo relacionado con lo que se siente: el amor, los vínculos afectivos, la intuición, la vida interior, la imaginación. Una tirada marcada por las Copas orienta la lectura hacia el corazón y las relaciones, ya se trate de un sentimiento naciente, de una emoción por digerir o de un vínculo por reparar. Es la familia del «sentir» y del «amar».",
      "Las Espadas pertenecen al elemento Aire. Representan el pensamiento: la claridad mental, la comunicación, pero también los conflictos, los miedos y las verdades a veces difíciles de escuchar. Una presencia marcada de Espadas en una tirada suele señalar una situación que se juega tanto en la cabeza como en los hechos: una decisión por tomar, una conversación por tener, una mente por calmar. Es la familia del «pensar» y del «decir».",
      "Los Oros, por último, pertenecen al elemento Tierra. Conciernen a todo lo concreto: el dinero, el trabajo, el cuerpo, la seguridad material, lo cotidiano. Una tirada rica en Oros suele devolver la pregunta hacia asuntos tangibles, palpables, lejos de la abstracción: un proyecto profesional, una gestión de presupuesto, una cuestión de salud o de organización práctica. Es la familia del «construir» y del «poseer».",
      "En una lectura, es útil observar qué familia domina una tirada, más allá del significado de cada carta tomada por separado: varias Copas juntas insisten en la dimensión afectiva de una situación, varias Espadas en su dimensión mental o conflictiva, y así sucesivamente. Esta visión de conjunto, a menudo descuidada por los principiantes, es sin embargo uno de los reflejos más útiles para no perderse en el detalle antes de captar el tono general de la tirada.",
    ],
  },
  {
    id: "art-etat-esprit-libre-arbitre",
    category: "pratique",
    title: "Aprender a tirar las cartas uno mismo: estado de ánimo, ritual y libre albedrío",
    isFree: true,
    summary: "Esta aplicación no pretende leer el tarot en tu lugar: está hecha para enseñarte a hacerlo tú mismo. Aquí tienes cómo prepararte para una tirada, y por qué ninguna carta decide nunca por ti.",
    body: [
      "El tarot no funciona como un buscador: hacer la misma pregunta diez veces con la esperanza de obtener una respuesta más agradable no cambia nada, salvo enturbiar la lectura. Antes de tirar, date unos minutos de calma real, no un gesto automático entre dos notificaciones. Detente, respira, deja que se asiente lo que te agita, y luego formula con claridad lo que buscas comprender. Una lectura hecha con prisa o con ansiedad dará una interpretación hecha con prisa y ansiedad: la tirada refleja tanto tu estado del momento como la situación que ilumina.",
      "El segundo ingrediente, más exigente que el primero, es la sinceridad: aceptar escuchar una respuesta que no te conviene. Es tentador volver a girar una carta, leerla mal o forzar su sentido hacia lo que ya esperabas oír. Una buena lectura exige lo contrario, una curiosidad honesta, dispuesta a acoger la incomodidad si eso es lo que trae la carta. No es un ejercicio de confirmación, es un ejercicio de escucha.",
      "Muchos tarólogos tienen la costumbre de «purificar» su mazo antes de usarlo: un gesto simple y neutro basta de sobra. Golpear suavemente el mazo tres veces antes de barajar, dejarlo reposar una noche al aire libre, o simplemente volver a ordenar las cartas de vez en cuando para partir de una base neutra funciona muy bien. Nada de esto necesita tomarse al pie de la letra para ser útil: este gesto marca una frontera clara entre el tiempo ordinario y el tiempo de la tirada, un poco como lavarse las manos antes de cocinar. Recentra la atención, y señala tanto al cuerpo como a la mente que empieza un momento diferente. Adopta el ritual que te hable, o ninguno: lo que cuenta es la intención que le pones, no la fórmula exacta.",
      "Esta aplicación no tiene como vocación tirar las cartas en tu lugar de forma indefinida: está construida para enseñarte a hacerlo tú mismo, hasta que ya no la necesites. Tres hábitos aceleran de verdad este aprendizaje. Primero, antes de leer la interpretación propuesta, mira la carta unos segundos y pregúntate qué te evoca espontáneamente: tu primera impresión, por imprecisa que sea, es un verdadero punto de partida, no un error que corregir. Después, empieza con tiradas cortas, una o dos cartas, antes de aventurarte con tiradas más complejas como la cruz celta: leer una sola carta se aprende, y ese aprendizaje se traslada después a tiradas más ricas. Por último, anota tus tiradas y lo que realmente ocurrió después: es confrontando tus lecturas con la realidad, semana tras semana, como se construye un sentido personal de las cartas, mucho más allá de lo que cualquier aplicación puede darte por sí sola.",
      "Queda el punto más importante, el que ninguna aplicación de tarot seria debería dejar nunca en la sombra: las cartas no escriben nada en tu lugar. Iluminan una dinámica, nombran una energía, revelan un punto ciego; nunca deciden lo que harás después. Una carta difícil no es una sentencia, y una carta favorable no es una garantía: en ambos casos, lo que realmente está en juego se juega en tus elecciones, no en la tirada. El tarot funciona como un espejo más que como un oráculo fijo: te muestra algo que quizá ya sabías, sin tener aún la palabra para decirlo. Lo que hagas con esa claridad te pertenece por entero, y a nadie más.",
      "Mantén esa libertad en mente en cada tirada. El mejor uso del tarot no es decirte qué hacer, sino darte con qué decidir por ti mismo, con más lucidez que antes de poner las cartas sobre la mesa.",
    ],
  },
];
