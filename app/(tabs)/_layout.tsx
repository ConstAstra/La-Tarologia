import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors, fonts } from "@/theme/colors";
import { useT } from "@/i18n/useT";

export default function TabsLayout() {
  const t = useT();
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { color: colors.text, fontFamily: fonts.heading },
        tabBarStyle: { backgroundColor: colors.backgroundAlt, borderTopColor: colors.border },
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontFamily: fonts.bodySemiBold, fontSize: 11 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t.tabs.accueil,
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="decouvrir"
        options={{
          title: t.tabs.decouvrir,
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="book" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="tirages"
        options={{
          title: t.tabs.tirages,
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="grid" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="cartes"
        options={{
          title: t.tabs.cartes,
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="albums" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: t.tabs.profil,
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
