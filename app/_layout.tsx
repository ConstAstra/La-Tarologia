import React, { useEffect } from "react";
import { Stack, router, useRootNavigationState } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Gloock_400Regular } from "@expo-google-fonts/gloock";
import {
  CrimsonPro_400Regular,
  CrimsonPro_400Regular_Italic,
  CrimsonPro_500Medium,
  CrimsonPro_600SemiBold,
  CrimsonPro_700Bold,
} from "@expo-google-fonts/crimson-pro";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthProvider } from "@/context/AuthContext";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import { LocaleProvider } from "@/context/LocaleContext";
import { useT } from "@/i18n/useT";
import { colors, fonts } from "@/theme/colors";

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

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
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
