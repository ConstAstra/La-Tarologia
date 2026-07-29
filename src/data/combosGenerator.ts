import { CardCombo, CardMeaning } from "@/types/tarot";

// Moteur de synthèse pour toute paire de cartes qui n'a pas d'association rédigée à la main
// (voir combos.ts et combos.majeurs.ts pour le contenu entièrement écrit). Il garantit qu'un
// tirage à deux cartes, quelle que soit la combinaison parmi les 3003 possibles du jeu complet,
// obtienne toujours une interprétation réelle plutôt qu'un vide.
//
// Le texte n'est pas inventé au hasard : il est construit à partir des champs déjà rédigés pour
// chaque carte individuellement (mots-clés, sens à l'endroit, amour, travail/argent, conseil).
// Le moteur choisit, de façon déterministe (toujours le même résultat pour la même paire), une
// formulation parmi plusieurs variantes afin d'éviter un rendu trop mécanique.

function hashPair(a: string, b: string): number {
  const s = `${a}|${b}`;
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pick<T>(items: T[], seed: number): T {
  return items[seed % items.length];
}

function firstSentence(text: string): string {
  const idx = text.indexOf(". ");
  return idx === -1 ? text : text.slice(0, idx + 1);
}

function low(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

// Élision : "de" devient "d'" devant une voyelle (ou un h muet) — indispensable ici
// puisque les mots-clés et noms de cartes interpolés commencent parfois par une voyelle
// ("élan", "indépendance", "As de Bâtons"...).
function de(word: string): string {
  return /^[aeiouyéèêàâîïôûhAEIOUYÉÈÊÀÂÎÏÔÛH]/.test(word) ? `d'${word}` : `de ${word}`;
}

const CONTEXTE_TEMPLATES: ((a: CardMeaning, b: CardMeaning, kwA: string, kwB: string) => string)[] = [
  (a, b, kwA, kwB) => `${a.name} imprime son énergie ${de(kwA)} ; ${b.name} vient la nuancer avec ${kwB}.`,
  (a, b, kwA, kwB) => `${a.name} et ${b.name} se répondent ici : ${kwA} d'un côté, ${kwB} de l'autre, deux facettes d'une même situation.`,
  (a, b, kwA, kwB) => `${a.name} pose ${kwA} en toile de fond, et ${b.name} y ajoute ${kwB} — les deux tirent dans le même sens.`,
  (a, b, kwA, kwB) => `Entre ${a.name} et ${b.name}, le tirage tient sur une tension féconde entre ${kwA} et ${kwB}.`,
  (a, b, kwA, kwB) => `${a.name} donne le ton avec ${kwA} ; ${b.name} le colore ensuite ${de(kwB)}.`,
  (a, b, kwA, kwB) => `Lisez ${a.name} et ${b.name} ensemble : ${kwA} rencontre ${kwB}, et c'est cette rencontre qui compte, pas chaque carte isolément.`,
  (a, b, kwA, kwB) => `${kwA} et ${kwB} : voilà les deux forces que ${a.name} et ${b.name} font jouer l'une avec l'autre dans ce tirage.`,
  (a, b, kwA, kwB) => `${a.name} amène ${kwA} sur la table ; ${b.name} y répond par ${kwB}, sans jamais l'effacer.`,
];

const GENERAL_CONNECTORS: ((a: CardMeaning, b: CardMeaning) => string)[] = [
  (a, b) => `${firstSentence(a.uprightMeaning)} Avec ${b.name} à ses côtés, cette énergie se précise : ${low(firstSentence(b.uprightMeaning))}`,
  (a, b) =>
    `D'un côté, ${a.name} porte ${a.keywordsUpright.slice(0, 2).join(" et ")}. De l'autre, ${b.name} apporte ${b.keywordsUpright.slice(0, 2).join(" et ")} : lisez les deux comme un seul mouvement.`,
  (a, b) => `${a.name} donne le fil principal de cette lecture ; ${b.name} vient en préciser le terrain concret : ${low(firstSentence(b.uprightMeaning))}`,
  (a, b) => `${firstSentence(b.uprightMeaning)} ${a.name} vient appuyer ce mouvement d'une note ${de(a.keywordsUpright[0])}.`,
  (a, b) => `Prises ensemble, ${a.name} et ${b.name} racontent une histoire à deux temps : d'abord ${a.keywordsUpright[0]}, puis ${b.keywordsUpright[0]} qui vient y répondre.`,
];

function buildAmour(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `Côté cœur, ${a.name} évoque ${low(a.love)} ${b.name} y ajoute une nuance : ${low(b.love)}`,
    `En amour, l'énergie ${de(a.name)} (${a.keywordsUpright[0]}) se combine à celle ${de(b.name)} : ${low(b.love)}`,
    `Cette association parle d'une relation où ${a.keywordsUpright[0]} et ${b.keywordsUpright[0]} cohabitent, avec cette tonalité propre à ${b.name} : ${low(b.love)}`,
    `${b.love} ${a.name} y mêle en plus une couleur ${de(a.keywordsUpright[0])}, pas à ignorer.`,
    `Sur le plan sentimental, ${a.name} pose ${a.keywordsUpright[0]} comme fond, et ${b.name} précise ce que ça donne concrètement : ${low(b.love)}`,
  ];
  return pick(templates, seed);
}

function buildTravail(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `Sur le plan professionnel, ${a.name} apporte ${a.keywordsUpright[0]}, tandis que ${b.name} précise : ${low(b.travailArgent)}`,
    `Dans le travail, cette combinaison mêle ${a.keywordsUpright[0]} et ${b.keywordsUpright[0]} — ${low(b.travailArgent)}`,
    `${a.travailArgent} Avec ${b.name} en complément, l'accent se déplace vers ${b.keywordsUpright[0]}.`,
    `${b.travailArgent} ${a.name} teinte ce mouvement d'une exigence ${de(a.keywordsUpright[0])}.`,
    `Côté travail et argent, ${a.name} et ${b.name} se partagent la scène : ${a.keywordsUpright[0]} d'abord, puis ${low(b.travailArgent)}`,
  ];
  return pick(templates, seed);
}

