import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  ORDER_SEARCH_OLLY_VENDOR,
  ORDER_FILTER_ONLY_VENDOR,
  CHECK_VENDOR,
  FILTER_BY_VENDOR,
} from '../../../../../../actions/actionType/action.OrdersForTab';
import BottomSheetCheckBox from '../../../../../../components/checkBox/BottomSheetCheckBox';

const Vendor = ({cirCuitRef, setSwitchView}) => {
  const dispatch = useDispatch();
  const {onlyVendor} = useSelector(state => state.ordersForTab);
  const {checkList} = useSelector(state => state.ordersForTab);
  // console.log(checkList, 'che');
  const [search, setSearch] = useState('');
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: ORDER_SEARCH_OLLY_VENDOR,
      data: text,
    });
  };
  const filterData = text => {
    dispatch({
      type: ORDER_FILTER_ONLY_VENDOR,
      data: text,
    });
  };
  const handleChange = id => {
    dispatch({
      type: CHECK_VENDOR,
      id: id,
    });
  };
  const filter = () => {
    if (checkList.length > 0) {
      dispatch({
        type: FILTER_BY_VENDOR,
        data: checkList,
      });
    }
    cirCuitRef.current.close();
  };
  return (
    <>
      <View style={styles.searchView}>
        <View style={styles.searchViewLeft}>
          <TextInput
            // value={search}
            placeholder="Search Here"
            style={{
              paddingLeft: 10,
            }}
            onChangeText={text => searchFilterFunction(text)}
          />
        </View>
        <View style={styles.searchViewRight}>
          <EvilIcons name="search" size={24} color="black" />
        </View>
      </View>
      <BottomSheetFlatList
        keyboardShouldPersistTaps="handled"
        data={onlyVendor}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: '100%',
                height: 30,
                marginVertical: 1,
                alignItems: 'center',
              }}>
              <BottomSheetCheckBox
                handleChange={handleChange}
                value={item}
                item={item}
              />
            </View>
            // <TouchableOpacity
            //   onPress={() => {
            //     filterData(item.vendor);
            //     Keyboard.dismiss();
            //     setSwitchView(true);
            //     cirCuitRef.current.close();
            //   }}
            //   style={{
            //     width: '100%',
            //     height: 30,
            //     marginVertical: 1,
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //   }}>
            //   <Text style={{fontWeight: 'bold'}}>{item.vendor}</Text>
            // </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.vendor}
      />
      <View
        style={{
          height: 100,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '50%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50,
            backgroundColor: 'red',
          }}
          onPress={() => {
            filter();
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Vendor;

const styles = StyleSheet.create({
  searchView: {
    width: '90%',
    height: 50,

    alignSelf: 'center',
    borderColor: 'black',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  searchViewLeft: {
    width: '90%',
    height: '100%',
  },
  searchViewRight: {
    width: '10%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    paddingRight: 5,
  },
});
