import {put, takeLatest} from 'redux-saga/effects';
import {TAKE_PHOTO, SELECT_PHOTO} from '../reducers/camera.reducer';
import {takePhotoImagePicker} from '../utils/imagePicker';

function* takePhoto(action) {
  try {
    const source = yield takePhotoImagePicker();
    yield put(SELECT_PHOTO({uri: source.uri}));
  } catch (e) {
    console.error('Error getting users', e);
  }
}

function* cameraSaga() {
  yield takeLatest(TAKE_PHOTO, takePhoto);
}

export default cameraSaga;
