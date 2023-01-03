import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import FilterButton from '../../../../../components/FilterButton';

const SecondRow = () => {
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
        <FilterButton
          diplayName="title"
          onPress={checkType}
          title="Order Type"
        />
        <FilterButton
          diplayName="title"
          onPress={checkType}
          title="SmartSite#"
        />
        <FilterButton diplayName="title" onPress={checkType} title="Tangoe#" />
        <FilterButton diplayName="title" onPress={checkType} title="Carrier#" />
        <FilterButton diplayName="title" onPress={checkType} title="Carrier#" />
        <FilterButton diplayName="title" onPress={checkType} title="Carrier#" />
      </ScrollView>
    </View>
  );
};

export default SecondRow;

const styles = StyleSheet.create({});
