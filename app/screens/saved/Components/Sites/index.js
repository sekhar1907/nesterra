import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import NoDataViewFlatList from '../../../../components/NoDataViewFlatList';

const Sites = () => {
  const {siteItem} = useSelector(state => state.SiteItem);

  return (
    <View style={{flex: 1, paddingHorizontal: 5}}>
      <BottomSheetFlatList
        data={siteItem}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, i}) => {
          return (
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 1,
              }}>
              <View
                style={{
                  width: '20%',
                  height: '100%',

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../../images/location.png')}
                  style={{width: 30, height: 30, resizeMode: 'cover'}}
                />
              </View>
              <View
                style={{
                  width: '80%',
                  height: '100%',
                }}>
                <Text
                  style={{
                    color: 'red',
                  }}>
                  {item.add}
                </Text>
                <Text>{item.id}</Text>
              </View>
            </View>
          );
        }}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={() => {
          return (
            <>
              <NoDataViewFlatList />
            </>
          );
        }}
      />
    </View>
  );
};

export default Sites;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});
