import React, {useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  PermissionsAndroid,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  View,
  Image,
  Text,
} from 'react-native';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import {get_coordinates} from '../../actions/coordinates';
import {connect, useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import Search from '../explore/Search';
import BottomSheetViewImage from '../../components/BottomSheet';
import BottomSheetView from '../explore/BottomSheet';
import Setting from '../explore/Setting';
import Lodder from '../../components/lodder';
import CustomMarker from '../../components/CustomMarker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomClusteredMarkers from '../explore/components/CustomClusteredMarkers';
import {dataMar} from '../../utils/MarkerData1';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Extra = ({navigation, get_coordinates}) => {
  const coordinates = useSelector(state => state.coordinates);
  const mapRef = useRef(null);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 42.361145,
    longitude: -71.057083,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  //search
  const [catShow, setCatShow] = useState(true);
  const bottomSheetRef = useRef(null);
  const bottomSheetRefImage = useRef(null);
  const [settingView, setSettingView] = useState(false);
  const [locationText, setLocationText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // requestLocationPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Methods

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'POL Customer',
          message: 'POL Customer access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocationCoordinates();
      } else {
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocationCoordinates = () => {
    const config = {
      timeout: 25000,
    };

    Geolocation.getCurrentPosition(
      position => {
        setCurrentRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        });
        animateToRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        console.log('ERROR', error);
      },
      config,
    );
  };

  const animateToRegion = region => {
    mapRef.current.animateToRegion(region, 2000);
  };

  const onLayoutMap = () => {
    mapRef.current.animateCamera({
      center: {
        currentRegion,
      },
      heading: 0,
      pitch: 180,
    });
  };

  const onSearchPress = (lat, lng) => {
    animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });

    bottomSheetRef.current.close();
  };

  //Components

  const TitleHeading = () => (
    <View style={styles.topHeading}>
      <View style={styles.titleView}>
        <Image
          source={require('../../images/siteTitle.png')}
          style={styles.smartImage}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>for</Text>
      </View>
      <View style={styles.titleView}>
        <Image
          source={require('../../images/banKTitle.png')}
          style={styles.smartImage}
        />
      </View>
    </View>
  );

  const CurrentLocationButton = () => (
    <TouchableOpacity
      onPress={() => {
        requestLocationPermission();
        bottomSheetRef.current.close();
      }}
      style={styles.currentLocationButton}>
      <MaterialCommunityIcons name="target" size={26} color="black" />
    </TouchableOpacity>
  );

  const CustomAnimatedMarkers = ({item, index}) => (
    <Marker
      key={`${item.Latitude}_${item.Longitude}`}
      coordinate={{
        latitude: item.Latitude,
        longitude: item.Longitude,
      }}
      tracksViewChanges={false}
      onPress={() => {
        // bottomSheetRefImage.current.close();
        bottomSheetRef.current.snapToIndex(0);
        // get_location_details({
        //   id: item.Location_ID,
        //   setIsLoading,
        //   bottomSheetRef,
        // });
        // marker_seleted(i);
        // get_order(item.Location_ID);
        // getInventoryCircuit(item.Location_ID);
        // get_all_devices_inventory(item.Location_ID);

        // const lat = item.Latitude;
        // const lng = item.Longitude;

        // setLatLng({lat, lng});
        // animateToRegion(lat, lng);
        // fetchNearestPlacesFromGoogle(lat, lng);
      }}>
      <CustomMarker
        officeType={item.SubLocationType}
        isChecked={item.isChecked}
      />
    </Marker>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <MapView
        maxZoomLevel={16}
        minZoomLevel={0}
        radius={50}
        style={styles.map}
        initialRegion={currentRegion}
        ref={mapRef}
        Provider={MapView.PROVIDER_GOOGLE}
        zoomControlEnabled={false}
        zoomEnabled={true}
        zoomTapEnabled={true}
        animationEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
        showsMyLocationButton={false}
        scrollDuringRotateOrZoomEnabled={true}
        preserveClusterPressBehavior={true}
        showsUserLocation={true}
        userLocationPriority={'high'}
        mapType={'standard'}
        onLayout={onLayoutMap}
        renderCluster={props => {
          const clusterCounts = props.properties.point_count.toString().length;

          return (
            <CustomClusteredMarkers
              key={props.properties.cluster_id}
              tracksViewChanges={false}
              imageSrc={
                clusterCounts === 1
                  ? '#0099cc'
                  : clusterCounts === 2
                  ? '#669900'
                  : '#bb271a'
              }
              textCount={
                clusterCounts === 1
                  ? '10+'
                  : clusterCounts === 2
                  ? '50+'
                  : '100+'
              }
              {...props}
            />
          );
        }}
        // onRegionChange={region () => {setCurrentRegion(region)}}
      >
        {dataMar.length > 0 &&
          dataMar.map((item, i) => {
            // console.log(item.SubLocationType);
            return (
              <Marker
                key={`${item.Latitude}_${item.Longitude}`}
                coordinate={{
                  latitude: item.Latitude,
                  longitude: item.Longitude,
                }}
                tracksViewChanges={false}
                onPress={() => {
                  // bottomSheetRefImage.current.close();
                  bottomSheetRef.current.snapToIndex(0);
                  // get_location_details({
                  //   id: item.Location_ID,
                  //   setIsLoading,
                  //   bottomSheetRef,
                  // });
                  // marker_seleted(i);
                  // get_order(item.Location_ID);
                  // getInventoryCircuit(item.Location_ID);
                  // get_all_devices_inventory(item.Location_ID);

                  // const lat = item.Latitude;
                  // const lng = item.Longitude;

                  // setLatLng({lat, lng});
                  // animateToRegion(lat, lng);
                  // fetchNearestPlacesFromGoogle(lat, lng);
                }}>
                <CustomMarker
                  officeType={item.SubLocationType}
                  isChecked={item.isChecked}
                />
              </Marker>
            );
          })}
      </MapView>

      <CurrentLocationButton />
      <TitleHeading />
      <Search
        catShow={setCatShow}
        onPress={onSearchPress}
        // setModalVisible={setModalVisible}
        settingView={settingView}
        // modalVisible={modalVisible}
        setlocationText={setLocationText}
        setSettingView={setSettingView}
        bottomSheetRefImage={bottomSheetRefImage}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      <BottomSheetView bottomSheetRef={bottomSheetRef} catShow={setCatShow} />
      <BottomSheetViewImage
        bottomSheetRefImage={bottomSheetRefImage}
        catShow={setCatShow}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {/* =================Setting=============== */}
      {settingView ? (
        <Setting
          settingView={settingView}
          navigation={navigation}
          setSettingView={setSettingView}
        />
      ) : null}
      <Lodder lodding={isLoading} />
    </SafeAreaView>
  );
};

export default connect(null, {get_coordinates})(Extra);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  currentLocationButton: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 60,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  topHeading: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  smartImage: {width: '90%', height: 25, resizeMode: 'contain'},
  textView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  titleView: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
