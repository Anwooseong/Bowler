import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function CreateMatchRoom() {
  return (
    <View style={styles.container}>
      <Text>매칭방 개설하기</Text>
      <AntDesign name="plus" size={24} color="black" />
    </View>
  );
}

export default CreateMatchRoom;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 4,
    marginVertical: 25,
    marginHorizontal:25,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
