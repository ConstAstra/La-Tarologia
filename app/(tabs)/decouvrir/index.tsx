import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { PremiumBadge } from "@/components/PremiumBadge";
import { articles } from "@/data/articles";
import { colors, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";

const CATEGORY_LABELS: Record<string, string> = {
  histoire: "Histoire du tarot",
  styles: "Styles de tarot",
  pratique: "Pratique et lecture",
};

export default function DecouvrirIndex() {
  const { isPremium } = useSubscription();
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <Screen>
      <Text style={styles.intro}>
        De l'origine du tarot à la différence entre le tarot de Marseille et le Rider-Waite-Smith, en passant par
        quelques clés de lecture : de quoi mieux comprendre ce que vous pratiquez.
      </Text>

      {categories.map((category) => (
        <View key={category} style={styles.section}>
          <Text style={styles.sectionTitle}>{CATEGORY_LABELS[category]}</Text>
          {articles
            .filter((a) => a.category === category)
            .map((article) => {
              const locked = !article.isFree && !isPremium;
              return (
                <Pressable
                  key={article.id}
                  style={styles.card}
                  onPress={() =>
                    locked ? router.push("/paywall") : router.push(`/decouvrir/${article.id}`)
                  }
                >
                  <View style={styles.cardHeader}>
                    <Ionicons
                      name={locked ? "lock-closed" : "book-outline"}
                      size={18}
                      color={locked ? colors.textMuted : colors.gold}
                    />
                    <Text style={styles.cardTitle}>{article.title}</Text>
                  </View>
                  <Text style={styles.cardSummary}>{article.summary}</Text>
                  {!article.isFree && <PremiumBadge />}
                </Pressable>
              );
            })}
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 20 },
  section: { marginBottom: spacing.lg },
  sectionTitle: { color: colors.primary, fontWeight: "700", fontSize: 16, marginBottom: spacing.sm },
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.xs,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  cardTitle: { color: colors.text, fontWeight: "600", fontSize: 15, flex: 1 },
  cardSummary: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
});
