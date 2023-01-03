import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({displyCompomnet, title, onPress}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          width: 90,
          height: 40,
          borderRadius: 10,
          marginRight: 10,
          backgroundColor: displyCompomnet == title ? '#007aff' : 'transparent',
          borderWidth: 1,
          borderColor: displyCompomnet == title ? '#007aff' : 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: displyCompomnet == title ? 'white' : 'black',
            fontSize: 16,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    padding: 10,
  },
});
