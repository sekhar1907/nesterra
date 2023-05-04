import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import StateAnalysis from './StateAnalysis';
  import SiteCertiFication from './SiteCertiFication';
  import AssetsAndExpenses from './AssetsAndExpenses';
  import {getReportSiteAnalysis} from './../../actions/Reports/SiteAnlysis/index';
  import {connect, useSelector} from 'react-redux';
  import ButtonView from './Components/ButtonView/index';
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  
  import {getReport} from '../../actions/Reports';
  import {imag} from '../../components/imageLink';
  
  const Reports = ({getReport}) => {
    const [select, setSeleted] = useState('assets');
    const {appearanceType} = useSelector(state => state.appearanceType);
  
    useEffect(() => {
      getReport();
    }, []);
  
    // console.log(select);
  
    const ranDerView = () => {
      switch (true) {
        case select === 'assets':
          return <AssetsAndExpenses />;
  
        case select === 'site':
          return <SiteCertiFication />;
        case select === 'state':
          return <StateAnalysis />;
      }
    };
  
    return (
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        <View style={styles.hearderView}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: appearanceType == 'dark' ? 'white' : 'black',
            }}>
            Interective Reports
          </Text>
          <TouchableOpacity
            style={{
              width: 100,
              height: '100%',
  
              // justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={imag.refresh}
                style={{
                  width: '70%',
                  height: '70%',
                  resizeMode: 'cover',
                  tintColor: '#2782d1',
                }}
              />
            </View>
            <Text style={{color: '#2782d1'}}>Reset</Text>
          </TouchableOpacity>
          {/* =============== button view=========== */}
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            // backgroundColor: 'pink',
            paddingHorizontal: 15,
            marginTop: 10,
          }}>
          <View
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#f2f2f7',
              flexDirection: 'row',
              borderRadius: 5,
              shadowColor: 'black',
              borderWidth: 2,
            }}>
            <View
              style={{
                width: '10%',
                height: '100%',
                // backgroundColor: 'pink',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <EvilIcons name="search" size={30} color="black" />
            </View>
            <View
              style={{
                width: '90%',
                height: '100%',
                justifyContentce: 'center',
              }}>
              <TextInput placeholder="Search Site ID" />
            </View>
          </View>
        </View>
        <View style={{width: '100%', paddingHorizontal: 10}}>
          <View
            style={
              appearanceType == 'dark' ? styles.buttonView1 : styles.buttonView
            }>
            <ButtonView
              Title="Assets & Expenses"
              select={select}
              value="assets"
              onPress={() => {
                setSeleted('assets');
              }}
            />
            <ButtonView
              Title="State Analysis"
              select={select}
              value="state"
              onPress={() => {
                setSeleted('state');
              }}
            />
            <ButtonView
              Title="Site Certification"
              select={select}
              value="site"
              onPress={() => {
                setSeleted('site');
              }}
            />
          </View>
        </View>
  
        <ScrollView>
          {ranDerView()}
          <View style={{height: 50}}></View>
          {/* --- bottom view scound--- */}
        </ScrollView>
  
        {/* =============== button view=========== */}
      </SafeAreaView>
    );
  };
  
  export default connect(null, {getReport})(Reports);
  
  const styles = StyleSheet.create({
    seclectButton: {
      width: '33%',
      height: '100%',
      // backgroundColor: 'red',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    hearderView: {
      width: '100%',
      height: 40,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    buttonView: {
      width: '100%',
      height: 40,
      backgroundColor: '#d6d6d8',
      marginTop: 10,
      flexDirection: 'row',
      // justifyContent: 'space-between',
      padding: 4,
      borderRadius: 10,
    },
    buttonView1: {
      width: '100%',
      height: 40,
      backgroundColor: '#1c1c1f',
      marginTop: 10,
      flexDirection: 'row',
      // justifyContent: 'space-between',
      padding: 4,
      borderRadius: 10,
    },
    scroll: {
      borderColor: 'blue',
      borderRadius: 2,
      // borderRadius: 2,
      // borderColor: 'blue',
      // borderRadius: 2,
      // // borderRadius: 2,
      
    },
    // scroll: {
    //   borderColor: 'blue',
    //   borderRadius: 2,
    //   // borderRadius: 2,
    //   // borderColor: 'blue',
    //   // borderRadius: 2,
    //   // // borderRadius: 2,
      
    // },
  });
  