import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ClearAndAppply = ({onPress, clear}) => {
  return (
    <View
      style={{
        width: 260,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',

        bottom: 100,
        right: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          clear();
          //   clear_all(data);
          //   clearAll();
        }}
        style={{
          width: 100,
          height: '100%',
          borderRadius: 5,
          backgroundColor: '#c7dcfb',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#1e74bf'}}>Search Clear</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //   filterApply();
          onPress();
        }}
        style={{
          width: 100,
          height: '100%',
          borderRadius: 5,
          backgroundColor: '#0075f6',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClearAndAppply;

const styles = StyleSheet.create({});
