import { assign } from 'lodash/object';

import {
  UPDATE_SUGGESTIONS,
  CLEAR_SUGGESTIONS,
  UPDATE_SUGGESTION_INPUT_VALUE
} from 'actions/actionTypes';

const initialState = {
  suggestions: [],
  value: ''
};

export default function autocomplete (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SUGGESTIONS:
      return assign({}, state, {
        suggestions: action.suggestions
      });
    case CLEAR_SUGGESTIONS:
      return assign({}, state, {
        suggestions: []
      });
    case UPDATE_SUGGESTION_INPUT_VALUE:
      return assign({}, state, {
        value: action.value
      });
    default:
      return state;
  }
}
