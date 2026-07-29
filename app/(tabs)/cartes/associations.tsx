import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Screen } from "@/components/Screen";
import { PremiumBadge } from "@/components/PremiumBadge";
import { combos } from "@/data/combos";
import { getCardById } from "@/data/cards";
import { colors, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";

export default function AssociationsScreen() {
  const { isPremium } = useSubscription();

  return (
    <Screen>
      <Text style={styles.intro}>
        Deux cartes qui se retrouvent dans un même tirage racontent souvent plus, ensemble, que la somme de leurs
        significations prises séparément. Voici quelques associations d'arcanes majeurs particulièrement parlantes.
      </Text>

      {combos.map((combo) => {
        const locked = !combo.isFree && !isPremium;
        const [cardA, cardB] = combo.cardIds.map(getCardById);
        return (
          <Pressable
            key={combo.id}
            style={styles.card}
            onPress={() => locked && router.push("/paywall")}
            disabled={!locked}
          >
            <Text style={styles.title}>{combo.title}</Text>
            <Text style={styles.subtitle}>
              {cardA?.name} + {cardB?.name}
            </Text>
            {locked ? (
              <>
                <Text style={styles.blurred} numberOfLines={2}>
                  {combo.interpretation}
                </Text>
                <PremiumBadge />
              </>
            ) : (
              <Text style={styles.text}>{combo.interpretation}</Text>
            )}
          </Pressable>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 20 },
  card: { backgroundColor: colors.card, borderRadius: 14, padding: spacing.md, marginBottom: spacing.sm, gap: spacing.xs },
  title: { color: colors.gold, fontWeight: "700", fontSize: 15 },
  subtitle: { color: colors.primary, fontSize: 12, marginBottom: spacing.xs },
  text: { color: colors.text, fontSize: 14, lineHeight: 20 },
  blurred: { color: colors.textMuted, fontSize: 14, lineHeight: 20, opacity: 0.6 },
});
