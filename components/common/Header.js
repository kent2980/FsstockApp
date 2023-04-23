import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

const Header = ({ navigation, user }) => {
  const handleUserIconPress = () => {
    navigation.navigate('UserInfo');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleUserIconPress}>
        <Image
          style={styles.userIcon}
          source={{ uri: user.imageUrl }}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 30,
    paddingHorizontal: 10,
  },
  userIcon: {
    width: 20,
    height: 20,
    borderRadius: 10, // 追加してアイコンを円形にする
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
  },
});

export default Header;
