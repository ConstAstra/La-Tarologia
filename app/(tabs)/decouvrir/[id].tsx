import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { Screen } from "@/components/Screen";
import { getArticleById } from "@/data/articles";
import { colors, fonts, spacing } from "@/theme/colors";
import { useSubscription } from "@/context/SubscriptionContext";

export default function ArticleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const { isPremium } = useSubscription();
  const article = getArticleById(id);

  useEffect(() => {
    if (article) navigation.setOptions({ title: article.title });
  }, [article, navigation]);

  if (!article) {
    return (
      <Screen>
        <Text style={styles.paragraph}>Cet article est introuvable.</Text>
      </Screen>
    );
  }

  if (!article.isFree && !isPremium) {
    router.replace("/paywall");
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
