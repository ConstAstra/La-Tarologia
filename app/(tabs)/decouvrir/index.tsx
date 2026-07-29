import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { PremiumBadge } from "@/components/PremiumBadge";
import { useArticles } from "@/data/i18n";
import { colors, fonts, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";
import { useT } from "@/i18n/useT";

export default function DecouvrirIndex() {
  const { isPremium } = useSubscription();
  const t = useT();
  const articles = useArticles();
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  const CATEGORY_LABELS: Record<string, string> = {
    histoire: t.decouvrir.categoryHistoire,
    styles: t.decouvrir.categoryStyles,
    pratique: t.decouvrir.categoryPratique,
  };

  return (
    <Screen>
      <Text style={styles.intro}>{t.decouvrir.intro}</Text>

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
  sectionTitle: { color: colors.primary, fontFamily: fonts.bodyBold, fontSize: 16, marginBottom: spacing.sm },
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.xs,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  cardTitle: { color: colors.text, fontFamily: fonts.heading, fontSize: 16, flex: 1 },
  cardSummary: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
});
