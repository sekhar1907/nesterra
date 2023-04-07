import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import React, {useMemo, useState, useEffect} from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector, connect} from 'react-redux';

import NoDataViewFlatList from './../../components/NoDataViewFlatList/index';
import DataLoder from '../../components/lodder/DataLoder';
import ToggleButton from './../../components/ToggleView/ToggleButton';
import {INDIVISUAL, VENDOR} from './../../actions/actionType/Contacts/index';
import RadioButtonView from './../Menu/BottomSheetView/RadioButtonView';
import SafeArea from '../../components/SafeArea';
import {getContacts} from './../../actions/Contacts/index';
import CountView from '../../components/CountView';

const Contact = ({navigation, getContacts}) => {
  const [userType, setUserType] = useState('SmartSite');
  const [loder, seTcontactLoder] = useState(true);
  const dipatch = useDispatch();
  const snapPoints = useMemo(() => ['10%', '26%', '95%'], []);
  const {item} = useSelector(state => state.Contacts);
  // console.log(item);
  const {appearanceType} = useSelector(state => state.appearanceType);

  const indivisual = () => {
    dipatch({
      type: INDIVISUAL,
    });
  };
  const entity = () => {
    dipatch({
      type: VENDOR,
    });
  };
  useEffect(() => {
    getContacts(seTcontactLoder);
  }, []);

  return (
    <>
      <SafeArea>
        {/* {!contactLoder ? ( */}
        <>
          {loder ? (
            <View
              style={{
                width: '100%',
                height: 600,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <DataLoder />
            </View>
          ) : (
            <>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                }}>
                <View style={styles.header}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 25,
                      color: appearanceType == 'dark' ? 'white' : 'black',
                      marginLeft: 8,
                    }}>
                    Contacts
                  </Text>
                  <TouchableOpacity
                    style={styles.closeView}
                    onPress={() => {
                      // bottomRef.current.close();
                      navigation.navigate('Menu');
                    }}>
                    <Entypo name="cross" size={20} color="white" />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    ...styles.inputWraper,
                    borderColor: appearanceType == 'dark' ? 'white' : 'black',
                  }}>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholderTextColor={
                        appearanceType == 'dark' ? 'white' : 'black'
                      }
                      placeholder="Search here"
                      style={{marginLeft: 5}}
                    />
                  </View>
                  <View style={styles.searchIconVie}>
                    {/* <AntDesign name="search1" size={24} color="black" /> */}
                  </View>
                </View>
                <View style={styles.radioButtonView}>
                  <RadioButtonView
                    title="SmartSite"
                    colors="black"
                    userType={userType}
                    onPress={() => {
                      setUserType('SmartSite');
                    }}
                  />
                  <RadioButtonView
                    title="Vendors"
                    colors="black"
                    userType={userType}
                    onPress={() => {
                      setUserType('Vendors');
                    }}
                  />
                  <RadioButtonView
                    title="Facilities"
                    colors="black"
                    userType={userType}
                    onPress={() => {
                      setUserType('Facilities');
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    marginTop: 10,
                    backgroundColor: '#0078fb',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      ...styles.headerTitle,
                      width: '25%',
                      borderLeftWidth: 0,
                    }}>
                    <Text style={{color: 'white'}}>Name</Text>
                  </View>
                  <View
                    style={{
                      ...styles.headerTitle,
                      width: '40%',
                      borderLeftWidth: 2,
                    }}>
                    <Text style={{color: 'white'}}> Department</Text>
                  </View>
                  <View
                    style={{
                      ...styles.headerTitle,
                      width: '35%',
                      borderLeftWidth: 2,
                    }}>
                    <Text style={{color: 'white'}}>Title</Text>
                  </View>
                </View>
                <FlatList
                  contentContainerStyl={{flex: 1}}
                  showsVerticalScrollIndicator={false}
                  data={item}
                  keyExtractor={(item, i) => i.toString()}
                  renderItem={({index, item}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          ...styles.tableRow1,
                          height: 40,
                          borderBottomColor: '#b0b3b7',
                          borderBottomWidth: 0.5,
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            ...styles.headerTitle,
                            width: '25%',
                          }}>
                          <Text
                            style={{
                              color:
                                appearanceType == 'dark' ? 'white' : 'black',
                            }}>
                            {item.value}
                          </Text>
                        </View>
                        <View
                          style={{
                            ...styles.headerTitle,
                            width: '40%',
                            borderLeftWidth: 0.5,
                            borderLeftColor: '#b0b3b7',
                          }}>
                          <Text
                            style={{
                              color:
                                appearanceType == 'dark' ? 'white' : 'black',
                            }}>
                            {item.Department}
                          </Text>
                        </View>
                        <View
                          style={{
                            ...styles.headerTitle,
                            width: '35%',
                            borderLeftWidth: 0.5,
                            borderLeftColor: '#b0b3b7',
                          }}>
                          <Text
                            style={{
                              color:
                                appearanceType == 'dark' ? 'white' : 'black',
                            }}>
                            {item.Title}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                  ListEmptyComponent={() => {
                    return (
                      <>
                        <NoDataViewFlatList />
                      </>
                    );
                  }}
                />
              </View>
              <CountView count={item.length} />
            </>
          )}
        </>
        {/* ) : (
          <View
            style={{
              width: '100%',
              height: 500,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <DataLoder />
          </View>
        )} */}
      </SafeArea>
    </>
  );
};

export default connect(null, {getContacts})(Contact);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingHorizontal: 10,
  },
  closeView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0472ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  inputWraper: {
    width: '90%',
    height: 50,

    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  searchIconVie: {
    width: '20%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  inputView: {width: '80%', height: '100%'},
  headerTitle: {
    justifyContent: 'center',
    height: '100%',
    paddingLeft: 5,
    borderLeftColor: 'white',
  },
  radioButtonView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    // backgroundColor: 'pink',
  },
});
