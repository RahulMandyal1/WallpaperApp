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

const columnGap = 10;

export default function HomeScreen() {
  const renderWallpaperItem: ListRenderItem<Wallpaper> = useCallback(
    ({ item, index }) => {
      const imageHeight = Math.floor(Math.random() * 100) + 180;
      const isLeftColumn = index % 2 === 0;

      return (
        <TouchableOpacity>
          <Image
            source={{ uri: item.url }}
            style={[
              {
                height: imageHeight,
                width: "100%",
                borderRadius: 10,
                marginLeft: isLeftColumn ? 0 : columnGap,
                marginRight: isLeftColumn ? columnGap : 0,
                marginBottom: 10,
              },
            ]}
          />
        </TouchableOpacity>
      );
    },
    []
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
        <MasonryFlashList
          showsVerticalScrollIndicator={false}
          data={wallpapers}
          keyExtractor={(item) => item.id}
          renderItem={renderWallpaperItem}
          numColumns={2}
          estimatedItemSize={200}
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
  wallpaperTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
});
