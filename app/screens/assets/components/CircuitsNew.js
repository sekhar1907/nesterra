import {StyleSheet, TouchableOpacity, FlatList, Text, View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {getAllCircuit} from '../../../actions/AllCircuit';
import OrderLoder from '../../../components/lodder/OrderLoder';
import DataLoder from '../../../components/lodder/DataLoder';
import {tostalert, copyText} from '../../../components/helper';
// import CircuitBottomSheet from './Circuits';
import CircuitBottomSheet from './Circuits/CircuitBottomSheet';
import {getAllCircuitID} from '../../../actions/AllCircuitID';
import {getAllSiteID} from '../../../actions/AllSiteID';
import {getAllBrachrID} from '../../../actions/AllBranchID';
import BottomSheetViewCircuits from './CircuitDetails';
import {getAllCircuitDetails} from '../../../actions/AllCircuit/allCorcuitDetails';

import ThirdRow from './ThirdRow/index';

import {
  ALL_CIRCUIT_SORT_BY_LOC_ID_ASC,
  ALL_CIRCUIT_SORT_BY_LOC_ID_DES,
  ALL_CIRCUIT_SORT_BY_VENDOR_ASC,
  ALL_CIRCUIT_SORT_BY_VENDOR_DES,
  ALL_CIRCUIT_SORT_BY_BRANCH_ASC,
  ALL_CIRCUIT_SORT_BY_BRANCH_DES,
  ALL_CIRCUIT_SORT_BY_STATUS,
  ALL_DATA,
  ALL_CIRCUIT_FILTER_BY_STATUS,
} from '../../../actions/actionType/AllCircuit';

import SecondRow from './SecondRow';
import ToggleView from './../../../components/ToggleView/index';
import TableHeaderFirstColum from './../../../components/TableHeaderFirstColum';
import TableHeaderOtherColum from './../../../components/TableHeaderOtherColum/index';
import NoDataViewFlatList from '../../../components/NoDataViewFlatList';

import DataColum from './Circuits/DataColum';

const CircuitsNew = ({
  getAllCircuit,

  getAllCircuitDetails,
}) => {
  const cirCuitRef = useRef(null);

  const circuitRefDetails = useRef(null);
  const [loding1, setLodding1] = useState(false);
  const [loding, setLodding] = useState(false);
  const [loding3, setLodding3] = useState(true);
  const [diplayName, setDiplayName] = useState('');
  const {allCircuit} = useSelector(state => state.allCircuit);

  const [switchView, setSwitchView] = useState(true);

  // const {loder} = useSelector(state => state.allCircuit);

  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [locType, setLocType] = useState(true);
  const [vendor, setVendor] = useState(true);

  const [bootSheetLodder, setbootSheetLodder] = useState(true);

  const [branchType, setBranchType] = useState(true);

  useEffect(() => {
    setLodding3(true);
    getAllCircuit(setLodding3);
  }, []);

  const searchFilterDatataByStatus = () => {
    setDiplayName('Status');
    dispatch({
      type: ALL_CIRCUIT_SORT_BY_STATUS,
    });
    cirCuitRef.current.snapToIndex(1);
  };
  const fiterCircuitsActive = () => {
    dispatch({
      type: ALL_CIRCUIT_FILTER_BY_STATUS,
      data: 'Active',
    });
  };
  const allData = () => {
    dispatch({
      type: ALL_DATA,
    });
  };
  const typeClick = () => {
    if (locType) {
      setLocType(!locType);
      dispatch({
        type: ALL_CIRCUIT_SORT_BY_LOC_ID_ASC,
      });
    } else {
      setLocType(!locType);
      dispatch({
        type: ALL_CIRCUIT_SORT_BY_LOC_ID_DES,
      });
    }
  };
  const circuitClick = () => {
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
  };
  const BranchIdClick = () => {
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
  };
  const vendorClick = () => {
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
  };

  return (
    <>
      {loding3 ? (
        <View style={styles.loderView}>
          <DataLoder />
        </View>
      ) : (
        <>
          {/* <TouchableOpacity
            onPress={() => {
              circuitRefDetails.current.close();
              cirCuitRef.current.close();
              setDiplayName('');
              getAllCircuit(setLodding3);
            }}
            style={{
              width: 100,
              height: 40,
              borderRadius: 10,
              backgroundColor: '#d1e7ff',
              position: 'absolute',
              top: 7,
              right: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#007aff'}}>Clear Search</Text>
          </TouchableOpacity> */}
          {/* ========Second Row============= */}
          <SecondRow
            diplayName={diplayName}
            setDiplayName={setDiplayName}
            cirCuitRef={cirCuitRef}
            setSwitchView={setSwitchView}
            setLodding1={setLodding1}
            setbootSheetLodder={setbootSheetLodder}
          />

          {/* ========ThirdRow Component============= */}
          <ThirdRow
            diplayName={diplayName}
            setDiplayName={setDiplayName}
            cirCuitRef={cirCuitRef}
            setSwitchView={setSwitchView}
          />
          {/* ========ID VIEW============= */}
          {/* ========TABLE HEADER============= */}
          <View style={styles.tableHeader}>
            <TableHeaderFirstColum
              onPress={typeClick}
              title="Site ID"
              type={locType}
              width="25%"
            />

            <TableHeaderOtherColum
              onPress={circuitClick}
              title="Circuit ID"
              type={vendor}
              width="25%"
            />
            <TableHeaderOtherColum
              onPress={BranchIdClick}
              title="Branch ID"
              type={branchType}
              width="25%"
            />
            <TableHeaderOtherColum
              onPress={vendorClick}
              title="Vendor"
              type={vendor}
              width="25%"
            />
          </View>

          {loding3 ? (
            <View style={styles.loderView}>
              <OrderLoder />
            </View>
          ) : (
            <>
              <>
                <View style={styles.table}>
                  <FlatList
                    contentContainerStyle={{paddingBottom: 230}}
                    showsVerticalScrollIndicator={false}
                    data={allCircuit}
                    keyExtractor={(item, i) => i.toString()}
                    renderItem={({index, item}) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            const id = item.Circuit_ID;
                            getAllCircuitDetails(
                              id,
                              setLodding,
                              circuitRefDetails,
                            );
                            setSwitchView(false);
                            cirCuitRef.current.close();
                          }}
                          style={{
                            ...styles.tableRow1,
                            height: 55,
                            backgroundColor:
                              index % 2 == 0 ? '#d1d0d0' : '#ffffff',
                            marginVertical: 1,
                          }}>
                          <DataColum title={item?.Location_ID} />
                          <DataColum title={item?.Circuit_ID} />
                          <DataColum
                            title={item?.Branch_ID ? item.Branch_ID : '--'}
                          />
                          <DataColum title={item?.Vendor} />
                        </TouchableOpacity>
                      );
                    }}
                    refreshing={refresh}
                    onRefresh={() => {
                      setDiplayName('');

                      getAllCircuit(setLodding3);
                    }}
                    ListEmptyComponent={() => {
                      return <NoDataViewFlatList />;
                    }}
                  />
                </View>
              </>
              {/* // )} */}
            </>
          )}

          {/* ========TABLE HEADER============= */}
          <CircuitBottomSheet
            diplayName={diplayName}
            loding1={loding1}
            cirCuitRef={cirCuitRef}
            setSwitchView={setSwitchView}
            bootSheetLodder={bootSheetLodder}
          />
          <BottomSheetViewCircuits
            loding={loding}
            setSwitchView={setSwitchView}
            circuitRefDetails={circuitRefDetails}
          />
          {/* ============TOOGLE=========== */}
          {switchView ? (
            <>
              <ToggleView
                name="Circuits"
                size={'medium'}
                length={allCircuit.length}
                alldata={allData}
                activeFilter={fiterCircuitsActive}
              />
            </>
          ) : null}
          {/* ============TOOGLE=========== */}
        </>
      )}
    </>
  );
};

export default connect(null, {
  getAllCircuit,
  getAllSiteID,
  getAllBrachrID,
  getAllCircuitID,
  getAllCircuitDetails,
})(CircuitsNew);

const styles = StyleSheet.create({
  ///========Lodder

  loderView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  ///========Lodder
  ///========id Button
  idButton: {
    width: 90,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========id View
  idView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  idViewLeft: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  idViewRight: {width: '20%', height: '100%'},
  ///========id View
  ///========TABELE HEADER
  tableHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum1: {
    height: '100%',
    backgroundColor: '#007aff',
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  ///========TABELE HEADER
  ///========TABELE
  table: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
  },
  tableRow1: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'green',
  },
  //   tableRowColum1: {
  //     height: '100%',
  //     backgroundColor: '#007aff',
  //   },
  tableRowColum2: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
