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

export function showModalWindow (modalType) {
  return {
    type: SHOW_MODAL_WINDOW,
    modalType
  };
}

export function hideModalWindow () {
  return {
    type: HIDE_MODAL_WINDOW
  };
}
