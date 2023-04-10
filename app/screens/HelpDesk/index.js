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
import {useSelector} from 'react-redux';

const HelpDesk = ({navigation}) => {
  const [type, setType] = useState('Ask a Question');
  const {appearanceType} = useSelector(state => state.appearanceType);

  const [isCheck, setisCheck] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}>
      <View style={styles.mainView}>
        <Text
          style={
            appearanceType === 'dark'
              ? styles.helpDeskText
              : styles.helpDeskText1
          }>
          Help Desk
        </Text>
        <TouchableOpacity
          style={styles.closeView}
          onPress={() => {
            navigation.navigate('TabNaV');
          }}>
          <Entypo name="cross" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <Text
        style={appearanceType === 'dark' ? styles.typeText : styles.typeText1}>
        Type
      </Text>
      <View
        style={{
          ...styles.upperView,
          position: 'relative',
        }}>
        <View
          style={
            appearanceType === 'dark' ? styles.lowerView : styles.lowerView1
          }>
          {isCheck ? (
            <TouchableOpacity
              onPress={() => {
                setisCheck(false);
              }}
              style={{
                width: 200,
                height: 200,
                backgroundColor: 'yellow',
                position: 'absolute',
                right: -20,
                top: 10,
                zIndex: 1000,
              }}></TouchableOpacity>
          ) : null}

          <Text
            style={
              appearanceType === 'dark'
                ? styles.askQuestionText
                : styles.askQuestionText1
            }>
            {type}
          </Text>
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
      <Text
        style={appearanceType === 'dark' ? styles.typeText : styles.typeText1}>
        Subject
      </Text>
      <View style={styles.sudjectView}>
        <View style={styles.inputView}>
          <TextInput
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 5,
              color: appearanceType === 'dark' ? 'white' : 'black',
              backgroundColor: appearanceType === 'dark' ? 'black' : 'white',
            }}
          />
        </View>
      </View>

      <Text
        style={
          appearanceType === 'dark' ? styles.subjectText : styles.subjectText1
        }>
        Description
      </Text>
      <View style={styles.sudjectView1}>
        <View style={styles.inputView1}>
          <TextInput
            textAlignVertical={'top'}
            multiline
            numberOfLines={5}
            placeholderTextColor={{textAlign: 'top'}}
            style={{
              borderRadius: 5,
              height: '100%',
              width: '100%',
              color: appearanceType === 'dark' ? 'white' : 'black',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              verticalAlign: 'top',
              backgroundColor: appearanceType === 'dark' ? 'black' : '',
            }}
          />
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

export default HelpDesk;

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
    color: 'white',
  },
  helpDeskText1: {
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
    color: 'white',
    marginLeft: 15,
    fontWeight: 'bold',
  },
  typeText1: {
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
    backgroundColor: '#1c1c1e',
    borderWidth: 1,
    borderColor: '#a6a6a8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  lowerView1: {
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  askQuestionText1: {
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
    color: 'white',
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
