import React, { useCallback } from "react";
import { Drawer } from "expo-router/drawer";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ListRenderItem,
} from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { MasonryFlashList } from "@shopify/flash-list";
import { Wallpaper, wallpapers } from "@/data/wallpaper-data";
import { ThemedText } from "@/components/ThemedText";
import MonthlyShowcase from "@/app/components/MonthlyShowcase";
import CategoriesList from "@/app/components/CategoriesList";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "Home",
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <MonthlyShowcase />
        <CategoriesList />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  row: {
    marginBottom: 20,
    gap: 10,
  },
  wallpaperTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
});
