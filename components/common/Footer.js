import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Footer = ({ onHomePress, onSearchPress, onRefreshPress }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onSearchPress}>
        <Image style={styles.icon} source={require('./path/to/search-icon.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onHomePress}>
        <Image style={styles.icon} source={require('./path/to/home-icon.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onRefreshPress}>
        <Image style={styles.icon} source={require('./path/to/refresh-icon.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 30,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Footer;
