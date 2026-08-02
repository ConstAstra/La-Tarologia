import { CardMeaning } from "@/types/tarot";
import { colors } from "@/theme/colors";

export interface CardTheme {
  gradient: [string, string, string];
  accent: string;
  accentSoft: string;
}

const THEMES: Record<string, CardTheme> = {
  majeur: {
    gradient: ["#2E1B4E", "#3B1621", "#7A2E45"],
    accent: colors.gold,
    accentSoft: colors.goldSoft,
  },
  batons: {
    gradient: ["#3D1200", "#5C2008", "#7A2E15"],
    accent: "#D97B3A",
    accentSoft: "#EDAC74",
  },
  coupes: {
    gradient: ["#001828", "#0B2540", "#1A3F60"],
    accent: "#4EB8C8",
    accentSoft: "#8BD4DF",
  },
  epees: {
    gradient: ["#0F0F2E", "#1C1C48", "#2D2D60"],
    accent: "#9BAED4",
    accentSoft: "#C2CFEA",
  },
  deniers: {
    gradient: ["#0A1F0A", "#152B10", "#1E3A18"],
    accent: "#7DC47E",
    accentSoft: "#AFDDAF",
  },
};

export function getCardTheme(card: CardMeaning): CardTheme {
  return THEMES[card.arcana === "majeur" ? "majeur" : (card.suit ?? "majeur")];
}
