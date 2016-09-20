import cityRepository from 'services/api/repositories/city';

import {
  UPDATE_CURRENT_CITY,
  CLEAR_CURRENT_CITY
} from './actionTypes';

export function fetchCity ({ params }) {
  const { city } = params;

  return (dispatch) => city
    ? cityRepository.findOne(city)
        .then(response => dispatch(updateCurrentCity(response.data)))
    : dispatch(updateCurrentCity({}));
}

export function updateCurrentCity (currentCity) {
  return {
    type: UPDATE_CURRENT_CITY,
    currentCity
  };
}

export function clearCurrentCity () {
  return {
    type: CLEAR_CURRENT_CITY
  };
}
