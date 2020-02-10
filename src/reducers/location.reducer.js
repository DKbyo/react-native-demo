import {createAction, createReducer} from 'redux-act';
import Immutable from 'immutable';

const GET_LOCATION = createAction('get location');

const RESPONSE_LOCATION = createAction('response location');

const initialState = Immutable.fromJS({
  location: null,
});

const locationReducer = createReducer(
  {
    [RESPONSE_LOCATION]: (state, payload) =>
      state.set('location', Immutable.fromJS(payload)),
  },
  initialState,
);

export default locationReducer;

export {GET_LOCATION, RESPONSE_LOCATION};
