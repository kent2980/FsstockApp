import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import GoogleLoginButton from "../../components/buttons/GoogleLoginButton";

const UserLoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ログイン</Text>
      <TextInput
        style={styles.input}
        placeholder="ユーザー名"
        onChangeText={handleUsernameChange}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="パスワード"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
        value={password}
      />
      <View style={styles.googleButton}>
        <GoogleLoginButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // 変更
    paddingTop: 50, // 追加
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20, // 変更
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 16,
    minWidth: 250,
    backgroundColor: "white",
  },
  googleButton: {
    paddingVertical: 20,
  },
});

export default UserLoginScreen;
