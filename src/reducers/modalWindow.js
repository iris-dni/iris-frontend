import { assign } from 'lodash/object';
import getReturnUrlFromLocation from 'helpers/getReturnUrlFromLocation';
import {
  SHOW_MODAL_WINDOW,
  HIDE_MODAL_WINDOW
} from 'actions/actionTypes';

const initialState = {};

export default function modalWindow (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_WINDOW:
      return assign({}, state, {
        ...action.modal,
        active: true,
        hidden: false,
        returnUrl: getReturnUrlFromLocation(action.location || '')
      });
    case HIDE_MODAL_WINDOW:
      return {
        active: false,
        hidden: true
      };
    default:
      return state;
  }
}
