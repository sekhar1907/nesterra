import {StyleSheet, TextInput, Text, View} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const BottomSheetTextInPut = ({onchange, search}) => {
  return (
    <View style={styles.searchView}>
      <View style={styles.searchViewLeft}>
        <TextInput
          value={search}
          placeholder="Search Here"
          style={{
            paddingLeft: 10,
          }}
          onChangeText={text => onchange(text)}
        />
      </View>
      <View style={styles.searchViewRight}>
        <EvilIcons name="search" size={24} color="black" />
      </View>
    </View>
  );
};

export default BottomSheetTextInPut;

const styles = StyleSheet.create({
  searchView: {
    width: '90%',
    height: 50,

    alignSelf: 'center',
    borderColor: 'black',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  searchViewLeft: {
    width: '90%',
    height: '100%',
  },
  searchViewRight: {
    width: '10%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    paddingRight: 5,
  },
});
