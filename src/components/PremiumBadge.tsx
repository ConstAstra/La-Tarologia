import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { colors, fonts } from "@/theme/colors";

export function PremiumBadge() {
  return (
    <View style={styles.badge}>
      <Ionicons name="star" size={12} color={colors.background} />
      <Text style={styles.text}>Premium</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: "flex-start",
  },
  text: { color: colors.background, fontSize: 11, fontFamily: fonts.bodyBold },
});
