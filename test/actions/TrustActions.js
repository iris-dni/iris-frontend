import { assert } from 'chai';
import mockPetition from '../mocks/petition';

import {
  submittingTrust,
  userIsTrusted,
  userIsUntrusted,
  finishedTrust,
  newTrustStep
} from 'actions/TrustActions';

describe('TrustActions', () => {
  describe('submittingTrust', () => {
    it('returns RECEIVE_PETITION action', () => {
      const result = submittingTrust(mockPetition.data.id);
      const actual = result.type;
      const expected = 'SUBMITTING_TRUST';

      assert.equal(actual, expected);
    });

    it('passes petition id', () => {
      const result = submittingTrust(mockPetition.data.id);
      const actual = result.petitionId;
      const expected = mockPetition.data.id;

      assert.deepEqual(actual, expected);
    });
  });

  describe('userIsTrusted', () => {
    it('returns USER_IS_TRUSTED action', () => {
      const result = userIsTrusted();
      const actual = result.type;
      const expected = 'USER_IS_TRUSTED';

      assert.equal(actual, expected);
    });
  });

  describe('userIsUntrusted', () => {
    it('returns USER_IS_UNTRUSTED action', () => {
      const result = userIsUntrusted();
      const actual = result.type;
      const expected = 'USER_IS_UNTRUSTED';

      assert.equal(actual, expected);
    });
  });

  describe('finishedTrust', () => {
    it('returns FINISHED_TRUST action', () => {
      const result = finishedTrust();
      const actual = result.type;
      const expected = 'FINISHED_TRUST';

      assert.equal(actual, expected);
    });
  });

  describe('newTrustStep', () => {
    it('returns NEW_TRUST_STEP action', () => {
      const result = newTrustStep();
      const actual = result.type;
      const expected = 'NEW_TRUST_STEP';

      assert.equal(actual, expected);
    });
  });
});
