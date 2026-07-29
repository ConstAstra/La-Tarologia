import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { CardMeaning } from "@/types/tarot";
import { colors, fonts, spacing } from "@/theme/colors";
import { PremiumBadge } from "@/components/PremiumBadge";
import { iconForCard } from "@/lib/suitIcon";

interface Props {
  card: CardMeaning;
  locked: boolean;
  onPress: () => void;
}

export function CardListItem({ card, locked, onPress }: Props) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={[styles.iconWrap, locked && styles.iconWrapLocked]}>
        <Ionicons
          name={locked ? "lock-closed" : iconForCard(card)}
          size={16}
          color={locked ? colors.textMuted : colors.background}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{card.name}</Text>
        <Text style={styles.keywords} numberOfLines={1}>
          {card.keywordsUpright.join(" · ")}
        </Text>
      </View>
      {!card.isFree && <PremiumBadge />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: spacing.sm,
  },
  iconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapLocked: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.border,
  },
  info: { flex: 1 },
  name: { color: colors.text, fontSize: 17, fontFamily: fonts.heading },
  keywords: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
});
