import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  InputViewWithIcon,
  InputViewWithOutIcon,
} from '../../../InputViewWithIcon';
import TextView from '../../../../../../components/TextView';

import InputTypeView1 from '../../../InputTypeView/InputTypeView1';
import {serviceType} from '../../../../../../utils/addOrders';

import SimpleCheckBox from '../../../../../../components/checkBox/SimpleCheckBox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextInputView from '../Two/TextInputView';

const Three = () => {
  const [text, setText] = React.useState('');
  return (
    <ScrollView>
      <View style={styles.itemWraper}>
        <View style={styles.item}>
          <InputTypeView1 title="Location Type" data={serviceType} />
        </View>
        <View style={styles.item}>
          <InputTypeView1 title="Status" data={serviceType} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 40,
          // backgroundColor: 'red',

          flexDirection: 'row',
        }}>
        <View style={{width: '50%', height: 60}}>
          <TextInputView margin={10} label="Site Name" />
        </View>
        <View style={{width: '50%', height: 60}}>
          <TextInputView margin={10} label="Smartsite Id" />
        </View>
      </View>
      <View style={{...styles.itemWraper, marginTop: 30}}>
        <View style={styles.item}>
          <InputTypeView1 title="Street" data={serviceType} />
        </View>
        <View style={styles.item}>
          <InputTypeView1 title="Branch ID" data={serviceType} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 40,
          // backgroundColor: 'red',

          flexDirection: 'row',
        }}>
        <View style={{width: '50%', height: 60}}>
          <TextInputView margin={10} label="City" />
        </View>
        <View style={{width: '50%', height: 60}}>
          <TextInputView margin={10} label="State / Province" />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 40,
          // backgroundColor: 'red',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <View style={{width: '50%', height: 60}}>
          <TextInputView margin={10} label="Zip" />
        </View>
        <View style={{width: '50%', height: 60}}>
          <TextInputView margin={10} label="State / Province" />
        </View>
      </View>
      <TextInputView margin={25} label="Site Access Restriction / Notes " />
      <TextInputView margin={20} label="Special Requirements / Notes" />

      <View style={{width: '100%', height: 300}}></View>
      {/* <View style={{width: '100%', height: 300}}></View> */}
    </ScrollView>
  );
};

export default Three;

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
    marginTop: 20,
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
    height: 50,
    width: '100%',
    backgroundColor: '#fbfaf8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    // position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
  },
  selectBox: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'blue',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
  },
  titleView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0472ef',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleView1: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0472ef',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  selectBoxWraper: {
    width: '100%',
    height: 40,
    // backgroundColor: 'red',
    paddingHorizontal: 27,
  },
});
