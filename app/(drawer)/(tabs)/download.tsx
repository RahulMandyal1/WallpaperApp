import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TEXT_VARIANT } from "@/constants/Text";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Download = () => {
  return (
    <>
      <Drawer.Screen
        options={{
          headerShown: false,
          headerTitle: "Home",
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <ThemedText variant={TEXT_VARIANT.BOLD}>
            Work is in progress
          </ThemedText>
        </ThemedView>
      </SafeAreaView>
    </>
  );
};

export default Download;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
