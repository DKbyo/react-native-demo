import {all} from 'redux-saga/effects';
import GithubSaga from './github.saga';
import LocationSaga from './location.saga';
import Camerasaga from './camera.saga';

export default function* rootSaga() {
  yield all([LocationSaga(), GithubSaga(), Camerasaga()]);
}
