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
  ALL_CIRCUIT_SEARCH_ONLY_VENDOR,
  ALL_CIRCUIT_FILTER_BY_VENDOR,
} from '../../../../../actions/actionType/AllCircuit';

const Vendor = ({loding1, setSwitchView, cirCuitRef}) => {
  const {allVendor} = useSelector(stata => stata.allCircuit);

  // console.log(
  //   allBranchID.filter(item => item.id == '10').length,
  //   'allbraCircuit',
  // );
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: ALL_CIRCUIT_SEARCH_ONLY_VENDOR,
      data: text,
    });
  };
  const searchbranch = text => {
    dispatch({
      type: ALL_CIRCUIT_FILTER_BY_VENDOR,
      data: text,
    });
  };

  return (
    <>
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
      {loding1 ? (
        <View
          style={{
            width: '100%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color="#007aff" size="large" />
        </View>
      ) : (
        <>
          <BottomSheetFlatList
            keyboardShouldPersistTaps="handled"
            data={allVendor}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    searchbranch(item.Vendor);
                    Keyboard.dismiss();
                    cirCuitRef.current.close();
                    setSwitchView(true);
                  }}
                  style={{
                    width: '100%',
                    height: 30,
                    marginVertical: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{item.Vendor}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.Vendor}
          />
          <View style={{height: 60}}></View>
        </>
      )}
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
