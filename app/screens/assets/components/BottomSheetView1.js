import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo, useEffect} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';

// import SerachOrderTypeSmartSite from './SerachOrderTypeSmartSite';
import BranchID from './BranchID';
import SiteID from './SiteID';
import Status from './Status';
import Vendor from './ThirdRow/Vendor/index';
import Type from './ThirdRow/Type/index';
import SubType from './ThirdRow/SubType/index';
import CircuitId from './ThirdRow/CircuitId';

const BottomSheetView1 = ({
  bottomSheetRef,
  lodding,
  diplayName,
  bottomSheetDisplay,
}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);

  const selectedComponent = () => {
    switch (true) {
      case bottomSheetDisplay === 'SiteID':
        return <SiteID lodding={lodding} />;

      case bottomSheetDisplay === 'Status':
        return <Status lodding={lodding} />;

      case bottomSheetDisplay === 'BranchID':
        return <BranchID lodding={lodding} />;

      case bottomSheetDisplay === 'Vendor':
        return <Vendor lodding={lodding} />;
      case bottomSheetDisplay === 'Type':
        return <Type lodding={lodding} />;
      case bottomSheetDisplay === 'Sub Type':
        return <SubType lodding={lodding} />;
      case bottomSheetDisplay === 'Circuit ID':
        return <CircuitId lodding={lodding} />;
    }
  };

  useEffect(() => {}, []);

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
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}>
        <View style={styles.top}>
          <View style={styles.textView}>
            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16, color: 'black'}}>{diplayName}</Text>
            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {selectedComponent()}
        {/* <View style={styles.searchView}>
              <View style={styles.searchViewLeft}>
                
                <TextInput
                  value={search}
                  placeholder="Search Here"
                  style={{
                    paddingLeft: 10,
                  }}
                  onChangeText={text => searchFilterFunction(text)}
                />
              </View>
              <View style={styles.searchViewRight}>
                <EvilIcons name="search" size={24} color="black" />
              </View>
            </View> */}

        {/**/}
      </BottomSheet>
    </>
  );
};

export default BottomSheetView1;

const styles = StyleSheet.create({
  // top: {width: '100%', height: 130},
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
