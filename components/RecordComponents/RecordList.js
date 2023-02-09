import { FlatList, Text, View } from "react-native";
import RecordItem from "./RecordItem";

function renderRecordItem(itemData){
    return(
        <RecordItem {...itemData.item} />
    )
}

function RecordList({recordMatchList}) {
    return(
        <FlatList 
            data={recordMatchList}
            keyExtractor={(item) => item.id}
            renderItem={renderRecordItem}
        />
    )
}

export default RecordList;