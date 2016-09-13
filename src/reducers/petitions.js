import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
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
          totalCount: action.petitions.total,
          params: action.params || {},
          qs: action.qs || ''
        }
      );
    case UPDATE_CURRENT_CITY:
      return Object.assign({}, state, {
        currentCity: action.currentCity
      });
    default:
      return state;
  }
}
