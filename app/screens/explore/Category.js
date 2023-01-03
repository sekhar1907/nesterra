import {
  StyleSheet,
  Text,
  View,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {data} from '../../utils/Constants';

import {third_party_filter} from '../../actions/coordinates';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Category = ({
  third_party_filter,
  filterData,
  allDataa,
  get_coordinates,
}) => {
  const navigation = useNavigation();
  const [allItem, setAllItem] = React.useState(data);
  const [setectItem, setsetectItem] = React.useState('');
  const myRef = useRef(null);
  const actiText = (id, value) => {
    // console.log(value);
    if (id == 7) {
      navigation.navigate('Stats');
    } else {
      let listData;
      const entry = allItem.find(i => i.isActive === true);
      if (entry == undefined) {
        listData = allItem.map(item => {
          let itm = {...item, isActive: false};
          return itm;
        });
        third_party_filter(value);
        // filterData(value);
        listData[id].isActive = true;
        setAllItem(listData);
      } else if (entry.id == id) {
        listData = allItem.map(item => {
          let itm = {...item, isActive: false};
          return itm;
        });
        get_coordinates();
        // allDataa();
        setAllItem(listData);
      } else {
        listData = allItem.map(item => {
          let itm = {...item, isActive: false};
          return itm;
        });
        third_party_filter(value);
        // filterData(value);
        listData[id].isActive = true;
        setAllItem(listData);
      }
    }
  };
  const centerTab = i => {
    myRef.current.scrollToIndex({animated: true, index: i, viewPosition: 0.5});
  };

  return (
    <>
      <View style={{top: Platform.OS === 'ios' ? 140 : 140, paddingLeft: 10}}>
        <FlatList
          horizontal
          ref={myRef}
          data={allItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                ref={myRef}
                onPress={() => {
                  actiText(index, item.value);
                  centerTab(index);
                }}
                key={index}
                style={{
                  ...styles.chipsItem,
                  alignItems: 'center',
                  backgroundColor: item.isActive ? '#0A7AFF' : 'white',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: item.isActive ? 'white' : 'black',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </>
  );
};

export default connect(null, {third_party_filter})(Category);

const styles = StyleSheet.create({
  chipsItem: {
    flexDirection: 'row',
    borderRadius: 17.5,
    // padding: 7,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    height: 40,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    paddingLeft: 5,
    zIndex: 0,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 140 : 140,
    //paddingHorizontal: 10,
  },
});
