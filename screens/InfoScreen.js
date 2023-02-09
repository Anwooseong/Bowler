import { StyleSheet, Text, View } from "react-native";

function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text>내정보화면</Text>
    </View>
  );
}

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopColor: "black",
    borderTopWidth: 1,
    backgroundColor: "white",
    flex: 1,
  },
});
