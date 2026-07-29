import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { PremiumBadge } from "@/components/PremiumBadge";
import { useSpreads } from "@/data/i18n";
import { colors, fonts, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";
import { useT } from "@/i18n/useT";

export default function TiragesIndex() {
  const { isPremium } = useSubscription();
  const t = useT();
  const spreads = useSpreads();

  const DIFFICULTY_LABELS: Record<string, string> = {
    debutant: t.tirages.difficultyDebutant,
    intermediaire: t.tirages.difficultyIntermediaire,
    avance: t.tirages.difficultyAvance,
  };

  return (
    <Screen>
      <Text style={styles.intro}>{t.tirages.intro}</Text>

      <Pressable style={styles.guideBanner} onPress={() => router.push("/decouvrir/art-etat-esprit-libre-arbitre")}>
        <View style={styles.guideBannerIcon}>
          <Ionicons name="school-outline" size={20} color={colors.background} />
        </View>
        <View style={styles.guideBannerText}>
          <Text style={styles.guideBannerTitle}>{t.tirages.guideTitle}</Text>
          <Text style={styles.guideBannerSubtitle}>{t.tirages.guideSubtitle}</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.gold} />
      </Pressable>

      {spreads.map((spread) => {
        const locked = !spread.isFree && !isPremium;
        return (
          <Pressable
            key={spread.id}
            style={styles.card}
            onPress={() => (locked ? router.push("/paywall") : router.push(`/tirages/${spread.id}`))}
          >
            <View style={styles.cardHeader}>
              <Ionicons name={locked ? "lock-closed" : "layers-outline"} size={18} color={locked ? colors.textMuted : colors.gold} />
              <Text style={styles.cardTitle}>{spread.name}</Text>
            </View>
            <Text style={styles.cardMeta}>
              {t.tirages.cardCount(spread.cardCount)} · {DIFFICULTY_LABELS[spread.difficulty]}
            </Text>
            <Text style={styles.cardSummary}>{spread.shortDescription}</Text>
            {!spread.isFree && <PremiumBadge />}
          </Pressable>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { color: colors.textMuted, marginBottom: spacing.md, lineHeight: 20 },
  guideBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.cardAlt,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.gold,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    marginBottom: spacing.lg,
  },
  guideBannerIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  guideBannerText: { flex: 1 },
  guideBannerTitle: { color: colors.gold, fontSize: 15, fontFamily: fonts.bodyBold },
  guideBannerSubtitle: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.xs,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  cardTitle: { color: colors.text, fontFamily: fonts.heading, fontSize: 16, flex: 1 },
  cardMeta: { color: colors.primary, fontSize: 12 },
  cardSummary: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
});
