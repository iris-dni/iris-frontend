import {
  RECEIVE_PETITION
} from 'actions/actionTypes';

const initialState = {};

export default function petition (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PETITION:
      return Object.assign({}, state, action.petition);
    default:
      return state;
  }
}
