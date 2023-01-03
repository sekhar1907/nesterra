import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import NoDataViewFlatList from './../../../components/NoDataViewFlatList/index';
import DataLoder from '../../../components/lodder/DataLoder';

import ToggleButton from './../../../components/ToggleView/ToggleButton';
import {INDIVISUAL, VENDOR} from '../../../actions/actionType/Contacts';
const BottomSheetView = ({bottomRef, contactLoder}) => {
  const dipatch = useDispatch();
  const snapPoints = useMemo(() => ['10%', '26%', '95%'], []);
  const {item} = useSelector(state => state.Contacts);

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
  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 2,
          opacity: 0.5,
        }}
        // handleComponent={() => (
        //   <View style={styles.closeLineContainer}>
        //     <View style={styles.closeLine}>
        //       <SimpleLineIcons name="arrow-up" size={20} color="black" />
        //     </View>
        //   </View>
        // )}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={bottomRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        style={{}}
        animatedPosition={true}>
        {!contactLoder ? (
          <>
            <View
              style={{
                height: '100%',
                width: '100%',
              }}>
              <View style={styles.header}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
                  Contacts
                </Text>
                <TouchableOpacity
                  style={styles.closeView}
                  onPress={() => {
                    bottomRef.current.close();
                  }}>
                  <Entypo name="cross" size={20} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.inputWraper}>
                <View style={styles.inputView}>
                  <BottomSheetTextInput />
                </View>
                <View style={styles.searchIconVie}>
                  <AntDesign name="search1" size={24} color="black" />
                </View>
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
                    width: '50%',
                    borderLeftWidth: 0,
                  }}>
                  <Text style={{color: 'white'}}>Name</Text>
                </View>
                <View
                  style={{
                    ...styles.headerTitle,
                    width: '25%',
                    borderLeftWidth: 2,
                  }}>
                  <Text style={{color: 'white'}}>Type</Text>
                </View>
                <View
                  style={{
                    ...styles.headerTitle,
                    width: '25%',
                    borderLeftWidth: 2,
                  }}>
                  <Text style={{color: 'white'}}>Name</Text>
                </View>
              </View>
              <BottomSheetFlatList
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
                          width: '50%',
                        }}>
                        <Text style={{color: 'black'}}>{item.value}</Text>
                      </View>
                      <View
                        style={{
                          ...styles.headerTitle,
                          width: '25%',
                          borderLeftWidth: 0.5,
                          borderLeftColor: '#b0b3b7',
                        }}>
                        <Text style={{color: 'black'}}>{item.id}</Text>
                      </View>
                      <View
                        style={{
                          ...styles.headerTitle,
                          width: '25%',
                          borderLeftWidth: 0.5,
                          borderLeftColor: '#b0b3b7',
                        }}>
                        <Text style={{color: 'black'}}>{item.id}</Text>
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
            <ToggleButton indivisual={indivisual} entity={entity} />
          </>
        ) : (
          <View
            style={{
              width: '100%',
              height: 500,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <DataLoder />
          </View>
        )}
      </BottomSheet>
    </>
  );
};

export default BottomSheetView;

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
    borderColor: 'black',
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
});
