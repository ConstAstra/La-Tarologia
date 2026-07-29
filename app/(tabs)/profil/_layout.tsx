import React from "react";
import { Stack } from "expo-router";
import { colors } from "@/theme/colors";

export default function ProfilLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { color: colors.text },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Profil" }} />
    </Stack>
  );
}
