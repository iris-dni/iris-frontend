import {
  SUBMITTING_TRUST,
  USER_IS_TRUSTED,
  USER_IS_UNTRUSTED
} from './actionTypes';

export function submittingTrust (petitionId) {
  return {
    type: SUBMITTING_TRUST,
    petitionId
  };
}

export function userIsTrusted () {
  return {
    type: USER_IS_TRUSTED
  };
}

export function userIsUntrusted () {
  return {
    type: USER_IS_UNTRUSTED
  };
}

