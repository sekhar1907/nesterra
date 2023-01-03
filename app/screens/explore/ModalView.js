// import React from 'react';
// import {
//   Text,
//   TouchableOpacity,
//   View,
//   StyleSheet,
//   Dimensions,
//   ActivityIndicator,
// } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {Modal, Portal} from 'react-native-paper';
// const {width, height} = Dimensions.get('screen');
// const ModalView = ({modalVisible, setModalVisible, locationText}) => {
//   return (
//     <>
//       <TouchableOpacity
//         onPress={() => {
//           setModalVisible(false);
//         }}
//         style={styles.container}></TouchableOpacity>

//       <View style={styles.containerStyle}>
//         <Text style={{marginBottom: 20, fontSize: 25, color: '#1b5a90'}}>
//           {locationText}
//         </Text>
//         <Text style={{marginBottom: 20}} t>
//           <ActivityIndicator size="large" color="#1b5a90" />
//         </Text>
//       </View>
//     </>
//     // <Portal>
//     //   <Modal
//     //     visible={modalVisible}
//     //     onDismiss={() => setModalVisible(false)}
//     //     contentContainerStyle={styles.containerStyle}>
//     //     <Text style={{marginBottom: 20, fontSize: 25, color: '#1b5a90'}}>
//     //       {locationText}
//     //     </Text>
//     //     <Text style={{marginBottom: 20}}>
//     //       {' '}
//     //       <FontAwesome name="microphone" size={40} color="#1b5a90" />
//     //     </Text>
//     //     <Text>
//     //       <ActivityIndicator size="large" color="#1b5a90" />
//     //     </Text>
//     //   </Modal>
//     // </Portal>
//   );
// };

// export default ModalView;

// const styles = StyleSheet.create({
//   containerStyle: {
//     backgroundColor: 'white',
//     padding: 20,
//     width: 300,
//     height: 250,
//     alignSelf: 'center',
//     borderRadius: 15,
//     alignItems: 'center',
//     zIndex: 999,
//     top: height / 2 - 125,
//     position: 'absolute',
//   },
//   container1: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     zIndex: 998,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     backgroundColor: 'black',
//     zIndex: 10,
//     opacity: 0.5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
import React, {useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Modal, Portal} from 'react-native-paper';
import LottieView from 'lottie-react-native';
const {width, height} = Dimensions.get('screen');
const ModalView = ({
  modalVisible1,
  startTimeOute,
  startRecording,

  stopStartTimeOute,
  setModalVisible1,
  setModalVisible,
  setlocationText,
  locationText,
}) => {
  useEffect(() => {
    //   setTimeout(() => {
    //   if (!locationText) {
    //     setModalVisible(false
    //       )
    //     setlocationText('')
    //     // setModalVisible(false)
    //  console.log("object");
    //   }
    //   }, 10000);
    // return ()=>{
    //   stopStartTimeOute()
    // }
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          stopStartTimeOute();
          // console.log("first")
          setModalVisible(false);
          setModalVisible1(false);
          // setlocationText('')
          //stopStartTimeOute()
        }}
        style={styles.container}></TouchableOpacity>

      <View style={styles.containerStyle}>
        <Text style={{marginBottom: 20, fontSize: 25, color: '#1b5a90'}}>
          {locationText}
        </Text>

        {modalVisible1 ? (
          <FontAwesome name="microphone-slash" size={50} color="#f37777" />
        ) : (
          <View style={{width: 100, height: 100}}>
            <LottieView
              source={require('../../images/mic.json')}
              autoPlay
              loop
            />
          </View>
        )}

        {modalVisible1 ? (
          <TouchableOpacity
            onPress={() => {
              startRecording();
              startTimeOute();
              setModalVisible1(false);
            }}
            style={{
              width: 120,
              height: 40,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              borderRadius: 25,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Try Again</Text>
          </TouchableOpacity>
        ) : null}

        {/* <Text style={{marginBottom: 20}} >
          <ActivityIndicator size="large" color="#1b5a90" />
        </Text> */}
      </View>
    </>
    // <Portal>
    //   <Modal
    //     visible={modalVisible}
    //     onDismiss={() => setModalVisible(false)}
    //     contentContainerStyle={styles.containerStyle}>
    //     <Text style={{marginBottom: 20, fontSize: 25, color: '#1b5a90'}}>
    //       {locationText}
    //     </Text>
    //     <Text style={{marginBottom: 20}}>
    //       {' '}
    //       <FontAwesome name="microphone" size={40} color="#1b5a90" />
    //     </Text>
    //     <Text>
    //       <ActivityIndicator size="large" color="#1b5a90" />
    //     </Text>
    //   </Modal>
    // </Portal>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    width: width - 20,
    height: 350,
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

    justifyContent: 'center',
    alignItems: 'center',
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
