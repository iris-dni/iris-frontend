import petitionRepository from 'services/api/repositories/petition';
import cityRepository from 'services/api/repositories/city';
import encodeParams from 'helpers/encodeParams';
import { pick } from 'lodash/object';

import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
  UPDATE_CURRENT_CITY
} from './actionTypes';

export function fetchPetitions ({ location, params }) {
  // Get query from react-router locatiin
  const { query } = location;

  // Construct our query params, based on
  // route params or query string params
  const queryParams = {
    page: parseInt(params && params.page || query.page || 1),
    city: params && params.city || query.city || '',
    cityName: params && params.cityName || query.cityName || '',
    state: params && params.state || query.state || '',
    limit: parseInt(query.limit || 12),
    sort: params && params.sort || query.sort || ''
  };

  // Take any query string values and encode them,
  // picking the relavent props for filering
  const queryString = encodeParams(pick(
    queryParams,
    ['page', 'city', 'state', 'limit', 'sort']
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
