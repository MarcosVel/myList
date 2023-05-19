import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 170,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black500,
  },
});
