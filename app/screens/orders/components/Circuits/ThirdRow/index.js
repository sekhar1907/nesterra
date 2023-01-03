import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';

import {useDispatch, connect} from 'react-redux';
import FilterButton from '../../../../../components/FilterButton';
import {
  ORDER_FILTER_BY_BETWEEN_DATE,
  ORDER_GET_ONLY_VENDOR,
  ORDER_FILTER_BY_DATE,
} from '../../../../../actions/actionType/action.OrdersForTab';
import DatePickerView from './../../../../../components/DatePickerView';
import moment from 'moment';
import {warinng} from '../../../../../components/helper';

const ThirdRow = ({
  setDiplayName,
  vendorRef,
  setSwitchView,
  diplayName,
  cirCuitRef,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] =
    React.useState(false);
  const [startDate, setStdat] = React.useState(0);

  // console.log(typeof stdata);
  const dispatch = useDispatch();
  const vendor = () => {
    dispatch({
      type: ORDER_GET_ONLY_VENDOR,
    });
    setDiplayName('Vendor');
    vendorRef.current.snapToIndex(1);
    cirCuitRef.current.close();
    setSwitchView(false);
  };
  const status = () => {
    setDiplayName('Status');
    cirCuitRef.current.snapToIndex(1);
    setSwitchView(false);
  };
  const startdatePick = () => {
    setDatePickerVisibility(true);
    cirCuitRef.current.close();
    setSwitchView(false);
  };
  const getStartDate = date => {
    const d = moment(date).format('YYYY-MM-DD');
    // console.log(d);

    dispatch({
      type: ORDER_FILTER_BY_DATE,
      data: d,
    });
    setSwitchView(false);
    // console.log(date);

    // const d = moment(date, 'MMDDYYYY').valueOf();
    // setStdat(date);

    // setDatePickerVisibility(false);
  };
  const getEndtDate = date => {
    setDiplayName('');
    if (stdata == '') {
      warinng('Select First Start Date');
    }
    dispatch({
      type: ORDER_FILTER_BY_BETWEEN_DATE,
      startDate: startDate,
      endDate: date,
    });

    setDatePickerVisibility1(false);
    setSwitchView(true);
  };
  const enddatePick = () => {
    setDiplayName('');
    setDatePickerVisibility1(true);
    cirCuitRef.current.close();
    setSwitchView(false);
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterButton
            title="Vendor"
            onPress={vendor}
            diplayName={diplayName}
          />
          <FilterButton
            title="Project"
            onPress={vendor}
            diplayName={diplayName}
          />
          <FilterButton
            title="Status"
            onPress={status}
            diplayName={diplayName}
          />

          <FilterButton
            title="Creation Date"
            onPress={startdatePick}
            diplayName={diplayName}
          />
          <FilterButton
            title="Address"
            onPress={() => {}}
            diplayName={diplayName}
          />
          {/* <FilterButton
            title="End Date"
            onPress={enddatePick}
            diplayName={diplayName}
          /> */}
        </ScrollView>
      </View>
      <DatePickerView
        getDate={getStartDate}
        isDatePickerVisible={isDatePickerVisible}
        setDatePickerVisibility={setDatePickerVisibility}
      />
      <DatePickerView
        getDate={getEndtDate}
        isDatePickerVisible={isDatePickerVisible1}
        setDatePickerVisibility={setDatePickerVisibility1}
      />
    </>
  );
};

export default connect(null, {})(ThirdRow);

const styles = StyleSheet.create({});
