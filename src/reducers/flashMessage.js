import { assign } from 'lodash/object';

import {
  SHOW_FLASH_MESSAGE,
  HIDE_FLASH_MESSAGE
} from 'actions/actionTypes';

const initialState = {};

export default function flashMessage (state = initialState, action) {
  switch (action.type) {
    case SHOW_FLASH_MESSAGE:
      return assign({}, state, {
        text: action.text,
        modifier: action.modifier,
        duration: action.duration
      });
    case HIDE_FLASH_MESSAGE:
      return {};
    default:
      return state;
  }
}
