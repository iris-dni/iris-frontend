import {
  REQUEST_PETITION,
  RECEIVE_PETITION,
  PETITION_NOT_FOUND,
  RESPONDED_TO_PETITION
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
    case PETITION_NOT_FOUND:
      return Object.assign({},
        state, initialState, {
          token: action.petition.token,
          isLoading: false,
          saved: false
        }
      );
    case RESPONDED_TO_PETITION:
      return Object.assign({},
        state, initialState, {
          petitionId: action.petition.id,
          answer: action.petition.city_answer,
          token: action.petition.token,
          isLoading: false,
          saved: true
        }
      );
    default:
      return state;
  }
}
