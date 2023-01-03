import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

const ToggleButton = ({size, entity, indivisual}) => {
  const [isOn, setIsSwitchOn] = React.useState(false);

  return (
    <View
      style={{
        width: 115,
        height: 45,
        position: 'absolute',
        right: 8,
        bottom: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#007aff',
          borderRadius: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>
          {isOn ? 'All' : ' Vendor'}{' '}
        </Text>
        <ToggleSwitch
          isOn={isOn}
          onColor="#b3b8b4"
          offColor="#34c759"
          labelStyle={{color: 'black', fontWeight: '500'}}
          size={size}
          onToggle={isOn => {
            setIsSwitchOn(isOn);
            if (isOn) {
              //   console.log('yes');
              indivisual();
            } else {
              entity();
              //   console.log('no');
            }
          }}
        />
      </View>
    </View>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({});
