import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { AppTextInput as TextInput } from "@/components/AppTextInput";
import { router } from "expo-router";
import { Screen } from "@/components/Screen";
import { colors, fonts, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { useT } from "@/i18n/useT";

export default function LoginScreen() {
  const { signInWithEmail } = useAuth();
  const t = useT();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setError(null);
    setIsSubmitting(true);
    const { error: signInError } = await signInWithEmail(email.trim(), password);
    setIsSubmitting(false);
    if (signInError) {
      setError(signInError);
      return;
    }
    router.back();
  };

  return (
    <Screen>
      <Text style={styles.title}>{t.auth.loginTitle}</Text>
      <Text style={styles.subtitle}>{t.auth.loginSubtitle}</Text>

      <TextInput
        style={styles.input}
        placeholder={t.auth.emailPlaceholder}
        placeholderTextColor={colors.textMuted}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder={t.auth.passwordPlaceholder}
        placeholderTextColor={colors.textMuted}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Pressable style={styles.button} onPress={handleSubmit} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? t.auth.loginLoading : t.auth.loginButton}</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/auth/signup")}>
        <Text style={styles.link}>{t.auth.noAccountLink}</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.gold, fontSize: 26, fontFamily: fonts.heading, marginBottom: spacing.xs },
  subtitle: { color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 20 },
  input: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: spacing.md,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  error: { color: colors.danger, marginBottom: spacing.sm },
  button: {
    backgroundColor: colors.gold,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  buttonText: { color: colors.background, fontFamily: fonts.bodyBold },
  link: { color: colors.primary, textAlign: "center" },
});
