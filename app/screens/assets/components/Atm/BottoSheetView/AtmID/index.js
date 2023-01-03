import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import BottomSheetTextInPut from '../../../../../../components/BottomSheetTextInPut';
import BottomSheetFlatListView from './../../../../../../components/BottomSheetFlatListView/indx';
import {
  ALL_ATMS_FILTER_BY_ATM_ID,
  ATMS_ALL_ATM_ID_SEARCH,
} from '../../../../../../actions/actionType/AtmsAssets';

const AtmID = ({bottomSheetLoder, atmRef}) => {
  const {assetsAtmsATMID} = useSelector(state => state.AssetsAtmATMID);

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: ATMS_ALL_ATM_ID_SEARCH,
      data: text,
    });
  };
  const searchDATA = text => {
    dispatch({
      type: ALL_ATMS_FILTER_BY_ATM_ID,
      data: text,
    });
    atmRef.current.close();
  };

  return (
    <>
      {bottomSheetLoder ? (
        <View
          style={{
            width: '100%',
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color="#007aff" size="large" />
        </View>
      ) : (
        <>
          <BottomSheetTextInPut
            search={search}
            onchange={searchFilterFunction}
          />
          <BottomSheetFlatListView
            data={assetsAtmsATMID}
            searchDATA={searchDATA}
          />
        </>
      )}
    </>
  );
};

export default AtmID;

const styles = StyleSheet.create({
  searchView: {
    width: '90%',
    height: 50,

    alignSelf: 'center',
    borderColor: 'black',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  searchViewLeft: {
    width: '90%',
    height: '100%',
  },
  searchViewRight: {
    width: '10%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    paddingRight: 5,
  },
});
