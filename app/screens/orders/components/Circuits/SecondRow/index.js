import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {GetAllCarrierNumber} from '../../../../../actions/CarrierNumber';
import {getAllTangorNumber} from '../../../../../actions/TangorNumber';
import {getAllSiteNumber} from '../../../../../actions/SiteNumber';
import FilterButton from '../../../../../components/FilterButton';

const SecondRow = ({
  setDiplayName,
  getAllTangorNumber,
  GetAllCarrierNumber,
  setSwitchView,
  diplayName,
  cirCuitRef,
  getAllSiteNumber,
  vendorRef,

  setbootSheetLodder,
}) => {
  const orderType = () => {
    setDiplayName('Order Type');
    vendorRef.current.close();
    cirCuitRef.current.snapToIndex(1);

    setSwitchView(false);
  };
  const smartSite = () => {
    getAllSiteNumber(setbootSheetLodder);
    setDiplayName('SmartSite#');
    vendorRef.current.close();
    cirCuitRef.current.snapToIndex(1);
    setSwitchView(false);
  };
  const getCarrier = () => {
    GetAllCarrierNumber(setbootSheetLodder);
    setDiplayName('Carrier#');
    vendorRef.current.close();
    cirCuitRef.current.snapToIndex(1);
    setSwitchView(false);
  };
  const getTanoe = () => {
    getAllTangorNumber(setbootSheetLodder);
    setDiplayName('Tangoe#');
    vendorRef.current.close();
    cirCuitRef.current.snapToIndex(1);
    setSwitchView(false);
  };
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
          title="Order Type"
          onPress={orderType}
          diplayName={diplayName}
        />
        <FilterButton
          title="SmartSite#"
          onPress={smartSite}
          diplayName={diplayName}
        />
        <FilterButton
          title="Tangoe#"
          onPress={getTanoe}
          diplayName={diplayName}
        />
        <FilterButton
          title="Carrier#"
          onPress={getCarrier}
          diplayName={diplayName}
        />
      </ScrollView>
    </View>
  );
};

export default connect(null, {
  getAllTangorNumber,
  getAllSiteNumber,
  GetAllCarrierNumber,
})(SecondRow);

const styles = StyleSheet.create({});
