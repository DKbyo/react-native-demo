import ImagePicker from 'react-native-image-picker';
import {grantCameraPermission} from './permission';
const takePhotoImagePicker = () =>
  grantCameraPermission().then(
    () =>
      new Promise((resolve, reject) => {
        ImagePicker.launchCamera({}, response => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancel');
            reject(new Error('User cancel'));
          } else if (response.error) {
            console.error('Error selecting photo ', response.error);
            reject(new Error('Error selecting photo'));
          } else {
            const source = response;
            resolve(source);
          }
        });
      }),
  );

export {takePhotoImagePicker};
