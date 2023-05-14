import { useEffect, useContext, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native"; // スタイルシートをインポート
import * as WebBrowser from "expo-web-browser";
import {
  makeRedirectUri,
  useAuthRequest,
  exchangeCodeAsync,
} from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import GoogleSvg from "../../svg/GoogleSvg";
import { ENV } from "../../ENV";

// 認証ページをCloseするのに必要
WebBrowser.maybeCompleteAuthSession();

const GoogleLoginButton = () => {
  // グローバル変数を初期化
  const { userInfo, setUserInfo, setBackendToken } = useContext(AuthContext);
  // プライベート変数を初期化
  const [googleToken, setGoogleToken] = useState("");
  // const [authCode, setAuthCode] = useState(""); //認証コード
  const redirectUri = makeRedirectUri(); //リダイレクトURL

  // 認証コードを取得
  const [request, response, promptAsync] = useAuthRequest(
    {
      androidClientId: ENV.googleApkKey,
      webClientId:ENV.googleWebKey,
      expoClientId:ENV.googleWebKey,
      clientId:ENV.googleWebKey,
      responseType: "code",
      scopes: ["profile", "email"],
      redirectUri:redirectUri,
      usePKCE: true,
    },
    { authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth" }
  );

  // アクセストークンを取得
  useEffect(() => {
    if (response?.type === "success") {
      console.log(response);
      const { code } = response.params;
      console.log("Google OAuth2 Authorization Code:", code);

      // Exchange the authorization code for an access token
      (async () => {
        try {
          const tokenResponse = await exchangeCodeAsync(
            {
              clientId:ENV.googleWebKey,
              clientSecret: ENV.googleWebSecret,
              code: code,
              redirectUri: redirectUri,
              scopes: ["profile", "email"],
              extraParams: {
                code_verifier: request?.codeVerifier,
              },
            },
            { tokenEndpoint: "https://oauth2.googleapis.com/token" }
          );

          setGoogleToken(tokenResponse.accessToken);
          console.log("Google OAuth2 Access Token:", tokenResponse.accessToken);
        } catch (error) {
          console.error("Error exchanging authorization code:", error);
        }
      })();
    }
  }, [response]);

  const convertToken = (googleToken) => {
    axios
      .post(`https://api.fs-stock.net/auth/convert-token`, {
        token: googleToken,
        backend: "google-oauth2",
        grant_type: "convert_token",
        client_id: ENV.googleDrfKey,
        client_secret: ENV.googleDrfSecret,
      })
      .then((res) => {
        console.log(res);
        const { access_token, refresh_token } = res.data;
        setBackendToken({
          accessToken: access_token,
          refreshToken: refresh_token,
        });
      })
      .catch((er) => console.log(er));
  };

  const registUser = (userInfo) => {
    const extractEmailName = (email) => {
      const regex = /^([^@]+)@/;
      const match = email.match(regex);
      return match ? match[1] : null;
    };

    axios
      .post(`https:/api.fs-stock.net/register/`, {
        username: extractEmailName(userInfo.email),
        email: userInfo.email,
        image_url: userInfo.picture,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    if (googleToken != "") {
      convertToken(googleToken);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleToken}`
        )
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data);
        })
        .catch((er) => console.log(er));
    }
  }, [googleToken]);

  useEffect(() => {
    if (userInfo) {
      registUser(userInfo);
    }
  }, [userInfo]);

  return (
    // Googleログインボタンを描画
    <View>
      <TouchableOpacity onPress={() => promptAsync()} style={styles.button}>
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
    width: 240,
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
