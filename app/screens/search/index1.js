import React, {useState} from 'react';
import {Dimensions, LayoutAnimation, Platform} from 'react-native';

// import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import MapView from './components/ClusteredMapView';
import SearchA from './Search';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function getRandomLatitude(min = 48, max = 100) {
  return Math.random() * (max - min) + min;
}

function getRandomLongitude(min = 14, max = 24) {
  return Math.random() * (max - min) + min;
}

import {connect, useSelector} from 'react-redux';
import {setLatLng} from '../../actions/setLatLang';

const Search = ({setLatLng}) => {
  const {coordinates} = useSelector(state => state.coordinates);
  const {lat, lng} = useSelector(state => state.setLatLang);
  const [latdetra, setlatdetra] = useState(LATITUDE_DELTA);
  const [lngdetra, setlngdetra] = useState(LONGITUDE_DELTA);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 42.34278590115251,
    longitude: -71.0256371833384,
    latitudeDelta: latdetra,
    longitudeDelta: lngdetra,
  });

  const INITIAL_REGION = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
  };
  const changeLatLng = (lat, lng, ltd, lnd) => {
    // console.log(lat, lng, ltd, lnd, 'ff');
    setLatLng({lat, lng});
    const regi = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: ltd,
      longitudeDelta: lnd,
    };
    setCurrentRegion(regi);
  };
  const currentRegion1 = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const onSearchPress = (lat, lng) => {
    setCurrentRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };
  const _generateMarkers = count => {
    const markers = [];

    count.map((item, i) => {
      markers.push(
        <Marker
          key={i}
          coordinate={{
            latitude: item.Latitude,
            longitude: item.Longitude,
          }}
        />,
      );
    });
    // for (let i = 0; i < count.length; i++) {
    //   markers.push(
    //     <Marker
    //       key={i}
    //       coordinate={{
    //         latitude: c,
    //         longitude: getRandomLongitude(),
    //       }}
    //     />,
    //   );
    // }

    return markers;
  };

  return (
    <>
      <MapView
        initialRegion={INITIAL_REGION}
        currentRegion2={currentRegion}
        changeLatLng={changeLatLng}
        style={{flex: 1}}>
        {_generateMarkers(coordinates)}
      </MapView>
      {/* <SearchA onSearchPress={onSearchPress} /> */}
    </>
  );
};

export default connect(null, {setLatLng})(Search);
