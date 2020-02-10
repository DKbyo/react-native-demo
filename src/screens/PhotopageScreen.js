import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Image} from 'react-native';
import IconButton from '../components/IconButton';
import {TAKE_PHOTO} from '../reducers/camera.reducer';
const PhotoScreen = () => {
  const photo = useSelector(state => state.camera.get('photo'));
  const dispatch = useDispatch();
  const takePhoto = useCallback(() => dispatch(TAKE_PHOTO()), [dispatch]);
  console.log("Photo", photo);
  return (
    <View style={{alignContent: 'center', flex:1, alignItems:"center"}}>
      <View style={{alignItems: 'center', marginBottom: 10, marginTop:10}}>
        <IconButton onPress={takePhoto} text="Take Photo" icon="photo" />
      </View>
      <Image source={photo} style={{width:200, height:200}}/>
    </View>
  );
};

export default PhotoScreen;
