import petitionRepository from 'services/api/repositories/petition';
import encodeParams from 'helpers/encodeParams';
import { pick } from 'lodash/object';

import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS
} from './actionTypes';

export function fetchPetitions ({ location, params }) {
  // Get query from react-router locatiin
  const { query } = location;

  // Construct our query params, based on
  // route params or query string params
  const queryParams = {
    page: parseInt(params && params.page || query.page || 1),
    limit: parseInt(query.limit || 12)
  };

  // Take any query string values and encode them,
  // picking the relavent props for filering
  const queryString = encodeParams(pick(
    query,
    ['page', 'limit']
  ));

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
