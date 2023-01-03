import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Button,
  useToast,
  VStack,
  Center,
  NativeBaseProvider,
} from 'native-base';
export const SnakMessage = ({msg}) => {
  const toast = useToast();
  toast.show({
    title: 'Hello world',
    placement: 'top',
  });
};
