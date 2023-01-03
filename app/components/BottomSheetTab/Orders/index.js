import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FlatColum from '../../FlatColum';
import {connect, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  SORT_BY_ORDER_ID_ASC,
  SORT_BY_ORDER_ID_DES,
  SORT_BY_ORDER_STATUS_ASC,
  SORT_BY_ORDER_STATUS_DES,
  SORT_BY_ORDER_TYPE_ASC,
  SORT_BY_ORDER_TYPE_DES,
  SORT_BY_ORDER_VENDOR_ASC,
  SORT_BY_ORDER_VENDOR_DES,
  FILTER_BY_STATUS_ACTIVE,
  ALL_DATA,
} from '../../../actions/actionType/action.Order.type';

import {getOrderDetailsExpolore} from '../../../actions/OrderDetailsExplore';
import ToggleView from './../ToggleView';
import DataLoder from '../../lodder/DataLoder';
import NoDataViewFlatList from '../../NoDataViewFlatList';
const Orders = ({orderRefExplore, getOrderDetailsExpolore, orderLoding}) => {
  const {order} = useSelector(state => state.order);
  const {id} = useSelector(state => state.order);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // console.log(id);
  // console.log(order);
  const [idType, setIdType] = useState(true);
  const [vendorType, setVendorType] = useState(true);
  const [statusType, setStatusType] = useState(true);
  const [orderType, setOrderType] = useState(true);
  const [lodding, setLodding] = useState(true);
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
  const HeaderCloum = ({title, type, border, onPress}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          ...styles.tableRowColum,
          borderLeftColor: 'white',
          flexDirection: 'row',
          paddingHorizontal: 2,
          justifyContent: 'space-around',
          borderLeftWidth: border,
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
  const sordById = () => {
    if (idType) {
      setIdType(!idType);
      dispatch({
        type: SORT_BY_ORDER_ID_ASC,
      });
    } else {
      setIdType(!idType);
      dispatch({
        type: SORT_BY_ORDER_ID_DES,
      });
    }
  };
  const sordByVendor = () => {
    if (vendorType) {
      setVendorType(!vendorType);
      dispatch({
        type: SORT_BY_ORDER_VENDOR_ASC,
      });
    } else {
      setVendorType(!vendorType);
      dispatch({
        type: SORT_BY_ORDER_VENDOR_DES,
      });
    }
  };
  const sordByType = () => {
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
  };
  const sordByStatus = () => {
    if (statusType) {
      setStatusType(!statusType);
      dispatch({
        type: SORT_BY_ORDER_STATUS_ASC,
      });
    } else {
      setStatusType(!statusType);
      dispatch({
        type: SORT_BY_ORDER_STATUS_DES,
      });
    }
  };

  return (
    <>
      {/* ==============container============== */}
      <View style={{flex: 1}}>
        {/* ==============Table Header============== */}
        {orderLoding ? (
          <DataLoder />
        ) : (
          <>
            <View
              style={{
                width: '100%',
                height: 50,

                flexDirection: 'row',
              }}>
              <HeaderCloum
                title="Inv ID"
                type={idType}
                border={0}
                onPress={sordById}
              />
              <HeaderCloum
                title="Vendor"
                type={vendorType}
                border={2}
                onPress={sordByVendor}
              />
              <HeaderCloum
                title="Order Type"
                type={orderType}
                border={2}
                onPress={sordByType}
              />
              <HeaderCloum
                title="Status"
                type={statusType}
                border={2}
                onPress={sordByStatus}
              />
            </View>
            {/* ==============Table Header============== */}
            {/* ==============Table Body============== */}
            <BottomSheetFlatList
              data={order}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({index, item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      getOrderDetailsExpolore(
                        id,
                        item.Inventory_ID,

                        setLodding,
                        orderRefExplore,
                      );
                    }}
                    style={{
                      width: '100%',
                      height: 50,
                      backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
                      flexDirection: 'row',
                      marginVertical: 1,
                    }}>
                    <FlatColum title={item.Inventory_ID} border={0} />
                    <FlatColum title={item.vendor} border={2} />
                    <FlatColum title={item.Order_Type} border={2} />
                    <FlatColum title={item.Status} border={2} />
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
          </>
        )}
        {order.length > 0 ? (
          <ToggleView
            length={order.length}
            alldata={alldata}
            activeFilter={activeFilter}
          />
        ) : null}
      </View>
      {/* ==============container============== */}
    </>
  );
};

export default connect(null, {getOrderDetailsExpolore})(Orders);

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
