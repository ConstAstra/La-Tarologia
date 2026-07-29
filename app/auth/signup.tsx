import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { router } from "expo-router";
import { Screen } from "@/components/Screen";
import { colors, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";

export default function SignupScreen() {
  const { signUpWithEmail } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  const handleSubmit = async () => {
    setError(null);
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
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
        <Text style={styles.title}>Vérifiez vos e-mails</Text>
        <Text style={styles.subtitle}>
          Un e-mail de confirmation vient de vous être envoyé. Cliquez sur le lien qu'il contient pour activer votre
          compte, puis revenez vous connecter.
        </Text>
        <Pressable style={styles.button} onPress={() => router.replace("/auth/login")}>
          <Text style={styles.buttonText}>Retour à la connexion</Text>
        </Pressable>
      </Screen>
    );
  }

  return (
    <Screen>
      <Text style={styles.title}>Créer un compte</Text>
      <Text style={styles.subtitle}>Retrouvez vos tirages sur tous vos appareils et débloquez le contenu Premium.</Text>

      <TextInput
        style={styles.input}
        placeholder="Prénom ou pseudo"
        placeholderTextColor={colors.textMuted}
        value={displayName}
        onChangeText={setDisplayName}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        placeholderTextColor={colors.textMuted}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe (6 caractères minimum)"
        placeholderTextColor={colors.textMuted}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Pressable style={styles.button} onPress={handleSubmit} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? "Création…" : "Créer mon compte"}</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/auth/login")}>
        <Text style={styles.link}>Déjà un compte ? Connectez-vous</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.gold, fontSize: 24, fontWeight: "700", marginBottom: spacing.xs },
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
  buttonText: { color: colors.background, fontWeight: "700" },
  link: { color: colors.primary, textAlign: "center" },
});
