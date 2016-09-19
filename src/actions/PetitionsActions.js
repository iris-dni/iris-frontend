import petitionRepository from 'services/api/repositories/petition';
import cityRepository from 'services/api/repositories/city';
import encodeParams from 'helpers/encodeParams';
import { pick } from 'lodash/object';

import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
  UPDATE_CURRENT_CITY
} from './actionTypes';

export function fetchPetitions ({ location, params = {} }) {
  // Get query from react-router location
  const { query } = location;

  // Construct our query params based on route params or query string params
  const queryParams = {
    page: parseInt(params.page || query.page || 1),
    city: params.city || query.city || '',
    cityName: params.cityName || query.cityName || '',
    state: params.state || query.state || '',
    limit: parseInt(query.limit || 12),
    sort: query.sort || ''
  };

  // To avoid repetition between URL params and query params, we don’t save
  // params taken from URL.
  let encodedParams = [];

  for (const key in queryParams) {
    if (query[key]) {
      encodedParams.push(key);
    }
  }

  // Take any query string values and encode them, picking the relevant props
  // for filtering
  const queryString = encodeParams(pick(
    queryParams,
    encodedParams
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

export function fetchCity ({ params }) {
  const { city } = params;

  return (dispatch) => {
    if (city) {
      return cityRepository.findOne(city)
        .then(response => (
          dispatch(updateCurrentCity(response.data))
        ));
    }

    return dispatch(updateCurrentCity(null));
  };
}

export function fetchAll (location, params) {
  return (dispatch) => Promise.all([
    dispatch(fetchPetitions({ location, params })),
    dispatch(fetchCity({ params }))
  ]);
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

export function updateCurrentCity (currentCity) {
  return {
    type: UPDATE_CURRENT_CITY,
    currentCity
  };
}
