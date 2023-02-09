import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

function PossibleItem({ message, count, type }) {

  const navigation = useNavigation();

  function possibleMatchPressHandler(){
    navigation.navigate('PossibleScreen', type={type})
  }

  return (
    <Pressable style={({pressed}) => pressed && styles.pressed} onPress={possibleMatchPressHandler}>
      <View style={styles.container}>
        <Text>{message}</Text>
        <Text style={styles.textPosition}>{count}</Text>
      </View>
    </Pressable>
  );
}

export default PossibleItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    minWidth: 120,
    minHeight: 120,
    backgroundColor:'lightgrey'
  },
  textPosition: {
    justifyContent: "flex-end",
    textAlign: "right" || "",
  },
});
