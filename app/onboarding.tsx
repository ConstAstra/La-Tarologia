import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { colors, fonts, spacing } from "@/theme/colors";
import { useT } from "@/i18n/useT";
import {
  requestNotificationPermission,
  scheduleDailyReminder,
} from "@/lib/notifications";

const { width: SCREEN_W } = Dimensions.get("window");
const ONBOARDING_KEY = "latarologia.onboarded";

type Slide = {
  key: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  isFirst?: boolean;
};

const SLIDES: Slide[] = [
  { key: "s1", icon: "sparkles", iconColor: colors.gold, isFirst: true },
  { key: "s2", icon: "sunny-outline", iconColor: colors.primary },
  { key: "s3", icon: "notifications-outline", iconColor: colors.gold },
];

export default function OnboardingScreen() {
  const t = useT();
  const flatRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notifGranted, setNotifGranted] = useState(false);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]) setCurrentIndex(viewableItems[0].index ?? 0);
    }
  ).current;

  const goNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      flatRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    }
  };

  const handleNotifRequest = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      await scheduleDailyReminder(8, 0);
      setNotifGranted(true);
    }
  };

  const handleStart = async () => {
    await AsyncStorage.setItem(ONBOARDING_KEY, "true");
    router.replace("/(tabs)");
  };

  const slideContent = [
    {
      title: t.onboarding.slide1Title,
      text: t.onboarding.slide1Text,
    },
    {
      title: t.onboarding.slide2Title,
      text: t.onboarding.slide2Text,
    },
    {
      title: t.onboarding.slide3Title,
      text: t.onboarding.slide3Text,
    },
  ];

  const renderItem = ({ item, index }: { item: Slide; index: number }) => {
    const content = slideContent[index];
    return (
      <View style={styles.slide}>
        <View style={styles.slideInner}>
          {item.isFirst && (
            <View style={styles.flourishRow}>
              <View style={styles.flourishLine} />
              <Ionicons name="sparkles" size={11} color={colors.gold} />
              <View style={styles.flourishLine} />
            </View>
          )}
          <View style={[styles.iconCircle, { borderColor: item.iconColor + "44" }]}>
            <Ionicons name={item.icon} size={42} color={item.iconColor} />
          </View>
          <Text style={item.isFirst ? styles.titleMain : styles.title}>
            {content.title}
          </Text>
          {item.isFirst && (
            <View style={styles.flourishRowBottom}>
              <View style={styles.flourishLine} />
              <Ionicons name="sparkles" size={8} color={colors.goldSoft} />
              <View style={styles.flourishLine} />
            </View>
          )}
          <Text style={styles.text}>{content.text}</Text>

          {index === 2 && (
            <View style={styles.notifBlock}>
              {notifGranted ? (
                <View style={styles.notifConfirm}>
                  <Ionicons name="checkmark-circle" size={22} color={colors.success} />
                  <Text style={styles.notifConfirmText}>
                    {t.onboarding.notifButton}
                  </Text>
                </View>
              ) : (
                <Pressable style={styles.notifButton} onPress={handleNotifRequest}>
                  <Ionicons name="notifications-outline" size={18} color={colors.background} />
                  <Text style={styles.notifButtonText}>{t.onboarding.notifButton}</Text>
                </Pressable>
              )}
              {!notifGranted && (
                <Pressable onPress={handleStart}>
                  <Text style={styles.skipText}>{t.onboarding.notifSkip}</Text>
                </Pressable>
              )}
            </View>
          )}
        </View>
      </View>
    );
  };

  const isLast = currentIndex === SLIDES.length - 1;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatRef}
        data={SLIDES}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        scrollEventThrottle={16}
      />

      <View style={styles.footer}>
        <View style={styles.dots}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === currentIndex && styles.dotActive]}
            />
          ))}
        </View>

        {isLast ? (
          <Pressable style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>{t.onboarding.startButton}</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.nextButton} onPress={goNext}>
            <Ionicons name="arrow-forward" size={22} color={colors.background} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  slide: { width: SCREEN_W, flex: 1, justifyContent: "center", paddingHorizontal: spacing.lg },
  slideInner: { alignItems: "center", gap: spacing.md, paddingBottom: 100 },
  flourishRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  flourishRowBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: -spacing.sm,
  },
  flourishLine: { width: 40, height: 1, backgroundColor: colors.gold, opacity: 0.55 },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.card,
    marginBottom: spacing.sm,
  },
  titleMain: {
    color: colors.gold,
    fontFamily: fonts.heading,
    fontSize: 36,
    letterSpacing: 1.5,
    textAlign: "center",
    textShadowColor: "rgba(217, 179, 108, 0.45)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 14,
  },
  title: {
    color: colors.text,
    fontFamily: fonts.heading,
    fontSize: 26,
    textAlign: "center",
    marginBottom: spacing.xs,
  },
  text: {
    color: colors.textMuted,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    fontFamily: fonts.bodyItalic,
    maxWidth: 300,
  },
  notifBlock: { width: "100%", gap: spacing.sm, alignItems: "center", marginTop: spacing.sm },
  notifButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.gold,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.lg,
    width: "100%",
    justifyContent: "center",
  },
  notifButtonText: { color: colors.background, fontFamily: fonts.bodyBold, fontSize: 15 },
  notifConfirm: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  notifConfirmText: { color: colors.success, fontFamily: fonts.bodySemiBold, fontSize: 15 },
  skipText: { color: colors.textMuted, fontSize: 13, fontFamily: fonts.body, marginTop: spacing.xs },
  footer: {
    position: "absolute",
    bottom: spacing.xl,
    left: 0,
    right: 0,
    alignItems: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  dots: { flexDirection: "row", gap: 6 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.border },
  dotActive: { width: 20, backgroundColor: colors.gold },
  nextButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  startButton: {
    backgroundColor: colors.gold,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.xl,
    width: "100%",
    alignItems: "center",
  },
  startButtonText: { color: colors.background, fontFamily: fonts.bodyBold, fontSize: 16 },
});
