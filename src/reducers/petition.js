import { assign } from 'lodash/object';
import {
  RECEIVE_PETITION,
  CREATED_PETITION
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
    default:
      return state;
  }
}
