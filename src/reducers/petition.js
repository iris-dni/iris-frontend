import {
  REQUEST_PETITION,
  CLEAR_PETITION,
  RECEIVE_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  SUBMITTING_PETITION,
  SUBMITTING_SUPPORT,
  PUBLISHED_PETITION,
  SUPPORTED_PETITION
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
          saved: false
        }
      );
    case CREATED_PETITION:
    case UPDATED_PETITION:
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
    case CLEAR_PETITION:
      return Object.assign({});
    default:
      return state;
  }
}
