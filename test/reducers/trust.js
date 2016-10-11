import { assert } from 'chai';
import trust from 'reducers/trust';
import mockPetition from '../mocks/petition';

describe('trust reducer', () => {
  it('handles the SUBMITTING_TRUST action', () => {
    const actual = trust({
      isSubmitting: false
    }, {
      type: 'SUBMITTING_TRUST',
      petitionId: mockPetition.id
    });
    const expected = {
      isSubmitting: true,
      trustId: mockPetition.id
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the FINISHED_TRUST action', () => {
    const actual = trust({
      trustId: mockPetition.id
    }, {
      type: 'FINISHED_TRUST'
    });
    const expected = {
      trustId: false
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the USER_IS_TRUSTED action', () => {
    const actual = trust({
      isSubmitting: true,
      isTrustedUser: false
    }, {
      type: 'USER_IS_TRUSTED'
    });
    const expected = {
      isSubmitting: false,
      isTrustedUser: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the USER_IS_UNTRUSTED action', () => {
    const actual = trust({
      isSubmitting: true,
      isTrustedUser: true
    }, {
      type: 'USER_IS_UNTRUSTED'
    });
    const expected = {
      isSubmitting: false,
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
