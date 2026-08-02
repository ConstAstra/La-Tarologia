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
import { supabase } from "@/lib/supabase";
import { AiReadingBox } from "@/components/AiReadingBox";

const STORAGE_KEY = "latarologia.dailyDraw";

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function AccueilScreen() {
  const { user } = useAuth();
  const { isPremium } = useSubscription();
  const t = useT();
  const cards = useCards();
  // On ne stocke que les identifiants et l'état renversé : les objets carte affichés sont
  // toujours recalculés depuis `cards` (localisé) au moment du rendu, pour qu'un changement
  // de langue mette à jour un tirage déjà affiché sans avoir besoin de le retirer.
  const [drawIds, setDrawIds] = useState<{ id: string; reversed: boolean }[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [justDrawn, setJustDrawn] = useState(false);

  const loadOrCreateDraw = useCallback(async () => {
    setIsLoading(true);
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    const today = todayKey();

    if (raw) {
      const parsed = JSON.parse(raw) as { date: string; cardIds: string[]; reversed: boolean[] };
      if (parsed.date === today) {
        setJustDrawn(false);
        setDrawIds(parsed.cardIds.map((id, i) => ({ id, reversed: parsed.reversed[i] })));
        setIsLoading(false);
        return;
      }
    }

    const fresh = drawRandomCards(2).map((d) => ({ id: d.card.id, reversed: d.reversed }));
    setJustDrawn(true);
    setDrawIds(fresh);
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

      {isLoading || !draw ? (
        <Text style={styles.loading}>{t.accueil.loading}</Text>
      ) : (
        <>
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
            <Text style={styles.interpretationTitle}>{t.accueil.lectureDuJour}</Text>
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
  interpretationTitle: { color: colors.gold, fontFamily: fonts.heading, fontSize: 17, marginBottom: spacing.xs },
  interpretationText: { color: colors.text, lineHeight: 20 },
  interpretationCardName: { fontFamily: fonts.bodyBold, color: colors.primary },
  comboBox: { backgroundColor: colors.cardAlt, borderRadius: 12, padding: spacing.sm, marginTop: spacing.xs, gap: 4 },
  comboHeader: { flexDirection: "row", alignItems: "center", gap: 6 },
  comboTitle: { color: colors.gold, fontFamily: fonts.bodySemiBold, fontSize: 13 },
  comboText: { color: colors.text, lineHeight: 19, fontSize: 13, fontFamily: fonts.bodyItalic },
  comboLink: { color: colors.primary, fontSize: 12, fontFamily: fonts.bodySemiBold, marginTop: 2 },
  hint: { color: colors.textMuted, fontSize: 12, textAlign: "center", marginTop: spacing.lg },
});
