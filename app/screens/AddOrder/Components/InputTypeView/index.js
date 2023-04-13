import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InputTypeView = ({title, title2}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 37,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
      }}>
      <View
        style={{
          width: '48%',
          height: '100%',
          borderRadius: 7,
          borderColor: 'black',
          borderWidth: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 15,
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          width: '48%',
          height: '100%',
          borderRadius: 7,
          borderColor: 'black',
          borderWidth: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 15,
          }}>
          {title2}
        </Text>
      </View>
    </View>
  );
};

export default InputTypeView;

const styles = StyleSheet.create({});
