import { Spread } from "@/types/tarot";

// Méthodes de tirage classiques, présentées avec des explications rédigées pour l'application.
export const spreads: Spread[] = [
  {
    id: "spread-carte-du-jour",
    name: "Une carte du jour",
    cardCount: 1,
    difficulty: "debutant",
    isFree: true,
    shortDescription: "Un tirage rapide pour donner une couleur, une intention ou un point d'attention à la journée.",
    whenToUse:
      "Idéal le matin, en quelques secondes, pour se donner un fil conducteur avant de commencer la journée, sans chercher à tout prédire.",
    positions: [
      { label: "La carte du jour", meaning: "L'énergie ou le point d'attention à garder en tête aujourd'hui." },
    ],
  },
  {
    id: "spread-deux-cartes",
    name: "Le tirage à deux cartes",
    cardCount: 2,
    difficulty: "debutant",
    isFree: true,
    shortDescription: "Deux cartes pour éclairer une situation sous un angle simple : ce qui joue pour vous, ce qui joue contre.",
    whenToUse:
      "Pratique pour une question binaire ou pour compléter le tirage du jour avec un peu plus de nuance sans complexifier la lecture.",
    positions: [
      { label: "Ce qui vous soutient", meaning: "La force ou l'appui disponible en ce moment." },
      { label: "Ce qui vous freine", meaning: "L'obstacle ou le point de vigilance à ne pas ignorer." },
    ],
  },
  {
    id: "spread-trois-cartes",
    name: "Le tirage à trois cartes",
    cardCount: 3,
    difficulty: "debutant",
    isFree: true,
    shortDescription: "Le classique passé / présent / avenir, ou toute autre lecture en trois temps.",
    whenToUse:
      "Le tirage le plus polyvalent du tarot : il s'adapte aussi bien à une question précise qu'à une vision d'ensemble d'une situation en cours.",
    positions: [
      { label: "Passé", meaning: "Ce qui a mené à la situation actuelle, les racines de ce qui se joue." },
      { label: "Présent", meaning: "L'énergie ou l'enjeu principal du moment présent." },
      { label: "Avenir proche", meaning: "La direction vers laquelle la situation semble évoluer si rien ne change." },
    ],
  },
  {
    id: "spread-situation-action-resultat",
    name: "Situation, action, résultat",
    cardCount: 3,
    difficulty: "debutant",
    isFree: true,
    shortDescription: "Une variante orientée décision : où j'en suis, quoi faire, ce que ça donnerait.",
    whenToUse:
      "Parfait quand une question appelle une décision concrète plutôt qu'une simple observation de la situation.",
    positions: [
      { label: "Situation", meaning: "Un état des lieux honnête de ce qui se joue actuellement." },
      { label: "Action conseillée", meaning: "Ce que la situation vous invite à faire ou à changer." },
      { label: "Résultat probable", meaning: "Ce vers quoi cette action semble mener, si elle est suivie." },
    ],
  },
  {
    id: "spread-croix",
    name: "Le tirage en croix",
    cardCount: 5,
    difficulty: "intermediaire",
    isFree: false,
    shortDescription: "Cinq cartes disposées en croix pour analyser une situation sous plusieurs angles complémentaires.",
    whenToUse:
      "Utile quand une question mérite d'être creusée sans aller jusqu'à la complexité de la croix celtique.",
    positions: [
      { label: "Le cœur de la situation", meaning: "L'enjeu central autour duquel tout s'organise." },
      { label: "Ce qui fait obstacle", meaning: "Le frein ou le défi principal à prendre en compte." },
      { label: "Ce qui aide", meaning: "La ressource ou le soutien sur lequel s'appuyer." },
      { label: "Origine", meaning: "D'où vient cette situation, ce qui l'a préparée." },
      { label: "Issue possible", meaning: "Vers quoi la situation tend si les tendances actuelles se poursuivent." },
    ],
  },
  {
    id: "spread-amour",
    name: "Le tirage de l'amour",
    cardCount: 5,
    difficulty: "intermediaire",
    isFree: false,
    shortDescription: "Une lecture centrée sur la dynamique affective, en couple ou en préparation à une rencontre.",
    whenToUse:
      "À utiliser pour une question de cœur, que la relation existe déjà ou reste encore à venir.",
    positions: [
      { label: "Vous", meaning: "Votre posture actuelle dans la relation ou face à l'amour en général." },
      { label: "L'autre", meaning: "La posture ou l'état d'esprit de la personne concernée." },
      { label: "La relation aujourd'hui", meaning: "La dynamique actuelle entre vous deux." },
      { label: "Ce qui doit être travaillé", meaning: "Le point d'attention principal à ne pas négliger." },
      { label: "Évolution probable", meaning: "Vers quoi la relation semble se diriger." },
    ],
  },
  {
    id: "spread-decision",
    name: "Le tirage décisionnel à deux voies",
    cardCount: 7,
    difficulty: "intermediaire",
    isFree: false,
    shortDescription: "Pour comparer deux options concrètes avant de trancher.",
    whenToUse: "Quand il faut choisir entre deux chemins clairement identifiés et qu'un éclairage supplémentaire aide à décider.",
    positions: [
      { label: "Vous, aujourd'hui", meaning: "Votre état d'esprit avant de choisir." },
      { label: "Option A", meaning: "Ce que représente le premier choix." },
      { label: "Conséquence de l'option A", meaning: "Où mène ce premier chemin." },
      { label: "Option B", meaning: "Ce que représente le second choix." },
      { label: "Conséquence de l'option B", meaning: "Où mène ce second chemin." },
      { label: "Ce que vous ne voyez pas encore", meaning: "Un facteur caché à prendre en compte avant de trancher." },
      { label: "Conseil final", meaning: "L'orientation générale à garder en tête pour ce choix." },
    ],
  },
  {
    id: "spread-annuel",
    name: "Le tirage de l'année",
    cardCount: 12,
    difficulty: "avance",
    isFree: false,
    shortDescription: "Une carte par mois pour dessiner les grandes tendances de l'année à venir.",
    whenToUse:
      "Traditionnellement tiré en début d'année ou à l'anniversaire, ce tirage donne une vision d'ensemble plutôt que des réponses précises.",
    positions: [
      { label: "Janvier", meaning: "Tendance générale du mois." },
      { label: "Février", meaning: "Tendance générale du mois." },
      { label: "Mars", meaning: "Tendance générale du mois." },
      { label: "Avril", meaning: "Tendance générale du mois." },
      { label: "Mai", meaning: "Tendance générale du mois." },
      { label: "Juin", meaning: "Tendance générale du mois." },
      { label: "Juillet", meaning: "Tendance générale du mois." },
      { label: "Août", meaning: "Tendance générale du mois." },
      { label: "Septembre", meaning: "Tendance générale du mois." },
      { label: "Octobre", meaning: "Tendance générale du mois." },
      { label: "Novembre", meaning: "Tendance générale du mois." },
      { label: "Décembre", meaning: "Tendance générale du mois." },
    ],
  },
  {
    id: "spread-croix-celtique",
    name: "La croix celtique",
    cardCount: 10,
    difficulty: "avance",
    isFree: false,
    shortDescription: "Le tirage de référence pour une analyse complète et détaillée d'une situation complexe.",
    whenToUse:
      "Réservé aux questions qui méritent une lecture approfondie : un carrefour de vie, une situation à plusieurs enjeux imbriqués.",
    positions: [
      { label: "Le cœur de la situation", meaning: "L'enjeu central, tel qu'il se présente maintenant." },
      { label: "L'obstacle ou le défi", meaning: "Ce qui traverse ou complique directement la situation." },
      { label: "Fondation", meaning: "La base sur laquelle la situation s'est construite, souvent inconsciente." },
      { label: "Passé récent", meaning: "Un événement récent qui a influencé la situation actuelle." },
      { label: "Objectif conscient", meaning: "Ce vers quoi vous tendez consciemment." },
      { label: "Futur proche", meaning: "Ce qui s'annonce dans les semaines à venir." },
      { label: "Vous-même", meaning: "Votre posture intérieure face à la situation." },
      { label: "Entourage", meaning: "L'influence de votre environnement sur la situation." },
      { label: "Espoirs et craintes", meaning: "Ce que vous espérez ou redoutez, parfois les deux à la fois." },
      { label: "Issue finale", meaning: "La tendance de fond vers laquelle tout semble converger." },
    ],
  },
];

export function getSpreadById(id: string): Spread | undefined {
  return spreads.find((s) => s.id === id);
}
