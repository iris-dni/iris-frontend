import petitionRepository from 'services/api/repositories/petition';
import { assign } from 'lodash/object';
import settings from 'settings';
import {
  REQUEST_PETITION,
  RECEIVE_PETITION,
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
  SUBMIT_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  PUBLISHED_PETITION
} from './actionTypes';

import {
  showFlashMessage,
  hideFlashMessage
} from './FlashActions';

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

export function fetchPetition (id) {
  return (dispatch, getState) => {
    dispatch(requestPetition());
    return petitionRepository.find(id)
      .then(response => dispatch(
        receivePetition(response.data)
      ));
  };
}

export function requestPetitions () {
  return {
    type: REQUEST_PETITIONS
  };
}

export function receivePetitions (petitions) {
  return {
    type: RECEIVE_PETITIONS,
    petitions
  };
}

export function fetchPetitions ({ petitions, location, perPage, currentPage }) {
  const page = parseInt(location.query.page || currentPage || 1);
  const limit = parseInt(location.query.limit || perPage || 12);

  return (dispatch, getState) => {
    dispatch(requestPetitions());

    if (!petitions || !petitions.length || page !== currentPage) {
      const options = { page, limit };

      return petitionRepository.all(options)
        .then(response => {
          const pagedResponse = assign({}, response, {
            currentPage: options.page,
            perPage: options.limit
          });

          return dispatch(receivePetitions(pagedResponse));
        });
    }
  };
}

export function submitPetition () {
  return {
    type: SUBMIT_PETITION
  };
}

export function createPetition (data, dispatch) {
  dispatch(submitPetition());
  return petitionRepository.create(data)
    .then((response) => dispatch(
      createdPetition(response.data),
    )).then(() => dispatch(
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

export function updatePetition (data, dispatch) {
  dispatch(submitPetition());
  return petitionRepository.update(data)
    .then((response) => dispatch(
      updatedPetition(response.data),
    )).then(() => dispatch(
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
    dispatch(submitPetition());
    return petitionRepository.publish(petition)
      .then((response) => dispatch(
        publishedPetition(response.data),
      )).then(() => dispatch(
        hideFlashMessage()
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
