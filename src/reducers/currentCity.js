import {
  UPDATE_CURRENT_CITY,
  CLEAR_CURRENT_CITY
} from 'actions/actionTypes';

const initialState = {};

export default function currentCity (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CURRENT_CITY:
      return Object.assign({}, state, {
        currentCity: action.currentCity
      });
    case CLEAR_CURRENT_CITY:
      return Object.assign({}, state, {
        currentCity: null
      });
    default:
      return state;
  }
}
