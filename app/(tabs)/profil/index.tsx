import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { colors, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { supabase } from "@/lib/supabase";
import { getCardById } from "@/data/cards";

interface DrawHistoryItem {
  id: string;
  spread_id: string;
  card_ids: string[];
  created_at: string;
}

export default function ProfilScreen() {
  const { user, signOut } = useAuth();
  const { isPremium, restore } = useSubscription();
  const [history, setHistory] = useState<DrawHistoryItem[]>([]);

  useEffect(() => {
    if (!user) {
      setHistory([]);
      return;
    }
    supabase
      .from("draws")
      .select("id, spread_id, card_ids, created_at")
      .order("created_at", { ascending: false })
      .limit(20)
      .then(({ data }) => setHistory(data ?? []));
  }, [user]);

  if (!user) {
    return (
      <Screen>
        <View style={styles.guestBox}>
          <Ionicons name="person-circle-outline" size={64} color={colors.primary} />
          <Text style={styles.guestTitle}>Créez votre compte</Text>
          <Text style={styles.guestText}>
            Connectez-vous pour retrouver l'historique de vos tirages sur tous vos appareils et gérer votre
            abonnement.
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

  return (
    <Screen>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={56} color={colors.primary} />
        <Text style={styles.email}>{user.email}</Text>
        <View style={[styles.statusBadge, { backgroundColor: isPremium ? colors.gold : colors.border }]}>
          <Text style={[styles.statusText, { color: isPremium ? colors.background : colors.textMuted }]}>
            {isPremium ? "Compte Premium" : "Compte gratuit"}
          </Text>
        </View>
      </View>

      {!isPremium && (
        <Pressable style={styles.primaryButton} onPress={() => router.push("/paywall")}>
          <Text style={styles.primaryButtonText}>Découvrir Premium</Text>
        </Pressable>
      )}

      <Pressable style={styles.secondaryButton} onPress={restore}>
        <Text style={styles.secondaryButtonText}>Restaurer mes achats</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Historique de vos tirages</Text>
      {history.length === 0 ? (
        <Text style={styles.emptyText}>Vos prochains tirages apparaîtront ici.</Text>
      ) : (
        history.map((item) => (
          <View key={item.id} style={styles.historyRow}>
            <Text style={styles.historyDate}>{new Date(item.created_at).toLocaleDateString("fr-FR")}</Text>
            <Text style={styles.historyCards}>
              {item.card_ids.map((id) => getCardById(id)?.name ?? id).join(", ")}
            </Text>
          </View>
        ))
      )}

      <Pressable style={styles.signOutButton} onPress={signOut}>
        <Text style={styles.signOutText}>Se déconnecter</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  guestBox: { alignItems: "center", gap: spacing.sm, paddingTop: spacing.xl, paddingHorizontal: spacing.md },
  guestTitle: { color: colors.text, fontSize: 20, fontWeight: "700", marginTop: spacing.sm },
  guestText: { color: colors.textMuted, textAlign: "center", marginBottom: spacing.md, lineHeight: 20 },
  header: { alignItems: "center", gap: spacing.xs, marginBottom: spacing.lg },
  email: { color: colors.text, fontSize: 16, fontWeight: "600" },
  statusBadge: { borderRadius: 12, paddingHorizontal: spacing.md, paddingVertical: 4, marginTop: spacing.xs },
  statusText: { fontSize: 12, fontWeight: "700" },
  primaryButton: {
    backgroundColor: colors.gold,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    marginBottom: spacing.sm,
    width: "100%",
  },
  primaryButtonText: { color: colors.background, fontWeight: "700", fontSize: 15 },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    marginBottom: spacing.lg,
    width: "100%",
  },
  secondaryButtonText: { color: colors.text, fontWeight: "600" },
  sectionTitle: { color: colors.primary, fontWeight: "700", fontSize: 14, marginBottom: spacing.sm, textTransform: "uppercase" },
  emptyText: { color: colors.textMuted, fontSize: 13 },
  historyRow: { backgroundColor: colors.card, borderRadius: 12, padding: spacing.sm, marginBottom: spacing.xs },
  historyDate: { color: colors.textMuted, fontSize: 11 },
  historyCards: { color: colors.text, fontSize: 13, marginTop: 2 },
  signOutButton: { marginTop: spacing.lg, alignItems: "center" },
  signOutText: { color: colors.danger, fontWeight: "600" },
});
