import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CircleView,
  CircleView1,
  CircleViewCircle,
  ResetView,
} from '../CircleView';

import InputTypeView1 from '../InputTypeView/InputTypeView1';
import {serviceType} from '../../../../utils/addOrders';
import {Input} from 'react-native-paper';
import {InputViewWithIcon, InputViewWithOutIcon} from '../InputViewWithIcon';

const Circuits = () => {
  const [text, setText] = React.useState('');
  return (
    <>
      <View style={styles.stepView}>
        <View style={styles.stepViewIner}>
          <CircleView title="1" />
          <CircleView1 />

          <CircleViewCircle title="2" />
          <CircleView1 />
          <CircleViewCircle title="3" />
          <CircleView1 />
          <CircleViewCircle title="4" />
        </View>
      </View>
      <ResetView />
      {/* ================date picker=================== */}
      <View style={styles.itemWraper}>
        <InputViewWithIcon text="Date Created" value="08/05/23" />
        <InputViewWithOutIcon text="Order No" value="2897" />
      </View>

      {/* ================date picker=================== */}
      <View style={styles.itemWraper}>
        <View style={styles.item}>
          <InputTypeView1 title="Order Type" data={serviceType} />
        </View>
        <View style={styles.item}>
          <InputTypeView1 title="Select Project" data={serviceType} />
        </View>
      </View>
      <View style={styles.itemWraper}>
        <View style={styles.item}>
          <InputTypeView1 title="Service Category" data={serviceType} />
        </View>
        <View style={styles.item}>
          <InputTypeView1 title="Select Project" data={serviceType} />
        </View>
      </View>
      {/* ================date picker=================== */}
      <View style={styles.itemWraper}>
        <InputViewWithIcon text="Due Date" value="08/05/23" />
        <InputViewWithOutIcon text="Date from today" value="2897" />
      </View>

      {/* ================date picker=================== */}
      <View style={styles.endbutton}>
        <View
          style={{
            width: '40%',
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#3478f6',
            }}>
            Save Draft
          </Text>
        </View>
        <View
          style={{
            width: '40%',
            height: 32,
            backgroundColor: '#dbf1dc',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#3478f6',
            }}>
            Next
          </Text>
        </View>
      </View>
    </>
  );
};

export default Circuits;

const styles = StyleSheet.create({
  stepView: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    borderTopColor: '#a8a8a8',
    borderTopWidth: 1,
    marginTop: 10,
  },
  stepViewIner: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  itemWraper: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  item: {
    width: '48%',
    height: 45,
  },
  item1: {
    width: '48%',
    height: 40,
  },
  DateView: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#727272',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  endbutton: {
    // height: 50,
    // backgroundColor: '#fbfaf8',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // marginTop: 5,
    // position: 'absolute',
    // bottom: 60,
    // left: 0,
    // right: 0,
  },
});
