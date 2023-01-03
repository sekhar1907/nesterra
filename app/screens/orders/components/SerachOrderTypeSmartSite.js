import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Text,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
const {height} = Dimensions.get('screen');

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {connect, useSelector, useDispatch} from 'react-redux';

// import {ALL_TANGOR_NUMBER_FILTER} from '../../../actions/actionType/TangorNumber';
import {getAllSiteNumber} from '../../../actions/SiteNumber';
import {ALL_SITE_NUMBER_FILTER} from '../../../actions/actionType/SiteNumber';
import {ORDER_FILTER_BY_INV_ID} from '../../../actions/actionType/action.OrdersForTab';

const SerachOrderTypeSmartSite = ({getAllSiteNumber, bottomSheetRef}) => {
  const {data} = useSelector(state => state.siteNumber);
  // console.log(data);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [loding, setLoding] = useState('');

  //----------------

  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: ALL_SITE_NUMBER_FILTER,
      data: text,
    });
  };
  const filterSiteData = text => {
    dispatch({
      type: ORDER_FILTER_BY_INV_ID,
      data: text,
    });
  };
  useEffect(() => {
    getAllSiteNumber(setLoding);
  }, []);

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
      <View style={{height: height - 180}}>
        {loding ? (
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
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    filterSiteData(item.id);
                    bottomSheetRef.current.close();
                    Keyboard.dismiss();
                  }}
                  style={{
                    width: '100%',
                    height: 30,

                    marginVertical: 1,

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{item.id} </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </>
  );
};

export default connect(null, {getAllSiteNumber})(SerachOrderTypeSmartSite);

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
