import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Keyboard,
} from 'react-native';
import React, {useMemo} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import OrderType from './OrderType';
import Item from './Item';
import SmartSite from './SmartSite';
import Vendor from './Vendor';
import Status from './Status';
import Carrier from './Carrier';
import Tangoe from './Tangoe';

const CircuitBottmSheet = ({
  cirCuitRef,
  diplayName,

  setSwitchView,
  bottomSheetLodder,
}) => {
  const snapPoints = useMemo(() => ['20%', '70%'], []);

  const selectedComponent = () => {
    switch (true) {
      case diplayName === 'Order Type':
        return (
          <OrderType setSwitchView={setSwitchView} cirCuitRef={cirCuitRef} />
        );
      case diplayName === 'item#':
        return <Item setSwitchView={setSwitchView} cirCuitRef={cirCuitRef} />;
      case diplayName === 'SmartSite#':
        return (
          <SmartSite
            bottomSheetLodder={bottomSheetLodder}
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
          />
        );
      case diplayName === 'Tangoe#':
        return (
          <Tangoe
            bottomSheetLodder={bottomSheetLodder}
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
          />
        );
      // case diplayName === 'Vendor':
      //   return <Vendor setSwitchView={setSwitchView} cirCuitRef={cirCuitRef} />;
      case diplayName === 'Status':
        return <Status setSwitchView={setSwitchView} cirCuitRef={cirCuitRef} />;

      case diplayName === 'Carrier#':
        return (
          <Carrier
            bottomSheetLodder={bottomSheetLodder}
            setSwitchView={setSwitchView}
            cirCuitRef={cirCuitRef}
          />
        );
    }
  };

  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 2.5,
          opacity: 0.5,
        }}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={cirCuitRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}>
        <View style={{flex: 1}}>
          <View style={{...styles.top}}>
            <View style={styles.textView}>
              <TouchableOpacity
                onPress={() => {
                  setSwitchView(true);
                  cirCuitRef.current.close();
                  Keyboard.dismiss();
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 16, color: 'black'}}>{diplayName}</Text>
              <TouchableOpacity
                onPress={() => {
                  setSwitchView(true);
                  cirCuitRef.current.close();
                  Keyboard.dismiss();
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {selectedComponent()}
        </View>
      </BottomSheet>
    </>
  );
};

export default CircuitBottmSheet;

const styles = StyleSheet.create({
  top: {width: '100%', height: 50},
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
