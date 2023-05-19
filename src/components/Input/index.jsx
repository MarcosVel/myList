import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Input() {
  return (
    <TextInput
      style={styles.input}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={COLORS.gray300}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.gray700,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.black700,
    fontSize: 16,
    color: COLORS.white,
  },
});
