import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Portal, Modal} from 'react-native-paper';
const {width, height} = Dimensions.get('screen');
const ModalView = ({setOpenModal, openModal, authType, setAuthType}) => {
  return (
    <Portal>
      <Modal
        visible={openModal}
        onDismiss={() => setOpenModal(false)}
        contentContainerStyle={styles.containerStyle}>
        <View
          style={{
            width: '100%',
            height: 30,

            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'black'}}>
            Select an authentication factor
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setAuthType(false);
            setOpenModal(false);
          }}
          style={{
            width: '100%',
            height: 70,
            borderWidth: 0.5,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '30%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  borderRadius: 25,
                }}
                source={require('../../../images/okta.png')}
              />
            </View>
          </View>
          <View
            style={{
              width: '70%',
              height: '100%',

              justifyContent: 'center',
            }}>
            <Text>Okta Verify ('Sam's iPhone)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAuthType(true);
            setOpenModal(false);
          }}
          style={{
            width: '100%',
            height: 70,
            borderWidth: 0.5,

            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '30%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  borderRadius: 25,
                }}
                source={require('../../../images/sms2.png')}
              />
            </View>
          </View>
          <View
            style={{
              width: '70%',
              height: '100%',

              justifyContent: 'center',
            }}>
            <Text>SMS Authentication</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </Portal>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: 350,
    height: 200,
    alignSelf: 'center',
    borderRadius: 5,

    zIndex: 999,
    top: height / 2 - 125,
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
  },
});
