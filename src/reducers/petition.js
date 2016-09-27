import {
  REQUEST_PETITION,
  CLEAR_PETITION,
  RECEIVE_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  RESPONDED_TO_PETITION,
  SUBMITTING_PETITION,
  SUBMITTING_SUPPORT,
  PUBLISHED_PETITION,
  SUPPORTED_PETITION,
  PETITION_NOT_FOUND
} from 'actions/actionTypes';

const initialState = { isSubmittable: true };

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
    case SUBMITTING_PETITION:
      return Object.assign({},
        state, action.petition,
        { isLoading: true }
      );
    case SUBMITTING_SUPPORT:
      return Object.assign({},
        state,
        { isSupporting: true }
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
          hasSupported: true,
          isSupporting: false
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
