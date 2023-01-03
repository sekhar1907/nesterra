import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Circuits from './Circuits';
import Hours from './Hours';

import Info from './Info';
import Pics from './Pics';
import Orders from './Orders';
import Devices from './Devices';

const Tab = createMaterialTopTabNavigator();

const BottomSheetTab = () => {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      // backBehavior="none"
      initialRouteName={Circuits}
      // removeClippedSubviews={false}
      // animationEnabled={true}

      upperCaseLabel="false"
      screenOptions={{
        tabBarLabelStyle: {textTransform: 'lowercase'},
        tabBarActiveTintColor: '#1b5a90',
        tabBarInactiveTintColor: '#757575',
        tabBarActiveBackgroundColor: 'red',
        tabBarLabelStyle: {fontSize: 13, fontWeight: '700'},
        tabBarStyle: {backgroundColor: '#f5f5f5'},
        tabBarScrollEnabled: true,

        tabBarItemStyle: {
          width: 93,
          borderColor: 'black',
          borderWidth: 1.5,
          marginHorizontal: 3,
          borderRadius: 5,
        },

        swipeEnabled: true,
        // disableSwipe: false,
        tabBarIndicatorStyle: {
          width: 0,
          marginLeft: 10,

          height: 2.5,
        },
      }}>
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: 'Info',
          labelStyle: {textTransform: 'none'},
          tabBarActiveBackgroundColor: 'red',
          style: {
            backgroundColor: '#21147a',
          },
        }}
      />
      <Tab.Screen
        name="Pics"
        component={Pics}
        options={{tabBarLabel: 'Pics', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="Hours"
        component={Hours}
        options={{tabBarLabel: 'Hours', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="Circuits"
        component={Circuits}
        options={{tabBarLabel: 'Circuits', labelStyle: {textTransform: 'none'}}}
      />

      <Tab.Screen
        name="Devices"
        component={Devices}
        options={{tabBarLabel: 'Devices'}}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{tabBarLabel: 'Orders'}}
      />
    </Tab.Navigator>
  );
};
export default BottomSheetTab;
