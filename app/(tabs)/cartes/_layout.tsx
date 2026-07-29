import React from "react";
import { Stack } from "expo-router";
import { colors, fonts } from "@/theme/colors";

export default function CartesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { color: colors.text, fontFamily: fonts.heading },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Les 78 cartes" }} />
      <Stack.Screen name="associations" options={{ title: "Associations de cartes" }} />
      <Stack.Screen name="explorer" options={{ title: "Choisir deux cartes" }} />
      <Stack.Screen name="[id]" options={{ title: "" }} />
    </Stack>
  );
}
