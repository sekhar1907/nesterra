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
import {useDispatch} from 'react-redux';
import {GET_ORDERS_FOR_TAB_FILTER_STATUS} from '../../../../../../actions/actionType/action.OrdersForTab';

const Status = ({cirCuitRef, setSwitchView}) => {
  const data = [
    {id: 0, name: 'In Progress'},
    {id: 1, name: 'Initiated'},
    {id: 2, name: 'Cancelled'},
    {id: 3, name: 'Completed'},
  ];

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  //   const searchFilterFunction = text => {
  //     setSearch(text);
  //     dispatch({
  //       type: ALL_BRANCH_ID_FILTER_ID,
  //       data: text,
  //     });
  //   };
  const filterData = text => {
    dispatch({
      type: GET_ORDERS_FOR_TAB_FILTER_STATUS,
      data: text,
    });
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
            // onChangeText={text => searchFilterFunction(text)}
          />
        </View>
        <View style={styles.searchViewRight}>
          <EvilIcons name="search" size={24} color="black" />
        </View>
      </View>
      <BottomSheetFlatList
        keyboardShouldPersistTaps="handled"
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                filterData(item.name);
                Keyboard.dismiss();
                setSwitchView(true);
                cirCuitRef.current.close();
              }}
              style={{
                width: '100%',
                height: 30,
                marginVertical: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Status;

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
