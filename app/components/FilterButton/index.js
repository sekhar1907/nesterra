import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';

const FilterButton = ({diplayName, title, onPress}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

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
        backgroundColor: appearanceType == 'dark' ? '#28282b' : 'transparent',
        borderColor:
          appearanceType == 'dark'
            ? diplayName == title
              ? 'transparent'
              : 'black'
            : diplayName == title
            ? '#007aff'
            : 'black',

        //  ? '#007aff' : 'black',
      }}>
      <Text
        style={{
          fontWeight: '600',
          color:
            appearanceType == 'dark'
              ? diplayName == title
                ? '#007aff'
                : 'white'
              : diplayName == title
              ? '#007aff'
              : 'black',

          //  diplayName == title ? '#007aff' : 'black',
        }}>
        {title}
      </Text>
      <FontAwesome5
        name="eject"
        size={15}
        style={{transform: [{rotate: '180deg'}], marginLeft: 2, marginTop: 3}}
        color={
          appearanceType == 'dark'
            ? diplayName == title
              ? '#007aff'
              : 'white'
            : diplayName == title
            ? '#007aff'
            : 'black'
          // diplayName == title ? '#007aff' : 'black'
        }
      />
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
