import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';
import DataLoder from '../../../../../components/lodder/DataLoder';
import CheckBoxView from './../../../../../components/checkBox/CheckBoxView';
import ShortView from './ShortView';

const BottomSheetViewDetails = ({bottomSheetRefdetails, lodding1}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  // const {inv_Id} = route.params;
  const {item} = useSelector(state => state.orderDetails);
  const [allView, setAllView] = React.useState(false);
  // console.log(item);
  const DarkYellow = ({title, value, bgClor}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: bgClor,
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
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 0,
        opacity: 0.5,
      }}
      handleComponent={() => (
        <View style={styles.closeLineContainer}>
          <View style={styles.closeLine}>
            <SimpleLineIcons name="arrow-up" size={20} color="black" />
          </View>
        </View>
      )}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={bottomSheetRefdetails}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      animateOnMount
      animatedPosition={true}>
      {lodding1 ? (
        <View
          style={{
            width: '100%',
            height: 500,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <DataLoder />
        </View>
      ) : (
        <>
          <View
            style={{
              width: '100%',
              height: 30,
              flexDirection: 'row',
              paddingRight: 25,
            }}>
            <View style={{width: '50%', height: '100%'}}>
              <CheckBoxView allView={allView} setAllView={setAllView} />
            </View>
            <View
              style={{
                width: '50%',
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => bottomSheetRefdetails.current.close()}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#007aff',
                  }}>
                  <Text>
                    <Entypo name="cross" size={20} color="white" />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <BottomSheetScrollView style={{paddingHorizontal: 10, marginTop: 10}}>
            {!allView ? (
              <ShortView />
            ) : (
              <>
                {/* ===================== */}
                <DarkYellow
                  title="SmartSites#"
                  bgClor="#deebf7"
                  value={item.Smart_Site_Order_No}
                />

                <DarkYellow title="Tangoe#" bgClor="#deebf7" value={'--'} />
                <DarkYellow title="Carrier#" bgClor="#deebf7" value={'--'} />
                <DarkYellow
                  title=" Project Assignment "
                  bgClor="#f2f2f2"
                  value={item.Project ? item.Project : '--'}
                />
                <DarkYellow
                  title="Technical Contact"
                  bgClor="#f2f2f2"
                  value={
                    item.Technical_Contact_Name
                      ? item.Technical_Contact_Name
                      : '--'
                  }
                />

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
                      ...styles.secondTableColum1,
                      backgroundColor:
                        item.Order_Type == 'Add' ? '#c6efcd' : '#e7c4b5',
                    }}>
                    <Text style={{fontWeight: '700', color: 'black'}}>
                      {item.Order_Type}
                    </Text>
                  </View>
                </View>
                <DarkYellow
                  title="Inventory ID"
                  bgClor="#f2f2f2"
                  value={item.Inventory_ID ? item.Inventory_ID : '--'}
                />

                <View style={{...styles.secondTableRow}}>
                  <View
                    style={{
                      ...styles.secondTableColum,
                      backgroundColor: '#f2f2f2',
                    }}>
                    <Text style={{fontWeight: '700', color: 'black'}}>
                      Status
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.secondTableColum1,
                      backgroundColor:
                        item.Status == 'Completed' ? '#c6efcd' : '#e7c4b5',
                    }}>
                    <Text style={{fontWeight: '700', color: 'black'}}>
                      {item.Status}
                    </Text>
                  </View>
                </View>
                {/* <DarkYellow
            title="Site ID"
            bgClor="#b7ecff"
            value={item.Location_ID ? item.Location_ID : '--'}
          /> */}
                <View style={styles.secondTableRow}>
                  <View
                    style={{
                      ...styles.secondTableColum,
                      backgroundColor: '#b7ecff',
                    }}>
                    <Text style={{fontWeight: '700', color: 'black'}}>
                      Site ID
                    </Text>
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
                <DarkYellow
                  title="Address"
                  bgClor="#b7ecff"
                  value={item.Address ? item.Address : '--'}
                />
                <DarkYellow
                  title="Branch ID"
                  bgClor="#b7ecff"
                  value={item.Branch_ID ? item.Branch_ID : '--'}
                />
                <DarkYellow
                  title="Initiation Date"
                  bgClor="#ffffcc"
                  value={
                    moment(item.Initiation_Date).format('MM/DD/YY')
                      ? moment(item.Initiation_Date).format('MM/DD/YY')
                      : '--'
                  }
                />
                <DarkYellow
                  title="Creation Date"
                  bgClor="#ffffcc"
                  value={
                    moment(item.Creation_Date).format('MM/DD/YY')
                      ? moment(item.Creation_Date).format('MM/DD/YY')
                      : '--'
                  }
                />
                <DarkYellow
                  title="FOC Date"
                  bgClor="#ffffcc"
                  value={
                    moment(item.FOC_Date).format('MM/DD/YY')
                      ? moment(item.FOC_Date).format('MM/DD/YY')
                      : '--'
                  }
                />
                <DarkYellow
                  title="Completion Date"
                  bgClor="#ffffcc"
                  value={
                    moment(item.Order_Completion_Date).format('MM/DD/YY')
                      ? moment(item.Order_Completion_Date).format('MM/DD/YY')
                      : '--'
                  }
                />
                <DarkYellow
                  title="Bill Stop Date"
                  bgClor="#ffffcc"
                  value={
                    moment(item.Bill_Stop_Date).format('MM/DD/YY')
                      ? moment(item.Bill_Stop_Date).format('MM/DD/YY')
                      : '--'
                  }
                />
                <DarkYellow
                  title="Vendor"
                  bgClor="#fbe5d6"
                  value={item.Vendor ? item.Vendor : '--'}
                />
                <DarkYellow
                  title="Category"
                  bgClor="#fbe5d6"
                  value={item.Category ? item.Category : '--'}
                />
                <DarkYellow
                  title="Sub Category"
                  bgClor="#fbe5d6"
                  value={item.Subcat_1 ? item.Subcat_1 : '--'}
                />
                <DarkYellow
                  title="RC"
                  bgClor="#e2f0d9"
                  value={item.RC ? item.RC : '--'}
                />
                <DarkYellow
                  title="GL"
                  bgClor="#e2f0d9"
                  value={item.GL ? item.GL : '--'}
                />
                <DarkYellow
                  title="Monthly Cost"
                  bgClor="#e2f0d9"
                  value={
                    item.Monthly_Recurring_Cost
                      ? `$${item.Monthly_Recurring_Cost}`
                      : `$${0}`
                  }
                />
                <DarkYellow
                  title="Annual Cost"
                  bgClor="#e2f0d9"
                  value={item.Annual_Cost ? `$${item.Annual_Cost}` : `$${0}`}
                />

                <View style={{height: 70, width: '100%'}}></View>
              </>
            )}
          </BottomSheetScrollView>
        </>
      )}
    </BottomSheet>
  );
};

export default BottomSheetViewDetails;

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

    borderBottomWidth: 1,
    borderBottomColor: 'black',
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
  secondTableColum1: {
    width: '50%',
    height: '100%',
    borderLeftColor: 'black',
    borderLeftWidth: 0.7,

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
