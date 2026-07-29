import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { cards, getCardById } from "@/data/cards";
import { getComboForCards } from "@/data/combos";
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

function CardPicker({
  label,
  selectedId,
  onSelect,
}: {
  label: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const selected = selectedId ? getCardById(selectedId) : undefined;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return cards.slice(0, 25);
    return cards.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <View style={styles.pickerBlock}>
      <Text style={styles.pickerLabel}>{label}</Text>
      <Pressable style={styles.pickerButton} onPress={() => setOpen((v) => !v)}>
        <Text style={selected ? styles.pickerButtonText : styles.pickerButtonPlaceholder}>
          {selected ? selected.name : "Choisir une carte…"}
        </Text>
        <Ionicons name={open ? "chevron-up" : "chevron-down"} size={16} color={colors.textMuted} />
      </Pressable>

      {open && (
        <View style={styles.pickerDropdown}>
          <TextInput
            placeholder="Rechercher…"
            placeholderTextColor={colors.textMuted}
            value={query}
            onChangeText={setQuery}
            style={styles.pickerSearch}
          />
          <ScrollView style={styles.pickerList} nestedScrollEnabled>
            {filtered.map((c) => (
              <Pressable
                key={c.id}
                style={styles.pickerItem}
                onPress={() => {
                  onSelect(c.id);
                  setOpen(false);
                  setQuery("");
                }}
              >
                <Text style={styles.pickerItemText}>{c.name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

export default function ExplorerScreen() {
  const { isPremium } = useSubscription();
  const [cardAId, setCardAId] = useState<string | null>(null);
  const [cardBId, setCardBId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("general");

  const match = cardAId && cardBId ? getComboForCards(cardAId, cardBId) : undefined;
  const locked = match ? !match.combo.isFree && !isPremium : false;

  return (
    <Screen>
      <Text style={styles.intro}>
        Choisissez deux cartes parmi les 78 pour découvrir leur association, qu'elle fasse partie de
        nos analyses rédigées ou qu'elle soit composée à partir des significations de chaque carte.
      </Text>

      <View style={styles.pickers}>
        <CardPicker label="Première carte (énergie dominante)" selectedId={cardAId} onSelect={setCardAId} />
        <CardPicker label="Seconde carte (vient préciser)" selectedId={cardBId} onSelect={setCardBId} />
      </View>

      {match && (
        <View style={styles.result}>
          <View style={styles.resultHeader}>
            <Text style={styles.resultTitle}>{match.combo.title}</Text>
            {locked && (
              <Pressable style={styles.paywallButton} onPress={() => router.push("/paywall")}>
                <Ionicons name="lock-closed" size={14} color={colors.background} />
                <Text style={styles.paywallButtonText}>Débloquer</Text>
              </Pressable>
            )}
          </View>

          {locked ? (
            <Text style={styles.blurred} numberOfLines={3}>
              {match.combo.contexte}
            </Text>
          ) : (
            <>
              <Text style={styles.contexte}>{match.combo.contexte}</Text>

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

              <Text style={styles.text}>{match.combo[activeCategory]}</Text>

              <View style={styles.orderNote}>
                <Ionicons name="swap-vertical" size={14} color={colors.gold} />
                <Text style={styles.orderNoteText}>{match.combo.siOrdreInverse}</Text>
              </View>

              {match.generated && (
                <Text style={styles.generatedNote}>
                  Cette combinaison précise ne fait pas partie de nos analyses entièrement rédigées à la main :
                  elle est composée automatiquement à partir des significations propres à chacune des deux
                  cartes, pour qu'aucune combinaison ne reste sans réponse.
                </Text>
              )}
            </>
          )}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 20 },
  pickers: { gap: spacing.md, marginBottom: spacing.lg },
  pickerBlock: { gap: spacing.xs },
  pickerLabel: { color: colors.primary, fontSize: 12, fontWeight: "700" },
  pickerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
  },
  pickerButtonText: { color: colors.text, fontSize: 15 },
  pickerButtonPlaceholder: { color: colors.textMuted, fontSize: 15 },
  pickerDropdown: {
    backgroundColor: colors.cardAlt,
    borderRadius: 12,
    marginTop: spacing.xs,
    padding: spacing.sm,
    maxHeight: 260,
  },
  pickerSearch: {
    backgroundColor: colors.card,
    borderRadius: 10,
    paddingHorizontal: spacing.sm,
    paddingVertical: 8,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  pickerList: { maxHeight: 200 },
  pickerItem: { paddingVertical: 10, paddingHorizontal: spacing.xs },
  pickerItemText: { color: colors.text, fontSize: 14 },
  result: { backgroundColor: colors.card, borderRadius: 14, padding: spacing.md, gap: spacing.sm },
  resultHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  resultTitle: { color: colors.gold, fontWeight: "700", fontSize: 16, flex: 1 },
  paywallButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.gold,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  paywallButtonText: { color: colors.background, fontWeight: "700", fontSize: 12 },
  blurred: { color: colors.textMuted, fontSize: 13, lineHeight: 19, opacity: 0.6 },
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
  generatedNote: { color: colors.textMuted, fontSize: 11, lineHeight: 16, fontStyle: "italic" },
});
