import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SimpleCheckBox from '../../components/checkBox/SimpleCheckBox';
import ModalView from './components';
const {width, height} = Dimensions.get('screen');

const OtpReceive = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [authType, setAuthType] = useState(true);
  const [enterCode, setEnterCode] = useState(true);

  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
        }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <>
            <ImageBackground
              source={require('../../images/Logo-Nesterra-Color-640px.png')}
              resizeMode="cover"
              style={{
                paddingTop: 50,
                alignItems: 'center',
                height: height - StatusBar.currentHeight,
                width: '100%',
              }}>
              {/* ========= LOGIN FORM ======== */}
              {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
              <View style={styles.modalView}>
                {/* ========= LOGO VIEW ======== */}
                <View style={styles.logoView}>
                  <Image
                    style={{width: '100%', height: 40, resizeMode: 'contain'}}
                    source={require('../../images/siteTitle.png')}
                  />
                </View>

                {/* ========= LOGO VIEW ======== */}
                {/* ========= Profile VIEW ======== */}
                <View style={styles.profile}>
                  <View style={styles.profileLeft}>
                    <View
                      style={{
                        width: '97%',
                        height: 1,
                        backgroundColor: '#a7a7a7',
                      }}></View>
                  </View>
                  <View style={styles.profileCenter}>
                    <View style={styles.mainProfile}>
                      <Image
                        source={
                          authType
                            ? require('../../images/sms2.png')
                            : require('../../images/okta.png')
                        }
                        style={styles.profileImage}
                      />
                    </View>
                  </View>
                  {/* ========= Profile Right ======== */}
                  <View style={{...styles.profileLeft, flexDirection: 'row'}}>
                    <View style={styles.rightProfile}>
                      <TouchableOpacity
                        onPress={() => {
                          setOpenModal(true);
                        }}
                        style={styles.rightProfileLeft}>
                        <AntDesign name="caretdown" size={12} color="black" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.rightProfileRight}>
                      <View
                        style={{
                          width: '96%',
                          height: 1,
                          backgroundColor: '#a7a7a7',
                        }}></View>
                    </View>
                  </View>
                  {/* ========= Profile Right ======== */}
                </View>
                {/* ========= Profile VIEW ======== */}
                {/* ========= InPut Area ======== */}

                {authType ? (
                  <>
                    <ScrollView
                      keyboardShouldPersistTaps="handled"
                      showsVerticalScrollIndicator={false}>
                      <Text style={{...styles.authenText, marginTop: 15}}>
                        SMS Authentication
                      </Text>
                      <Text style={{...styles.authenText, marginTop: 8}}>
                        (+91 xxxxx x7770)
                      </Text>
                      <View
                        style={{
                          width: width - 49.5,
                          flexDirection: 'row',
                          height: 100,
                          alignSelf: 'center',
                          marginTop: 30,
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}>
                        <View
                          style={{
                            width: '50%',
                            height: '100%',
                          }}>
                          <Text style={{fontWeight: 'bold', marginLeft: 16}}>
                            Enter Code
                          </Text>
                          <TextInput
                            maxLength={10}
                            keyboardType={'numeric'}
                            mode="outlined"
                            value={userName}
                            theme={{
                              colors: {
                                primary: '#95bcd8', // Outline color here
                              },
                            }}
                            style={{
                              marginTop: 2,
                              width: '90%',
                              alignSelf: 'center',
                            }}
                            onChangeText={text => setUserName(text)}
                          />
                        </View>
                        <View
                          style={{
                            width: '50%',
                            height: '100%',
                            alignItems: 'flex-end',
                            paddingRight: 12,
                            justifyContent: 'center',
                          }}>
                          <TouchableOpacity
                            style={{
                              width: width / 2 - 40,
                              height: 60,

                              marginTop: 12,
                              borderWidth: 1,
                              borderColor: '#c3c4c3',
                              borderRadius: 5,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text>Send code</Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <TouchableOpacity
                        onPress={() => alert('kkk')}
                        style={{
                          width: width - 72,
                          marginTop: 20,
                          height: 50,
                          backgroundColor: '#2f61d5',
                          alignSelf: 'center',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 5,
                        }}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                          Verify
                        </Text>
                      </TouchableOpacity>

                      <View style={{height: 150}}></View>
                    </ScrollView>
                  </>
                ) : (
                  <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}>
                    <Text style={{...styles.authenText, marginTop: 30}}>
                      Okta Verify (Sam’s iPhone)
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: width - 70,
                        alignSelf: 'center',
                        marginTop: 50,
                        height: 50,
                        backgroundColor: '#2f61d5',
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                      }}>
                      <Text style={{color: 'white', fontWeight: 'bold'}}>
                        Send Push
                      </Text>
                    </TouchableOpacity>

                    {enterCode ? (
                      <TouchableOpacity
                        onPress={() => {
                          setEnterCode(false);
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginTop: 20,
                          }}>
                          Or Enter Code
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <View
                        style={{
                          width: '95%',
                          flexDirection: 'row',
                          height: 100,
                          alignSelf: 'center',
                          marginTop: 30,
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            width: '50%',
                            height: '100%',
                            paddingRight: 10,
                          }}>
                          <Text style={{fontWeight: 'bold', marginLeft: 16}}>
                            Enter Code
                          </Text>
                          <TextInput
                            maxLength={10}
                            keyboardType={'numeric'}
                            mode="outlined"
                            value={userName}
                            theme={{
                              colors: {
                                primary: '#95bcd8', // Outline color here
                              },
                            }}
                            style={{
                              marginTop: 2,
                              width: '100%',
                              alignSelf: 'center',
                            }}
                            onChangeText={text => setUserName(text)}
                          />
                        </View>
                        <View
                          style={{
                            width: '50%',
                            height: '100%',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                          }}>
                          <TouchableOpacity
                            style={{
                              width: 150,
                              height: 60,
                              marginTop: 10,
                              borderWidth: 1,
                              borderColor: '#c3c4c3',
                              borderRadius: 5,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text>Verify</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}

                    <SimpleCheckBox text="Send push automatically" />

                    <View style={{height: 150}}></View>
                  </ScrollView>
                )}

                {/* ========= InPut Area ======== */}
              </View>
              {/* </TouchableWithoutFeedback> */}
              {/* ========= LOGIN FORM ======== */}
            </ImageBackground>
          </>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      {openModal ? (
        <ModalView
          setAuthType={setAuthType}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ) : null}
    </>
  );
};

export default OtpReceive;

const styles = StyleSheet.create({
  modalView: {
    width: '90%',
    height: '80%',
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  //profile
  //Logo View
  logoView: {
    width: '80%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  //Logo View
  profile: {
    width: width - 50,
    height: 72,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  profileLeft: {
    width: (width - 50) / 2 - 39,
    height: '100%',

    justifyContent: 'center',
  },

  profileCenter: {
    width: 74,
    height: 74,
    backgroundColor: 'white',
    borderRadius: 37,
    borderWidth: 1.5,
    borderColor: '#a7a7a7',

    justifyContent: 'center',
    alignItems: 'center',
  },
  mainProfile: {
    width: '90%',
    height: '90%',
    backgroundColor: '#85c6fc',
    borderRadius: 35,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 30,
  },
  rightProfile: {
    width: '25%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  rightProfileLeft: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightProfileRight: {
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  //profile
  //authenText
  authenText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  //authenText
});
