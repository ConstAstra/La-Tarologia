import React from "react";
import { ScrollView, StyleSheet, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { colors, spacing } from "@/theme/colors";

interface ScreenProps extends ViewProps {
  scroll?: boolean;
  children: React.ReactNode;
}

// Dégradé volontairement discret : il ne se remarque pas au premier regard, mais donne à
// chaque écran une profondeur et une chaleur qu'un simple aplat sombre n'aurait pas.
export function Screen({ scroll = true, style, children, ...rest }: ScreenProps) {
  const Container = scroll ? ScrollView : View;
  return (
    <LinearGradient
      colors={[colors.background, colors.backgroundAlt, colors.card]}
      locations={[0, 0.55, 1]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safe} edges={["top"]}>
        <Container
          style={scroll ? styles.scroll : [styles.flex, style]}
          contentContainerStyle={scroll ? styles.content : undefined}
          {...(rest as any)}
        >
          {children}
        </Container>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1 },
  flex: { flex: 1 },
  scroll: { flex: 1 },
  content: { padding: spacing.md, paddingBottom: spacing.xl * 2 },
});