function buildGuidance(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `${a.conseil} ${b.name} ajoute : ${low(b.conseil)}`,
    `Associez le conseil ${de(a.name)} (${low(a.conseil)}) à celui ${de(b.name)}, plus orienté vers ${b.keywordsUpright[0]}.`,
    `${b.conseil} Cela rejoint ce que suggère aussi ${a.name} de son côté.`,
    `Ce tirage demande les deux à la fois : ${low(a.conseil)} et, dans le même mouvement, ${low(b.conseil)}`,
    `${a.name} vous pousse vers ${a.keywordsUpright[0]} ; ${b.name} rappelle qu'il faut aussi tenir compte ${de(b.keywordsUpright[0])} avant d'agir.`,
  ];
  return pick(templates, seed);
}

function buildSentiments(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `Ce que ressent cette personne se rapproche de ce que décrit ${b.name} : ${low(b.love)} teinté d'une dimension ${de(a.keywordsUpright[0])}, propre à ${a.name}.`,
    `Cette personne vit quelque chose de proche ${de(b.keywordsUpright[0])} (${b.name}), coloré par une énergie ${de(a.keywordsUpright[0])} qui vient de vous ou de la situation entre vous.`,
    `À travers ${b.name}, cette personne exprime surtout ${b.keywordsUpright[0]} ; l'influence ${de(a.name)} y ajoute une note ${de(a.keywordsUpright[0])}.`,
    `Chez l'autre, ${a.keywordsUpright[0]} domine dans un premier temps, avant de laisser place à quelque chose de plus proche ${de(b.keywordsUpright[0])}.`,
  ];
  return pick(templates, seed);
}

function buildOrdreInverse(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `Si ${b.name} sort en premier et ${a.name} ensuite, c'est ${b.keywordsUpright[0]} qui devient l'énergie dominante, nuancée cette fois par ${a.keywordsUpright[0]} plutôt que l'inverse.`,
    `En sens inverse (${b.name} puis ${a.name}), l'accent se déplace vers ${b.name} : ${low(firstSentence(b.uprightMeaning))}`,
    `Si l'ordre de tirage s'inverse, ${b.name} prend le rôle de carte dominante, et ${a.name} devient celle qui vient en préciser le sens.`,
    `Inversez l'ordre et le rapport de force change : ${b.keywordsUpright[0]} mène la lecture, ${a.keywordsUpright[0]} ne fait plus que l'accompagner.`,
  ];
  return pick(templates, seed);
}

export function generateCombo(cardA: CardMeaning, cardB: CardMeaning): CardCombo {
  const seed = hashPair(cardA.id, cardB.id);
  const kwA = cardA.keywordsUpright[seed % cardA.keywordsUpright.length];
  const kwB = cardB.keywordsUpright[(seed >> 3) % cardB.keywordsUpright.length];

  return {
    id: `combo-gen-${cardA.id}-${cardB.id}`,
    cardIds: [cardA.id, cardB.id],
    title: `${cardA.name} et ${cardB.name}`,
    isFree: false,
    contexte: pick(CONTEXTE_TEMPLATES, seed)(cardA, cardB, kwA, kwB),
    general: pick(GENERAL_CONNECTORS, seed >> 1)(cardA, cardB),
    amour: buildAmour(cardA, cardB, seed >> 2),
    travail: buildTravail(cardA, cardB, seed >> 4),
    guidance: buildGuidance(cardA, cardB, seed >> 5),
    sentimentsDeLAutre: buildSentiments(cardA, cardB, seed >> 6),
    siOrdreInverse: buildOrdreInverse(cardA, cardB, seed >> 7),
  };
}
