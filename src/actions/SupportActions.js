import petitionRepository from 'services/api/repositories/petition';
import getSupportedPetitionModal from 'helpers/getSupportedPetitionModal';
import solveResolvedObjects from 'helpers/solveResolvedObjects';
import settings from 'settings';

import {
  SUBMITTING_SUPPORT,
  SUPPORTED_PETITION
} from './actionTypes';

import {
  showFlashMessage
} from './FlashActions';

import {
  showModalWindow
} from './ModalActions';

export function submittingSupport () {
  return {
    type: SUBMITTING_SUPPORT
  };
}

export function supportPetition (petition, dispatch) {
  console.log(petition);
  return (dispatch, getState) => {
    dispatch(submittingSupport());
    return petitionRepository.support(petition)
      .then((response) => {
        const resolvedPetition = solveResolvedObjects(petition, response.data);
        return dispatch(supportedPetition(resolvedPetition));
      }).then((response) => dispatch(showModalWindow({
        type: 'supported',
        ...getSupportedPetitionModal(petition, response.petition)
      }))).catch(() => dispatch(
        showFlashMessage(settings.flashMessages.genericError, 'error')
      ));
  };
}

export function supportedPetition (returnedPetition, fullPetition) {
  const { city, owner } = fullPetition || {};
  return {
    type: SUPPORTED_PETITION,
    petition: returnedPetition,
    resolve: { city, owner }
  };
}
