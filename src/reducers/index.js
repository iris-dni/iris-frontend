import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import petition from './petition';
import petitions from './petitions';

export default combineReducers({
  petition,
  petitions,
  form: formReducer,
  routing: routerReducer
});
