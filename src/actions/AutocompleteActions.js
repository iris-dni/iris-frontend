import citiesRepository from 'services/api/repositories/city';
import {
  UPDATE_TYPEAHEAD_SEARCH_RESULTS
} from './actionTypes';

export function updateSearchResults (results) {
  return {
    type: UPDATE_TYPEAHEAD_SEARCH_RESULTS,
    results
  };
}

export function typeaheadSearch (query) {
  return (dispatch, getState) => {
    if (query && query.length > 2) {
      return citiesRepository.search(query).then(response => dispatch(
        updateSearchResults(response.data)
      ));
    }
  };
}

