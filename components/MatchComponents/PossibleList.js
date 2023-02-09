import { FlatList } from "react-native";
import PossibleMatchItem from "./PossibleMatchItem";

function renderPossibleItem(itmeData) {
    return <PossibleMatchItem {...itmeData.item} />
}

function PossibleList({ matchList }) {
  return (
    <FlatList
      data={matchList}
      keyExtractor={(item) => item.id}
      renderItem={renderPossibleItem}
    />
  );
}

export default PossibleList;
