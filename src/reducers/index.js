import {combineReducers} from 'redux';
import location from './location.reducer';
import github from './github.reducer';
import camera from './camera.reducer';
const rootReducer = combineReducers({
  location,
  github,
  camera,
});
export default rootReducer;
