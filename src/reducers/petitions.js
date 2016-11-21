import { assign } from 'lodash/object';

import {
  REQUEST_PETITIONS,
  REQUEST_GROUPED_PETITIONS,
  RECEIVE_PETITIONS,
  RECEIVE_GROUPED_PETITIONS,
  CLEAR_PETITIONS,
  UPDATE_CURRENT_CITY
} from 'actions/actionTypes';

const initialState = {};

export default function petitions (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PETITIONS:
      return assign({}, state, {
        isLoading: true
      });
    case RECEIVE_PETITIONS:
      return assign({}, state,
        action.petitions, {
          isLoading: false,
          params: action.params || {},
          qs: action.qs || ''
        }
      );
    case REQUEST_GROUPED_PETITIONS:
      if (!action.group) {
        return state;
      }

      return assign({}, state, {
        [action.group]: {
          isLoading: true
        }
      });
    case RECEIVE_GROUPED_PETITIONS:
      if (!action.group) {
        return state;
      }

      return assign({}, state, {
        [action.group]: {
          ...action.petitions,
          params: action.params || {},
          isLoading: false
        }
      });
    case CLEAR_PETITIONS:
      return assign({}, state, {
        data: []
      });
    case UPDATE_CURRENT_CITY:
      return assign({}, state, {
        currentCity: action.currentCity
      });
    default:
      return state;
  }
}
