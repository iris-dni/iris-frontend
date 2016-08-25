import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import petitionReducer from './petition';
import petitionsReducer from './petitions';
import meReducer from './me';
import flashMessageReducer from './flashMessage';

export default combineReducers({
  petition: petitionReducer,
  petitions: petitionsReducer,
  form: formReducer,
  me: meReducer,
  flashMessage: flashMessageReducer,
  routing: routerReducer
});
