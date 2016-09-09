import petitionRepository from 'services/api/repositories/petition';
import solveResolvedObjects from 'helpers/solveResolvedObjects';
import settings from 'settings';

import {
  CLEAR_PETITION,
  REQUEST_PETITION,
  RECEIVE_PETITION,
  SUBMITTING_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  PUBLISHED_PETITION
} from './actionTypes';

import {
  showFlashMessage
} from './FlashActions';

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

export function createPetition (petition, dispatch) {
  dispatch(submittingPetition());
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
    petition
  };
}

export function updatePetition (petition, dispatch) {
  dispatch(submittingPetition());
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
    petition
  };
}

export function publishPetition (petition, dispatch) {
  return (dispatch, getState) => {
    dispatch(submittingPetition());
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
