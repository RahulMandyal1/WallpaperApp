import React, { ReactNode } from "react";
import { StyleSheet, ViewProps } from "react-native";
import { ThemedView } from "@/components/ThemedView";

type ContainerProps = ViewProps & {
  children: ReactNode;
};
const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <ThemedView style={[styles.container, style]}>{children}</ThemedView>;
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default Container;
