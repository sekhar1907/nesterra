import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';
import FilterButton from '../../../../../components/FilterButton';
import {connect} from 'react-redux';
import {
  GetAllAtmType,
  GetAllAtmVendor,
  GetAllAtmModel,
  GetAllAtmAtmId,
} from './../../../../../actions/AtmsAssets/index';

const ThirdRow = ({
  diplayName,
  atmRef,
  setDiplayName,
  setBottomSheetLoder,
  GetAllAtmVendor,
  GetAllAtmType,
  GetAllAtmModel,
  GetAllAtmAtmId,
}) => {
  const vendorChange = () => {
    setDiplayName('Vendor');
    GetAllAtmVendor(setBottomSheetLoder);
    atmRef.current.snapToIndex(1);
  };
  const changetype = () => {
    setDiplayName('Type');
    GetAllAtmType(setBottomSheetLoder);
    atmRef.current.snapToIndex(1);
  };
  const changeModel = () => {
    setDiplayName('Model');
    GetAllAtmModel(setBottomSheetLoder);
    atmRef.current.snapToIndex(1);
  };
  const changeAtm = () => {
    setDiplayName('ATM ID');
    GetAllAtmAtmId(setBottomSheetLoder);
    atmRef.current.snapToIndex(1);
  };
  const branchIdChabge = () => {};
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 60,
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterButton
            diplayName={diplayName}
            onPress={vendorChange}
            title="Vendor"
          />
          <FilterButton
            diplayName={diplayName}
            onPress={changetype}
            title="Type"
          />
          <FilterButton
            diplayName={diplayName}
            onPress={changeModel}
            title="Model"
          />
          <FilterButton
            diplayName={diplayName}
            onPress={changeAtm}
            title="ATM ID"
          />
        </ScrollView>
      </View>
    </>
  );
};

export default connect(null, {
  GetAllAtmVendor,
  GetAllAtmAtmId,
  GetAllAtmModel,
  GetAllAtmType,
})(ThirdRow);

const styles = StyleSheet.create({});
