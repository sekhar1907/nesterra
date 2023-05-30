import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputTypeView1 from '../../../InputTypeView/InputTypeView1';
import {
  InputViewWithIcon,
  InputViewWithOutIcon,
} from '../../../InputViewWithIcon';
import InputView from '../../../InputView';
import {serviceType} from '../../../../../../utils/addOrders';
import {ResetView} from '../../../CircleView';
import TextInputView from '../Two/TextInputView';
import TabView from './TabView';
import ButtonView from './ButtonView';
import BottomViewButton from './BottomViewButton';
const Four = () => {
  const [text, setText] = React.useState('');
  return (
    <>
      <View>
        <TabView />
        <ButtonView />
        {/* ================date picker=================== */}

        {/* ================date picker=================== */}
        <View style={styles.itemWraper}>
          <View style={styles.item}>
            <InputTypeView1 title="Accesss Speed" data={serviceType} />
          </View>
          <View style={styles.item}>
            <InputTypeView1 title="Port Speed" data={serviceType} />
          </View>
        </View>
        <View style={styles.itemWraper}>
          <View style={styles.item}>
            <InputTypeView1 title="Preferred Carrier" data={serviceType} />
          </View>
          <View style={styles.item}>
            <InputTypeView1 title="Demarc Location *" data={serviceType} />
          </View>
        </View>
        {/* <View
          style={{
            width: '100%',
            height: 45,
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '48%',
              height: 45,
              marginTop: 15,
            }}>
            <InputTypeView1 title="Preferred Carrier" data={serviceType} />
          </View>
          <View
            style={{
              width: '50%',
              height: 45,
              marginTop: 0,
            }}>
            <TextInputView margin={10} label="Smartsite I" />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 45,
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              width: '48%',
              height: 45,
              marginTop: 15,
            }}>
            <InputTypeView1 title="Preferred Carrier" data={serviceType} />
          </View>
          <View
            style={{
              width: '50%',
              height: 45,
              marginTop: 0,
            }}>
            <TextInputView margin={10} label="Smartsite I" />
          </View>
        </View> */}

        <View style={styles.itemRow}>
          <View style={styles.singleItem}>
            <TextInputView margin={10} label="Route Location *" />
          </View>
          <View style={styles.singleItem}>
            <TextInputView margin={10} label="Warking Phone On-..." />
          </View>
        </View>

        <View style={{...styles.itemRow, marginTop: 15}}>
          <View style={styles.singleItem}>
            <TextInputView margin={10} label="Coustomer Edge IP A..." />
          </View>
          <View style={styles.singleItem}>
            <TextInputView margin={10} label="Coustomar Mask *" />
          </View>
        </View>
        <View style={{...styles.itemRow, marginTop: 15}}>
          <View style={styles.singleItem}>
            <TextInputView margin={10} label="Coustomer AS# *" />
          </View>
          <View style={styles.singleItem}>
            <TextInputView margin={10} label="BGP Multipath" />
          </View>
        </View>

        {/* ================date picker=================== */}

        {/* ================date picker=================== */}
        {/* <InputView /> */}
        <BottomViewButton />
      </View>
    </>
  );
};

export default Four;

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
    height: 40,
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
  itemRow: {
    width: '100%',
    height: 40,
    // backgroundColor: 'red',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  singleItem: {width: '48%', height: 60},
});
