import { assert } from 'chai';
import isInvalidVerification from 'helpers/isInvalidVerification';

describe('isInvalidVerification', () => {
  context('with `reasons` array', () => {
    describe('containing `mobile_verification_failed`', () => {
      const actual = isInvalidVerification({
        reasons: ['another_reason', 'mobile_verification_failed']
      });

      it('is true', () => {
        assert.isTrue(actual);
      });
    });
  });

  context('without `reasons` array', () => {
    describe('containing `isInvalidVerification`', () => {
      const actual = isInvalidVerification({
        reasons: ['another_reason']
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });
  });

  it('fails silently', () => {
    const actual = isInvalidVerification({});
    assert.isFalse(actual);
  });
});
