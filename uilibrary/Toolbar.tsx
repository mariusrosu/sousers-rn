import { View, Text } from "react-native";

import { strings } from "../resources/strings";
import { useTheme } from "../resources/theme";

export function Toolbar() {
  const theme = useTheme();
  return (
    <View
      style={{
        height: 56,
        justifyContent: "center",
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderColor: theme.card,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600", color: theme.text }}>
        {strings.toolbarTitle}
      </Text>
    </View>
  );
}
