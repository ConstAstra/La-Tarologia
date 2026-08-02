import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { DrawnCardView } from "@/components/DrawnCardView";
import { drawRandomCards } from "@/data/cards";
import { useCards } from "@/data/i18n";
import { getComboForCards } from "@/data/combos";
import { DrawnCard } from "@/types/tarot";
import { colors, fonts, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { useT } from "@/i18n/useT";
import { useLocale } from "@/context/LocaleContext";
import { supabase } from "@/lib/supabase";
import { AiReadingBox } from "@/components/AiReadingBox";
import { JournalBox } from "@/components/JournalBox";
import { MeditationQuestionsBox } from "@/components/MeditationQuestionsBox";
import { getMeditationQuestions } from "@/lib/meditationQuestions";
import { recordDrawAndGetStreak, getStreak } from "@/lib/streak";
import { getMoonPhase, getMoonLabel, getMoonIonicon } from "@/lib/moonPhase";
import { Share } from "react-native";
import { IntentionBox } from "@/components/IntentionBox";

const STORAGE_KEY = "latarologia.dailyDraw";

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function AccueilScreen() {
  const { user } = useAuth();
  const { isPremium } = useSubscription();
  const t = useT();
  const { locale } = useLocale();
  const cards = useCards();
  const [drawIds, setDrawIds] = useState<{ id: string; reversed: boolean }[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [justDrawn, setJustDrawn] = useState(false);
  const [streak, setStreak] = useState(0);

  const loadOrCreateDraw = useCallback(async () => {
    setIsLoading(true);
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    const today = todayKey();

    if (raw) {
      const parsed = JSON.parse(raw) as { date: string; cardIds: string[]; reversed: boolean[] };
      if (parsed.date === today) {
        setJustDrawn(false);
        setDrawIds(parsed.cardIds.map((id, i) => ({ id, reversed: parsed.reversed[i] })));
        getStreak().then(setStreak);
        setIsLoading(false);
        return;
      }
    }

    const fresh = drawRandomCards(2).map((d) => ({ id: d.card.id, reversed: d.reversed }));
    setJustDrawn(true);
    setDrawIds(fresh);
    recordDrawAndGetStreak().then(setStreak);
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        date: today,
        cardIds: fresh.map((d) => d.id),
        reversed: fresh.map((d) => d.reversed),
      })
    );

    if (user) {
      await supabase.from("draws").insert({
        user_id: user.id,
        spread_id: "spread-deux-cartes",
        card_ids: fresh.map((d) => d.id),
        reversed: fresh.map((d) => d.reversed),
      });
    }

    setIsLoading(false);
  }, [user]);

  useEffect(() => {
    loadOrCreateDraw();
  }, [loadOrCreateDraw]);

  const draw = useMemo<DrawnCard[] | null>(() => {
    if (!drawIds) return null;
    const cardsById = new Map(cards.map((c) => [c.id, c]));
    return drawIds
      .map(({ id, reversed }) => {
        const card = cardsById.get(id);
        return card ? { card, reversed } : null;
      })
      .filter((d): d is DrawnCard => d !== null);
  }, [drawIds, cards]);

  const comboMatch =
    draw && draw.length === 2 ? getComboForCards(draw[0].card.id, draw[1].card.id) : undefined;

  const meditationQuestions = useMemo<string[]>(() => {
    if (!draw) return [];
    return getMeditationQuestions(draw, locale);
  }, [draw, locale]);

  const moonPhase = useMemo(() => getMoonPhase(), []);
  const moonLabel = getMoonLabel(moonPhase, locale);
  const moonIcon = getMoonIonicon(moonPhase) as React.ComponentProps<typeof Ionicons>["name"];

  const handleShare = useCallback(async () => {
    if (!draw) return;
    const date = new Date().toLocaleDateString(locale === "fr" ? "fr-FR" : locale === "es" ? "es-ES" : "en-GB");
    const lines = [
      t.share.drawTitle(date),
      "",
      ...draw.map((d) =>
        `${d.card.name}${d.reversed ? ` (${t.share.reversed})` : ""} — ${d.reversed ? d.card.reversedMeaning : d.card.uprightMeaning}`
      ),
      "",
      t.share.via,
    ];
    await Share.share({ message: lines.join("\n") });
  }, [draw, locale, t]);

  return (
    <Screen>
      <View style={styles.flourishRow}>
        <View style={styles.flourishLine} />
        <Ionicons name="sparkles" size={13} color={colors.gold} style={styles.flourishIcon} />
        <View style={styles.flourishLine} />
      </View>
      <Text style={styles.title}>La Tarologia</Text>
      <View style={styles.flourishRow}>
        <View style={styles.flourishLine} />
        <Ionicons name="sparkles" size={9} color={colors.goldSoft} style={styles.flourishIcon} />
        <View style={styles.flourishLine} />
      </View>
      <Text style={styles.subtitle}>{t.accueil.subtitle}</Text>

      <View style={styles.moonRow}>
        <Ionicons name={moonIcon} size={11} color={colors.textMuted} />
        <Text style={styles.moonText}>{moonLabel}</Text>
      </View>

      {streak > 1 && (
        <View style={styles.streakChip}>
          <Ionicons name="flame" size={13} color={colors.gold} />
          <Text style={styles.streakText}>{t.streak.label(streak)}</Text>
        </View>
      )}

      {isLoading || !draw ? (
        <Text style={styles.loading}>{t.accueil.loading}</Text>
      ) : (
        <>
          <IntentionBox />

          <View style={styles.cardsRow}>
            {draw.map((d, i) => (
              <DrawnCardView
                key={d.card.id}
                drawn={d}
                positionLabel={i === 0 ? t.accueil.influence : t.accueil.tendre}
                onPress={() => router.push(`/cartes/${d.card.id}`)}
                revealDelay={justDrawn ? 300 + i * 300 : undefined}
              />
            ))}
          </View>

          <View style={styles.interpretationBox}>
            <View style={styles.interpretationHeader}>
              <Text style={styles.interpretationTitle}>{t.accueil.lectureDuJour}</Text>
              <Pressable onPress={handleShare} hitSlop={10} style={styles.shareButton}>
                <Ionicons name="share-outline" size={18} color={colors.textMuted} />
              </Pressable>
            </View>
            {draw.map((d) => (
              <Text key={d.card.id} style={styles.interpretationText}>
                <Text style={styles.interpretationCardName}>
                  {d.card.name}
                  {d.reversed ? t.accueil.reversedSuffix : ""}
                </Text>
                {" — "}
                {d.reversed ? d.card.reversedMeaning : d.card.uprightMeaning}
              </Text>
            ))}
            {comboMatch && (
              <Pressable
                style={styles.comboBox}
                onPress={() => router.push(isPremium ? "/cartes/associations" : "/paywall")}
              >
                <View style={styles.comboHeader}>
                  <Ionicons name={isPremium ? "sparkles" : "lock-closed"} size={14} color={colors.gold} />
                  <Text style={styles.comboTitle}>
                    {t.accueil.comboPrefix}
                    {comboMatch.combo.title}
                  </Text>
                </View>
                <Text style={styles.comboText}>{comboMatch.combo.contexte}</Text>
                <Text style={styles.comboLink}>{isPremium ? t.accueil.comboUnlocked : t.accueil.comboLocked}</Text>
              </Pressable>
            )}
          </View>

          <AiReadingBox
            spreadName={t.accueil.lectureDuJour}
            cards={draw.map((d) => ({
              name: d.card.name,
              reversed: d.reversed,
              meaning: d.reversed ? d.card.reversedMeaning : d.card.uprightMeaning,
            }))}
          />

          {meditationQuestions.length > 0 && (
            <MeditationQuestionsBox questions={meditationQuestions} />
          )}

          <JournalBox journalKey={todayKey()} />

          <Text style={styles.hint}>{t.accueil.hint}</Text>
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  flourishRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: spacing.sm },
  flourishLine: { width: 42, height: 1, backgroundColor: colors.gold, opacity: 0.55 },
  flourishIcon: { marginHorizontal: 2 },
  title: {
    color: colors.gold,
    fontFamily: fonts.heading,
    fontSize: 34,
    letterSpacing: 1.5,
    textAlign: "center",
    marginTop: spacing.xs,
    textShadowColor: "rgba(217, 179, 108, 0.45)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 14,
  },
  subtitle: { color: colors.textMuted, fontSize: 14, textAlign: "center", marginTop: spacing.xs, marginBottom: spacing.lg, fontFamily: fonts.bodyItalic },
  loading: { color: colors.textMuted, textAlign: "center", marginTop: spacing.xl },
  cardsRow: { flexDirection: "row", justifyContent: "center", gap: spacing.lg, marginBottom: spacing.lg },
  interpretationBox: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.sm,
  },
  interpretationHeader: { flexDirection: "row", alignItems: "center", marginBottom: spacing.xs },
  shareButton: { padding: 4 },
  interpretationTitle: { color: colors.gold, fontFamily: fonts.heading, fontSize: 17, flex: 1 },
  interpretationText: { color: colors.text, lineHeight: 20 },
  interpretationCardName: { fontFamily: fonts.bodyBold, color: colors.primary },
  comboBox: { backgroundColor: colors.cardAlt, borderRadius: 12, padding: spacing.sm, marginTop: spacing.xs, gap: 4 },
  comboHeader: { flexDirection: "row", alignItems: "center", gap: 6 },
  comboTitle: { color: colors.gold, fontFamily: fonts.bodySemiBold, fontSize: 13 },
  comboText: { color: colors.text, lineHeight: 19, fontSize: 13, fontFamily: fonts.bodyItalic },
  comboLink: { color: colors.primary, fontSize: 12, fontFamily: fonts.bodySemiBold, marginTop: 2 },
  hint: { color: colors.textMuted, fontSize: 12, textAlign: "center", marginTop: spacing.lg },
  streakChip: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: colors.cardAlt,
    borderRadius: 20,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    marginBottom: spacing.sm,
  },
  streakText: { color: colors.gold, fontFamily: fonts.bodySemiBold, fontSize: 12 },
  moonRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: spacing.xs },
  moonText: { color: colors.textMuted, fontSize: 11, fontFamily: fonts.body },
});
