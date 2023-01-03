import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Voice from '@react-native-community/voice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const SiteIcon = ({setModalVisible, searchBranch, iconShow, setIconShow}) => {
  // console.log(iconShow);
  const onSpeechStartHandler = e => {
    console.log('start handler==>>>', e);
  };
  const onSpeechEndHandler = async e => {
    if (e.error === false) {
      try {
        await Voice.stop();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSpeechResultsHandler = e => {
    searchBranch(e.value[0]);
  };

  const startRecording = async () => {
    try {
      setIconShow(true);
      setModalVisible(true);
      await Voice.start('en-Us');
    } catch (error) {
      console.log('error raised', error);
    }
  };
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  return (
    <>
      {iconShow ? (
        <TouchableOpacity
          onPress={() => {
            setIconShow(false);
          }}
          style={{
            width: '15%',
            height: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Entypo name="cross" size={20} color="#898989" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            startRecording();
          }}
          style={{
            width: '15%',
            height: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome name={'microphone'} size={24} color="#898989" />
        </TouchableOpacity>
      )}
    </>
  );
};

export default SiteIcon;

const styles = StyleSheet.create({});
