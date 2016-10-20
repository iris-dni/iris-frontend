import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';
import mockUser from '../mocks/user';
import mockTrustResponse from '../mocks/trustResponse';
import mockTrustResponseUntrusted from '../mocks/trustResponseUntrusted';
import mockTrustResponseInvalid from '../mocks/trustResponseInvalid';

import {
  supportPetition,
  supportedPetition,
  resendVerification
} from 'actions/SupportActions';

import {
  receiveWhoAmI
} from 'actions/AuthActions';

import {
  showFlashMessage
} from 'actions/FlashActions';

describe('SupportActions', () => {
  describe('supportPetition', () => {
    context('with a user', () => {
      let dispatch;

      const mockTrustData = {
        petition: mockPetition.data,
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();
        supportPetition(mockTrustData, dispatch);
      });

      it('dispatches receiveWhoAmI() with user', () => {
        assert(dispatch.calledWith(receiveWhoAmI(mockUser)));
      });
    });

    context('with a successful response', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data,
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: mockTrustResponse
        });

        result = supportPetition(mockTrustData, dispatch);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches supportedPetition()', done => {
        result.then(() => {
          assert(dispatch.calledWith(supportedPetition(mockTrustResponse.data)));
        }).then(done, done);
      });
    });

    // context('with an untrusted user response', () => {
    //   let dispatch;
    //   let result;

    //   const mockTrustData = {
    //     petition: mockPetition.data,
    //     user: mockUser
    //   };

    //   beforeEach(() => {
    //     dispatch = sinon.spy();

    //     moxios.install();
    //     moxios.stubRequest(/.*/, {
    //       status: 200,
    //       response: mockTrustResponseUntrusted
    //     });

    //     result = supportPetition(mockTrustData, dispatch);
    //   });

    //   afterEach(() => {
    //     moxios.uninstall();
    //   });
    // });

    context('with an invalid verification response', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data,
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: mockTrustResponseInvalid
        });

        result = supportPetition(mockTrustData, dispatch);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches showFlashMessage() error', done => {
        result.then(() => {
          assert(dispatch.calledWith(showFlashMessage('Invalid verification code', 'error')));
        }).then(done, done);
      });
    });

    context('with a random error', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data,
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: {
            status: 'error',
            reasons: ['random_error']
          }
        });

        result = supportPetition(mockTrustData, dispatch);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches showFlashMessage() error', done => {
        result.then(() => {
          assert(dispatch.calledWith(showFlashMessage('Sadly something failed, please try again!', 'error')));
        }).then(done, done);
      });
    });
  });

  describe('resendVerification', () => {
    context('with an untrusted user response', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data,
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: mockTrustResponseUntrusted
        });

        result = resendVerification(mockTrustData);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches showFlashMessage() success', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(showFlashMessage('Verification code has been re-sent', 'success')));
        }).then(done, done);
      });
    });

    context('with a random error', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data,
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: {
            status: 'error',
            reasons: ['random_error']
          }
        });

        result = resendVerification(mockTrustData);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches showFlashMessage() error', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(showFlashMessage('Sadly something failed, please try again!', 'error')));
        }).then(done, done);
      });
    });
  });

  describe('supportedPetition', () => {
    it('returns SUPPORTED_PETITION action', () => {
      const result = supportedPetition();
      const actual = result.type;
      const expected = 'SUPPORTED_PETITION';

      assert.equal(actual, expected);
    });

    it('passes petition object', () => {
      const result = supportedPetition(mockPetition);
      const actual = result.petition;
      const expected = mockPetition;

      assert.equal(actual, expected);
    });
  });
});
