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
import UserProfileScreen from "./screens/user/UserProfileScreen";
import UserSettingsScreen from "./screens/settings/UserSettingsScreen";
import UserLoginScreen from "./screens/user/UserLoginScreen";

const Stack = createStackNavigator();

const App = () => {
  const [googleToken, setGoogleToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  function MyStackNavigator() {
    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Stack.Navigator
          mode="modal"
          screenOptions={{
            ...TransitionPresets.ScaleFromCenterAndroid,
            headerStyle: {
              backgroundColor: "#fff",
              height: 50,
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => <UserIcon />, // userInfoをUserIconに渡す
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{
              cardStyle: { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
          />
          <Stack.Screen name="UserSetting" component={UserSettingsScreen} />
          <Stack.Screen name="UserLogin" component={UserLoginScreen}/>
        </Stack.Navigator>
      </>
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
