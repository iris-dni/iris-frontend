import { combineReducers } from 'redux';
import counter from './counter';
import petition from './petition';

export default combineReducers({
  counter,
  petition
});
