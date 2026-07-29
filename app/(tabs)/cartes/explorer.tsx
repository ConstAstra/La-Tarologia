import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { AppTextInput as TextInput } from "@/components/AppTextInput";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { useCards } from "@/data/i18n";
import { getComboForCards } from "@/data/combos";
import { colors, fonts, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";
import { useT } from "@/i18n/useT";
import { CardMeaning } from "@/types/tarot";

type CategoryKey = "general" | "amour" | "travail" | "guidance" | "sentimentsDeLAutre";

function CardPicker({
  label,
  selectedId,
  onSelect,
  cards,
  choosePlaceholder,
  searchPlaceholder,
}: {
  label: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
  cards: CardMeaning[];
  choosePlaceholder: string;
  searchPlaceholder: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const selected = selectedId ? cards.find((c) => c.id === selectedId) : undefined;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return cards.slice(0, 25);
    return cards.filter((c) => c.name.toLowerCase().includes(q));
  }, [query, cards]);

  return (
    <View style={styles.pickerBlock}>
      <Text style={styles.pickerLabel}>{label}</Text>
      <Pressable style={styles.pickerButton} onPress={() => setOpen((v) => !v)}>
        <Text style={selected ? styles.pickerButtonText : styles.pickerButtonPlaceholder}>
          {selected ? selected.name : choosePlaceholder}
        </Text>
        <Ionicons name={open ? "chevron-up" : "chevron-down"} size={16} color={colors.textMuted} />
      </Pressable>

      {open && (
        <View style={styles.pickerDropdown}>
          <TextInput
            placeholder={searchPlaceholder}
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
  const t = useT();
  const cards = useCards();
  const [cardAId, setCardAId] = useState<string | null>(null);
  const [cardBId, setCardBId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("general");

  const CATEGORIES: { key: CategoryKey; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
    { key: "general", label: t.explorer.categoryGeneral, icon: "compass-outline" },
    { key: "amour", label: t.explorer.categoryLove, icon: "heart-outline" },
    { key: "travail", label: t.explorer.categoryWork, icon: "briefcase-outline" },
    { key: "guidance", label: t.explorer.categoryGuidance, icon: "flash-outline" },
    { key: "sentimentsDeLAutre", label: t.explorer.categoryTheirFeelings, icon: "eye-outline" },
  ];

  const match = cardAId && cardBId ? getComboForCards(cardAId, cardBId) : undefined;
  const locked = match ? !match.combo.isFree && !isPremium : false;

  return (
    <Screen>
      <Text style={styles.intro}>{t.explorer.intro}</Text>

      <View style={styles.pickers}>
        <CardPicker
          label={t.explorer.firstCard}
          selectedId={cardAId}
          onSelect={setCardAId}
          cards={cards}
          choosePlaceholder={t.explorer.choose}
          searchPlaceholder={t.explorer.search}
        />
        <CardPicker
          label={t.explorer.secondCard}
          selectedId={cardBId}
          onSelect={setCardBId}
          cards={cards}
          choosePlaceholder={t.explorer.choose}
          searchPlaceholder={t.explorer.search}
        />
      </View>

      {match && (
        <View style={styles.result}>
          <View style={styles.resultHeader}>
            <Text style={styles.resultTitle}>{match.combo.title}</Text>
            {locked && (
              <Pressable style={styles.paywallButton} onPress={() => router.push("/paywall")}>
                <Ionicons name="lock-closed" size={14} color={colors.background} />
                <Text style={styles.paywallButtonText}>{t.explorer.unlock}</Text>
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

              {match.generated && <Text style={styles.generatedNote}>{t.explorer.generatedNote}</Text>}
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
  pickerLabel: { color: colors.primary, fontSize: 12, fontFamily: fonts.bodyBold },
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
  resultTitle: { color: colors.gold, fontFamily: fonts.bodySemiBold, fontSize: 16, flex: 1 },
  paywallButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.gold,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  paywallButtonText: { color: colors.background, fontFamily: fonts.bodyBold, fontSize: 12 },
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
  tabTextActive: { color: colors.background, fontFamily: fonts.bodyBold },
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
