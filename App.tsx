import React from "react";

import { StatusBar } from "expo-status-bar";
import { Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { UserCard } from "./uilibrary/UserCard";
import { Toolbar } from "./uilibrary/Toolbar";
import { useTheme } from "./resources/theme";
import { useTopUsers } from "./features/users/useTopUsers";

export default function App() {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
      <StatusBar style="auto" />
      <Toolbar />
      <UsersList />
    </SafeAreaView>
  );
}

function UsersList() {
  const theme = useTheme();
  const { users, isLoading, error } = useTopUsers();
  if (isLoading) {
    return <ActivityIndicator style={{ marginTop: 24 }} />;
  }
  if (error) {
    return (
      <Text style={{ color: theme.text, padding: 24 }}>
        Something went wrong: {error}
      </Text>
    );
  }
  return (
    <FlatList
      style={{ flex: 1 }}
      data={users}
      keyExtractor={(user) => String(user.id)}
      renderItem={({ item }) => <UserCard user={item} />}
    />
  );
}
