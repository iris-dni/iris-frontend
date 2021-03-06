import {
  TOGGLE_MOBILE_MENU,
  CLOSE_MOBILE_MENU,
  DESTROY_MOBILE_MENU
} from './actionTypes';

export function toggleMobileMenu () {
  return {
    type: TOGGLE_MOBILE_MENU
  };
}

export function closeMobileMenu () {
  return {
    type: CLOSE_MOBILE_MENU
  };
}

export function destroyMobileMenu () {
  return {
    type: DESTROY_MOBILE_MENU
  };
}
