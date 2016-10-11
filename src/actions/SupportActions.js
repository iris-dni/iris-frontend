import petitionRepository from 'services/api/repositories/petition';
import getPetitionURL from 'helpers/getPetitionURL';
import isTrustedUser from 'helpers/isTrustedUser';
import { receiveWhoAmI } from 'actions/AuthActions';
import {
  userIsTrusted,
  userIsUntrusted,
  submittingTrust
} from 'actions/TrustActions';
import settings from 'settings';

import { SUPPORTED_PETITION } from './actionTypes';

import {
  showFlashMessage
} from './FlashActions';

import {
  showModalWindow
} from './ModalActions';

export function supportPetition (trustData, dispatch) {
  const { petitionId } = trustData;
  // Set trust as submitting
  dispatch(submittingTrust(petitionId));
  // Add submitted user data to me object for future
  dispatch(receiveWhoAmI(trustData.user));
  // Trigger support action
  return petitionRepository.support(trustData)
    .then((response) => {
      if (isTrustedUser(response)) {
        // When the user is trusted
        dispatch(userIsTrusted());
        // Set petition as supported
        dispatch(supportedPetition(response.data));
        // Dispatch modal confirmation
        dispatch(
          showModalWindow({
            type: 'supported',
            link: getPetitionURL(petitionId),
            ...settings.supportPetition.newlySupported.modal
          })
        );
      } else {
        // When the user is untrusted
        dispatch(userIsUntrusted());
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
