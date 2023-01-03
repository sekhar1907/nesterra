import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const {width, height} = Dimensions.get('window');

const ImageLoder = ({}) => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View style={{}}>
          <View
            style={{width: width, height: 150, borderRadius: 5, margin: 5}}
          />
          <View
            style={{width: width, height: 150, borderRadius: 5, margin: 5}}
          />
          <View
            style={{width: width, height: 150, borderRadius: 5, margin: 5}}
          />
          <View
            style={{width: width, height: 150, borderRadius: 5, margin: 5}}
          />
        </View>
        <View></View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default ImageLoder;
const styles = StyleSheet.create({});
