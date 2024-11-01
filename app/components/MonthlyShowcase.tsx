import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TEXT_VARIANT } from "@/constants/Text";
import { FlashList } from "@shopify/flash-list";

const MonthlyShowcase = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulated data loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay as needed
  }, []);

  const data = [
    { id: 1, title: "Top Pick 1", color: "#FF6B6B" },
    { id: 2, title: "Top Pick 2", color: "#FFD93D" },
    { id: 3, title: "Top Pick 3", color: "#6BCB77" },
    { id: 4, title: "Top Pick 4", color: "#4D96FF" },
    { id: 5, title: "Top Pick 5", color: "#9A348E" },
    { id: 6, title: "Top Pick 6", color: "#F9A826" },
  ];

  const renderItem = ({ item }) => {
    return (
      <ThemedView
        style={{
          height: 200,
          width: 150,
          backgroundColor: item.color,
          borderRadius: 16,
          margin: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThemedText style={{ color: "white" }}>{item.title}</ThemedText>
      </ThemedView>
    );
  };

  const renderSkeletonItem = () => {
    return (
      <ThemedView
        style={[
          styles.skeleton,
          {
            height: 200,
            width: 150,
            borderRadius: 16,
            margin: 8,
          },
        ]}
      />
    );
  };

  return (
    <ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText variant={TEXT_VARIANT.BOLD} fontSize={32}>
          Best of the month
        </ThemedText>
      </ThemedView>

      <FlashList
        data={isLoading ? Array.from({ length: 6 }) : data}
        renderItem={isLoading ? renderSkeletonItem : renderItem}
        estimatedItemSize={200}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: 8,
  },
  skeleton: {
    backgroundColor: "#E0E0E0",
    opacity: 0.6,
  },
});

export default MonthlyShowcase;
