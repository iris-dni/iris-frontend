import {
  SHOW_AUTH_MODAL,
  SHOW_MODAL_WINDOW,
  HIDE_MODAL_WINDOW
} from './actionTypes';

export function showAuthModal (location) {
  return {
    type: SHOW_AUTH_MODAL,
    location
  };
}

export function showModalWindow (modalType, location) {
  return {
    type: SHOW_MODAL_WINDOW,
    modalType,
    location
  };
}

export function hideModalWindow () {
  return {
    type: HIDE_MODAL_WINDOW
  };
}
