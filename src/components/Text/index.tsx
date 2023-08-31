import { PropsWithChildren } from "react";
import { Text as TX } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { base } from "../../themes/base";

type TextSize = "sm" | "md" | "lg";
type TextVariant = "white" | "black" | "blue" | "purple" | "danger" | "gray";
type VariantWeight = "100" | "200" | "300" | "400" | "500" | "600" | "700";

interface TextProps extends PropsWithChildren {
  size?: TextSize;
  variant?: TextVariant;
  variantWeight?: VariantWeight;
  weight?: "400" | "bold";
}

export function Text({
  children,
  size = "md",
  variant = "white",
  variantWeight = "500",
  weight = "400",
}: TextProps) {
  const [fontLoaded, fontError] = useFonts({
    Inter_400Regular,
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  const color = base.colors[variant][variantWeight];

  return (
    <TX
      style={{
        fontFamily: "Inter_400Regular",
        fontSize: base.sizes[size],
        fontWeight: weight,
        color,
      }}
    >
      {children}
    </TX>
  );
}
