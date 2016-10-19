import {
  REQUEST_PETITION,
  CLEAR_PETITION,
  RECEIVE_PETITION,
  CREATED_PETITION,
  UPDATING_PETITION,
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
      return Object.assign({},
        state,
        { isLoading: true }
      );
    case RECEIVE_PETITION:
      return Object.assign({},
        state, action.petition, {
          isLoading: false,
          saved: false,
          found: true
        }
      );
    case CREATED_PETITION:
    case UPDATED_PETITION:
    case RESPONDED_TO_PETITION:
      return Object.assign({},
        state, action.petition, {
          isLoading: false,
          saved: true
        }
      );
    case UPDATING_PETITION:
      return Object.assign({},
        state, action.petition, {
          saved: false
        }
      );
    case SUBMITTING_PETITION:
      return Object.assign({},
        state, {
          isLoading: true
        }
      );
    case PUBLISHED_PETITION:
      return Object.assign({},
        state, action.petition, {
          hasPublished: true,
          isLoading: false
        }
      );
    case SUPPORTED_PETITION:
      return Object.assign({},
        state, action.petition, {
          hasSupported: true
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
