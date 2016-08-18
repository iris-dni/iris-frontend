import { RECEIVE_WHOAMI } from 'actions/actionTypes';

const initialState = false;

export default function me (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_WHOAMI:
      return action.me && Object.assign({}, state, action.me);
    default:
      return state;
  }
}
