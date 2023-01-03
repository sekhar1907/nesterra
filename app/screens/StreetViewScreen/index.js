import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import StreetView from 'react-native-streetview';
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const StreetViewScreen = ({navigation}) => {
  const location_data = useSelector(state => state.location_details.data);
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          width: 20,
          height: 20,
          backgroundColor: 'red',
          borderRadius: 10,
          position: 'absolute',
          right: 30,
          top: 30,
          zIndex: 30,
        }}>
        <Entypo name="cross" size={20} color="white" />
      </TouchableOpacity>

      <View style={styles.container}>
        <StreetView
          style={styles.streetView}
          allGesturesEnabled={true}
          coordinate={{
            latitude: location_data.Latitude,
            longitude: location_data.Longitude,
          }}
          pov={{
            tilt: parseFloat(0),
            bearing: parseFloat(0),
            zoom: parseInt(1),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default StreetViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  streetView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
