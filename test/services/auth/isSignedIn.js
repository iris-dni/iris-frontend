import chai from 'chai';
import isSignedIn from 'services/auth/isSignedIn';

const { assert } = chai;

describe('isSignedIn', () => {
  it('returns false for null', () => {
    assert.isFalse(isSignedIn(null));
  });
});
