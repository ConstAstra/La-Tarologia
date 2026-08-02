import React, { useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, TextInput, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors, fonts, spacing } from "@/theme/colors";
import { useT } from "@/i18n/useT";
import { useLocale } from "@/context/LocaleContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { getAiInterpretation, AiCard } from "@/lib/aiInterpretation";

interface Props {
  spreadName: string;
  cards: AiCard[];
}

export function AiReadingBox({ spreadName, cards }: Props) {
  const t = useT();
  const { locale } = useLocale();
  const { isPremium } = useSubscription();
  const [intention, setIntention] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isPremium) {
    return (
      <View style={styles.premiumBox}>
        <View style={styles.premiumHeader}>
          <Ionicons name="sparkles" size={16} color={colors.gold} />
          <Text style={styles.premiumTitle}>{t.aiReading.title}</Text>
        </View>
        <Text style={styles.premiumText}>{t.aiReading.premiumBanner}</Text>
        <Pressable style={styles.unlockButton} onPress={() => router.push("/paywall")}>
          <Text style={styles.unlockButtonText}>{t.aiReading.unlockButton}</Text>
        </Pressable>
      </View>
    );
  }

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const text = await getAiInterpretation({ locale, spreadName, intention, cards });
      setResult(text);
    } catch {
      setError(t.aiReading.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="sparkles" size={15} color={colors.gold} />
        <Text style={styles.title}>{t.aiReading.title}</Text>
      </View>

      {!result && (
        <>
          <TextInput
            style={styles.input}
            value={intention}
            onChangeText={setIntention}
            placeholder={t.aiReading.intentionPlaceholder}
            placeholderTextColor={colors.textMuted}
            multiline
            maxLength={200}
          />
          <Pressable
            style={[styles.generateButton, loading && styles.generateButtonDisabled]}
            onPress={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <>
                <ActivityIndicator size="small" color={colors.background} />
                <Text style={styles.generateButtonText}>{t.aiReading.generating}</Text>
              </>
            ) : (
              <Text style={styles.generateButtonText}>{t.aiReading.generateButton}</Text>
            )}
          </Pressable>
        </>
      )}

      {error && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
          <Pressable onPress={handleGenerate}>
            <Text style={styles.retryText}>{t.aiReading.retry}</Text>
          </Pressable>
        </View>
      )}

      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{result}</Text>
          <Pressable
            style={styles.retryButton}
            onPress={() => { setResult(null); setIntention(""); }}
          >
            <Ionicons name="refresh-outline" size={14} color={colors.textMuted} />
            <Text style={styles.retryButtonText}>{t.aiReading.retry}</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.gold + "33",
  },
  header: { flexDirection: "row", alignItems: "center", gap: 6 },
  title: { color: colors.gold, fontFamily: fonts.bodySemiBold, fontSize: 14 },
  input: {
    backgroundColor: colors.cardAlt,
    borderRadius: 12,
    padding: spacing.sm,
    color: colors.text,
    fontFamily: fonts.body,
    fontSize: 14,
    minHeight: 72,
    textAlignVertical: "top",
  },
  generateButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.sm,
  },
  generateButtonDisabled: { opacity: 0.7 },
  generateButtonText: { color: colors.background, fontFamily: fonts.bodyBold, fontSize: 14 },
  premiumBox: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.gold + "22",
  },
  premiumHeader: { flexDirection: "row", alignItems: "center", gap: 6 },
  premiumTitle: { color: colors.gold, fontFamily: fonts.bodySemiBold, fontSize: 14 },
  premiumText: { color: colors.textMuted, fontSize: 13, lineHeight: 19 },
  unlockButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: spacing.sm,
    alignItems: "center",
    marginTop: spacing.xs,
  },
  unlockButtonText: { color: colors.background, fontFamily: fonts.bodyBold, fontSize: 14 },
  errorBox: { gap: spacing.xs },
  errorText: { color: colors.danger, fontSize: 13 },
  retryText: { color: colors.primary, fontSize: 13, fontFamily: fonts.bodySemiBold },
  resultBox: { gap: spacing.sm },
  resultText: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 23,
    fontFamily: fonts.bodyItalic,
  },
  retryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-end",
    marginTop: spacing.xs,
  },
  retryButtonText: { color: colors.textMuted, fontSize: 12, fontFamily: fonts.body },
});
