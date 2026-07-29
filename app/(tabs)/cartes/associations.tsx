import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { PremiumBadge } from "@/components/PremiumBadge";
import { combos } from "@/data/combos";
import { getCardById } from "@/data/cards";
import { colors, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";

type CategoryKey = "general" | "amour" | "travail" | "guidance" | "sentimentsDeLAutre";

const CATEGORIES: { key: CategoryKey; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { key: "general", label: "Général", icon: "compass-outline" },
  { key: "amour", label: "Amour", icon: "heart-outline" },
  { key: "travail", label: "Pro", icon: "briefcase-outline" },
  { key: "guidance", label: "Guidance", icon: "flash-outline" },
  { key: "sentimentsDeLAutre", label: "Ses sentiments pour vous", icon: "eye-outline" },
];

export default function AssociationsScreen() {
  const { isPremium } = useSubscription();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("general");

  return (
    <Screen>
      <Text style={styles.intro}>
        Deux cartes qui se retrouvent dans un même tirage racontent plus, ensemble, que la somme de leurs
        significations prises séparément. La première carte porte l'énergie dominante du tirage ; la seconde vient
        la préciser ou la nuancer — si elles sortent dans l'ordre inverse, l'accent se déplace, comme expliqué à
        la fin de chaque association.
      </Text>

      {!isPremium && (
        <Pressable style={styles.paywallBanner} onPress={() => router.push("/paywall")}>
          <Ionicons name="lock-closed" size={16} color={colors.background} />
          <Text style={styles.paywallBannerText}>Débloquez toutes les associations avec Premium</Text>
        </Pressable>
      )}

      {combos.map((combo) => {
        const locked = !combo.isFree && !isPremium;
        const [cardA, cardB] = combo.cardIds.map(getCardById);
        const isExpanded = expandedId === combo.id;

        return (
          <View key={combo.id} style={styles.card}>
            <Pressable
              style={styles.cardHeader}
              onPress={() =>
                locked ? router.push("/paywall") : setExpandedId(isExpanded ? null : combo.id)
              }
            >
              <View style={styles.cardHeaderText}>
                <Text style={styles.title}>{combo.title}</Text>
                <Text style={styles.subtitle}>
                  {cardA?.name} → {cardB?.name}
                </Text>
              </View>
              {locked ? (
                <PremiumBadge />
              ) : (
                <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={18} color={colors.textMuted} />
              )}
            </Pressable>

            {locked && (
              <Text style={styles.blurred} numberOfLines={2}>
                {combo.contexte}
              </Text>
            )}

            {!locked && isExpanded && (
              <View style={styles.body}>
                <Text style={styles.contexte}>{combo.contexte}</Text>

                <View style={styles.tabs}>
                  {CATEGORIES.map((cat) => (
                    <Pressable
                      key={cat.key}
                      style={[styles.tab, activeCategory === cat.key && styles.tabActive]}
                      onPress={() => setActiveCategory(cat.key)}
                    >
                      <Ionicons
                        name={cat.icon}
                        size={13}
                        color={activeCategory === cat.key ? colors.background : colors.textMuted}
                      />
                      <Text style={[styles.tabText, activeCategory === cat.key && styles.tabTextActive]}>
                        {cat.label}
                      </Text>
                    </Pressable>
                  ))}
                </View>

                <Text style={styles.text}>{combo[activeCategory]}</Text>

                <View style={styles.orderNote}>
                  <Ionicons name="swap-vertical" size={14} color={colors.gold} />
                  <Text style={styles.orderNoteText}>{combo.siOrdreInverse}</Text>
                </View>
              </View>
            )}
          </View>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { color: colors.textMuted, marginBottom: spacing.md, lineHeight: 20 },
  paywallBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.gold,
    borderRadius: 12,
    padding: spacing.sm,
    marginBottom: spacing.lg,
  },
  paywallBannerText: { color: colors.background, fontWeight: "700", fontSize: 13 },
  card: { backgroundColor: colors.card, borderRadius: 14, padding: spacing.md, marginBottom: spacing.sm },
  cardHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: spacing.sm },
  cardHeaderText: { flex: 1 },
  title: { color: colors.gold, fontWeight: "700", fontSize: 15 },
  subtitle: { color: colors.primary, fontSize: 12, marginTop: 2 },
  blurred: { color: colors.textMuted, fontSize: 13, lineHeight: 19, opacity: 0.6, marginTop: spacing.sm },
  body: { marginTop: spacing.md, gap: spacing.sm },
  contexte: { color: colors.text, fontSize: 13, lineHeight: 19, fontStyle: "italic" },
  tabs: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tabActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  tabText: { color: colors.textMuted, fontSize: 11 },
  tabTextActive: { color: colors.background, fontWeight: "700" },
  text: { color: colors.text, fontSize: 14, lineHeight: 21 },
  orderNote: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
    backgroundColor: colors.cardAlt,
    borderRadius: 10,
    padding: spacing.sm,
  },
  orderNoteText: { color: colors.textMuted, fontSize: 12, lineHeight: 17, flex: 1 },
});
