import {createAction, createReducer} from 'redux-act';
import Immutable from 'immutable';

const FETCH_REPOS = createAction('fetch repos');
const RESPONSE_REPOS = createAction('response repos');
const RESPONSE_USER = createAction('response repos');

const initialState = Immutable.fromJS({
  repos: [],
  user: null,
});

const githubReducer = createReducer(
  {
    [RESPONSE_REPOS]: (state, payload) =>
      state.set('repos', Immutable.fromJS(payload)),
    [RESPONSE_USER]: (state, payload) =>
      state.set('user', Immutable.fromJS(payload)),
  },
  initialState,
);

export default githubReducer;

export {FETCH_REPOS, RESPONSE_REPOS, RESPONSE_USER};
