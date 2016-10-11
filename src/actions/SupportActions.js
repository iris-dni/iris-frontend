import petitionRepository from 'services/api/repositories/petition';
import getPetitionURL from 'helpers/getPetitionURL';
import isUntrustedUser from 'helpers/isUntrustedUser';
import { receiveWhoAmI } from 'actions/AuthActions';
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
  // Add submitted data to me object for future
  dispatch(receiveWhoAmI(trustData.user));
  // Trigger support action
  return petitionRepository.support(trustData)
    .then((response) => {
      if (isUntrustedUser(response)) {
        // THIS WILL BE WHERE WE SHOW THE TAN PAGE
      }
      // THIS IS THE TRUSTED USER FLOW
      return dispatch(supportedPetition(response.data));
    }).then((response) => dispatch(
      showModalWindow({
        type: 'supported',
        link: getPetitionURL(trustData.petitionId),
        ...settings.supportPetition.newlySupported.modal
      })
    )).catch((e) => {
      // console.log('error', e);
      return dispatch(
        showFlashMessage(settings.flashMessages.genericError, 'error')
      );
    });
}

export function supportedPetition (petition) {
  return {
    type: SUPPORTED_PETITION,
    petition
  };
}
