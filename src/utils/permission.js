import {PermissionsAndroid, Platform} from 'react-native';

const checkPermissions = async permissions => {
  const hasPermissions = await Promise.all(
    permissions.map(permission => PermissionsAndroid.check(permission)),
  );
  return hasPermissions.reduce(
    (previous, current) => previous && current,
    true,
  );
};

const grantPermission = async (permissions, message) => {
  if (Platform.OS === 'android') {
    let hasAllPermissions = await checkPermissions(permissions);
    if (!hasAllPermissions) {
      await PermissionsAndroid.requestMultiple(permissions, {
        title: 'React Native Demo',
        message: message,
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      hasAllPermissions = await checkPermissions(permissions);
      if (!hasAllPermissions) {
        throw new Error("User doesn't have permissions");
      }
    }
  }
};

const grantLocationPermission = () =>
  grantPermission(
    [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION],
    'React Native Demo needs access to your location ' +
      'so you can see your current location',
  );

const grantCameraPermission = () =>
  grantPermission(
    [
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ],
    'React Native Demo needs access to your camera ' +
      'so you can take photos with the app',
  );

export {grantLocationPermission, grantCameraPermission};
