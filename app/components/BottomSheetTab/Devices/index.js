import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {connect, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  SORT_BY_DEVICE_ID_ASC,
  SORT_BY_DEVICE_ID_DES,
  SORT_BY_DEVICE_NAME_ASC,
  SORT_BY_DEVICE_NAME_DES,
  SORT_BY_DEVICE_STATUS_ASC,
  SORT_BY_DEVICE_STATUS_DES,
  SORT_BY_DEVICE_VENDOR_ASC,
  SORT_BY_DEVICE_VENDOR_DES,
  ALL_DATA,
  FILTER_BY_STATUS_ACTIVE,
} from '../../../actions/actionType/devicesInventory.type';

import ToggleView from './../ToggleView';
import DataLoder from '../../lodder/DataLoder';
import NoDataViewFlatList from '../../NoDataViewFlatList';
import FlatColum from '../../FlatColum';
import {DEVICE_DETAILS_FOR_EXPLORE} from '../../../actions/actionType/DeviceDetailsExplore';
const Devices = ({deviceRefExplore, devicesLoding}) => {
  const {devicesInventory} = useSelector(state => state.devicesInventory);
  const {id} = useSelector(state => state.devicesInventory);
  // console.log(id);
  // console.log(devicesInventory[0]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [idType, setIdType] = useState(true);
  const [vendorType, setVendorType] = useState(true);
  const [statusType, setStatusType] = useState(true);
  const [nameType, setNameType] = useState(true);
  const activeFilter = () => {
    dispatch({
      type: FILTER_BY_STATUS_ACTIVE,
    });
  };
  const alldata = () => {
    dispatch({
      type: ALL_DATA,
    });
  };
  const HeaderColum = ({type, title, onPress}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          ...styles.tableRowColum,
          borderLeftColor: 'white',
          flexDirection: 'row',

          justifyContent: 'space-around',
        }}>
        <Text style={styles.boxText}>{title}</Text>
        <Text style={{marginTop: 1, marginRight: 3}}>
          <AntDesign
            name={type ? 'caretup' : 'caretdown'}
            size={16}
            color="white"
          />
        </Text>
      </TouchableOpacity>
    );
  };
  const HeaderColumSecond = ({type, title, onPress}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          ...styles.tableRowColum,
          borderLeftColor: 'white',
          borderLeftWidth: 2,
          flexDirection: 'row',
          paddingHorizontal: 5,
          justifyContent: 'space-around',
        }}>
        <Text style={styles.boxText}>{title} </Text>
        <Text style={{marginTop: 1, marginRight: 3}}>
          <AntDesign
            name={type ? 'caretup' : 'caretdown'}
            size={16}
            color="white"
          />
        </Text>
      </TouchableOpacity>
    );
  };
  const deviceSort = () => {
    if (idType) {
      setIdType(!idType);
      dispatch({
        type: SORT_BY_DEVICE_ID_ASC,
      });
    } else {
      setIdType(!idType);
      dispatch({
        type: SORT_BY_DEVICE_ID_DES,
      });
    }
  };
  const deviceNameSort = () => {
    if (nameType) {
      setNameType(!nameType);
      dispatch({
        type: SORT_BY_DEVICE_NAME_ASC,
      });
    } else {
      setNameType(!nameType);
      dispatch({
        type: SORT_BY_DEVICE_NAME_DES,
      });
    }
  };
  const deviceStatusSort = () => {
    if (statusType) {
      setStatusType(!statusType);
      dispatch({
        type: SORT_BY_DEVICE_STATUS_ASC,
      });
    } else {
      setStatusType(!statusType);
      dispatch({
        type: SORT_BY_DEVICE_STATUS_DES,
      });
    }
  };
  const deviceVendorSort = () => {
    if (vendorType) {
      setVendorType(!vendorType);
      dispatch({
        type: SORT_BY_DEVICE_VENDOR_ASC,
      });
    } else {
      setVendorType(!vendorType);
      dispatch({
        type: SORT_BY_DEVICE_VENDOR_DES,
      });
    }
  };

  return (
    <>
      {/* ==============container============== */}
      <View style={{flex: 1}}>
        {/* ==============Table Header============== */}
        {devicesLoding ? (
          <DataLoder />
        ) : (
          <>
            <View
              style={{
                width: '100%',
                height: 50,

                flexDirection: 'row',
              }}>
              <HeaderColum
                title="Devices ID"
                type={idType}
                onPress={deviceSort}
              />
              <HeaderColumSecond
                title="Device Name"
                type={nameType}
                onPress={deviceNameSort}
              />
              <HeaderColumSecond
                title="Device Status"
                type={statusType}
                onPress={deviceStatusSort}
              />
              <HeaderColumSecond
                title="Device Vendor"
                type={vendorType}
                onPress={deviceVendorSort}
              />
            </View>
            {/* ==============Table Header============== */}
            {/* ==============Table Body============== */}
            <BottomSheetFlatList
              data={devicesInventory}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({index, item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      dispatch({
                        type: DEVICE_DETAILS_FOR_EXPLORE,
                        payload: {
                          data: item,
                          id: id,
                        },
                      });

                      deviceRefExplore.current.snapToIndex(2);
                    }}
                    style={{
                      width: '100%',
                      height: 50,
                      backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
                      flexDirection: 'row',
                      marginVertical: 1,
                    }}>
                    <FlatColum title={item.ID} border={0} />
                    <FlatColum title={item.Device_Name} border={2} />
                    <FlatColum title={item.Device_Status} border={2} />
                    <FlatColum title={item.Device_Vendor} border={2} />
                  </TouchableOpacity>
                );
              }}
              ListEmptyComponent={() => {
                return (
                  <>
                    <NoDataViewFlatList />
                  </>
                );
              }}
            />
            {/* <BottomSheetScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}>
              {devicesInventory.map((item, i) => {
                return (
                  
                );
              })}
            </BottomSheetScrollView> */}
            {/* ==============Table Body============== */}
          </>
        )}
        {devicesInventory.length > 0 ? (
          <ToggleView
            length={devicesInventory.length}
            alldata={alldata}
            activeFilter={activeFilter}
          />
        ) : null}
      </View>
      {/* ==============container============== */}
    </>
  );
};

export default connect(null, {})(Devices);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  topView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  topItem: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topItem1: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
  },

  ///=========Table
  table: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 50,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRow1: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '25%',
    height: '100%',
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColum1: {
    width: '25%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 16,
    color: 'white',
  },
  ///=========Table
  ///=========data row
  tableRow1: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum1: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
  },

  boxText1: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 7,
  },
  ///=========data row
  ///========Second table
  secondTable: {
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },
  secondTableRow: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  secondTableColum: {
    width: '50%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ///========Second table
});
