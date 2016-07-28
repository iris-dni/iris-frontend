import {
  RECEIVE_PETITION
} from 'actions/actionTypes';

const initialState = {};

export default function petition (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PETITION:
      state.petition = action.petition;
      return state.petition;
    default:
      return state;
  }
}
