import authRepository from 'services/api/repositories/auth';
import {
  REQUEST_WHOAMI,
  RECEIVE_WHOAMI
} from './actionTypes';

export function requestWhoAmI () {
  return {
    type: REQUEST_WHOAMI
  };
}

export function receiveWhoAmI (me) {
  return {
    type: RECEIVE_WHOAMI,
    me
  };
}

export function fetchWhoAmI () {
  return (dispatch, getState) => {
    dispatch(requestWhoAmI());
    return authRepository.whoAmI()
      .then(response => dispatch(receiveWhoAmI(
        response.status === 'ok' ? response.data : false
      )));
  };
}
