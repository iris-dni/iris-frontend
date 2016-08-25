import authRepository from 'services/api/repositories/auth';
import {
  REQUEST_WHOAMI,
  RECEIVE_WHOAMI,
  REQUEST_LOGOUT,
  RECEIVE_LOGOUT
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
    return authRepository.whoAmI().then(response => dispatch(receiveWhoAmI(
      response.status === 'ok' ? response.data : false
    )));
  };
}

export function requestLogout () {
  return {
    type: REQUEST_LOGOUT
  };
}

export function receiveLogout () {
  return {
    type: RECEIVE_LOGOUT
  };
}

export function logout () {
  return (dispatch, getState) => {
    dispatch(requestLogout());
    return authRepository.logout().then(() => dispatch(receiveLogout()));
  };
}
