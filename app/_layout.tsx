import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Stack, router, useRootNavigationState } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";
import { AppText } from "@/components/AppText";
import { colors, fonts } from "@/theme/colors";
import { useFonts, Gloock_400Regular } from "@expo-google-fonts/gloock";
import {
  CrimsonPro_400Regular,
  CrimsonPro_400Regular_Italic,
  CrimsonPro_500Medium,
  CrimsonPro_600SemiBold,
  CrimsonPro_700Bold,
} from "@expo-google-fonts/crimson-pro";
import AsyncStorage from "@react-native-async-storage/async-storage";
// SplashAnimation — book icon that springs in, pages flutter, title appears, then fades out.
function SplashAnimation({ onDone }: { onDone: () => void }) {
  const bookScale = useRef(new Animated.Value(0.4)).current;
  const bookOpacity = useRef(new Animated.Value(0)).current;
  const rotateVal = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const containerOpacity = useRef(new Animated.Value(1)).current;

  const rotateDeg = rotateVal.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-10deg", "0deg", "10deg"],
  });

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(bookScale, { toValue: 1, tension: 65, friction: 8, useNativeDriver: true }),
        Animated.timing(bookOpacity, { toValue: 1, duration: 350, useNativeDriver: true }),
      ]),
      Animated.sequence([
        Animated.timing(rotateVal, { toValue: -1, duration: 130, useNativeDriver: true }),
        Animated.timing(rotateVal, { toValue: 1, duration: 180, useNativeDriver: true }),
        Animated.timing(rotateVal, { toValue: -0.4, duration: 130, useNativeDriver: true }),
        Animated.timing(rotateVal, { toValue: 0, duration: 130, useNativeDriver: true }),
      ]),
      Animated.timing(titleOpacity, { toValue: 1, duration: 450, useNativeDriver: true }),
      Animated.delay(750),
      Animated.timing(containerOpacity, { toValue: 0, duration: 380, useNativeDriver: true }),
    ]).start(() => onDone());
  }, []);

  return (
    <Animated.View style={[splashStyles.container, { opacity: containerOpacity }]}>
      <Animated.View style={{ opacity: bookOpacity, transform: [{ scale: bookScale }, { rotate: rotateDeg }] }}>
        <View style={splashStyles.iconHalo}>
          <Ionicons name="book" size={68} color={colors.gold} />
        </View>
      </Animated.View>
      <View style={splashStyles.flourishRow}>
        <View style={splashStyles.flourishLine} />
        <Ionicons name="sparkles" size={9} color={colors.gold} />
        <View style={splashStyles.flourishLine} />
      </View>
      <Animated.View style={{ opacity: titleOpacity, alignItems: "center" }}>
        <AppText style={splashStyles.title}>La Tarologia</AppText>
      </Animated.View>
    </Animated.View>
  );
}

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  iconHalo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.gold + "44",
    alignItems: "center",
    justifyContent: "center",
  },
  flourishRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  flourishLine: { width: 36, height: 1, backgroundColor: colors.gold, opacity: 0.55 },
  title: {
    color: colors.gold,
    fontFamily: fonts.heading,
    fontSize: 30,
    letterSpacing: 1.5,
    textShadowColor: "rgba(217, 179, 108, 0.4)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
});

import { AuthProvider } from "@/context/AuthContext";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import { LocaleProvider } from "@/context/LocaleContext";
import { useT } from "@/i18n/useT";

SplashScreen.preventAutoHideAsync().catch(() => {});

const ONBOARDING_KEY = "latarologia.onboarded";

function RootStack() {
  const t = useT();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;
    AsyncStorage.getItem(ONBOARDING_KEY).then((val) => {
      if (!val) router.replace("/onboarding");
    });
  }, [navigationState?.key]);

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerTitleStyle: { color: colors.text, fontFamily: fonts.heading },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ title: t.nav.login, presentation: "modal" }} />
        <Stack.Screen name="auth/signup" options={{ title: t.nav.signup, presentation: "modal" }} />
        <Stack.Screen name="paywall" options={{ title: t.nav.paywall, presentation: "modal" }} />
        <Stack.Screen name="legal/terms" options={{ title: t.nav.legalTerms }} />
        <Stack.Screen name="legal/privacy" options={{ title: t.nav.legalPrivacy }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Gloock_400Regular,
    CrimsonPro_400Regular,
    CrimsonPro_400Regular_Italic,
    CrimsonPro_500Medium,
    CrimsonPro_600SemiBold,
    CrimsonPro_700Bold,
  });
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (!splashDone) {
    return <SplashAnimation onDone={() => setSplashDone(true)} />;
  }

  return (
    <LocaleProvider>
      <AuthProvider>
        <SubscriptionProvider>
          <RootStack />
        </SubscriptionProvider>
      </AuthProvider>
    </LocaleProvider>
  );
}
