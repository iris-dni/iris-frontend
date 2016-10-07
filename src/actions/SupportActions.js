import petitionRepository from 'services/api/repositories/petition';
import getPetitionURL from 'helpers/getPetitionURL';
import isUntrustedUser from 'helpers/isUntrustedUser';
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

export function supportPetition (trustData, dispatch) {
  dispatch(submittingSupport());
  console.log(trustData);
  const mockPetitionForNow = { id: trustData.petitionId };
  return petitionRepository.support(trustData)
    .then((response) => {
      if (isUntrustedUser(response)) {
        // THIS WILL BE WHERE WE SHOW THE TAN PAGE
      }
      // THIS IS THE TRUSTED USER FLOW
      console.log(mockPetitionForNow);
      return dispatch(supportedPetition(mockPetitionForNow));
    }).then((response) => dispatch(
      showModalWindow({
        type: 'supported',
        link: getPetitionURL(mockPetitionForNow.id),
        ...settings.supportPetition.newlySupported.modal
      })
    )).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function supportedPetition (petition) {
  return {
    type: SUPPORTED_PETITION,
    petition
  };
}
