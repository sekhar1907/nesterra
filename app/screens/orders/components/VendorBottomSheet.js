import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useMemo} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useSelector, useDispatch} from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  ORDER_SEARCH_OLLY_VENDOR,
  ORDER_FILTER_ONLY_VENDOR,
} from '../../../actions/actionType/action.OrdersForTab';

const VendorBottomSheet = ({vendorRef}) => {
  const snapPoints = useMemo(() => ['20%', '50%'], []);
  const dispatch = useDispatch();

  const {onlyVendor} = useSelector(state => state.ordersForTab);
  // console.log(onlyVendor);
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: ORDER_SEARCH_OLLY_VENDOR,
      data: text,
    });
  };
  const changeFilterData = text => {
    dispatch({
      type: ORDER_FILTER_ONLY_VENDOR,
      data: text,
    });
  };
  const [search, setSearch] = React.useState('');

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
          <View style={styles.top}>
            <View style={styles.textView}>
              <TouchableOpacity onPress={() => vendorRef.current.close()}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Verndor</Text>
              <TouchableOpacity onPress={() => vendorRef.current.close()}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.searchView}>
              <View style={styles.searchViewLeft}>
                <TextInput
                  value={search}
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
          </View>
          {/* {isLoding ? (
            <ActivityIndicator color="#007aff" size="large" />
          ) : (*/}
          <BottomSheetFlatList
            data={onlyVendor}
            renderItem={({item}, i) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    changeFilterData(item.vendor);
                    vendorRef.current.close();
                  }}
                  style={{
                    width: '100%',
                    height: 30,
                    marginVertical: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{item.vendor}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.vendor}
          />
          {/* )} */}
        </View>
      </BottomSheet>
    </>
  );
};

export default VendorBottomSheet;

const styles = StyleSheet.create({
  top: {width: '100%', height: 130},
  textView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  searchView: {
    width: '90%',
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
