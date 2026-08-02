import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { colors, fonts, spacing } from "@/theme/colors";
import { useT } from "@/i18n/useT";
import { getJournalNote, saveJournalNote } from "@/lib/journal";

interface Props {
  journalKey: string;
}

export function JournalBox({ journalKey }: Props) {
  const t = useT();
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    getJournalNote(journalKey).then(setNote);
    return () => clearTimeout(timer.current);
  }, [journalKey]);

  const handleChange = (text: string) => {
    setNote(text);
    setSaved(false);
    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      await saveJournalNote(journalKey, text);
      setSaved(true);
    }, 600);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="pencil-outline" size={14} color={colors.primary} />
        <Text style={styles.title}>{t.journal.title}</Text>
        {saved && <Text style={styles.saved}>{t.journal.saved}</Text>}
      </View>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={handleChange}
        placeholder={t.journal.placeholder}
        placeholderTextColor={colors.textMuted}
        multiline
        maxLength={600}
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
  },
  header: { flexDirection: "row", alignItems: "center", gap: 6 },
  title: { color: colors.primary, fontFamily: fonts.bodySemiBold, fontSize: 14, flex: 1 },
  saved: { color: colors.textMuted, fontSize: 11, fontFamily: fonts.body },
  input: {
    color: colors.text,
    fontFamily: fonts.bodyItalic,
    fontSize: 14,
    lineHeight: 22,
    minHeight: 80,
    backgroundColor: colors.cardAlt,
    borderRadius: 12,
    padding: spacing.sm,
  },
});
