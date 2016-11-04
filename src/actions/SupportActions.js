import { push } from 'react-router-redux';
import settings from 'settings';
import petitionRepository from 'services/api/repositories/petition';
import getPetitionURL from 'helpers/getPetitionURL';
import isUntrustedUser from 'helpers/isUntrustedUser';
import isInvalidVerification from 'helpers/isInvalidVerification';
import getPetitionPath from 'helpers/getPetitionPath';
import generateShareButtons from 'helpers/sharing/generateShareButtons';

import {
  SUBMITTING_SUPPORT,
  SUPPORTED_PETITION
} from './actionTypes';

import { showFlashMessage } from './FlashActions';
import { showModalWindow } from './ModalActions';
import { receiveWhoAmI } from 'actions/AuthActions';

export function supportPetition (trustData, dispatch) {
  const { petition, user } = trustData;
  // Set loading state
  dispatch(submittingSupport());
  // Add submitted user data to me object for future
  dispatch(receiveWhoAmI(user));
  // Trigger support action
  return petitionRepository.support(trustData)
    .then((response) => {
      switch (response.status) {
        case 'ok':
          // Successful support
          supportPetitionSuccess(petition, response.data, dispatch);
          break;
        case 'error':
          // Error given
          supportPetitionErrors(petition.id, response, dispatch);
      }
      // Set loading state
      dispatch(supportedPetition(response.data));
    }).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

const supportPetitionSuccess = (petition, data, dispatch) => {
  // Change route to petition
  dispatch(push(getPetitionPath(petition.id)));
  // Dispatch modal confirmation
  dispatch(
    showModalWindow({
      type: 'share',
      petitionURL: getPetitionURL(petition.id),
      buttons: generateShareButtons(petition, 'supported')
        .filter(button => button.brand !== 'whatsapp'),
      ...settings.supportPetition.newlySupported.modal
    })
  );
};

const supportPetitionErrors = (id, response, dispatch) => {
  if (isUntrustedUser(response)) {
    // Change route to support trust confirmation
    dispatch(push(`/trust/support/${id}/confirm`));
  } else if (isInvalidVerification(response)) {
    // When the verification code is invalid
    dispatch(showFlashMessage(settings.flashMessages.invalidVerificationError, 'error'));
  } else {
    // All other errors
    dispatch(showFlashMessage(settings.flashMessages.genericError, 'error'));
  }
};

export function submittingSupport () {
  return {
    type: SUBMITTING_SUPPORT
  };
}

export function supportedPetition (petition) {
  return {
    type: SUPPORTED_PETITION,
    petition
  };
}

export function resendVerification (trustData) {
  return (dispatch) => {
    // Set loading state
    dispatch(submittingSupport());
    // Trigger support event
    return petitionRepository.support(trustData)
      .then((response) => {
        if (isUntrustedUser(response)) {
          // We have re-sent & verified the code, show success
          dispatch(showFlashMessage(settings.flashMessages.verificationResent, 'success'));
        } else {
          // All other errors
          dispatch(showFlashMessage(settings.flashMessages.genericError, 'error'));
        }
        // Set loading state
        dispatch(supportedPetition(trustData.petition));
      }).catch(() => dispatch(
        showFlashMessage(settings.flashMessages.genericError, 'error')
      ));
  };
}
