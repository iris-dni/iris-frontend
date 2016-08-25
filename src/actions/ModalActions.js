import {
  SHOW_MODAL_WINDOW,
  HIDE_MODAL_WINDOW
} from './actionTypes';

export function showModalWindow () {
  return {
    type: SHOW_MODAL_WINDOW
  };
}

export function hideModalWindow () {
  return {
    type: HIDE_MODAL_WINDOW
  };
}
