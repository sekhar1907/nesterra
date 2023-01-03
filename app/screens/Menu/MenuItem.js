import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

const MenuItem = ({src, onPress, title}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        width: '100%',
        height: 50,
        border: 1,
        borderBottomColor: '#575757',
        borderBottomWidth: 0.9,
        flexDirection: 'row',
        marginVertical: 5,
      }}>
      <View
        style={{
          width: '30%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={src}
          style={{width: 30, height: 30, resizeMode: 'contain'}}
        />
        <Text style={{marginLeft: 10, color: 'black', fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <View style={{width: '70%', height: '100%'}}></View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
