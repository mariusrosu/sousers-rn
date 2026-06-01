import { Text } from "react-native";
import { useTheme } from "../resources/theme";

export function ErrorMessage({ error }: { error: string }) {
  const theme = useTheme();
  return (
    <Text style={{ color: theme.text, padding: 24 }}>
      Something went wrong: {error}
    </Text>
  );
}
