import {StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';

import {get_orders_for_tab} from './../../../../actions/orderFotTab';
import DataLoder from './../../../../components/lodder/DataLoder';

import {connect, useDispatch, useSelector} from 'react-redux';
import Tableheader from './TableHeader/index';
import moment from 'moment';
import BottomSheetViewDetails from './BottomSheetViewDetails';
import {get_order_details} from '../../../../actions/order';
import ToggleView from './../../../../components/ToggleView';
import CircuitBottmSheet from './CircuitBottmSheet';
import {
  FILTER_STATUS_BY_COMPLETED,
  ALL_DATA,
} from '../../../../actions/actionType/action.OrdersForTab';
import NoDataViewFlatList from '../../../../components/NoDataViewFlatList';
import VendorButtonSheet from './VendorButtonSheet';
import FlatListColumOther from './FlatListColumOther';
import FlatListColum from './FlatListColum';
import AddButton from '../../../../components/button/AddButton';
import {useNavigation} from '@react-navigation/native';

const Circuits = ({get_orders_for_tab, get_order_details}) => {
  const navigation = useNavigation();
  const {ordersForTab} = useSelector(state => state.ordersForTab);
  const dispatch = useDispatch();
  const cirCuitRef = useRef(null);
  const vendorRef = useRef(null);
  const [refresh, setRefresh] = useState(false);
  const [loding, setLodding] = useState(true);
  const [lodding1, setLodding1] = useState(true);

  const [bottomSheetLodder, setbootSheetLodder] = useState(true);

  const [switchView, setSwitchView] = useState(true);
  const [diplayName, setDiplayName] = useState('');

  const bottomSheetRefdetails = useRef(null);
  // console.log(ordersForTab.length);
  useEffect(() => {
    get_orders_for_tab(setLodding);
  }, []);

  //barckground color change

  //barckground color change

  const allData = () => {
    //
    dispatch({
      type: ALL_DATA,
    });
  };
  const fiterCircuitsActive = () => {
    //
    dispatch({
      type: FILTER_STATUS_BY_COMPLETED,
    });
  };
  return (
    <>
      {loding ? (
        <View style={styles.loderView}>
          <DataLoder />
        </View>
      ) : (
        <>
          {/* <TouchableOpacity
            onPress={() => {
              bottomSheetRefdetails.current.close();
              cirCuitRef.current.close();
              setDiplayName('');
              get_orders_for_tab(setLodding);
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
          <SecondRow
            diplayName={diplayName}
            setDiplayName={setDiplayName}
            cirCuitRef={cirCuitRef}
            vendorRef={vendorRef}
            setSwitchView={setSwitchView}
            setbootSheetLodder={setbootSheetLodder}
          />
          <ThirdRow
            diplayName={diplayName}
            setDiplayName={setDiplayName}
            cirCuitRef={cirCuitRef}
            vendorRef={vendorRef}
            setSwitchView={setSwitchView}
          />
          <Tableheader />

          <View style={styles.table}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={ordersForTab}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({item, i}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      get_order_details(
                        item.Inventory_ID,
                        setLodding1,
                        bottomSheetRefdetails,
                      );
                    }}
                    style={{
                      ...styles.tableRow1,
                      height: 60,
                      marginVertical: 1,
                      backgroundColor: '#ffffff',
                    }}>
                    <FlatListColum item={item} title={item.Order_Type} />
                    <FlatListColumOther item={item} title={item.vendor} />
                    <FlatListColum item={item} title={item.Status} />
                    <FlatListColumOther
                      item={item}
                      title={moment(item.Creation_Date).format('MM/DD/YY')}
                    />
                    <FlatListColumOther item={item} title={item.Inventory_ID} />
                  </TouchableOpacity>
                );
              }}
              refreshing={refresh}
              onRefresh={() => {
                // setType('');
                // changeBottomColor1();
                get_orders_for_tab(setLodding);
              }}
              ListEmptyComponent={() => {
                return <NoDataViewFlatList />;
              }}
            />
          </View>

          <>
            {/* ============TOOGLE=========== */}
            {switchView ? (
              <>
                <ToggleView
                  name="Circuits"
                  // size={'medium'}
                  length={ordersForTab.length}
                  alldata={allData}
                  activeFilter={fiterCircuitsActive}
                />
              </>
            ) : null}
            {/* ============TOOGLE=========== */}
          </>
          <BottomSheetViewDetails
            lodding1={lodding1}
            bottomSheetRefdetails={bottomSheetRefdetails}
          />
          <CircuitBottmSheet
            diplayName={diplayName}
            bottomSheetLodder={bottomSheetLodder}
            cirCuitRef={cirCuitRef}
            setSwitchView={setSwitchView}
          />
          <VendorButtonSheet
            setDiplayName={setDiplayName}
            diplayName={diplayName}
            bottomSheetLodder={bottomSheetLodder}
            vendorRef={vendorRef}
            setSwitchView={setSwitchView}
          />
        </>
      )}
      <AddButton
        onPress={() => {
          navigation.navigate('AddOrder');
        }}
      />
    </>
  );
};

export default connect(null, {get_orders_for_tab, get_order_details})(Circuits);

const styles = StyleSheet.create({
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
    // backgroundColor: '#007aff',
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
    borderBottomColor: 'black',
    // borderBottomWidth: 0.7,
    // backgroundColor: 'green',
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
  boxText1: {
    fontSize: 12,
    color: '#000000',
  },
});
