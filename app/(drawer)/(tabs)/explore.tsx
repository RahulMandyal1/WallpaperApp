import React, { useCallback } from "react";
import Container from "@/app/components/Container";
import { TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Wallpaper, wallpapers } from "@/data/wallpaper-data";
import { ListRenderItem, MasonryFlashList } from "@shopify/flash-list";

const columnGap = 10;

const Explore = () => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{ flex: 1, paddingBottom: 0 }}>
        <MasonryFlashList
          showsVerticalScrollIndicator={false}
          data={wallpapers}
          keyExtractor={(item) => item.id}
          renderItem={renderWallpaperItem}
          numColumns={2}
          estimatedItemSize={200}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Explore;
