import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo, useRef, useEffect, useState, useCallback} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {useSelector, connect, useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Pics from '../../components/BottomSheetTab/Pics';
import Hours from '../../components/BottomSheetTab/Hours';
import Info from '../../components/BottomSheetTab/Info';
import Circuits from '../../components/BottomSheetTab/Circuits';
import Devices from '../../components/BottomSheetTab/Devices';
import Orders from '../../components/BottomSheetTab/Orders';
import Atms from '../../components/BottomSheetTab/Atms';
import Notes from '../../components/BottomSheetTab/Notes';
import {
  SITE_ITEM,
  SITE_ITEM_REMOVE,
} from './../../actions/actionType/SiteItem/index';
import {LocationKey} from '../../key';

import {GET_PHOTO_URL_FROM_MAP} from '../../actions/actionType/action.photoMapurl.type';
import {getAllAtms} from '../../actions/ATMS';
import {get_all_devices_inventory} from '../../actions/devicesInventory';
import {get_order} from '../../actions/order';
import {getInventoryCircuit} from '../../actions/circuitInventory';
import {getNotes} from './../../actions/Notes/index';
import {copyText, tostalert} from '../../components/helper';

const BottomSheetView = ({
  notesRef,
  bottomSheetRef,
  deviceRefExplore,
  cirCuitRefExplore,
  orderRefExplore,

  atmdDetailsRef,
  bottomSheetLoder,
  setDetailsLoder,
  getNotes,
  getAllAtms,
  get_all_devices_inventory,
  get_order,
  getInventoryCircuit,
  imageAddRef,
  setstreetImage,
}) => {
  // console.log(cirCuitRef, bottomSheetRef,picRef );
  const snapPoints = useMemo(() => ['10%', '26%', '95%'], []);
  const location_data = useSelector(state => state.location_details.data);
  const {siteItem} = useSelector(state => state.SiteItem);
  const dataa = siteItem.find(i => i.id === location_data.Location_ID);
  const {lat, lng} = useSelector(state => state.setLatLang);
  const [isLoding, setDataLoder] = useState(true);
  const [atmLoding, setAtmLoding] = useState(false);
  const [circuitLoding, setcircuitLoding] = useState(false);
  const [devicesLoding, setDevicesLoding] = useState(false);
  const [orderLoding, setOrderLoding] = useState(false);
  const [notesLoding, setNotesLoding] = useState(false);
  const [index, sedtIndex] = useState(1);
  const dispatch = useDispatch();
  const myRef = useRef(null);

  const data = [
    {id: 0, name: 'INFO', isActive: true},
    {id: 1, name: 'PICS', isActive: false},
    {id: 2, name: 'HOURS', isActive: false},
    {id: 3, name: 'ATMS', isActive: false},
    {id: 4, name: 'CIRCUITS', isActive: false},
    {id: 5, name: 'DEVICES', isActive: false},
    {id: 6, name: 'ORDERS', isActive: false},
    {id: 7, name: 'Notes', isActive: false},
  ];
  const [item, setItem] = useState(0);
  const [data1, setData1] = useState(data);
  const changeColor = (id, name) => {
    getData(name);
    let listData = data1.map(item => {
      let itm = {...item, isActive: false};
      return itm;
    });

    listData[id].isActive = true;
    setData1(listData);
  };
  const getData = name => {
    switch (true) {
      case name === 'ATMS':
        setAtmLoding(true);
        getAllAtms(location_data.Location_ID, setAtmLoding);
        break;
      case name === 'CIRCUITS':
        setcircuitLoding(true);
        getInventoryCircuit(location_data.Location_ID, setcircuitLoding);
        break;
      case name === 'HOURS':
        break;
      case name === 'DEVICES':
        setDevicesLoding(true);
        get_all_devices_inventory(location_data.Location_ID, setDevicesLoding);
        break;
      case name === 'PICS':
        setDataLoder(true);
        fetchNearestPlacesFromGoogle();
        break;
      case name === 'ORDERS':
        setOrderLoding(true);
        get_order(location_data.Location_ID, setOrderLoding);
        break;
      case name === 'Notes':
        setNotesLoding(true);
        getNotes(setNotesLoding);
        break;
    }
  };
  const centerTab = i => {
    myRef.current.scrollToIndex({animated: true, index: i, viewPosition: 0.5});
  };
  const ranDerView = () => {
    switch (true) {
      case item == 0:
        return <Info />;
      case item == 1:
        return <Pics isLoding={isLoding} imageAddRef={imageAddRef} />;
      case item == 2:
        return <Hours />;

      case item == 3:
        return (
          <Atms
            atmLoding={atmLoding}
            setDetailsLoder={setDetailsLoder}
            atmdDetailsRef={atmdDetailsRef}
          />
        );
      case item == 4:
        return (
          <Circuits
            circuitLoding={circuitLoding}
            cirCuitRefExplore={cirCuitRefExplore}
            bottomSheetRef={bottomSheetRef}
          />
        );

      case item == 5:
        return (
          <Devices
            deviceRefExplore={deviceRefExplore}
            devicesLoding={devicesLoding}
          />
        );

      case item == 6:
        return (
          <Orders orderRefExplore={orderRefExplore} orderLoding={orderLoding} />
        );
      case item == 7:
        return <Notes notesLoding={notesLoding} />;
    }
  };
  const remove = id => {
    dispatch({
      type: SITE_ITEM_REMOVE,
      data: id,
    });
  };
  const addList = (id, add) => {
    const dd = {
      id: id,
      add: add,
    };
    dispatch({
      type: SITE_ITEM,
      data: dd,
    });

    // if (dataa) {
    //   dispatch({
    //     type: SITE_ITEM,
    //     data: dd,
    //   });

    //   setMarkerType(!marKerType);
    // } else {
    //   alert('no');
    // }
  };
  const fetchNearestPlacesFromGoogle = () => {
    // setDataLoder(true);
    // const lat = e.nativeEvent.coordinate.latitude;
    // const lng = e.nativeEvent.coordinate.longitude;
    let radMetter = 20 * 1000; // Search withing 2 KM radius
    const url =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
      lat +
      ',' +
      lng +
      '&radius=' +
      radMetter +
      '&key=' +
      LocationKey;

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.results) {
          dispatch({
            type: GET_PHOTO_URL_FROM_MAP,
            payload: {
              data: res.results,
            },
          });
          setDataLoder(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    // ranDerView(0);
  }, []);
  const handleSheetChanges = useCallback(index => {
    // console.log('handleSheetChanges', index);
    switch (true) {
      case index == 1:
        setstreetImage(true);
        break;
      case index == 2:
        setstreetImage(false);
        break;
      case index == -1:
        setstreetImage(false);
        break;
    }
  }, []);
  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 0,
          opacity: 0.5,
        }}
        handleComponent={() => (
          <View style={styles.closeLineContainer}>
            <View style={styles.closeLine}>
              <SimpleLineIcons name="arrow-up" size={20} color="black" />
            </View>
          </View>
        )}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}
        onChange={handleSheetChanges}>
        <View
          style={{
            height: 155,
            width: '100%',
          }}>
          <View
            style={{
              width: '100%',
              height: 100,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                bottomSheetRef.current.snapToIndex(2);
              }}
              style={{
                width: '70%',
                height: '100%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'black',
                  marginLeft: 10,
                }}>
                {location_data?.Address}
                <Text>{'  '} </Text>
              </Text>
              {/* <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  marginLeft: 10,
                  marginBottom: 10,
                }}>
                {location_data?.SubLocationType}
              </Text> */}
              <View style={{width: '100%', flexDirection: 'row'}}>
                <Text style={{fontSize: 16, marginLeft: 10, color: 'black'}}>
                  Sity Type:{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 10,
                    color: 'black',
                  }}>
                  {location_data?.SubLocationType}
                </Text>
              </View>

              <View style={{width: '100%', flexDirection: 'row'}}>
                <Text style={{fontSize: 16, marginLeft: 10, color: 'black'}}>
                  Sity ID:{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 10,
                    color: 'black',
                  }}>
                  {location_data?.Location_ID}
                  {'  '}
                </Text>
              </View>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <Text style={{fontSize: 16, marginLeft: 10, color: 'black'}}>
                  Sity Status:{' '}
                </Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: location_data?.LocationStatusDesc
                      ? '#56ff00'
                      : 'red',
                    borderRadius: 10,
                  }}></View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '30%',
                height: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '100%',
                  height: '20%',

                  alignItems: 'flex-end',
                  paddingRight: 12,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setstreetImage(false);
                    bottomSheetRef.current.close();
                  }}>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#007aff',
                    }}>
                    <Text>
                      <Entypo name="cross" size={18} color="white" />
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '80%',
                  justifyContent: 'space-around',
                  alignItems: 'flex-end',
                  paddingRight: 8,
                }}>
                <TouchableOpacity>
                  <Text>
                    <EvilIcons name="share-apple" size={28} color="#007aff" />
                  </Text>
                  {/* <AntDesign name="upload" size={24} color="#007aff" /> */}
                </TouchableOpacity>
                {dataa ? (
                  <TouchableOpacity
                    style={{marginBottom: 5, marginRight: 2.5}}
                    onPress={() => {
                      remove(location_data?.Location_ID);
                    }}>
                    <Text>
                      <Entypo name="heart" size={22} color="#c338b5" />
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{marginBottom: 5, marginRight: 2.5}}
                    onPress={() => {
                      addList(
                        location_data?.Location_ID,
                        location_data?.Address,
                      );
                    }}>
                    <Text>
                      <EvilIcons name="heart" size={24} color="#c338b5" />
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              {/*
               */}
            </View>
          </View>
          <BottomSheetFlatList
            horizontal
            ref={myRef}
            data={data1}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, i}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    changeColor(item.id, item.name);
                    setItem(item.id);
                    centerTab(item.id);
                  }}
                  style={{
                    width: 100,
                    backgroundColor: 'red',
                    height: 40,
                    margin: 2,
                    borderRadius: 12,
                    borderWidth: item.isActive ? 0 : 1,
                    backgroundColor: item.isActive ? '#007aff' : '#f2f2f7',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: item.isActive ? 'white' : 'black'}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
        {ranDerView()}
      </BottomSheet>
    </>
  );
};

export default connect(null, {
  getAllAtms,
  get_all_devices_inventory,
  getInventoryCircuit,
  get_order,
  getNotes,
})(BottomSheetView);

const styles = StyleSheet.create({
  textStyles: {
    // marginLeft: 5,
  },
  contentContainer: {
    backgroundColor: 'yellow',
    // paddingTop: 10,
  },
  leftLower: {
    width: '50%',
    height: '100%',
  },
  item: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  leftItem: {width: '30%', height: '100%', justifyContent: 'center'},
  rightItem: {
    width: '70%',
    height: '100%',
    borderLeftColor: '#77ccc5',
    borderLeftWidth: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  closeLineContainer: {
    alignSelf: 'center',
  },
  closeLine: {
    width: 30,
    height: 30,
    borderRadius: 3,
    marginTop: 9,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
