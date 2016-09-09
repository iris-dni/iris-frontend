import petitionRepository from 'services/api/repositories/petition';

import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS
} from './actionTypes';

export function fetchPetitions ({
  petitions,
  location,
  params,
  currentPage
}) {
  const queryParams = {
    page: parseInt(params && params.page || 1),
    limit: parseInt(location.query.limit || 12)
  };

  return (dispatch, getState) => {
    dispatch(requestPetitions());
    return petitionRepository.all(queryParams)
      .then(response => dispatch(
        receivePetitions(response)
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
