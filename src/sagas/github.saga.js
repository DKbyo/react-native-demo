import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {FETCH_REPOS, RESPONSE_REPOS} from '../reducers/github.reducer';

function* fetchUsers(action) {
  try {
    const {username} = action.payload;
    const result = yield axios.get(
      `https://api.github.com/users/${username}/repos`,
    );
    if (result.status === 200) {
      yield put(RESPONSE_REPOS(result.data));
    }
  } catch (e) {
    console.error('Error getting users', e);
  }
}

function* githubSaga() {
  yield takeLatest(FETCH_REPOS, fetchUsers);
}

export default githubSaga;
