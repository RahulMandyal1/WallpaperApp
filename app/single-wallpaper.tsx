import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const SingleWallpaper = () => {
  const image = {
    uri: "https://plus.unsplash.com/premium_photo-1728510320088-0b89856e726e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <ThemedView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ThemedText>Hello</ThemedText>
      </ImageBackground>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SingleWallpaper;
