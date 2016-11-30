import { push } from 'react-router-redux';
import petitionRepository from 'services/api/repositories/petition';
import settings from 'settings';

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
      .catch(() => dispatch(
        petitionNotFound({ token: responseToken })
      ));
  };
}

export function respondToPetition (petitionResponse, dispatch) {
  dispatch(submittingPetition());
  return petitionRepository.respond(petitionResponse)
    .then((response) => {
      dispatch(push(`/respond/${petitionResponse.token}/confirmation`));
      dispatch(respondedToPetition(response.data));
    }).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function respondedToPetition (petition) {
  return {
    type: RESPONDED_TO_PETITION,
    petition
  };
}
