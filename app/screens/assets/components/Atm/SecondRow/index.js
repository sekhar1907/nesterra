import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FilterButton from '../../../../../components/FilterButton';

const SecondRow = ({diplayName, atmRef, setDiplayName}) => {
  const siteidChabge = () => {
    atmRef.current.snapToIndex(1);
    setDiplayName('Site ID');
  };
  const branchIdChabge = () => {
    atmRef.current.snapToIndex(1);
    setDiplayName('Branch ID');
  };
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 60,
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <FilterButton
          diplayName={diplayName}
          onPress={siteidChabge}
          title="Site ID"
        />
        <FilterButton
          diplayName={diplayName}
          onPress={branchIdChabge}
          title="Branch ID"
        />
      </View>
    </>
  );
};

export default SecondRow;

const styles = StyleSheet.create({});
