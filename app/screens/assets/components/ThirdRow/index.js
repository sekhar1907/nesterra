import {
  StyleSheet,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, connect} from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  ALL_CIRCUIT_ONLY_TYPE,
  ALL_CIRCUIT_ONLY_VENDOR,
  ALL_CIRCUIT_ONLY_SUBTYPE,
  ALL_CIRCUIT_ONLY_CIRCUITID,
  ALL_CIRCUIT_SORT_BY_STATUS,
} from './../../../../actions/actionType/AllCircuit/index';
import {getAllCircuitID} from '../../../../actions/AllCircuitID';
import {getAllCircuitDetails} from '../../../../actions/AllCircuit/allCorcuitDetails';
import FilterButton from './../../../../components/FilterButton/index';

const ThirdRow = ({
  setDiplayName,
  getAllCircuitID,
  setSwitchView,
  diplayName,
  cirCuitRef,
}) => {
  const dispatch = useDispatch();
  const [lodding1, setLodding1] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] =
    React.useState(false);
  const vendorfil = () => {
    setDiplayName('Vendor');
    cirCuitRef.current.snapToIndex(1);

    setSwitchView(false);
    // alert('madan');
    dispatch({
      type: ALL_CIRCUIT_ONLY_VENDOR,
    });
  };
  const typefil = () => {
    setDiplayName('Project');
    cirCuitRef.current.snapToIndex(1);

    setSwitchView(false);
    // alert('madan');
    dispatch({
      type: ALL_CIRCUIT_ONLY_TYPE,
    });
  };
  const subtypefil = () => {
    // alert('madan');
    dispatch({
      type: ALL_CIRCUIT_ONLY_SUBTYPE,
    });
  };
  const circuitFil = () => {
    // alert('madan');
    dispatch({
      type: ALL_CIRCUIT_ONLY_CIRCUITID,
    });
  };
  const getCircuitId = () => {
    // alert('ddadsfsd');
    getAllCircuitID(setLodding1);
  };
  const getStatus = () => {
    setDiplayName('Status');
    cirCuitRef.current.snapToIndex(1);

    setSwitchView(false);
    dispatch({
      type: ALL_CIRCUIT_SORT_BY_STATUS,
    });
  };

  //=============Date Picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };
  const handleConfirm = date => {
    // console.log(date);
    // dispatch({
    //   type: ORDER_FILTER_BY_DATE,
    //   data: moment(date).format('MM-DD-YY'),
    // });

    hideDatePicker();
  };
  const handleConfirm1 = date => {
    // console.log(date, 'DA');

    hideDatePicker1();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    Keyboard.dismiss();
    setDiplayName('State Date');

    cirCuitRef.current.close();
    setSwitchView(false);
  };
  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
    Keyboard.dismiss();
    setDiplayName('End Date');

    cirCuitRef.current.close();
    setSwitchView(false);
  };

  // =======Date Picker
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
            title="Vendor"
            onPress={vendorfil}
            diplayName={diplayName}
          />

          <FilterButton
            title="Project"
            onPress={typefil}
            diplayName={diplayName}
          />
          <FilterButton
            title="Status"
            onPress={getStatus}
            diplayName={diplayName}
          />
          <FilterButton
            title="Date"
            onPress={showDatePicker}
            diplayName={diplayName}
          />
          <FilterButton
            title="Address"
            onPress={showDatePicker}
            diplayName={diplayName}
          />
          {/* <FilterButton
            title="State Date"
            onPress={showDatePicker}
            diplayName={diplayName}
          />
          <FilterButton
            title="End Date"
            onPress={showDatePicker1}
            diplayName={diplayName}
          /> */}
        </ScrollView>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible1}
        mode="date"
        onConfirm={handleConfirm1}
        onCancel={hideDatePicker1}
      />
    </>
  );
};

export default connect(null, {getAllCircuitID})(ThirdRow);

const styles = StyleSheet.create({});
