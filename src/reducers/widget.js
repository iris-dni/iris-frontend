import { combineReducers } from 'redux';
import petitionReducer from './petition';

export default combineReducers({
  petition: petitionReducer
});
