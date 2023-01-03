import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const {height, width} = Dimensions.get('screen');

import {warinng} from '../../../../components/helper';

import {connect, useSelector, useDispatch} from 'react-redux';
import {
  getlist,
  is_selected,
  // clear_all,
  select_all,
} from '../../../../actions/selectList';
import SelectAll from '../../../filtter/SelectAll';
import CheckBoxComponet from '../../../../components/checkBox';
import {useNavigation} from '@react-navigation/native';
import {dataMar} from '../../../../utils/MarkerData1';
import {
  FILTER_MULTI_SITE_TYPE,
  SEARCH_CLEAR,
  LOAD_LIST,
  IS_SELECTED,
} from './../../../../actions/action.type';
import {
  BRANCH,
  DATA_CENTER,
  OFFICEE,
  ATM,
  THIRD_PARTY,
  OTHER,
} from '../../../../actions/actionType/SiteTypeCheck';

const data = [
  {id: 0, txt: 'Data Center', name: 'Data Center', isChecked: false},
  {id: 1, txt: 'Office', name: 'Office', isChecked: false},
  {id: 2, txt: 'Branch', name: 'Branch', isChecked: false},
  {id: 3, txt: 'ATM', name: 'ATM', isChecked: false},
  {id: 4, txt: '3rd Party', name: '3rd Party', isChecked: false},
  {id: 5, txt: 'Other', name: 'Other', isChecked: false},
];
const data11 = [
  {id: 0, txt: 'Data Center', name: 'Data Center', isChecked: false},
  {id: 1, txt: 'Office', name: 'Office', isChecked: false},
  {id: 2, txt: 'Branch', name: 'Branch', isChecked: false},
  {id: 3, txt: 'ATM', name: 'ATM', isChecked: false},
  {id: 4, txt: '3rd Party', name: '3rd Party', isChecked: false},
  {id: 5, txt: 'Other', name: 'Other', isChecked: false},
];
const SiteType = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {list} = useSelector(state => state.selectList);
  const {data1} = useSelector(state => state.selectList);
  const {data_center} = useSelector(state => state.SiteTypeCheck);
  const {branch} = useSelector(state => state.SiteTypeCheck);
  const {office} = useSelector(state => state.SiteTypeCheck);
  const {atm} = useSelector(state => state.SiteTypeCheck);
  const {third_party} = useSelector(state => state.SiteTypeCheck);
  const {other} = useSelector(state => state.SiteTypeCheck);

  const {checkList} = useSelector(state => state.selectList);
  // console.log(data1, 'data1', list);
  let ddd = [];
  const dpa = checkList.map(item => {
    return ddd.push(item.name);
  });
  const datother = dataMar.filter(
    item => item.HierarchyLocationType === 'Other',
  );
  const datCenter = dataMar.filter(item =>
    item.HierarchyLocationType.includes('Data Center'),
  );
  const dataOffice = dataMar.filter(
    item => item.HierarchyLocationType === 'Office',
  );
  const dataBranch = dataMar.filter(
    item => item.HierarchyLocationType === 'Branch',
  );
  const dataAtm = dataMar.filter(item => item.HierarchyLocationType === 'ATM');
  const dataThrd = dataMar.filter(item =>
    item.HierarchyLocationType.includes('3rd Party'),
  );
  const changeData = id => {
    switch (true) {
      case id == 0:
        dispatch({
          type: DATA_CENTER,
        });
        break;
      case id == 1:
        dispatch({
          type: OFFICEE,
        });
        break;
      case id == 2:
        dispatch({
          type: BRANCH,
        });
        break;

      case id == 3:
        dispatch({
          type: ATM,
        });
        break;
      case id == 4:
        dispatch({
          type: THIRD_PARTY,
        });
        break;
      case id == 5:
        dispatch({
          type: OTHER,
        });
        break;
    }
  };

  const handleChange = id => {
    changeData(id);
    // is_selected(id);
    dispatch({
      type: IS_SELECTED,
      payload: {
        id: id,
      },
    });
  };
  const clearAll = () => {
    setOffice(true);
    setDataCenter(true);
    setbranch(true);
    setAtm(true);
    setThparty(true);
    setOther(true);
  };
  React.useEffect(() => {
    dispatch({
      type: LOAD_LIST,
      payload: {
        data: data,
      },
    });
    dispatch({
      type: SEARCH_CLEAR,
      // data: data1,
    });
  }, []);
  const filterApply = () => {
    // console.log(checkList);
    dispatch({
      type: FILTER_MULTI_SITE_TYPE,
      data: checkList,
    });
    navigation.navigate('Explore');
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
              width: '100%',
              height: '50%',

              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'black'}}>Filter</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '50%',

              justifyContent: 'center',
            }}>
            <Text style={{color: 'black'}}>{ddd.toString()}</Text>
          </View>
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
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '80%',
                height: '100%',
              }}>
              <Text style={{color: 'black', marginLeft: 8, marginVertical: 10}}>
                Setected {`(${checkList.length})`}
              </Text>
              {list &&
                list.map((item, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        width: '100%',
                        height: 40,
                        flexDirection: 'row',
                        marginVertical: 1,
                        alignItems: 'center',
                      }}>
                      <View style={{width: '50%', height: '100%'}}>
                        <CheckBoxComponet
                          key={i}
                          handleChange={handleChange}
                          value={item.isChecked}
                          item={item}
                        />
                      </View>
                      <View
                        style={{
                          width: '50%',
                          height: '100%',
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                          paddingRight: 15,
                        }}>
                        <Text></Text>
                      </View>
                    </View>
                  );
                })}
            </View>
            <View
              style={{
                width: '20%',
                height: '100%',
              }}>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 8,
                  marginVertical: 10,
                }}></Text>
              <View style={styles.countItem}>
                <Text>{data_center ? datCenter.length : 0}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{office ? dataOffice.length : 0}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{branch ? dataBranch.length : 0}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{atm ? dataAtm.length : 0}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{third_party ? dataThrd.length : 0}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{other ? datother.length : 0}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 260,
            height: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',

            bottom: 100,
            right: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              dispatch({
                type: SEARCH_CLEAR,
                // data: data1,
              });
            }}
            style={{
              width: 100,
              height: '100%',
              borderRadius: 5,
              backgroundColor: '#c7dcfb',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#1e74bf'}}>Search Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              filterApply();
            }}
            style={{
              width: 100,
              height: '100%',
              borderRadius: 5,
              backgroundColor: '#0075f6',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SiteType;

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingLeft: 20,
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
  countItem: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    marginVertical: 1,
    alignItems: 'center',
  },
});
