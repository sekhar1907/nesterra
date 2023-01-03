import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import CircuitInventory from '../screens/CircuitInventory/index.js';
import CircuitsDetails from '../screens/CircuitsDetails/index.js';
import DevicesDetails from '../screens/DevicesDetails/index.js';

import DevicesInventory from '../screens/DevicesInventory/index.js';
import Login from '../screens/Login/index.js';
import OtpReceive from '../screens/OtpReceive';
import OrderDetails from '../screens/OrderDetails.js';
import Profile from '../screens/profile';

import TabNaV from './Tab';
import AllDevice from '../screens/AllDevice/index.js';
import AllDevicesDetails from '../screens/AllDevice/AllDevicesDetails.js';
import Circuits from '../screens/circuits/index.js';
import BackGroundCorsoul from '../screens/BackGroundCorsoul/index.js';
import Contact from '../screens/Contact';
import Stats from '../screens/stats';
import StreetViewScreen from '../screens/StreetViewScreen';
import MenuSetting from '../screens/MenuSetting';
import VoiceToText from '../screens/Voice';

import {useDispatch} from 'react-redux';
import {ATM_ID, BRANCH_ID} from '../actions/actionType/ExploreSearch/index.js';
import MapTypeAndFilter from '../screens/MapTypeAndFilter';
import Mtest from '../screens/Mtest/index.js';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  const getBranchId = () => {
    dispatch({
      type: BRANCH_ID,
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: ATM_ID,
      });
    }, 1000);
    setTimeout(() => {
      getBranchId();
    }, 1200);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNaV" component={TabNaV} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="OtpReceive" component={OtpReceive} />
        <Stack.Screen name="AllDevice" component={AllDevice} />
        <Stack.Screen name="Circuits" component={Circuits} />
        <Stack.Screen name="AllDevicesDetails" component={AllDevicesDetails} />
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        {/* <Stack.Screen name="CircuitInventory" component={CircuitInventory} />
        <Stack.Screen name="DevicesInventory" component={DevicesInventory} /> */}
        <Stack.Screen name="DevicesDetails" component={DevicesDetails} />
        <Stack.Screen name="CircuitsDetails" component={CircuitsDetails} />
        <Stack.Screen name="BackGroundCorsoul" component={BackGroundCorsoul} />
        <Stack.Screen name="VoiceToText" component={VoiceToText} />
        <Stack.Screen name="MapTypeAndFilter" component={MapTypeAndFilter} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="MenuSetting" component={MenuSetting} />
        <Stack.Screen name="StreetViewScreen" component={StreetViewScreen} />
        <Stack.Screen name="Mtest" component={Mtest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
