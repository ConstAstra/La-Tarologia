import React from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";
import { fonts } from "@/theme/colors";

export const AppTextInput = React.forwardRef<RNTextInput, TextInputProps>(({ style, ...rest }, ref) => (
  <RNTextInput ref={ref} style={[{ fontFamily: fonts.body }, style]} {...rest} />
));
AppTextInput.displayName = "AppTextInput";
