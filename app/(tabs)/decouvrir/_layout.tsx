import React from "react";
import { Stack } from "expo-router";
import { colors, fonts } from "@/theme/colors";
import { useT } from "@/i18n/useT";

export default function DecouvrirLayout() {
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
      <Stack.Screen name="index" options={{ title: t.nav.decouvrirIndex }} />
      <Stack.Screen name="[id]" options={{ title: "" }} />
    </Stack>
  );
}
