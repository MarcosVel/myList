import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Item({ item }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleMark(item) {
    console.log("handleMark", item);
    setIsSelected(!isSelected);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={() => handleMark(item)}
    >
      <Ionicons
        name={isSelected ? "checkmark-circle" : "radio-button-off"}
        size={24}
        color={isSelected ? COLORS.blue500 : COLORS.ciano}
      />
      <Text style={[styles.title, isSelected && styles.checked]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.black500,
    padding: 12,
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray500,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
  },
  checked: {
    textDecorationLine: "line-through",
    color: COLORS.gray300,
  },
});
