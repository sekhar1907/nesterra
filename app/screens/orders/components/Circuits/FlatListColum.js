import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {copyText} from '../../../../components/helper';

const FlatListColum = ({item, title}) => {
  const selectedComponent = item => {
    switch (true) {
      case item === 'In Progress':
        return '#ffffbf';
      case item === 'Initiated':
        return '#ffc8ce';
      case item === 'Cancelled':
        return '#ffc8ce';
      case item === 'Completed':
        return '#c6efcd';
    }
  };
  return (
    <View
      style={{
        ...styles.tableRowColum1,
        width: '20%',
        justifyContent: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: 2,
        backgroundColor: selectedComponent(item?.Status),
      }}>
      <TouchableOpacity
        onLongPress={() => {
          copyText(title);
          tostalert(title);
        }}>
        <Text style={styles.boxText1}> {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatListColum;

const styles = StyleSheet.create({});
