import { Text, View } from "react-native";

function MatchPlanScreen({route}) {
    const matchId = route.params.matchId;
    return(
        <View>
            <Text>예정 매치</Text>
            <Text>2023.03.02(목) 오후4시</Text>
            <Text>{matchId}</Text>
        </View>
    )
}

export default MatchPlanScreen;
