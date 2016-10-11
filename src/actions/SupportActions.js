import petitionRepository from 'services/api/repositories/petition';
import getPetitionURL from 'helpers/getPetitionURL';
import isUntrustedUser from 'helpers/isUntrustedUser';
import { receiveWhoAmI } from 'actions/AuthActions';
import { userIsUntrusted, submittingTrust } from 'actions/TrustActions';
import settings from 'settings';

import { SUPPORTED_PETITION } from './actionTypes';

import {
  showFlashMessage
} from './FlashActions';

import {
  showModalWindow
} from './ModalActions';

export function supportPetition (trustData, dispatch) {
  dispatch(submittingTrust());
  // Add submitted data to me object for future
  dispatch(receiveWhoAmI(trustData.user));
  // Trigger support action
  return petitionRepository.support(trustData)
    .then((response) => {
      // If the user is untrusted
      if (isUntrustedUser(response)) {
        dispatch(userIsUntrusted());
      } else {
        // Otherwise, we have supported
        dispatch(supportedPetition(response.data));
        dispatch(
          showModalWindow({
            type: 'supported',
            link: getPetitionURL(trustData.petitionId),
            ...settings.supportPetition.newlySupported.modal
          })
        );
      }
    }).catch((e) => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function supportedPetition (petition) {
  return {
    type: SUPPORTED_PETITION,
    petition
  };
}
