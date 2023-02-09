import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function NextMatchItem({
  id,
  date,
  matchType,
  user,
  opponent,
  userProfile,
  opponentProfile,
}) {
  const navigation = useNavigation();

  function matchPlanPressHanler() {
    navigation.navigate("MatchPlan", {
      matchId: id,
    });
  }

  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={matchPlanPressHanler}>
      <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.type}>{matchType}</Text>
        <View style={styles.matchBadge}>
          <View style={styles.match}>
            <Text style={styles.matchTeam}>{user}</Text>
            <Ionicons name={userProfile} size={24} color="color" />
          </View>
          <Text style={styles.matchTeam}>vs</Text>
          <View style={styles.match}>
            <Text style={styles.matchTeam}>{opponent}</Text>
            <Ionicons name={opponentProfile} size={24} color="color" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    width: Dimensions.get("window").width - 100,
    marginLeft: 50,
    marginRight: 50,
    height: 170,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  date: {
    color: "blue",
    fontWeight: "bold",
  },
  type: {
    color: "grey",
    fontWeight: "bold",
    marginBottom: 24,
  },
  matchBadge: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  match: {
    justifyContent: "center",
    alignItems: "center",
  },
  matchTeam: {
    fontSize: 24,
    marginHorizontal: 5,
  },
});

export default NextMatchItem;
