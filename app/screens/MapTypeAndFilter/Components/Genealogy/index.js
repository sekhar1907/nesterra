import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {Heading} from 'native-base';

const {height, width} = Dimensions.get('screen');

import {warinng} from '../../../../components/helper';

import {connect, useSelector, useDispatch} from 'react-redux';
import {getlist, is_selected, select_all} from '../../../../actions/selectList';
import SelectAll from '../../../filtter/SelectAll';
import CheckBoxComponet from '../../../../components/checkBox';
import {useNavigation} from '@react-navigation/native';
import ClearAndAppply from '../ClearAndAppply';
import {getGeneoLogyList} from '../../../../actions/GenealogyList';

const data1 = [
  {id: 0, txt: 'Charter One P2', name: 'Charter One P2', isChecked: false},
  {id: 1, txt: 'Clarfeld', name: 'Clarfeld', isChecked: false},
  {id: 2, txt: 'State Street', name: 'State Street', isChecked: false},
  {id: 3, txt: 'Investor', name: 'Investor', isChecked: false},
  {
    id: 4,
    txt: 'Farmers & Mechanics',
    name: 'Farmers & Mechanics',
    isChecked: false,
  },
  {
    id: 5,
    txt: 'First New Hampshire',
    name: 'First New Hampshire',
    isChecked: false,
  },
  {id: 6, txt: 'GreatBanc', name: 'GreatBanc', isChecked: false},
  {id: 7, txt: 'Medford', name: 'Medford', isChecked: false},
  {id: 8, txt: 'JMP', name: 'JMP', isChecked: false},
  {id: 9, txt: 'Trinity Capital', name: 'Trinity Capital', isChecked: false},
  {id: 10, txt: 'Citizens Bank', name: 'Citizens Bank', isChecked: false},
  {id: 11, txt: 'DH Capital', name: 'DH Capital', isChecked: false},
  {
    id: 12,
    txt: 'Roxborough-Manayunk',
    name: 'Roxborough-Manayunk',
    isChecked: false,
  },
  {
    id: 13,
    txt: 'Western Reserve',
    name: 'Western Reserve',
    isChecked: false,
  },
  {id: 14, txt: 'Bowstring', name: 'Bowstring', isChecked: false},
  {id: 15, txt: 'CambridgePort', name: 'CambridgePort', isChecked: false},
  {id: 16, txt: 'Woburn', name: 'Woburn', isChecked: false},
  {id: 16, txt: 'Mellon - Phase 2', name: 'Mellon - Phase 2', isChecked: false},
  {id: 17, txt: 'CharterOne', name: 'CharterOne', isChecked: false},
  {id: 18, txt: 'BONE Old Colony', name: 'BONE Old Colony', isChecked: false},
  {id: 19, txt: 'Charter One P1', name: 'Charter One P1', isChecked: false},
  {id: 20, txt: '3rd Party', name: '3rd Party', isChecked: false},
  {
    id: 21,
    txt: 'Bank of New Haven',
    name: 'Bank of New Haven',
    isChecked: false,
  },
  {id: 22, txt: 'FAMC', name: 'FAMC', isChecked: false},
  {id: 23, txt: 'Mellon - Phase 1', name: 'Mellon - Phase 1', isChecked: false},
  {id: 24, txt: 'Commonwealth', name: 'Commonwealth', isChecked: false},
  {id: 25, txt: 'HBSC', name: 'HBSC', isChecked: false},
  {id: 26, txt: 'Charter One P4', name: 'Charter One P4', isChecked: false},
  {id: 27, txt: 'Charter One P3', name: 'Charter One P3', isChecked: false},
  {id: 28, txt: 'US Trust', name: 'US Trust', isChecked: false},
  {
    id: 29,
    txt: 'Community Nation Bank',
    name: 'Community Nation Bank',
    isChecked: false,
  },
  {id: 30, txt: 'Grove Bank', name: 'Grove Bank', isChecked: false},
  {id: 31, txt: 'Branford Savings', name: 'Branford Savings', isChecked: false},
  {id: 32, txt: 'Willamette', name: 'Willamette', isChecked: false},
  {id: 33, txt: 'Remote ATM', name: 'Remote ATM', isChecked: false},
  {id: 34, txt: 'Equinix', name: 'Equinix', isChecked: false},
];
const Genealogy = ({getGeneoLogyList, is_selected, select_all}) => {
  const navigation = useNavigation();
  const {data} = useSelector(state => state.GenealogyList);
  // console.log(JSON.stringify(list.checkList), 'filter site type');
  // console.log(data);
  const [checked1, setChecked] = React.useState(false);

  const setState = () => {
    setChecked(true);
  };
  const handleChangeAll = () => {
    select_all(data);
  };
  const handleChange = id => {
    is_selected(id);
  };

  React.useEffect(() => {
    getGeneoLogyList();
  }, []);
  const apply = () => {};
  const clear = () => {};
  return (
    <>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: height,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <View style={styles.header}>
          <View
            style={{
              width: '20%',
              height: '100%',

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Heading size="sm">Filters</Heading>
          </View>
          {/* <View
            style={{
              width: '80%',
              height: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Explore');
              }}
              style={{
                width: '45%',
                height: 45,
                backgroundColor: '#007aff',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 18}}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // apply();
                navigation.navigate('Explore');
              }}
              style={{
                width: '45%',
                height: 45,
                backgroundColor: '#e0dfe5',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#007aff', fontSize: 18}}>Apply</Text>
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={styles.mainContainer}>
          <View
            style={{
              width: '30%',
              height: '100%',
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: '#ffffff',
            }}>
            <ScrollView style={{height: '100%'}}>
              {/* <SelectAll
                setState={setState}
                handleChangeAll={handleChangeAll}
                checked={list.selectList.checked}
              /> */}
              {data1 &&
                data1.map((item, i) => {
                  return (
                    <CheckBoxComponet
                      key={i}
                      handleChange={handleChange}
                      value={item.isChecked}
                      item={item}
                    />
                  );
                })}
              <View style={{width: '100%', height: 100}}></View>
            </ScrollView>
          </View>
        </View>
        <ClearAndAppply onPress={apply} clear={clear} />
      </View>
    </>
  );
};

export default connect(null, {getGeneoLogyList, is_selected, select_all})(
  Genealogy,
);

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  mainContainer: {
    height: height - 70,

    width: '100%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
