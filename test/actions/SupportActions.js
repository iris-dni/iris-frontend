import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';
import mockUser from '../mocks/user';
import mockSupportResponse from '../mocks/supportResponse';
import mockSupportResponseUntrusted from '../mocks/supportResponseUntrusted';
import mockSupportResponseInvalid from '../mocks/supportResponseInvalid';

import {
  supportPetition,
  supportedPetition
} from 'actions/SupportActions';

import {
  submittingTrust,
  userIsUntrusted,
  userIsTrusted,
  finishedTrust
} from 'actions/TrustActions';

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
        petitionId: '1BV3l',
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();
        supportPetition(mockTrustData, dispatch);
      });

      it('dispatches submittingTrust() with petition id', () => {
        assert(dispatch.calledWith(submittingTrust(mockTrustData.petitionId)));
      });

      it('dispatches receiveWhoAmI() with user', () => {
        assert(dispatch.calledWith(receiveWhoAmI(mockUser)));
      });
    });

    context('with a successful response', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petitionId: '1BV3l',
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: mockSupportResponse
        });

        result = supportPetition(mockTrustData, dispatch);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches userIsTrusted()', done => {
        result.then(() => {
          assert(dispatch.calledWith(userIsTrusted()));
        }).then(done, done);
      });

      it('dispatches supportedPetition()', done => {
        result.then(() => {
          assert(dispatch.calledWith(supportedPetition(mockSupportResponse.data)));
        }).then(done, done);
      });

      it('dispatches finishedTrust()', done => {
        result.then(() => {
          assert(dispatch.calledWith(finishedTrust()));
        }).then(done, done);
      });
    });

    context('with an untrusted user response', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petitionId: '1BV3l',
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: mockSupportResponseUntrusted
        });

        result = supportPetition(mockTrustData, dispatch);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches userIsUntrusted()', done => {
        result.then(() => {
          assert(dispatch.calledWith(userIsUntrusted()));
        }).then(done, done);
      });

      it('dispatches finishedTrust()', done => {
        result.then(() => {
          assert(dispatch.calledWith(finishedTrust()));
        }).then(done, done);
      });
    });

    context('with an invalid verification response', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petitionId: '1BV3l',
        user: mockUser
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: mockSupportResponseInvalid
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

      it('dispatches finishedTrust()', done => {
        result.then(() => {
          assert(dispatch.calledWith(finishedTrust()));
        }).then(done, done);
      });
    });

    context('with a random error', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petitionId: '1BV3l',
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

      it('dispatches finishedTrust()', done => {
        result.then(() => {
          assert(dispatch.calledWith(finishedTrust()));
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
