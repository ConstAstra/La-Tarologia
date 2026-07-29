import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router, useLocalSearchParams, useNavigation, useRootNavigationState } from "expo-router";
import { Screen } from "@/components/Screen";
import { DrawnCardView } from "@/components/DrawnCardView";
import { getSpreadById } from "@/data/spreads";
import { drawRandomCards } from "@/data/cards";
import { DrawnCard } from "@/types/tarot";
import { colors, fonts, spacing } from "@/theme/colors";
import { playCardShuffle } from "@/lib/sound";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { supabase } from "@/lib/supabase";

export default function SpreadDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const navigationState = useRootNavigationState();
  const { user } = useAuth();
  const { isPremium } = useSubscription();
  const spread = getSpreadById(id);
  const [draw, setDraw] = useState<DrawnCard[] | null>(null);
  const [drawNonce, setDrawNonce] = useState(0);

  useEffect(() => {
    if (spread) navigation.setOptions({ title: spread.name });
  }, [spread, navigation]);

  useEffect(() => {
    if (navigationState?.key && spread && !spread.isFree && !isPremium) {
      router.replace("/paywall");
    }
  }, [navigationState?.key, spread, isPremium]);

  if (!spread) {
    return (
      <Screen>
        <Text style={styles.paragraph}>Ce tirage est introuvable.</Text>
      </Screen>
    );
  }

  if (!spread.isFree && !isPremium) {
    return null;
  }

  const handleDraw = async () => {
    playCardShuffle();
    const fresh = drawRandomCards(spread.cardCount);
    setDraw(fresh);
    setDrawNonce((n) => n + 1);
    if (user) {
      await supabase.from("draws").insert({
        user_id: user.id,
        spread_id: spread.id,
        card_ids: fresh.map((d) => d.card.id),
        reversed: fresh.map((d) => d.reversed),
      });
    }
  };

  return (
    <Screen>
      <Text style={styles.description}>{spread.shortDescription}</Text>
      <Text style={styles.paragraph}>{spread.whenToUse}</Text>

      <Pressable style={styles.drawButton} onPress={handleDraw}>
        <Text style={styles.drawButtonText}>{draw ? "Retirer les cartes" : "Tirer les cartes"}</Text>
      </Pressable>

      {draw ? (
        <View style={styles.results}>
          {draw.map((d, i) => (
            <View key={`${drawNonce}-${i}-${d.card.id}`} style={styles.resultRow}>
              <DrawnCardView
                drawn={d}
                positionLabel={spread.positions[i]?.label}
                onPress={() => router.push(`/cartes/${d.card.id}`)}
                revealDelay={300 + i * 300}
              />
              <View style={styles.resultText}>
                <Text style={styles.positionMeaning}>{spread.positions[i]?.meaning}</Text>
                <Text style={styles.cardMeaning}>
                  {d.reversed ? d.card.reversedMeaning : d.card.uprightMeaning}
                </Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.positions}>
          <Text style={styles.positionsTitle}>Positions du tirage</Text>
          {spread.positions.map((p, i) => (
            <Text key={i} style={styles.positionItem}>
              {i + 1}. {p.label} — {p.meaning}
            </Text>
          ))}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  description: { color: colors.text, fontSize: 15, marginBottom: spacing.sm, lineHeight: 21 },
  paragraph: { color: colors.textMuted, fontSize: 13, marginBottom: spacing.lg, lineHeight: 19 },
  drawButton: {
    backgroundColor: colors.gold,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  drawButtonText: { color: colors.background, fontFamily: fonts.bodyBold, fontSize: 15 },
  positions: { backgroundColor: colors.card, borderRadius: 14, padding: spacing.md },
  positionsTitle: { color: colors.primary, fontFamily: fonts.bodyBold, marginBottom: spacing.sm },
  positionItem: { color: colors.textMuted, fontSize: 13, marginBottom: spacing.xs, lineHeight: 18 },
  results: { gap: spacing.md },
  resultRow: { flexDirection: "row", gap: spacing.md, backgroundColor: colors.card, borderRadius: 14, padding: spacing.md },
  resultText: { flex: 1, gap: spacing.xs },
  positionMeaning: { color: colors.primary, fontSize: 12, fontFamily: fonts.bodyBold },
  cardMeaning: { color: colors.text, fontSize: 13, lineHeight: 19 },
});
