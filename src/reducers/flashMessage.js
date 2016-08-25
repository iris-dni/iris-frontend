import {
  SHOW_FLASH_MESSAGE,
  HIDE_FLASH_MESSAGE
} from 'actions/actionTypes';

const initialState = {};

export default function flashMessage (state = initialState, action) {
  switch (action.type) {
    case SHOW_FLASH_MESSAGE:
      return Object.assign({}, state, {
        text: action.text,
        modifier: action.modifier
      });
    case HIDE_FLASH_MESSAGE:
      return Object.assign({}, state, {
        text: '',
        modifier: ''
      });
    default:
      return state;
  }
}
