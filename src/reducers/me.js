import { assign } from 'lodash/object';

import {
  REQUEST_WHOAMI,
  RECEIVE_WHOAMI,
  REQUEST_LOGOUT,
  RECEIVE_LOGOUT
} from 'actions/actionTypes';

const initialState = false;

export default function me (state = initialState, action) {
  switch (action.type) {
    case REQUEST_WHOAMI:
      return assign({}, state, {
        isLoading: true
      });
    case RECEIVE_WHOAMI:
      return action.me && assign({}, state, action.me, {
        isLoading: false
      });
    case REQUEST_LOGOUT:
      return assign({}, state, {
        isLoading: true
      });
    case RECEIVE_LOGOUT:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
