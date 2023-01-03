import {
  View,
  SafeAreaView,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Card, Title} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const Notification = () => (
  <>
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
      }}>
      <View style={styles.hearder}>
        <View style={{width: '60%', height: '80%', alignSelf: 'center'}}>
          <Image
            style={{width: '100%', height: 50, resizeMode: 'contain'}}
            source={require('../../images/siteTitle.png')}
          />
        </View>
      </View>
      <View style={{width: '100%', height: '100%', paddingHorizontal: 20}}>
        <Card style={{marginTop: 20, borderRadius: 8}}>
          <Card.Content>
            <Title style={{textAlign: 'center', marginBottom: 8}}>
              Please update your profile
            </Title>
            {/* =============== Body Area=========== */}
            <View style={styles.body}>
              <View style={styles.bodyLeft}>
                <Image
                  source={require('../../images/lock.png')}
                  style={{width: 50, height: 50, resizeMode: 'contain'}}
                />
              </View>
              {/* =============== Body Right=========== */}
              <View style={styles.bodyRight}>
                <Text style={{fontSize: 15, fontWeight: '700'}}>
                  <Text style={{color: 'black'}}>
                    Upgrade to Okta Verify with Push Authentication
                  </Text>{' '}
                  (optional)
                </Text>
                <Text style={{fontSize: 13, marginTop: 10, fontWeight: '400'}}>
                  This feature allows you to sing-in to your account with a
                  simple tab useing the Okta Verify Mobile app.
                </Text>
                {/* =============== Upgrade Button=========== */}
                <TouchableOpacity style={styles.upgradeButtom}>
                  <Entypo name="arrow-up" size={24} color="#357abb" />
                  <Text>Upgrade to Okta Verify</Text>
                </TouchableOpacity>
                {/* =============== Upgrade Button=========== */}
              </View>
              {/* =============== Body Right=========== */}
            </View>
            {/* =============== Body Area=========== */}
            {/* =============== Remind Area=========== */}
            <View style={styles.body1}>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: '70%',

                  borderRadius: 5,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Remind me later</Text>
              </TouchableOpacity>
            </View>
            {/* =============== Remind Area=========== */}
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  </>
);

export default Notification;
const styles = StyleSheet.create({
  hearder: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
  },
  //body
  body: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#eee',
    height: 250,
    flexDirection: 'row',
    borderRadius: 5,
  },
  body1: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#eee',
    height: 60,
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 18,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 18,
  },
  bodyLeft: {
    width: '30%',
    height: '100%',
    paddingTop: 30,
    alignItems: 'center',
  },
  bodyRight: {
    width: '70%',
    height: '100%',
    paddingTop: 20,
  },
  upgradeButtom: {
    marginTop: 15,
    width: 200,
    height: 60,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  //body
});
