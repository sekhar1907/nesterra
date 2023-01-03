import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Dimensions} from 'react-native';
import Circuits from './Circuits';
import Devices from './Devices';
import XConnects from './XConnects';
const {width} = Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();

const TabView = () => {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      backBehavior="none"
      initialRouteName={Circuits}
      removeClippedSubviews={false}
      animationEnabled={true}
      upperCaseLabel="false"
      screenOptions={{
        tabBarLabelStyle: {textTransform: 'lowercase'},
        tabBarActiveTintColor: '#1b5a90',
        tabBarInactiveTintColor: '#757575',
        tabBarLabelStyle: {fontSize: 13, fontWeight: '700'},
        tabBarStyle: {backgroundColor: '#f5f5f5'},
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: width / 3},
        lazy: true,
        swipeEnabled: true,
        disableSwipe: false,
        tabBarIndicatorStyle: {
          width: width / 3,
          backgroundColor: '#1b5a90',
          height: 2.5,
        },
      }}>
      <Tab.Screen
        name="Circuits"
        component={Circuits}
        options={{tabBarLabel: 'Circuits', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="Devices"
        component={Devices}
        options={{tabBarLabel: 'Devices', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="BoXConnectsth"
        component={XConnects}
        options={{
          tabBarLabel: 'x-Connects',
          labelStyle: {textTransform: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};
export default TabView;
