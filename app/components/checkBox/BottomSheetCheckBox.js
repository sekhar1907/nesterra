import React from 'react';
// import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';

const BottomSheetCheckBox = ({item, value, handleChange}) => {
  const colors = '#1b5a90';
  // console.log(item);

  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        status={item.isChecked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
          handleChange(item.vendor);
        }}
        color="#1b5a90"
      />
      <Text style={{color: 'black'}}>{item.vendor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {},
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    width: '30%',
    alignSelf: 'center',
  },
});

export default BottomSheetCheckBox;
