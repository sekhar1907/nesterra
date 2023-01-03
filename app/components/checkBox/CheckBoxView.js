import React from 'react';
// import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';

const CheckBoxView = ({allView, setAllView}) => {
  const [check, setCheck] = React.useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        status={check ? 'checked' : 'unchecked'}
        onPress={() => {
          //   handleChange(item.id, item.txt);
          setCheck(!check);
          setAllView(!allView);
        }}
        color="#1b5a90"
      />
      <Text style={{color: 'black'}}>All Labels</Text>
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
