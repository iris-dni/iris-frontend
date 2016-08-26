import {
  SHOW_AUTH_MODAL,
  SHOW_MODAL_WINDOW,
  HIDE_MODAL_WINDOW
} from 'actions/actionTypes';

const initialState = {};

export default function modalWindow (state = initialState, action) {
  switch (action.type) {
    case SHOW_AUTH_MODAL:
      const { pathname, search } = action.location;
      return Object.assign({}, state, {
        type: 'auth',
        active: true,
        hidden: false,
        location: {
          pathname,
          search
        }
      });
    case SHOW_MODAL_WINDOW:
      return Object.assign({}, state, {
        type: action.modalType,
        active: true,
        hidden: false
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
