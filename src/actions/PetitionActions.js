import petitionRepository from 'services/api/repositories/petition';
import getSupportedPetitionModal from 'helpers/getSupportedPetitionModal';
import solveResolvedObjects from 'helpers/solveResolvedObjects';
import settings from 'settings';

import {
  CLEAR_PETITION,
  REQUEST_PETITION,
  RECEIVE_PETITION,
  SUBMIT_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  PUBLISHED_PETITION,
  SUPPORTED_PETITION
} from './actionTypes';

import {
  showFlashMessage
} from './FlashActions';

import {
  showModalWindow
} from './ModalActions';

export function clearPetition () {
  return {
    type: CLEAR_PETITION,
    petition: null
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

export function requestPetition () {
  return {
    type: REQUEST_PETITION
  };
}

export function receivePetition (petition) {
  return {
    type: RECEIVE_PETITION,
    petition: {...petition, saved: false}
  };
}

export function submitPetition () {
  return {
    type: SUBMIT_PETITION
  };
}

export function createPetition (petition, dispatch) {
  dispatch(submitPetition());
  return petitionRepository.create(petition)
    .then((response) => {
      const resolvedPetition = solveResolvedObjects(petition, response.data);
      dispatch(createdPetition(resolvedPetition));
    }).then(() => dispatch(
      showFlashMessage(settings.flashMessages.petitionCreated, 'success')
    )).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function createdPetition (petition) {
  return {
    type: CREATED_PETITION,
    petition: {...petition, saved: true}
  };
}

export function updatePetition (petition, dispatch) {
  dispatch(submitPetition());
  return petitionRepository.update(petition)
    .then((response) => {
      const resolvedPetition = solveResolvedObjects(petition, response.data);
      dispatch(updatedPetition(resolvedPetition));
    }).then(() => dispatch(
      showFlashMessage(settings.flashMessages.petitionUpdated, 'success')
    )).catch(() => dispatch(
      showFlashMessage(settings.flashMessages.genericError, 'error')
    ));
}

export function updatedPetition (petition) {
  return {
    type: UPDATED_PETITION,
    petition: {...petition, saved: true}
  };
}

export function publishPetition (petition, dispatch) {
  return (dispatch, getState) => {
    dispatch(submitPetition());
    return petitionRepository.publish(petition)
      .then((response) => {
        const resolvedPetition = solveResolvedObjects(petition, response.data);
        return dispatch(publishedPetition(resolvedPetition));
      }).then(() => dispatch(
        showFlashMessage(settings.flashMessages.petitionPublished, 'success')
      )).catch(() => dispatch(
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

export function supportPetition (petition, dispatch) {
  return (dispatch, getState) => {
    dispatch(submitPetition());
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
