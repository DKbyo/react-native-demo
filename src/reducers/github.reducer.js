import {createAction, createReducer} from 'redux-act';
import Immutable from 'immutable';

const FETCH_REPOS = createAction('fetch repos');
const RESPONSE_REPOS = createAction('response repos');

const initialState = Immutable.fromJS({
  repos: [],
});

const githubReducer = createReducer(
  {
    [RESPONSE_REPOS]: (state, payload) =>
      state.set('repos', Immutable.fromJS(payload)),
  },
  initialState,
);

export default githubReducer;

export {FETCH_REPOS, RESPONSE_REPOS};
