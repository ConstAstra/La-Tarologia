import React from "react";
import { StyleSheet } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Screen } from "@/components/Screen";
import { colors, fonts, spacing } from "@/theme/colors";
import { useLocale } from "@/context/LocaleContext";
import { TERMS } from "@/i18n/legal";

export default function TermsScreen() {
  const { locale } = useLocale();
  const doc = TERMS[locale];
  return (
    <Screen>
      <Text style={styles.title}>{doc.title}</Text>
      <Text style={styles.updated}>{doc.updated}</Text>
      {doc.sections.map((section) => (
        <React.Fragment key={section.heading}>
          <Text style={styles.heading}>{section.heading}</Text>
          {section.paragraphs.map((p, i) => (
            <Text key={i} style={styles.paragraph}>
              {p}
            </Text>
          ))}
        </React.Fragment>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.gold, fontSize: 24, fontFamily: fonts.heading, marginBottom: spacing.xs },
  updated: { color: colors.textMuted, fontSize: 12, marginBottom: spacing.lg },
  heading: { color: colors.primary, fontFamily: fonts.bodyBold, fontSize: 14, marginTop: spacing.md, marginBottom: spacing.xs, textTransform: "uppercase" },
  paragraph: { color: colors.text, lineHeight: 20, marginBottom: spacing.xs },
});
