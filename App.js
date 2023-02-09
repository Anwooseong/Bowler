import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons, Entypo } from "@expo/vector-icons";
import PossibleScreen from "./screens/PossibleScreen";
import RecordScreen from "./screens/RecordScreen";
import InfoScreen from "./screens/InfoScreen";
import MatchPlanScreen from "./screens/MatchPlanScreen";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BowlerTabs() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "red",
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "red",
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "BOWLER",
          tabBarLabel: "Home",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="PossibleScreen"
        component={PossibleScreen}
        options={{
          title: "BOWLER",
          tabBarLabel: "Matching",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Record"
        component={RecordScreen}
        options={{
          title: "BOWLER",
          tabBarLabel: "Record",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="clipboard" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: "BOWLER",
          tabBarLabel: "Info",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "white" },
            headerTintColor: "red",
          }}
        >
          <Stack.Screen
            name="BowlerTabs"
            component={BowlerTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MatchPlan"
            component={MatchPlanScreen}
            options={{
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "red",
              headerTitleAlign: "center",
              title:'BOWLER'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
