import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  InteractionManager,
} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';

const ShortView = ({}) => {
  const {item} = useSelector(state => state.orderDetails);

  const LightGrewRow = ({title, value, bgcolor}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: bgcolor,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderRightColor: 'black',
            borderLeftWidth: 1,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      {/* ===================== */}
      <LightGrewRow
        bgcolor="#deebf7"
        title="Circuit ID"
        value={item.Circuit_ID}
      />

      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#deebf7',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            Circuit Status
          </Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderRightColor: 'black',
            borderLeftWidth: 1,
            backgroundColor:
              item.Circuit_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            {item.Circuit_Status}
          </Text>
        </View>
      </View>

      <LightGrewRow
        title="Assoc ID"
        bgcolor="#deebf7"
        value={item.Associated_ID ? item.Associated_ID : '--'}
      />

      <View style={styles.secondTableRow}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#b7ecff',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>Site ID</Text>
        </View>
        <View
          style={{
            borderRightColor: 'black',
            borderLeftWidth: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <Text style={{fontWeight: '700', color: '#007aff'}}>
            {item.Location_ID}
          </Text>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'center',
              marginLeft: 5,
            }}
            source={require('../../../../../images/location.png')}
          />
        </View>
      </View>
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#deebf7',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            Circuit Status
          </Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderRightColor: 'black',
            borderLeftWidth: 1,
            backgroundColor:
              item.Circuit_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            {item.Circuit_Status}
          </Text>
        </View>
      </View>

      {/* ===================== */}
      {/* ===================== */}
      <LightGrewRow
        bgcolor="#b7ecff"
        title="Constact Site Types"
        value={'--'}
      />
      <LightGrewRow
        bgcolor="#b7ecff"
        title="Full Address"
        value={item.Address ? item.Address : '--'}
      />
      <LightGrewRow
        bgcolor="#fbe5d6"
        title="Vendor"
        value={item.Vendor ? item.Vendor : '--'}
      />
      <LightGrewRow
        bgcolor="#fbe5d6"
        title="Category"
        value={item.Category ? item.Category : '--'}
      />
      <LightGrewRow
        bgcolor="#fbe5d6"
        title="SubCat1"
        value={item.SubCat_1 ? item.SubCat_1 : '--'}
      />

      <LightGrewRow
        bgcolor="#deebf7"
        title="Vendor Account"
        value={item.Vendor_Account_Number ? item.Vendor_Account_Number : '--'}
      />

      <LightGrewRow
        bgcolor="#e2f0d9"
        title="Circuit Cost(M)"
        value={item.circuit_charge ? `$${item.circuit_charge}` : '--'}
      />
      <LightGrewRow
        bgcolor="#e2f0d9"
        title="Circuit Cost(Y)"
        value={item.circuit_charge ? `$${item.circuit_charge}` : '--'}
      />
      <LightGrewRow
        bgcolor="#e2f0d9"
        title="GL"
        value={item.GL ? item.GL : '--'}
      />
      <LightGrewRow
        bgcolor="#e2f0d9"
        title="RC"
        value={item.RC ? item.RC : '--'}
      />

      <View style={{height: 100, width: '100%'}}></View>
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
