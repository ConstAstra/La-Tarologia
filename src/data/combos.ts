import { CardCombo } from "@/types/tarot";

// Associations de cartes : quand deux arcanes majeurs tombent ensemble dans un tirage,
// leur rencontre raconte souvent plus que la somme de leurs sens pris séparément.
// Sélection de couples parmi les plus fréquents et les plus parlants à l'usage.
export const combos: CardCombo[] = [
  {
    id: "combo-fou-monde",
    cardIds: ["maj-00", "maj-21"],
    title: "Le Fou et Le Monde",
    interpretation:
      "Le tout début et l'aboutissement se retrouvent face à face. Cette association marque souvent la fin d'un cycle qui ouvre immédiatement sur un nouveau départ, sans temps mort : à peine une boucle bouclée qu'une autre s'amorce déjà, avec la même fraîcheur qu'au premier jour.",
    isFree: true,
  },
  {
    id: "combo-amoureux-diable",
    cardIds: ["maj-06", "maj-15"],
    title: "L'Amoureux et Le Diable",
    interpretation:
      "Une attirance forte, mais teintée d'ambiguïté : le désir est réel, sincère même, mais une part d'attachement ou de dépendance s'y mêle. Ce duo invite à distinguer ce qui relève du choix libre de ce qui relève du besoin de combler un manque.",
    isFree: true,
  },
  {
    id: "combo-mort-soleil",
    cardIds: ["maj-13", "maj-19"],
    title: "L'Arcane sans Nom et Le Soleil",
    interpretation:
      "Une fin nécessaire débouche directement sur une période radieuse. Ce n'est pas un hasard si ces deux cartes se suivent souvent dans les tirages de transformation : ce qui semblait une perte se révèle être la condition d'un bonheur plus sincère, presque immédiat.",
    isFree: true,
  },
  {
    id: "combo-tour-etoile",
    cardIds: ["maj-16", "maj-17"],
    title: "La Maison-Dieu et L'Étoile",
    interpretation:
      "L'effondrement suivi de l'apaisement : ce couple raconte une crise qui, aussi violente soit-elle, ouvre la voie à une guérison sincère. La chute n'était pas une punition mais un passage obligé vers une clarté nouvelle et un espoir plus solide qu'avant.",
    isFree: true,
  },
  {
    id: "combo-hermite-lune",
    cardIds: ["maj-09", "maj-18"],
    title: "L'Hermite et La Lune",
    interpretation:
      "Une introspection qui plonge dans une zone encore trouble : ce duo indique un travail intérieur sincère, mais mené dans l'incertitude, sans toutes les réponses. Il invite à accepter de chercher sa vérité à tâtons, sans exiger une clarté immédiate.",
    isFree: false,
  },
  {
    id: "combo-imperatrice-empereur",
    cardIds: ["maj-03", "maj-04"],
    title: "L'Impératrice et L'Empereur",
    interpretation:
      "La douceur créative et la structure ferme s'associent : ce couple annonce souvent un projet ou une relation qui allie sensibilité et solidité, où l'un nourrit ce que l'autre encadre. Un équilibre fertile entre le cœur et la charpente.",
    isFree: false,
  },
  {
    id: "combo-chariot-force",
    cardIds: ["maj-07", "maj-11"],
    title: "Le Chariot et La Force",
    interpretation:
      "Deux façons de vaincre un obstacle se rencontrent : la détermination frontale et la patience douce. Ensemble, elles suggèrent qu'une victoire durable demande autant de volonté que de maîtrise de soi, sans jamais céder à la brutalité.",
    isFree: false,
  },
  {
    id: "combo-pendu-jugement",
    cardIds: ["maj-12", "maj-20"],
    title: "Le Pendu et Le Jugement",
    interpretation:
      "Une longue attente trouve enfin son sens : ce qui semblait une pause stérile se révèle avoir préparé une prise de conscience décisive. Ce duo marque souvent le moment où un temps suspendu débouche sur un appel clair à agir autrement.",
    isFree: false,
  },
  {
    id: "combo-papesse-pape",
    cardIds: ["maj-02", "maj-05"],
    title: "La Prêtresse et Le Pape",
    interpretation:
      "Le savoir intérieur, silencieux, rencontre le savoir transmis, officiel. Cette association parle souvent d'un moment où l'intuition personnelle doit composer avec une autorité extérieure, un cadre ou une tradition, sans que l'un efface nécessairement l'autre.",
    isFree: false,
  },
  {
    id: "combo-diable-tour",
    cardIds: ["maj-15", "maj-16"],
    title: "Le Diable et La Maison-Dieu",
    interpretation:
      "Une dépendance ou un attachement toxique atteint son point de rupture. Ce duo, plus intense que la moyenne, annonce souvent une libération brutale d'une situation d'emprise : la chute fait mal, mais elle casse enfin des chaînes qui duraient depuis trop longtemps.",
    isFree: false,
  },
  {
    id: "combo-etoile-soleil",
    cardIds: ["maj-17", "maj-19"],
    title: "L'Étoile et Le Soleil",
    interpretation:
      "Deux cartes lumineuses réunies annoncent une période particulièrement favorable, entre espoir sincère et réussite éclatante. Rare et franc, ce duo indique que la confiance retrouvée est sur le point de se traduire en résultats concrets et visibles.",
    isFree: false,
  },
  {
    id: "combo-bateleur-magicien-roue",
    cardIds: ["maj-01", "maj-10"],
    title: "Le Bateleur et La Roue de Fortune",
    interpretation:
      "L'initiative personnelle rencontre le hasard du destin : ce couple suggère qu'une occasion favorable va se présenter, mais qu'elle ne portera ses fruits que si l'on a la présence d'esprit de s'en saisir activement, sans attendre qu'elle se répète.",
    isFree: false,
  },
  {
    id: "combo-justice-jugement",
    cardIds: ["maj-08", "maj-20"],
    title: "La Justice et Le Jugement",
    interpretation:
      "Un règlement de comptes honnête avec soi-même : ce duo annonce un bilan sans complaisance suivi d'une décision qui engage vraiment l'avenir. Les faits sont regardés en face, puis un choix clair et assumé en découle.",
    isFree: false,
  },
  {
    id: "combo-lune-soleil",
    cardIds: ["maj-18", "maj-19"],
    title: "La Lune et Le Soleil",
    interpretation:
      "Le doute et la clarté se succèdent dans un même tirage : ce qui restait flou ou anxiogène est en train de se résoudre nettement. Ce duo rassure sur le fait qu'une période confuse touche à sa fin, remplacée par une franchise bienvenue.",
    isFree: false,
  },
  {
    id: "combo-ermite-etoile",
    cardIds: ["maj-09", "maj-17"],
    title: "L'Hermite et L'Étoile",
    interpretation:
      "Le recul solitaire porte ses fruits : ce duo indique qu'une période d'introspection débouche sur une inspiration retrouvée et un espoir sincère. La lanterne de l'Hermite a fini par trouver l'étoile qui éclaire la suite du chemin.",
    isFree: false,
  },
  {
    id: "combo-force-diable",
    cardIds: ["maj-11", "maj-15"],
    title: "La Force et Le Diable",
    interpretation:
      "Le courage intérieur est directement confronté à une tentation ou une dépendance. Ce duo décrit souvent le moment précis où l'on choisit, avec effort mais lucidement, de ne pas se laisser dominer par une pulsion ou un attachement qui pesait fort.",
    isFree: false,
  },
  {
    id: "combo-chariot-tour",
    cardIds: ["maj-07", "maj-16"],
    title: "Le Chariot et La Maison-Dieu",
    interpretation:
      "Une avancée déterminée est stoppée net par un événement soudain. Ce duo prévient qu'une trajectoire trop rigide peut être bousculée par une remise en question imprévue : mieux vaut garder assez de souplesse pour encaisser le choc sans tout perdre.",
    isFree: false,
  },
  {
    id: "combo-amoureux-tempérance",
    cardIds: ["maj-06", "maj-14"],
    title: "L'Amoureux et Tempérance",
    interpretation:
      "Un choix affectif se stabilise dans la durée : après le moment de la décision vient celui de l'équilibre patient, où l'on ajuste au quotidien ce qui a été choisi sur un coup de cœur. Une belle association pour une relation qui mûrit sainement.",
    isFree: false,
  },
];

export function getComboForCards(cardIdA: string, cardIdB: string): CardCombo | undefined {
  return combos.find(
    (c) =>
      (c.cardIds[0] === cardIdA && c.cardIds[1] === cardIdB) ||
      (c.cardIds[0] === cardIdB && c.cardIds[1] === cardIdA)
  );
}
