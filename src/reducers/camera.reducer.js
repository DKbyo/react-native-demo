import {createAction, createReducer} from 'redux-act';
import Immutable from 'immutable';
import Placeholder from '../../assets/placeholder.jpg';

const TAKE_PHOTO = createAction('take photo');
const SELECT_PHOTO = createAction('select photo');

const initialState = Immutable.fromJS({
  photo: Placeholder,
});

const cameraReducer = createReducer(
  {
    [SELECT_PHOTO]: (state, payload) => state.set('photo', payload),
  },
  initialState,
);

export default cameraReducer;

export {TAKE_PHOTO, SELECT_PHOTO};
