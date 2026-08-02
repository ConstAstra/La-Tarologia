import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams, useNavigation, useRootNavigationState } from "expo-router";
import { Screen } from "@/components/Screen";
import { useCards } from "@/data/i18n";
import { colors, fonts, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";
import { useT } from "@/i18n/useT";
import { isFavorite, toggleFavorite } from "@/lib/favorites";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default function CardDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const navigationState = useRootNavigationState();
  const { isPremium } = useSubscription();
  const t = useT();
  const cards = useCards();
  const card = cards.find((c) => c.id === id);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (card) navigation.setOptions({ title: card.name });
  }, [card, navigation]);

  useEffect(() => {
    if (card) isFavorite(card.id).then(setFav);
  }, [card?.id]);

  useEffect(() => {
    if (navigationState?.key && card && !card.isFree && !isPremium) {
      router.replace("/paywall");
    }
  }, [navigationState?.key, card, isPremium]);

  if (!card) {
    return (
      <Screen>
        <Text style={styles.paragraph}>{t.cardDetail.notFound}</Text>
      </Screen>
    );
  }

  if (!card.isFree && !isPremium) {
    return null;
  }

  const suitLabels: Record<string, string> = {
    batons: t.cartes.filterBatons,
    coupes: t.cartes.filterCoupes,
    epees: t.cartes.filterEpees,
    deniers: t.cartes.filterDeniers,
  };

  const handleFav = async () => {
    const next = await toggleFavorite(card.id);
    setFav(next);
  };

  return (
    <Screen>
      <View style={styles.titleRow}>
        <Text style={[styles.title, styles.titleFlex]}>{card.name}</Text>
        <Pressable onPress={handleFav} hitSlop={12} accessibilityLabel={fav ? t.cardDetail.unfavorite : t.cardDetail.favorite}>
          <Ionicons name={fav ? "heart" : "heart-outline"} size={22} color={fav ? colors.danger : colors.textMuted} />
        </Pressable>
      </View>
      <Text style={styles.subtitle}>
        {card.arcana === "majeur" ? t.cardDetail.majeur : `${t.cardDetail.mineur} · ${suitLabels[card.suit ?? ""] ?? ""}`}
        {card.number !== null ? ` · ${card.number}` : ""}
      </Text>

      <Section title={t.cardDetail.symbolisme}>
        <Text style={styles.paragraph}>{card.symbolisme}</Text>
      </Section>

      <Section title={t.cardDetail.upright}>
        <Text style={styles.keywords}>{card.keywordsUpright.join(" · ")}</Text>
        <Text style={styles.paragraph}>{card.uprightMeaning}</Text>
      </Section>

      <Section title={t.cardDetail.reversed}>
        <Text style={styles.keywords}>{card.keywordsReversed.join(" · ")}</Text>
        <Text style={styles.paragraph}>{card.reversedMeaning}</Text>
      </Section>

      <Section title={t.cardDetail.love}>
        <Text style={styles.paragraph}>{card.love}</Text>
      </Section>

      <Section title={t.cardDetail.work}>
        <Text style={styles.paragraph}>{card.travailArgent}</Text>
      </Section>

      <Section title={t.cardDetail.advice}>
        <Text style={styles.paragraph}>{card.conseil}</Text>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleRow: { flexDirection: "row", alignItems: "center", marginBottom: spacing.xs },
  titleFlex: { flex: 1 },
  title: { color: colors.gold, fontSize: 26, fontFamily: fonts.heading },
  subtitle: { color: colors.textMuted, fontSize: 13, marginBottom: spacing.lg },
  section: { marginBottom: spacing.lg },
  sectionTitle: { color: colors.primary, fontFamily: fonts.bodyBold, fontSize: 14, marginBottom: spacing.xs, textTransform: "uppercase" },
  keywords: { color: colors.text, fontFamily: fonts.bodySemiBold, marginBottom: spacing.xs },
  paragraph: { color: colors.text, fontSize: 15, lineHeight: 22 },
});
