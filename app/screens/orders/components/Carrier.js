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

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector, connect} from 'react-redux';
import {GetAllCarrierNumber} from '../../../actions/CarrierNumber';

import {ALL_CARRIER_NUMBER_FILTER} from './../../../actions/actionType/CarrierNumber/index';
const {height} = Dimensions.get('screen');
const Carrier = ({GetAllCarrierNumber, bottomSheetRef}) => {
  const {data} = useSelector(state => state.carrierNumber);
  // console.log(data);
  const dispatch = useDispatch();
  const [loding, setLoding] = useState('');

  const [search, setSearch] = useState('');
  //============
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: ALL_CARRIER_NUMBER_FILTER,
      data: text,
    });
  };
  //===============
  useEffect(() => {
    GetAllCarrierNumber(setLoding);
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
        {/* {isLoding ? (
      <ActivityIndicator color="#007aff" size="large" />
    ) : ( */}

        {/* )} */}
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

export default connect(null, {GetAllCarrierNumber})(Carrier);

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
