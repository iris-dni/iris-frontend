import petitionRepository from 'services/api/repositories/petition';
import {
  REQUEST_PETITION,
  RECEIVE_PETITION,
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
  SUBMIT_PETITION,
  CREATED_PETITION
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

export function fetchPetitions ({ petitions, location, params, perPage, currentPage }) {
  const page = parseInt(location.query.page || 1);
  const limit = parseInt(location.query.limit || 12);

  return (dispatch, getState) => {
    dispatch(requestPetitions());

    if (!petitions || page !== currentPage) {
      const options = {
        page: page || currentPage,
        limit: limit || perPage
      };

      return petitionRepository.all(options)
        .then(response => {
          response.currentPage = options.page;
          response.perPage = options.limit;

          return dispatch(
            receivePetitions(response)
          );
        });
    }
  };
}

export function submitPetition () {
  return {
    type: SUBMIT_PETITION
  };
}

export function createdPetition (id) {
  return {
    type: CREATED_PETITION,
    id
  };
}

export function createPetition (data, dispatch) {
  dispatch(submitPetition());
  return petitionRepository.create(data)
    .then((response) => {
      return dispatch(createdPetition(response.data.data.id));
    });
}
