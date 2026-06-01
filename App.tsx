import React from "react";

import { StatusBar } from "expo-status-bar";
import { Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { UserCard } from "./uilibrary/UserCard";
import { Toolbar } from "./uilibrary/Toolbar";
import { LoadingIndicator } from "./uilibrary/LoadingIndicator";
import { useTheme } from "./resources/theme";
import { useTopUsers } from "./features/users/useTopUsers";
import { ErrorMessage } from "./uilibrary/ErrorMessage";

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
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
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
