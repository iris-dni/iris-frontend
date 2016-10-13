import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';
import mockUser from '../mocks/user';

import {
  supportPetition,
  supportedPetition
} from 'actions/SupportActions';

import {
  submittingTrust
} from 'actions/TrustActions';

import {
  receiveWhoAmI
} from 'actions/AuthActions';

describe('SupportActions', () => {
  describe('supportPetition', () => {
    let dispatch;
    let result;
    let mockTrustData;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetition
      });

      mockTrustData = { petitionId: '1BV3l', user: mockUser };

      result = supportPetition(mockTrustData, dispatch);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('dispatches submittingTrust() with the petition id', () => {
      assert(dispatch.calledWith(submittingTrust(mockTrustData.petitionId)));
    });

    it('dispatches receiveWhoAmI() with passed user', () => {
      assert(dispatch.calledWith(receiveWhoAmI(mockUser)));
    });

    it('dispatches userIsUntrusted()', done => {
      result.then(() => {
        // TODO: figure out way to test all support outcomes
        // assert(dispatch.calledWith(userIsUntrusted()));
      }).then(done, done);
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
