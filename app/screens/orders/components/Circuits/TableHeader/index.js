import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect, useDispatch, useSelector} from 'react-redux';

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
} from '../../../../../actions/actionType/action.OrdersForTab';

const HeaderButtonFirst = ({active, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        // if (orderType) {
        //   setOrderType(!orderType);
        //   dispatch({
        //     type: SORT_BY_ORDER_TYPE_ASC,
        //   });
        // } else {
        //   setOrderType(!orderType);
        //   dispatch({
        //     type: SORT_BY_ORDER_TYPE_DES,
        //   });
        // }
      }}
      style={{
        ...styles.tableRowColum,
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Text style={{...styles.boxText1, color: 'white'}}>Type</Text>
      <Text style={{marginTop: 1, marginRight: 3}}>
        <AntDesign
          name={active ? 'caretup' : 'caretdown'}
          size={16}
          color="white"
        />
      </Text>
    </TouchableOpacity>
  );
};
const HeaderButton = ({title, active, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        // if (orderType) {
        //   setOrderType(!orderType);
        //   dispatch({
        //     type: SORT_BY_ORDER_TYPE_ASC,
        //   });
        // } else {
        //   setOrderType(!orderType);
        //   dispatch({
        //     type: SORT_BY_ORDER_TYPE_DES,
        //   });
        // }
      }}
      style={{
        ...styles.tableRowColum,
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: 2,
      }}>
      <Text style={{...styles.boxText1, color: 'white'}}>{title}</Text>
      <Text style={{marginTop: 1, marginRight: 3}}>
        <AntDesign
          name={active ? 'caretup' : 'caretdown'}
          size={16}
          color="white"
        />
      </Text>
    </TouchableOpacity>
  );
};

const Tableheader = () => {
  const dispatch = useDispatch();

  const typeSort = () => {
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
  const statusSort = () => {
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
  };
  const vendorSort = () => {
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
  };
  const dateSort = () => {
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
  };
  const itemSort = () => {
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
  };
  const [vendor, setVendor] = useState(true);
  const [status, setStatus] = useState(true);
  const [dateType, setDateType] = useState(true);
  const [invType, setInvType] = useState(true);
  const [item, setItem] = useState(true);
  const [orderType, setOrderType] = useState(true);
  return (
    <>
      <View style={{...styles.tableRow}}>
        <HeaderButtonFirst active={orderType} width="20%" onPress={typeSort} />
        <HeaderButton
          width="20%"
          title="Vendor"
          active={vendor}
          onPress={vendorSort}
        />
        <HeaderButton
          width="20%"
          title="Status"
          active={status}
          onPress={statusSort}
        />
        <HeaderButton
          width="20%"
          title="Initation"
          active={dateType}
          onPress={dateSort}
        />
        <HeaderButton
          width="20%"
          title="Item#"
          active={invType}
          onPress={itemSort}
        />
      </View>
    </>
  );
};

export default Tableheader;

const styles = StyleSheet.create({
  tableRow: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
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

  boxText1: {
    fontSize: 16,
    color: 'white',
  },
});
