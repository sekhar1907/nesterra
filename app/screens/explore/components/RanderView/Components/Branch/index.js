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

const Branch = ({getBranchId, setRander, setFocusOn1, setPlace}) => {
  // console.log(dataMar)
  const {data} = useSelector(state => state.ExploreBranchId);

  return (
    <View style={{flex: 1, paddingHorizontal: 30}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={data}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item, i}) => {
          return item?.Branch_ID ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  getBranchId(item.Branch_ID);
                  setRander(false);
                  setFocusOn1(true);
                  setPlace('Search Branch ID');
                  Keyboard.dismiss();
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 0.5,
                  }}>
                  <FontAwesome name="map-marker" size={24} color="black" />
                  <Text style={{marginLeft: 15, color: 'black'}}>
                    {item?.Branch_ID}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          ) : null;
        }}
        ListEmptyComponent={() => {
          return <NoDataViewFlatList />;
        }}
      />
    </View>
  );
};

export default Branch;

const styles = StyleSheet.create({});
