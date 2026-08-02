import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { colors, fonts, spacing } from "@/theme/colors";
import { useT } from "@/i18n/useT";

interface Props {
  questions: string[];
}

export function MeditationQuestionsBox({ questions }: Props) {
  const t = useT();
  if (questions.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="moon-outline" size={14} color={colors.primary} />
        <Text style={styles.title}>{t.meditation.title}</Text>
      </View>
      {questions.map((q, i) => (
        <View key={i} style={styles.questionRow}>
          <Text style={styles.bullet}>—</Text>
          <Text style={styles.question}>{q}</Text>
        </View>
      ))}
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
    borderLeftColor: colors.primary + "66",
  },
  header: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: spacing.xs },
  title: { color: colors.primary, fontFamily: fonts.bodySemiBold, fontSize: 14 },
  questionRow: { flexDirection: "row", gap: spacing.sm },
  bullet: { color: colors.primary, fontFamily: fonts.body, fontSize: 14, marginTop: 1 },
  question: { color: colors.text, fontFamily: fonts.bodyItalic, fontSize: 14, lineHeight: 21, flex: 1 },
});
