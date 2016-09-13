import {
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS,
  GET_CITY,
  UPDATE_CITY_FILTER_VALUE
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
    case GET_CITY:
      return Object.assign({}, state, {
        city: action.city
      });
    case UPDATE_CITY_FILTER_VALUE:
      return Object.assign({}, state, {
        cityFilterValue: action.filterValue
      });
    default:
      return state;
  }
}
