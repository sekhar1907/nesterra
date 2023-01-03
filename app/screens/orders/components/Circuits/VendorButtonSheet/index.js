import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';

import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetCheckBox from '../../../../../components/checkBox/BottomSheetCheckBox';
import {
  ORDER_FILTER_ONLY_VENDOR,
  FILTER_BY_VENDOR,
  CHECK_VENDOR,
} from '../../../../../actions/actionType/action.OrdersForTab';

const VendorButtonSheet = ({vendorRef, setSwitchView, setDiplayName}) => {
  const snapPoints = useMemo(() => ['20%', '70%'], []);
  const dispatch = useDispatch();
  const {onlyVendor} = useSelector(state => state.ordersForTab);
  const {checkList} = useSelector(state => state.ordersForTab);
  // console.log(checkList, 'che');
  const [search, setSearch] = useState('');

  const filterData = text => {
    setSearch(text);
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
    vendorRef.current.close();
    setSwitchView(true);
    setDiplayName('');
  };

  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 2.5,
          opacity: 0.5,
        }}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={vendorRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}>
        <View style={{flex: 1}}>
          <View style={{...styles.top}}>
            <View style={styles.textView}>
              <TouchableOpacity
                onPress={() => {
                  // setSwitchView(true);
                  vendorRef.current.close();
                  Keyboard.dismiss();
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Vendor</Text>
              <TouchableOpacity
                onPress={() => {
                  filter();
                  // setSwitchView(true);
                  // cirCuitRef.current.close();
                  // Keyboard.dismiss();
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchView}>
            <View style={styles.searchViewLeft}>
              <TextInput
                value={search}
                placeholder="Search Here"
                style={{
                  paddingLeft: 10,
                }}
                onChangeText={text => filterData(text)}
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
              );
            }}
            keyExtractor={item => item.vendor}
          />
          <View
            style={{
              height: 60,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
        </View>
      </BottomSheet>
    </>
  );
};

export default VendorButtonSheet;

const styles = StyleSheet.create({
  top: {width: '100%', height: 50},
  textView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
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
