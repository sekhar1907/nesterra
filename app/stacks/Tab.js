import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabButton from '../components/tabButton/TabButton';

import tabButtonImage from '../components/imageLink/tabButtonImage';
import Orders from '../screens/orders';

import Mtest from '../screens/Mtest';
import Login from '../screens/Login';
import Notification from '../screens/Notification';
import OtpReceive from '../screens/OtpReceive';
import Saved from '../screens/saved';
import Assets from '../screens/assets';
// import Stats from '../screens/stats';
import Search from '../screens/search';
import ExploreStack from './ExploreStack';
import Extra from '../screens/NEW';
import VoiceScreen from '../screens/VoiceScreen';
import Chart from './../components/DataCharts/index';
import Menu from '../screens/Menu';
import {CIRCUIT_ID, SITE_ID} from './../actions/actionType/ExploreSearch/index';
import {useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator();
const TabNaV = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: CIRCUIT_ID,
      });
    }, 1000);
    setTimeout(() => {
      dispatch({
        type: SITE_ID,
      });
    }, 1500);
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          // borderRadius: 50,
          bottom: 0,
          left: 0,
          right: 0,
          // marginHorizontal: 16,
          height: 50,
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Sites"
                imagePath={tabButtonImage.imgExlore}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Assets"
        component={Assets}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Assets"
                imagePath={tabButtonImage.imgAssets}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Orders"
                imagePath={tabButtonImage.imgOrder}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Saved"
                imagePath={tabButtonImage.bookmark}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Menu"
                imagePath={tabButtonImage.menu}
                focused={focused}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Login"
                imagePath={tabButtonImage.imgStats}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="OtpReceive"
        component={OtpReceive}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="OtpReceive"
                imagePath={tabButtonImage.imgSearch}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Notification"
                imagePath={tabButtonImage.imgSearch}
                focused={focused}
              />
            );
          },
        }}
      /> 
      */}
    </Tab.Navigator>
  );
};
export default TabNaV;
