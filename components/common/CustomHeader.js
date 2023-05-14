import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', height: 50 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

export default CustomHeader;
