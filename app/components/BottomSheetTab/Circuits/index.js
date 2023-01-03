import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BottomSheetScrollView, BottomSheetFlatList} from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import NoDataViewFlatList from './../../NoDataViewFlatList/index';
import {
  SORT_BY_CATEGORY_ASC,
  SORT_BY_CATEGORY_DES,
  SORT_BY_CIRCUIT_ID_ASC,
  SORT_BY_CIRCUIT_ID_DES,
  SORT_BY_SUBCAT_1_ASC,
  SORT_BY_SUBCAT_1_DES,
  SORT_BY_VENDOR_ASC,
  SORT_BY_VENDOR_DES,
  FILTER_BY_STATUS_ACTIVE,
  ALL_DATA,
} from '../../../actions/actionType/circuitInventory.type';
import {CIRCUIT_DETAILS_EXPLORE} from '../../../actions/actionType/CircuitDetailsExplore';
import {copyText, tostalert} from '../../helper';
import ToggleView from './../ToggleView';
import DataLoder from '../../lodder/DataLoder';
import FlatColum from './../../FlatColum/index';

const Circuits = ({cirCuitRefExplore, circuitLoding}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [circuitType, setCircuitType] = useState(true);
  const [vendorType, setVendorType] = useState(true);
  const [categoryType, setCategoryType] = useState(true);
  const [subCat1Type, setsubCat1Type] = useState(true);
  const {cirCuitInventory} = useSelector(state => state.circuitInventory);

  const activeFilter = () => {
    dispatch({
      type: FILTER_BY_STATUS_ACTIVE,
    });
  };
  const alldata = () => {
    dispatch({
      type: ALL_DATA,
    });
  };
  const HeaderColum = ({title, onPress, border, type}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          ...styles.tableRowColum,
          flexDirection: 'row',
          borderLeftColor: 'white',
          justifyContent: 'space-around',

          borderLeftWidth: border,
        }}>
        <Text style={{...styles.boxText, color: 'white'}}>{title} </Text>
        <Text style={{marginTop: 1, marginRight: 3}}>
          <AntDesign
            name={type ? 'caretup' : 'caretdown'}
            size={16}
            color="white"
          />
        </Text>
      </TouchableOpacity>
    );
  };
  const sorrByCId = () => {
    if (circuitType) {
      setCircuitType(!circuitType);
      dispatch({
        type: SORT_BY_CIRCUIT_ID_ASC,
      });
    } else {
      setCircuitType(!circuitType);
      dispatch({
        type: SORT_BY_CIRCUIT_ID_DES,
      });
    }
  };
  const sorrByVendor = () => {
    if (vendorType) {
      setVendorType(!vendorType);
      dispatch({
        type: SORT_BY_VENDOR_ASC,
      });
    } else {
      setVendorType(!vendorType);
      dispatch({
        type: SORT_BY_VENDOR_DES,
      });
    }
  };
  const sorrByCategory = () => {
    if (categoryType) {
      setCategoryType(!categoryType);
      dispatch({
        type: SORT_BY_CATEGORY_ASC,
      });
    } else {
      setCategoryType(!categoryType);
      dispatch({
        type: SORT_BY_CATEGORY_DES,
      });
    }
  };
  const sorrBySubCategory = () => {
    if (subCat1Type) {
      setsubCat1Type(!subCat1Type);
      dispatch({
        type: SORT_BY_SUBCAT_1_ASC,
      });
    } else {
      setsubCat1Type(!subCat1Type);
      dispatch({
        type: SORT_BY_SUBCAT_1_DES,
      });
    }
  };
  return (
    <>
      {/* ==============container============== */}
      <View style={{flex: 1}}>
        {/* ==============Table Header============== */}
        {circuitLoding ? (
          <DataLoder />
        ) : (
          <>
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
              }}>
              <HeaderColum
                title="Circuit ID"
                type={circuitType}
                onPress={sorrByCId}
                border={0}
              />
              <HeaderColum
                title="Vendor"
                type={vendorType}
                onPress={sorrByVendor}
                border={2}
              />
              <HeaderColum
                title="Category"
                type={categoryType}
                onPress={sorrByCategory}
                border={2}
              />
              <HeaderColum
                title="Sub Cat 1"
                type={subCat1Type}
                onPress={sorrBySubCategory}
                border={2}
              />
            </View>

            <BottomSheetFlatList
              data={cirCuitInventory}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({index, item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      dispatch({
                        type: CIRCUIT_DETAILS_EXPLORE,
                        payload: {
                          data: item,
                        },
                      });
                      cirCuitRefExplore.current.snapToIndex(2);
                    }}
                    style={{
                      width: '100%',
                      height: 50,
                      backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
                      flexDirection: 'row',
                      marginVertical: 1,
                    }}>
                    <FlatColum title={item.Circuit_ID} border={0} />
                    <FlatColum title={item.Vendor} border={2} />
                    <FlatColum title={item.Category} border={2} />
                    <FlatColum title={item.SubCat_1} border={2} />
                  </TouchableOpacity>
                );
              }}
              ListEmptyComponent={() => {
                return (
                  <>
                    <NoDataViewFlatList />
                  </>
                );
              }}
            />
            {/* ==============Table Body============== */}
          </>
        )}
        {/* ==============Toggle View============== */}
        {cirCuitInventory.length > 0 ? (
          <ToggleView
            length={cirCuitInventory.length}
            alldata={alldata}
            activeFilter={activeFilter}
          />
        ) : null}
      </View>
      {/* ==============Toggle View============== */}
      {/* ==============container============== */}
    </>
  );
};

export default connect(null, {})(Circuits);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
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
    height: 50,
    backgroundColor: '#007aff',
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
    width: '25%',
    height: '100%',
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColum1: {
    width: '25%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
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
    width: '50%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ///========Second table
  //=====
  contentContainer: {
    backgroundColor: 'white',
  },
});
