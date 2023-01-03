import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useMemo, useEffect} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';
import {FILTER_CARRIER_NUMBERR} from '../../../actions/actionType/carrier.Number.type';
import SerachOrderTypeSmartSite from './SerachOrderTypeSmartSite';
import SerachOrderType from './SerachOrderType';
import SerachTangor from './SerachTangor';
import SearchStatus from './SearchStatus';
import Carrier from './Carrier';

const BottomSheetView = ({bottomSheetRef, diplayName, bottomSheetDisplay}) => {
  const snapPoints = useMemo(() => ['20%', '50%'], []);
  const {carrierNumber} = useSelector(state => state.carrierNumber);
  const {isLoding} = useSelector(state => state.carrierNumber);

  const selectedComponent = () => {
    switch (true) {
      case bottomSheetDisplay === 'Order Type':
        return <SerachOrderType bottomSheetRef={bottomSheetRef} />;

      case bottomSheetDisplay === 'SmartSite#':
        return <SerachOrderTypeSmartSite bottomSheetRef={bottomSheetRef} />;

      case bottomSheetDisplay === 'Tangor':
        return <SerachTangor bottomSheetRef={bottomSheetRef} />;
      case bottomSheetDisplay === 'Status':
        return <SearchStatus bottomSheetRef={bottomSheetRef} />;
      case bottomSheetDisplay === 'Carrier':
        return <Carrier bottomSheetRef={bottomSheetRef} />;
    }
  };

  useEffect(() => {}, []);

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
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}>
        <View style={{flex: 1}}>
          <View style={styles.top}>
            <View style={styles.textView}>
              <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {diplayName}
              </Text>
              <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
            {selectedComponent()}
            {/* <View style={styles.searchView}>
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
          </View> */}
          </View>
          {/* {isLoding ? (
          <ActivityIndicator color="#007aff" size="large" />
        ) : (*/}
          {/* <BottomSheetFlatList
            data={[{id: 'Add'}, {id: 'Change'}, {id: 'Disco'}, {id: 'Move'}]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 30,
                    marginVertical: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{item.id}</Text>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          /> */}
          {/* )} */}
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomSheetView;

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
