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

import {get_orders_for_tab} from '../../actions/orderFotTab';
import {connect, useDispatch, useSelector} from 'react-redux';
//

import BottomSheetView1 from './components/BottomSheetView1';
import BottomSheetViewCircuits from './components/CircuitDetails';

import {getAllBrachrID} from '../../actions/AllBranchID';
import {getAllCircuitID} from '../../actions/AllCircuitID';
import {getAllSiteID} from '../../actions/AllSiteID';
import {getAllAssets} from '../../actions/Assets';

import {get_order_details} from '../../actions/order';
import Devices from './components/Devices';
import Atm from './components/Atm';

import CircuitsNew from './components/CircuitsNew';
import Button from '../../components/button/Button';

const Assets = ({
  get_orders_for_tab,
  getAllCircuitID,
  getAllBrachrID,
  getAllSiteID,
  getAllAssets,
  get_order_details,
  navigation,
}) => {
  const {deviceAllData} = useSelector(state => state.deviceAllData);
  const {allCircuit} = useSelector(state => state.allCircuit);

  const circuitRefDetails = useRef(null);
  const deviceRefDetails = useRef(null);
  const bottomSheetRef = useRef(null);
  // const bottomSheetRefDetails = useRef(null);

  //console.log(ordersForTab[0]);

  // console.log(ordersForTab);
  // console.log(allAssets.length);

  const {isLoding} = useSelector(state => state.ordersForTab);

  // const [isLoding, setIsLoding] = useState(false);

  const [bottomSheetDisplay, setBottomSheetDisplay] = useState('');
  const [lodding, setLodding] = useState(false);
  const [lodding1, setLodding1] = useState(false);
  const [diplayName, setDiplayName] = useState('');
  const [displyCompomnet, setDisplayComponents] = useState('Circuits');

  const ranDerView = () => {
    switch (true) {
      case displyCompomnet === 'Circuits':
        return (
          <CircuitsNew
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
      case displyCompomnet === 'ATMS':
        return (
          <Atm setLodding={setLodding} deviceRefDetails={deviceRefDetails} />
        );
    }
  };
  const setComponentCircuit = () => {
    setDisplayComponents('Circuits');
  };
  const setComponentDeives = () => {
    setDisplayComponents('Devices');
  };
  const setComponentATM = () => {
    setDisplayComponents('ATMS');
  };
  useEffect(() => {
    // setLodding1(true);
    // get_orders_for_tab();
    getAllAssets(setLodding1);
  }, []);

  const randerItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={
          () => {
            get_order_details(
              item.Inventory_ID,
              setLodding,
              bottomSheetRefDetails,
            );
            bottomSheetRefDetails.current.snapToIndex(2);
          }
          // navigation.navigate('OrderDetails', {
          //   inv_Id: item.Inventory_ID,
          // })
        }
        style={{
          ...styles.tableRow1,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          marginVertical: 1,
        }}>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <Text style={styles.boxText1}> {item?.Location_ID}</Text>
        </View>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <Text style={styles.boxText1}>{item?.Circuit_ID}</Text>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <Text style={styles.boxText1}>
            {item?.Branch_ID ? item.Branch_ID : '--'}
            {/* {moment(item.Initiation_Date).format('DD-MM-YYYY')} */}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <Text style={styles.boxText1}>{item?.Vendor}</Text>
        </View>
      </TouchableOpacity>
    );
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
            <Button
              onPress={setComponentATM}
              displyCompomnet={displyCompomnet}
              title="ATMS"
            />
          </View>
          <View style={styles.searchViewRight}></View>
        </View>

        {/* ==============Search View=========== */}
        {/* ==============Services Category============== */}

        {ranDerView()}

        {/* ==============Summary View=========== */}
        <BottomSheetView1
          lodding={lodding}
          diplayName={diplayName}
          bottomSheetRef={bottomSheetRef}
          bottomSheetDisplay={bottomSheetDisplay}
        />
        {/* <BottomSheetView
          lodding={lodding}
          bottomSheetRefDetails={bottomSheetRefDetails}
        /> */}
        <BottomSheetViewCircuits
          lodding={lodding}
          circuitRefDetails={circuitRefDetails}
        />
        {/* <BottomSheetViewDevices
          lodding={lodding}
          deviceRefDetails={deviceRefDetails}
          
        /> */}
      </SafeAreaView>
      {/* {selectedComponent()} */}
    </>
  );
};

export default connect(null, {
  get_orders_for_tab,
  getAllCircuitID,
  getAllBrachrID,
  getAllSiteID,
  getAllAssets,
  get_order_details,
})(Assets);

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
