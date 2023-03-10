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
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import { Colors } from "./constants/styles";
import { AuthContext, AuthContextProvider } from "./store/auth-context";
import { useContext, useEffect, useState } from "react";
import IconButton from "./components/ui/IconButton";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function BowlerTabs() {
  const authCtx = useContext(AuthContext);
  
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "red",
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "red",
        headerTitleStyle: {
          fontFamily: "HeaderFont",
          fontSize: 35,
        },
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "BOWLER ",
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
          title: "BOWLER ",
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
          title: "BOWLER ",
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
          title: "BOWLER ",
          tabBarLabel: "Info",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={size} color={color} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
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
          title: "BOWLER ",
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  return <Navigation />;
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'HeaderFont': require("./assets/font/Bangers-Regular.ttf"),
  });
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, []);
  if(!fontsLoaded){
    return null;
  }
  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
