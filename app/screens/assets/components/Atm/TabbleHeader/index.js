import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TableHeaderFirstColum = ({title, width, border}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: border,
      }}>
      <Text style={{...styles.boxText1, color: 'white'}}>{title}</Text>
    </View>
  );
};

const TableHeader = () => {
  return (
    <View style={styles.tableHeader}>
      <TableHeaderFirstColum title="ATM ID" width="25%" border={0} />
      <TableHeaderFirstColum title="Status" width="25%" border={2} />
      <TableHeaderFirstColum title="Model" width="25%" border={2} />
      <TableHeaderFirstColum title="Vendor" width="25%" border={2} />
    </View>
  );
};

export default TableHeader;

const styles = StyleSheet.create({
  tableHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});
