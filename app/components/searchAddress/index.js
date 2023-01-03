import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {LocationKey} from '../../key';

const SearchAddress = ({goToAddres}) => {
  return (
    <>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search Location"
        onPress={(data, details = null) => {
          // console.log(JSON.stringify(details.geometry));
          const lat = details.geometry.location.lat;
          const lng = details.geometry.location.lng;
          goToAddres(lat, lng);
        }}
        query={{
          key: `${LocationKey}`,
          language: 'en',
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={300}
        styles={{
          ...styles.googlePlaces,
        }}
      />
    </>
  );
};

export default SearchAddress;

const styles = StyleSheet.create({
  googlePlaces: {
    container: {
      position: 'absolute',
      width: '95%',
      alignSelf: 'center',
      zIndex: 10,
      marginTop: 80,

      // zIndex: -1,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 2,
        height: 6,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 29,
    },
    listView: {
      borderBottomWidth: 10,
      borderRadius: 10,
      borderBottomColor: 'white',
      zIndex: 2,
    },
    textInput: {
      paddingTop: 12,
    },
  },
  leftIconImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',

    marginLeft: 10,
  },
  searchRighIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  rightIconImage: {width: 30, height: 30, borderRadius: 15},
  mr10: {marginRight: 18},
});
