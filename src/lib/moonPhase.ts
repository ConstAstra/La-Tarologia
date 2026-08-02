import { Locale } from "@/i18n/locales";

export type MoonPhase =
  | "new"
  | "waxing-crescent"
  | "first-quarter"
  | "waxing-gibbous"
  | "full"
  | "waning-gibbous"
  | "last-quarter"
  | "waning-crescent";

const SYNODIC = 29.53059;
const REF_NEW_MOON = new Date("2000-01-06T18:14:00Z").getTime();

export function getMoonPhase(): MoonPhase {
  const elapsed = (Date.now() - REF_NEW_MOON) / 86_400_000;
  const age = ((elapsed % SYNODIC) + SYNODIC) % SYNODIC;
  const pct = age / SYNODIC;

  if (pct < 0.033 || pct >= 0.967) return "new";
  if (pct < 0.25) return "waxing-crescent";
  if (pct < 0.283) return "first-quarter";
  if (pct < 0.467) return "waxing-gibbous";
  if (pct < 0.533) return "full";
  if (pct < 0.717) return "waning-gibbous";
  if (pct < 0.750) return "last-quarter";
  return "waning-crescent";
}

const LABELS: Record<Locale, Record<MoonPhase, string>> = {
  fr: {
    new: "Nouvelle Lune",
    "waxing-crescent": "Premier croissant",
    "first-quarter": "Premier Quartier",
    "waxing-gibbous": "Gibbeuse croissante",
    full: "Pleine Lune",
    "waning-gibbous": "Gibbeuse décroissante",
    "last-quarter": "Dernier Quartier",
    "waning-crescent": "Dernier croissant",
  },
  en: {
    new: "New Moon",
    "waxing-crescent": "Waxing Crescent",
    "first-quarter": "First Quarter",
    "waxing-gibbous": "Waxing Gibbous",
    full: "Full Moon",
    "waning-gibbous": "Waning Gibbous",
    "last-quarter": "Last Quarter",
    "waning-crescent": "Waning Crescent",
  },
  es: {
    new: "Luna Nueva",
    "waxing-crescent": "Cuarto creciente",
    "first-quarter": "Cuarto Creciente",
    "waxing-gibbous": "Gibosa creciente",
    full: "Luna Llena",
    "waning-gibbous": "Gibosa menguante",
    "last-quarter": "Cuarto Menguante",
    "waning-crescent": "Cuarto menguante",
  },
};

export function getMoonLabel(phase: MoonPhase, locale: Locale): string {
  return (LABELS[locale] ?? LABELS.fr)[phase];
}

export function getMoonIonicon(phase: MoonPhase): string {
  if (phase === "new") return "ellipse-outline";
  if (phase === "full") return "ellipse";
  if (phase === "waxing-crescent" || phase === "first-quarter" || phase === "waxing-gibbous") return "moon";
  return "moon-outline";
}
