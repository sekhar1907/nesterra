import React from 'react';
// import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';

const CheckBoxView = ({item, handleChange}) => {
  const colors = '#1b5a90';

  return (
    <View style={styles.container}>
      <Checkbox
        status={item.isChecked ? 'checked' : 'unchecked'}
        onPress={() => {
          handleChange(item.id, item.txt);
        }}
        color="#1b5a90"
      />
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBoxView;
