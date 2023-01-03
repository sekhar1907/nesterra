import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import OrderLoder from '../../lodder/OrderLoder';
import {useSelector, useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';
import ShortView from './ShortView';
import CheckBoxView from './../CheckBoxView';
import {ORDERS_ITEM} from '../../../actions/actionType/OrdersItem';
import {warinng, success} from '../../helper';
const OrderDetailsExplore = ({orderRefExplore, bottomSheetRef, lodding}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  // const {inv_Id} = route.params;
  const {item} = useSelector(state => state.orderDetailsExplore);
  const {orderItem} = useSelector(state => state.OrdersItem);
  const [allView, setAllView] = useState(false);
  const dataa = orderItem.find(i => i.Inventory_ID === item.Inventory_ID);
  const dispatch = useDispatch();
  const selectedComponent = item => {
    // console.log(item);
    switch (true) {
      case item === 'Add':
        return '#c6efcd';
      case item === 'Change':
        return '#ffc8ce';
      case item === 'Cancelled':
        return '#ffc8ce';
      case item === 'Completed':
        return '#c6efcd';
    }
  };
  const addList = it => {
    if (orderItem.length == 0) {
      dispatch({
        type: ORDERS_ITEM,
        data: it,
      });
      success('Item Added Successfully');
    } else if (orderItem.find(i => i.Inventory_ID === it.Inventory_ID)) {
      warinng('Already Added');
    } else {
      dispatch({
        type: ORDERS_ITEM,
        data: it,
      });
      success('Item Added Successfully');
    }
  };
  const LightSkyRow = ({title, value, bgColor}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: bgColor,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const LightGrewRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#f2f2f2',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const YellowRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#ffffcc',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const GrewRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#deebf7',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const OrangeLightRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#fbe5d6',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const SkyRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#b7ecff',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const DarkYellow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#e2f0d9',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  return (
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
      ref={orderRefExplore}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      animateOnMount
      animatedPosition={true}>
      {/* <View
        style={{
          width: '100%',
          height: 30,
          alignItems: 'flex-end',
          paddingRight: 25,
        }}>
        <TouchableOpacity onPress={() => orderRefExplore.current.close()}>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#007aff',
            }}>
            <Text>
              <Entypo name="cross" size={20} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          width: '100%',
          height: 30,
          marginBottom: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '50%',
            height: '100%',
          }}>
          <CheckBoxView allView={allView} setAllView={setAllView} />
        </View>
        <View
          style={{
            width: '50%',
            height: '100%',

            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 15,
            alignItems: 'center',
          }}>
          {dataa ? (
            <Entypo name="heart" size={24} color="#c338b5" />
          ) : (
            <TouchableOpacity
              onPress={() => {
                addList(item);
              }}>
              <Text>
                <EvilIcons name="heart" size={30} color="#c338b5" />
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => orderRefExplore.current.close()}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                justifyContent: 'center',

                alignItems: 'center',
                backgroundColor: '#007aff',
                marginLeft: 15,
              }}>
              <Text>
                <Entypo name="cross" size={20} color="white" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheetScrollView style={{paddingHorizontal: 10}}>
        {!lodding ? (
          !allView ? (
            <ShortView />
          ) : (
            <>
              <LightSkyRow
                title="SmartSites#"
                value={item.Smart_Site_Order_No}
                bgColor="#deebf7"
              />
              <LightSkyRow title="Tangoe#" value={'--'} bgColor="#deebf7" />
              <LightSkyRow title="Carrier#" value={'--'} bgColor="#deebf7" />
              <LightSkyRow
                title="Project Assignment"
                value={item.Project}
                bgColor="#f2f2f2"
              />
              <LightSkyRow
                title="Technical Contact"
                value={item.Technical_Contact_Name}
                bgColor="#f2f2f2"
              />
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#f2f2f2',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Order Type
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                    borderLeftColor: 'black',
                    borderLeftWidth: 0.7,

                    backgroundColor: selectedComponent(item.Order_Type),
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Order_Type}
                  </Text>
                </View>
              </View>

              <LightSkyRow
                title="Inventory ID"
                value={item.Inventory_ID}
                bgColor="#f2f2f2"
              />

              {/* ===================== */}

              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#f2f2f2',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Status
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                    borderLeftColor: 'black',
                    borderLeftWidth: 0.7,

                    backgroundColor:
                      item.Status == 'Completed' ? '#c6efcd' : '#e7c4b5',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Status}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#b7ecff',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Site ID
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    bottomSheetRef.current.close();
                    orderRefExplore.current.close();
                  }}
                  style={{
                    borderRightColor: 'black',
                    borderLeftWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                  }}>
                  <Text style={{fontWeight: '700', color: '#007aff'}}>
                    {item.Location_ID}
                  </Text>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: 'center',
                      marginLeft: 5,
                    }}
                    source={require('../../../images/location.png')}
                  />
                </TouchableOpacity>
              </View>
              <LightSkyRow
                title="Address"
                value={item.Address}
                bgColor="#b7ecff"
              />
              <LightSkyRow
                title="Branch ID"
                value={item.Branch_ID}
                bgColor="#b7ecff"
              />
              <LightSkyRow
                title="Initiation Date"
                value={moment(item.Initiation_Date).format('MM/DD/YY')}
                bgColor="#ffffcc"
              />
              <LightSkyRow
                title="Creation Date"
                value={moment(item.Creation_Date).format('MM/DD/YY')}
                bgColor="#ffffcc"
              />
              <LightSkyRow
                title="FOC Date"
                value={moment(item.FOC_Date).format('MM/DD/YY')}
                bgColor="#ffffcc"
              />

              <LightSkyRow
                title="Completion Date"
                value={moment(item.Order_Completion_Date).format('MM/DD/YY')}
                bgColor="#ffffcc"
              />
              <LightSkyRow
                title="Bill Stop Date"
                value={
                  item.Bill_Stop_Date
                    ? moment(item.Bill_Stop_Date).format('MM/DD/YY')
                    : '--'
                }
                bgColor="#ffffcc"
              />
              <LightSkyRow
                title="Vendor"
                value={item.Vendor ? item.Vendor : '--'}
                bgColor="#fbe5d6"
              />
              <LightSkyRow
                title="Category"
                value={item.Category ? item.Category : '--'}
                bgColor="#fbe5d6"
              />
              <LightSkyRow
                title="Sub Category"
                value={item.Subcat_1 ? item.Subcat_1 : '--'}
                bgColor="#fbe5d6"
              />
              <LightSkyRow
                title="RC"
                value={item.RC ? item.RC : '--'}
                bgColor="#e2f0d9"
              />
              <LightSkyRow
                title="GL"
                value={item.GL ? item.GL : '--'}
                bgColor="#e2f0d9"
              />
              <LightSkyRow
                title="Monthly Cost"
                value={
                  item.Monthly_Recurring_Cost
                    ? `$${item.Monthly_Recurring_Cost}`
                    : '--'
                }
                bgColor="#e2f0d9"
              />
              <LightSkyRow
                title="Annual Cost"
                value={item.Annual_Cost ? `$${item.Annual_Cost}` : '--'}
                bgColor="#e2f0d9"
              />
              <View style={{height: 70, width: '100%'}}></View>
            </>
          )
        ) : (
          <OrderLoder />
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default OrderDetailsExplore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
    marginBottom: 5,
    borderBottomWidth: 0,
    borderRadius: 5,
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
    paddingLeft: 10,
  },

  ///=========Table
  table: {
    width: '100%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 100,
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
    width: '23%',
    height: '100%',
    marginHorizontal: 2,
    borderBottomColor: '#73c0b8',
    borderBottomWidth: 1,
    justifyContent: 'center',
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
    fontSize: 14,
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
    width: '23%',
    height: '100%',
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxText1: {
    fontSize: 14,
    color: '#000000',
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
    height: 50,

    flexDirection: 'row',
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',

    // borderLeftColor: 'black',
    // borderLeftWidth: 1,
  },
  secondTableRow1: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  secondTableColum: {
    width: '50%',
    height: '100%',

    // borderRightColor: 'black',
    // borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
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
