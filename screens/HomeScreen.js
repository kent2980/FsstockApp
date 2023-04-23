import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GoogleLoginButton from '../components/buttons/GoogleLoginButton';
import AuthContext from '../contexts/AuthContext';

const HomeScreen = () => {
  const { token, setToken, user, setUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {token.accessToken ? (
        <View>
          <Text>Welcome, {user && user.name}!</Text>
          <Text>Email: {user && user.email}</Text>
          <Text>User ID: {user && user.id}</Text>
        </View>
      ) : (
        <View>
        <Text>Soon</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
