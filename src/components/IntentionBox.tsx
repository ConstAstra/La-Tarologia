import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { colors, fonts, spacing } from "@/theme/colors";
import { useT } from "@/i18n/useT";
import { getWeeklyIntention, saveWeeklyIntention } from "@/lib/intention";

export function IntentionBox() {
  const t = useT();
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    getWeeklyIntention().then(setText);
    return () => clearTimeout(timer.current);
  }, []);

  const handleChange = (val: string) => {
    setText(val);
    setSaved(false);
    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      await saveWeeklyIntention(val);
      setSaved(true);
    }, 600);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="compass-outline" size={14} color={colors.primary} />
        <Text style={styles.title}>{t.intention.title}</Text>
        {saved && <Text style={styles.saved}>{t.intention.saved}</Text>}
      </View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleChange}
        placeholder={t.intention.placeholder}
        placeholderTextColor={colors.textMuted}
        multiline
        maxLength={200}
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.sm,
    borderLeftWidth: 2,
    borderLeftColor: colors.gold + "55",
  },
  header: { flexDirection: "row", alignItems: "center", gap: 6 },
  title: { color: colors.primary, fontFamily: fonts.bodySemiBold, fontSize: 14, flex: 1 },
  saved: { color: colors.textMuted, fontSize: 11, fontFamily: fonts.body },
  input: {
    color: colors.text,
    fontFamily: fonts.bodyItalic,
    fontSize: 14,
    lineHeight: 22,
    minHeight: 50,
    backgroundColor: colors.cardAlt,
    borderRadius: 12,
    padding: spacing.sm,
  },
});
