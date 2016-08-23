import { assign } from 'lodash/object';
import {
  RECEIVE_PETITION,
  CREATED_PETITION,
  UPDATED_PETITION,
  PUBLISHED_PETITION
} from 'actions/actionTypes';

const initialState = {};

export default function petition (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PETITION:
      return assign({}, state, action.petition);
    case CREATED_PETITION:
      return assign({}, state, {
        createdPetition: action.id
      });
    case UPDATED_PETITION:
      return assign({}, state, {
        formData: action.data
      });
    case PUBLISH_PETITION:
      return assign({}, state, {
        publishedId: action.data.id
      });
    default:
      return state;
  }
}
