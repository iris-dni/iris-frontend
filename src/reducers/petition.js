import {
  REQUEST_PETITION,
  CLEAR_PETITION,
  RECEIVE_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  RESPONDED_TO_PETITION,
  SUBMITTING_PETITION,
  PUBLISHED_PETITION,
  SUPPORTED_PETITION,
  PETITION_NOT_FOUND
} from 'actions/actionTypes';

const initialState = {};

export default function petition (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PETITION:
    case SUBMITTING_PETITION:
      return Object.assign({},
        state, {
          isLoading: true
        }
      );
    case CREATED_PETITION:
    case UPDATED_PETITION:
    case RESPONDED_TO_PETITION:
    case PUBLISHED_PETITION:
    case SUPPORTED_PETITION:
      return Object.assign({},
        state, action.petition, {
          isLoading: false
        }
      );
    case RECEIVE_PETITION:
      return Object.assign({},
        state, action.petition, {
          isLoading: false,
          found: true
        }
      );
    case PETITION_NOT_FOUND:
      return Object.assign({},
        state, initialState, {
          isLoading: false,
          found: false
        }
      );
    case CLEAR_PETITION:
      return Object.assign({});
    default:
      return state;
  }
}
