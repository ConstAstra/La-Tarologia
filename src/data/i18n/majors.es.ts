import { CardMeaning } from "@/types/tarot";

// Traducción al español de los 22 arcanos mayores. Mismos ids que src/data/cards.ts —
// se combinan por id en tiempo de ejecución, así que este archivo solo lleva los campos traducidos.
export const majorsEs: CardMeaning[] = [
  {
    id: "maj-00",
    number: 0,
    name: "El Loco",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["impulso", "libertad total", "insensatez asumida", "umbral de lo posible"],
    keywordsReversed: ["imprudencia", "huida hacia adelante", "falta de rumbo", "ingenuidad que cuesta cara"],
    uprightMeaning:
      "El Loco no calcula, avanza. Esta carta no te pide ser razonable: te exige dar el primer paso antes de tener todas las respuestas. Un proyecto nuevo, una ruptura con el viejo esquema, una decisión tomada por instinto más que por lógica: sea cual sea el pretexto, la energía es la misma: saltar, y aprender mientras caes. No le pidas garantías a esta carta, no las da.",
    reversedMeaning:
      "Invertido, el impulso se convierte en pura inconsciencia: te vas sin mirar dónde pisas, dices sí para no pensar, huyes de una realidad que prefieres no nombrar. El Loco invertido no te castiga, te avisa una sola vez: ese precipicio existe de verdad.",
    love: "Un flechazo o unas ganas de dejarlo todo por un impulso: emocionante, pero solo si una conversación real sigue al entusiasmo; si no, es solo una huida disfrazada de aventura.",
    travailArgent:
      "El momento de lanzarte, cambiar de rumbo o dejar un puesto que te asfixiaba, siempre que no confundas audacia con improvisación total.",
    conseil: "Salta. Pero mantén los ojos abiertos al caer: el impulso no te exime de mirar dónde aterrizas.",
    symbolisme: "El personaje camina al borde de un precipicio, un ligero hatillo al hombro, un perro a sus pies: el camino ya ha comenzado, y sin embargo todo sigue siendo posible.",
  },
  {
    id: "maj-01",
    number: 1,
    name: "El Mago",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["iniciativa", "habilidad", "pasar a la acción", "recursos al alcance"],
    keywordsReversed: ["agitación estéril", "farol", "manipulación", "medios mal empleados"],
    uprightMeaning:
      "El Mago no espera a nadie: tiene sus herramientas sobre la mesa, y las usa, ahora. Esta carta marca el momento exacto en que una idea deja de ser una idea para convertirse en un gesto concreto. No es una carta de preparación, es una carta de ejecución. Ya tienes lo que hace falta.",
    reversedMeaning:
      "Invertido, se agita sin construir: energía gastada en la ilusión más que en el resultado, labia que enmascara una falta de fondo, o peor, la tentación de manipular en lugar de convencer honestamente.",
    love: "Una declaración franca, una iniciativa asumida sin esperar a que el otro dé el primer paso; el encanto funciona, pero solo si es sincero.",
    travailArgent:
      "Lanza el proyecto que llevas demasiado tiempo posponiendo; tu facilidad para convencer inclinará una negociación a tu favor.",
    conseil: "Deja de pulir, empieza. La perfección no existe antes de la acción, solo después de varios intentos.",
    symbolisme: "De pie ante su mesa cubierta de objetos, un brazo levantado hacia el cielo y el otro hacia el suelo, une la idea y la acción.",
  },
  {
    id: "maj-02",
    number: 2,
    name: "La Sacerdotisa",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["intuición", "retiro elegido", "saber interior", "misterio asumido"],
    keywordsReversed: ["secretos mal digeridos", "desconexión de uno mismo", "rigidez"],
    uprightMeaning:
      "La Sacerdotisa no se explica, y no tiene por qué hacerlo. Sabe cosas que la lógica aún no alcanza, y te pide una sola cosa: deja de querer entenderlo todo antes de actuar. Algunas respuestas solo llegan callando. Esta carta protege un saber que madura en la sombra: no lo fuerces a salir demasiado pronto.",
    reversedMeaning:
      "Invertida, te desconectas de lo que ya sabes: racionalizas para no sentir, guardas un secreto que acaba pesando más de lo que protege. Lo que evitas no desaparece, solo espera a que dejes de correr.",
    love: "Una relación no declarada, una atracción que ninguno de los dos se atreve a nombrar; el silencio dice aquí más que cualquier palabra.",
    travailArgent:
      "Observa antes de actuar. No es el momento de posicionarte públicamente ni de forzar una decisión: la situación aún no ha revelado todos sus elementos.",
    conseil: "Confía en lo que sientes, aunque no puedas demostrarlo todavía. La intuición nunca ha necesitado tu validación para tener razón.",
    symbolisme: "Sentada entre dos columnas, un libro entreabierto sobre las rodillas, guarda el umbral entre lo visible y lo que aún no lo es.",
  },
  {
    id: "maj-03",
    number: 3,
    name: "La Emperatriz",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["abundancia", "sensualidad", "creatividad fértil", "generosidad natural"],
    keywordsReversed: ["sobrecarga", "dependencia afectiva", "creación estancada"],
    uprightMeaning:
      "La Emperatriz no pide permiso para florecer. Lo que has sembrado crece, sin esfuerzo excesivo, con la generosidad bruta de la naturaleza que da sin contar. Esta carta habla de un placer asumido, de una creación que toma forma, de una sensualidad que no se disculpa por nada. Toma lo que se te ofrece.",
    reversedMeaning:
      "Invertida, esta generosidad se vuelve contra ti: das más de lo que recibes, un proyecto creativo se marchita por falta de tiempo para ti misma, tu cuerpo reclama una atención que le niegas desde hace demasiado.",
    love: "Una relación sensual y nutritiva, a veces un deseo de formar un hogar que se precisa claramente: las ganas de construir algo tangible, no solo de hablar de ello.",
    travailArgent:
      "Un período fértil para un proyecto creativo o una inversión que necesita tiempo para madurar; no coseches antes de hora.",
    conseil: "Cuida lo que construyes sin olvidarte de ti misma. Una creadora agotada ya no crea nada.",
    symbolisme: "Sentada en un campo de trigo maduro, rodeada de abundancia vegetal, encarna a la naturaleza que da sin contar.",
  },
  {
    id: "maj-04",
    number: 4,
    name: "El Emperador",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["estructura", "autoridad asumida", "estabilidad", "marco protector"],
    keywordsReversed: ["rigidez", "autoritarismo", "necesidad de controlarlo todo"],
    uprightMeaning:
      "El Emperador impone un marco sólido y lo sostiene. Sin zonas grises, sin reglas a medias: una estructura que se mantiene en pie porque alguien decidió que se mantendría. Esta carta no habla de poder por el poder, sino de una autoridad que protege precisamente porque es firme. Toma posición, con claridad.",
    reversedMeaning:
      "Invertido, la estructura se convierte en jaula: control excesivo, terquedad que rechaza cualquier cuestionamiento, o al contrario un vacío total de organización donde ya nada se sostiene. Pregúntate quién tiene realmente la autoridad aquí, y si todavía sirve para algo.",
    love: "Una pareja estable y protectora, o al contrario demasiado directiva: la relación necesita reglas puestas entre los dos, no impuestas por uno solo.",
    travailArgent:
      "El momento de fijar un marco, negociar condiciones sólidas o asumir una responsabilidad que venías evitando.",
    conseil: "Estructura con firmeza lo que lo necesita. La firmeza no es rigidez mientras siga al servicio de algo.",
    symbolisme: "Sentado en un trono de piedra adornado con carneros, sostiene un cetro: la materia domada por la voluntad.",
  },
  {
    id: "maj-05",
    number: 5,
    name: "El Sumo Sacerdote",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["transmisión", "tradición", "consejo acertado", "compromiso formal"],
    keywordsReversed: ["dogmatismo", "conformismo forzado", "mal consejo seguido a ciegas"],
    uprightMeaning:
      "El Sumo Sacerdote transmite lo que ha demostrado su valor: un saber, un marco, una tradición que da sentido a lo que llevas cargando solo desde hace demasiado tiempo. Esta carta habla de compromisos que se formalizan (matrimonio, contrato, formación) y de un mentor cuya experiencia merece ser escuchada, sin tragarla sin criterio.",
    reversedMeaning:
      "Invertido, señala una enseñanza seguida sin nunca cuestionarla, una presión del grupo para adaptarte, o un consejo que no te conviene pero que sigues por costumbre. Piensa por ti mismo, incluso cuando la autoridad se te opone.",
    love: "Una unión que se formaliza, o la influencia, a veces pesada, de un tercero sobre tu relación: familia, un amigo, la tradición.",
    travailArgent:
      "Una formación, una tutoría o un trámite administrativo que hay que llevar con seriedad, sin descuidar los detalles que importan.",
    conseil: "Apóyate en la experiencia de quien ya sabe, sin renunciar nunca a tu propio juicio.",
    symbolisme: "Bendice a dos discípulos arrodillados ante él, depositario de un saber que se transmite de generación en generación.",
  },
  {
    id: "maj-06",
    number: 6,
    name: "Los Enamorados",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["elección decisiva", "alineación", "atracción franca", "corazón y razón reconciliados"],
    keywordsReversed: ["indecisión que se prolonga", "tentación", "desacuerdo interior"],
    uprightMeaning:
      "Los Enamorados no te piden ser razonable, te piden ser honesto. Se presenta una elección, y de verdad importa: seguir lo que de verdad te atrae, o lo que parece seguro sobre el papel. Esta carta habla de una armonía recuperada entre el deseo y la razón, pero solo cuando dejas de mentirte sobre lo que realmente quieres.",
    reversedMeaning:
      "Invertida, la duda se eterniza, se instala un triángulo relacional, o una elección se hace por miedo más que por deseo. Mientras te niegues a decidir, la situación decidirá por ti, y rara vez a tu favor.",
    love: "Una historia marcante, una elección decisiva, a veces un dilema entre dos personas o dos caminos de vida; la ambigüedad ya no se sostiene.",
    travailArgent:
      "Una decisión entre dos propuestas: elige la que esté realmente alineada con tus valores, no la que más tranquiliza.",
    conseil: "Decide con un corazón informado por la razón, no uno contra la otra, sino uno iluminando a la otra.",
    symbolisme: "Un hombre entre dos figuras femeninas, bajo un ángel que vela: la elección humana sigue siendo libre, pero nunca del todo sola.",
  },
  {
    id: "maj-07",
    number: 7,
    name: "El Carro",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["victoria por la voluntad", "determinación", "avance controlado", "dos fuerzas domadas"],
    keywordsReversed: ["pérdida de control", "obstinación estéril", "agotamiento"],
    uprightMeaning:
      "El Carro avanza porque su conductor ha domado dos fuerzas que tiran en sentido contrario, sin látigo, solo con voluntad. Esta carta habla de una victoria obtenida por pura determinación, no por suerte: un obstáculo superado, una mudanza, un objetivo alcanzado porque te negaste a soltar.",
    reversedMeaning:
      "Invertido, el carro se dispara en todas direcciones: demasiados frentes abiertos a la vez, un avance forzado que te agota, una victoria que se escapa por falta de rumbo claro. Elige una sola batalla.",
    love: "Una relación que avanza rápido, impulsada por una fuerte voluntad compartida; cuidado con tirar cada uno hacia su lado creyendo avanzar juntos.",
    travailArgent:
      "El momento de llevar un proyecto hasta el final sin desviarte, de negociar con firmeza, o de emprender un desplazamiento decisivo.",
    conseil: "Mantén el rumbo. Pero antes comprueba que las dos fuerzas que te mueven realmente tiran en la misma dirección.",
    symbolisme: "El conductor sostiene las riendas de dos esfinges, una clara, una oscura, sin látigo: solo por voluntad las hace avanzar juntas.",
  },
  {
    id: "maj-08",
    number: 8,
    name: "La Justicia",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["equidad", "verdad que se impone", "consecuencia asumida", "decisión lúcida"],
    keywordsReversed: ["injusticia", "negación", "decisión sesgada"],
    uprightMeaning:
      "La Justicia no negocia con los hechos: cada acto tiene su consecuencia, y ha llegado el momento de mirarla de frente. Una decisión, un juicio, un arreglo tomado con lucidez, donde lo que realmente pasó pesa más que lo que hubieras preferido que pasara.",
    reversedMeaning:
      "Invertida, se instala el desequilibrio: una decisión parcial, una verdad que evitas cuidadosamente, un sentimiento de injusticia que exige reparación y no resignación. Un trámite se alarga porque alguien se niega a decidir.",
    love: "Es necesario un reequilibrio: quién da, quién recibe, y desde cuándo la balanza se inclina siempre del mismo lado.",
    travailArgent:
      "Un contrato, un trámite o una negociación donde solo el rigor y la honestidad marcarán la diferencia; los atajos siempre se pagan.",
    conseil: "Mira la situación sin complacencia contigo mismo. La verdad incomoda primero, y repara después.",
    symbolisme: "Sentada entre dos columnas, una balanza en una mano, una espada recta en la otra: pesa antes de decidir.",
  },
  {
    id: "maj-09",
    number: 9,
    name: "El Ermitaño",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["introspección", "sabiduría silenciosa", "soledad elegida", "guía interior"],
    keywordsReversed: ["aislamiento sufrido", "repliegue", "rechazo de ayuda"],
    uprightMeaning:
      "El Ermitaño da la espalda al ruido, no por misantropía sino porque su propia voz solo se oye en silencio. Esta carta exige un retiro, una soledad elegida, un momento de recogimiento antes de avanzar a ciegas hacia la siguiente etapa. También puede señalar a un mentor cuya sabiduría discreta vale más que un consejo ruidoso.",
    reversedMeaning:
      "Invertido, el aislamiento pesa en lugar de iluminar: rechazas que te ayuden, o guardas para ti una sabiduría que merecería ser compartida. La soledad ha dejado de ser una elección para convertirse en un muro.",
    love: "Una necesidad real de espacio personal, o una soltería vivida no como una carencia sino como un tiempo útil para reencontrarte contigo mismo.",
    travailArgent:
      "Un trabajo de fondo, a menudo en solitario, que prepara una decisión más que la precipita; no te saltes esta etapa.",
    conseil: "Date tiempo para pensar a solas antes de responder o comprometerte. Una decisión tomada bajo presión social rara vez es la correcta.",
    symbolisme: "Linterna en mano, camina lentamente en la oscuridad, iluminando solo el terreno justo para el siguiente paso.",
  },
  {
    id: "maj-10",
    number: 10,
    name: "La Rueda de la Fortuna",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["giro decisivo", "cambio de ciclo", "azar objetivo", "movimiento inevitable"],
    keywordsReversed: ["resistencia al cambio", "racha de contratiempos", "mala suerte pasajera"],
    uprightMeaning:
      "La Rueda gira, y punto. Nada permanece fijo mucho tiempo, y el giro que se anuncia escapa en gran parte a tu control directo, ya sea una suerte inesperada o el final claro de un ciclo. Esta carta no te pide opinión, te informa: algo se mueve, prepárate para seguir el movimiento en lugar de combatirlo.",
    reversedMeaning:
      "Invertida, te resistes a un cambio que solo prolonga una fase difícil, o atraviesas una serie de contratiempos. No es una fatalidad definitiva: la rueda sigue girando, también para ti.",
    love: "Un cambio de estatus, un encuentro en el momento justo, o una relación que llega a un giro decisivo imposible de ignorar.",
    travailArgent:
      "Surge una oportunidad sin avisar, o una situación profesional da un vuelco: mantente listo para aprovechar lo que pase, no para esperarlo pasivamente.",
    conseil: "Deja de luchar contra lo que escapa a tu control. Concentra toda tu energía en lo que todavía puedes orientar.",
    symbolisme: "Una rueda cubierta de símbolos gira, sostenida por figuras mitad animales mitad humanas: el destino mezcla azar y evolución.",
  },
  {
    id: "maj-11",
    number: 11,
    name: "La Fuerza",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["dominio suave", "coraje tranquilo", "paciencia", "autocontrol real"],
    keywordsReversed: ["ira mal contenida", "duda de uno mismo", "agotamiento nervioso"],
    uprightMeaning:
      "La Fuerza nunca se impone por la fuerza bruta. Doma lo que parecía indomable (un miedo, una ira, una situación que te supera) con una dulzura tenaz que desgasta las resistencias mejor que cualquier confrontación. Es un coraje silencioso, y precisamente por eso es inquebrantable.",
    reversedMeaning:
      "Invertida, la energía se desborda: una ira mal contenida, una emoción que ya no logras canalizar, o al contrario un sentimiento total de impotencia frente a una situación que te parece demasiado grande.",
    love: "Una relación que necesita paciencia y dulzura más que pulsos de fuerza; tu capacidad para calmar en vez de vencer marca toda la diferencia.",
    travailArgent:
      "Una situación difícil que se resuelve con perseverancia tranquila, nunca con confrontación directa.",
    conseil: "Enfrenta lo que te asusta con dulzura y constancia. Los golpes de fuerza solo levantan resistencias más sólidas.",
    symbolisme: "Una mujer cierra sin esfuerzo aparente las fauces de un león: el verdadero dominio no grita.",
  },
  {
    id: "maj-12",
    number: 12,
    name: "El Colgado",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["pausa elegida", "cambio de perspectiva", "soltar de forma activa", "espera que construye"],
    keywordsReversed: ["bloqueo voluntario", "sacrificio inútil", "resistencia a ver de otro modo"],
    uprightMeaning:
      "El Colgado no ha tropezado: eligió esta posición. Suspender la acción para ver el mundo de otra manera no es un fracaso, aunque todo en tu cultura del rendimiento te empuje a creerlo. Esta carta impone un tiempo muerto, una espera, una renuncia provisional que abre una comprensión que ninguna acción apresurada habría revelado.",
    reversedMeaning:
      "Invertido, el bloqueo se prolonga sin razón válida, un sacrificio se hace por malos motivos, o te niegas obstinadamente a cambiar de ángulo cuando la situación lo reclama a gritos.",
    love: "Una pausa en la relación, a veces frustrante en el momento, pero que permite por fin ver con claridad lo que realmente ocurre.",
    travailArgent:
      "Un proyecto en pausa, un plazo que aceptar sin combatirlo: esta decisión gana madurando en lugar de precipitarse.",
    conseil: "No fuerces nada ahora. Este tiempo suspendido no está perdido: prepara la decisión que aún no podrías tomar correctamente.",
    symbolisme: "Colgado por un pie, el rostro sereno, mira el mundo al revés y encuentra en ello una paz inesperada.",
  },
  {
    id: "maj-13",
    number: 13,
    name: "El Arcano sin Nombre",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["final de ciclo neto", "transformación", "renuncia necesaria", "renacimiento"],
    keywordsReversed: ["resistencia al cambio", "final rechazado", "estancamiento doloroso"],
    uprightMeaning:
      "Esta carta casi nunca habla de muerte literal, y precisamente por eso merece tomarse en serio: anuncia el final claro de un ciclo. Una relación, un hábito, una identidad que llevabas contigo llega a su término. Este cierre, por duro que sea, despeja el espacio necesario para lo que viene: nada crece mientras lo antiguo ocupe todo el lugar.",
    reversedMeaning:
      "Invertida, muestra un final que te niegas a aceptar: una situación mantenida artificialmente con vida, más por miedo al vacío que por un apego real, que solo prolonga un sufrimiento ya evidente.",
    love: "El final de una relación o de una forma de amar ya obsoleta, doloroso, pero que abre paso a algo más justo que lo que acaba de terminar.",
    travailArgent:
      "Un proyecto, un puesto o un método llega a su fin. No te aferres: preparar lo que sigue vale más que retrasar lo inevitable.",
    conseil: "Deja ir lo que debe terminar. Aferrarte solo retrasa una cosa: lo que necesita ese lugar para nacer.",
    symbolisme: "Un esqueleto siega un campo donde ya rebrotan manos y cabezas: el final siempre alimenta una renovación.",
  },
  {
    id: "maj-14",
    number: 14,
    name: "La Templanza",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["equilibrio trabajado", "paciencia", "justa medida", "reconciliación"],
    keywordsReversed: ["exceso", "desequilibrio", "impaciencia destructiva"],
    uprightMeaning:
      "La Templanza vierte de un recipiente a otro sin perder una gota: es el arte de la dosis exacta, la paciencia que reconcilia dos elementos que parecían incompatibles. Tras un período tenso, esta carta impone una calma que no debe nada al azar, un trabajo de equilibrista llevado con método.",
    reversedMeaning:
      "Invertida, se instala el exceso, en un sentido o en otro: una impaciencia que desborda un equilibrio aún frágil. Frena antes de que todo se derrame.",
    love: "Una relación que por fin encuentra su ritmo, un compromiso sano, una reconciliación merecida tras un período de fricción.",
    travailArgent:
      "Un proyecto que avanza mejor dosificado que a toda prisa: buen momento para negociar un compromiso duradero.",
    conseil: "Busca el término medio, aunque la moderación te exija más paciencia que el extremo.",
    symbolisme: "Un pie en tierra, un pie en el agua, vierte un líquido de una copa a otra en un gesto continuo y medido.",
  },
  {
    id: "maj-15",
    number: 15,
    name: "El Diablo",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["apego", "tentación", "dependencia", "atadura por nombrar"],
    keywordsReversed: ["toma de conciencia", "liberación", "ruptura de un vínculo tóxico"],
    uprightMeaning:
      "El Diablo no juzga el deseo, señala la cadena. Un apego que encadena más de lo que colma: una dependencia afectiva, un hábito instalado, un impulso, una relación de sometimiento. Esta carta no condena nada, simplemente te pone frente a ese vínculo, a menudo mucho más flojo de lo que quieres admitir.",
    reversedMeaning:
      "Invertida, casi siempre es buena noticia: tomas conciencia de un vínculo tóxico, y el desapego comienza, aunque el camino hacia la libertad todavía exija coraje.",
    love: "Una atracción intensa pero posesiva, una relación de sometimiento, unos celos que urge examinar con honestidad en lugar de justificar.",
    travailArgent:
      "Una dependencia financiera, un puesto que desgasta sin nutrir, una situación cuyos límites ya conoces sin atreverte a salir.",
    conseil: "Mira con lucidez lo que te retiene. La cadena casi siempre es más fácil de romper de lo que crees; el verdadero obstáculo es atreverte a mirar.",
    symbolisme: "Dos personajes encadenados a un pedestal donde reina una figura con cuernos: sus ataduras están flojas, podrían liberarse si lo decidieran.",
  },
  {
    id: "maj-16",
    number: 16,
    name: "La Torre",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["ruptura súbita", "verdad que estalla", "derrumbe liberador"],
    keywordsReversed: ["catástrofe evitada por poco", "cambio retrasado", "crisis interior que se gesta"],
    uprightMeaning:
      "La Torre derriba de golpe lo que reposaba sobre malos cimientos. Un golpe, una ruptura, una verdad que estalla sin avisar, duro en el momento, pero esta caída evita un derrumbe aún mayor al liberar lo que de todos modos ya no se sostenía.",
    reversedMeaning:
      "Invertida, la crisis se gesta sin estallar todavía, o un derrumbe se evitó por poco gracias a un cambio hecho a tiempo. El alivio es real, pero frágil.",
    love: "Una ruptura brutal o una revelación que sacude la relación, pero que la coloca sobre bases por fin honestas.",
    travailArgent:
      "Un cambio repentino, una pérdida o un cuestionamiento imprevisto de una situación que parecía estable; no lo era tanto como parecía.",
    conseil: "No te aferres a una estructura que ya se agrieta. Lo que se derrumba siempre deja lugar a algo más sólido, pero solo si dejas de sostenerlo.",
    symbolisme: "El rayo golpea una torre y le arranca la corona: lo que se construyó sobre el orgullo no resiste la verdad.",
  },
  {
    id: "maj-17",
    number: 17,
    name: "La Estrella",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["esperanza sincera", "calma real", "inspiración", "confianza recuperada"],
    keywordsReversed: ["desánimo pasajero", "pérdida de rumbo", "esperanza frágil"],
    uprightMeaning:
      "Tras la tormenta de la Torre, la Estrella trae una calma sincera, no un parche provisional. La esperanza vuelve sin ingenuidad, las ideas se aclaran, y vuelve a ser posible creer en el futuro sin mentirte. Esta carta no promete nada espectacular: promete algo más raro, una curación real.",
    reversedMeaning:
      "Invertida, la esperanza vacila, se instala un desánimo pasajero, o te has perdido un poco de vista. La luz no ha desaparecido, solo está velada por ahora.",
    love: "Se instala un clima de confianza y sinceridad, propicio para abrirte sin temer el juicio del otro.",
    travailArgent:
      "Un proyecto con sentido, un reconocimiento merecido, o un impulso de motivación franco tras un período difícil.",
    conseil: "Déjate inspirar y vuelve a creer en lo que emprendes; sin forzarlo, la confianza se regenera sola.",
    symbolisme: "Arrodillada junto a un punto de agua, vierte el agua de dos jarras bajo un cielo lleno de estrellas: la confianza se regenera.",
  },
  {
    id: "maj-18",
    number: 18,
    name: "La Luna",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["intuición turbia", "ilusión", "miedos enterrados", "zona de sombra"],
    keywordsReversed: ["clarificación progresiva", "confusión que se disipa", "miedo infundado revelado"],
    uprightMeaning:
      "La Luna nunca ilumina con claridad: revela intuiciones poderosas pero también ilusiones, miedos mal definidos, una situación que todavía no está del todo clara. Nada de lo que sientes es falso, pero nada es del todo fiable tampoco; precisamente eso es lo que hace incómoda a esta carta.",
    reversedMeaning:
      "Invertida, la niebla por fin empieza a levantarse: una confusión se aclara, un miedo antiguo resulta menos fundado de lo que parecía, una verdad oculta resurge por sí sola.",
    love: "Una relación marcada por la duda o lo no dicho, donde tu intuición capta cosas que las palabras aún no dicen; escúchala, sin dramatizar en exceso.",
    travailArgent:
      "Una situación poco clara, información incompleta: desconfía de cualquier decisión tomada sobre una primera impresión.",
    conseil: "No tomes nada definitivo mientras la situación siga en la nebulosa. Aquí, el tiempo aclara lo que la prisa solo enredaría más.",
    symbolisme: "Entre dos torres, un perro y un lobo aúllan a la luna mientras un cangrejo de río sale del agua: los instintos suben desde las profundidades.",
  },
  {
    id: "maj-19",
    number: 19,
    name: "El Sol",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["éxito franco", "alegría sin rodeos", "claridad total", "vitalidad"],
    keywordsReversed: ["éxito retrasado", "optimismo excesivo", "necesidad de recargar"],
    uprightMeaning:
      "El Sol no deja lugar a la duda: es una de las cartas más favorables de todo el tarot, sin matices que buscar. Éxito, alegría franca, claridad total: lo que se vive ahora es verdadero, cálido, sin cálculo. Disfrútalo plenamente, esta carta no pide ninguna precaución particular.",
    reversedMeaning:
      "Invertido, nunca anuncia una desgracia, solo un brillo temporalmente velado: un éxito que tarda un poco, un cansancio que no hay que ignorar, un optimismo un poco demasiado confiado que conviene templar.",
    love: "Un período luminoso, una relación alegre y sincera, o excelentes noticias familiares.",
    travailArgent:
      "Un éxito merecido, un reconocimiento público, o un proyecto que culmina impulsado por una hermosa energía colectiva.",
    conseil: "Disfruta plenamente de este período favorable, y comparte esta energía en lugar de guardártela para ti solo.",
    symbolisme: "Un niño desnudo cabalga un caballo blanco bajo un gran sol radiante: la vitalidad pura, sin rodeos ni cálculo.",
  },
  {
    id: "maj-20",
    number: 20,
    name: "El Juicio",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["balance honesto", "llamado interior", "renacimiento", "decisión que marca el futuro"],
    keywordsReversed: ["autocrítica excesiva", "negarse a escuchar el llamado", "ocasión perdida"],
    uprightMeaning:
      "El Juicio suena como un llamado que se vuelve imposible de ignorar. Se impone un balance, una verdad interior despierta bruscamente, se perfila una decisión importante, y esta vez ya no puedes fingir que no la oyes. Es un renacimiento que siempre sigue a una toma de conciencia, nunca al revés.",
    reversedMeaning:
      "Invertido, la autocrítica se vuelve demasiado severa, o te niegas a escuchar lo que la situación exige con claridad: una ocasión de cambiar pasa sin ser aprovechada, por no haber escuchado a tiempo.",
    love: "Se impone un balance honesto de la relación, a veces con una decisión clara que tomar sobre su futuro; ya no hay zona gris posible.",
    travailArgent:
      "Una evaluación, una respuesta esperada desde hace tiempo, o la ocasión de cerrar de forma clara una etapa profesional ya terminada.",
    conseil: "Escucha el llamado interior que te empuja a cambiar, aunque llegue en un momento que no elegiste.",
    symbolisme: "Un ángel toca la trompeta y unas figuras se levantan de su tumba, los brazos abiertos: el llamado despierta lo que parecía dormido.",
  },
  {
    id: "maj-21",
    number: 21,
    name: "El Mundo",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["logro real", "culminación", "unidad", "éxito completo"],
    keywordsReversed: ["logro incompleto", "última etapa que se alarga", "sensación de algo inacabado"],
    uprightMeaning:
      "El Mundo cierra el ciclo de los arcanos mayores sin ambigüedad: es la culminación, el círculo que se cierra, un objetivo realmente alcanzado al final de un recorrido auténtico, no un premio de consolación. Esta carta anuncia un éxito completo, una rara sensación de unidad, y a menudo ya la llamada discreta de un ciclo siguiente, aún más amplio.",
    reversedMeaning:
      "Invertido, el logro está cerca sin estar del todo alcanzado: falta un último esfuerzo, un detalle por resolver, antes de poder pasar página de verdad.",
    love: "Una relación plenamente floreciente, o la feliz culminación de un recorrido personal que por fin te hace realmente disponible para el amor.",
    travailArgent:
      "El éxito de un proyecto llevado hasta el final, un reconocimiento merecido, la concreción de un objetivo perseguido desde hace tiempo.",
    conseil: "Saborea lo que has logrado antes de lanzarte, con la mente libre, hacia el siguiente ciclo.",
    symbolisme: "Una figura baila dentro de una corona vegetal, rodeada de las cuatro criaturas de los evangelistas: todas las fuerzas de la existencia reunidas en un solo movimiento.",
  },
];
