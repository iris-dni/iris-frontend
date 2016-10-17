import { assert } from 'chai';
import trust from 'reducers/trust';
import mockPetition from '../mocks/petition';

describe('trust reducer', () => {
  it('handles the SUBMITTING_TRUST action', () => {
    const actual = trust({
      isSubmitting: false
    }, {
      type: 'SUBMITTING_TRUST',
      petitionId: mockPetition.data.id
    });
    const expected = {
      isSubmitting: true,
      petitionId: mockPetition.data.id
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the NEW_TRUST_STEP action', () => {
    const actual = trust({
      hasSubmitted: true
    }, {
      type: 'NEW_TRUST_STEP'
    });
    const expected = {
      hasSubmitted: false,
      isSubmitting: false
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the FINISHED_TRUST action', () => {
    const actual = trust({
      hasSubmitted: false,
      isSubmitting: true
    }, {
      type: 'FINISHED_TRUST'
    });
    const expected = {
      hasSubmitted: true,
      isSubmitting: false
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the USER_IS_TRUSTED action', () => {
    const actual = trust({
      isTrustedUser: false
    }, {
      type: 'USER_IS_TRUSTED'
    });
    const expected = {
      isTrustedUser: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the USER_IS_UNTRUSTED action', () => {
    const actual = trust({
      isTrustedUser: true
    }, {
      type: 'USER_IS_UNTRUSTED'
    });
    const expected = {
      isTrustedUser: false
    };

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = trust({ test: 'item' }, {});
    const expected = { test: 'item' };

    assert.deepEqual(actual, expected);
  });
});
