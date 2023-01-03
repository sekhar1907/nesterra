import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import FilterButton from '../../../../../components/FilterButton';

const ThirdRow = () => {
  const checkType = () => {};
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        paddingLeft: 10,
        flexDirection: 'row',
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FilterButton diplayName="title" onPress={checkType} title="Vendor" />
        <FilterButton diplayName="title" onPress={checkType} title="Project" />
        <FilterButton diplayName="title" onPress={checkType} title="Status" />
        <FilterButton diplayName="title" onPress={checkType} title="Date" />
        <FilterButton diplayName="title" onPress={checkType} title="Address" />
      </ScrollView>
    </View>
  );
};

export default ThirdRow;

const styles = StyleSheet.create({});
