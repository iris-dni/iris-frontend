import { assert } from 'chai';
import { push } from 'react-router-redux';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';
import mockUser from '../mocks/user';
import mockTrustResponse from '../mocks/trustResponse';
import mockTrustResponseUntrusted from '../mocks/trustResponseUntrusted';
import mockTrustResponseInvalid from '../mocks/trustResponseInvalid';
import mockTrustResponseUserAlreadySupported from '../mocks/trustResponseUserAlreadySupported';

import {
  submittingSupport,
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

      it('dispatches submittingSupport()', () => {
        assert(dispatch.calledWith(submittingSupport()));
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

      it('dispatches push to success page', done => {
        result.then(() => {
          assert(dispatch.calledWith(push(`/petitions/${mockPetition.data.id}`)));
        }).then(done, done);
      });

      it('dispatches supportedPetition()', done => {
        result.then(() => {
          assert(dispatch.calledWith(supportedPetition(mockTrustResponse.data)));
        }).then(done, done);
      });
    });

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

        result = supportPetition(mockTrustData, dispatch);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches push to confirmation page', done => {
        result.then(() => {
          assert(dispatch.calledWith(push(`/trust/support/${mockPetition.data.id}/confirm`)));
        }).then(done, done);
      });
    });

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

    context('with "user already supported this petition" response', () => {
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
          response: mockTrustResponseUserAlreadySupported
        });

        result = supportPetition(mockTrustData, dispatch);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches showFlashMessage() error', done => {
        result.then(() => {
          assert(dispatch.calledWith(showFlashMessage('Your mobile number was already used for this petition. A mobile number is allowed to support a petition only once.', 'error', 6000)));
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
    context('when triggered', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data,
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();
        result = resendVerification(mockTrustData);
      });

      it('dispatches submittingSupport()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(submittingSupport()));
        }).then(done, done);
      });
    });

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

  describe('submittingSupport', () => {
    it('returns SUBMITTING_SUPPORT action', () => {
      const result = submittingSupport();
      const actual = result.type;
      const expected = 'SUBMITTING_SUPPORT';

      assert.equal(actual, expected);
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
