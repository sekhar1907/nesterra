import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {copyText, tostalert} from '../../../../components/helper';

const DataColum = ({title, border}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum2,
        width: '25%',
        borderLeftColor: 'white',
        borderLeftWidth: border,
      }}>
      <TouchableOpacity
        onLongPress={() => {
          copyText(title);

          tostalert(title);
        }}>
        <Text style={{...styles.boxText1, color: 'black'}}> {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DataColum;

const styles = StyleSheet.create({
  tableRowColum2: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
