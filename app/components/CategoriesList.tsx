import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TEXT_VARIANT } from "@/constants/Text";
import { FlashList } from "@shopify/flash-list";
import Container from "./Container";

const categories = [
  { name: "Murals", image: "" },
  { name: "Paintings", image: "" },
  { name: "Digital Art", image: "" },
  { name: "Ramayana", image: "" },
  { name: "Veer Hanuman", image: "" },
  { name: "Blessings", image: "" },
  { name: "Meditation", image: "" },
  { name: "Battle", image: "" },
  { name: "Bala Hanuman", image: "" },
];

const CategoriesList = () => {
  const screenWidth = Dimensions.get("window").width;
  const columnGap = 10;
  const itemWidth = (screenWidth - columnGap * 3) / 2; // Adjusts for two items per row with gaps

  return (
    <Container>
      <ThemedView style={styles.titleContainer}>
        <ThemedText variant={TEXT_VARIANT.BOLD} fontSize={32}>
          Categories
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.grid}>
        {categories.map((item, index) => (
          <ThemedView
            key={index}
            style={[
              styles.itemContainer,
              {
                width: itemWidth,
                marginRight: index % 2 === 0 ? columnGap : 0,
              },
            ]}
          >
            <ThemedText variant={TEXT_VARIANT.BOLD} style={styles.categoryText}>
              {item.name}
            </ThemedText>
          </ThemedView>
        ))}
      </ThemedView>
    </Container>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  itemContainer: {
    borderRadius: 12,
    position: "relative",
    height: 80,
    backgroundColor: "#E0E0E0",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  categoryText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CategoriesList;
