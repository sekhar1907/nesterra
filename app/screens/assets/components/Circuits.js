import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

import {connect, useDispatch, useSelector} from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {getAllCircuit} from '../../../actions/AllCircuit';

import {
  ALL_CIRCUIT_SORT_BY_LOC_ID_ASC,
  ALL_CIRCUIT_SORT_BY_LOC_ID_DES,
  ALL_CIRCUIT_SORT_BY_VENDOR_ASC,
  ALL_CIRCUIT_SORT_BY_VENDOR_DES,
  ALL_CIRCUIT_SORT_BY_CIR_ID_ASC,
  ALL_CIRCUIT_SORT_BY_CIR_ID_DES,
  ALL_CIRCUIT_SORT_BY_BRANCH_ASC,
  ALL_CIRCUIT_SORT_BY_BRANCH_DES,
} from '../../../actions/actionType/AllCircuit';
import {getAllCircuitDetails} from '../../../actions/AllCircuit/allCorcuitDetails';
import {tostalert, copyText} from '../../../components/helper';
import OrderLoder from '../../../components/lodder/OrderLoder';

const Circuits = ({
  getAllCircuit,
  circuitRefDetails,
  getAllCircuitDetails,

  setLodding,
}) => {
  const {allCircuit} = useSelector(state => state.allCircuit);
  const loder = useSelector(state => state);
  // const {isLoding} = useSelector(state => state.allCircuit);

  const dispatch = useDispatch();

  const [locType, setLocType] = useState(true);
  const [vendor, setVendor] = useState(true);
  const [cirType, setCirType] = useState(true);
  const [loding, setLoding] = useState(true);
  const [branchType, setBranchType] = useState(true);
  // console.log(
  //   allCircuit.filter(item => item.Branch_ID == '741').length,
  //   'allCircuit',
  // );
  useEffect(() => {
    // console.log(allCircuit);
    getAllCircuit(setLoding);
  }, []);

  const randerItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // console.log('snap');
          const id = item.Circuit_ID;
          getAllCircuitDetails(id, setLodding, circuitRefDetails);
          // setTimeout(() => {
          //   deviceRef.current.snapToIndex(1);
          // }, 1200);
        }}
        style={{
          ...styles.tableRow1,
          height: 55,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          marginVertical: 1,
        }}>
        <View
          style={{
            ...styles.tableRowColum2,
            width: '25%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Location_ID);

              tostalert(item.Location_ID);
            }}>
            <Text style={styles.boxText1}> {item?.Location_ID}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.tableRowColum2,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Vendor);

              tostalert(item.Vendor);
            }}>
            <Text style={styles.boxText1}>{item?.Vendor}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.tableRowColum2,
            width: '35%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Circuit_ID);

              tostalert(item.Circuit_ID);
            }}>
            <Text style={styles.boxText1}>{item?.Circuit_ID}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum2,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Branch_ID);

              tostalert(item.Branch_ID);
            }}>
            <Text style={styles.boxText1}>
              {item?.Branch_ID ? item.Branch_ID : '--'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      {/* ==============container============== */}

      {/* ======================Table  Header======================= */}
      <View style={{...styles.tableRow}}>
        <TouchableOpacity
          onPress={() => {
            if (locType) {
              setLocType(!locType);
              dispatch({
                type: ALL_CIRCUIT_SORT_BY_LOC_ID_ASC,
                data: true,
              });
            } else {
              setLocType(!locType);
              dispatch({
                type: ALL_CIRCUIT_SORT_BY_LOC_ID_DES,
              });
            }
          }}
          style={{
            ...styles.tableRowColum1,
            width: '25%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 8,
          }}>
          <Text style={{...styles.boxText, color: 'white'}}>Loc ID</Text>
          <Text style={{marginTop: 1, marginRight: 3}}>
            <AntDesign
              name={locType ? 'caretup' : 'caretdown'}
              size={16}
              color="white"
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (vendor) {
              setVendor(!vendor);
              dispatch({
                type: ALL_CIRCUIT_SORT_BY_VENDOR_ASC,
              });
            } else {
              setVendor(!vendor);
              dispatch({
                type: ALL_CIRCUIT_SORT_BY_VENDOR_DES,
              });
            }
          }}
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 8,
          }}>
          <Text style={{...styles.boxText}}>Ven</Text>
          <Text style={{marginTop: 1}}>
            <AntDesign
              name={vendor ? 'caretup' : 'caretdown'}
              size={16}
              color="white"
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (cirType) {
              setCirType(!cirType);
              dispatch({
                type: ALL_CIRCUIT_SORT_BY_CIR_ID_ASC,
              });
            } else {
              setCirType(!cirType);
              dispatch({
                type: ALL_CIRCUIT_SORT_BY_CIR_ID_DES,
              });
            }
          }}
          style={{
            ...styles.tableRowColum1,
            width: '35%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={styles.boxText}>Circuit ID</Text>
          <Text style={{marginTop: 1}}>
            <AntDesign
              name={cirType ? 'caretup' : 'caretdown'}
              size={16}
              color="white"
            />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (branchType) {
              setBranchType(!branchType);
              dispatch({
                type: ALL_CIRCUIT_SORT_BY_BRANCH_ASC,
              });
            } else {
              setBranchType(!branchType);
              dispatch({
                type: ALL_CIRCUIT_SORT_BY_BRANCH_DES,
              });
            }
          }}
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 8,
          }}>
          <Text style={styles.boxText}>Br. ID</Text>
          <Text style={{marginTop: 1}}>
            <AntDesign
              name={branchType ? 'caretup' : 'caretdown'}
              size={16}
              color="white"
            />
          </Text>
        </TouchableOpacity>
      </View>
      {/* //===Second Header=========== */}

      {/* //===Second Header=========== */}

      {/* ======================Table  Header======================= */}
      {/* ==============Services Category============== */}
      {loding ? (
        <View style={styles.loderView}>
          <OrderLoder />
        </View>
      ) : (
        <>
          {allCircuit.length == 0 ? (
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 300,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                No Data Found
              </Text>
            </View>
          ) : (
            <>
              <View style={styles.table}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={allCircuit}
                  keyExtractor={(item, i) => i.toString()}
                  renderItem={(item, i) => randerItem(item)}
                />
              </View>
            </>
          )}
        </>
      )}
      {/* ==============Summary View=========== */}
      {/* <BottomSheetView circuitRef={circuitRef} lodding={lodding} /> */}
      {/* {lodding && <Lodder lodding={lodding} />} */}
    </>
  );
};

