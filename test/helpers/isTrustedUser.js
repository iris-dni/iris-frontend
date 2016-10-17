import { assert } from 'chai';
import isTrustedUser from 'helpers/isTrustedUser';

describe('isTrustedUser', () => {
  context('with `reasons` array', () => {
    describe('containing `mobile_untrusted`', () => {
      const actual = isTrustedUser({
        reasons: ['another_reason', 'mobile_untrusted']
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });
  });

  context('without `reasons` array', () => {
    describe('containing `mobile_untrusted`', () => {
      const actual = isTrustedUser({
        reasons: ['another_reason']
      });

      it('is true', () => {
        assert.isTrue(actual);
      });
    });

    const actual = isTrustedUser({});

    it('it fails silently', () => {
      assert.isFalse(actual);
    });
  });
});
