import {
  SUBMITTING_TRUST,
  USER_IS_TRUSTED,
  USER_IS_UNTRUSTED,
  FINISHED_TRUST,
  NEW_TRUST_STEP
} from 'actions/actionTypes';

const initialState = {
  isSubmitting: false,
  hasSubmitted: false,
  isTrustedUser: false
};

export default function trust (state = initialState, action) {
  switch (action.type) {
    case SUBMITTING_TRUST:
      return Object.assign({}, state, {
        isSubmitting: true,
        petitionId: action.petitionId
      });
    case NEW_TRUST_STEP:
      return Object.assign({}, state, {
        hasSubmitted: false,
        isSubmitting: false
      });
    case FINISHED_TRUST:
      return Object.assign({}, state, {
        hasSubmitted: true,
        isSubmitting: false
      });
    case USER_IS_TRUSTED:
      return Object.assign({}, state, {
        isTrustedUser: true
      });
    case USER_IS_UNTRUSTED:
      return Object.assign({}, state, {
        isTrustedUser: false
      });
    default:
      return state;
  }
}
