import {
  REQUEST_PETITION,
  CLEAR_PETITION,
  RECEIVE_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  SUBMIT_PETITION,
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
    case SUPPORTED_PETITION:
      return Object.assign({},
        state, action.petition,
        { isLoading: false }
      );
    case SUBMIT_PETITION:
      return Object.assign({},
        state, action.petition,
        { isLoading: true }
      );
    case PUBLISHED_PETITION:
      return Object.assign({},
        state, action.petition, {
          published: true,
          isLoading: false
        }
      );
    case CLEAR_PETITION:
      return Object.assign({});
    default:
      return state;
  }
}
