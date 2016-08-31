import {
  UPDATE_SUGGESTIONS,
  CLEAR_SUGGESTIONS
} from 'actions/actionTypes';

const initialState = {};

export default function autocomplete (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SUGGESTIONS:
      return Object.assign({}, state, {
        suggestions: action.suggestions
      });
    case CLEAR_SUGGESTIONS:
      return Object.assign({}, state, {
        suggestions: []
      });
    default:
      return state;
  }
}
