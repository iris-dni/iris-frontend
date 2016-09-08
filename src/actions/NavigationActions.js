import {
  TOGGLE_MENU,
  RESET_MENU
} from './actionTypes';

export function toggleMenu () {
  return {
    type: TOGGLE_MENU
  };
}

export function resetMenu () {
  return {
    type: RESET_MENU
  };
}
