import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {connect, useDispatch, useSelector} from 'react-redux';

import {getAllDevice} from '../../../actions/AllDevice';
import {
  ALL_DEVICES_SORT_BY_ID_ASC,
  ALL_DEVICES_SORT_BY_ID_DES,
  ALL_DEVICES_SORT_BY_STATUS_ASC,
  ALL_DEVICES_SORT_BY_STATUS_DES,
  ALL_DEVICES_SORT_BY_VENDOR_ASC,
  ALL_DEVICES_SORT_BY_VENDOR_DES,
  ALL_DEVICES_SORT_BY_TYPE_ASC,
  ALL_DEVICES_SORT_BY_TYPE_DES,
  GET_DEVICES_ONLY_NAME,
  GET_DEVICES_ONLY_TYPE,
  GET_DEVICES_ONLY_VENDORE,
  GET_DEVICES_SORT_ACTIVE,
  GET_DEVICES_SORT_INACTIVE,
  ALL_DATA,
} from '../../../actions/actionType/AllDevice';

import {getAllDeviceDetails} from '../../../actions/AllDevice/allDeviceDetails';
import TableHeaderFirstColum from './../../../components/TableHeaderFirstColum';
import TableHeaderOtherColum from './../../../components/TableHeaderOtherColum';

import {tostalert, copyText} from '../../../components/helper';
import DataLoder from '../../../components/lodder/DataLoder';
import BottomSheetViewDevices from './DevicesDetails';
import DevicesBottomSheet from './Devices/index';
import ToggleView from './../../../components/ToggleView/index';
import FilterButton from '../../../components/FilterButton';
import Flatrow from './Devices/Flatrow';

