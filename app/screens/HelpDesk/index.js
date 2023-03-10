import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  import Entypo from 'react-native-vector-icons/Entypo';
  import {Input} from 'react-native-paper';
  
  const HelpDes = ({navigation}) => {
    const [isCheck, setisCheck] = useState(false);
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}>
        <View style={styles.mainView}>
          <Text style={styles.helpDeskText}>Help Desk</Text>
          <TouchableOpacity
            style={styles.closeView}
            onPress={() => {
              navigation.navigate('Menu');
            }}>
            <Entypo name="cross" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.typeText}>Type</Text>
        <View style={{...styles.upperView, position: 'relative'}}>
          <View style={styles.lowerView}>
            {isCheck ? (
              <TouchableOpacity
                onPress={() => {
                  setisCheck(false);
                }}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'yellow',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                }}></TouchableOpacity>
            ) : null}
  
            <Text style={styles.askQuestionText}>Ask a Question</Text>
            <TouchableOpacity
              onPress={() => {
                setisCheck(true);
              }}
              style={styles.downarrowView}>
              <Image
                style={{tintColor: 'white', width: 25, height: 25}}
                source={require('../../images/legal/downArrow.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.subjectText}>Subject</Text>
        <View style={styles.sudjectView}>
          <View style={styles.inputView}>
            <TextInput />
          </View>
        </View>
  
        <Text style={styles.subjectText1}>Description</Text>
        <View style={styles.sudjectView1}>
          <View style={styles.inputView1}>
            <TextInput multiline numberOfLines={5} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            // backgroundColor: 'pink',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <View
            style={{
              width: '47%',
              height: 50,
              backgroundColor: '#0278b8',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 15}}>Previous Tickets</Text>
          </View>
  
          <View
            style={{
              width: '47%',
              height: 50,
              backgroundColor: '#0278b8',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 15}}>Submit Request</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default HelpDes;
  
  const styles = StyleSheet.create({
    mainView: {
      width: '100%',
      height: 70,
      // backgroundColor: 'pink',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    helpDeskText: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 15,
      color: 'black',
    },
    closeView: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#0472ef',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
    },
    typeText: {
      fontSize: 20,
      color: 'black',
      marginLeft: 15,
      fontWeight: 'bold',
    },
    upperView: {
      width: '100%',
      height: 60,
      //   backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    lowerView: {
      width: '100%',
      height: 50,
      backgroundColor: '#f2f1f6',
      borderWidth: 1,
      borderColor: '#a6a6a8',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
    },
    askQuestionText: {
      marginLeft: 10,
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
    },
    downarrowView: {
      width: 25,
      height: 25,
      backgroundColor: '#077fef',
      marginRight: 15,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    subjectText: {
      fontSize: 20,
      color: 'black',
      marginLeft: 15,
      fontWeight: 'bold',
    },
    sudjectView: {
      width: '100%',
      height: 60,
      // backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    inputView: {
      width: '100%',
      height: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#a6a6a8',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
    },
    sudjectView1: {
      width: '100%',
      // backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    inputView1: {
      width: '100%',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#a6a6a8',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
    },
    subjectText1: {
      fontSize: 20,
      color: 'black',
      marginLeft: 15,
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 8,
    },
  });
  