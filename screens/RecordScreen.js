import { StyleSheet, Text, View } from "react-native";
import RecordList from "../components/RecordComponents/RecordList";
import { recordMatchList } from "../util/data";

function RecordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>경기 기록</Text>
      <RecordList recordMatchList={recordMatchList} />
    </View>
  );
}

export default RecordScreen;

const styles = StyleSheet.create({
  text: {
    color: "brown",
    fontWeight: "bold",
    fontSize: 30,
    margin: 10,
  },
  container: {
    backgroundColor: "white",
    borderTopColor: "black",
    borderTopWidth: 1,
    backgroundColor: "white",
    flex: 1,
  },
});
