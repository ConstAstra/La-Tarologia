import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawnCard } from "@/types/tarot";
import { colors, spacing } from "@/theme/colors";

interface Props {
  drawn: DrawnCard;
  positionLabel?: string;
  onPress?: () => void;
}

export function DrawnCardView({ drawn, positionLabel, onPress }: Props) {
  const { card, reversed } = drawn;
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={!onPress}>
      {positionLabel && <Text style={styles.position}>{positionLabel}</Text>}
      <View style={[styles.cardFace, reversed && styles.reversed]}>
        <Ionicons name="moon" size={28} color={colors.gold} />
        <Text style={styles.name}>{card.name}</Text>
        {reversed && <Text style={styles.reversedLabel}>Inversée</Text>}
      </View>
      <Text style={styles.keyword}>
        {(reversed ? card.keywordsReversed : card.keywordsUpright).slice(0, 2).join(" · ")}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", width: 140 },
  position: { color: colors.textMuted, fontSize: 12, marginBottom: spacing.xs, textAlign: "center" },
  cardFace: {
    width: 120,
    height: 180,
    borderRadius: 14,
    backgroundColor: colors.cardAlt,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: spacing.sm,
  },
  reversed: { transform: [{ rotate: "180deg" }] },
  name: { color: colors.text, fontWeight: "700", textAlign: "center", fontSize: 14 },
  reversedLabel: { color: colors.gold, fontSize: 10 },
  keyword: { color: colors.textMuted, fontSize: 11, marginTop: spacing.xs, textAlign: "center" },
});
