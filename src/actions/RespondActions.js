import petitionRepository from 'services/api/repositories/petition';
import { translation } from 'translations';

import {
  requestPetition,
  receivePetition,
  submittingPetition,
  petitionNotFound
} from 'actions/PetitionActions';

import {
  showFlashMessage
} from './FlashActions';

import {
  RESPONDED_TO_PETITION
} from './actionTypes';

export function fetchPetitionByResponseToken (responseToken) {
  return (dispatch) => {
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
      dispatch(respondedToPetition(response.data));
    }).catch(() => dispatch(
      showFlashMessage(translation('flashMessages.genericError'), 'error')
    ));
}

export function respondedToPetition (petition) {
  return {
    type: RESPONDED_TO_PETITION,
    petition
  };
}
