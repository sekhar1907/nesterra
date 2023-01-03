import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Voice from '@react-native-community/voice';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {warinng} from '../../components/helper';

const VoiceToText = ({route}) => {
  const [seechText, setSpeechText] = useState('');
  const navigation = useNavigation();
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
    // console.log(modalVisible, 'dd');
    setSpeechText(e.value[0]);
    // console.log(e);

    // googlePlacesRef.current?.focus();
  };

  const startRecording = async () => {
    try {
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
  const gotoBack = () => {
    if (seechText == '') {
      warinng('Notes are empty');
    } else {
      route.params.getText(seechText);
      navigation.goBack();
    }
  };
  useEffect(() => {
    setTimeout(() => {
      startRecording();
    }, 1000);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor="white" />
      <View
        style={{
          width: '100%',
          height: 20,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            gotoBack();
          }}>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#007aff',
            }}>
            <Text>
              <Entypo name="cross" size={20} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderRadius: 10,
          width: '90%',
          height: 100,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 15,
        }}>
        <Text>{seechText}</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 200,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <LottieView
          source={require('../../images/enable-mic.json')}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};

export default VoiceToText;

const styles = StyleSheet.create({});
