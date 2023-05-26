import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import TextView from '../../../../../../components/TextView';

import TextInputView from './TextInputView';
import SimpleCheckBox from '../../../../../../components/checkBox/SimpleCheckBox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Two = () => {
  const [text, setText] = React.useState('');
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: 60,
          // backgroundColor: 'red',
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <View style={{...styles.titleView, flexDirection: 'row'}}>
          <Text style={{color: 'white', marginLeft: 10}}>
            Tachknical Contact
          </Text>
        </View>
      </View>

      <View style={styles.selectBoxWraper}>
        <View style={styles.selectBox}>
          <TextView title="Select Contact" color="black" size={16} />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </View>
      <TextInputView margin={10} />
      <TextInputView margin={18} />

      <View
        style={{
          width: '100%',

          // backgroundColor: 'red',
          paddingHorizontal: 27,

          marginTop: 20,
        }}>
        <Text style={{color: 'red'}}>
          All Orders must have a unique Technical & Primary site contact All
          Orders must have a unique Technical & Primary site contact All Orders
          must have a unique Technical & Primary site contact{' '}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 60,
          // backgroundColor: 'red',
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <View style={styles.titleView1}>
          <Text style={{color: 'white'}}>Site Contact</Text>
          <SimpleCheckBox ml={5} text={'Same as tech Contact'} mt={0} />
        </View>
      </View>
      <TextInputView margin={10} />
      <TextInputView margin={10} />
      <TextInputView margin={10} />
      <TextInputView margin={10} />
      <TextInputView margin={10} />
      <TextInputView margin={10} />
      <TextInputView margin={10} />
      <TextInputView margin={10} />
      <TextInputView margin={10} />
    </ScrollView>
  );
};

export default Two;

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
