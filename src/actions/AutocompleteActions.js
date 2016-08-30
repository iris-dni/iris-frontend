import citiesRepository from 'services/api/repositories/city';
import {
  UPDATE_TYPEAHEAD_SEARCH_RESULTS,
  CLEAR_TYPEAHEAD_SEARCH_RESULTS,
  TOGGLE_TYPEAHEAD_OPENING
} from './actionTypes';

// Sadly, the react-typeahead module doesn‘t expose a way to detect if the
// list is open or not, so we have to do manually toggle a class instead.
export function toggleTypeaheadOpening (isOpen) {
  return {
    type: TOGGLE_TYPEAHEAD_OPENING,
    isOpen: Boolean(isOpen)
  };
}

export function updateSearchResults (results) {
  return {
    type: UPDATE_TYPEAHEAD_SEARCH_RESULTS,
    results
  };
}

export function clearSearchResults () {
  return {
    type: CLEAR_TYPEAHEAD_SEARCH_RESULTS
  };
}

export function typeaheadSearch (query) {
  return (dispatch, getState) => {
    if (query && query.length > 2) {
      return citiesRepository.search(query).then(response => {
        const results = response.data;

        dispatch(toggleTypeaheadOpening(results.length));
        dispatch(updateSearchResults(results));
      });
    } else {
      dispatch(toggleTypeaheadOpening(false));
      dispatch(clearSearchResults());
    }
  };
}

