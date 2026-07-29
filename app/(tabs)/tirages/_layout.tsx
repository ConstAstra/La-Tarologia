import React from "react";
import { Stack } from "expo-router";
import { colors, fonts } from "@/theme/colors";

export default function TiragesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { color: colors.text, fontFamily: fonts.heading },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Méthodes de tirage" }} />
      <Stack.Screen name="[id]" options={{ title: "" }} />
    </Stack>
  );
}
