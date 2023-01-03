import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';
import TableHeaderFirstColum from './../../../../components/TableHeaderFirstColum';
import TableHeaderOtherColum from './../../../../components/TableHeaderOtherColum';

const Devices = () => {
  const [type, setType] = useState(false);
  const typeSet = () => {
    setType(!type);
  };
  return (
    <>
      <SecondRow />
      <ThirdRow />
      <View style={styles.tableRow}>
        <TableHeaderFirstColum onPress={typeSet} type={type} title="Type" />
        <TableHeaderOtherColum onPress={typeSet} type={type} title="Vendor" />
        <TableHeaderOtherColum onPress={typeSet} type={type} title="Status" />
        <TableHeaderOtherColum onPress={typeSet} type={type} title="Create" />
      </View>
    </>
  );
};

export default Devices;

const styles = StyleSheet.create({
  tableRow: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});
