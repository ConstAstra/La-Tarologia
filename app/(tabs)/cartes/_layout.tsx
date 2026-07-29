import React from "react";
import { Stack } from "expo-router";
import { colors, fonts } from "@/theme/colors";
import { useT } from "@/i18n/useT";

export default function CartesLayout() {
  const t = useT();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { color: colors.text, fontFamily: fonts.heading },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: t.nav.cartesIndex }} />
      <Stack.Screen name="associations" options={{ title: t.nav.cartesAssociations }} />
      <Stack.Screen name="explorer" options={{ title: t.nav.cartesExplorer }} />
      <Stack.Screen name="[id]" options={{ title: "" }} />
    </Stack>
  );
}
