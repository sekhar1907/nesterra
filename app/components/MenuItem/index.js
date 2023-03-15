import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const MenuItem = ({src, onPress, title}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

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
          style={{
            width: 25,
            height: 25,
            resizeMode: 'contain',
            tintColor: appearanceType == 'dark' ? 'white' : 'black',
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            color: appearanceType == 'dark' ? 'white' : 'black',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </View>
      <View style={{width: '70%', height: '100%'}}></View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
