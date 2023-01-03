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
import {TextInput} from 'react-native-paper';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SimpleCheckBox from '../../components/checkBox/SimpleCheckBox';
const {width, height} = Dimensions.get('screen');

const Login = () => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
        }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ImageBackground
            source={require('../../images/Logo-Nesterra-Color-640px.png')}
            resizeMode="cover"
            style={{
              paddingTop: 50,
              alignItems: 'center',
              height: height - StatusBar.currentHeight,
            }}>
            {/* ========= LOGIN FORM ======== */}
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={styles.modalView}>
                {/* ========= LOGO VIEW ======== */}
                <View
                  style={{
                    width: '80%',
                    height: 80,

                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
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
                        source={require('../../images/IMG20180629124923.jpg')}
                        style={styles.profileImage}
                      />
                    </View>
                  </View>
                  <View style={{...styles.profileLeft, alignItems: 'flex-end'}}>
                    <View
                      style={{
                        width: '97%',
                        height: 1,
                        backgroundColor: '#a7a7a7',
                      }}></View>
                  </View>
                </View>
                {/* ========= Profile VIEW ======== */}
                {/* ========= InPut Area ======== */}
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginTop: 15,
                    }}>
                    Sing In
                  </Text>
                  <View style={{paddingHorizontal: 20, width: width - 50}}>
                    <Text style={{fontWeight: 'bold', marginLeft: 16}}>
                      Username
                    </Text>
                    <TextInput
                      label="Username"
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
                    <Text style={{fontWeight: 'bold', marginLeft: 16}}>
                      Password
                    </Text>
                    <TextInput
                      label="Username"
                      mode="outlined"
                      value={password}
                      secureTextEntry={true}
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
                      onChangeText={text => setPassword(text)}
                    />
                  </View>
                  {/* ========= checkBox========== */}
                  <SimpleCheckBox ml={26} text="Rebember Me" />
                  {/* ========= checkBox========== */}
                  <TouchableOpacity
                    onPress={() => alert('kkk')}
                    style={{
                      width: width - 122,
                      marginTop: 20,
                      height: 50,
                      backgroundColor: '#2f61d5',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Sing In
                    </Text>
                  </TouchableOpacity>
                  <Text style={{marginLeft: 35, marginTop: 20}}>
                    Need help singing in?
                  </Text>

                  <View style={{height: 300}}></View>
                </ScrollView>
                {/* ========= InPut Area ======== */}
              </View>
            </TouchableWithoutFeedback>
            {/* ========= LOGIN FORM ======== */}
          </ImageBackground>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  modalView: {
    width: width - 50,
    height: '80%',
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

    borderRadius: 35,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 30,
  },

  //profile
});
