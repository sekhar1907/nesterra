import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {RadioButton} from 'react-native-paper';

// import Appearance from './index';
import {moderateScale} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';
import {
  APPEARANCE_TYPE,
  APPEARANCE_TYPE_SYSTEM,
} from '../../actions/actionType/Appearance';
import RadioButtonView from './../../components/RadioButtonView/index';
const colorScheme = Appearance.getColorScheme();

const AppearanceScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {appearanceType} = useSelector(state => state.appearanceType);
  const {system} = useSelector(state => state.appearanceType);
  console.log(colorScheme, 'colorScheme', system);
  // const [type, setType] = use;
  const appAndSystem = () => {
    dispatch({
      type: APPEARANCE_TYPE_SYSTEM,
      payload: {
        data: colorScheme,
        system: 'system',
      },
    });
  };

  const modeSET = data => {
    dispatch({
      type: APPEARANCE_TYPE,
      data: data,
    });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}>
      <View style={styles.mainView}>
        <Text
          style={
            appearanceType == 'dark'
              ? styles.AppearanceText
              : styles.AppearanceText1
          }>
          Appearance
        </Text>
        <TouchableOpacity
          style={styles.closeView}
          onPress={() => {
            navigation.navigate('TabNaV');
          }}>
          <Entypo name="cross" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={appearanceType == 'dark' ? styles.Text : styles.Text1}>
        select appearance to use the light and dark mode within App
      </Text>
      <View style={styles.systemView}>
        <Text
          style={
            appearanceType == 'dark'
              ? styles.systemTextWhite
              : styles.systemTextBlack
          }>
          System
        </Text>

        <RadioButton
          onPress={() => appAndSystem()}
          color={appearanceType === 'dark' ? 'white' : 'red'}
          status={system ? 'checked' : 'unchecked'}
        />
      </View>

      <View style={styles.systemView}>
        <Text
          style={
            appearanceType == 'dark'
              ? styles.systemTextWhite
              : styles.systemTextBlack
          }>
          Light Mode
        </Text>
        <View
          style={{
            width: 40,
            height: '100%',
            marginRight: 10,
          }}>
          <RadioButton
            onPress={() => {
              modeSET('light');
            }}
            color={appearanceType == 'dark' ? 'white' : '#3d69ee'}
            status={
              system == null && 'light' === appearanceType
                ? 'checked'
                : 'unchecked'
            }
          />
        </View>
      </View>
      <View style={styles.systemView}>
        <Text
          style={
            appearanceType == 'dark'
              ? styles.systemTextWhite
              : styles.systemTextBlack
          }>
          Dark Mode
        </Text>
        <View
          style={{
            width: 40,
            height: '100%',
            marginRight: 10,
          }}>
          <RadioButton
            onPress={() => {
              modeSET('dark');
            }}
            color={appearanceType == 'dark' ? 'white' : '#3d69ee'}
            status={
              system == null && 'dark' === appearanceType
                ? 'checked'
                : 'unchecked'
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppearanceScreen;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: 80,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AppearanceText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  AppearanceText1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  closeView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0472ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  Text: {
    fontSize: 16,
    marginLeft: 15,
    color: 'white',
  },
  Text1: {
    fontSize: 16,
    marginLeft: 15,
    color: 'black',
  },
  systemView: {
    width: '100%',
    height: 30,
    // backgroundColor: 'pink',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  systemTextBlack: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  systemTextWhite: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
