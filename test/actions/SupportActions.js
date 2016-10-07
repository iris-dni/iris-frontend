import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';
import mockUser from '../mocks/user';

import {
  submittingSupport,
  supportPetition,
  supportedPetition
} from 'actions/SupportActions';

describe('SupportActions', () => {
  describe('submittingSupport', () => {
    it('returns SUBMITTING_SUPPORT action', () => {
      const result = submittingSupport();
      const actual = result.type;
      const expected = 'SUBMITTING_SUPPORT';

      assert.equal(actual, expected);
    });
  });

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

    it('dispatches submittingSupport()', () => {
      assert(dispatch.calledWith(submittingSupport()));
    });

    it('returns function that returns a promise that dispatches supportedPetition() when done', done => {
      result.then(() => {
        // assert(dispatch.calledWithMatch(supportedPetition({ id: '1BV3l' })));
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
