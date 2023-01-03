import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import DataLoder from '../../../components/lodder/DataLoder';
import {useNavigation} from '@react-navigation/native';
import CheckBoxView from '../../../components/checkBox/CheckBoxView';
import ShortView from './Circuits/ShortView';

const BottomSheetViewCircuits = ({
  circuitRefDetails,
  setSwitchView,

  loding,
}) => {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  const [allView, setAllView] = React.useState(false);
  // const {inv_Id} = route.params;
  const {item} = useSelector(state => state.allCircuitDetails);
  // console.log(item);

  const LightGrewRow = ({title, value, bgcolor}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: bgcolor,
          }}>
          <Text style={{color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderRightColor: 'black',
            borderLeftWidth: 1,
          }}>
          <Text style={{color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 0,
          opacity: 0.5,
        }}
        handleComponent={() => (
          <View style={styles.closeLineContainer}>
            <View style={styles.closeLine}>
              <SimpleLineIcons name="arrow-up" size={16} color="black" />
            </View>
          </View>
        )}
        style={{paddingHorizontal: 5}}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={circuitRefDetails}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}>
        {loding ? (
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

                paddingRight: 25,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <View style={{width: '50%', height: '100%'}}>
                <CheckBoxView allView={allView} setAllView={setAllView} />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setSwitchView(true);
                    circuitRefDetails.current.close();
                  }}>
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
            <BottomSheetScrollView style={{paddingHorizontal: 10}}>
              {!allView ? (
                <ShortView />
              ) : (
                <>
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
                      <Text style={{color: 'black'}}>Circuit Status</Text>
                    </View>
                    <View
                      style={{
                        ...styles.secondTableColum,
                        borderRightColor: 'black',
                        borderLeftWidth: 1,
                        backgroundColor:
                          item.Circuit_Status == 'Active'
                            ? '#c6efcd'
                            : '#e7c4b5',
                      }}>
                      <Text style={{color: 'black'}}>
                        {item.Circuit_Status}
                      </Text>
                    </View>
                  </View>

                  <LightGrewRow
                    title="Assoc ID"
                    bgcolor="#deebf7"
                    value={item.Associated_ID ? item.Associated_ID : '--'}
                  />
                  <LightGrewRow
                    bgcolor="#deebf7"
                    title="LEC ID"
                    value={item.LEC_ID ? item.LEC_ID : '--'}
                  />

                  <View style={styles.secondTableRow}>
                    <View
                      style={{
                        ...styles.secondTableColum,
                        backgroundColor: '#b7ecff',
                      }}>
                      <Text style={{color: 'black'}}>Site ID</Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        circuitRefDetails.current.close();
                        navigation.navigate('Explore');
                      }}
                      style={{
                        borderRightColor: 'black',
                        borderLeftWidth: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 10,
                      }}>
                      <Text style={{color: '#007aff'}}>{item.Location_ID}</Text>
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          resizeMode: 'center',
                          marginLeft: 5,
                        }}
                        source={require('../../../images/location.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  {/* ===================== */}
                  {/* ===================== */}
                  <LightGrewRow
                    bgcolor="#b7ecff"
                    title="Contact Site Types"
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
                    bgcolor="#fbe5d6"
                    title="SubCat2"
                    value={item.SubCat_2 ? item.SubCat_2 : '--'}
                  />
                  <LightGrewRow
                    bgcolor="#fbe5d6"
                    title="SubCat3"
                    value={item.SubCat_3 ? item.SubCat_3 : '--'}
                  />
                  <LightGrewRow
                    bgcolor="#fbe5d6"
                    title="Whitelist Type"
                    value={
                      item.Whitelist_Use_Type ? item.Whitelist_Use_Type : '--'
                    }
                  />
                  <LightGrewRow
                    bgcolor="#deebf7"
                    title="Vendor Account"
                    value={
                      item.Vendor_Account_Number
                        ? item.Vendor_Account_Number
                        : '--'
                    }
                  />
                  <LightGrewRow
                    bgcolor="#deebf7"
                    title="Summary Account"
                    value={
                      item.Summary_Account_Number
                        ? item.Summary_Account_Number
                        : '--'
                    }
                  />
                  <LightGrewRow
                    bgcolor="#deebf7"
                    title="Mbps"
                    value={item.Mbps ? item.Mbps : '--'}
                  />
                  <LightGrewRow
                    bgcolor="#e2f0d9"
                    title="Circuit Cost(M)"
                    value={
                      item.circuit_charge ? `$${item.circuit_charge}` : '--'
                    }
                  />
                  <LightGrewRow
                    bgcolor="#e2f0d9"
                    title="Circuit Cost(Y)"
                    value={
                      item.circuit_charge ? `$${item.circuit_charge}` : '--'
                    }
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
                  <LightGrewRow
                    bgcolor="#deebf7"
                    title="B-End Location"
                    value={item.Location_B_End ? item.Location_B_End : '--'}
                  />

                  <View style={{height: 100, width: '100%'}}></View>
                </>
              )}
            </BottomSheetScrollView>
          </>
        )}
      </BottomSheet>
    </>
  );
};

export default BottomSheetViewCircuits;

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
