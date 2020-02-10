import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconButton from '../components/IconButton';
import {useSelector, useDispatch} from 'react-redux';
import {GET_LOCATION} from '../reducers/location.reducer';
import {WebView} from 'react-native-webview';

const LandingScreen = props => {
  const location = useSelector(state => state.location.get('location'));
  const dispatch = useDispatch();
  const getLocation = useCallback(() => dispatch(GET_LOCATION()), [dispatch]);
  return (
    <>
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        {location && (
          <Text>
            {`User's location: ${location.get('latitude')},${location.get(
              'longitude',
            )} `}
          </Text>
        )}
        <IconButton
          onPress={getLocation}
          icon="refresh"
          text="Get current position"
        />
      </View>
    </>
  );
};

export default LandingScreen;
