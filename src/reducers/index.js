import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import petition from './petition';

export default combineReducers({
  counter,
  petition,
  routing: routerReducer
});
