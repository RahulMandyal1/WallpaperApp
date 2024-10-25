import React from "react";
import { Drawer } from "expo-router/drawer";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ListRenderItem,
} from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";

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
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wallpaper 3",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wallpaper 4",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wallpaper 5",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wallpaper 5",
  },

  {
    id: "7",
    url: "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wallpaper 5",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wallpaper 5",
  },
];

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  // Type the item as Wallpaper
  const renderWallpaperItem: ListRenderItem<Wallpaper> = ({ item }) => (
    <TouchableOpacity style={styles.wallpaperContainer}>
      <Image source={{ uri: item.url }} style={styles.wallpaper} />
    </TouchableOpacity>
  );

  return (
    <>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "Home",
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <View style={styles.container}>
        <FlatList
          data={wallpapers}
          keyExtractor={(item) => item.id}
          renderItem={renderWallpaperItem}
          numColumns={3}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
  wallpaperContainer: {
    width: (width - 40) / 2, //
  },
  wallpaper: {
    height: 150,
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
