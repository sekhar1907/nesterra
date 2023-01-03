import {StyleSheet, TextInput, Text, View, Image} from 'react-native';
import React, {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

const InPutView = ({placeHolder, onSearch}) => {
  const [search, setSearch] = useState('');
  const onChange = text => {
    setSearch(text);
    onSearch(text);
  };
  return (
    <>
      <View
        style={{
          height: '100%',

          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '20%',
            height: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../../../images/logo.png')}
            style={{
              width: 30,
              height: 30,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View
          style={{
            width: '80%',
            height: '100%',
          }}>
          <TextInput
            value={search}
            style={{color: 'black'}}
            placeholder={placeHolder}
            placeholderTextColor="black"
            onChangeText={text => onChange(text)}
          />
        </View>
      </View>
    </>
  );
};

export default InPutView;

const styles = StyleSheet.create({});
