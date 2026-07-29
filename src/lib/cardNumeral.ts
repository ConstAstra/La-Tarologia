import { CardMeaning } from "@/types/tarot";

const ROMAN = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];

// Petit numéro affiché en haut de la carte, comme sur un vrai jeu : chiffres romains
// pour les arcanes majeurs, chiffres arabes pour les mineures numérotées. Les figures
// (Valet, Cavalier, Reine, Roi) n'ont pas de numéro : leur nom suffit.
export function cardNumeral(card: CardMeaning): string | null {
  if (card.number === null) return null;
  if (card.arcana === "majeur") return ROMAN[card.number] ?? String(card.number);
  return String(card.number);
}
