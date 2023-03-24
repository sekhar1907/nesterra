import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React, {useMemo, useRef, useEffect, useState, useCallback} from 'react';
import StreetView from 'react-native-streetview';

import BottomSheet, {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';

import {useSelector, useDispatch} from 'react-redux';
import {CHANGE_BORDER1} from '../../../../actions/actionType/action.Coordinatefilter.type';
import {dataMar} from '../../../../utils/MarkerData1';

const ZoomMarkersView = ({bottomSheetRefZoom, onSearchPress}) => {
  const {regionMarkers} = useSelector(state => state.coordinates);

  const dispatch = useDispatch();

  const snapPoints = useMemo(() => ['5%', '10%', '37%'], []);

  const [valid, setValid] = useState(true);
  // renders
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        backgroundStyle={{backgroundColor: 'red'}}
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  // callbacks
  const handleSheetChanges = useCallback(index => {
    if (index == -1) {
      let ddD = dataMar.map((item, i) => {
        return {...item, isChecked: false};
      });

      dispatch({
        type: CHANGE_BORDER1,
        data: ddD,
      });
    }
  }, []);
  const onViewableItemsChanged = ({viewableItems}) => {
    const dataa = viewableItems.find(i => i.isViewable == true);

    const location = dataa.item.Location_ID;
    const ddd = dataMar.findIndex(i => i.Location_ID == location);
    let ddD = dataMar.map((item, i) => {
      return {...item, isChecked: false};
    });

    ddD[ddd].isChecked = true;

    dispatch({
      type: CHANGE_BORDER1,
      data: ddD,
    });
    // console.log(
    //   viewableItems[0].item.Latitude,
    //   viewableItems[0].item.Longitude,
    // );
    onSearchPress(dataa.item.Latitude, dataa.item.Longitude);
  };

  const viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);
  return (
    <>
      <BottomSheet
        backgroundStyle={{backgroundColor: 'transparent'}}
        ref={bottomSheetRefZoom}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}>
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
          <BottomSheetFlatList
            horizontal
            data={regionMarkers}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            viewabilityConfigCallbackPairs={
              viewabilityConfigCallbackPairs.current
            }
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={{
                    width: 300,
                    height: 250,

                    marginHorizontal: 10,
                    paddingBottom: 50,
                  }}>
                  <View
                    style={{
                      width: 100,
                      height: 60,

                      marginBottom: 5,
                    }}>
                    <StreetView
                      style={styles.streetView}
                      allGesturesEnabled={true}
                      coordinate={{
                        latitude: item.Latitude,
                        longitude: item.Longitude,
                      }}
                      pov={{
                        tilt: parseFloat(0),
                        bearing: parseFloat(0),
                        zoom: parseInt(1),
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 140,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,
                      position: 'relative',
                      elevation: 8,
                      backgroundColor: '#ffffff',
                      borderRadius: 15,
                      // backgroundColor: 'red',
                    }}>
                    <Text
                      style={{
                        fontSize: 17,
                        color: 'black',
                        marginTop: 10,
                        marginLeft: 18,
                        fontWeight: 'bold',
                      }}>
                      {item.FullAddress.length > 29
                        ? `${item.FullAddress.substring(0, 30)}...`
                        : item.FullAddress}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        marginTop: 10,
                        marginLeft: 18,
                      }}>
                      <Text style={{color: 'black', fontWeight: '500'}}>
                        Site Type:
                      </Text>
                      {'  '}
                      {item?.SubLocationType !== null &&
                      item?.SubLocationType.length > 2
                        ? `${item?.SubLocationType.substring(0, 5)}...`
                        : item?.SubLocationType}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        marginTop: 10,
                        marginLeft: 18,
                      }}>
                      <Text style={{color: 'black', fontWeight: '500'}}>
                        Site ID:
                      </Text>
                      {'   '}
                      {item.Location_ID}
                    </Text>
                    <View
                      style={{
                        width: '100%',
                        height: 30,
                        // backgroundColor: 'pink',
                        flexDirection: 'row',
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          marginLeft: 18,
                          fontWeight: '500',
                        }}>
                        Site Status:
                      </Text>
                      <View
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor:
                            item.LocationStatusDesc == 'Active'
                              ? '#57fd05'
                              : 'red',
                          marginLeft: 20,
                          borderRadius: 10,
                        }}></View>
                    </View>
                  </View>
                  {/*
                   */}
                </View>
              );
            }}
          />
        </View>
      </BottomSheet>
    </>
  );
};

export default ZoomMarkersView;

const styles = StyleSheet.create({
  streetView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titilview: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatItem: {
    width: '100%',
    height: 30,
    marginVertical: 1,
    flexDirection: 'row',
    marginVertical: 5,
  },
  flatItemLeft: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  flatItemRight: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
