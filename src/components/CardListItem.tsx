import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CardMeaning } from "@/types/tarot";
import { colors, spacing } from "@/theme/colors";
import { PremiumBadge } from "@/components/PremiumBadge";

interface Props {
  card: CardMeaning;
  locked: boolean;
  onPress: () => void;
}

export function CardListItem({ card, locked, onPress }: Props) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={styles.iconWrap}>
        <Ionicons name={locked ? "lock-closed" : "sparkles"} size={18} color={locked ? colors.textMuted : colors.gold} />
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
  iconWrap: { width: 28, alignItems: "center" },
  info: { flex: 1 },
  name: { color: colors.text, fontSize: 16, fontWeight: "600" },
  keywords: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
});
