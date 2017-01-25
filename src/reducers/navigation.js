import { assign } from 'lodash/object';

import {
  TOGGLE_MOBILE_MENU,
  CLOSE_MOBILE_MENU,
  DESTROY_MOBILE_MENU
} from 'actions/actionTypes';

const initialState = {
  opened: false,
  wasOpened: false
};

export default function navigation (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return assign({}, state, {
        opened: !state.opened,
        wasOpened: true
      });

    case CLOSE_MOBILE_MENU:
      return assign({}, state, {
        opened: false
      });

    case DESTROY_MOBILE_MENU:
      return assign({}, state, initialState);

    default:
      return state;
  }
}
