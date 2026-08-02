import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View, Platform } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { colors, fonts, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { useLocale } from "@/context/LocaleContext";
import { LOCALES } from "@/i18n/locales";
import { useT } from "@/i18n/useT";
import { supabase } from "@/lib/supabase";
import { useCards } from "@/data/i18n";
import {
  cancelDailyReminder,
  getNotificationPrefs,
  requestNotificationPermission,
  scheduleDailyReminder,
} from "@/lib/notifications";

interface DrawHistoryItem {
  id: string;
  spread_id: string;
  card_ids: string[];
  created_at: string;
}

type NotifHour = 8 | 12 | 20;

function LanguagePicker() {
  const { locale, setLocale } = useLocale();
  const t = useT();
  return (
    <View style={styles.languageBlock}>
      <Text style={styles.sectionTitle}>{t.profil.language}</Text>
      <View style={styles.languageRow}>
        {LOCALES.map((l) => (
          <Pressable
            key={l.code}
            style={[styles.languageChip, locale === l.code && styles.languageChipActive]}
            onPress={() => setLocale(l.code)}
          >
            <Text style={[styles.languageChipText, locale === l.code && styles.languageChipTextActive]}>
              {l.nativeLabel}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function NotificationBlock() {
  const t = useT();
  const [enabled, setEnabled] = useState(false);
  const [hour, setHour] = useState<NotifHour>(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotificationPrefs().then((prefs) => {
      setEnabled(prefs.enabled);
      setHour(prefs.hour as NotifHour);
      setLoading(false);
    });
  }, []);

  if (Platform.OS === "web" || loading) return null;

  const toggle = async () => {
    if (enabled) {
      await cancelDailyReminder();
      setEnabled(false);
    } else {
      const granted = await requestNotificationPermission();
      if (granted) {
        await scheduleDailyReminder(hour, 0);
        setEnabled(true);
      }
    }
  };

  const setTime = async (h: NotifHour) => {
    setHour(h);
    if (enabled) await scheduleDailyReminder(h, 0);
  };

  const timeLabels: Record<NotifHour, string> = {
    8: t.profil.notifTimeMorning,
    12: t.profil.notifTimeMidday,
    20: t.profil.notifTimeEvening,
  };

  return (
    <View style={styles.notifBlock}>
      <View style={styles.notifHeader}>
        <Text style={styles.sectionTitle}>{t.profil.notifications}</Text>
        <Pressable style={[styles.togglePill, enabled && styles.togglePillOn]} onPress={toggle}>
          <Text style={[styles.toggleText, enabled && styles.toggleTextOn]}>
            {enabled ? t.profil.notifEnabled : t.profil.notifDisabled}
          </Text>
        </Pressable>
      </View>
      {enabled && (
        <View style={styles.timeRow}>
          {([8, 12, 20] as NotifHour[]).map((h) => (
            <Pressable
              key={h}
              style={[styles.timeChip, h === hour && styles.timeChipActive]}
              onPress={() => setTime(h)}
            >
              <Text style={[styles.timeChipText, h === hour && styles.timeChipTextActive]}>
                {timeLabels[h]}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

export default function ProfilScreen() {
  const { user, signOut } = useAuth();
  const { isPremium, restore } = useSubscription();
  const t = useT();
  const cards = useCards();
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
      .limit(5)
      .then(({ data }) => setHistory(data ?? []));
  }, [user]);

  if (!user) {
    return (
      <Screen>
        <View style={styles.guestBox}>
          <Ionicons name="person-circle-outline" size={64} color={colors.primary} />
          <Text style={styles.guestTitle}>{t.profil.guestTitle}</Text>
          <Text style={styles.guestText}>{t.profil.guestText}</Text>
          <Pressable style={styles.primaryButton} onPress={() => router.push("/auth/login")}>
            <Text style={styles.primaryButtonText}>{t.profil.login}</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={() => router.push("/auth/signup")}>
            <Text style={styles.secondaryButtonText}>{t.profil.signup}</Text>
          </Pressable>
          <LanguagePicker />
          <View style={styles.legalLinks}>
            <Pressable onPress={() => router.push("/legal/terms")}>
              <Text style={styles.legalLink}>{t.profil.terms}</Text>
            </Pressable>
            <Text style={styles.legalSeparator}>·</Text>
            <Pressable onPress={() => router.push("/legal/privacy")}>
              <Text style={styles.legalLink}>{t.profil.privacy}</Text>
            </Pressable>
          </View>
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
            {isPremium ? t.profil.premiumAccount : t.profil.freeAccount}
          </Text>
        </View>
      </View>

      {!isPremium && (
        <Pressable style={styles.primaryButton} onPress={() => router.push("/paywall")}>
          <Text style={styles.primaryButtonText}>{t.profil.discoverPremium}</Text>
        </Pressable>
      )}

      <Pressable style={styles.secondaryButton} onPress={restore}>
        <Text style={styles.secondaryButtonText}>{t.profil.restorePurchases}</Text>
      </Pressable>

      <LanguagePicker />

      <NotificationBlock />

      <View style={styles.historyHeader}>
        <Text style={styles.sectionTitle}>{t.profil.historyTitle}</Text>
        <Pressable onPress={() => router.push("/(tabs)/profil/historique")}>
          <Text style={styles.historyViewAll}>{t.profil.historyViewAll}</Text>
        </Pressable>
      </View>
      {history.length === 0 ? (
        <Text style={styles.emptyText}>{t.profil.historyEmpty}</Text>
      ) : (
        history.map((item) => (
          <View key={item.id} style={styles.historyRow}>
            <Text style={styles.historyDate}>{new Date(item.created_at).toLocaleDateString()}</Text>
            <Text style={styles.historyCards}>
              {item.card_ids.map((id) => cards.find((c) => c.id === id)?.name ?? id).join(", ")}
            </Text>
          </View>
        ))
      )}

      <Pressable style={styles.signOutButton} onPress={signOut}>
        <Text style={styles.signOutText}>{t.profil.signOut}</Text>
      </Pressable>

      <View style={styles.legalLinks}>
        <Pressable onPress={() => router.push("/legal/terms")}>
          <Text style={styles.legalLink}>{t.profil.terms}</Text>
        </Pressable>
        <Text style={styles.legalSeparator}>·</Text>
        <Pressable onPress={() => router.push("/legal/privacy")}>
          <Text style={styles.legalLink}>{t.profil.privacy}</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  guestBox: { alignItems: "center", gap: spacing.sm, paddingTop: spacing.xl, paddingHorizontal: spacing.md },
  guestTitle: { color: colors.text, fontSize: 21, fontFamily: fonts.heading, marginTop: spacing.sm },
  guestText: { color: colors.textMuted, textAlign: "center", marginBottom: spacing.md, lineHeight: 20 },
  header: { alignItems: "center", gap: spacing.xs, marginBottom: spacing.lg },
  email: { color: colors.text, fontSize: 16, fontFamily: fonts.bodySemiBold },
  statusBadge: { borderRadius: 12, paddingHorizontal: spacing.md, paddingVertical: 4, marginTop: spacing.xs },
  statusText: { fontSize: 12, fontFamily: fonts.bodyBold },
  primaryButton: {
    backgroundColor: colors.gold,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    marginBottom: spacing.sm,
    width: "100%",
  },
  primaryButtonText: { color: colors.background, fontFamily: fonts.bodyBold, fontSize: 15 },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingVertical: spacing.sm + 2,
    alignItems: "center",
    marginBottom: spacing.lg,
    width: "100%",
  },
  secondaryButtonText: { color: colors.text, fontFamily: fonts.bodySemiBold },
  sectionTitle: { color: colors.primary, fontFamily: fonts.bodyBold, fontSize: 14, marginBottom: spacing.sm, textTransform: "uppercase" },
  emptyText: { color: colors.textMuted, fontSize: 13 },
  historyRow: { backgroundColor: colors.card, borderRadius: 12, padding: spacing.sm, marginBottom: spacing.xs },
  historyDate: { color: colors.textMuted, fontSize: 11 },
  historyCards: { color: colors.text, fontSize: 13, marginTop: 2 },
  signOutButton: { marginTop: spacing.lg, alignItems: "center" },
  signOutText: { color: colors.danger, fontFamily: fonts.bodySemiBold },
  legalLinks: { flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 6, marginTop: spacing.lg },
  legalLink: { color: colors.primary, fontSize: 12 },
  legalSeparator: { color: colors.textMuted, fontSize: 12 },
  languageBlock: { width: "100%", marginBottom: spacing.lg },
  languageRow: { flexDirection: "row", gap: spacing.sm },
  languageChip: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  languageChipActive: { backgroundColor: colors.gold, borderColor: colors.gold },
  languageChipText: { color: colors.textMuted, fontSize: 13, fontFamily: fonts.bodySemiBold },
  languageChipTextActive: { color: colors.background },
  notifBlock: { width: "100%", marginBottom: spacing.lg },
  notifHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: spacing.sm },
  togglePill: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  togglePillOn: { backgroundColor: colors.gold, borderColor: colors.gold },
  toggleText: { color: colors.textMuted, fontSize: 12, fontFamily: fonts.bodySemiBold },
  toggleTextOn: { color: colors.background },
  timeRow: { flexDirection: "row", gap: spacing.sm },
  timeChip: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  timeChipActive: { backgroundColor: colors.cardAlt, borderColor: colors.primary },
  timeChipText: { color: colors.textMuted, fontSize: 11, fontFamily: fonts.bodySemiBold },
  timeChipTextActive: { color: colors.primary },
  historyHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: spacing.sm },
  historyViewAll: { color: colors.primary, fontSize: 12, fontFamily: fonts.bodySemiBold },
});
