import { useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import PossibleList from "../components/MatchComponents/PossibleList";
import { joinMatchList } from "../util/data";

function PossibleScreen({ route, navigation }) {
  const [isOnline, setIsOnline] = useState(true);

  console.log(route.params?.type)

  function onlineButtonHandler() {
    setIsOnline(true);
  }
  function offlineButtonHandler() {
    setIsOnline(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>참여 가능한 경기 매치</Text>
      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={onlineButtonHandler}
        >
          <View
            style={[
              !isOnline && styles.button,
              isOnline && styles.activeContainer,
            ]}
          >
            <Text
              style={[!isOnline && styles.text, isOnline && styles.activeText]}
            >
              온라인
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={offlineButtonHandler}
        >
          <View
            style={[
              isOnline && styles.button,
              !isOnline && styles.activeContainer,
            ]}
          >
            <Text
              style={[isOnline && styles.text, !isOnline && styles.activeText]}
            >
              오프라인
            </Text>
          </View>
        </Pressable>
      </View>
      {isOnline && (
        <View>
          <PossibleList
            matchList={joinMatchList.filter((item) => {
              return item.type !== "offline";
            })}
          />
        </View>
      )}
      {!isOnline && (
        <View>
          <PossibleList
            matchList={joinMatchList.filter((item) => {
              return item.type !== "online";
            })}
          />
        </View>
      )}
    </View>
  );
}

export default PossibleScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopColor: "black",
    borderTopWidth: 1,
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    color: "brown",
    fontWeight: "bold",
    fontSize: 30,
    margin: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
    paddingVertical: 3,
    minWidth: 90,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  activeContainer: {
    backgroundColor: "brown",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
    paddingVertical: 3,
    minWidth: 90,
  },
  activeText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
