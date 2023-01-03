import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, memo} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownView from './DropDownView';
// import BranchSearch from './BranchSearch';
// import CircuitSearch from './CircuitSearch';
import CircuitId from './CircuitId/index';
import BranchId from './BranchId';
import DeviceId from './DeviceId';
import SiteId from './SiteId';

import AtmsId from './AtmsId';

const SearchComponet = ({
  setModalVisible,
  searchBranch,
  searchAddress,
  setsearchComponet,

  searchView,
  seTDropDownShow,
  setRander,

  setFocusView,
  focusOn1,
  setFocusOn1,
  setFocusOn,
  getAtmId,
  placeHolder,
  setPlace,
}) => {
  // console.log('first');
  // const [dropDownShow, seTDropDownShow] = useState(false);
  // const [searchView, setSearchView] = useState('Address');

  // console.log(searchView);
  const ranDerView = () => {
    switch (true) {
      case searchView === 'Circuit ID':
        return (
          <CircuitId
            setRander={setRander}
            setFocusView={setFocusView}
            focusOn1={focusOn1}
            setFocusOn1={setFocusOn1}
            getAtmId={getAtmId}
            searchView={searchView}
            seTDropDownShow={seTDropDownShow}
            placeHolder={placeHolder}
            setPlace={setPlace}
          />
        );
      case searchView === 'Branch ID':
        return (
          <BranchId
            setRander={setRander}
            setFocusView={setFocusView}
            focusOn1={focusOn1}
            setFocusOn1={setFocusOn1}
            getAtmId={getAtmId}
            searchView={searchView}
            seTDropDownShow={seTDropDownShow}
            placeHolder={placeHolder}
            setPlace={setPlace}
          />
        );
      case searchView === 'Device ID':
        return (
          <DeviceId
            setRander={setRander}
            setFocusView={setFocusView}
            focusOn1={focusOn1}
            setFocusOn1={setFocusOn1}
            getAtmId={getAtmId}
            searchView={searchView}
            seTDropDownShow={seTDropDownShow}
            placeHolder={placeHolder}
            setPlace={setPlace}
          />
        );
      case searchView === 'Site ID':
        return (
          <SiteId
            setRander={setRander}
            setFocusView={setFocusView}
            focusOn1={focusOn1}
            setFocusOn1={setFocusOn1}
            getAtmId={getAtmId}
            searchView={searchView}
            seTDropDownShow={seTDropDownShow}
            placeHolder={placeHolder}
            setPlace={setPlace}
          />
        );
      case searchView === 'ATM ID':
        return (
          <AtmsId
            setRander={setRander}
            setFocusView={setFocusView}
            focusOn1={focusOn1}
            setFocusOn1={setFocusOn1}
            getAtmId={getAtmId}
            searchView={searchView}
            seTDropDownShow={seTDropDownShow}
            placeHolder={placeHolder}
            setPlace={setPlace}
          />
        );
    }
  };
  return (
    <>
      <View style={styles.container}>
        <>
          {ranDerView()}
          {/* <View style={styles.leftView}></View> */}
          {/* {focusOn1 ? (
            <TouchableOpacity
              onPress={() => {
                seTDropDownShow(true);
              }}
              style={{
                ...styles.rightVies,
                position: 'relative',
              }}>
              <View
                style={{
                  width: 2,
                  height: '50%',
                  backgroundColor: 'black',
                  position: 'absolute',
                  top: 15,
                  left: 0,
                }}></View>
              <Text style={{color: 'black'}}>{searchView}</Text>
            
              <FontAwesome5
                name="eject"
                size={15}
                style={{
                  transform: [{rotate: '180deg'}],
                  marginLeft: 2,
                  marginTop: 3,
                }}
                color={'#007aff'}
              />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                ...styles.rightVies,
                position: 'relative',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setFocusOn1(true);
                  setRander(false);
                }}>
                <Entypo name="cross" size={22} color="black" style={{}} />
              </TouchableOpacity>
            </View>
          )} */}
        </>
      </View>
    </>
  );
};

export default memo(SearchComponet);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    width: Dimensions.get('screen').width - 30,
    alignSelf: 'center',
    zIndex: 0,
    marginTop: 80,
    height: 50,
    // borderWidth: 2,
    // zIndex: -1,
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 29,
  },
  container1: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    zIndex: 0,
    // borderRadius: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 2,
    //   height: 6,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,
    // elevation: 29,
  },
  leftView: {
    width: '70%',
    height: '100%',
    flexDirection: 'row',
  },
  rightVies: {
    width: '30%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
