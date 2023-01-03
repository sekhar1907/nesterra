import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  useRef,
  TouchableOpacity,
} from 'react-native';
// import Voice from '@react-native-voice/voice';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {LocationKey} from '../../key';
import {setLatLng} from '../../actions/setLatLang';
import {connect, useSelector} from 'react-redux';

const StartPoint = ({route, navigation, setLatLng}) => {
  return (
    <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder="Search Start Point"
      onPress={(data, details = null) => {
        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;
        route.params.startPoint(lat, lng);

        setLatLng({lat, lng});

        route.params.setStartAddress(data.description.split(',').toString());
        navigation.goBack();
      }}
      query={{
        key: `${LocationKey}`,
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={300}
      enablePoweredByContainer={false}
      styles={styles.googlePlaces}
      // style={styles.placess}
    />
  );
};

export default connect(null, {setLatLng})(StartPoint);

const styles = StyleSheet.create({
  //   placess: {
  //     container: {
  //       width: 100,
  //       alignSelf: 'center',

  //       backgroundColor: 'white',
  //       borderRadius: 10,
  //     },
  //   },
  googlePlaces: {
    container: {
      position: 'absolute',
      width: '95%',
      alignSelf: 'center',
      marginTop: StatusBar.currentHeight,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    listView: {
      borderBottomWidth: 10,
      borderRadius: 10,
      borderBottomColor: 'white',
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

// added by Dildar Khan end
