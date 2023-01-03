import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {copyText, tostalert} from '../helper';
import {color} from 'react-native-reanimated';

const FlatColum = ({title, border}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum1,
        borderLeftColor: 'white',
        borderLeftWidth: border,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onLongPress={() => {
          copyText(title);

          tostalert(title);
        }}>
        <Text style={{...styles.boxText1, color: 'black'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatColum;

const styles = StyleSheet.create({
  tableRowColum1: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
  },
});
