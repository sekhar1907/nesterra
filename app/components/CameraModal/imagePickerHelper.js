import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const options = {
  title: ' Choose Image ',
  takePhotoButtonTitle: 'From camera',
  ChooseFromLibraryButtonTitle: 'From Library',
  saveToPhotos: true,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const getImageFromGallery = (setImageUrl, setimg) => {
  launchImageLibrary(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      // console.log(response);
      // console.log(dispatch, 'dispatch');
      // return response;
      setImageUrl(response.assets[0]);
      setimg(response.assets[0]);
    }
  });
};
export const getImageFromCamera = (setImageUrl, setimg) => {
  launchCamera(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      //  console.log(response)
      // return response;
      setImageUrl(response.assets[0]);
      setimg(response.assets[0]);
    }
  });
};
