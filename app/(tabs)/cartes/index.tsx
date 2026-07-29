import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { CardListItem } from "@/components/CardListItem";
import { cards } from "@/data/cards";
import { colors, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";

type FilterKey = "tous" | "majeur" | "batons" | "coupes" | "epees" | "deniers";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "tous", label: "Toutes" },
  { key: "majeur", label: "Arcanes majeurs" },
  { key: "batons", label: "Bâtons" },
  { key: "coupes", label: "Coupes" },
  { key: "epees", label: "Épées" },
  { key: "deniers", label: "Deniers" },
];

export default function CartesIndex() {
  const { isPremium } = useSubscription();
  const [filter, setFilter] = useState<FilterKey>("tous");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return cards.filter((c) => {
      const matchesFilter =
        filter === "tous" ? true : filter === "majeur" ? c.arcana === "majeur" : c.suit === filter;
      const matchesQuery = query.trim().length === 0 || c.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <Screen scroll={false} style={styles.flex}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={16} color={colors.textMuted} />
          <TextInput
            placeholder="Rechercher une carte…"
            placeholderTextColor={colors.textMuted}
            value={query}
            onChangeText={setQuery}
            style={styles.searchInput}
          />
        </View>

        <Pressable style={styles.combosLink} onPress={() => router.push("/cartes/associations")}>
          <Ionicons name="git-network-outline" size={16} color={colors.gold} />
          <Text style={styles.combosLinkText}>Associations de cartes</Text>
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
  combosLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  combosLinkText: { color: colors.gold, fontSize: 13, fontWeight: "600" },
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
  filterChipTextActive: { color: colors.background, fontWeight: "700" },
  list: { paddingHorizontal: spacing.md, paddingBottom: spacing.xl },
});
