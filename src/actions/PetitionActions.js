import axios from 'axios';
import {
  REQUEST_PETITION, RECEIVE_PETITION
} from './actionTypes';

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

export function fetchPetition () {
  return (dispatch, getState) => {
    dispatch(requestPetition());
    return axios.get('http://api-iris-dev.lovelysystems.com/v1/petitions/2')
      .then((res) => {
        return dispatch(receivePetition(res.data.data));
      });
  };
}
