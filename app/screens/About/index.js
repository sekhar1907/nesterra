import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Image,
  } from 'react-native';
  import React from 'react';
  import BackButton from '../../components/BackButton';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  
  const About = ({navigation}) => {
    return (
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            About
          </Text>
          <BackButton
            onPress={() => {
              navigation.navigate('Legal');
            }}
          />
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={{width: 80, height: 80, marginTop: 10}}>
            <Image
              source={require('../../images/Logo2.png')}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            />
          </View>
          <Text style={{fontSize: 21, color: 'black', marginTop: 10}}>
            SmartSite
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>Nesterra LLC</Text>
  
          <Text style={{fontSize: 21, color: 'black', marginTop: 15}}>
            Version 0.0.172
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            Copyright <AntDesign name="copyright" size={12} color="black" /> 2023
          </Text>
        </View>
        <View
          style={{
            width: 100,
            height: 40,
            alignSelf: 'center',
            backgroundColor: '#007aff',
            marginTop: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 19, color: 'white'}}>License</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default About;
  
  const styles = StyleSheet.create({});
  