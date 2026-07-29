import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "@/context/AuthContext";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import { colors } from "@/theme/colors";

export default function RootLayout() {
  return (
    <AuthProvider>
      <SubscriptionProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: colors.background },
            headerTintColor: colors.text,
            headerTitleStyle: { color: colors.text },
            contentStyle: { backgroundColor: colors.background },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="auth/login" options={{ title: "Connexion", presentation: "modal" }} />
          <Stack.Screen name="auth/signup" options={{ title: "Créer un compte", presentation: "modal" }} />
          <Stack.Screen name="paywall" options={{ title: "Passer en Premium", presentation: "modal" }} />
        </Stack>
      </SubscriptionProvider>
    </AuthProvider>
  );
}
