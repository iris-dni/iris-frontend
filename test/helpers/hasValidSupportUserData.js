import { assert } from 'chai';
import hasValidUserData from 'helpers/hasValidSupportUserData';

describe('hasValidSupportUserData', () => {
  describe('passed object containing', () => {
    context('mobile, firstname, lastname', () => {
      const actual = hasValidUserData({
        mobile: '0000',
        firstname: 'Max',
        lastname: 'Mustermann'
      });

      it('is true', () => {
        assert.isTrue(actual);
      });
    });

    context('firstname, lastname', () => {
      const actual = hasValidUserData({
        firstname: 'Max',
        lastname: 'Mustermann'
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });

    context('mobile, lastname', () => {
      const actual = hasValidUserData({
        mobile: '0000',
        lastname: 'Mustermann'
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });

    context('mobile, firstname', () => {
      const actual = hasValidUserData({
        mobile: '0000',
        firstname: 'Max'
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });

    context('mobile', () => {
      const actual = hasValidUserData({
        mobile: '0000'
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });
  });

  it('fails silently', () => {
    const actual = hasValidUserData();
    assert.isFalse(actual);
  });
});
