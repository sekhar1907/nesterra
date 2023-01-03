import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import NoDataViewFlatList from '../../../../components/NoDataViewFlatList';
import {useSelector} from 'react-redux';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
const Devices = () => {
  const {devicestItems} = useSelector(state => state.DevicesItems);

  const RanderColum = ({title, border}) => {
    return (
      <View
        style={{
          ...styles.tableRowColum1,
          borderLeftColor: 'white',
          borderLeftWidth: border,
        }}>
        <TouchableOpacity
          onLongPress={() => {
            // copyText(title);
            // tostalert(title);
          }}>
          <Text style={styles.boxText1}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const randerItem = ({index, item}) => {
    // console.log(i, item);
    return (
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <RanderColum title={item.ID} border={0} />
        <RanderColum title={item.Device_Name} border={2} />
        <RanderColum title={item.Device_Status} border={2} />
        <RanderColum title={item.Device_Vendor} border={2} />
      </View>
    );
  };
  const HeaderColum = ({title, onPress, border, type}) => {
    return (
      <View
        style={{
          ...styles.tableRowColum,
          flexDirection: 'row',
          borderLeftColor: 'white',
          justifyContent: 'space-around',
          borderBottomColor: 'white',

          borderLeftWidth: border,
        }}>
        <Text style={{...styles.boxText, color: 'white'}}>{title} </Text>
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <HeaderColum title="Devices ID" border={0} />
        <HeaderColum title="Device Name" border={2} />
        <HeaderColum title="Device Status" border={2} />
        <HeaderColum title="Device Vendor" border={2} />
      </View>
      <BottomSheetFlatList
        data={devicestItems}
        keyExtractor={(item, i) => i.toString()}
        renderItem={(item, i) => randerItem(item)}
        ListEmptyComponent={() => {
          return (
            <>
              <NoDataViewFlatList />
            </>
          );
        }}
      />
    </>
  );
};

export default Devices;

const styles = StyleSheet.create({
  tableRowColum: {
    width: '25%',
    height: '100%',
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColum1: {
    width: '25%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
