import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width} = Dimensions.get('screen');
import React, {useState, useEffect, useRef} from 'react';

import Devices from './components/Devices';

import Circuits from './components/Circuits';
import {connect} from 'react-redux';
import Button from '../../components/button/Button';

const Orders = ({}) => {
  const circuitRefDetails = useRef(null);
  const deviceRefDetails = useRef(null);
  const bottomSheetRef = useRef(null);

  const [displyCompomnet, setDisplayComponents] = useState('Circuits');
  const [loding, setLodding] = useState(true);

  const ranDerView = () => {
    switch (true) {
      case displyCompomnet === 'Circuits':
        return (
          <Circuits
            setLodding={setLodding}
            circuitRefDetails={circuitRefDetails}
          />
        );

      case displyCompomnet === 'Devices':
        return (
          <Devices
            setLodding={setLodding}
            deviceRefDetails={deviceRefDetails}
          />
        );
    }
  };
  const setComponentCircuit = () => {
    setDisplayComponents('Circuits');
  };
  const setComponentDeives = () => {
    setDisplayComponents('Devices');
  };
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        {/* ==============container============== */}

        {/* ==============Search View=========== */}
        <View
          style={{
            ...styles.searchView,
            alignItems: 'center',
          }}>
          <View
            style={{
              ...styles.searchViewLeft,
              flexDirection: 'row',
            }}>
            <Button
              onPress={setComponentCircuit}
              displyCompomnet={displyCompomnet}
              title="Circuits"
            />
            <Button
              onPress={setComponentDeives}
              displyCompomnet={displyCompomnet}
              title="Devices"
            />
          </View>
          <View style={styles.searchViewRight}></View>
        </View>
        {/* ==============Search View=========== */}

        {ranDerView()}
      </SafeAreaView>
    </>
  );
};

export default connect(null, {})(Orders);

const styles = StyleSheet.create({
  //searchView
  searchViewLeft: {
    width: '80%',
    height: '100%',

    flexDirection: 'row',
    alignItems: 'center',
  },

  searchViewRight: {
    width: '20%',
    height: '100%',
    paddingLeft: 10,
    justifyContent: 'center',
  },

  searchView: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  //searchView

  ///=========data row
});
