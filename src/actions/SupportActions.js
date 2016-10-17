import petitionRepository from 'services/api/repositories/petition';
import getPetitionURL from 'helpers/getPetitionURL';
import isUntrustedUser from 'helpers/isUntrustedUser';
import isInvalidVerification from 'helpers/isInvalidVerification';
import { receiveWhoAmI } from 'actions/AuthActions';
import {
  userIsTrusted,
  userIsUntrusted,
  submittingTrust,
  finishedTrust
} from 'actions/TrustActions';

import settings from 'settings';

import { SUPPORTED_PETITION } from './actionTypes';

import {
  showFlashMessage
} from './FlashActions';

import {
  showModalWindow
} from './ModalActions';

const supportPetitionSuccess = (id, data, dispatch) => {
  dispatch(userIsTrusted());
  // Set petition as supported
  dispatch(supportedPetition(data));
  // Dispatch modal confirmation
  dispatch(
    showModalWindow({
      type: 'supported',
      link: getPetitionURL(id),
      ...settings.supportPetition.newlySupported.modal
    })
  );
  dispatch(finishedTrust());
};

const supportPetitionErrors = (response, dispatch) => {
  if (isUntrustedUser(response)) {
    // When the user is untrusted
    dispatch(userIsUntrusted());
  } else if (isInvalidVerification(response)) {
    // When the verification code is invalid
    dispatch(showFlashMessage(settings.flashMessages.invalidVerificationError, 'error'));
  } else {
    // All other errors
    dispatch(showFlashMessage(settings.flashMessages.genericError, 'error'));
  }
  dispatch(finishedTrust());
};

export function resendVerification (trustData) {
  return (dispatch, getState) => {
    return petitionRepository.support(trustData)
      .then((response) => {
        if (isUntrustedUser(response)) {
          dispatch(showFlashMessage(settings.flashMessages.verificationResent, 'success'));
        } else {
          // All other errors
          dispatch(showFlashMessage(settings.flashMessages.genericError, 'error'));
        }
      }).catch((e) => dispatch(
        showFlashMessage(settings.flashMessages.genericError, 'error')
      ));
  };
}

export function supportPetition (trustData, dispatch) {
  const { petitionId, user } = trustData;
  // Set trust as submitting
  dispatch(submittingTrust(petitionId));
  // Add submitted user data to me object for future
  dispatch(receiveWhoAmI(user));
  // Trigger support action
  return petitionRepository.support(trustData)
    .then((response) => {
      switch (response.status) {
        case 'ok':
          // Successful support
          supportPetitionSuccess(petitionId, response.data, dispatch);
          break;
        case 'error':
          // Error given
          supportPetitionErrors(response, dispatch);
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
