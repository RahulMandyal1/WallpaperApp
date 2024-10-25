import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { StyleSheet } from "react-native";

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

      <ThemedView style={styles.container}></ThemedView>
    </>
  );
};

export default Download;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
});
