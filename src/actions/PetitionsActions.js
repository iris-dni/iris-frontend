import petitionRepository from 'services/api/repositories/petition';
import cityRepository from 'services/api/repositories/city';
import getPetitionsQueryParams from 'helpers/getPetitionsQueryParams';
import getPetitionsQueryString from 'helpers/getPetitionsQueryString';

import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
  UPDATE_CURRENT_CITY
} from './actionTypes';

export function fetchPetitions ({ location, params }) {
  // Get query from react-router location
  const { query } = location;

  // Construct our query params, based on
  // route params or query string params
  const queryParams = getPetitionsQueryParams(params, query);

  // Take any query string values and encode them,
  // picking the relavent props for filering
  const queryString = getPetitionsQueryString(query);

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

export function fetchPetitionsAndCity ({ location, params }) {
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

export function fetchCity ({ params }) {
  const { city } = params || {};

  return (dispatch) => city
    ? cityRepository.findOne(city)
        .then(response => dispatch(updateCurrentCity(response.data)))
    : dispatch(updateCurrentCity({}));
}

export function updateCurrentCity (currentCity) {
  return {
    type: UPDATE_CURRENT_CITY,
    currentCity
  };
}
