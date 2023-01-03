import React from 'react';
// import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';

const SimpleCheckBox = ({text, ml}) => {
  const colors = '#1b5a90';
  // console.log(item);

  const [checked, setChecked] = React.useState(false);
  return (
    <View style={{...styles.container, marginLeft: ml}}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color="#1b5a90"
      />
      <Text>{text}</Text>
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

    marginTop: 10,
  },
});

export default SimpleCheckBox;
