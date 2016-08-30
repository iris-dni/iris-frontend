import {
  SHOW_MODAL_WINDOW,
  HIDE_MODAL_WINDOW
} from './actionTypes';

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
