import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {
  useMemo,
  useRef,
  ImageBackground,
  ScrollView,
  useState,
} from 'react';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
const deviceWidth = Dimensions.get('screen').width;
const deviceHigth = Dimensions.get('screen').height;
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

const BottomSheetPic = ({picRef, cirCuitRef}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);

  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 4.5,
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
        <View style={{flex: 1, paddingHorizontal: 15}}>
          <View
            style={{
              width: '100%',
              height: 40,
              paddingRight: 30,

              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => {
                cirCuitRef.current.close();
              }}
              style={{
                width: 28,
                height: 28,
                backgroundColor: '#007aff',
                borderRadius: 14,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>
                <Entypo name="cross" size={20} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomSheetPic;

const styles = StyleSheet.create({
  textStyles: {
    marginLeft: 5,
  },
  contentContainer: {
    paddingTop: 10,
  },
  leftLower: {
    width: '50%',
    height: '100%',
  },
  item: {
    flexDirection: 'row',

    width: '100%',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  leftItem: {width: '30%', height: '100%', justifyContent: 'center'},
  rightItem: {
    width: '70%',
    height: '100%',
    borderLeftColor: '#77ccc5',
    borderLeftWidth: 1,
  },
  //================
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  one: {
    width: '100%',
    height: deviceHigth,
    //  backgroundColor:"#0A79DF"
  },
  cercalView: {},
  imageVies: {
    width: '100%',
    height: '100%',
    // backgroundColor:"green"
  },

  scroolview: {
    height: deviceWidth,
    height: '27.5%',
  },
  middle: {
    height: deviceWidth,
    height: '27.5%',
  },
  circleView: {
    width: '100%',
    height: '100%',
    marginTop: 30,
    //  backgroundColor:"red",
    opacity: 0.8,
    // zIndex:12,
    position: 'absolute',
    bottom: 0,
    // left:1,
    // marginHorizontal:10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    //  position:"absolute",

    margin: 2,
    //opacity:1
    //padding:3,
  },
  //======================
});
