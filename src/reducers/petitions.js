import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
  CLEAR_PETITIONS,
  UPDATE_CURRENT_CITY
} from 'actions/actionTypes';

const initialState = {};

export default function petitions (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PETITIONS:
      return Object.assign({},
        state,
        { isLoading: true }
      );
    case RECEIVE_PETITIONS:
      return Object.assign({}, state,
        action.petitions, {
          isLoading: false,
          params: action.params || {},
          qs: action.qs || ''
        }
      );
    case CLEAR_PETITIONS:
      return Object.assign({}, state, {
        data: []
      });
    case UPDATE_CURRENT_CITY:
      return Object.assign({}, state, {
        currentCity: action.currentCity
      });
    default:
      return state;
  }
}
