import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface PrimaryButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  bgColor?: string;
  textColor?: string;
  loading?: boolean;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onPress,
  bgColor = "#6200ee",
  textColor = "#ffffff",
  loading = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: bgColor },
        disabled || loading ? styles.disabledButton : {},
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  disabledButton: {
    backgroundColor: "#bdbdbd",
  },
});

export default PrimaryButton;
