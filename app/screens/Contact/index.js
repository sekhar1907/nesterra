import {StyleSheet, Text, SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';

const Contact = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}>
      <Text>Contact</Text>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({});
