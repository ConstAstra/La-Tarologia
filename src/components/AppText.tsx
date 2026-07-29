import React from "react";
import { Text as RNText, TextProps } from "react-native";
import { fonts } from "@/theme/colors";

// Remplace le <Text> natif partout dans l'app : porte Crimson Pro par défaut, pour ne
// pas avoir à répéter fontFamily dans chaque style. Les titres passent explicitement
// par fonts.heading (Gloock) dans leur propre style, qui prime car appliqué après.
export const AppText = React.forwardRef<RNText, TextProps>(({ style, ...rest }, ref) => (
  <RNText ref={ref} style={[{ fontFamily: fonts.body }, style]} {...rest} />
));
AppText.displayName = "AppText";
