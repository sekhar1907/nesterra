import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import StreetView from 'react-native-streetview';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const StreetViewComponents = () => {
  const navigation = useNavigation();
  const {lat} = useSelector(state => state.setLatLang);
  const {lng} = useSelector(state => state.setLatLang);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('StreetViewScreen');
      }}
      style={{
        width: 100,
        height: 60,
        position: 'absolute',
        bottom: 210,
        left: 10,
        borderRadius: 15,
      }}>
      <StreetView
        style={styles.streetView}
        coordinate={{
          latitude: lat,
          longitude: lng,
        }}
        pov={{
          tilt: parseFloat(0),
          bearing: parseFloat(0),
          zoom: parseInt(1),
        }}
      />
    </TouchableOpacity>
  );
};

export default StreetViewComponents;

const styles = StyleSheet.create({
  streetView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
  },
});
