import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
const MapTypeAndFilterButtom = ({filterData}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MapTypeAndFilter', {filterData})}
      style={styles.button}>
      <Octicons name="stack" size={22} color="black" />
    </TouchableOpacity>
  );
};

export default MapTypeAndFilterButtom;

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 110,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
