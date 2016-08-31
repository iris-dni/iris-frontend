import citiesRepository from 'services/api/repositories/city';
import {
  UPDATE_SUGGESTIONS,
  CLEAR_SUGGESTIONS
} from './actionTypes';

export function updateSuggestions (suggestions) {
  return {
    type: UPDATE_SUGGESTIONS,
    suggestions
  };
}

export function clearSuggestions () {
  return {
    type: CLEAR_SUGGESTIONS
  };
}

export function typeaheadSearch (endpoint, query) {
  return (dispatch, getState) => {
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
      updateSuggestions(response.data)
    ));
  };
}
