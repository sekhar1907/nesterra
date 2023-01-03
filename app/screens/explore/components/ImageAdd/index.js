import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React, {useMemo, useCallback, useState} from 'react';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import {RadioButton} from 'react-native-paper';
import CameraModal from '../../../../components/CameraModal';
import {
  getImageFromGallery,
  getImageFromCamera,
} from '../../../../components/CameraModal/imagePickerHelper';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {warinng} from '../../../../components/helper';
import {Base_url1} from '../../../../key';
import Lodder from '../../../../components/lodder';

const ImageAdd = ({imageAddRef}) => {
  const location_data = useSelector(state => state?.location_details?.data);
  const snapPoints = useMemo(() => ['10%', '26%', '93%'], []);
  const [ImageType, setChecked] = React.useState('site');
  const [imageUrl, setImageUrl] = React.useState('');
  const [img, setimg] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [index, sedtIndex] = useState(1);

  // console.log(location_data?.Location_ID, 'da');
  // console.log(moment().format('YYYY-MM-DD'));
  // console.log(imageUrl.assets[0].uri, 'imageUrl');
  const submit = () => {
    if (img == '') {
      warinng('Chooose An Image');
    } else {
      let formData = new FormData();
      let localUri = imageUrl.uri;
      let filename = imageUrl.fileName;
      let type = imageUrl.type;
      formData.append('Image', {uri: localUri, name: filename, type});
      formData.append('ImageType', ImageType);
      formData.append('Location_id', location_data?.Location_ID);
      formData.append('comment', comment);

      formData.append('AuthorEmail', '');
      formData.append('DateTime', moment().format('YYYY-MM-DD'));
      console.log(JSON.stringify(formData), 'formData');
      setIsLoading(true);
      fetch(`${Base_url1}/UploadImage`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'applicatopn/json',
          'content-type': 'multipart/form-data',
        },
      })
        .then(res => {
          return res.json();
        })
        .then(result => {
          if (result.includes('https')) {
            setImageUrl('');
            setimg('');
            setComment('');
            setIsLoading(false);
          }
        })
        .catch(err => console.log(err));
    }
  };
  const getCameraImage = () => {
    const data1 = getImageFromCamera(setImageUrl, setimg);
    console.log(data1, 'data1');
    // setimg(imageUrl.assets[0].uri);
  };
  const getGalleryImage = () => {
    const data = getImageFromGallery(setImageUrl, setimg);
    // console.log(data, 'data');
  };

  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 3,
          opacity: 0.5,
        }}
        // handleComponent={() => (
        //   <View style={styles.closeLineContainer}>
        //     <View style={styles.closeLine}>
        //       <SimpleLineIcons name="arrow-up" size={20} color="black" />
        //     </View>
        //   </View>
        // )}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={imageAddRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        style={{}}
        keyboardBehavior={true}
        animatedPosition={true}>
        <BottomSheetScrollView
          contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
          <View style={styles.topView}>
            <View style={styles.header}>
              <Text style={{fontWeight: 'bold', fontSize: 22, color: 'black'}}>
                Add Image
              </Text>
              <TouchableOpacity
                style={styles.closeView}
                onPress={() => {
                  imageAddRef.current.close();
                }}>
                <Entypo name="cross" size={20} color="white" />
              </TouchableOpacity>
            </View>
            {/*======= image view=========== */}
            <TouchableOpacity
              onPress={() => {
                // getImageFromCamera(setImageUrl);
                setModalVisible(true);
              }}
              style={styles.imageView}>
              {imageUrl ? (
                <Image source={{uri: img.uri}} style={styles.imageView} />
              ) : (
                <Image
                  style={styles.imageView}
                  source={require('../../../../images/nenuImage/image.png')}
                />
              )}
            </TouchableOpacity>

            {/*============== Radio View============== */}
            <Text style={styles.text}>Image Type</Text>
            <View style={styles.radioView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  color="#3d69ee"
                  value="first"
                  status={ImageType === 'site' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('site')}
                />
                <Text style={{color: 'black'}}>Site</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  color="#3d69ee"
                  value="second"
                  status={ImageType === 'network' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('network')}
                />
                <Text style={{color: 'black'}}>Network Design</Text>
              </View>
            </View>
            <Text style={styles.text}>Comment</Text>
            <View style={styles.inputView}>
              <BottomSheetTextInput
                style={{
                  width: '100%',
                  height: 100,
                  justifyContent: 'flex-start',
                  backgroundColor: '#f3f2f8',
                  borderRadius: 15,
                  paddingTop: 8,
                  paddingLeft: 8,
                  textAlignVertical: 'top',
                }}
                value={comment}
                multiline
                numberOfLines={4}
                placeholder="Please Enter Here"
                onChangeText={text => setComment(text)}
              />
            </View>
          </View>
          <View
            style={{
              ...styles.bottomview,
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => submit()}
              style={{
                width: '90%',
                height: 50,
                borderRadius: 10,
                backgroundColor: '#0777b9',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
      <CameraModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        getCameraImage={getCameraImage}
        getGalleryImage={getGalleryImage}
      />

      {isLoading && <Lodder lodding={isLoading} />}
    </>
  );
};

export default ImageAdd;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingHorizontal: 10,
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
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
    height: 100,
    width: '95%',
    alignSelf: 'center',
  },
  topView: {
    width: '100%',
    height: '80%',
  },
  bottomview: {
    width: '100%',
    height: '20%',

    alignItems: 'center',
  },
  imageView: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 5,
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  radioView: {
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  inputView: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginTop: 10,
  },
});
