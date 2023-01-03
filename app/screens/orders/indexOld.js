import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Keyboard,
  Image,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('screen');

import React, {useState, useEffect, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {get_orders_for_tab} from '../../actions/orderFotTab';
import {connect, useDispatch, useSelector} from 'react-redux';
import BottomSheetView from './components/BottomSheetView';
import BottomSheetViewDetails from './components/BottomSheetViewDetails';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import moment from 'moment';
import OrderLoder from '../../components/lodder/OrderLoder';
import {
  SORT_BY_VENDOR_ASC,
  SORT_BY_VENDOR_DES,
  SORT_BY_STATUS_ASC,
  SORT_BY_STATUS_DES,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DES,
  SORT_BY_INV_ID_ASC,
  SORT_BY_INV_ID_DES,
  SORT_BY_ORDER_TYPE_ASC,
  SORT_BY_ORDER_TYPE_DES,
  ORDER_FILTER_BY_DATE,
  GET_ONLY_VENDOR,
} from '../../actions/actionType/action.OrdersForTab';
import {tostalert, copyText} from '../../components/helper';

import {get_order_details} from '../../actions/order';
import VendorBottomSheet from './components/VendorBottomSheet';

const Category = [
  {
    id: 0,
    name: 'Order Type',
    value: 'GetOrderTypeNumber',
    disValue: 'OrderType',
    search: 'Order Type',
    active: false,
  },
  {
    id: 1,
    name: 'Status',
    value: 'Status',
    disValue: 'Status',
    search: 'Status',
    active: false,
  },
  {
    id: 2,
    name: 'SmartSite#',
    value: 'GetSmartSiteNumber',
    disValue: 'SmartSite',
    search: 'SmartSite#',
    active: false,
  },

  {
    id: 3,
    name: 'Tangor',
    value: 'GetTangoeNumber',
    disValue: 'Tangor',
    search: 'Tangor',
    active: false,
  },
  {
    id: 4,
    name: 'Carrier',
    value: 'GetCarrierNumber',
    disValue: 'Carrier',
    search: 'Carrier',
    active: false,
  },
];

const Orders = ({
  get_order_details,

  get_orders_for_tab,
}) => {
  const {ordersForTab} = useSelector(state => state.ordersForTab);
  const dispatch = useDispatch();

  // const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  // console.log(ordersForTab);
  ///
  const [refresh, setRefresh] = useState(false);

  const {isLoding} = useSelector(state => state.ordersForTab);
  const [diplayName, setDisplayName] = useState('');
  const bottomSheetRef = useRef(null);
  const bottomSheetRefdetails = useRef(null);
  const vendorRef = useRef(null);

  const [vendor, setVendor] = useState(true);
  const [status, setStatus] = useState(true);
  const [dateType, setDateType] = useState(true);
  const [invType, setInvType] = useState(true);
  const [orderType, setOrderType] = useState(true);

  const [data, setData] = useState(Category);

  const [bottomSheetDisplay, setBottomSheetDisplay] = useState('');
  const [lodding, setLodding] = useState(false);
  const [type, setType] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  //  console.log(ordersForTab.ma(item => item.Smart_Site_Order_No == '0186'));
  useEffect(() => {
    get_orders_for_tab();
  }, []);
  //=============Date Picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    // console.log(moment(date).format('MM-DD-YY'));
    dispatch({
      type: ORDER_FILTER_BY_DATE,
      data: moment(date).format('MM-DD-YY'),
    });

    hideDatePicker();
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    Keyboard.dismiss();
  };
  // =======Date Picker
  //barckground color change
  const selectedComponent = item => {
    switch (true) {
      case item === 'In Progress':
        return '#ffffbf';

      case item === 'Initiated':
        return '#ffc8ce';

      case item === 'Cancelled':
        return '#ffc8ce';

      case item === 'Completed':
        return '#c6efcd';
    }
  };
  //barckground color change
  //bottom color change

  const changeBottomColor = id => {
    let listData = data.map(item => {
      let itm = {...item, active: false};
      return itm;
    });

    listData[id].active = true;
    setData(listData);
  };
  const changeBottomColor1 = () => {
    let listData = data.map(item => {
      let itm = {...item, active: false};
      return itm;
    });

    setData(listData);
  };
  //bottom color change
  const randerItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={
          () => {
            vendorRef.current.close();
            // setLodding(true);
            bottomSheetRef.current.close();
            // if (!lodding) {
            //   bottomSheetRefdetails.current.snapToIndex(2);
            // }
            get_order_details(
              item.Inventory_ID,
              setLodding,

              bottomSheetRefdetails,
            );
          }
          // navigation.navigate('OrderDetails', {
          //   inv_Id: item.Inventory_ID,
          // })
        }
        style={{
          ...styles.tableRow1,
          height: 60,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          marginVertical: 1,
        }}>
        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            backgroundColor: selectedComponent(item?.Status),
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Order_Type);

              tostalert(item.Order_Type);
            }}>
            <Text style={styles.boxText1}> {item?.Order_Type}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            backgroundColor: selectedComponent(item?.Status),
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Status);
              tostalert(item.Status);
            }}>
            <Text style={styles.boxText1}>{item?.Status}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            backgroundColor: selectedComponent(item?.Status),
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Smart_Site_Order_No);
              tostalert(item.Smart_Site_Order_No);
            }}>
            <Text style={styles.boxText1}>
              {item?.Smart_Site_Order_No ? item.Smart_Site_Order_No : '--'}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Inventory_ID);
              tostalert(item.Inventory_ID);
            }}>
            <Text style={styles.boxText1}>{item?.Inventory_ID}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(moment(item.Initiation_Date).format('MM-DD-YY'));
              tostalert(moment(item.Initiation_Date).format('MM-DD-YY'));
            }}>
            <Text style={styles.boxText1}>
              {item?.Initiation_Date
                ? moment(item.Initiation_Date).format('MM-DD-YY')
                : '--'}
              {/* {moment(item.Initiation_Date).format('DD-MM-YYYY')} */}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        {/* ==============container============== */}

        {/* ==============Summary View=========== */}
        {/* <View
          style={{
            ...styles.summaryView,

            alignItems: 'center',
          }}>
          <View style={styles.summaryButton}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Summary
            </Text>
          </View>
          <View style={{marginLeft: 15}}>
            <Text style={{color: 'black', fontSize: 14}}>
              {ordersForTab.length}
            </Text>
            <Text style={{color: 'black', fontSize: 14}}>Records</Text>
          </View>
        </View> */}

        {/* ==============Vendor And Date View============== */}
        <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              dispatch({
                type: GET_ONLY_VENDOR,
              });
              setType('Vendor');
              bottomSheetRefdetails.current.close();
              vendorRef.current.snapToIndex(1);
            }}
            style={{
              ...styles.categoryBottom,

              backgroundColor: type == 'Vendor' ? '#007aff' : null,

              borderWidth: type == 'Vendor' ? 0 : 1,
            }}>
            <Text style={{color: type == 'Vendor' ? 'white' : 'black'}}>
              Vendor
            </Text>
            <FontAwesome5
              name="eject"
              size={14}
              style={{
                transform: [{rotate: '180deg'}],
                marginLeft: 10,
                marginTop: 3,
              }}
              color={type == 'Vendor' ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setType('Date');
              showDatePicker();
            }}
            style={{
              ...styles.categoryBottom,

              backgroundColor: type == 'Date' ? '#007aff' : null,

              borderWidth: type == 'Date' ? 0 : 1,
            }}>
            <Text style={{color: type == 'Date' ? 'white' : 'black'}}>
              Date
            </Text>

            <FontAwesome5
              name="eject"
              size={14}
              style={{
                transform: [{rotate: '180deg'}],
                marginLeft: 10,
                marginTop: 3,
              }}
              color={type == 'Date' ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>

        {/* ==============Vendor And Date View============== */}
        {/* ==============Services Category============== */}
        <View style={{...styles.dropDownView}}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{width: '100%', height: '100%'}}>
            {data.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    // GetCarrierNumber(item.value);
                    setDisplayName(item.disValue);
                    bottomSheetRef.current.snapToIndex(1);
                    setBottomSheetDisplay(item.search);
                    changeBottomColor(item.id);
                  }}
                  style={{
                    ...styles.categoryBottom,

                    backgroundColor: item.active ? '#007aff' : null,

                    borderWidth: item.active ? 0 : 1,
                  }}>
                  <Text style={{color: item.active ? 'white' : 'black'}}>
                    {item.name}
                  </Text>
                  <FontAwesome5
                    name="eject"
                    size={14}
                    style={{
                      transform: [{rotate: '180deg'}],
                      marginLeft: 10,
                      marginTop: 3,
                    }}
                    color={item.active ? 'white' : 'black'}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* ======================Table  Header======================= */}
        <View style={{...styles.tableRow}}>
          <TouchableOpacity
            onPress={() => {
              if (orderType) {
                setOrderType(!orderType);
                dispatch({
                  type: SORT_BY_ORDER_TYPE_ASC,
                });
              } else {
                setOrderType(!orderType);
                dispatch({
                  type: SORT_BY_ORDER_TYPE_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Type</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={orderType ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (status) {
                setStatus(!status);
                dispatch({
                  type: SORT_BY_STATUS_ASC,
                });
              } else {
                setStatus(!status);
                dispatch({
                  type: SORT_BY_STATUS_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              width: '20%',
              borderLeftColor: 'white',
              borderLeftWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Status</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={status ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (vendor) {
                setVendor(!vendor);
                dispatch({
                  type: SORT_BY_VENDOR_ASC,
                });
              } else {
                setVendor(!vendor);
                dispatch({
                  type: SORT_BY_VENDOR_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              width: '20%',
              flexDirection: 'row',
              borderLeftColor: 'white',
              borderLeftWidth: 2,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Site#</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={vendor ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (invType) {
                setInvType(!invType);
                dispatch({
                  type: SORT_BY_INV_ID_ASC,
                });
              } else {
                setInvType(!invType);
                dispatch({
                  type: SORT_BY_INV_ID_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              width: '20%',
              borderLeftColor: 'white',
              borderLeftWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Inv ID</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={invType ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (dateType) {
                setDateType(!dateType);
                dispatch({
                  type: SORT_BY_DATE_ASC,
                });
              } else {
                setDateType(!dateType);
                dispatch({
                  type: SORT_BY_DATE_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              width: '20%',
              borderLeftColor: 'white',
              borderLeftWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Date</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={dateType ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/* ======================Table  Header======================= */}
        {/* ==============Services Category============== */}
        {isLoding ? (
          <View style={styles.loderView}>
            <OrderLoder />
          </View>
        ) : (
          <>
            {/* {ordersForTab.length == 0 ? (
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
            ) : ( */}
            <>
              <View style={styles.table}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={ordersForTab}
                  keyExtractor={(item, i) => i.toString()}
                  renderItem={(item, i) => randerItem(item)}
                  refreshing={refresh}
                  onRefresh={() => {
                    setType('');
                    changeBottomColor1();
                    get_orders_for_tab();
                  }}
                  ListEmptyComponent={() => {
                    return (
                      <View
                        style={{
                          width: '100%',
                          height: 500,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            width: '100%',
                            height: 200,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{
                              width: '100%',
                              height: 100,
                              resizeMode: 'contain',
                            }}
                            source={require('../../images/empty.png')}
                          />
                          <Text style={{fontSize: 25}}>No Data Found</Text>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            </>
          </>
        )}
        {/* ==============Summary View=========== */}
      </SafeAreaView>
      {/* {selectedComponent()} */}
      <BottomSheetView
        bottomSheetDisplay={bottomSheetDisplay}
        diplayName={diplayName}
        bottomSheetRef={bottomSheetRef}
      />
      <BottomSheetViewDetails
        lodding={lodding}
        bottomSheetRefdetails={bottomSheetRefdetails}
      />
      <VendorBottomSheet lodding={lodding} vendorRef={vendorRef} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View
        style={{
          width: 130,
          height: 45,
          backgroundColor: '#007aff',
          position: 'absolute',
          bottom: 55,
          zIndex: 1,
          left: width / 2 - 65,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>
          {ordersForTab.length}
        </Text>
        <Text style={{fontWeight: 'bold', color: 'white', marginLeft: 12}}>
          Orders
        </Text>
      </View>
    </>
  );
};

export default connect(null, {
  get_order_details,
  get_orders_for_tab,
})(Orders);

const styles = StyleSheet.create({
  //category Bottom
  categoryBottom: {
    width: 100,
    height: 40,
    borderRadius: 9,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
    marginHorizontal: 5,
  },
  //category Bottom
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

    flexDirection: 'row',
  },
  ///========Summary Button
  summaryButton: {
    width: 100,
    height: 40,
    backgroundColor: '#007aff',
    borderRadius: 10,
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
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRow1: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    height: '100%',
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '20%',
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
