import { assign } from 'lodash/object';
import {
  RECEIVE_PETITIONS
} from 'actions/actionTypes';

const initialState = {};

export default function petitions (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PETITIONS:
      return assign({}, state, action.petitions);
    default:
      return state;
  }
}
