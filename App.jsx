import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Empty from "./src/assets/clipboard.png";
import Button from "./src/components/Button";
import Header from "./src/components/Header";
import Input from "./src/components/Input";
import { COLORS } from "./src/theme/colors";

export default function App() {
  const lista = [
    {
      title: "Item 1",
    },
    {
      title: "Item 2",
    },
    {
      title: "Item 3",
    },
    {
      title: "Item 4",
    },
    {
      title: "Item 5",
    },
    {
      title: "Item 6",
    },
    {
      title: "Item 7",
    },
    {
      title: "Item 8",
    },
    {
      title: "Item 9",
    },
    {
      title: "Item 10",
    },
    {
      title: "Item 11",
    },
    {
      title: "Item 12",
    },
    {
      title: "Item 13",
    },
    {
      title: "Item 14",
    },
    {
      title: "Item 15",
    },
    {
      title: "Item 16",
    },
    {
      title: "Item 17",
    },
    {
      title: "Item 18",
    },
    {
      title: "Item 19",
    },
    {
      title: "Item 20",
    },
    {
      title: "Item 21",
    },
    {
      title: "Item 22",
    },
    {
      title: "Item 23",
    },
    {
      title: "Item 24",
    },
    {
      title: "Item 25",
    },
    {
      title: "Item 26",
    },
    {
      title: "Item 27",
    },
    {
      title: "Item 28",
    },
    {
      title: "Item 29",
    },
    {
      title: "Item 30",
    },
    {
      title: "Item 31",
    },
    {
      title: "Item 32",
    },
    {
      title: "Item 33",
    },
    {
      title: "Item 34",
    },
    {
      title: "Item 35",
    },
    {
      title: "Item 36",
    },
    {
      title: "Item 37",
    },
    {
      title: "Item 38",
    },
    {
      title: "Item 39",
    },
    {
      title: "Item 40",
    },
    {
      title: "Item 41",
    },
    {
      title: "Item 42",
    },
    {
      title: "Item 43",
    },
    {
      title: "Item 44",
    },
    {
      title: "Item 45",
    },
    {
      title: "Item 46",
    },
    {
      title: "Item 47",
    },
    {
      title: "Item 48",
    },
    {
      title: "Item 49",
    },
    {
      title: "Item 50",
    },
    {
      title: "Item 51",
    },
    {
      title: "Item 52",
    },
    {
      title: "Item 53",
    },
    {
      title: "Item 54",
    },
    {
      title: "Item 55",
    },
    {
      title: "Item 56",
    },
    {
      title: "Item 57",
    },
    {
      title: "Item 58",
    },
    {
      title: "Item 59",
    },
    {
      title: "Item 60",
    },
  ];
  const list = [];

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
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <StatusBar style="light" />

          <Header />

          <View style={styles.add}>
            <Input />
            <Button />
          </View>

          <FlatList
            data={list}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: COLORS.black500,
                  padding: 16,
                }}
              >
                <Text style={{ color: COLORS.white }}>{index} </Text>
                <Text style={{ color: COLORS.white }}>{item.title}</Text>
              </View>
            )}
            contentContainerStyle={{
              paddingTop: 8,
              paddingHorizontal: 24,
              paddingBottom: 48,
            }}
            windowSize={20}
            shouldItemUpdate={(prev, next) => prev.item !== next.item}
            ListEmptyComponent={renderEmptyList}
          />
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
