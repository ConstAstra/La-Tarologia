import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { DrawnCard } from "@/types/tarot";
import { colors, fonts, spacing } from "@/theme/colors";
import { iconForCard } from "@/lib/suitIcon";

interface Props {
  drawn: DrawnCard;
  positionLabel?: string;
  onPress?: () => void;
}

function Corner({ style }: { style: object }) {
  return <View style={[styles.corner, style]} />;
}

export function DrawnCardView({ drawn, positionLabel, onPress }: Props) {
  const { card, reversed } = drawn;
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={!onPress}>
      {positionLabel && <Text style={styles.position}>{positionLabel}</Text>}
      <View style={[styles.cardOuter, reversed && styles.reversed]}>
        <LinearGradient
          colors={[colors.mystic, colors.card, colors.accentDeep]}
          locations={[0, 0.55, 1]}
          start={{ x: 0.15, y: 0 }}
          end={{ x: 0.85, y: 1 }}
          style={styles.cardFace}
        >
          <View style={styles.innerBorder} />
          <Ionicons name={iconForCard(card)} size={26} color={colors.gold} />
          <Text style={styles.name}>{card.name}</Text>
          {reversed && <Text style={styles.reversedLabel}>Inversée</Text>}
          <Corner style={styles.cornerTL} />
          <Corner style={styles.cornerTR} />
          <Corner style={styles.cornerBL} />
          <Corner style={styles.cornerBR} />
        </LinearGradient>
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
  cardOuter: {
    width: 120,
    height: 180,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  cardFace: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: spacing.sm,
    overflow: "hidden",
  },
  innerBorder: {
    position: "absolute",
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    borderRadius: 9,
    borderWidth: 0.75,
    borderColor: colors.goldSoft,
    opacity: 0.45,
  },
  reversed: { transform: [{ rotate: "180deg" }] },
  name: { color: colors.text, fontFamily: fonts.heading, textAlign: "center", fontSize: 15 },
  reversedLabel: { color: colors.gold, fontSize: 10 },
  keyword: { color: colors.textMuted, fontSize: 11, marginTop: spacing.xs, textAlign: "center" },
  corner: {
    position: "absolute",
    width: 6,
    height: 6,
    backgroundColor: colors.gold,
    transform: [{ rotate: "45deg" }],
  },
  cornerTL: { top: 9, left: 9 },
  cornerTR: { top: 9, right: 9 },
  cornerBL: { bottom: 9, left: 9 },
  cornerBR: { bottom: 9, right: 9 },
});
