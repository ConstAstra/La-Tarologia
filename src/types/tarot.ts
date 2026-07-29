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
  cardIds: [string, string];
  title: string;
  interpretation: string;
  isFree: boolean;
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
