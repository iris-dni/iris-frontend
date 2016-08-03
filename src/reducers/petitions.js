import {
  RECEIVE_PETITIONS
} from 'actions/actionTypes';

const initialState = {};

export default function petitions (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PETITIONS:
      state.petitions = action.petitions;
      return state.petitions;
    default:
      return state;
  }
}
