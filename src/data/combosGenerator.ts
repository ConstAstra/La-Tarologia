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

const CONTEXTE_TEMPLATES: ((a: CardMeaning, b: CardMeaning, kwA: string, kwB: string) => string)[] = [
  (a, b, kwA, kwB) =>
    `${a.name} imprime ici son énergie de ${kwA}, que ${b.name} vient éclairer sous l'angle de ${kwB} : les deux thèmes se répondent dans ce tirage.`,
  (a, b, kwA, kwB) =>
    `Cette association marie ${kwA}, porté par ${a.name}, et ${kwB}, apporté par ${b.name} — un mélange à lire comme un seul mouvement plutôt que deux messages séparés.`,
  (a, b, kwA, kwB) =>
    `${a.name} pose le décor avec ${kwA} ; ${b.name} vient ensuite le nuancer de ${kwB}, ce qui colore sensiblement la lecture d'ensemble.`,
  (a, b, kwA, kwB) =>
    `Entre ${a.name} et ${b.name}, c'est la rencontre de ${kwA} et de ${kwB} qui donne le ton de cette association.`,
  (a, b, kwA, kwB) =>
    `${a.name} et ${b.name} se répondent ici autour d'un même fil : ${kwA} d'un côté, ${kwB} de l'autre, deux facettes d'une même situation.`,
];

const GENERAL_CONNECTORS: ((a: CardMeaning, b: CardMeaning) => string)[] = [
  (a, b) =>
    `${firstSentence(a.uprightMeaning)} Associée à ${b.name}, cette énergie se trouve précisée : ${firstSentence(b.uprightMeaning).toLowerCase()}`,
  (a, b) =>
    `D'un côté, ${a.name} évoque ${a.keywordsUpright.slice(0, 2).join(" et ")}. De l'autre, ${b.name} apporte ${b.keywordsUpright.slice(0, 2).join(" et ")} — la combinaison des deux mérite d'être lue comme un tout cohérent plutôt que comme deux messages séparés.`,
  (a, b) =>
    `${a.name} donne le ton principal de cette lecture, tandis que ${b.name} vient en préciser le sens concret : ${firstSentence(b.uprightMeaning).toLowerCase()}`,
];

function buildAmour(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `Côté cœur, ${a.name} évoque ${a.love.charAt(0).toLowerCase()}${a.love.slice(1)} ${b.name} ajoute une nuance : ${b.love.charAt(0).toLowerCase()}${b.love.slice(1)}`,
    `En amour, l'énergie de ${a.name} (${a.keywordsUpright[0]}) se combine à celle de ${b.name} : ${b.love.charAt(0).toLowerCase()}${b.love.slice(1)}`,
    `Cette association parle d'une relation où ${a.keywordsUpright[0]} et ${b.keywordsUpright[0]} cohabitent, avec cette tonalité propre à ${b.name} : ${b.love.charAt(0).toLowerCase()}${b.love.slice(1)}`,
  ];
  return pick(templates, seed);
}

function buildTravail(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `Sur le plan professionnel, ${a.name} apporte ${a.keywordsUpright[0]}, tandis que ${b.name} précise : ${b.travailArgent.charAt(0).toLowerCase()}${b.travailArgent.slice(1)}`,
    `Dans le travail, cette combinaison mêle ${a.keywordsUpright[0]} et ${b.keywordsUpright[0]} — ${b.travailArgent.charAt(0).toLowerCase()}${b.travailArgent.slice(1)}`,
    `${a.travailArgent} Avec ${b.name} en complément, l'accent se déplace vers ${b.keywordsUpright[0]}.`,
  ];
  return pick(templates, seed);
}

function buildGuidance(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `${a.conseil} ${b.name} ajoute : ${b.conseil.charAt(0).toLowerCase()}${b.conseil.slice(1)}`,
    `Associez le conseil de ${a.name} (${a.conseil.charAt(0).toLowerCase()}${a.conseil.slice(1)}) à celui de ${b.name}, plus orienté vers ${b.keywordsUpright[0]}.`,
    `${b.conseil} Cela rejoint ce que suggère aussi ${a.name} de son côté.`,
  ];
  return pick(templates, seed);
}

function buildSentiments(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `Ce que ressent cette personne se rapproche de ce que décrit ${b.name} : ${b.love.charAt(0).toLowerCase()}${b.love.slice(1)} teinté d'une dimension de ${a.keywordsUpright[0]}, propre à ${a.name}.`,
    `Cette personne vit quelque chose de proche de ${b.keywordsUpright[0]} (${b.name}), coloré par une énergie de ${a.keywordsUpright[0]} qui vient de vous ou de la situation entre vous.`,
    `À travers ${b.name}, cette personne exprime surtout ${b.keywordsUpright[0]} ; l'influence de ${a.name} y ajoute une note de ${a.keywordsUpright[0]}.`,
  ];
  return pick(templates, seed);
}

function buildOrdreInverse(a: CardMeaning, b: CardMeaning, seed: number): string {
  const templates = [
    `Si ${b.name} sort en premier et ${a.name} ensuite, c'est ${b.keywordsUpright[0]} qui devient l'énergie dominante, nuancée cette fois par ${a.keywordsUpright[0]} plutôt que l'inverse.`,
    `En sens inverse (${b.name} puis ${a.name}), l'accent se déplace vers ${b.name} : ${firstSentence(b.uprightMeaning).toLowerCase()}`,
    `Si l'ordre de tirage s'inverse, ${b.name} prend le rôle de carte dominante, et ${a.name} devient celle qui vient en préciser le sens.`,
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
