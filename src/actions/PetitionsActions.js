import petitionRepository from 'services/api/repositories/petition';
import encodeParams from 'helpers/encodeParams';

import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS
} from './actionTypes';

export function fetchPetitions ({ location, params }) {
  // Construct our query params, based on
  // route params or query string params
  const queryParams = {
    page: parseInt(params && params.page || location.query.page || 1),
    limit: parseInt(location.query.limit || 12)
  };

  const queryString = encodeParams(location.query);

  return (dispatch, getState) => {
    dispatch(requestPetitions());
    return petitionRepository.all(queryParams)
      .then(response => dispatch(receivePetitions(
        response,
        queryParams,
        queryString
      )));
  };
}

export function requestPetitions () {
  return {
    type: REQUEST_PETITIONS
  };
}

export function receivePetitions (petitions, params, qs) {
  return {
    type: RECEIVE_PETITIONS,
    petitions,
    params,
    qs
  };
}
