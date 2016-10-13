import chai from 'chai';
import FIELDS from 'components/TrustConfirmationForm/fields';
import { getFieldByNameKey } from './PetitionForm';

const { assert } = chai;

describe('TrustConfirmationForm', () => {
  context('FIELDS', () => {
    it('is 2 fields in length', () => {
      const actual = FIELDS.length;
      const expected = 2;

      assert.equal(actual, expected);
    });

    describe('`petitionId` field', () => {
      it('is present', () => {
        const result = getFieldByNameKey('petitionId', FIELDS);
        const actual = result.name;
        const expected = 'petitionId';

        assert.equal(actual, expected);
      });

      it('is an input', () => {
        const result = getFieldByNameKey('petitionId', FIELDS);
        const actual = result.element;
        const expected = 'input';

        assert.equal(actual, expected);
      });

      it('is hidden', () => {
        const result = getFieldByNameKey('petitionId', FIELDS);
        const actual = result.hidden;

        assert.isTrue(actual);
      });

      it('has `hidden` html attr', () => {
        const result = getFieldByNameKey('petitionId', FIELDS);
        const actual = result.html.type;
        const expected = 'hidden';

        assert.equal(actual, expected);
      });
    });
  });

  describe('`mobile_token` field', () => {
    it('is present', () => {
      const result = getFieldByNameKey('mobile_token', FIELDS);
      const actual = result.name;
      const expected = 'mobile_token';

      assert.equal(actual, expected);
    });

    it('is an input', () => {
      const result = getFieldByNameKey('mobile_token', FIELDS);
      const actual = result.element;
      const expected = 'input';

      assert.equal(actual, expected);
    });

    it('is required', () => {
      const result = getFieldByNameKey('mobile_token', FIELDS);
      const actual = result.html.required;

      assert.isTrue(actual);
    });

    it('has a minLength of 5', () => {
      const result = getFieldByNameKey('mobile_token', FIELDS);
      const actual = result.html.minLength;
      const expected = 5;

      assert.equal(actual, expected);
    });

    it('has a maxLength of 5', () => {
      const result = getFieldByNameKey('mobile_token', FIELDS);
      const actual = result.html.maxLength;
      const expected = 5;

      assert.equal(actual, expected);
    });
  });
});
