import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
const BottomSheetFlatListView = ({data, searchDATA}) => {
  return (
    <>
      <BottomSheetFlatList
        keyboardShouldPersistTaps="handled"
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                searchDATA(item.id);
              }}
              style={{
                width: '100%',
                height: 30,
                marginVertical: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>{item.id}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default BottomSheetFlatListView;

const styles = StyleSheet.create({});
