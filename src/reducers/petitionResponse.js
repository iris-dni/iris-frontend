import {
  REQUEST_PETITION,
  RECEIVE_PETITION
} from 'actions/actionTypes';

const initialState = {};

export default function petitionResponse (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PETITION:
      return Object.assign({},
        state,
        { isLoading: true }
      );
    case RECEIVE_PETITION:
      return Object.assign({},
        state, initialState, {
          petitionId: action.petition.id,
          answer: action.petition.city_answer,
          token: action.petition.token,
          isLoading: false,
          saved: false
        }
      );
    default:
      return state;
  }
}
