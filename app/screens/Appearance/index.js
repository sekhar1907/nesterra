import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {RadioButton} from 'react-native-paper';

// import Appearance from './index';
import {moderateScale} from 'react-native-size-matters';

const Appearance = ({bottomRef}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}>
      <View style={styles.mainView}>
        <Text style={styles.AppearanceText}>Appearance</Text>
        <TouchableOpacity
          style={styles.closeView}
          onPress={() => {
            bottomRef.current.close();
          }}>
          <Entypo name="cross" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.Text}>
        select appearance to use the light and dark mode within App
      </Text>
      <View style={styles.systemView}>
        <Text style={styles.systemText}>System</Text>
        <View
          style={{
            width: 40,
            height: '100%',
            marginRight: 10,
          }}>
          <RadioButton />
        </View>
      </View>

      <View style={styles.systemView}>
        <Text style={styles.systemText}>Light Mode</Text>
        <View
          style={{
            width: 40,
            height: '100%',
            marginRight: 10,
          }}>
          <RadioButton />
        </View>
      </View>
      <View style={styles.systemView}>
        <Text style={styles.systemText}>Dark Mode</Text>
        <View
          style={{
            width: 40,
            height: '100%',
            marginRight: 10,
          }}>
          <RadioButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Appearance;

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
  },
  systemView: {
    width: '100%',
    height: 30,
    // backgroundColor: 'pink',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  systemText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
