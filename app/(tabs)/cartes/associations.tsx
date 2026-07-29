import React, { useMemo, useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { PremiumBadge } from "@/components/PremiumBadge";
import { combos } from "@/data/combos";
import { getCardById } from "@/data/cards";
import { CardCombo } from "@/types/tarot";
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

type ScopeKey = "toutes" | "majeurs" | "mixtes" | "mineurs";

const SCOPES: { key: ScopeKey; label: string }[] = [
  { key: "toutes", label: `Toutes (${combos.length})` },
  { key: "majeurs", label: "Majeurs entre eux" },
  { key: "mixtes", label: "Majeurs + mineurs" },
  { key: "mineurs", label: "Mineurs entre eux" },
];

export default function AssociationsScreen() {
  const { isPremium } = useSubscription();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("general");
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<ScopeKey>("toutes");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return combos.filter((combo) => {
      const [cardA, cardB] = combo.cardIds.map(getCardById);
      const bothMajeurs = cardA?.arcana === "majeur" && cardB?.arcana === "majeur";
      const bothMineurs = cardA?.arcana === "mineur" && cardB?.arcana === "mineur";
      const matchesScope =
        scope === "toutes" ||
        (scope === "majeurs" && bothMajeurs) ||
        (scope === "mineurs" && bothMineurs) ||
        (scope === "mixtes" && !bothMajeurs && !bothMineurs);
      const matchesQuery =
        q.length === 0 ||
        combo.title.toLowerCase().includes(q) ||
        cardA?.name.toLowerCase().includes(q) ||
        cardB?.name.toLowerCase().includes(q);
      return matchesScope && matchesQuery;
    });
  }, [query, scope]);

  const renderItem = ({ item: combo }: { item: CardCombo }) => {
    const locked = !combo.isFree && !isPremium;
    const [cardA, cardB] = combo.cardIds.map(getCardById);
    const isExpanded = expandedId === combo.id;

    return (
      <View style={styles.card}>
        <Pressable
          style={styles.cardHeader}
          onPress={() => (locked ? router.push("/paywall") : setExpandedId(isExpanded ? null : combo.id))}
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
  };

  return (
    <Screen scroll={false} style={styles.flex}>
      <View style={styles.header}>
        <Text style={styles.intro}>
          Deux cartes qui se retrouvent dans un même tirage racontent plus, ensemble, que la somme de leurs
          significations prises séparément. La première carte porte l'énergie dominante du tirage ; la seconde vient
          la préciser ou la nuancer — si elles sortent dans l'ordre inverse, l'accent se déplace, comme expliqué à
          la fin de chaque association.
        </Text>

        {!isPremium && (
          <Pressable style={styles.paywallBanner} onPress={() => router.push("/paywall")}>
            <Ionicons name="lock-closed" size={16} color={colors.background} />
            <Text style={styles.paywallBannerText}>Débloquez les {combos.length} associations avec Premium</Text>
          </Pressable>
        )}

        <Pressable style={styles.explorerLink} onPress={() => router.push("/cartes/explorer")}>
          <Ionicons name="shuffle-outline" size={16} color={colors.gold} />
          <Text style={styles.explorerLinkText}>
            Ces {combos.length} associations rédigées ne couvrent qu'une partie du jeu : choisissez deux cartes au
            hasard pour obtenir leur association, quelle qu'elle soit.
          </Text>
          <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
        </Pressable>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={16} color={colors.textMuted} />
          <TextInput
            placeholder="Rechercher une carte ou une association…"
            placeholderTextColor={colors.textMuted}
            value={query}
            onChangeText={setQuery}
            style={styles.searchInput}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
          {SCOPES.map((s) => (
            <Pressable
              key={s.key}
              style={[styles.filterChip, scope === s.key && styles.filterChipActive]}
              onPress={() => setScope(s.key)}
            >
              <Text style={[styles.filterChipText, scope === s.key && styles.filterChipTextActive]}>{s.label}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        initialNumToRender={12}
        windowSize={7}
        ListEmptyComponent={<Text style={styles.emptyText}>Aucune association ne correspond à votre recherche.</Text>}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: { paddingHorizontal: spacing.md, paddingTop: spacing.sm },
  intro: { color: colors.textMuted, marginBottom: spacing.md, lineHeight: 20, fontSize: 13 },
  paywallBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.gold,
    borderRadius: 12,
    padding: spacing.sm,
    marginBottom: spacing.md,
  },
  paywallBannerText: { color: colors.background, fontWeight: "700", fontSize: 13, flex: 1 },
  explorerLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.cardAlt,
    borderRadius: 12,
    padding: spacing.sm,
    marginBottom: spacing.md,
  },
  explorerLinkText: { color: colors.textMuted, fontSize: 12, lineHeight: 16, flex: 1 },
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
  emptyText: { color: colors.textMuted, textAlign: "center", marginTop: spacing.xl },
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
