import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AuthContext from "../contexts/AuthContext";
import UserLoginScreen from "./user/UserLoginScreen";

// AuthContextからgoogleTokenを取得し、ログイン状態に応じて表示内容を変える
const HomeScreen = ({ navigation }) => {
  const { googleToken } = useContext(AuthContext);

  return (
    <View style={styles.container} testID="pageView">
      {googleToken ? (
        // ログインしている場合はユーザープロフィールと設定画面へのリンクを表示
        <View testID="mainView">
          <TouchableOpacity
            onPress={() => navigation.navigate("UserProfile")}
            style={styles.profileButton}
          >
            <Text style={styles.profileButtonText}>User Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserSetting")}
            style={styles.profileButton}
          >
            <Text style={styles.profileButtonText}>UserSetting</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // ログインしていない場合はGoogleログインボタンを表示
        <View>
          <UserLoginScreen/>
        </View>
      )}
    </View>
  );
};

// スタイルを定義
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
    backgroundColor: "#2196F3", // ボタンの背景色を設定
    marginBottom:20,
  },
  profileButtonText: {
    fontSize: 18, // フォントサイズを18に変更
    color: "#FFF", // テキストの色を設定
  },
});

export default HomeScreen;
