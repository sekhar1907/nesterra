import {
  StyleSheet,
  Text,
  FlatList,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import NoDataViewFlatList from './../../../../../../components/NoDataViewFlatList/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const Atm = ({getAtmId, setRander, setFocusOn1, setPlace}) => {
  const {data} = useSelector(state => state.ExploreAtmId);

  return (
    <View style={{flex: 1, paddingHorizontal: 30}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={data}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item, i}) => {
          return item.ATM_ID ? (
            <TouchableOpacity
              onPress={() => {
                getAtmId(item.ATM_ID);
                setRander(false);
                setFocusOn1(true);
                setPlace('Search ATM ID');
                Keyboard.dismiss();
              }}
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0.5,
              }}>
              <FontAwesome name="map-marker" size={24} color="black" />
              <Text style={{marginLeft: 15, color: 'black'}}>
                {item.ATM_ID}
              </Text>
            </TouchableOpacity>
          ) : null;
        }}
        ListEmptyComponent={() => {
          return <NoDataViewFlatList />;
        }}
      />
    </View>
  );
};

export default Atm;

const styles = StyleSheet.create({});
