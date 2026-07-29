export type Arcana = "majeur" | "mineur";

export type Suit = "batons" | "coupes" | "epees" | "deniers";

export interface CardMeaning {
  id: string;
  number: number | null;
  name: string;
  arcana: Arcana;
  suit: Suit | null;
  isFree: boolean;
  keywordsUpright: string[];
  keywordsReversed: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  love: string;
  travailArgent: string;
  conseil: string;
  symbolisme: string;
}

export interface CardCombo {
  id: string;
  // La première carte est celle dont l'énergie domine le tirage ; la seconde vient la clarifier ou la nuancer.
  cardIds: [string, string];
  title: string;
  isFree: boolean;
  contexte: string;
  general: string;
  amour: string;
  travail: string;
  guidance: string;
  sentimentsDeLAutre: string;
  siOrdreInverse: string;
}

export interface SpreadPosition {
  label: string;
  meaning: string;
}

export interface Spread {
  id: string;
  name: string;
  cardCount: number;
  difficulty: "debutant" | "intermediaire" | "avance";
  isFree: boolean;
  shortDescription: string;
  whenToUse: string;
  positions: SpreadPosition[];
}

export interface Article {
  id: string;
  category: "histoire" | "styles" | "pratique";
  title: string;
  isFree: boolean;
  summary: string;
  body: string[];
}

export interface DrawnCard {
  card: CardMeaning;
  reversed: boolean;
}
