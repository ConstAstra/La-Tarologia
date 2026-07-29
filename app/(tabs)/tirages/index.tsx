import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { PremiumBadge } from "@/components/PremiumBadge";
import { spreads } from "@/data/spreads";
import { colors, fonts, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";

const DIFFICULTY_LABELS: Record<string, string> = {
  debutant: "Débutant",
  intermediaire: "Intermédiaire",
  avance: "Avancé",
};

export default function TiragesIndex() {
  const { isPremium } = useSubscription();

  return (
    <Screen>
      <Text style={styles.intro}>
        Chaque situation appelle une méthode différente. Voici les tirages classiques, du plus simple au plus
        complet, avec le rôle de chaque position expliqué.
      </Text>

      {spreads.map((spread) => {
        const locked = !spread.isFree && !isPremium;
        return (
          <Pressable
            key={spread.id}
            style={styles.card}
            onPress={() => (locked ? router.push("/paywall") : router.push(`/tirages/${spread.id}`))}
          >
            <View style={styles.cardHeader}>
              <Ionicons name={locked ? "lock-closed" : "layers-outline"} size={18} color={locked ? colors.textMuted : colors.gold} />
              <Text style={styles.cardTitle}>{spread.name}</Text>
            </View>
            <Text style={styles.cardMeta}>
              {spread.cardCount} carte{spread.cardCount > 1 ? "s" : ""} · {DIFFICULTY_LABELS[spread.difficulty]}
            </Text>
            <Text style={styles.cardSummary}>{spread.shortDescription}</Text>
            {!spread.isFree && <PremiumBadge />}
          </Pressable>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 20 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.xs,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  cardTitle: { color: colors.text, fontFamily: fonts.heading, fontSize: 16, flex: 1 },
  cardMeta: { color: colors.primary, fontSize: 12 },
  cardSummary: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
});
