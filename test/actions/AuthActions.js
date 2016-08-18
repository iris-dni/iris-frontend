import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockWhoAmI from '../mocks/whoAmI';

import {
  requestWhoAmI,
  receiveWhoAmI,
  fetchWhoAmI
} from 'actions/AuthActions';

describe('AuthActions', () => {
  describe('requestWhoAmI', () => {
    it('returns REQUEST_WHOAMI action', () => {
      const result = requestWhoAmI();
      const actual = result.type;
      const expected = 'REQUEST_WHOAMI';

      assert.equal(actual, expected);
    });
  });

  describe('receiveWhoAmI', () => {
    it('returns RECEIVE_WHOAMI action', () => {
      const result = receiveWhoAmI();
      const actual = result.type;
      const expected = 'RECEIVE_WHOAMI';

      assert.equal(actual, expected);
    });

    it('passes the whoAmI object', () => {
      const result = receiveWhoAmI(mockWhoAmI);
      const actual = result.me;
      const expected = mockWhoAmI;

      assert.equal(actual, expected);
    });
  });

  describe('fetchWhoAmI', () => {
    let dispatch;
    let result;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockWhoAmI
      });

      result = fetchWhoAmI();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('returns a function that dispatches requestWhoAmI()', () => {
      result(dispatch);
      assert(dispatch.calledWith(requestWhoAmI()));
    });

    it('returns a function that returns a promise that dispatches receiveWhoAmI()', done => {
      result(dispatch).then(() => {
        assert(dispatch.calledWith(receiveWhoAmI(mockWhoAmI.data)));
      }).then(done, done);
    });
  });
});
