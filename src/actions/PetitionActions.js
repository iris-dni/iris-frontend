import axios from 'axios';
import {
  REQUEST_PETITION,
  RECEIVE_PETITION
} from './actionTypes';
import repository from 'services/api/repositories/petition'

export function requestPetition () {
  return {
    type: REQUEST_PETITION
  };
}

export function receivePetition (petition) {
  return {
    type: RECEIVE_PETITION,
    petition
  };
}

export function fetchPetition (id) {
  return (dispatch, getState) => {
    dispatch(requestPetition());
    return repository.find(id)
      .then((res) => {
        return dispatch(receivePetition(res.data.data));
      });
  };
}
