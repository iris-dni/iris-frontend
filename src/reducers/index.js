import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import autocompleteReducer from './autocomplete';
import petitionReducer from './petition';
import petitionsReducer from './petitions';
import meReducer from './me';
import flashMessageReducer from './flashMessage';
import modalWindowReducer from './modalWindow';

export default combineReducers({
  autocomplete: autocompleteReducer,
  petition: petitionReducer,
  petitions: petitionsReducer,
  form: formReducer,
  me: meReducer,
  flashMessage: flashMessageReducer,
  modalWindow: modalWindowReducer,
  routing: routerReducer
});
