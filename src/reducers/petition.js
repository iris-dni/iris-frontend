import {
  RECEIVE_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  PUBLISHED_PETITION,
  SUPPORTED_PETITION
} from 'actions/actionTypes';

const initialState = {};

export default function petition (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PETITION:
    case CREATED_PETITION:
    case UPDATED_PETITION:
    case PUBLISHED_PETITION:
    case SUPPORTED_PETITION:
      return Object.assign({}, state, action.petition);
    default:
      return state;
  }
}
