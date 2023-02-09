import { Image, StyleSheet, Text, View } from "react-native";

function PossibleMatchItem({
  id,
  type,
  battle,
  place,
  imageUrl,
  date,
  average,
}) {
  const teamOrPerson = !!battle ? "팀전" : "개인전";
  const isOnline = type === "online" ? true : false;

  if (isOnline) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View>
          <Text>{date}</Text>
          <Text>AVG - {average}</Text>
        </View>
      </View>
      
    );
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View>
        <Text>
          {battle}:{battle} {teamOrPerson}
        </Text>
        <Text>{date}</Text>
        <Text>{place}</Text>
        <Text>AVG - {average}</Text>
      </View>
    </View>
  );
}

export default PossibleMatchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation:4,
    backgroundColor:'white'
  },
  image: {
    width: 80,
    height: 80,
    margin: 5,
  },
});
