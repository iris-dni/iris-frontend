import { assert } from 'chai';
import hasValidUserData from 'helpers/hasValidUserData';

describe('hasValidUserData', () => {
  describe('passed object containing', () => {
    context('mobile, firstname, lastname, zip', () => {
      const actual = hasValidUserData({
        mobile: '0000',
        firstname: 'Max',
        lastname: 'Mustermann',
        zip: '10119'
      });

      it('is true', () => {
        assert.isTrue(actual);
      });
    });

    context('firstname, lastname, zip', () => {
      const actual = hasValidUserData({
        firstname: 'Max',
        lastname: 'Mustermann',
        zip: '10119'
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });

    context('mobile, lastname, zip', () => {
      const actual = hasValidUserData({
        mobile: '0000',
        lastname: 'Mustermann',
        zip: '10119'
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });

    context('mobile, firstname, zip', () => {
      const actual = hasValidUserData({
        mobile: '0000',
        firstname: 'Max',
        zip: '10119'
      });

      it('is false', () => {
        assert.isFalse(actual);
      });
    });

    context('mobile, zip', () => {
      const actual = hasValidUserData({
        mobile: '0000',
        zip: '10119'
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
