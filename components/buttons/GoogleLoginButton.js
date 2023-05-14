import { useEffect, useContext, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native"; // スタイルシートをインポート
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri,useAuthRequest, exchangeCodeAsync } from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";

import AuthContext from "../../contexts/AuthContext";
import GoogleSvg from "../../svg/GoogleSvg";
import { ENV } from "../../ENV";

// 認証ページをCloseするのに必要
WebBrowser.maybeCompleteAuthSession();

const GoogleLoginButton = () => {
  
  // グローバル変数を初期化
  const { setUserInfo, setGoogleToken } = useContext(AuthContext);
  // プライベート変数を初期化
  const navigation = useNavigation(); //Reactナビゲーション
  const [accessToken, setAccessToken] = useState(""); //アクセストークン
  const [refreshToken, setRefreshToken] = useState(""); //リフレッシュトークン
  const [authCode, setAuthCode] = useState(""); //認証コード
  const redirectUri = makeRedirectUri({ useProxy: true }); //リダイレクトURL

  return (
    // Googleログインボタンを描画
    <View>
      <TouchableOpacity
        onPress={() => promptAsync()}
        style={styles.button}
      >
        <View style={styles.buttonContent}>
          <GoogleSvg />
          <Text style={styles.buttonText}>Google Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// スタイルシートを定義
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width:240,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    margin: "auto",
    fontSize: 16,
  },
});

export default GoogleLoginButton;
