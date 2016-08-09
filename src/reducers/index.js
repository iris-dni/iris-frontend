import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import petition from './petition';
import petitions from './petitions';

export default combineReducers({
  petition,
  petitions,
  routing: routerReducer
});
