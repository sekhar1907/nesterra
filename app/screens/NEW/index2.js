import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Marker, Region} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {markardata} from '../../utils/markerData';
import SearchAddress from '../../components/searchAddress';
import ClusteredMapView from './components/ClusteredMapView';
import MapZoomPanel from './components/MapZoomPanel';

const getRandomLatitude = (min = 48, max = 56) => {
  return Math.random() * (max - min) + min;
};

const getRandomLongitude = (min = 14, max = 24) => {
  return Math.random() * (max - min) + min;
};

const getRegionForZoom = (lat, lon, zoom) => {
  const distanceDelta = Math.exp(Math.log(360) - zoom * Math.LN2);
  const {width, height} = Dimensions.get('window');
  const aspectRatio = width / height;
  return {
    latitude: lat,
    longitude: lon,
    latitudeDelta: distanceDelta * aspectRatio,
    longitudeDelta: distanceDelta,
  };
};

const getZoomFromRegion = region => {
  return Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);
};

// interface Markers {
//   id: number
//   latitude: number
//   longitude: number
// }

const Extra = () => {
  const {coordinates} = useSelector(state => state.coordinates);
  const map = useRef(null);

  const [zoom, setZoom] = useState(18);
  const [markers, setMarkers] = useState([
    {id: 0, latitude: 42.340350646, longitude: -71.06219976},
  ]);
  const [region, setRegion] = useState({
    latitude: 42.340350646,
    longitude: -71.06219976,
    latitudeDelta: 1.5,
    longitudeDelta: 1.5,
  });
  const goToAddres = (lat, lng) => {
    const region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 1.5,
      longitudeDelta: 1.5,
    };
    setRegion(region);
  };
  const generateMarkers = useCallback((lat, long) => {
    const markersArray = [];

    for (let i = 0; i < 50; i++) {
      markersArray.push({
        id: i,
        latitude: getRandomLatitude(lat - 0.05, lat + 0.05),
        longitude: getRandomLongitude(long - 0.05, long + 0.05),
      });
    }
    setMarkers(markersArray);
  }, []);

  const mapZoomIn = () => {
    if (zoom > 18) {
      setZoom(18);
    } else {
      setZoom(zoom + 1);
      const regn = getRegionForZoom(
        region.latitude,
        region.longitude,
        zoom + 1,
      );
      map.current.animateToRegion(regn, 200);
    }
  };

  const mapZoomOut = () => {
    if (zoom < 3) {
      setZoom(3);
    } else {
      setZoom(zoom - 1);
      const regn = getRegionForZoom(
        region.latitude,
        region.longitude,
        zoom - 1,
      );
      map.current.animateToRegion(regn, 200);
    }
  };

  const onRegionChangeComplete = newRegion => {
    setZoom(getZoomFromRegion(newRegion));
    setRegion(newRegion);
  };

  useEffect(() => {
    generateMarkers(region.latitude, region.longitude);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <SearchAddress goToAddres={goToAddres} />

        <ClusteredMapView
          clusterColor="red"
          ref={map}
          mapType="standard"
          style={styles.mapView}
          region={region}
          // initialRegion={region}
          onRegionChange={onRegionChangeComplete}
          // onRegionChangeComplete={onRegionChangeComplete}
        >
          {markers.map((item, i) => (
            <Marker
              key={i}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
            />
          ))}
        </ClusteredMapView>
        <MapZoomPanel
          onZoomIn={() => {
            mapZoomIn();
          }}
          onZoomOut={() => {
            mapZoomOut();
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  mapView: {flex: 1},
  customMarker: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Extra;
