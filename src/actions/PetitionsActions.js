import petitionRepository from 'services/api/repositories/petition';
import getPetitionsQueryParams from 'helpers/getPetitionsQueryParams';
import getPetitionsQueryString from 'helpers/getPetitionsQueryString';
import getHomePagePetitionsQuery from 'helpers/getHomePagePetitionsQuery';

import { fetchCity } from 'actions/CityActions';

import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
  CLEAR_PETITIONS
} from './actionTypes';

export function fetchPetitions ({ location, params }, group) {
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
        queryString,
        group
      )));
  };
}

export function fetchGroupedPetitions (props = {}, groups = []) {
  const sortQuery = getHomePagePetitionsQuery();
  const location = Object.assign({}, props.location, sortQuery);

  return (dispatch) => {
    const groupDispatches = groups.map(group =>
      dispatch(fetchPetitions({ location }, group)));

    return Promise.all(groupDispatches);
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

export function receivePetitions (petitions, params, qs, group) {
  const groupedPetitions = group
    ? { [group]: petitions }
    : petitions;

  return {
    type: RECEIVE_PETITIONS,
    petitions: groupedPetitions,
    params,
    qs
  };
}

export function clearPetitions () {
  return {
    type: CLEAR_PETITIONS
  };
}
