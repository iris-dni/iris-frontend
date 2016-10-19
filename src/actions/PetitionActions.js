import settings from 'settings';
import petitionRepository from 'services/api/repositories/petition';
import getPetitionURL from 'helpers/getPetitionURL';
import isUntrustedUser from 'helpers/isUntrustedUser';
import isInvalidVerification from 'helpers/isInvalidVerification';
// import solveResolvedObjects from 'helpers/solveResolvedObjects';
import wrapPetitionLinks from 'helpers/wrapPetitionLinks';

import {
  CLEAR_PETITION,
  REQUEST_PETITION,
  RECEIVE_PETITION,
  SUBMITTING_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  PUBLISHED_PETITION,
  PETITION_NOT_FOUND
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

export function clearPetition () {
  return {
    type: CLEAR_PETITION
  };
}

export function fetchPetition (id) {
  return (dispatch, getState) => {
    dispatch(requestPetition());
    return petitionRepository.find(id)
      .then(response => dispatch(
        receivePetition(response.data)
      ));
  };
}

export function refreshPetition (id) {
  return (dispatch, getState) => {
    return petitionRepository.find(id)
      .then(response => dispatch(
        receivePetition(response.data)
      ));
  };
}

export function requestPetition () {
  return {
    type: REQUEST_PETITION
  };
}

export function receivePetition (petition) {
  // TODO: there might be a better place to transform link data
  petition.links = wrapPetitionLinks(petition.links);
  petition.mentions = wrapPetitionLinks(petition.mentions);

  return {
    type: RECEIVE_PETITION,
    petition
  };
}

export function submittingPetition () {
  return {
    type: SUBMITTING_PETITION
  };
}

export function createPetition (petition, dispatch) {
  dispatch(submittingPetition());
  return petitionRepository.create(petition)
    .then((response) => {
      dispatch(createdPetition(response.data));
    }).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function createdPetition (petition) {
  return {
    type: CREATED_PETITION,
    petition
  };
}

export function updatePetition (updateData, dispatch) {
  const { petition, owner } = updateData;
  // Add submitted user data to me object for future
  dispatch(receiveWhoAmI(owner || {}));
  return petitionRepository.update({ ...petition, owner })
    .then((response) => {
      dispatch(updatedPetition(response.data));
    }).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function updatedPetition (petition) {
  return {
    type: UPDATED_PETITION,
    petition
  };
}

export function publishPetition (trustData) {
  const { petition } = trustData;
  return (dispatch, getState) => {
    // Set trust as submitting
    dispatch(submittingTrust(petition.id));
    // Trigger publish action
    return petitionRepository.publish(trustData)
      .then((response) => {
        switch (response.status) {
          case 'ok':
            // Successful support
            publishPetitionSuccess(petition.id, response.data, dispatch);
            break;
          case 'error':
            // Error given
            publishPetitionErrors(response, dispatch);
        }
      }).catch(() => dispatch(
        showFlashMessage(settings.flashMessages.genericError, 'error')
      ));
  };
}

const publishPetitionSuccess = (id, data, dispatch) => {
  // The user is trusted
  dispatch(userIsTrusted());
  // Set petition as published
  dispatch(publishedPetition(data));
  // Dispatch modal confirmation
  dispatch(
    showModalWindow({
      type: 'share',
      link: getPetitionURL(id),
      ...settings.publishedPetition.modal
    })
  );
  // Trust step complete
  dispatch(finishedTrust());
};

const publishPetitionErrors = (response, dispatch) => {
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
  // Trust step complete
  dispatch(finishedTrust());
};

export function resendVerification (trustData) {
  return (dispatch, getState) => {
    return petitionRepository.publish(trustData)
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

export function publishedPetition (petition) {
  return {
    type: PUBLISHED_PETITION,
    petition
  };
}

export function petitionNotFound (petition = {}) {
  return {
    type: PETITION_NOT_FOUND,
    petition
  };
}
