import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockWhoAmI from '../mocks/whoAmI';

import {
  requestWhoAmI,
  receiveWhoAmI,
  fetchWhoAmI,
  requestLogout,
  receiveLogout,
  logout
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

  describe('requestLogout', () => {
    it('returns REQUEST_LOGOUT action', () => {
      const result = requestLogout();
      const actual = result.type;
      const expected = 'REQUEST_LOGOUT';

      assert.equal(actual, expected);
    });
  });

  describe('receiveLogout', () => {
    it('returns RECEIVE_LOGOUT action', () => {
      const result = receiveLogout();
      const actual = result.type;
      const expected = 'RECEIVE_LOGOUT';

      assert.equal(actual, expected);
    });
  });

  describe('logout', () => {
    let dispatch;
    let result;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: {}
      });

      result = logout();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('returns a function that dispatches requestLogout()', () => {
      result(dispatch);
      assert(dispatch.calledWith(requestLogout()));
    });

    it('returns a function that returns a promise that dispatches receiveLogout()', done => {
      result(dispatch).then(() => {
        assert(dispatch.calledWith(receiveLogout()));
      }).then(done, done);
    });
  });
});
