import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { colors, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";

const BENEFITS = [
  "Les 56 arcanes mineurs interprétés en détail",
  "Tous les articles sur l'histoire et les styles de tarot",
  "Toutes les méthodes de tirage : croix, croix celtique, amour, tirage de l'année…",
  "Les associations de cartes et leurs significations croisées",
  "Historique illimité de vos tirages, synchronisé sur tous vos appareils",
];

export default function PaywallScreen() {
  const { user } = useAuth();
  const { offering, purchase, restore, isPremium } = useSubscription();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (isPremium) {
    return (
      <Screen>
        <View style={styles.centered}>
          <Ionicons name="checkmark-circle" size={56} color={colors.success} />
          <Text style={styles.title}>Vous êtes déjà Premium</Text>
          <Pressable style={styles.secondaryButton} onPress={() => router.back()}>
            <Text style={styles.secondaryButtonText}>Fermer</Text>
          </Pressable>
        </View>
      </Screen>
    );
  }

  if (!user) {
    return (
      <Screen>
        <View style={styles.centered}>
          <Ionicons name="lock-closed" size={48} color={colors.primary} />
          <Text style={styles.title}>Connectez-vous d'abord</Text>
          <Text style={styles.subtitle}>
            Un compte est nécessaire pour activer votre abonnement et le retrouver sur tous vos appareils.
          </Text>
          <Pressable style={styles.primaryButton} onPress={() => router.push("/auth/login")}>
            <Text style={styles.primaryButtonText}>Se connecter</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={() => router.push("/auth/signup")}>
            <Text style={styles.secondaryButtonText}>Créer un compte</Text>
          </Pressable>
        </View>
      </Screen>
    );
  }

  const handlePurchase = async (pkg: any) => {
    setError(null);
    setIsPurchasing(true);
    const { error: purchaseError } = await purchase(pkg);
    setIsPurchasing(false);
    if (purchaseError) {
      setError(purchaseError);
      return;
    }
    router.back();
  };

  return (
    <Screen>
      <Text style={styles.title}>Passez en Premium</Text>
      <Text style={styles.subtitle}>Débloquez l'intégralité de La Tarologia.</Text>

      <View style={styles.benefits}>
        {BENEFITS.map((benefit) => (
          <View key={benefit} style={styles.benefitRow}>
            <Ionicons name="sparkles" size={16} color={colors.gold} />
            <Text style={styles.benefitText}>{benefit}</Text>
          </View>
        ))}
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      {offering ? (
        offering.availablePackages.map((pkg) => (
          <Pressable
            key={pkg.identifier}
            style={styles.primaryButton}
            onPress={() => handlePurchase(pkg)}
            disabled={isPurchasing}
          >
            <Text style={styles.primaryButtonText}>
              {pkg.product.title} — {pkg.product.priceString}
            </Text>
          </Pressable>
        ))
      ) : (
        <Text style={styles.subtitle}>
          Les offres d'abonnement ne sont pas encore configurées. Renseignez vos clés RevenueCat dans app.json pour
          afficher les offres réelles de l'App Store.
        </Text>
      )}

      <Pressable style={styles.secondaryButton} onPress={restore}>
        <Text style={styles.secondaryButtonText}>Restaurer mes achats</Text>
      </Pressable>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.link}>Plus tard</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  centered: { alignItems: "center", gap: spacing.sm, paddingTop: spacing.xl },
  title: { color: colors.gold, fontSize: 24, fontWeight: "700", marginBottom: spacing.xs, textAlign: "center" },
  subtitle: { color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 20, textAlign: "center" },
  benefits: { gap: spacing.sm, marginBottom: spacing.lg },
  benefitRow: { flexDirection: "row", alignItems: "flex-start", gap: spacing.sm },
  benefitText: { color: colors.text, flex: 1, lineHeight: 20 },
  error: { color: colors.danger, marginBottom: spacing.sm, textAlign: "center" },
  primaryButton: {
    backgroundColor: colors.gold,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  primaryButtonText: { color: colors.background, fontWeight: "700" },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  secondaryButtonText: { color: colors.text, fontWeight: "600" },
  link: { color: colors.primary, textAlign: "center" },
});
