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

const CircuitsDetails = ({route}) => {
  const {item} = route.params;
  //   const {item} = route.params;
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
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
                Circuit Details
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
            {item?.Circuit_ID ? (
              <View
                style={{...styles.secondTableRow1, backgroundColor: '#b7c5e4'}}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Circuit ID
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Circuit_ID}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ============== Second Table Row============== */}
            {/* ============== Second Table Row============== */}
            {item?.Circuit_Status ? (
              <View
                style={{
                  ...styles.secondTableRow,
                  borderTopColor: 'black',
                  borderTopWidth: 1,
                }}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Circuit Status
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Circuit_Status}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.Associated_ID ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Assoc ID
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Associated_ID}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {/* ===================== */}
            {item?.LEC_ID ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    LEC ID
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.LEC_ID}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}

            {/* ===================== */}
            {item?.Address ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Full Address
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Address}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Vendor ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Vendor
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Vendor}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Category ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Category
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Category}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.SubCat_1 ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    SubCat1
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.SubCat_1}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.SubCat2 ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    SubCat2
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.SubCat2}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.SubCat_3 ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    SubCat3
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.SubCat_3}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}

            {/* ===================== */}
            {item?.Whitelist_Use_Type ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    WhiteList Type
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Whitelist_Use_Type}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Vendor_Account_Number ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Vendor Account
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Vendor_Account_Number}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Summary_Account_Number ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Summary Account
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Summary_Account_Number}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Mbps ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>Mbps</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Mbps}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.circuit_charge ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Circuit Cost
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.circuit_charge}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.GL ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>GL</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.GL}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.RC ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>RC</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.RC}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Location_B_End ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    B-End Location
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Location_B_End}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ============== Second Table Row============== */}
          </View>
          {/* ============== Second Table============== */}

          {/* ==============Container============== */}
        </View>
        {/* ==============container============== */}
      </SafeAreaView>
    </>
  );
};

export default CircuitsDetails;

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
