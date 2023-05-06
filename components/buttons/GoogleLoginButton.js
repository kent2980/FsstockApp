import { useEffect, useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useNavigation } from "@react-navigation/native";
import { GOOGLE_WEB_KEY, GOOGLE_APK_KEY } from "@env";
import AuthContext from "../../contexts/AuthContext";
import tw from "twrnc";
import GoogleSvg from "../../svg/GoogleSvg";

WebBrowser.maybeCompleteAuthSession();

const GoogleLoginButton = () => {
  const { setUserInfo, setGoogleToken } = useContext(AuthContext);
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: GOOGLE_APK_KEY,
    webClientId: GOOGLE_WEB_KEY,
    expoClientId: GOOGLE_WEB_KEY,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setGoogleToken(response.authentication.accessToken);
      fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: `Bearer ${response.authentication.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserInfo({
            name:data.name,
            picture:data.picture,
            email:data.email,
          });
          navigation.navigate("Home");
        });
    }
  }, [response, setUserInfo, setGoogleToken, navigation]);

  return (
    <View>
    <TouchableOpacity
      onPress={() => promptAsync()}
      style={[tw`bg-blue-500`, { width: 240 }]}
    >
      <View style={tw`flex-row items-center`}>
        <GoogleSvg />
        <Text style={tw`text-white font-bold mx-auto text-base`}>
          Google Login
        </Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default GoogleLoginButton;
