import Repositories from 'services/api/repositories/';
import {
  UPDATE_SUGGESTIONS,
  CLEAR_SUGGESTIONS,
  UPDATE_SUGGESTION_INPUT_VALUE
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

export function updateSuggestionInputValue (value) {
  return {
    type: UPDATE_SUGGESTION_INPUT_VALUE,
    value
  };
}

export function typeaheadSearch (endpoint, query, limit) {
  return (dispatch, getState) => {
    const repository = Repositories[endpoint];

    if (repository) {
      return repository.search(query, limit).then(response => {
        dispatch(updateSuggestions(response.data));
      });
    }

    return console.warn(`No repository found for endpoint “${endpoint}“)`);
  };
}
