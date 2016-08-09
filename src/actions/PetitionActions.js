import petitionRepository from 'services/api/repositories/petition';
import {
  REQUEST_PETITION,
  RECEIVE_PETITION,
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS
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
        receivePetition(response.data.data)
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

export function fetchPetitions ({ petitions, location, params, history, perPage, currentPage }) {
  const page = parseInt(location.query.page || 1);
  const per = parseInt(location.query.per || 12);

  return (dispatch, getState) => {
    dispatch(requestPetitions());

    if (!petitions || page !== currentPage) {
      const options = {
        page: page || currentPage,
        per: per || perPage
      };

      return petitionRepository.all(options)
        .then(response => {
          response.data.currentPage = options.page;
          response.data.perPage = options.per;

          return dispatch(
            receivePetitions(response.data)
          );
        });
    }
  };
}
