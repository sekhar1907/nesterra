import {StyleSheet, Text, Dimensions, View} from 'react-native';
import React from 'react';
import Atm from './Components/Atm';
import Site from './Components/Site';
import Device from './Components/Device';
import Circuit from './Components/Circuit';
import Branch from './Components/Branch';

const RanderView = ({
  focusView,
  getAtmId,
  setRander,
  setFocusOn1,
  setSearchView,
  setPlace,
  getBranchId,
  getsiteId,
  getCircuitId,
  getDeviceId,
}) => {
  // console.log(focusView);
  const ranDerView = () => {
    switch (true) {
      case focusView === 'Circuit':
        return (
          <Circuit
            setRander={setRander}
            setFocusOn1={setFocusOn1}
            setSearchView={setSearchView}
            setPlace={setPlace}
            getCircuitId={getCircuitId}
          />
        );
      case focusView === 'Branch':
        return (
          <Branch
            setRander={setRander}
            setFocusOn1={setFocusOn1}
            setSearchView={setSearchView}
            setPlace={setPlace}
            getBranchId={getBranchId}
          />
        );
      case focusView === 'Device':
        return (
          <Device
            setRander={setRander}
            setFocusOn1={setFocusOn1}
            setSearchView={setSearchView}
            setPlace={setPlace}
            getDeviceId={getDeviceId}
          />
        );
      case focusView === 'Site':
        return (
          <Site
            setRander={setRander}
            setFocusOn1={setFocusOn1}
            setSearchView={setSearchView}
            setPlace={setPlace}
            getsiteId={getsiteId}
          />
        );
      case focusView === 'ATM':
        return (
          <Atm
            getAtmId={getAtmId}
            setRander={setRander}
            setFocusOn1={setFocusOn1}
            setSearchView={setSearchView}
            setPlace={setPlace}
          />
        );
    }
  };
  return (
    <View
      style={{
        width: Dimensions.get('screen').width - 30,
        alignSelf: 'center',
        height: 200,
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: 130,
        zIndex: 100,
        borderRadius: 5,
      }}>
      {ranDerView()}
    </View>
  );
};

export default RanderView;

const styles = StyleSheet.create({});
