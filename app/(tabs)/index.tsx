import React, { useCallback, useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { DrawnCardView } from "@/components/DrawnCardView";
import { cards, drawRandomCards } from "@/data/cards";
import { getComboForCards } from "@/data/combos";
import { DrawnCard } from "@/types/tarot";
import { colors, fonts, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "latarologia.dailyDraw";

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function AccueilScreen() {
  const { user } = useAuth();
  const { isPremium } = useSubscription();
  const [draw, setDraw] = useState<DrawnCard[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [justDrawn, setJustDrawn] = useState(false);

  const loadOrCreateDraw = useCallback(async () => {
    setIsLoading(true);
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    const today = todayKey();

    if (raw) {
      const parsed = JSON.parse(raw) as { date: string; cardIds: string[]; reversed: boolean[] };
      if (parsed.date === today) {
        const cardsById = new Map(cards.map((c) => [c.id, c]));
        const reconstructed: DrawnCard[] = parsed.cardIds
          .map((id, i) => {
            const card = cardsById.get(id);
            return card ? { card, reversed: parsed.reversed[i] } : null;
          })
          .filter((d): d is DrawnCard => d !== null);
        setJustDrawn(false);
        setDraw(reconstructed);
        setIsLoading(false);
        return;
      }
    }

    const fresh = drawRandomCards(2);
    setJustDrawn(true);
    setDraw(fresh);
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        date: today,
        cardIds: fresh.map((d) => d.card.id),
        reversed: fresh.map((d) => d.reversed),
      })
    );

    if (user) {
      await supabase.from("draws").insert({
        user_id: user.id,
        spread_id: "spread-deux-cartes",
        card_ids: fresh.map((d) => d.card.id),
        reversed: fresh.map((d) => d.reversed),
      });
    }

    setIsLoading(false);
  }, [user]);

  useEffect(() => {
    loadOrCreateDraw();
  }, [loadOrCreateDraw]);

  const comboMatch =
    draw && draw.length === 2 ? getComboForCards(draw[0].card.id, draw[1].card.id) : undefined;

  return (
    <Screen>
      <Text style={styles.title}>La Tarologia</Text>
      <Text style={styles.subtitle}>Votre tirage gratuit du jour</Text>

      {isLoading || !draw ? (
        <Text style={styles.loading}>Les cartes se mélangent…</Text>
      ) : (
        <>
          <View style={styles.cardsRow}>
            {draw.map((d, i) => (
              <DrawnCardView
                key={d.card.id}
                drawn={d}
                positionLabel={i === 0 ? "Ce qui vous influence" : "Ce à quoi tendre"}
                onPress={() => router.push(`/cartes/${d.card.id}`)}
                revealDelay={justDrawn ? 300 + i * 300 : undefined}
              />
            ))}
          </View>

          <View style={styles.interpretationBox}>
            <Text style={styles.interpretationTitle}>Lecture du jour</Text>
            {draw.map((d) => (
              <Text key={d.card.id} style={styles.interpretationText}>
                <Text style={styles.interpretationCardName}>{d.card.name}</Text>
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
                  <Text style={styles.comboTitle}>Association : {comboMatch.combo.title}</Text>
                </View>
                <Text style={styles.comboText}>{comboMatch.combo.contexte}</Text>
                <Text style={styles.comboLink}>
                  {isPremium ? "Voir l'analyse complète (amour, pro, guidance…)" : "Débloquer l'analyse complète avec Premium"}
                </Text>
              </Pressable>
            )}
          </View>

          <Text style={styles.hint}>Un nouveau tirage sera proposé demain. Explorez d'autres méthodes de tirage dans l'onglet Tirages.</Text>
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.gold, fontFamily: fonts.heading, fontSize: 30, textAlign: "center" },
  subtitle: { color: colors.textMuted, fontSize: 14, textAlign: "center", marginBottom: spacing.lg },
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
