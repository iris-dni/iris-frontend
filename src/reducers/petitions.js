import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS
} from 'actions/actionTypes';

const initialState = {};

export default function petitions (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PETITIONS:
      return Object.assign({},
        state, { isLoading: true }
      );
    case RECEIVE_PETITIONS:
      return Object.assign({}, state,
        action.petitions, { isLoading: false }
      );
    default:
      return state;
  }
}
