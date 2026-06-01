import { useColorScheme } from "react-native";

const light = {
  bg: "#FFFFFBFE",
  card: "#f2f3f5",
  text: "#0b0b0c",
  textMuted: "#6b7177",
  accent: "#0xFFD0BCFF",
} as const;

const dark = {
  bg: "#0b0b0c",
  card: "#16181c",
  text: "#ffffff",
  textMuted: "#6b7177",
  accent: "#FF6650a4",
} as const;

export type Theme = {
  bg: string;
  card: string;
  text: string;
  textMuted: string;
  accent: string;
};

export function useTheme(): Theme {
  const colorSceheme = useColorScheme();
  return colorSceheme === "dark" ? dark : light;
}
