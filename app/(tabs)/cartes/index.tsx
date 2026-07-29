import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { AppTextInput as TextInput } from "@/components/AppTextInput";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { CardListItem } from "@/components/CardListItem";
import { useCards } from "@/data/i18n";
import { colors, fonts, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";
import { useT } from "@/i18n/useT";

type FilterKey = "tous" | "majeur" | "batons" | "coupes" | "epees" | "deniers";

export default function CartesIndex() {
  const { isPremium } = useSubscription();
  const t = useT();
  const cards = useCards();
  const [filter, setFilter] = useState<FilterKey>("tous");
  const [query, setQuery] = useState("");

  const FILTERS: { key: FilterKey; label: string }[] = [
    { key: "tous", label: t.cartes.filterAll },
    { key: "majeur", label: t.cartes.filterMajeurs },
    { key: "batons", label: t.cartes.filterBatons },
    { key: "coupes", label: t.cartes.filterCoupes },
    { key: "epees", label: t.cartes.filterEpees },
    { key: "deniers", label: t.cartes.filterDeniers },
  ];

  const filtered = useMemo(() => {
    return cards.filter((c) => {
      const matchesFilter =
        filter === "tous" ? true : filter === "majeur" ? c.arcana === "majeur" : c.suit === filter;
      const matchesQuery = query.trim().length === 0 || c.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [cards, filter, query]);

  return (
    <Screen scroll={false} style={styles.flex}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={16} color={colors.textMuted} />
          <TextInput
            placeholder={t.cartes.searchPlaceholder}
            placeholderTextColor={colors.textMuted}
            value={query}
            onChangeText={setQuery}
            style={styles.searchInput}
          />
        </View>

        <Pressable style={styles.combosBanner} onPress={() => router.push("/cartes/associations")}>
          <View style={styles.combosBannerIcon}>
            <Ionicons name="git-network-outline" size={20} color={colors.background} />
          </View>
          <View style={styles.combosBannerText}>
            <Text style={styles.combosBannerTitle}>{t.cartes.associationsTitle}</Text>
            <Text style={styles.combosBannerSubtitle}>{t.cartes.associationsSubtitle}</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.gold} />
        </Pressable>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
          {FILTERS.map((f) => (
            <Pressable
              key={f.key}
              style={[styles.filterChip, filter === f.key && styles.filterChipActive]}
              onPress={() => setFilter(f.key)}
            >
              <Text style={[styles.filterChipText, filter === f.key && styles.filterChipTextActive]}>{f.label}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {filtered.map((card) => (
          <CardListItem
            key={card.id}
            card={card}
            locked={!card.isFree && !isPremium}
            onPress={() =>
              !card.isFree && !isPremium ? router.push("/paywall") : router.push(`/cartes/${card.id}`)
            }
          />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: { paddingHorizontal: spacing.md, paddingTop: spacing.sm },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingHorizontal: spacing.sm,
    paddingVertical: 8,
    marginBottom: spacing.sm,
  },
  searchInput: { flex: 1, color: colors.text },
  combosBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.cardAlt,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.gold,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
  },
  combosBannerIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  combosBannerText: { flex: 1 },
  combosBannerTitle: { color: colors.gold, fontSize: 15, fontFamily: fonts.bodyBold },
  combosBannerSubtitle: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
  filters: { marginBottom: spacing.sm },
  filterChip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    marginRight: spacing.sm,
  },
  filterChipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  filterChipText: { color: colors.textMuted, fontSize: 12 },
  filterChipTextActive: { color: colors.background, fontFamily: fonts.bodyBold },
  list: { paddingHorizontal: spacing.md, paddingBottom: spacing.xl },
});
