import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AuthContext from "../contexts/AuthContext";
import GoogleLoginButton from "../components/buttons/GoogleLoginButton";

const HomeScreen = ({ navigation }) => {
  const { googleToken } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {googleToken ? (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserProfile")}
            style={styles.profileButton}
          >
            <Text style={styles.profileButtonText}>User Profile</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <GoogleLoginButton />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3', // ボタンの背景色を設定
  },
  profileButtonText: {
    fontSize: 18, // フォントサイズを18に変更
    color: '#FFF', // テキストの色を設定
  },
});

export default HomeScreen;
