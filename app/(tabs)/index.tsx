import React from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ListRenderItem,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Define the wallpaper item type
interface Wallpaper {
  id: string;
  url: string;
  title: string;
}

const wallpapers: Wallpaper[] = [
  {
    id: "1",
    url: "https://plus.unsplash.com/premium_photo-1728510320088-0b89856e726e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wallpaper 1",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wallpaper 2",
  },
];

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  // Type the item as Wallpaper
  const renderWallpaperItem: ListRenderItem<Wallpaper> = ({ item }) => (
    <TouchableOpacity style={styles.wallpaperContainer}>
      <Image
        source={{ uri: item.url }}
        style={styles.wallpaper}
        width={100}
        height={100}
      />
      <Text style={styles.wallpaperTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Browse Wallpapers</Text>
        <FlatList
          data={wallpapers}
          keyExtractor={(item) => item.id}
          renderItem={renderWallpaperItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  row: {
    justifyContent: "space-between",
  },
  wallpaperContainer: {
    marginBottom: 20,
    width: (width - 30) / 2,
  },
  wallpaper: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  wallpaperTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
});
``;
