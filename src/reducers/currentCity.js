import {
  CLEAR_CURRENT_CITY
} from 'actions/actionTypes';

const initialState = {};

export default function currentCity (state = initialState, action) {
  switch (action.type) {
    case CLEAR_CURRENT_CITY:
      return Object.assign({}, state, {
        currentCity: null
      });
    default:
      return state;
  }
}
