import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, connect} from 'react-redux';
import {GetAllCarrierNumber} from './../../../../actions/CarrierNumber/index';
import {getAllTangorNumber} from './../../../../actions/TangorNumber/index';
import {getAllSiteNumber} from '../../../../actions/SiteNumber';
import {ALL_CIRCUIT_ONLY_TYPE} from './../../../../actions/actionType/AllCircuit/index';
import FilterButton from '../../../../components/FilterButton';

const SecondRow = ({
  setDiplayName,
  GetAllCarrierNumber,
  getAllSiteNumber,
  setSwitchView,
  diplayName,
  cirCuitRef,
  getAllTangorNumber,
  setLodding1,
  setbootSheetLodder,
}) => {
  const dispatch = useDispatch();

  const getOnlyTypeData = () => {
    dispatch({
      type: ALL_CIRCUIT_ONLY_TYPE,
    });
  };
  const getCarrirer = () => {
    // setLoding(true)
    GetAllCarrierNumber(setbootSheetLodder);
    setDiplayName('Carrier#');
    cirCuitRef.current.snapToIndex(1);

    setSwitchView(false);
  };
  const getTangoe = () => {
    getAllTangorNumber(setbootSheetLodder);
    setDiplayName('Tangoe#');
    cirCuitRef.current.snapToIndex(1);

    setSwitchView(false);
  };

  const OrderType = () => {
    dispatch({
      type: ALL_CIRCUIT_ONLY_TYPE,
    });
    setDiplayName('Order Type');
    cirCuitRef.current.snapToIndex(1);
    setSwitchView(false);
  };
  const getSmartSite = () => {
    setDiplayName('SmartSite#');
    cirCuitRef.current.snapToIndex(1);
    getAllSiteNumber(setbootSheetLodder);
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
          diplayName={diplayName}
          onPress={OrderType}
          title="Order Type"
        />
        <FilterButton
          diplayName={diplayName}
          onPress={getSmartSite}
          title="SmartSite#"
        />
        <FilterButton
          diplayName={diplayName}
          onPress={getTangoe}
          title="Tangoe#"
        />
        <FilterButton
          diplayName={diplayName}
          onPress={getCarrirer}
          title="Carrier#"
        />

        {/* <Button
          tittle="Item#"
          onPress={() => {}}
          setSwitchView={setSwitchView}
          diplayName={diplayName}
          setDiplayName={setDiplayName}
          cirCuitRef={cirCuitRef}
        /> */}
      </ScrollView>
    </View>
  );
};

export default connect(null, {
  GetAllCarrierNumber,
  getAllSiteNumber,
  getAllTangorNumber,
})(SecondRow);

const styles = StyleSheet.create({});
