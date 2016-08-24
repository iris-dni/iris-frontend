import { assign } from 'lodash/object';
import {
  RECEIVE_WHOAMI,
  RECEIVE_LOGOUT
} from 'actions/actionTypes';

const initialState = false;

export default function me (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_WHOAMI:
      return action.me && assign({}, state, action.me);
    case RECEIVE_LOGOUT:
      return false;
    default:
      return state;
  }
}
