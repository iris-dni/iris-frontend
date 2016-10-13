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
      const field = getFieldByNameKey('petitionId', FIELDS);

      it('is present', () => {
        const actual = field.name;
        const expected = 'petitionId';

        assert.equal(actual, expected);
      });

      it('is an input', () => {
        const actual = field.element;
        const expected = 'input';

        assert.equal(actual, expected);
      });

      it('is hidden', () => {
        const actual = field.hidden;

        assert.isTrue(actual);
      });

      it('has `hidden` html attr', () => {
        const actual = field.html.type;
        const expected = 'hidden';

        assert.equal(actual, expected);
      });
    });
  });

  describe('`mobile_token` field', () => {
    const field = getFieldByNameKey('mobile_token', FIELDS);

    it('is present', () => {
      const actual = field.name;
      const expected = 'mobile_token';

      assert.equal(actual, expected);
    });

    it('is an input', () => {
      const actual = field.element;
      const expected = 'input';

      assert.equal(actual, expected);
    });

    it('is required', () => {
      const actual = field.html.required;

      assert.isTrue(actual);
    });

    it('has a minLength of 5', () => {
      const actual = field.html.minLength;
      const expected = 5;

      assert.equal(actual, expected);
    });

    it('has a maxLength of 5', () => {
      const actual = field.html.maxLength;
      const expected = 5;

      assert.equal(actual, expected);
    });
  });
});
