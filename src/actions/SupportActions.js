import settings from 'settings';
import petitionRepository from 'services/api/repositories/petition';
import getPetitionURL from 'helpers/getPetitionURL';
import isUntrustedUser from 'helpers/isUntrustedUser';
import isInvalidVerification from 'helpers/isInvalidVerification';

import {
  SUPPORTED_PETITION
} from './actionTypes';

import { showFlashMessage } from './FlashActions';
import { showModalWindow } from './ModalActions';
import { receiveWhoAmI } from 'actions/AuthActions';

import {
  userIsTrusted,
  userIsUntrusted,
  submittingTrust,
  finishedTrust
} from 'actions/TrustActions';

export function supportPetition (trustData, dispatch) {
  console.log('support', trustData);
  const { petition, user } = trustData;
  // Set trust as submitting
  dispatch(submittingTrust(petition.id));
  // Add submitted user data to me object for future
  dispatch(receiveWhoAmI(user));
  // Trigger support action
  return petitionRepository.support(trustData)
    .then((response) => {
      switch (response.status) {
        case 'ok':
          // Successful support
          supportPetitionSuccess(petition.id, response.data, dispatch);
          break;
        case 'error':
          // Error given
          supportPetitionErrors(response, dispatch);
      }
    }).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

const supportPetitionSuccess = (id, data, dispatch) => {
  // The user is trusted
  dispatch(userIsTrusted());
  // Set petition as supported
  dispatch(supportedPetition(data));
  // Dispatch modal confirmation
  dispatch(
    showModalWindow({
      type: 'share',
      link: getPetitionURL(id),
      ...settings.supportPetition.newlySupported.modal
    })
  );
  // Trust step complete
  dispatch(finishedTrust());
};

const supportPetitionErrors = (response, dispatch) => {
  if (isUntrustedUser(response)) {
    // The user is untrusted
    dispatch(userIsUntrusted());
  } else if (isInvalidVerification(response)) {
    // When the verification code is invalid
    dispatch(showFlashMessage(settings.flashMessages.invalidVerificationError, 'error'));
  } else {
    // All other errors
    dispatch(showFlashMessage(settings.flashMessages.genericError, 'error'));
  }
  // Trust step complete
  dispatch(finishedTrust());
};

export function supportedPetition (petition) {
  return {
    type: SUPPORTED_PETITION,
    petition
  };
}

export function resendVerification (trustData) {
  return (dispatch, getState) => {
    return petitionRepository.support(trustData)
      .then((response) => {
        if (isUntrustedUser(response)) {
          // We have re-sent & verified the code, show success
          dispatch(showFlashMessage(settings.flashMessages.verificationResent, 'success'));
        } else {
          // All other errors
          dispatch(showFlashMessage(settings.flashMessages.genericError, 'error'));
        }
      }).catch(() => dispatch(
        showFlashMessage(settings.flashMessages.genericError, 'error')
      ));
  };
}
