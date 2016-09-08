import {
  TOGGLE_MENU,
  RESET_MENU
} from 'actions/actionTypes';

const initialState = {
  opened: false,
  wasOpened: false
};

export default function navigation (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        opened: !state.opened,
        wasOpened: true
      });

    case RESET_MENU:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}
