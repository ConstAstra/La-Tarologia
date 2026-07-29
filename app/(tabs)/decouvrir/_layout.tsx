import React from "react";
import { Stack } from "expo-router";
import { colors, fonts } from "@/theme/colors";

export default function DecouvrirLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { color: colors.text, fontFamily: fonts.heading },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Découvrir le tarot" }} />
      <Stack.Screen name="[id]" options={{ title: "" }} />
    </Stack>
  );
}
