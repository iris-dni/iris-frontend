import petitionRepository from 'services/api/repositories/petition';
import { assign } from 'lodash/object';

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
    .then((response) => {
      return dispatch(createdPetition(response.data));
    });
}

export function createdPetition (data) {
  return {
    type: CREATED_PETITION,
    data
  };
}

export function updatePetition (data, dispatch) {
  dispatch(submitPetition());
  console.log('UPDATE');
  console.log(data);
  console.log(dispatch);
  return petitionRepository.update(data)
    .then((response) => {
      return dispatch(updatedPetition(response.data));
    });
}

export function updatedPetition (data) {
  return {
    type: UPDATED_PETITION,
    data
  };
}

export function publishPetition (id) {
  console.log('PETITION PUBLISH');
  return (dispatch, getState) => {
    dispatch(submitPetition());
    console.log('PETITION PUBLISH2');
    return petitionRepository.publish(id)
      .then((response) => {
        return dispatch(publishedPetition(response.data));
      });
  };
}

export function publishedPetition (data) {
  return {
    type: PUBLISHED_PETITION,
    data
  };
}
