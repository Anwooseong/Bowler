import { StyleSheet, Text, View } from "react-native";

function RecordItem({
  id,
  type,
  battle,
  place,
  date,
  userTeam,
  userScore,
  opponentTeam,
  opponentScore,
}) {
  const isOnline = battle === null ? true : false;
  const isWin = userScore > opponentScore ? "WIN" : "LOSE";

  //온라인 매칭일때
  if(isOnline){
    return (
        <View style={styles.container}>
          <View style={styles.onContainer}>
            <Text style={styles.date}>{date}</Text>
            <Text>
              온라인 매칭
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 25,
            }}
          >
            <Text style={styles.winText}>{isWin}</Text>
            <View style={styles.bottomContainer}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.teamText}>{userTeam}</Text>
                <Text style={styles.teamText}>{userScore}</Text>
              </View>
              <Text style={styles.teamText}> VS </Text>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.teamText}>{opponentTeam}</Text>
                <Text style={styles.teamText}>{opponentScore}</Text>
              </View>
            </View>
          </View>
        </View>
      );
  }
  

  //TODO 오프라인 매칭일때

  return (
    <View style={styles.container}>
      <View style={styles.onContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text>
          {battle}:{battle} 매칭
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 25,
        }}
      >
        <Text style={styles.winText}>{isWin}</Text>
        <View style={styles.bottomContainer}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.teamText}>{userTeam}</Text>
            <Text style={styles.teamText}>{userScore}</Text>
          </View>
          <Text style={styles.teamText}> VS </Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.teamText}>{opponentTeam}</Text>
            <Text style={styles.teamText}>{opponentScore}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RecordItem;

const styles = StyleSheet.create({
  container: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 10,
    marginVertical: 7,
    elevation:4,
    backgroundColor:'white'
  },
  onContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  date: {
    fontWeight: "bold",
    fontSize: 15,
    color: "blue",
    marginRight: 30,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  winText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    minWidth: 45,
    marginRight: 45,
  },
  teamText: {
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal:3,
  },
});
