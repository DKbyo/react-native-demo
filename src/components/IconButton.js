import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from './Icon';

const IconButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{width: props.width, height: 30, backgroundColor: '#2196F3'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 5,
          marginBottom: 5,
          marginRight: 5,
          marginLeft: 5,
        }}>
        <Icon name={props.icon} fill="#FFF" width="20" height="20" />
        <Text style={{marginLeft: 10, marginRight: 10, color: '#FFF'}}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default IconButton;
