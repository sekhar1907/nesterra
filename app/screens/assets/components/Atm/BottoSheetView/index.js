import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
// import Status from '../Status';
import SiteID from './SiteID/index';
import BranchID from './BranchID';
import Vendor from './Vendor';
import Type from './Type';
import Model from './Model';
import AtmID from './AtmID';
//================

const BottoSheetView = ({atmRef, diplayName, bottomSheetLoder}) => {
  const snapPoints = useMemo(() => ['20%', '70%'], []);
  // console.log(diplayName);
  const selectedComponent = () => {
    switch (true) {
      case diplayName === 'Site ID':
        return <SiteID atmRef={atmRef} />;

      case diplayName === 'Branch ID':
        return <BranchID atmRef={atmRef} />;
      case diplayName === 'Vendor':
        return <Vendor bottomSheetLoder={bottomSheetLoder} atmRef={atmRef} />;
      case diplayName === 'Type':
        return <Type bottomSheetLoder={bottomSheetLoder} atmRef={atmRef} />;
      case diplayName === 'Model':
        return <Model bottomSheetLoder={bottomSheetLoder} atmRef={atmRef} />;
      case diplayName === 'ATM ID':
        return <AtmID bottomSheetLoder={bottomSheetLoder} atmRef={atmRef} />;
    }
  };
  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 2.5,
        opacity: 0.5,
      }}
      ref={atmRef}
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
              //   setSwitchView(true);
              atmRef.current.close();
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
              Cancel
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black'}}>{diplayName}</Text>
          <TouchableOpacity
            onPress={() => {
              atmRef.current.close();
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

export default BottoSheetView;

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
