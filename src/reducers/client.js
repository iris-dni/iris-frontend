import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import autocompleteReducer from './autocomplete';
import petitionReducer from './petition';
import petitionsReducer from './petitions';
import meReducer from './me';
import flashMessageReducer from './flashMessage';
import modalWindowReducer from './modalWindow';
import navigationReducer from './navigation';
import openGraphReducer from './openGraph';
import petitionResponseReducer from './petitionResponse';
import confirmationReducer from './confirmation';
import imagesReducer from './images';

export default combineReducers({
  autocomplete: autocompleteReducer,
  petition: petitionReducer,
  petitions: petitionsReducer,
  form: formReducer.normalize({
    trustSupport: {
      'user.mobile': value => value && value.trim()
    },
    trustPublish: {
      'owner.mobile': value => value && value.trim()
    }
  }),
  me: meReducer,
  flashMessage: flashMessageReducer,
  navigation: navigationReducer,
  modalWindow: modalWindowReducer,
  routing: routerReducer,
  openGraph: openGraphReducer,
  petitionResponse: petitionResponseReducer,
  images: imagesReducer,
  confirmation: confirmationReducer
});
