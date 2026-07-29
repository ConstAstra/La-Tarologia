import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { Screen } from "@/components/Screen";
import { getCardById } from "@/data/cards";
import { colors, fonts, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";

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
  const { isPremium } = useSubscription();
  const card = getCardById(id);

  useEffect(() => {
    if (card) navigation.setOptions({ title: card.name });
  }, [card, navigation]);

  if (!card) {
    return (
      <Screen>
        <Text style={styles.paragraph}>Cette carte est introuvable.</Text>
      </Screen>
    );
  }

  if (!card.isFree && !isPremium) {
    router.replace("/paywall");
    return null;
  }

  return (
    <Screen>
      <Text style={styles.title}>{card.name}</Text>
      <Text style={styles.subtitle}>
        {card.arcana === "majeur" ? "Arcane majeur" : `Arcane mineur · ${suitLabel(card.suit)}`}
        {card.number !== null ? ` · ${card.number}` : ""}
      </Text>

      <Section title="Symbolisme">
        <Text style={styles.paragraph}>{card.symbolisme}</Text>
      </Section>

      <Section title="À l'endroit">
        <Text style={styles.keywords}>{card.keywordsUpright.join(" · ")}</Text>
        <Text style={styles.paragraph}>{card.uprightMeaning}</Text>
      </Section>

      <Section title="Inversée">
        <Text style={styles.keywords}>{card.keywordsReversed.join(" · ")}</Text>
        <Text style={styles.paragraph}>{card.reversedMeaning}</Text>
      </Section>

      <Section title="Amour">
        <Text style={styles.paragraph}>{card.love}</Text>
      </Section>

      <Section title="Travail et argent">
        <Text style={styles.paragraph}>{card.travailArgent}</Text>
      </Section>

      <Section title="Conseil">
        <Text style={styles.paragraph}>{card.conseil}</Text>
      </Section>
    </Screen>
  );
}

function suitLabel(suit: string | null): string {
  switch (suit) {
    case "batons":
      return "Bâtons";
    case "coupes":
      return "Coupes";
    case "epees":
      return "Épées";
    case "deniers":
      return "Deniers";
    default:
      return "";
  }
}

const styles = StyleSheet.create({
  title: { color: colors.gold, fontSize: 26, fontFamily: fonts.heading },
  subtitle: { color: colors.textMuted, fontSize: 13, marginBottom: spacing.lg },
  section: { marginBottom: spacing.lg },
  sectionTitle: { color: colors.primary, fontFamily: fonts.bodyBold, fontSize: 14, marginBottom: spacing.xs, textTransform: "uppercase" },
  keywords: { color: colors.text, fontFamily: fonts.bodySemiBold, marginBottom: spacing.xs },
  paragraph: { color: colors.text, fontSize: 15, lineHeight: 22 },
});
