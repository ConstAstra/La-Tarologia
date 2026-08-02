import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/Screen";
import { colors, fonts, spacing } from "@/theme/colors";
import { useAuth } from "@/context/AuthContext";
import { useT } from "@/i18n/useT";
import { useCards } from "@/data/i18n";
import { useSpreads } from "@/data/i18n";
import { supabase } from "@/lib/supabase";
import { iconForCard } from "@/lib/suitIcon";

interface DrawRecord {
  id: string;
  spread_id: string;
  card_ids: string[];
  reversed: boolean[];
  created_at: string;
}

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleDateString(locale === "fr" ? "fr-FR" : locale === "es" ? "es-ES" : "en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function HistoriqueScreen() {
  const { user } = useAuth();
  const t = useT();
  const cards = useCards();
  const spreads = useSpreads();
  const [draws, setDraws] = useState<DrawRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    supabase
      .from("draws")
      .select("id, spread_id, card_ids, reversed, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(100)
      .then(({ data }) => {
        setDraws((data as DrawRecord[]) ?? []);
        setLoading(false);
      });
  }, [user]);

  const cardsById = new Map(cards.map((c) => [c.id, c]));
  const spreadsById = new Map(spreads.map((s) => [s.id, s]));

  if (!user) {
    return (
      <Screen>
        <View style={styles.empty}>
          <Ionicons name="person-circle-outline" size={48} color={colors.primary} />
          <Text style={styles.emptyText}>{t.profil.guestTitle}</Text>
        </View>
      </Screen>
    );
  }

  if (loading) {
    return (
      <Screen>
        <Text style={styles.emptyText}>{t.accueil.loading}</Text>
      </Screen>
    );
  }

  if (draws.length === 0) {
    return (
      <Screen>
        <View style={styles.empty}>
          <Ionicons name="albums-outline" size={48} color={colors.primary} />
          <Text style={styles.emptyText}>{t.historique.empty}</Text>
        </View>
      </Screen>
    );
  }

  // Group by day
  const groups: { dateKey: string; label: string; items: DrawRecord[] }[] = [];
  for (const draw of draws) {
    const dateKey = draw.created_at.slice(0, 10);
    const existing = groups.find((g) => g.dateKey === dateKey);
    if (existing) {
      existing.items.push(draw);
    } else {
      groups.push({ dateKey, label: formatDate(draw.created_at, "fr"), items: [draw] });
    }
  }

  return (
    <Screen>
      {groups.map((group) => (
        <View key={group.dateKey} style={styles.group}>
          <Text style={styles.groupDate}>{group.label}</Text>
          {group.items.map((draw) => {
            const spread = spreadsById.get(draw.spread_id);
            return (
              <View key={draw.id} style={styles.drawCard}>
                <Text style={styles.spreadName}>
                  {spread?.name ?? t.historique.spreadUnknown}
                </Text>
                <View style={styles.cardList}>
                  {draw.card_ids.map((cardId, i) => {
                    const card = cardsById.get(cardId);
                    const rev = draw.reversed?.[i] ?? false;
                    const icon = card ? iconForCard(card) : "help-circle-outline";
                    return (
                      <View key={`${draw.id}-${i}`} style={styles.cardChip}>
                        <Ionicons name={icon as any} size={13} color={rev ? colors.accentDeep : colors.primary} />
                        <Text style={[styles.cardName, rev && styles.cardNameRev]}>
                          {card?.name ?? cardId}
                          {rev ? ` (${t.historique.reversed})` : ""}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  empty: { alignItems: "center", gap: spacing.md, paddingTop: spacing.xl },
  emptyText: { color: colors.textMuted, textAlign: "center", lineHeight: 20 },
  group: { marginBottom: spacing.lg },
  groupDate: {
    color: colors.gold,
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: spacing.sm,
  },
  drawCard: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  spreadName: {
    color: colors.primary,
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
  },
  cardList: { gap: 6 },
  cardChip: { flexDirection: "row", alignItems: "center", gap: 6 },
  cardName: { color: colors.text, fontSize: 14, fontFamily: fonts.body },
  cardNameRev: { color: colors.accentDeep, fontFamily: fonts.bodyItalic },
});
