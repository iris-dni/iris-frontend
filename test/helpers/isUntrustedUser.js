import { assert } from 'chai';
import isUntrustedUser from 'helpers/isUntrustedUser';

describe('isUntrustedUser', () => {
  context('with `reasons` array', () => {
    describe('containing `mobile_untrusted`', () => {
      const actual = isUntrustedUser({
        reasons: ['another_reason', 'mobile_untrusted']
      });

      it('is true', () => {
        assert.isTrue(actual);
      });
    });
  });

  context('without `reasons` array', () => {
    describe('containing `mobile_untrusted`', () => {
      const actual = isUntrustedUser({
        reasons: ['another_reason']
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });

    const actual = isUntrustedUser({});

    it('it fails silently', () => {
      assert.isFalse(actual);
    });
  });
});
