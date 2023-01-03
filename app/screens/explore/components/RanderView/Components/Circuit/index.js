import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
  FlatList,
  View,
} from 'react-native';
import React from 'react';

import NoDataViewFlatList from './../../../../../../components/NoDataViewFlatList/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const Circuit = ({getCircuitId, setRander, setFocusOn1, setPlace}) => {
  // console.log(dataMar)
  const {data} = useSelector(state => state.ExploreCircuitId);

  return (
    <View style={{flex: 1, paddingHorizontal: 30}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={data}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item, i}) => {
          return item ? (
            <TouchableOpacity
              onPress={() => {
                setRander(false);
                setFocusOn1(true);
                getCircuitId(item);

                setPlace('Search Circuit ID');
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
              <Text style={{marginLeft: 15, color: 'black'}}>{item}</Text>
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

export default Circuit;

const styles = StyleSheet.create({});
