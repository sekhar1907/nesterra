import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

const BottomSheetView = ({bottomSheetRef, catShow}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);
  const {carrierNumber} = useSelector(state => state.carrierNumber);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(carrierNumber);
  const [masterDataSource, setMasterDataSource] = useState(carrierNumber);
  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.id;
        const textData = text;
        return itemData.startsWith(textData);
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
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
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}>
        <View style={styles.top}>
          <View style={styles.textView}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
              Cancle
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>SmartSite</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
              Done
            </Text>
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
        <BottomSheetFlatList
          data={filteredDataSource}
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
        />
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
