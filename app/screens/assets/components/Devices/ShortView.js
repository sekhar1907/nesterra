import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ShortView = ({deviceRefDetails, bottomSheetRef}) => {
  const {item} = useSelector(state => state.allDeviceDetails);

  const GrewRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#fbe5d6',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const SkyRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#b7ecff',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const GrewLightRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#deebf7',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };

  const navigation = useNavigation();
  return (
    <>
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#deebf7',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>Device Name</Text>
        </View>

        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            {item.Device_Name}
          </Text>
        </View>
      </View>
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#deebf7',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            Device Name New
          </Text>
        </View>

        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            {item.Device_Name_New}
          </Text>
        </View>
      </View>

      {/* ===================== */}
      {/* ===================== */}

      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: item.Device_Name ? '#deebf7' : 'white',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>Device Status</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
            backgroundColor:
              item.Device_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            {item.Device_Status}
          </Text>
        </View>
      </View>

      {/* ===================== */}
      {/* ===================== */}
      <GrewRow title="Vendor" value={item.Device_Vendor} />
      <GrewRow title="Device Type" value={item.Device_Type} />
      <GrewRow title="Environment" value={item.Device_Environment} />
      <GrewRow title="Device Function" value={item.Device_Function} />
      <GrewRow title="Device Layer" value={item.Device_Layer} />

      <SkyRow
        title="Branch ID"
        value={item.Branch_ID ? item.Branch_ID : '--'}
      />

      <View style={styles.secondTableRow}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#b7ecff',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>Site ID</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            deviceRefDetails.current.close();
            navigation.navigate('Explore');
          }}
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Text style={{fontWeight: '700', color: '#007aff'}}>
            {item.Site_ID}
          </Text>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'center',
              marginLeft: 5,
            }}
            source={require('../../../../images/location.png')}
          />
        </TouchableOpacity>
      </View>

      {/* ===================== */}

      <View style={styles.secondTableRow}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#b7ecff',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>Site Status</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
            backgroundColor: item.Site_Status ? '#c6efcd' : '#e7c4b5',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            {item.Site_Status}
          </Text>
        </View>
      </View>

      <SkyRow
        title="Site Type Primary"
        value={item.Site_Type_Hierarchical ? item.Site_Type_Hierarchical : '--'}
      />
      <SkyRow
        title="Site Type Detail"
        value={
          item.Site_Type_Concatenated_Detail
            ? item.Site_Type_Concatenated_Detail
            : '--'
        }
      />
      <SkyRow
        title="Address"
        value={item.SmartSite_Address ? item.SmartSite_Address : '--'}
      />
      <GrewLightRow title="Circuits" value={'--'} />
      <GrewLightRow
        title="Service ID"
        value={item.Service_ID ? item.Service_ID : '--'}
      />

      <GrewLightRow
        title="Mgmt Interface"
        value={item.Management_Interface ? item.Management_Interface : '--'}
      />

      <GrewLightRow
        title="IP Address"
        value={item.IP_Address ? item.IP_Address : '--'}
      />
      <GrewLightRow
        title="Loopback Address"
        value={item.Loopback_Address ? item.Loopback_Address : '--'}
      />
      <GrewLightRow
        title="Serial Number"
        value={item.Serial_Number ? item.Serial_Number : '--'}
      />
      <GrewLightRow title="Model" value={item.Model ? item.Model : '--'} />
      <GrewLightRow title="MAC ID" value={item.MAC_ID ? item.MAC_ID : '--'} />

      <View style={{height: 60, width: '100%'}}></View>
    </>
  );
};

export default ShortView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
    marginBottom: 5,
    borderBottomWidth: 0,
    borderRadius: 5,
  },
  topView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  topItem: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topItem1: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  ///=========Table
  table: {
    width: '100%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRow1: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '23%',
    height: '100%',
    marginHorizontal: 2,
    borderBottomColor: '#73c0b8',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '25%',
    marginHorizontal: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  ///=========Table
  ///=========data row
  tableRow1: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum1: {
    width: '23%',
    height: '100%',
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxText1: {
    fontSize: 14,
    color: '#000000',
  },
  ///=========data row
  ///========Second table
  secondTable: {
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },
  secondTableRow: {
    width: '100%',
    height: 50,

    flexDirection: 'row',
    // borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',

    borderLeftColor: 'black',
    // borderLeftWidth: 1,
  },
  secondTableRow1: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  secondTableColum: {
    width: '50%',
    height: '100%',

    paddingLeft: 10,
    justifyContent: 'center',
  },
  closeLineContainer: {
    alignSelf: 'center',
  },
  closeLine: {
    width: 30,
    height: 30,
    borderRadius: 3,
    marginTop: 9,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
