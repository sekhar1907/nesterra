import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
// import MapView from 'react-native-map-clustering';
import {hasLocationPermission} from '../../utils/AskPermission';
import Geolocation from 'react-native-geolocation-service';

import SearchAddress from '../../components/searchAddress';
import {connect, useSelector} from 'react-redux';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
// import CustomMarker from '../../components/CustomMarker';
import BottomsheetView from './BottomsheetView';
import {get_order} from '../../actions/order';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_REGION = {
  latitude: 41.85942,
  longitude: -71.519236,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};
const Extra = ({navigation, get_order}) => {
  const {coordinates} = useSelector(state => state.coordinates);
  // console.log(coordinates, 'first');
  const mapRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const [lat, setLat] = useState(42.340350646);
  const [lng, setLng] = useState(-71.06219976);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: lat,
    longitude: lng,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position.coords.latitude);
        setLat(Number(position.coords.latitude));
        setLng(Number(position.coords.longitude));
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        mapRef.current.animateToRegion(region, 500);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  const _onRegionChange = mapRegion => {
    console.log(mapRegion);

    setCurrentRegion({
      latitude: mapRegion.latitude,
      longitude: mapRegion.longitude,
      latitudeDelta: mapRegion.latitudeDelta,
      longitudeDelta: mapRegion.longitudeDelta,
    });
  };
  const goToAddres = (lat, lng) => {
    setLat(lat);
    setLng(lng);
    const region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    setCurrentRegion(region);
  };
  const che = () => {
    console.log(currentRegion);
  };
  useEffect(() => {
    // getLocation();
  }, [currentRegion]);
  // Info - Pics - Hours - Circuits - Devices - Others
  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        tracksViewChanges={false}
        preserveClusterPressBehavior={true}
        maxZoom={20}
        mapType={'standard'}
        pitchEnabled={true}
        zoomControlEnabled={false}
        zoomEnabled={true}
        zoomTapEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        showsMyLocationButton={true}
        showsUserLocation={true}
        showsCompass={true}
        followsUserLocation={true}
        provider={MapView.PROVIDER_GOOGLE}
        style={{flex: 1}}
        initialRegion={currentRegion}
        // region={currentRegion}
        onRegionChange={region => {
          setCurrentRegion(region);
        }}
        // initialRegion={currentRegion}
      >
        {coordinates.map((item, i) => {
          return (
            <Marker
              onPress={() => {
                console.log(item.Location_ID);
                get_order(item.Location_ID);
                navigation.navigate('Orders', {
                  location_ID: item.Location_ID,
                });

                //bottomSheetRef.current.snapToIndex(0);
              }}
              key={i}
              coordinate={{
                latitude: item.Latitude,
                longitude: item.Longitude,
              }}
            />
          );
        })}
      </MapView>
      <SearchAddress goToAddres={goToAddres} />
      <BottomsheetView bottomSheetRef={bottomSheetRef} />
    </View>
  );
};

export default connect(null, {get_order})(Extra);

const styles = StyleSheet.create({});
