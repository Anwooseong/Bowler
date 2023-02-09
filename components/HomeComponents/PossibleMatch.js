import { StyleSheet, View } from "react-native";
import PossibleItem from "./PossibleItem";

function PossibleMatch() {
  return (
    <View style={styles.container}>
      <PossibleItem message="오프라인 매칭(울산)" count={45} type="오프라인" />
      <PossibleItem message="온라인 매칭" count={15} type="온라인"/>
    </View>
  );
}

export default PossibleMatch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical:10,
  },
});
