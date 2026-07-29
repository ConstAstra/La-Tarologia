import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Screen } from "@/components/Screen";
import { DrawnCardView } from "@/components/DrawnCardView";
import { cards, drawRandomCards } from "@/data/cards";
import { getComboForCards } from "@/data/combos";
import { DrawnCard } from "@/types/tarot";
import { colors, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "latarologia.dailyDraw";

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function AccueilScreen() {
  const { user } = useAuth();
  const [draw, setDraw] = useState<DrawnCard[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
        setDraw(reconstructed);
        setIsLoading(false);
        return;
      }
    }

    const fresh = drawRandomCards(2);
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

  const combo = draw && draw.length === 2 ? getComboForCards(draw[0].card.id, draw[1].card.id) : undefined;

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
            {combo && (
              <Text style={styles.comboText}>
                <Text style={styles.interpretationCardName}>Association : </Text>
                {combo.interpretation}
              </Text>
            )}
          </View>

          <Text style={styles.hint}>Un nouveau tirage sera proposé demain. Explorez d'autres méthodes de tirage dans l'onglet Tirages.</Text>
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.gold, fontSize: 28, fontWeight: "700", textAlign: "center" },
  subtitle: { color: colors.textMuted, fontSize: 14, textAlign: "center", marginBottom: spacing.lg },
  loading: { color: colors.textMuted, textAlign: "center", marginTop: spacing.xl },
  cardsRow: { flexDirection: "row", justifyContent: "center", gap: spacing.lg, marginBottom: spacing.lg },
  interpretationBox: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.sm,
  },
  interpretationTitle: { color: colors.gold, fontWeight: "700", fontSize: 16, marginBottom: spacing.xs },
  interpretationText: { color: colors.text, lineHeight: 20 },
  interpretationCardName: { fontWeight: "700", color: colors.primary },
  comboText: { color: colors.text, lineHeight: 20, marginTop: spacing.xs, fontStyle: "italic" },
  hint: { color: colors.textMuted, fontSize: 12, textAlign: "center", marginTop: spacing.lg },
});
