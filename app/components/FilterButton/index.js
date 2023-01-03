import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const FilterButton = ({diplayName, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        width: 100,
        height: 40,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: diplayName == title ? '#007aff' : 'black',
      }}>
      <Text
        style={{
          fontWeight: '600',
          color: diplayName == title ? '#007aff' : 'black',
        }}>
        {title}
      </Text>
      <FontAwesome5
        name="eject"
        size={15}
        style={{transform: [{rotate: '180deg'}], marginLeft: 2, marginTop: 3}}
        color={diplayName == title ? '#007aff' : 'black'}
      />
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
