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

import {get_order_details} from '../../actions/order';
import {connect, useSelector} from 'react-redux';
import moment from 'moment';
import Lodder from '../../components/lodder';

const OrderDetails = ({navigation, route, get_order_details}) => {
  const {orderDetails} = useSelector(state => state.OrderDetails);
  const [lodding, setLodding] = useState(true);
  useEffect(() => {
    get_order_details(route.params.inv_Id, setLodding);
  }, []);

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
                Orders Details
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
            {orderDetails?.Smart_Site_Order_No ? (
              <View
                style={{...styles.secondTableRow1, backgroundColor: '#b7c5e4'}}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    SmartSites#
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {orderDetails.Smart_Site_Order_No}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ============== Second Table Row============== */}
            {/* ============== Second Table Row============== */}
            {orderDetails?.Inventory_ID ? (
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
                    {orderDetails.Inventory_ID}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {orderDetails?.Order_Type ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Order Type#
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {orderDetails.Order_Type}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Status ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Status{' '}
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {orderDetails.Status}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}

            {/* ===================== */}
            {orderDetails?.Requested_By_Name ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Req. name
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {orderDetails.Requested_By_Name}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Technical_Contact_Name ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Technical Contact Name
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {orderDetails.Technical_Contact_Name}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Initiation_Date ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Initiation Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(orderDetails.Initiation_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Technical_Contact_Name ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Creation Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(orderDetails.Creation_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.FOC_Date ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    FOC Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(orderDetails.FOC_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Order_Completion_Date ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Order Completion Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(orderDetails.Order_Completion_Date).format(
                      'DD-MM-YYYY',
                    )}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}

            {/* ===================== */}
            {orderDetails?.Bill_Stop_Date ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Bill Stop Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(orderDetails.Bill_Stop_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.vendor ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Vendor
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {orderDetails.vendor}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}

            {/* ===================== */}
            {orderDetails?.Category ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Category
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {orderDetails.Category}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Subcat_1 ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Sub-Category 1
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {orderDetails.Subcat_1}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Subcat_2 ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Sub-Category 2
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {orderDetails.Subcat_2}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Address ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Address
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      paddingVertical: 5,
                    }}>
                    {orderDetails.Address}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.RC ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>RC</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    {orderDetails.RC}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.GL ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>GL</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    {orderDetails.GL}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Monthly_Recurring_Cost ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Monthly Recurring Cost
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    {orderDetails.Monthly_Recurring_Cost}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {orderDetails?.Annual_Cost ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Annual Cost
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    {orderDetails.Annual_Cost}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}

            {/* ============== Second Table Row============== */}
          </View>
          {/* ============== Second Table============== */}

          {/* ==============Container============== */}
        </View>
        {lodding && <Lodder lodding={lodding} />}
      </SafeAreaView>
    </>
  );
};

export default connect(null, {get_order_details})(OrderDetails);

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
