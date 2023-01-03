import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  View,
} from 'react-native';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import DataLoder from '../../lodder/DataLoder';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LocationKey, PhotoUrl} from '../../../key';
import ImageButton from './ImageButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CameraModal from './../../CameraModal/index';
import StreetView from 'react-native-streetview';
const Pics = ({isLoding, imageAddRef}) => {
  const navigation = useNavigation();
  const location_data = useSelector(state => state.location_details.data);
  const photo = useSelector(state => state.photo_url.photo_url);

  const [imagetype, setImageType] = React.useState('Google');
  const [modalVisible, setModalVisible] = React.useState(false);

  const googlePhoto = `${PhotoUrl}${photo[0]?.photo_reference}&key=${LocationKey}`;
  const googleImage = () => {
    setImageType('Google');
  };
  const siteImage = () => {
    setImageType('Site');
  };
  const netWorkImage = () => {
    setImageType('Network');
  };
  return (
    <>
      {isLoding ? (
        <DataLoder />
      ) : (
        <>
          <View style={styles.container}>
            <View
              style={{
                width: '100%',

                flexDirection: 'row',
                paddingHorizontal: 5,
                paddingVertical: 2,
                alignItems: 'center',
                backgroundColor: '#f3f2f8',
              }}>
              <Text style={{color: 'black'}}>Filter :</Text>

              <View
                style={{
                  width: 70,
                  height: 90,
                  borderWidth: imagetype === 'Google' ? 1.5 : 0,
                  borderColor: '#0075f6',
                  borderRadius: 5,
                  marginLeft: 5,
                  padding: 5,
                }}>
                <Image
                  source={{uri: googlePhoto}}
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('StreetViewScreen');
                  // streetViewRef.current.snapToIndex(2);
                }}
                style={{
                  width: 70,
                  height: 90,
                  borderWidth: imagetype === 'Site' ? 1.5 : 0,
                  borderColor: '#0075f6',
                  borderRadius: 5,
                  marginLeft: 5,
                  padding: 15,
                }}>
                {location_data ? (
                  <StreetView
                    style={styles.streetView}
                    allGesturesEnabled={true}
                    coordinate={{
                      latitude: location_data?.Latitude,
                      longitude: location_data?.Longitude,
                    }}
                    pov={{
                      tilt: parseFloat(0),
                      bearing: parseFloat(0),
                      zoom: parseInt(1),
                    }}
                  />
                ) : (
                  <Text>No Image Found</Text>
                )}
              </TouchableOpacity>

              {/* <ImageButton
                title="Google"
                onPress={googleImage}
                imagetype={imagetype}
              />
              <ImageButton
                title="Site"
                onPress={siteImage}
                imagetype={imagetype}
              />
              <ImageButton
                title="Network"
                onPress={netWorkImage}
                imagetype={imagetype}
              /> */}
            </View>
            <BottomSheetFlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              data={photo}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => {
                const url = `${PhotoUrl}${item.photo_reference}&key=${LocationKey}`;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('BackGroundCorsoul');
                    }}
                    style={{
                      width: '48%',
                      height: 150,
                      margin: 5,
                      marginRight: 5,
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
                      }}
                    />
                  </TouchableOpacity>
                );
              }}
              contentContainerStyle={{backgroundColor: 'white'}}
            />
            <View style={{height: 70}}></View>
            <TouchableOpacity
              onPress={() => {
                imageAddRef.current.snapToIndex(2);
              }}
              style={{
                width: 55,
                height: 25,
                backgroundColor: '#0075f6',
                borderRadius: 5,
                position: 'absolute',
                right: 10,
                bottom: 55,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 3,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  streetView: {
    width: '100%',
    height: '100%',
  },
});

export default Pics;
