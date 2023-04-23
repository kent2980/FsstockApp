import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import AppNavigator from "./navigation/AppNavigator";
// import AuthContext from "./contexts/AuthContext";
import { View, Text } from "react-native";

const App = () => {
  const [token, setToken] = useState({ accessToken: null, refreshToken: null });
  const [user, setUser] = useState(null);

  return (
    // <AuthContext.Provider value={{ token, setToken, user, setUser }}>
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    //   <View><Text>soon</Text></View>
    // </AuthContext.Provider>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello, World!</Text>
    </View>
  );
};

export default App;
