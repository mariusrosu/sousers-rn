import { Image, Text, View } from "react-native";

import { User } from "../business/user";
import { useTheme } from "../resources/theme";

export function UserCard({ user }: { user: User }) {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: theme.card,
        borderRadius: 8,
        marginVertical: 6,
      }}
    >
      <ProfilePicture url={user.profileImageUrl} />
      <View style={{ marginHorizontal: 12 }}>
        <TitleText text={user.name} />
        <ReputationText reputation={user.reputation} />
      </View>
    </View>
  );
}

function ProfilePicture({ url }: { url: string }) {
  return (
    <Image
      source={{ uri: url }}
      style={{ width: 64, height: 64, borderRadius: 64 }}
    />
  );
}

function TitleText({ text }: { text: string }) {
  const textColor = useTheme().text;
  return (
    <Text style={{ fontSize: 18, fontWeight: "700", color: textColor }}>
      {text}
    </Text>
  );
}

function ReputationText({ reputation }: { reputation: number }) {
  const textColor = useTheme().text;
  return (
    <Text style={{ fontSize: 16, fontWeight: "500", color: textColor }}>
      Reputation: {reputation.toLocaleString()}
    </Text>
  );
}
