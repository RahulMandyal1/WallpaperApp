import { Text, type TextProps, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  useFonts,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";
import { TEXT_VARIANTS } from "@/utils/textUtils";
import { TEXT_VARIANT } from "@/constants/Text";

interface ThemedTextProps extends TextProps {
  lightColor?: string;
  darkColor?: string;
  variant?: keyof typeof TEXT_VARIANTS;
}

export function ThemedText({
  style,
  lightColor,
  darkColor,
  variant = TEXT_VARIANT.DEFAULT,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  let [fontsLoaded] = useFonts({
    [TEXT_VARIANTS.defaultText.fontFamily]: Lato_400Regular,
    [TEXT_VARIANTS.regularItalicText.fontFamily]: Lato_400Regular_Italic,
    [TEXT_VARIANTS.semiBoldText.fontFamily]: Lato_700Bold,
    [TEXT_VARIANTS.semiBoldItalicText.fontFamily]: Lato_700Bold_Italic,
    [TEXT_VARIANTS.boldText.fontFamily]: Lato_900Black,
    [TEXT_VARIANTS.boldItalicText.fontFamily]: Lato_900Black_Italic,
  });

  if (!fontsLoaded) return null;

  const combinedStyle = StyleSheet.flatten([{ color }, TEXT_VARIANTS[variant]]);

  return <Text style={combinedStyle} {...rest} />;
}
