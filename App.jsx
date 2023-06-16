import "react-native-gesture-handler";
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
  const [selectedTasks, setSelectedTasks] = useState([]);

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

  function handleCheck(item) {
    if (selectedTasks.includes(item)) {
      return setSelectedTasks((prevState) =>
        prevState.filter((taskSelected) => taskSelected !== item)
      );
    }

    setSelectedTasks((prevState) => [...prevState, item]);
  }

  function handleDeletion(item) {
    Alert.alert(
      "Remover Tarefa",
      `Deseja realmente remover essa tarefa?\n"${item}"`,
      [
        {
          text: "Sim",
          onPress: () => {
            setList((prevState) => prevState.filter((tasks) => tasks !== item)),
              setSelectedTasks((prevState) =>
                prevState.filter((tasksSelected) => tasksSelected !== item)
              );
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
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

              <View style={styles.info}>
                <View style={styles.type}>
                  <Text style={styles.created}>Criadas</Text>
                  <View style={styles.quantity}>
                    <Text style={styles.qtdNumber}>{list.length}</Text>
                  </View>
                </View>

                <View style={styles.type}>
                  <Text style={[styles.created, { color: COLORS.blue500 }]}>
                    Concluídas
                  </Text>
                  <View style={styles.quantity}>
                    <Text style={styles.qtdNumber}>{selectedTasks.length}</Text>
                  </View>
                </View>
              </View>

              <FlatList
                data={list}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <Item
                    item={item}
                    selected={handleCheck}
                    remove={handleDeletion}
                  />
                )}
                contentContainerStyle={{
                  paddingTop: 8,
                  // paddingHorizontal: 24,
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
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
    marginHorizontal: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray500,
  },
  created: {
    color: COLORS.ciano,
    fontWeight: "bold",
  },
  type: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray500,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 99,
    marginLeft: 8,
  },
  qtdNumber: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "bold",
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
