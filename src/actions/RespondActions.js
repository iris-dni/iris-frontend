import petitionRepository from 'services/api/repositories/petition';
import settings from 'settings';

import {
  requestPetition,
  receivePetition,
  petitionNotFound
} from 'actions/PetitionActions';

import {
  showFlashMessage
} from './FlashActions';

import {
  RESPONDED_TO_PETITION,
  SUBMITTING_PETITION_RESPONSE
} from './actionTypes';

export function fetchPetitionByResponseToken (responseToken) {
  return (dispatch) => {
    dispatch(requestPetition());
    return petitionRepository.findByResponseToken(responseToken)
      .then(response => dispatch(
        receivePetition({ ...response.data, token: responseToken })
      ))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          dispatch(petitionNotFound({ token: responseToken }));
        }
      });
  };
}

export function respondToPetition (petitionResponse, dispatch) {
  dispatch(submittingPetitionResponse());
  return petitionRepository.respond(petitionResponse)
    .then((response) => {
      dispatch(respondedToPetition(response.data));
    }).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function submittingPetitionResponse () {
  return {
    type: SUBMITTING_PETITION_RESPONSE
  };
}

export function respondedToPetition (petition) {
  return {
    type: RESPONDED_TO_PETITION,
    petition
  };
}
