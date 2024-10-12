import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Download = () => {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>This is the downlaod screen</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Download;
