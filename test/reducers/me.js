import { assert } from 'chai';
import me from 'reducers/me';
import mockWhoAmI from '../mocks/whoAmI';

describe('me reducer', () => {
  it('handles the RECEIVE_WHOAMI action', () => {
    const actual = me({}, {
      type: 'RECEIVE_WHOAMI',
      me: mockWhoAmI
    });
    const expected = mockWhoAmI;

    assert.deepEqual(actual, expected);
  });

  it('handles the RECEIVE_LOGOUT action', () => {
    const actual = me({}, {
      type: 'RECEIVE_LOGOUT'
    });
    const expected = false;

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = me(undefined, {});
    const expected = false;

    assert.deepEqual(actual, expected);
  });
});
