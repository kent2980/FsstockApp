import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AuthContext from "../../contexts/AuthContext";
import UserIcon from "../../components/user/UserIcon";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const { userInfo, setUserInfo, setBackendToken } = useContext(AuthContext);

  const handleLogout = () => {
    // ログアウト処理を実装
    setBackendToken({
      accessToken: "",
      refreshToken: "",
    });
    setUserInfo(null);

    // HomeScreenに遷移
    navigation.goBack();
  };

  const closeModal = () => {
    navigation.goBack();
  };

  const handleContainerPress = (event) => {
    event.stopPropagation();
  };

  return (
    <View style={styles.background} testID="backView">
      <TouchableWithoutFeedback onPress={closeModal}>
        <View
          testID="userView"
          style={styles.container}
          onStartShouldSetResponder={() => true}
          onResponderGrant={handleContainerPress}
        >
          <UserIcon userInfo={userInfo} />
          <Text style={styles.name}>{userInfo?.name}</Text>
          <Text style={styles.email}>{userInfo?.email}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserSetting")}
            style={styles.UserSettingButton}
          >
            <Text style={styles.UserSettingButtonText}>UserSetting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center", // 垂直方向の中央に配置
    alignItems: "center", // 水平方向の中央に配置
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
  },
  logoutButton: {
    width: 200,
    backgroundColor: "#f4511e",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: "auto",
  },
  UserSettingButton: {
    width: 200,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#2196F3", // ボタンの背景色を設定
    marginTop: 20,
  },
  UserSettingButtonText: {
    fontSize: 18, // フォントサイズを18に変更
    color: "#FFF", // テキストの色を設定
    marginHorizontal: "auto",
  },
});

export default UserProfileScreen;
