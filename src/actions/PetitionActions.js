import petitionRepository from 'services/api/repositories/petition';
import getSupportedPetitionModal from 'helpers/getSupportedPetitionModal';
import settings from 'settings';
import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
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
  showFlashMessage,
  hideFlashMessage
} from './FlashActions';

import {
  showModalWindow
} from './ModalActions';

export function fetchPetitions ({ petitions, location, perPage, currentPage }) {
  const page = parseInt(location.query.page || currentPage || 1);
  const limit = parseInt(location.query.limit || perPage || 12);

  return (dispatch, getState) => {
    dispatch(requestPetitions());

    if (!petitions || !petitions.length || page !== currentPage) {
      const options = { page, limit };

      return petitionRepository.all(options)
        .then(response => {
          const pagedResponse = Object.assign({}, response, {
            currentPage: options.page,
            perPage: options.limit
          });

          return dispatch(receivePetitions(pagedResponse));
        });
    }
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
    petition: {...petition, saved: true}
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
    petition: {...petition, saved: true}
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

export function supportPetition (petition, dispatch) {
  return (dispatch, getState) => {
    dispatch(submitPetition());
    return petitionRepository.support(petition)
      .then((response) => {
        // Get stuff we usually `resolve` via the endpoint
        const { city, owner } = petition;
        // Do this here because API does not support the
        // `resolve` param on the `event/support` endpoint
        const resolvedPetition = Object.assign({}, response.data, { city, owner });
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
