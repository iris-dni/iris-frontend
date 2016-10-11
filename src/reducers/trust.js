import {
  SUBMITTING_TRUST,
  USER_IS_TRUSTED,
  USER_IS_UNTRUSTED
} from 'actions/actionTypes';

const initialState = {
  isSubmitting: false,
  isTrustedUser: false
};

export default function trust (state = initialState, action) {
  switch (action.type) {
    case SUBMITTING_TRUST:
      return Object.assign({}, state, {
        isSubmitting: true,
        trustId: action.petitionId
      });
    case USER_IS_TRUSTED:
      return Object.assign({}, state, {
        isSubmitting: false,
        isTrustedUser: true
      });
    case USER_IS_UNTRUSTED:
      return Object.assign({}, state, {
        isSubmitting: false,
        isTrustedUser: false
      });
    default:
      return state;
  }
}
