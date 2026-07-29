import { useMemo } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Locale } from "@/i18n/locales";
import { cards as cardsFr } from "@/data/cards";
import { spreads as spreadsFr } from "@/data/spreads";
import { articles as articlesFr } from "@/data/articles";
import { CardMeaning, Spread, Article } from "@/types/tarot";
import { majorsEn } from "./majors.en";
import { majorsEs } from "./majors.es";
import { spreadsEn } from "./spreads.en";
import { spreadsEs } from "./spreads.es";
import { articlesEn } from "./articles.en";
import { articlesEs } from "./articles.es";

// Seuls les majeurs, les tirages et les articles gratuits sont traduits pour le moment ;
// tout le reste (mineures, associations, articles premium) reste en français par défaut.
// mergeById ne remplace que les entrées traduites, le reste retombe sur le contenu français.
function mergeById<T extends { id: string }>(base: T[], overrides: T[]): T[] {
  const map = new Map(overrides.map((o) => [o.id, o]));
  return base.map((item) => map.get(item.id) ?? item);
}

function localizedCards(locale: Locale): CardMeaning[] {
  if (locale === "en") return mergeById(cardsFr, majorsEn);
  if (locale === "es") return mergeById(cardsFr, majorsEs);
  return cardsFr;
}

function localizedSpreads(locale: Locale): Spread[] {
  if (locale === "en") return mergeById(spreadsFr, spreadsEn);
  if (locale === "es") return mergeById(spreadsFr, spreadsEs);
  return spreadsFr;
}

function localizedArticles(locale: Locale): Article[] {
  if (locale === "en") return mergeById(articlesFr, articlesEn);
  if (locale === "es") return mergeById(articlesFr, articlesEs);
  return articlesFr;
}

export function useCards(): CardMeaning[] {
  const { locale } = useLocale();
  return useMemo(() => localizedCards(locale), [locale]);
}

export function useSpreads(): Spread[] {
  const { locale } = useLocale();
  return useMemo(() => localizedSpreads(locale), [locale]);
}

export function useArticles(): Article[] {
  const { locale } = useLocale();
  return useMemo(() => localizedArticles(locale), [locale]);
}
