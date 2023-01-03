import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const DataLoder = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../images/loderr.gif')}
        style={{width: 75, height: 75, resizeMode: 'center'}}
      />
    </View>
  );
};

export default DataLoder;

const styles = StyleSheet.create({});
