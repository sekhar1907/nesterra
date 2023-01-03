import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

const ToggleView = ({activeFilter, alldata, length}) => {
  const [isOn, setIsSwitchOn] = React.useState(false);

  return (
    <View
      style={{
        width: 220,
        height: 45,

        position: 'absolute',
        right: 10,
        bottom: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: '48%',
          height: 45,
          backgroundColor: '#007aff',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>{length} Circuits</Text>
      </View>
      <View
        style={{
          width: '48%',
          height: 45,
          backgroundColor: '#007aff',
          borderRadius: 10,

          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text style={{color: 'white'}}>{isOn ? 'Active' : 'All'} </Text>

        <ToggleSwitch
          isOn={isOn}
          onColor="#34c759"
          offColor="#b3b8b4"
          labelStyle={{color: 'black', fontWeight: '500'}}
          size="medium"
          onToggle={isOn => {
            setIsSwitchOn(isOn);
            if (isOn) {
              //   console.log('yes');
              activeFilter();
            } else {
              alldata();
              //   console.log('no');
            }
          }}
        />
      </View>
    </View>
  );
};

export default ToggleView;

const styles = StyleSheet.create({});
