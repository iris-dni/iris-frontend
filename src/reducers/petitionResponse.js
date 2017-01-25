import { assign } from 'lodash/object';

import {
  REQUEST_PETITION,
  RECEIVE_PETITION,
  PETITION_NOT_FOUND,
  RESPONDED_TO_PETITION,
  SUBMITTING_PETITION_RESPONSE
} from 'actions/actionTypes';

const initialState = {};

export default function petitionResponse (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PETITION:
    case SUBMITTING_PETITION_RESPONSE:
      return assign({},
        state,
        { isLoading: true }
      );
    case RECEIVE_PETITION:
      return assign({},
        state, initialState, {
          petitionId: action.petition.id,
          answer: action.petition.city_answer,
          token: action.petition.token,
          isLoading: false,
          saved: false
        }
      );
    case PETITION_NOT_FOUND:
      return assign({},
        state, initialState, {
          token: action.petition.token,
          isLoading: false,
          saved: false
        }
      );
    case RESPONDED_TO_PETITION:
      return assign({},
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
