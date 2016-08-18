import { assert } from 'chai';
import whoAmI from 'reducers/whoAmI';
import mockWhoAmI from '../mocks/whoAmI';

describe('whoAmI reducer', () => {
  it('handles the RECEIVE_WHOAMI action', () => {
    const actual = whoAmI({}, {
      type: 'RECEIVE_WHOAMI',
      me: mockWhoAmI
    });
    const expected = mockWhoAmI;

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = whoAmI(undefined, {});
    const expected = false;

    assert.deepEqual(actual, expected);
  });
});
