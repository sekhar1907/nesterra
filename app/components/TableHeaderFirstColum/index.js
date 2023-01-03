import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TableHeaderFirstColum = ({title, type, width, onPress}) => {
  const active = true;
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        ...styles.tableRowColum,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Text style={{...styles.boxText1, color: 'white'}}>{title}</Text>
      <Text style={{marginTop: 1, marginRight: 3}}>
        <AntDesign
          name={type ? 'caretup' : 'caretdown'}
          size={16}
          color="white"
        />
      </Text>
    </TouchableOpacity>
  );
};

export default TableHeaderFirstColum;

const styles = StyleSheet.create({});
