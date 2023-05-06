import React, { useState } from "react";
import { StatusBar, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AuthContext from "./contexts/AuthContext";
import UserIcon from "./components/user/UserIcon";
import UserProfileScreen from "./screens/userProfile/UserProfileScreen";

const Stack = createStackNavigator();

const App = () => {
  const [googleToken, setGoogleToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  function MyStackNavigator() {
    return (
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerStyle: {
            backgroundColor: "#fff",
            height:
              Platform.OS === "android" ? 50 + StatusBar.currentHeight : 50,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => <UserIcon />, // userInfoをUserIconに渡す
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            cardStyle: { backgroundColor: "rgba(0,0,0,0.5)" },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <AuthContext.Provider
      value={{ googleToken, setGoogleToken, userInfo, setUserInfo }}
    >
      <NavigationContainer>
        <MyStackNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
