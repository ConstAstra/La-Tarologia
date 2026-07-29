import { Ionicons } from "@expo/vector-icons";
import { CardMeaning } from "@/types/tarot";

const SUIT_ICON: Record<string, keyof typeof Ionicons.glyphMap> = {
  majeur: "sparkles",
  batons: "flame",
  coupes: "wine",
  epees: "flash",
  deniers: "diamond",
};

export function iconForCard(card: CardMeaning): keyof typeof Ionicons.glyphMap {
  return SUIT_ICON[card.arcana === "majeur" ? "majeur" : card.suit ?? "majeur"];
}
