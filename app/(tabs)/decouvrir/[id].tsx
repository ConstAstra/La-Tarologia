import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router, useLocalSearchParams, useNavigation, useRootNavigationState } from "expo-router";
import { Screen } from "@/components/Screen";
import { useArticles } from "@/data/i18n";
import { colors, fonts, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";
import { useT } from "@/i18n/useT";

export default function ArticleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const navigationState = useRootNavigationState();
  const { isPremium } = useSubscription();
  const t = useT();
  const articles = useArticles();
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    if (article) navigation.setOptions({ title: article.title });
  }, [article, navigation]);

  useEffect(() => {
    if (navigationState?.key && article && !article.isFree && !isPremium) {
      router.replace("/paywall");
    }
  }, [navigationState?.key, article, isPremium]);

  if (!article) {
    return (
      <Screen>
        <Text style={styles.paragraph}>{t.decouvrir.notFound}</Text>
      </Screen>
    );
  }

  if (!article.isFree && !isPremium) {
    return null;
  }

  return (
    <Screen>
      <Text style={styles.title}>{article.title}</Text>
      {article.body.map((paragraph, i) => (
        <Text key={i} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.gold, fontSize: 24, fontFamily: fonts.heading, marginBottom: spacing.md },
  paragraph: { color: colors.text, fontSize: 15, lineHeight: 23, marginBottom: spacing.md },
});
