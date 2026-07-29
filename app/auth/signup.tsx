import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { AppTextInput as TextInput } from "@/components/AppTextInput";
import { router } from "expo-router";
import { Screen } from "@/components/Screen";
import { colors, fonts, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { useT } from "@/i18n/useT";

export default function SignupScreen() {
  const { signUpWithEmail } = useAuth();
  const t = useT();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  const handleSubmit = async () => {
    setError(null);
    if (password.length < 6) {
      setError(t.auth.passwordTooShort);
      return;
    }
    setIsSubmitting(true);
    const { error: signUpError } = await signUpWithEmail(email.trim(), password, displayName.trim());
    setIsSubmitting(false);
    if (signUpError) {
      setError(signUpError);
      return;
    }
    setConfirmationSent(true);
  };

  if (confirmationSent) {
    return (
      <Screen>
        <Text style={styles.title}>{t.auth.confirmTitle}</Text>
        <Text style={styles.subtitle}>{t.auth.confirmText}</Text>
        <Pressable style={styles.button} onPress={() => router.replace("/auth/login")}>
          <Text style={styles.buttonText}>{t.auth.backToLogin}</Text>
        </Pressable>
      </Screen>
    );
  }

  return (
    <Screen>
      <Text style={styles.title}>{t.auth.signupTitle}</Text>
      <Text style={styles.subtitle}>{t.auth.signupSubtitle}</Text>

      <TextInput
        style={styles.input}
        placeholder={t.auth.namePlaceholder}
        placeholderTextColor={colors.textMuted}
        value={displayName}
        onChangeText={setDisplayName}
      />
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
        placeholder={t.auth.passwordMinPlaceholder}
        placeholderTextColor={colors.textMuted}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Pressable style={styles.button} onPress={handleSubmit} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? t.auth.signupLoading : t.auth.signupButton}</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/auth/login")}>
        <Text style={styles.link}>{t.auth.hasAccountLink}</Text>
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
