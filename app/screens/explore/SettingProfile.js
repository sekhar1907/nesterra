import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const SettingProfile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingVertical: StatusBar.currentHeight,
        }}>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '15%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '70%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Setting </Text>
          </View>
          <View style={{width: '15%', height: '100%'}}></View>
        </View>
        {/* ========= lowerView======================= */}
        <View>
          <View
            style={{
              width: '90%',
              height: 50,

              borderTopColor: 'black',
              borderTopWidth: 0.5,
              alignSelf: 'center',
              justifyContent: 'center',
              marginVertical: 1,
            }}>
            <Text>App Language</Text>
          </View>
          <View
            style={{
              width: '90%',
              height: 50,
              marginTop: 2,
              marginVertical: 1,
              borderTopColor: 'black',
              borderTopWidth: 0.5,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text>Offline Map Setting</Text>
          </View>
          <View
            style={{
              width: '90%',
              height: 50,
              marginTop: 2,
              marginVertical: 10,
              borderTopColor: 'black',
              borderTopWidth: 0.5,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text>Wi-fi Only</Text>
          </View>
        </View>

        {/* ========= lowerView======================= */}
      </View>
    </SafeAreaView>
  );
};

export default SettingProfile;

const styles = StyleSheet.create({});
