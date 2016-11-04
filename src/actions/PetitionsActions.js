import petitionRepository from 'services/api/repositories/petition';
import getPetitionsQueryParams from 'helpers/getPetitionsQueryParams';
import getPetitionsQueryString from 'helpers/getPetitionsQueryString';

import { fetchCity } from 'actions/CityActions';

import {
  REQUEST_PETITIONS,
  REQUEST_GROUPED_PETITIONS,
  RECEIVE_PETITIONS,
  RECEIVE_GROUPED_PETITIONS,
  CLEAR_PETITIONS
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

  return (dispatch) => {
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

export function fetchPetitionGroup (type = {}) {
  const { query, group } = type;

  // Construct our query params, based on query string
  const queryParams = getPetitionsQueryParams({}, query);

  return (dispatch) => {
    dispatch(requestGroupedPetitions(group));
    return petitionRepository.all(queryParams)
      .then(response => dispatch(receiveGroupedPetitions(
        response,
        queryParams,
        group
      )));
  };
}

export function fetchPetitionGroups (groups = []) {
  return (dispatch) => Promise.all(
    groups.map(group => dispatch(fetchPetitionGroup(group)))
  );
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

export function requestGroupedPetitions (group) {
  return {
    type: REQUEST_GROUPED_PETITIONS,
    group: group
  };
}

export function receiveGroupedPetitions (petitions, params, group) {
  return {
    type: RECEIVE_GROUPED_PETITIONS,
    petitions,
    params,
    group
  };
}

export function clearPetitions () {
  return {
    type: CLEAR_PETITIONS
  };
}
