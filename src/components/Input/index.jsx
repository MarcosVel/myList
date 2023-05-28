import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Input({ ...rest }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Adicione algo a sua lista"
      placeholderTextColor={COLORS.gray300}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: COLORS.gray700,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.black700,
    fontSize: 16,
    color: COLORS.white,
  },
});
