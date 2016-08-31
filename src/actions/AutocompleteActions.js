import citiesRepository from 'services/api/repositories/city';
import {
  UPDATE_TYPEAHEAD_SEARCH_RESULTS,
  CLEAR_TYPEAHEAD_SEARCH_RESULTS
} from './actionTypes';

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

export function typeaheadSearch (endpoint, query) {
  return (dispatch, getState) => {
    if (query) {
      query = query.trim().toLowerCase();

      if (query.length > 2) {
        let repository;

        // Depending on the endpoint, we can choose the repository we must search
        // into.
        switch (endpoint) {
          case 'cities':
            repository = citiesRepository;
            break;
          default:
            console.warn(`No repository found for endpoint “${endpoint}“)`);
            return;
        }

        return repository.search(query).then(response => dispatch(
            updateSearchResults(response.data)
        ));
      }
    }

    return dispatch(clearSearchResults());
  };
}

