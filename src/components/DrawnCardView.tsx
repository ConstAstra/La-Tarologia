import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Platform, Pressable, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { DrawnCard } from "@/types/tarot";
import { colors, fonts, spacing } from "@/theme/colors";
import { iconForCard } from "@/lib/suitIcon";
import { cardNumeral } from "@/lib/cardNumeral";
import { playCardReveal } from "@/lib/sound";

interface Props {
  drawn: DrawnCard;
  positionLabel?: string;
  onPress?: () => void;
  /** Delay in ms before the card auto-flips from its back to its face. Omit to render already revealed. */
  revealDelay?: number;
}

function Corner({ style }: { style: object }) {
  return <Ionicons name="sparkles" size={11} color={colors.gold} style={[styles.corner, style]} />;
}

function CardBack() {
  return (
    <LinearGradient
      colors={[colors.mystic, colors.card, colors.accentDeep]}
      locations={[0, 0.5, 1]}
      start={{ x: 0.15, y: 1 }}
      end={{ x: 0.85, y: 0 }}
      style={styles.cardFace}
    >
      <View style={styles.innerBorder} />
      <View style={styles.backEmblemHalo} />
      <View style={styles.backEmblemRing}>
        <View style={styles.backEmblemDiamond} />
      </View>
      <Corner style={styles.cornerTL} />
      <Corner style={styles.cornerTR} />
      <Corner style={styles.cornerBL} />
      <Corner style={styles.cornerBR} />
    </LinearGradient>
  );
}

export function DrawnCardView({ drawn, positionLabel, onPress, revealDelay }: Props) {
  const { card, reversed } = drawn;
  const numeral = cardNumeral(card);
  const startsHidden = revealDelay !== undefined;
  const flip = useRef(new Animated.Value(startsHidden ? 0 : 1)).current;
  const [revealed, setRevealed] = useState(!startsHidden);

  useEffect(() => {
    if (!startsHidden) return;
    const timer = setTimeout(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
      playCardReveal();
      Animated.timing(flip, {
        toValue: 1,
        duration: 550,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: Platform.OS !== "web",
      }).start();
      setRevealed(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, revealDelay);
    return () => clearTimeout(timer);
  }, [startsHidden, revealDelay]);

  const backRotateY = flip.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "180deg"] });
  const frontRotateY = flip.interpolate({ inputRange: [0, 1], outputRange: ["180deg", "360deg"] });
  const backOpacity = flip.interpolate({ inputRange: [0, 0.5, 0.501, 1], outputRange: [1, 1, 0, 0] });
  const frontOpacity = flip.interpolate({ inputRange: [0, 0.5, 0.501, 1], outputRange: [0, 0, 1, 1] });

  return (
    <Pressable style={styles.container} onPress={onPress} disabled={!onPress || !revealed}>
      {positionLabel && <Text style={styles.position}>{positionLabel}</Text>}
      <View style={styles.cardOuter}>
        <Animated.View
          style={[styles.flipFace, { opacity: backOpacity, transform: [{ rotateY: backRotateY }] }]}
        >
          <CardBack />
        </Animated.View>
        <Animated.View
          style={[
            styles.flipFace,
            { opacity: frontOpacity, transform: [{ rotateY: frontRotateY }, { rotate: reversed ? "180deg" : "0deg" }] },
          ]}
        >
          <LinearGradient
            colors={[colors.mystic, colors.card, colors.accentDeep]}
            locations={[0, 0.55, 1]}
            start={{ x: 0.15, y: 0 }}
            end={{ x: 0.85, y: 1 }}
            style={styles.cardFace}
          >
            <View style={styles.innerBorder} />
            {numeral && <Text style={styles.numeral}>{numeral}</Text>}
            <View style={styles.iconRing}>
              <Ionicons name={iconForCard(card)} size={22} color={colors.gold} />
            </View>
            <View style={styles.divider} />
            <Text style={styles.name}>{card.name}</Text>
            {reversed && (
              <View style={styles.reversedBadge}>
                <Text style={styles.reversedLabel}>Inversée</Text>
              </View>
            )}
            <Corner style={styles.cornerTL} />
            <Corner style={styles.cornerTR} />
            <Corner style={styles.cornerBL} />
            <Corner style={styles.cornerBR} />
          </LinearGradient>
        </Animated.View>
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
  flipFace: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backfaceVisibility: "hidden",
  },
  cardFace: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
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
  numeral: {
    position: "absolute",
    top: 12,
    color: colors.goldSoft,
    fontFamily: fonts.heading,
    fontSize: 11,
    letterSpacing: 1,
    opacity: 0.85,
  },
  iconRing: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  divider: {
    width: 28,
    height: 1,
    backgroundColor: colors.goldSoft,
    opacity: 0.5,
    marginVertical: 3,
  },
  backEmblemHalo: {
    position: "absolute",
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: colors.goldSoft,
    opacity: 0.3,
  },
  backEmblemRing: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  backEmblemDiamond: {
    width: 16,
    height: 16,
    backgroundColor: colors.gold,
    transform: [{ rotate: "45deg" }],
  },
  name: { color: colors.text, fontFamily: fonts.heading, textAlign: "center", fontSize: 14 },
  reversedBadge: {
    borderWidth: 0.75,
    borderColor: colors.gold,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 1,
    marginTop: 2,
  },
  reversedLabel: { color: colors.gold, fontSize: 9, letterSpacing: 0.5 },
  keyword: { color: colors.textMuted, fontSize: 11, marginTop: spacing.xs, textAlign: "center" },
  corner: {
    position: "absolute",
  },
  cornerTL: { top: 7, left: 7 },
  cornerTR: { top: 7, right: 7 },
  cornerBL: { bottom: 7, left: 7 },
  cornerBR: { bottom: 7, right: 7 },
});
