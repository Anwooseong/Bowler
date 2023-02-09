import { StyleSheet, Text, View } from "react-native";
import CreateMatchRoom from "../components/HomeComponents/CreateMatchRoom";
import NextMatchList from "../components/HomeComponents/NextMatchList";
import PossibleMatch from "../components/HomeComponents/PossibleMatch";
import Profile from "../components/HomeComponents/Profile";
import { nextMatchDummy } from "../util/data";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Profile name="김지섭" average={230} win={8} lose={2} />
      </View>
      <View style={{ height: 250 }}>
        <NextMatchList data={nextMatchDummy} />
      </View>
      <PossibleMatch />
      <CreateMatchRoom />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopColor:'black',
    borderTopWidth:1,
  },
});
