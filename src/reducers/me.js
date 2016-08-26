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
      return Object.assign({}, state, {
        isLoading: true
      });
    case REQUEST_LOGOUT:
      return Object.assign({}, state, {
        isLoading: true
      });
    case RECEIVE_WHOAMI:
      return action.me && Object.assign({}, state, action.me, {
        isLoading: false
      });
    case RECEIVE_LOGOUT:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
