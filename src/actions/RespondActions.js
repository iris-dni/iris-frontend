import petitionRepository from 'services/api/repositories/petition';
import solveResolvedObjects from 'helpers/solveResolvedObjects';
import settings from 'settings';

import {
  requestPetition,
  receivePetition,
  submittingPetition,
  updatedPetition
} from 'actions/PetitionActions';

import {
  showFlashMessage
} from './FlashActions';

export function fetchPetitionByResponseToken (responseToken) {
  return (dispatch, getState) => {
    dispatch(requestPetition());
    return petitionRepository.findByResponseToken(responseToken)
      .then(response => dispatch(
        receivePetition(response.data)
      ));
  };
}

export function respondToPetition (petition, response, dispatch) {
  dispatch(submittingPetition());
  return petitionRepository.respond(petition, response)
    .then((response) => {
      const resolvedPetition = solveResolvedObjects(petition, response.data);
      dispatch(updatedPetition(resolvedPetition));
    }).then(() => dispatch(
      showFlashMessage(settings.flashMessages.petitionUpdated, 'success')
    )).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}
