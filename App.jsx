import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Empty from "./src/assets/clipboard.png";
import Button from "./src/components/Button";
import Header from "./src/components/Header";
import Input from "./src/components/Input";
import Item from "./src/components/Item";
import { COLORS } from "./src/theme/colors";

export default function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function handleAddItem() {
    if (!task) {
      Platform.OS === "android"
        ? ToastAndroid.show(
            "Digite uma tarefa para adicionar",
            ToastAndroid.BOTTOM
          )
        : Alert.alert("Campo vazio", "Digite uma tarefa para adicionar");
      return;
    }

    if (list.includes(task)) {
      return Alert.alert("Tarefa já adicionada", "Digite outra tarefa");
    }

    setList((prevState) => [...prevState, task]);
    setTask("");
  }

  const renderEmptyList = () => (
    <View style={styles.empty}>
      <Image source={Empty} />
      <Text style={styles.emptyTitle}>Sua lista está vazia</Text>
      <Text style={styles.emptyDescription}>
        Adicione algo para se organizar
      </Text>
    </View>
  );

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.black500 }} />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <>
              <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.black500}
              />

              <Header />

              <View style={styles.add}>
                <Input
                  defaultValue={task}
                  onChangeText={(text) => setTask(text)}
                />
                <Button onPress={handleAddItem} />
              </View>

              <FlatList
                data={list}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item item={item} />}
                contentContainerStyle={{
                  paddingTop: 8,
                  paddingHorizontal: 24,
                  paddingBottom: 48,
                  flexDirection: "column-reverse",
                  gap: 8,
                }}
                windowSize={20}
                shouldItemUpdate={(prev, next) => prev.item !== next.item}
                ListEmptyComponent={renderEmptyList}
              />
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black900,
  },
  add: {
    marginTop: -27,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginHorizontal: 24,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
  },
  emptyTitle: {
    color: COLORS.gray300,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
  },
  emptyDescription: {
    color: COLORS.gray300,
    fontSize: 14,
  },
});
