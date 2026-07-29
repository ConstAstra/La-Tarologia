import React from "react";
import { ScrollView, StyleSheet, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, spacing } from "@/theme/colors";

interface ScreenProps extends ViewProps {
  scroll?: boolean;
  children: React.ReactNode;
}

export function Screen({ scroll = true, style, children, ...rest }: ScreenProps) {
  const Container = scroll ? ScrollView : View;
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <Container
        style={scroll ? styles.scroll : [styles.flex, style]}
        contentContainerStyle={scroll ? styles.content : undefined}
        {...(rest as any)}
      >
        {children}
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  flex: { flex: 1 },
  scroll: { flex: 1 },
  content: { padding: spacing.md, paddingBottom: spacing.xl * 2 },
});
