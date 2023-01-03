import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import ToggleView from './../ToggleView';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import NoDataViewFlatList from './../../NoDataViewFlatList/index';
import {connect, useSelector, useDispatch} from 'react-redux';

import AtmsDetails from './AtmsDetails';
import FlatColum from '../../FlatColum';
import {GetAllAtmdETAILS} from '../../../actions/AtmsAssets';
import {
  ALL_ATMS_FILTER_BY_ACTIVE,
  ALL_ATMS_ALL,
} from '../../../actions/actionType/ATMS';
import DataLoder from '../../lodder/DataLoder';

const TableHeaderFirstColum = ({title, color, border}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum,
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: border,
      }}>
      <Text style={{...styles.boxText1, color: color}}>{title}</Text>
    </View>
  );
};

const Atms = ({
  index,
  atmdDetailsRef,
  setBottomSheetLoder,
  GetAllAtmdETAILS,
  setDetailsLoder,
  atmLoding,
}) => {
  const {allAtms} = useSelector(state => state.allAtms);

  // console.log(allAtms);
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  const dispatch = useDispatch();

  const activeFilter = () => {
    dispatch({
      type: ALL_ATMS_FILTER_BY_ACTIVE,
    });
  };
  const alldata = () => {
    dispatch({
      type: ALL_ATMS_ALL,
    });
  };
  return (
    <>
      {atmLoding ? (
        <DataLoder />
      ) : (
        <>
          <View View style={{flex: 1}}>
            <View style={styles.tableRow}>
              <TableHeaderFirstColum color="white" title="ATM ID" border={0} />
              <TableHeaderFirstColum color="white" title="Status" border={2} />
              <TableHeaderFirstColum color="white" title="Vendor" border={2} />
              <TableHeaderFirstColum color="white" title="Model" border={2} />
            </View>
            <BottomSheetFlatList
              showsVerticalScrollIndicator={false}
              data={allAtms}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({index, item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      GetAllAtmdETAILS(item.ATM_ID, setDetailsLoder);
                      atmdDetailsRef.current.snapToIndex(2);
                    }}
                    style={{
                      ...styles.tableRow1,
                      height: 55,
                      backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
                      marginVertical: 1,
                    }}>
                    <FlatColum title={item.ATM_ID} border={0} />
                    <FlatColum title={item.ATM_Status} border={2} />
                    <FlatColum title={item.Vendor} border={2} />
                    <FlatColum title={item.Model} border={2} />
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
            {allAtms.length > 0 ? (
              <ToggleView
                length={allAtms.length}
                alldata={alldata}
                activeFilter={activeFilter}
              />
            ) : null}
          </View>
        </>
      )}
    </>
  );
};

export default connect(null, {GetAllAtmdETAILS})(Atms);

const styles = StyleSheet.create({
  tableRow: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '20%',
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

  boxText1: {
    fontSize: 14,
    color: 'white',
  },
  tableRow1: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomColor: 'black',
    // borderBottomWidth: 0.7,
    // backgroundColor: 'green',
  },
});