const Devices = ({
  getAllDevice,
  getAllDeviceDetails,
  //  deviceRefDetails,
}) => {
  const {deviceAllData} = useSelector(state => state.deviceAllData);

  // const {isLoding} = useSelector(state => state.deviceAllData);
  const dispatch = useDispatch();
  // const id = deviceAllData.filter(item => item.Device_Status == 'Active');
  // console.log(id.length);
  const [diplayName, setDiplayName] = useState('');

  // const {isLoding} = useSelector(state => state.ordersForTab);

  const [vendor, setVendor] = useState(true);
  const [status, setStatus] = useState(true);

  const [invType, setInvType] = useState(true);
  const [type, setType] = useState(true);
  const [lodding, setLodding] = useState(false);
  const [lodding1, setLodding1] = useState(true);
  const deviceRefDetails = useRef(null);
  const deviceRef = useRef(null);

  const [deviveView, setDeviveView] = React.useState(true);

  useEffect(() => {
    setLodding1(true);
    getAllDevice(setLodding1);
  }, []);

  const selectedComponent = item => {
    switch (true) {
      case item === 'Active':
        return '#c6efcd';

      case item === 'Inactive':
        return '#ffc8ce';
    }
  };
  const FiltterActive = () => {
    dispatch({
      type: GET_DEVICES_SORT_ACTIVE,
    });
  };
  const FiltterInActive = () => {
    dispatch({
      type: GET_DEVICES_SORT_INACTIVE,
    });
  };
  const allData = () => {
    dispatch({
      type: ALL_DATA,
    });
  };
  const nameHeaderClick = () => {
    if (invType) {
      setInvType(!invType);
      dispatch({
        type: ALL_DEVICES_SORT_BY_ID_ASC,
      });
    } else {
      setInvType(!invType);
      dispatch({
        type: ALL_DEVICES_SORT_BY_ID_DES,
      });
    }
  };
  const statusClick = () => {
    if (status) {
      setStatus(!status);
      dispatch({
        type: ALL_DEVICES_SORT_BY_STATUS_ASC,
      });
    } else {
      setStatus(!status);
      dispatch({
        type: ALL_DEVICES_SORT_BY_STATUS_DES,
      });
    }
  };
  const typeClick = () => {
    if (type) {
      setType(!type);
      dispatch({
        type: ALL_DEVICES_SORT_BY_TYPE_ASC,
      });
    } else {
      setType(!type);
      dispatch({
        type: ALL_DEVICES_SORT_BY_TYPE_DES,
      });
    }
  };
  const vendorClick = () => {
    if (vendor) {
      setVendor(!vendor);
      dispatch({
        type: ALL_DEVICES_SORT_BY_VENDOR_ASC,
      });
    } else {
      setVendor(!vendor);
      dispatch({
        type: ALL_DEVICES_SORT_BY_VENDOR_DES,
      });
    }
  };
  const nameFilter = () => {
    dispatch({
      type: GET_DEVICES_ONLY_NAME,
    });
    setDiplayName('Name');
    deviceRef.current.snapToIndex(1);
    setDeviveView(false);
  };
  const typeFilter = () => {
    dispatch({
      type: GET_DEVICES_ONLY_TYPE,
    });
    setDiplayName('Type');
    setDeviveView(false);
    deviceRef.current.snapToIndex(1);
  };
  const vendorFilter = () => {
    dispatch({
      type: GET_DEVICES_ONLY_VENDORE,
    });
    setDiplayName('Vendor');
    deviceRef.current.snapToIndex(1);
    setDeviveView(false);
  };
  return (
    <>
      {lodding1 ? (
        <View style={styles.loderView}>
          <DataLoder />
        </View>
      ) : (
        <>
          {/* ==============container============== */}

          {/* ========ID VIEW============= */}
          <View style={{...styles.idView}}>
            <View style={styles.idViewLeft}>
              <FilterButton
                title="Name"
                onPress={nameFilter}
                diplayName={diplayName}
              />
              <FilterButton
                title="Type"
                onPress={typeFilter}
                diplayName={diplayName}
              />
              <FilterButton
                title="Vendor"
                onPress={vendorFilter}
                diplayName={diplayName}
              />
            </View>
            <View style={styles.idViewRight}></View>
          </View>
          {/* ========ID VIEW============= */}

          {/* ======================Table  Header======================= */}
          <View style={{...styles.tableRow}}>
            <TableHeaderFirstColum
              onPress={nameHeaderClick}
              title="Name"
              type={invType}
              width="25%"
            />

            <TableHeaderOtherColum
              onPress={statusClick}
              title="Status"
              type={status}
              width="25%"
            />
            <TableHeaderOtherColum
              onPress={typeClick}
              title="Type"
              type={type}
              width="25%"
            />
            <TableHeaderOtherColum
              onPress={vendorClick}
              title="Vendor"
              type={vendor}
              width="25%"
            />
          </View>

          {/* ======================Table  Header======================= */}
          {/* ==============Services Category============== */}

          <>
            {deviceAllData.length == 0 ? (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  No Data Found
                </Text>
              </View>
            ) : (
              <>
                <View style={styles.table}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={deviceAllData}
                    keyExtractor={(item, i) => i.toString()}
                    renderItem={({index, item}) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setLodding(true);

                            const id = item.ID;
                            getAllDeviceDetails(
                              id,
                              setLodding,
                              deviceRefDetails,
                            );
                            setDeviveView(false);
                          }}
                          style={{
                            ...styles.tableRow1,
                            height: 50,
                            backgroundColor:
                              index % 2 == 0 ? '#d1d0d0' : '#ffffff',
                            marginVertical: 1,
                          }}>
                          <Flatrow title={item?.Device_Name} />

                          <View
                            style={{
                              ...styles.tableRowColum1,
                              borderLeftColor: 'white',
                              borderLeftWidth: 2,
                              backgroundColor: selectedComponent(
                                item?.Device_Status,
                              ),
                            }}>
                            <TouchableOpacity
                              onLongPress={() => {
                                copyText(item.Device_Status);
                                tostalert(item.Device_Status);
                              }}>
                              <Text style={styles.boxText1}>
                                {item?.Device_Status}
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Flatrow title={item?.Device_Type} />

                          <Flatrow title={item?.Device_Vendor} />
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </>
            )}
          </>

          {/* ==============Summary View=========== */}

          {/* <BottomSheetView deviceRef={deviceRef} lodding={lodding} />
        {lodding && <Lodder lodding={lodding} />} */}
          {/* ============TOOGLE=========== */}
          {deviveView ? (
            <>
              <ToggleView
                name="Devices"
                size={'medium'}
                length={deviceAllData.length}
                alldata={allData}
                activeFilter={FiltterActive}
              />
            </>
          ) : null}
          {/* ============TOOGLE=========== */}
        </>
      )}
      <BottomSheetViewDevices
        lodding={lodding}
        setDeviveView={setDeviveView}
        deviceRefDetails={deviceRefDetails}
      />
      <DevicesBottomSheet
        setDeviveView={setDeviveView}
        lodding1={lodding1}
        diplayName={diplayName}
        deviceRef={deviceRef}
      />
    </>
  );
};

export default connect(null, {getAllDevice, getAllDeviceDetails})(Devices);

const styles = StyleSheet.create({
  ///========id Button
  idButton: {
    width: '30%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========id View
  idView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  idViewLeft: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  idViewRight: {width: '20%', height: '100%'},
  ///========id View
  loderView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  summaryView: {
    width: '100%',
    height: 70,

    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ///========Summary Button
  summaryButton: {
    width: 100,
    height: 40,
    backgroundColor: '#007aff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========dropdown
  dropDownView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownViewLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dropDownViewRight: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    marginHorizontal: 3,
  },
  pickerItem: {width: 200, height: 40, borderWidth: 0.5},
  ///========dropdown
  ///========dropdown
  pickerBoxInner: {
    borderWidth: 0.6,
    borderColor: 'black',
    borderRadius: 2,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  pickerBoxIcon: {
    position: 'absolute',
    right: 0,
    fontSize: 23,
    color: 'red',
  },
  pickerStyle: {
    width: '120%',
    paddingBottom: 0,
    paddingLeft: 0,
    transform: [{scaleX: 0.85}, {scaleY: 0.85}],
    left: -10,
    position: 'absolute',
    backgroundColor: 'transparent',
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
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '25%',
    height: '100%',
    backgroundColor: '#007aff',

    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '25%',
    marginHorizontal: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: '700',
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
    width: '25%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ///========Second table
});