export default connect(null, {getAllCircuit, getAllCircuitDetails})(Circuits);

const styles = StyleSheet.create({
  loderView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  summaryView: {
    width: '100%',
    height: 70,

    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ///========Summary Button
  summaryButton: {
    width: 100,
    height: 40,
    backgroundColor: '#007aff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========dropdown
  dropDownView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownViewLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dropDownViewRight: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    marginHorizontal: 3,
  },
  pickerItem: {width: 200, height: 40, borderWidth: 0.5},
  ///========dropdown
  ///========dropdown
  pickerBoxInner: {
    borderWidth: 0.6,
    borderColor: 'black',
    borderRadius: 2,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  pickerBoxIcon: {
    position: 'absolute',
    right: 0,
    fontSize: 23,
    color: 'red',
  },
  pickerStyle: {
    width: '120%',
    paddingBottom: 0,
    paddingLeft: 0,
    transform: [{scaleX: 0.85}, {scaleY: 0.85}],
    left: -10,
    position: 'absolute',
    backgroundColor: 'transparent',
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
  },

  ///=========Table
  table: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRow1: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'green',
  },
  tableRowColum1: {
    height: '100%',
    backgroundColor: '#007aff',
  },
  tableRowColum2: {
    height: '100%',
    backgroundColor: '#007aff',

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
    fontSize: 16,
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
    width: '25%',
    height: '100%',

    justifyContent: 'center',
  },
  tableRowColum2: {
    width: '20%',
    height: '100%',

    justifyContent: 'center',
  },
  tableRowColum3: {
    width: '40%',
    height: '100%',

    justifyContent: 'center',
  },
  tableRowColum4: {
    width: '15%',
    height: '100%',

    justifyContent: 'center',
  },

  boxText1: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 7,
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
  },
  secondTableColum: {
    width: '25%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ///========Second table
});
