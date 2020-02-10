import {put, takeLatest} from 'redux-saga/effects';
import {GET_LOCATION, RESPONSE_LOCATION} from '../reducers/location.reducer';
import {getLocation} from '../utils/geolocation';

function* fetchLocation(action) {
  try {
    const location = yield getLocation();
    yield put(RESPONSE_LOCATION(location));
  } catch (e) {
    console.error('Error getting location', e);
  }
}

function* locationSaga() {
  yield takeLatest(GET_LOCATION, fetchLocation);
}

export default locationSaga;
