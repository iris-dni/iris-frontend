import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import petition from './petition';
import petitions from './petitions';
import me from './me';

export default combineReducers({
  petition,
  petitions,
  form: formReducer,
  me,
  routing: routerReducer
});
