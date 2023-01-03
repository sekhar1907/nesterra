import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {Heading} from 'native-base';

import CheckBoxView from './../CheckBoxView/index';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');
import {warinng} from '../../../../components/helper';
import {
  FILTER_BY_INACTIVE,
  FILTER_BY_ACTIVE,
  FILTER_BY_ALL,
} from './../../../../actions/action.coordinate.type';
import {useDispatch} from 'react-redux';
import ClearAndAppply from '../ClearAndAppply';

const data = [
  {id: 0, txt: 'Active', name: 'Active', isChecked: false},
  {id: 1, txt: 'Inactive', name: 'Inactive', isChecked: false},
  {id: 2, txt: 'All', name: 'All', isChecked: false},
];
const Status = ({filterData}) => {
  // console.log(filterData);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [checkdata, setCheckData] = React.useState(data);
  const [seletedValue, setSeletedValue] = React.useState('');
  const seletedColor = id => {
    let listData = checkdata.map(item => {
      let itm = {...item, isChecked: false};
      return itm;
    });

    listData[id].isChecked = true;
    setCheckData(listData);
  };
  const handleChange = (id, name) => {
    // console.log(id, name);
    seletedColor(id);

    setSeletedValue(name);
    //
  };
  const apply = data => {
    // if (seletedValue == '') {
    //   warinng('Select A Value');
    // } else {
    //   filterData.filterData(seletedValue);
    //   navigation.navigate('Explore');
    // }

    if (seletedValue == '') {
      warinng('Select A Value');
    } else {
      if (seletedValue === 'Active') {
        dispatch({
          type: FILTER_BY_ACTIVE,
        });
        navigation.navigate('Explore');
      }
      if (seletedValue === 'Inactive') {
        dispatch({
          type: FILTER_BY_INACTIVE,
        });
        navigation.navigate('Explore');
      } else {
        dispatch({
          type: FILTER_BY_ALL,
        });
        navigation.navigate('Explore');
      }
    }
  };
  const clear = () => {
    let listData = checkdata.map(item => {
      let itm = {...item, isChecked: false};
      return itm;
    });

    setCheckData(listData);
  };
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
                apply();
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
            {checkdata.map((item, i) => {
              return (
                <CheckBoxView
                  key={i}
                  handleChange={() => {
                    handleChange(i, item.name);
                  }}
                  value={item.isChecked}
                  item={item}
                />
              );
            })}
          </View>
        </View>
        <ClearAndAppply onPress={apply} clear={clear} />
      </View>
    </>
  );
};

export default Status;

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
});
