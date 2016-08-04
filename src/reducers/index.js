import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import petition from './petition';

export default combineReducers({
  petition,
  routing: routerReducer
});
