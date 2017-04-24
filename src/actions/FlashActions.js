import {
  SHOW_FLASH_MESSAGE,
  HIDE_FLASH_MESSAGE
} from './actionTypes';

export function showFlashMessage (text, modifier, duration) {
  return {
    type: SHOW_FLASH_MESSAGE,
    text,
    modifier,
    duration
  };
}

export function hideFlashMessage () {
  return {
    type: HIDE_FLASH_MESSAGE
  };
}
