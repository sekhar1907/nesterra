import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React, {useMemo} from 'react';

import {useSelector} from 'react-redux';

import moment from 'moment';

const ShortView = ({}) => {
  const {orderItem} = useSelector(state => state.OrdersItem);

  const item = orderItem[0];

  //   console.log(item);
  const selectedComponent = item => {
    // console.log(item);
    switch (true) {
      case item === 'Add':
        return '#c6efcd';
      case item === 'Change':
        return '#ffffc1';
      case item === 'Cancelled':
        return '#ffc8ce';
      case item === 'Completed':
        return '#c6efcd';
    }
  };

  const ColumView = ({title, value, bgcolor}) => {
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
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      {item ? (
        <>
          <View style={{...styles.secondTableRow}}>
            <View
              style={{
                ...styles.secondTableColum,
                backgroundColor: '#f2f2f2',
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                Order Type
              </Text>
            </View>
            <View
              style={{
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,

                backgroundColor: selectedComponent(item.Order_Type),
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                {item.Order_Type}
              </Text>
            </View>
          </View>

          {/* ===================== */}

          <View style={{...styles.secondTableRow}}>
            <View
              style={{
                ...styles.secondTableColum,
                backgroundColor: '#f2f2f2',
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>Status</Text>
            </View>
            <View
              style={{
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,

                backgroundColor:
                  item.Status == 'Completed' ? '#c6efcd' : '#e7c4b5',
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                {item.Status}
              </Text>
            </View>
          </View>
          <ColumView
            title="Project Assignment"
            bgcolor="#f2f2f2"
            value={item.Project ? item.Project : '--'}
          />
          <ColumView
            title="Tech Contact"
            bgcolor="#f2f2f2"
            value={
              item.Technical_Contact_Name ? item.Technical_Contact_Name : '--'
            }
          />
          <ColumView
            title="Item#"
            bgcolor="#f2f2f2"
            value={item.Inventory_ID ? item.Inventory_ID : '--'}
          />
          <ColumView
            title="Item#"
            bgcolor="#f2f2f2"
            value={item.Inventory_ID ? item.Inventory_ID : '--'}
          />
          <ColumView
            bgcolor="#e2eaf5"
            title="SmartSites#"
            value={item.Smart_Site_Order_No}
          />
          <ColumView
            bgcolor="#e2eaf5"
            title="Tangoe#"
            value={item.Order_Number ? item.Order_Number : '--'}
          />
          <ColumView
            bgcolor="#e2eaf5"
            title="Carrier#"
            value={item.PON ? item.PON : '--'}
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
              onPress={() => {}}
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
                source={require('../../../../images/location.png')}
              />
            </TouchableOpacity>
          </View>
          <ColumView
            bgcolor="#b7ecff"
            title="Address"
            value={item.Address ? item.Address : '--'}
          />
          <ColumView
            bgcolor="#b7ecff"
            title="Branch ID"
            value={item.Branch_ID ? item.Branch_ID : '--'}
          />
          <ColumView
            bgcolor="#ffffc1"
            title="Initiation Date"
            value={moment(item.Initiation_Date).format('MM/DD/YY')}
          />
          <ColumView
            bgcolor="#ffffc1"
            title="Creation Date"
            value={moment(item.Creation_Date).format('MM/DD/YY')}
          />

          <ColumView
            bgcolor="#ffffc1"
            title="Completion Date"
            value={moment(item.Order_Completion_Date).format('MM/DD/YY')}
          />

          <ColumView
            bgcolor="#ffffc1"
            title="Bill Stop Date"
            value={
              item.Bill_Stop_Date
                ? moment(item.Bill_Stop_Date).format('MM/DD/YY')
                : '--'
            }
          />
          <ColumView
            bgcolor="#fae4d9"
            title="Vendor"
            value={item.vendor ? item.vendor : '--'}
          />
          <ColumView
            bgcolor="#fae4d9"
            title="Category"
            value={item.Category ? item.Category : '--'}
          />
          <ColumView
            bgcolor="#fae4d9"
            title="Sub Category"
            value={item.Subcat_1 ? item.Subcat_1 : '--'}
          />
          <ColumView
            bgcolor="#e6eddd"
            title="Monthly Recurring Cost"
            value={
              item.Monthly_Recurring_Cost
                ? `$${item.Monthly_Recurring_Cost}`
                : '--'
            }
          />
          <ColumView
            bgcolor="#e6eddd"
            title="Annual Cost"
            value={item.Annual_Cost ? `$${item.Annual_Cost}` : '--'}
          />
          <View style={{height: 70, width: '100%'}}></View>
        </>
      ) : null}
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
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',

    // borderLeftColor: 'black',
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

    // borderRightColor: 'black',
    // borderRightWidth: 1,
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
