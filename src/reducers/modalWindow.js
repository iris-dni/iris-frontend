import { ssoProviders } from 'settings';
import {
  SHOW_MODAL_WINDOW,
  HIDE_MODAL_WINDOW
} from 'actions/actionTypes';

const initialState = {};

export default function modalWindow (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_WINDOW:
      return Object.assign({}, state, {
        // TODO:
        // 1. clean this up
        // 2. get location from client
        type: 'authentication',
        active: true,
        hidden: false,
        location: { pathname: '/petitions/new' },
        ssoProviders
      });
    case HIDE_MODAL_WINDOW:
      return Object.assign({}, state, {
        active: false,
        hidden: true
      });
    default:
      return state;
  }
}
