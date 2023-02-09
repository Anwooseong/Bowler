import { FlatList, StyleSheet, Text, View } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { CustomPagination } from "./CustomPagination";
import NextMatchItem from "./NextMatchItem";

function renderMatchItem(itemData) {
  return <NextMatchItem {...itemData.item} />;
}

function NextMatchList({ data }) {
  return (
    <View>
      <Text style={styles.text}>NEXT MATCH</Text>

      <SwiperFlatList
        autoplay={false}
        autoplayDelay={5}
        index={0}
        autoplayLoop={false}
        autoplayInvertDirection={false}
        data={data}
        renderItem={renderMatchItem}
        showPagination={true}
        PaginationComponent={CustomPagination}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 15,
  },
});

export default NextMatchList;
