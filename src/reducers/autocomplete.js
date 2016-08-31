import {
  UPDATE_TYPEAHEAD_SEARCH_RESULTS,
  CLEAR_TYPEAHEAD_SEARCH_RESULTS
} from 'actions/actionTypes';

const initialState = {};

export default function autocomplete (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TYPEAHEAD_SEARCH_RESULTS:
      return Object.assign({}, state, {
        results: action.results
      });
    case CLEAR_TYPEAHEAD_SEARCH_RESULTS:
      return Object.assign({}, state, {
        results: []
      });
    default:
      return state;
  }
}
