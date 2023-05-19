import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Button from "./src/components/Button";
import Header from "./src/components/Header";
import Input from "./src/components/Input";
import { COLORS } from "./src/theme/colors";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar style="light" />

        <Header />

        <View style={styles.add}>
          <Input />
          <Button />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: COLORS.black900,
  },
  add: {
    marginTop: -27,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginHorizontal: 24,
  },
});
