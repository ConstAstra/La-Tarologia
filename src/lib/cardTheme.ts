import { CardMeaning } from "@/types/tarot";
import { colors } from "@/theme/colors";

export interface CardTheme {
  gradient: [string, string, string];
  accent: string;
  accentSoft: string;
}

const THEMES: Record<string, CardTheme> = {
  majeur: {
    gradient: ["#1C0A14", "#3B1621", "#7A2E45"],
    accent: colors.gold,
    accentSoft: colors.goldSoft,
  },
  batons: {
    gradient: ["#1C0A14", "#321008", "#602010"],
    accent: "#D97B3A",
    accentSoft: "#EDAC74",
  },
  coupes: {
    gradient: ["#1C0A14", "#141032", "#0F2042"],
    accent: "#4EB8C8",
    accentSoft: "#8BD4DF",
  },
  epees: {
    gradient: ["#1C0A14", "#141032", "#202052"],
    accent: "#9BAED4",
    accentSoft: "#C2CFEA",
  },
  deniers: {
    gradient: ["#1C0A14", "#121C12", "#182A18"],
    accent: "#7DC47E",
    accentSoft: "#AFDDAF",
  },
};

export function getCardTheme(card: CardMeaning): CardTheme {
  return THEMES[card.arcana === "majeur" ? "majeur" : (card.suit ?? "majeur")];
}
