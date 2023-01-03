import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {copyText, tostalert} from '../../../../components/helper';

const Flatrow = ({title}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum1,
        borderLeftColor: 'white',
        borderLeftWidth: 2,
      }}>
      <TouchableOpacity
        onLongPress={() => {
          copyText(title);
          tostalert(title);
        }}>
        <Text style={styles.boxText1}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Flatrow;

const styles = StyleSheet.create({
  tableRowColum1: {
    width: '25%',
    height: '100%',

    justifyContent: 'center',
  },
});
