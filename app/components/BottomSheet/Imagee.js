import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {LocationKey} from '../../key';

const Imagee = ({image}) => {
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=${image}&key=${LocationKey}`;

  return (
    <>
      <View
        style={{
          width: 260,
          height: 100,
          marginRight: 2.5,
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
            marginRight: 2.5,
          }}
        />
      </View>
    </>
  );
};

export default Imagee;

const styles = StyleSheet.create({});
