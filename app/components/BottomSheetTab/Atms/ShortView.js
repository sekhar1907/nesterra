import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';

const ShortView = ({}) => {
  const {item} = useSelector(state => state.AssetsAtmsDetails);

  const DATArow = ({title, value, bgcolor}) => {
    // console.log('first');
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
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };

  // console.log(dataa, 'atm');

  return (
    <>
      <>
        <View style={{...styles.secondTableRow}}>
          <View
            style={{
              ...styles.secondTableColum,
              backgroundColor: '#ace2ff',
            }}>
            <Text style={{fontWeight: '700', color: 'black'}}>ATM_Status</Text>
          </View>
          <View
            style={{
              ...styles.secondTableColum,
              borderRightColor: 'black',
              borderLeftWidth: 0.7,
              backgroundColor:
                item.ATM_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
            }}>
            <Text style={{fontWeight: '700', color: 'black'}}>
              {item.ATM_Status}
            </Text>
          </View>
        </View>

        <DATArow
          bgcolor="#ace2ff"
          title="Address"
          value={item.Address_1 ? item.Address_1 : '--'}
        />
        <DATArow
          bgcolor="#deebf7"
          title="Arrangement"
          value={item.Arrangement ? item.Arrangement : '--'}
        />
        <DATArow
          bgcolor="#deebf7"
          title="ATM_Type"
          value={item.ATM_Type ? item.ATM_Type : '--'}
        />
        {/* <DATArow
          bgcolor="#deebf7"
          title="ATM_Function"
          value={item.ATM_Function ? item.ATM_Function : '--'}
        /> */}

        <DATArow
          bgcolor="#deebf7"
          title="Connection"
          value={item.Connection ? item.Connection : '--'}
        />
        <DATArow
          bgcolor="#deebf7"
          title="Date_Installed"
          value={
            item.Date_Installed
              ? moment(item.Date_Installed).format('MM/DD/YY')
              : '--'
          }
        />
        <DATArow
          bgcolor="#fbe5d6"
          title="Vendor"
          value={item.Vendor ? item.Vendor : '--'}
        />
        <DATArow
          bgcolor="#fbe5d6"
          title="Model"
          value={item.Model ? item.Model : '--'}
        />
        <DATArow
          bgcolor="#fbe5d6"
          title="Processor"
          value={item.Processor ? item.Processor : '--'}
        />
        <DATArow
          bgcolor="#fbe5d6"
          title="Serial_Number"
          value={item.Serial_Number ? item.Serial_Number : '--'}
        />
        <DATArow
          bgcolor="#ffffcc"
          title="ATM IP#"
          value={item.ATM_IP ? item.ATM_IP : '--'}
        />
        <DATArow
          bgcolor="#ffffcc"
          title="Router IP#"
          value={item.Router_IP ? item.Router_IP : '--'}
        />
        <DATArow
          bgcolor="#ffffcc"
          title="Host"
          value={item.Host ? item.Host : '--'}
        />
        <DATArow
          bgcolor="#ffffcc"
          title="Subnet"
          value={item.Subnet ? item.Subnet : '--'}
        />
        <DATArow
          bgcolor="#f2f2f2"
          title="TLS Port"
          value={item.TLS_Port ? item.TLS_Port : '--'}
        />
        <DATArow
          bgcolor="#f2f2f2"
          title="Card Reader"
          value={item.Card_Reader ? item.Card_Reader : '--'}
        />
        <DATArow
          bgcolor="#f2f2f2"
          title="NFC Capable"
          value={item.NFC_Capable ? item.NFC_Capable : '--'}
        />

        <DATArow
          bgcolor="#f2f2f2"
          title="NFC Enabled"
          value={item.NFC_Enabled ? item.NFC_Enabled : '--'}
        />

        <View style={{height: 100, width: '100%'}}></View>
      </>
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
    borderBottomWidth: 0.7,
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
