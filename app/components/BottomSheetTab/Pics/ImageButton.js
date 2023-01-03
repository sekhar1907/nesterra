import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ImageButton = ({title, onPress, imagetype}) => {
  //   console.log(first);
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        width: 70,
        height: '80%',

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 5,
        backgroundColor: imagetype === title ? '#007aff' : '#e0dfe5',
      }}>
      <Text style={{color: imagetype === title ? 'white' : '#4576b1'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ImageButton;

const styles = StyleSheet.create({});
