import {Box} from 'native-base';
import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

const {width} = Dimensions.get('screen');
export const tostalert = (msg, color, toast) => {
  // // const toast = useToast();
  Snackbar.show({
    text: `Copied: ${msg}`,
    textColor: 'white',
    backgroundColor: '#007aff',
    // marginBottom: 100,
    placement: 'top',
  });
};
export const warinng = msg => {
  Snackbar.show({
    text: `${msg}`,
    textColor: 'white',
    backgroundColor: 'red',
    // marginBottom: 100,
    placement: 'top',
  });
};
export const success = msg => {
  Snackbar.show({
    text: `${msg}`,
    textColor: 'white',
    backgroundColor: '#4DD637',
    // marginBottom: 100,
    placement: 'top',
  });
};
export const copyText = text => {
  Clipboard.setString(text);
};
