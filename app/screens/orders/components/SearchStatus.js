import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {connect, useDispatch} from 'react-redux';

import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {ORDER_FILTER_BY_STATUS} from '../../../actions/actionType/action.OrdersForTab';

const {height} = Dimensions.get('screen');

const SearchStatus = ({bottomSheetRef}) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const data = [
    {id: 'Completed'},
    {id: 'Initiated'},
    {id: 'In Progress'},
    {id: 'Identified'},
  ];
  useEffect(() => {
    //getOrdersType();
  }, []);
  const filderData = name => {
    dispatch({
      type: ORDER_FILTER_BY_STATUS,
      data: name,
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
            // onChangeText={text => searchFilterFunction(text)}
          />
        </View>
        <View style={styles.searchViewRight}>
          <EvilIcons name="search" size={24} color="black" />
        </View>
      </View>
      <View style={{height: height - 180}}>
        <BottomSheetFlatList
          keyboardShouldPersistTaps="handled"
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  filderData(item.id);
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
      </View>
    </>
  );
};

export default connect(null, {})(SearchStatus);

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
