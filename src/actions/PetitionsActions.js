import petitionRepository from 'services/api/repositories/petition';

import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS
} from './actionTypes';

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
