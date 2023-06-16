import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { COLORS } from "../../theme/colors";

export default function Item({ item, selected, remove }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleMark(item) {
    selected(item);
    setIsSelected(!isSelected);
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        containerStyle={{ paddingHorizontal: 24, justifyContent: "center" }}
        overshootRight={false}
        renderRightActions={() => (
          <RectButton style={styles.remove} onPress={() => remove(item)}>
            <Feather name="trash" size={20} color="white" />
          </RectButton>
        )}
      >
        <RectButton
          style={styles.container}
          activeOpacity={0.6}
          onPress={() => handleMark(item)}
        >
          <View accessible accessibilityRole="button">
            <Ionicons
              name={isSelected ? "checkmark-circle" : "radio-button-off"}
              size={24}
              color={isSelected ? COLORS.blue500 : COLORS.ciano}
            />
          </View>
          <Text style={[styles.title, isSelected && styles.checked]}>
            {item}
          </Text>
        </RectButton>
      </Swipeable>
    </GestureHandlerRootView>
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
  remove: {
    backgroundColor: COLORS.red,
    height: "96%",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 8,
    marginVertical: 1,
    right: -40,
    paddingLeft: 32,
    paddingRight: 17,
  },
});
