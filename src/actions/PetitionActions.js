import { push } from 'react-router-redux';
import settings from 'settings';
import petitionRepository from 'services/api/repositories/petition';
import getPetitionURL from 'helpers/getPetitionURL';
import isUntrustedUser from 'helpers/isUntrustedUser';
import isInvalidVerification from 'helpers/isInvalidVerification';
import hasValidPublishUserData from 'helpers/hasValidPublishUserData';
import getPetitionPath from 'helpers/getPetitionPath';
import generateShareButtons from 'helpers/sharing/generateShareButtons';

import {
  CLEAR_PETITION,
  REQUEST_PETITION,
  RECEIVE_PETITION,
  SUBMITTING_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  PUBLISHED_PETITION,
  PETITION_NOT_FOUND,
  PETITION_CITY_ANSWER_ALREADY_SUBMITTED
} from './actionTypes';

import { showFlashMessage } from './FlashActions';
import { showModalWindow } from './ModalActions';
import { receiveWhoAmI } from 'actions/AuthActions';

export function clearPetition () {
  return {
    type: CLEAR_PETITION
  };
}

export function fetchPetition (id) {
  return (dispatch) => {
    dispatch(requestPetition());
    return petitionRepository.find(id)
      .then(response => dispatch(
        receivePetition(response.data)
      ));
  };
}

export function refreshPetition (id) {
  return (dispatch) => {
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

export function createdPetition (petition) {
  return {
    type: CREATED_PETITION,
    petition
  };
}

export function updatedPetition (petition) {
  return {
    type: UPDATED_PETITION,
    petition
  };
}

export function createPetition (petition, dispatch) {
  // Set loading state
  dispatch(submittingPetition());
  // Trigger create action
  return petitionRepository.create(petition)
    .then((response) => {
      // Change route to publish trust
      dispatch(push(`/trust/publish/${response.data.id}`));
      // Set petition as created
      dispatch(createdPetition(response.data));
    }).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function updatePetition (updateData, dispatch) {
  const { petition, owner } = updateData;
  // Add submitted user data to me object for future
  dispatch(receiveWhoAmI(owner || {}));
  // Trigger update action
  return petitionRepository.update({ ...petition, owner })
    .then((response) => {
      // If petition is owned
      if (hasValidPublishUserData(response.data.owner)) {
        // Change route to petition preview
        dispatch(push(`/petitions/${response.data.id}/preview`));
      } else {
        // Change route to publish trust
        dispatch(push(`/trust/publish/${response.data.id}`));
      }
      // Set petition as updated
      dispatch(updatedPetition(response.data));
    }).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function publishPetition (trustData) {
  const { petition } = trustData;

  return (dispatch) => {
    // Set loading state
    dispatch(submittingPetition());
    // Trigger publish action
    return petitionRepository.publish(trustData)
      .then((response) => {
        switch (response.status) {
          case 'ok':
            // Successful support
            publishPetitionSuccess(petition, response.data, dispatch);
            break;
          case 'error':
            // Error given
            publishPetitionErrors(petition.id, response, dispatch);
        }
        // Set petition as published
        dispatch(publishedPetition(response.data));
      }).catch(() => dispatch(
        showFlashMessage(settings.flashMessages.genericError, 'error')
      ));
  };
}

const publishPetitionSuccess = (petition, data, dispatch) => {
  // Change route to petition
  dispatch(push(getPetitionPath(petition.id)));
  // Dispatch modal confirmation
  dispatch(
    showModalWindow({
      type: 'share',
      petitionURL: getPetitionURL(petition.id),
      buttons: generateShareButtons(petition, 'published')
        .filter(button => button.brand !== 'whatsapp'),
      ...settings.publishedPetition.modal
    })
  );
};

const publishPetitionErrors = (id, response, dispatch) => {
  if (isUntrustedUser(response)) {
    // Change route to publish trust confirmation
    dispatch(push(`/trust/publish/${id}/confirm`));
  } else if (isInvalidVerification(response)) {
    // When the verification code is invalid
    dispatch(showFlashMessage(settings.flashMessages.invalidVerificationError, 'error'));
  } else {
    // All other errors
    dispatch(showFlashMessage(settings.flashMessages.genericError, 'error'));
  }
};

export function resendVerification (trustData) {
  return (dispatch) => {
    // Set loading state
    dispatch(submittingPetition());
    // Trigger publish event
    return petitionRepository.publish(trustData)
      .then((response) => {
        if (isUntrustedUser(response)) {
          // We have re-sent & verified the code, show success
          dispatch(showFlashMessage(settings.flashMessages.verificationResent, 'success'));
        } else {
          // All other errors
          dispatch(showFlashMessage(settings.flashMessages.genericError, 'error'));
        }
        // Set petition as published
        dispatch(publishedPetition(response.data));
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

export function petitionCityAnswerAlreadySubmitted (petition = {}) {
  return {
    type: PETITION_CITY_ANSWER_ALREADY_SUBMITTED,
    petition
  };
}
