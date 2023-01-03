import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useMemo} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

const BottomsheetView = ({bottomSheetRefImage}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);

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
        ref={bottomSheetRefImage}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>aaaaaaaaaaaaaa</Text>
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomsheetView;

const styles = StyleSheet.create({});
