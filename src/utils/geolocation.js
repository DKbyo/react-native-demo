import Geolocation from 'react-native-geolocation-service';
import {grantLocationPermission} from './permission';
const getLocation = async () =>
  grantLocationPermission().then(
    () =>
      new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          e => {
            reject(e);
          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
          },
        );
      }),
  );

export {getLocation};
