import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Profile({ name, average, win, lose }) {
  return (
    <View style={styles.container}>
      <Ionicons name="body" size={24} color="black" />
      <View>
        <Text>{name}</Text>
        <Text>AVG - {average}</Text>
        <Text>
          최근 전적 - {win}승 {lose}패(승률 {((win / 10) * 100).toFixed(2)}%)
        </Text>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingLeft: 16,
    flexDirection: "row",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 25,
    alignItems: "center",
    marginVertical:10,
  },
});
