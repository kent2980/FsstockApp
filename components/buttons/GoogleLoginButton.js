import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

const androidClientId =
  "707999097098-j31vir82b8lolb5esk49kaeal804rmpf.apps.googleusercontent.com";
const webClientId =
  "707999097098-l9k2tr1lvovt3onamghnhqs9sob6spb0.apps.googleusercontent.com";

const GoogleLoginButton = () => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: androidClientId,
    clientId: webClientId,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  const handleSignIn = () => {
    promptAsync();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
      <Ionicons name="logo-google" size={32} color="white" />
      <Text style={styles.buttonText}>Sign in with Google</Text>
      {userInfo && (
        <>
          <Text style={styles.userInfoText}>{userInfo.name}</Text>
          <Text style={styles.userInfoText}>{userInfo.email}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#db4437",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  userInfoText: {
    color: "#333",
    fontSize: 16,
    marginTop: 10,
  },
});

export default GoogleLoginButton;
