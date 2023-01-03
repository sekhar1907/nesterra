import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {memo, useCallback} from 'react';
const {width} = Dimensions.get('screen');

const w1 = width - 50;
const w2 = (w1 / 100) * 30;
const ButtonView = ({setSearchView, title}) => {
  // console.log(id);
  return (
    <TouchableOpacity
      onPress={() => {
        setSearchView();
      }}
      style={{
        width: '100%',
        height: 30,
        paddingLeft: 10,
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const DropDownView = ({setSearchView, searchView, setRander, setPlace}) => {
  const addSer = useCallback(() => {
    setSearchView('Address');
    setRander(false);
  }, [searchView]);
  const atmSer = useCallback(() => {
    setSearchView('ATM ID');
    setRander(false);
    setPlace('Serach Atm ID');
  }, [searchView]);
  const siteSer = useCallback(() => {
    setPlace('Serach Site ID');
    setSearchView('Site ID');
    setRander(false);
  }, [searchView]);
  const branchSer = useCallback(() => {
    setSearchView('Branch ID');
    setRander(false);
    setPlace('Serach Branch ID');
  }, [searchView]);
  const circuitSer = useCallback(() => {
    setSearchView('Circuit ID');
    setPlace('Serach Circuit ID');
    setRander(false);
  }, [searchView]);
  const devicesSer = useCallback(() => {
    setSearchView('Device ID');
    setPlace('Serach Device ID');
    setRander(false);
  }, [searchView]);

  return (
    <View style={styles.rightVies1}>
      <ButtonView setSearchView={addSer} id={'Address'} title="Address" />
      <ButtonView setSearchView={atmSer} id={'AtmsId'} title="ATM ID" />
      <ButtonView setSearchView={siteSer} id={'SiteId'} title="Site ID" />
      <ButtonView setSearchView={branchSer} id={'BranchId'} title="Branch ID" />
      <ButtonView
        setSearchView={circuitSer}
        id={'CircuitId'}
        title="Circuit ID"
      />
      <ButtonView
        setSearchView={devicesSer}
        id={'DeviceId'}
        title="Device ID"
      />
    </View>
  );
};

export default memo(DropDownView);

const styles = StyleSheet.create({
  rightVies1: {
    marginTop: 133,
    alignSelf: 'flex-end',
    right: 25,
    zIndex: 100,
    position: 'absolute',
    backgroundColor: 'white',
    width: w2,
    paddingVertical: 10,
    borderColor: '#898989',
    borderWidth: 1,
  },
});
