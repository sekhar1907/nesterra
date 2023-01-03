import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MenuItem from '../Menu/MenuItem';
import Entypo from 'react-native-vector-icons/Entypo';
const Imagg = {
  user: require('../../images/nenuImage/user.png'),
  info: require('../../images/nenuImage/info.png'),
  contract: require('../../images/nenuImage/contract.png'),
  question: require('../../images/nenuImage/question-mark.png'),
  compliant: require('../../images/nenuImage/compliant.png'),
};
const setting = () => {};
const MenuSetting = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Setting
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            width: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: '#0075f6',

            borderRadius: 10,
          }}>
          <Entypo name="cross" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <MenuItem onPress={setting} src={Imagg.user} title="My Profile" />
        <MenuItem onPress={setting} src={Imagg.info} title="About" />
        <MenuItem onPress={setting} src={Imagg.contract} title="Terms of use" />
        <MenuItem
          onPress={setting}
          src={Imagg.compliant}
          title="Privacy Police"
        />
        <MenuItem onPress={setting} src={Imagg.question} title="FAQs" />
      </View>
    </SafeAreaView>
  );
};

export default MenuSetting;

const styles = StyleSheet.create({});
