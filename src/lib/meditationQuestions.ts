import { Locale } from "@/i18n/locales";

type Category = "major" | "batons" | "coupes" | "epees" | "deniers";

function getCategory(cardId: string): Category {
  if (cardId.startsWith("maj-")) return "major";
  if (cardId.startsWith("bat-")) return "batons";
  if (cardId.startsWith("cou-")) return "coupes";
  if (cardId.startsWith("epe-")) return "epees";
  return "deniers";
}

const QUESTIONS: Record<Locale, Record<Category | "reversed", string[]>> = {
  fr: {
    major: [
      "Quelle transformation refusez-vous d'accueillir en ce moment ?",
      "Si vous écoutiez pleinement ce que cette énergie vous dit, que changeriez-vous ?",
      "Quelle leçon de vie se répète dans votre quotidien ces derniers temps ?",
      "Qu'est-ce que cette carte révèle que vous saviez déjà, sans l'avoir encore formulé ?",
      "Qu'est-ce qui vous empêche d'avancer sur votre chemin le plus profond ?",
    ],
    batons: [
      "Quelle initiative avez-vous repoussée trop longtemps ?",
      "Où brûle votre énergie en ce moment, et est-ce là où vous voulez qu'elle aille ?",
      "Qu'est-ce qui vous passionne vraiment, et quelle place cela occupe-t-il dans votre vie ?",
      "Quelle action feriez-vous si vous n'aviez pas peur d'échouer ?",
      "Où avez-vous besoin de courage, non pas pour agir, mais pour vous arrêter ?",
    ],
    coupes: [
      "Quelle émotion évitez-vous en ce moment ?",
      "Qu'attendez-vous vraiment des autres dans votre vie affective ?",
      "Où avez-vous besoin de plus de douceur envers vous-même ?",
      "Quelle relation mérite plus d'honnêteté de votre part ?",
      "Qu'est-ce qui vous nourrit vraiment, et en recevez-vous suffisamment ?",
    ],
    epees: [
      "Quelle pensée tourne en boucle sans résolution ?",
      "Quelle vérité évitez-vous de formuler clairement ?",
      "Quelle décision repoussez-vous par peur de ce qu'elle implique ?",
      "Où votre mental travaille-t-il contre vous plutôt que pour vous ?",
      "Qu'est-ce que vous savez avec certitude, mais refusez encore d'accepter ?",
    ],
    deniers: [
      "Qu'est-ce qui mérite plus d'attention concrète dans votre vie ?",
      "Où avez-vous besoin de stabilité, et qu'est-ce qui vous en empêche ?",
      "Quel projet concret a besoin d'un pas de plus de votre part ?",
      "Comment prenez-vous soin de votre corps et de votre énergie ces derniers temps ?",
      "Qu'est-ce que vous négligez dans votre quotidien au profit de l'abstrait ?",
    ],
    reversed: [
      "Qu'est-ce que vous résistez à voir ou à accepter en ce moment ?",
      "Quelle partie de vous n'est pas encore prête à lâcher prise ?",
      "Qu'est-ce qui se bloque en vous, et depuis combien de temps ?",
    ],
  },
  en: {
    major: [
      "What transformation are you refusing to welcome right now?",
      "If you fully listened to what this energy is telling you, what would you change?",
      "What life lesson keeps repeating itself in your daily life lately?",
      "What does this card reveal that you already knew, without having said it yet?",
      "What is stopping you from moving forward on your deepest path?",
    ],
    batons: [
      "What initiative have you been putting off for too long?",
      "Where is your energy burning right now, and is that where you want it to go?",
      "What truly excites you, and how much room does it have in your life?",
      "What would you do if you weren't afraid to fail?",
      "Where do you need courage — not to act, but to stop?",
    ],
    coupes: [
      "What emotion are you avoiding right now?",
      "What do you really expect from others in your emotional life?",
      "Where do you need more gentleness toward yourself?",
      "Which relationship deserves more honesty from you?",
      "What truly nourishes you, and are you getting enough of it?",
    ],
    epees: [
      "What thought keeps looping without resolution?",
      "What truth are you avoiding stating clearly?",
      "What decision are you putting off out of fear of what it implies?",
      "Where is your mind working against you rather than for you?",
      "What do you know with certainty, but still refuse to accept?",
    ],
    deniers: [
      "What deserves more concrete attention in your life right now?",
      "Where do you need more stability, and what's stopping you?",
      "What concrete project needs one more step from you?",
      "How have you been taking care of your body and energy lately?",
      "What are you neglecting in your daily life in favor of more abstract concerns?",
    ],
    reversed: [
      "What are you resisting seeing or accepting right now?",
      "Which part of you isn't ready to let go yet?",
      "What is blocking inside you, and for how long?",
    ],
  },
  es: {
    major: [
      "¿Qué transformación te niegas a acoger en este momento?",
      "Si escucharas plenamente lo que esta energía te dice, ¿qué cambiarías?",
      "¿Qué lección de vida se repite en tu cotidiano últimamente?",
      "¿Qué revela esta carta que ya sabías, sin haberlo formulado aún?",
      "¿Qué te impide avanzar en tu camino más profundo?",
    ],
    batons: [
      "¿Qué iniciativa llevas demasiado tiempo postergando?",
      "¿Dónde arde tu energía ahora mismo, y es eso donde quieres que vaya?",
      "¿Qué te apasiona de verdad, y cuánto espacio ocupa en tu vida?",
      "¿Qué harías si no tuvieras miedo de fracasar?",
      "¿Dónde necesitas coraje, no para actuar, sino para detenerte?",
    ],
    coupes: [
      "¿Qué emoción estás evitando en este momento?",
      "¿Qué esperas realmente de los demás en tu vida afectiva?",
      "¿Dónde necesitas más delicadeza contigo mismo/a?",
      "¿Qué relación merece más honestidad de tu parte?",
      "¿Qué te nutre de verdad, y recibes suficiente de ello?",
    ],
    epees: [
      "¿Qué pensamiento da vueltas sin resolución?",
      "¿Qué verdad evitas formular con claridad?",
      "¿Qué decisión postpones por miedo a lo que implica?",
      "¿Dónde tu mente trabaja en tu contra en lugar de a tu favor?",
      "¿Qué sabes con certeza pero aún te niegas a aceptar?",
    ],
    deniers: [
      "¿Qué merece más atención concreta en tu vida ahora mismo?",
      "¿Dónde necesitas más estabilidad, y qué te lo impide?",
      "¿Qué proyecto concreto necesita un paso más de tu parte?",
      "¿Cómo has cuidado tu cuerpo y tu energía últimamente?",
      "¿Qué descuidas en tu cotidiano a favor de preocupaciones más abstractas?",
    ],
    reversed: [
      "¿Qué te resistes a ver o a aceptar en este momento?",
      "¿Qué parte de ti no está lista aún para soltar?",
      "¿Qué se bloquea en ti, y desde cuándo?",
    ],
  },
};

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getMeditationQuestions(
  drawn: { card: { id: string }; reversed: boolean }[],
  locale: Locale
): string[] {
  const pool = QUESTIONS[locale] ?? QUESTIONS.fr;
  const questions: string[] = [];
  const usedCats = new Set<string>();

  for (const d of drawn) {
    const cat = getCategory(d.card.id);
    if (!usedCats.has(cat)) {
      questions.push(pick(pool[cat]));
      usedCats.add(cat);
    }
    if (questions.length >= 2) break;
  }

  if (questions.length < 2) {
    questions.push(pick(pool.major));
  }

  const hasReversed = drawn.some((d) => d.reversed);
  if (hasReversed) {
    questions.push(pick(pool.reversed));
  }

  return questions.slice(0, 3);
}
