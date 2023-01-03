import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
// import Status from '../Status';
import BranchID from '../BranchID';
import SiteID from '../SiteID';
import Project from './../ThirdRow/Project/index';
import SubType from '../ThirdRow/SubType';
import Vendor from './../ThirdRow/Vendor/index';
import CircuitId from '../ThirdRow/CircuitId';
import Status from '../ThirdRow/Status';
//================
import OrderType from './../SecondRow/OrderType/index';
import SmartSite from './../SecondRow/SmartSite/index';
import Tangoe from './../SecondRow/Tangoe/index';
import Carrier from './../SecondRow/Carrier/index';
import Item from './../SecondRow/Item/index';

const CircuitBottomSheet = ({
  cirCuitRef,
  diplayName,
  setSwitchView,
  loding1,
  bootSheetLodder,
}) => {
  const snapPoints = useMemo(() => ['20%', '50%'], []);
  // console.log(diplayName);
  const selectedComponent = () => {
    switch (true) {
      case diplayName === 'Order Type':
        return (
          <OrderType
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
            bootSheetLodder={bootSheetLodder}
          />
        );
      case diplayName === 'SmartSite#':
        return (
          <SmartSite
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
            bootSheetLodder={bootSheetLodder}
          />
        );
      case diplayName === 'Tangoe#':
        return (
          <Tangoe
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
            bootSheetLodder={bootSheetLodder}
          />
        );
      case diplayName === 'Carrier#':
        return (
          <Carrier
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
            bootSheetLodder={bootSheetLodder}
          />
        );
      case diplayName === 'Item#':
        return (
          <Item
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
          />
        );
      case diplayName === 'Site ID':
        return (
          <SiteID
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
          />
        );

      case diplayName === 'Status':
        return (
          <Status
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
          />
        );

      case diplayName === 'Branch ID':
        return (
          <BranchID
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
          />
        );
      case diplayName === 'Project':
        return <Project cirCuitRef={cirCuitRef} loding1={loding1} />;
      case diplayName === 'Sub Type':
        return (
          <SubType
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
          />
        );
      case diplayName === 'Vendor':
        return (
          <Vendor
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
          />
        );
      case diplayName === 'Circuit ID':
        return (
          <CircuitId
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
            loding1={loding1}
          />
        );
    }
  };
  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 2.5,
        opacity: 0.5,
      }}
      ref={cirCuitRef}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      animateOnMount
      animatedPosition={true}>
      <View style={styles.top}>
        <View style={styles.textView}>
          <TouchableOpacity
            onPress={() => {
              setSwitchView(true);
              cirCuitRef.current.close();
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
              Cancel
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black'}}>{diplayName}</Text>
          <TouchableOpacity
            onPress={() => {
              cirCuitRef.current.close();
              setSwitchView(true);
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {selectedComponent()}
    </BottomSheet>
  );
};

export default CircuitBottomSheet;

const styles = StyleSheet.create({
  textView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  searchView: {
    width: '90%',
    height: 50,
    backgroundColor: 'yellow',
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
