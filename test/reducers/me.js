import { assert } from 'chai';
import me from 'reducers/me';
import mockWhoAmI from '../mocks/whoAmI';

describe('me reducer', () => {
  it('handles the REQUEST_WHOAMI action', () => {
    const actual = me({}, {
      type: 'REQUEST_WHOAMI'
    });
    const expected = {
      isLoading: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the RECEIVE_WHOAMI action', () => {
    const actual = me({}, {
      type: 'RECEIVE_WHOAMI',
      me: mockWhoAmI.data
    });
    const expected = Object.assign({}, mockWhoAmI.data, {
      isLoading: false
    });

    assert.deepEqual(actual, expected);
  });

  it('handles the REQUEST_LOGOUT action', () => {
    const actual = me(mockWhoAmI.data, {
      type: 'REQUEST_LOGOUT'
    });
    const expected = Object.assign({}, mockWhoAmI.data, {
      isLoading: true
    });

    assert.deepEqual(actual, expected);
  });

  it('handles the RECEIVE_LOGOUT action', () => {
    const actual = me({
      me: mockWhoAmI.data
    }, {
      type: 'RECEIVE_LOGOUT'
    });
    const expected = {
      isLoading: false
    };

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = me(mockWhoAmI.data, {});
    const expected = mockWhoAmI.data;

    assert.deepEqual(actual, expected);
  });
});
