import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const DevicesDetails = ({route}) => {
  const {item} = route.params;

  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        {/* ==============container============== */}
        <View style={styles.container}>
          {/* ==============top============== */}
          <View style={styles.topView}>
            <View style={styles.topItem1}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>
                  <Entypo name="cross" size={24} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.topItem}>
              <Text style={{fontWeight: '900', fontSize: 18, color: 'black'}}>
                Devices Details
              </Text>
            </View>
            <View style={styles.topItem}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 15,
                  color: 'black',
                }}></Text>
            </View>
          </View>
          {/* ==============top============== */}
          {/* ============== Second Table============== */}

          <View style={styles.secondTable}>
            {/* ============== Second Table Row============== */}
            {item?.Device_Name ? (
              <View
                style={{...styles.secondTableRow1, backgroundColor: '#b7c5e4'}}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Name
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Name}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ============== Second Table Row============== */}
            {/* ============== Second Table Row============== */}
            {item?.Alternative_Device_Name ? (
              <View
                style={{
                  ...styles.secondTableRow,
                  borderTopColor: 'black',
                  borderTopWidth: 1,
                }}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Invetory Id#
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Alternative_Device_Name}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.Associated_Circuit ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Associated Circuit
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Associated_Circuit}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {/* ===================== */}
            {item?.Branch_ID ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Branch_ID
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Branch_ID}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}

            {/* ===================== */}
            {item?.Code_Compliance ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Req. name
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Code_Compliance}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Compiled ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Compiled
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Compiled}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Compliant ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Compliant
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Compliant}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Config_Compliance ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Config Compliance
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Config_Compliance}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Contact_Information ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    FOC Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Contact_Information.substr(1, 20)}...
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Decom_Date ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Decom_Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Decom_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}

            {/* ===================== */}
            {item?.Device_Details ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device_Details
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Details}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Device_Function ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Function
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Function}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ============== Second Table Row============== */}
          </View>
          {/* ============== Second Table============== */}

          {/* ==============Container============== */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default DevicesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
    marginBottom: 5,
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
    height: 50,
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
    height: 30,
    flexDirection: 'row',
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
  },
  secondTableRow1: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  secondTableColum: {
    width: '50%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ///========Second table
});
