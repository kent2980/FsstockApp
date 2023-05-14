import React, { useState } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AuthContext from "./contexts/AuthContext";
import UserIcon from "./components/user/UserIcon";
import UserProfileScreen from "./screens/user/UserProfileScreen";
import UserSettingsScreen from "./screens/settings/UserSettingsScreen";
import UserLoginScreen from "./screens/user/UserLoginScreen";

const Stack = createStackNavigator();

const App = () => {
  const [backendToken, setBackendToken] = useState({
    accessToken: "",
    refreshToken: "",
  });
  const [userInfo, setUserInfo] = useState(null);

  function MyStackNavigator() {
    const navigation = useNavigation();
    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Stack.Navigator
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
            presentation: "modal",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("UserProfile");
                }}
              >
                <UserIcon />
              </TouchableOpacity>
            ),
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{ title: "Profile" }}
          />
          <Stack.Screen
            name="UserSetting"
            component={UserSettingsScreen}
            options={{ title: "Settings" }}
          />
          <Stack.Screen
            name="UserLogin"
            component={UserLoginScreen}
            options={{ title: "Login" }}
          />
        </Stack.Navigator>
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        backendToken,
        setBackendToken,
      }}
    >
      <NavigationContainer>
        <MyStackNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
