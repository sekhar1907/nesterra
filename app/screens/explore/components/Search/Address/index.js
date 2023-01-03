import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconView from '../IconView/index';
import InPutView from '../InPutView';
import {SEARCH_BY_BRANCH_ID} from '../../../../../actions/action.coordinate.type';
import {useDispatch} from 'react-redux';

const Address = ({searchAddress}) => {
  const dispatch = useDispatch();
  const searchId = data => {
    searchAddress(data);
  };
  return (
    <>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{width: '80%', height: '100%'}}>
          <InPutView placeHolder="Search Address" onSearch={searchId} />
        </View>
        <View style={{width: '20%', height: '100%'}}>
          <IconView />
        </View>
      </View>
    </>
  );
};

export default Address;

const styles = StyleSheet.create({});
