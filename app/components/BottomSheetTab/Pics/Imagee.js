import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {LocationKey} from '../../../key';

const Imagee = ({image}) => {
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=${image}&key=${LocationKey}`;

  return (
    <>
      <View
        style={{
          width: '48%',
          height: 150,

          margin: 5,
          marginRight: 5,
          borderRadius: 5,
        }}>
        <Image
          source={{
            uri: url,
          }}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 5,
          }}
        />
      </View>
    </>
  );
};

export default Imagee;

const styles = StyleSheet.create({});
