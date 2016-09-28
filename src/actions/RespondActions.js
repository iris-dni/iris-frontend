import petitionRepository from 'services/api/repositories/petition';
import settings from 'settings';

import {
  requestPetition,
  receivePetition,
  submittingPetition,
  updatedPetition,
  petitionNotFound
} from 'actions/PetitionActions';

import {
  showFlashMessage
} from './FlashActions';

export function fetchPetitionByResponseToken (responseToken) {
  return (dispatch, getState) => {
    dispatch(requestPetition());
    return petitionRepository.findByResponseToken(responseToken)
      .then(response => dispatch(
        receivePetition({ ...response.data, token: responseToken })
      ))
      .catch(err => {
        if (err.response && err.response.status === 404) {
          dispatch(petitionNotFound({ token: responseToken }));
        }
      });
  };
}

export function respondToPetition (petitionResponse, dispatch) {
  dispatch(submittingPetition());
  return petitionRepository.respond(petitionResponse)
    .then((response) => {
      dispatch(updatedPetition(response.data));
    }).then(() => dispatch(
      showFlashMessage(settings.flashMessages.petitionAnswered, 'success')
    )).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}
