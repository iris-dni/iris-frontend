import {
  UPDATE_SUGGESTIONS,
  CLEAR_SUGGESTIONS,
  UPDATE_SUGGESTION_INPUT_VALUE
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
    case UPDATE_SUGGESTION_INPUT_VALUE:
      return Object.assign({}, state, {
        value: action.value
      });
    default:
      return state;
  }
}
