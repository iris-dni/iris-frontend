import {
  SHOW_FLASH_MESSAGE,
  HIDE_FLASH_MESSAGE
} from './actionTypes';

export function showFlashMessage (text) {
  console.log('SHOW FLASH', text);
  return {
    type: SHOW_FLASH_MESSAGE,
    text
  };
}

export function hideFlashMessage () {
  return {
    type: HIDE_FLASH_MESSAGE
  };
}
