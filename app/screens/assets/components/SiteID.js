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
import {FILTER_BY_LOC_ID_OR_SITE_SITE_ID} from '../../../actions/actionType/AllSiteID';
import {ALL_CIRCUIT_FILTER_BY_LOCATION_ID} from './../../../actions/actionType/AllCircuit/index';

const SiteID = ({loding1, setSwitchView, cirCuitRef}) => {
  const {allSiteID} = useSelector(stata => stata.allSiteID);
  // console.log(allSiteID.length, 'allBranchID');
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: FILTER_BY_LOC_ID_OR_SITE_SITE_ID,
      data: text,
    });
  };
  const filterCircuitData = text => {
    dispatch({
      type: ALL_CIRCUIT_FILTER_BY_LOCATION_ID,
      data: text,
    });
  };
  useEffect(() => {}, []);

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
        <BottomSheetFlatList
          keyboardShouldPersistTaps="handled"
          data={allSiteID}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSwitchView(true);
                  filterCircuitData(item.id);
                  Keyboard.dismiss();
                  cirCuitRef.current.close();
                }}
                style={{
                  width: '100%',
                  height: 30,
                  marginVertical: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold'}}>{item.id}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );
};

export default SiteID;

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
