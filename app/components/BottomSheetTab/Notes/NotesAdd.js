import React, {useState, useEffect} from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Modal, Portal} from 'react-native-paper';
import {Base_url} from '../../../key';
import Voice from '@react-native-community/voice';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const NotesAdd = ({setModalVisible, modalVisible, setLoder}) => {
  const navigation = useNavigation();
  const [note, setNote] = useState('');

  const submit = () => {
    setLoder(true);
    fetch(`${Base_url}/api/PostNewSiteNotes`, {
      method: 'POST',
      headers: {
        Accep: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Location_ID: '1234',
        UserName: 'Santosh Carpenter',
        Created: null,
        Notes: note,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        if (result) {
          setLoder(false);
          setNote('');
          setModalVisible(false);
          // console.log(result);
        }
      })
      .catch(err => console.log(err));
  };

  const getText = text => {
    setModalVisible(true);
    setNote(text);
  };
  return (
    <>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.containerStyle}>
          <View style={{flex: 1}}>
            <View
              style={{
                width: '100%',
                height: 30,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                paddingRight: 10,
                paddingTop: 5,
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#007aff',
                }}>
                <Text>
                  <Entypo name="cross" size={20} color="white" />
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
                fontSize: 20,
              }}>
              Add Notes
            </Text>
            <View
              style={{
                marginTop: 10,
                borderRadius: 10,
                width: width - 30,
                height: 130,

                borderWidth: 1,
                alignSelf: 'center',
                paddingVertical: 5,
              }}>
              <View
                style={{
                  width: '100%',
                  height: '75%',

                  alignSelf: 'center',
                }}>
                <TextInput
                  multiline
                  placeholder="Please Enter Here"
                  value={note}
                  onChangeText={text => setNote(text)}
                  style={{
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}
                  placeholderTextColor={{textAlign: 'center'}}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: '25%',
                  alignItems: 'flex-end',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  paddingRight: 10,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('VoiceToText', {getText});
                    setModalVisible(false);
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: '#007aff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}>
                  <FontAwesome name="microphone" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={submit}
              style={{
                width: width - 30,
                height: 50,
                backgroundColor: '#007aff',
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export default NotesAdd;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',

    width: width - 10,
    height: 270,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 999,
    top: height / 2 - 175,
    position: 'absolute',
  },
  container1: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,

    zIndex: 998,
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'black',
    zIndex: 10,
    opacity: 0.5,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
