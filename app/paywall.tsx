import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { colors, fonts, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { useT } from "@/i18n/useT";

export default function PaywallScreen() {
  const { user } = useAuth();
  const { offering, purchase, restore, isPremium } = useSubscription();
  const t = useT();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (isPremium) {
    return (
      <Screen>
        <View style={styles.centered}>
          <Ionicons name="checkmark-circle" size={56} color={colors.success} />
          <Text style={styles.title}>{t.paywall.alreadyPremiumTitle}</Text>
          <Pressable style={styles.secondaryButton} onPress={() => router.back()}>
            <Text style={styles.secondaryButtonText}>{t.paywall.close}</Text>
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
          <Text style={styles.title}>{t.paywall.loginFirstTitle}</Text>
          <Text style={styles.subtitle}>{t.paywall.loginFirstText}</Text>
          <Pressable style={styles.primaryButton} onPress={() => router.push("/auth/login")}>
            <Text style={styles.primaryButtonText}>{t.profil.login}</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={() => router.push("/auth/signup")}>
            <Text style={styles.secondaryButtonText}>{t.profil.signup}</Text>
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
      <Text style={styles.title}>{t.paywall.title}</Text>
      <Text style={styles.subtitle}>{t.paywall.subtitle}</Text>

      <View style={styles.benefits}>
        {t.paywall.benefits.map((benefit) => (
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
        <Text style={styles.subtitle}>{t.paywall.notConfigured}</Text>
      )}

      <Text style={styles.disclosure}>{t.paywall.disclosure}</Text>

      <View style={styles.legalLinks}>
        <Pressable onPress={() => router.push("/legal/terms")}>
          <Text style={styles.legalLink}>{t.profil.terms}</Text>
        </Pressable>
        <Text style={styles.legalSeparator}>·</Text>
        <Pressable onPress={() => router.push("/legal/privacy")}>
          <Text style={styles.legalLink}>{t.profil.privacy}</Text>
        </Pressable>
      </View>

      <Pressable style={styles.secondaryButton} onPress={restore}>
        <Text style={styles.secondaryButtonText}>{t.paywall.restorePurchases}</Text>
      </Pressable>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.link}>{t.paywall.later}</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  centered: { alignItems: "center", gap: spacing.sm, paddingTop: spacing.xl },
  title: { color: colors.gold, fontSize: 26, fontFamily: fonts.heading, marginBottom: spacing.xs, textAlign: "center" },
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
  primaryButtonText: { color: colors.background, fontFamily: fonts.bodyBold },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  secondaryButtonText: { color: colors.text, fontFamily: fonts.bodySemiBold },
  link: { color: colors.primary, textAlign: "center" },
  disclosure: { color: colors.textMuted, fontSize: 11, lineHeight: 15, textAlign: "center", marginTop: spacing.sm },
  legalLinks: { flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 6, marginTop: spacing.sm },
  legalLink: { color: colors.primary, fontSize: 12 },
  legalSeparator: { color: colors.textMuted, fontSize: 12 },
});
