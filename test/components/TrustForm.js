import chai from 'chai';
import FIELDS_SUPPORTING from 'components/TrustForm/fieldsForSupporting';
import { getFieldByNameKey } from './PetitionForm';

const { assert } = chai;

describe('TrustForm', () => {
  context('FIELDS_SUPPORTING', () => {
    it('is 7 fields in length', () => {
      const actual = FIELDS_SUPPORTING.length;
      const expected = 7;

      assert.equal(actual, expected);
    });

    describe('`petitionId` field', () => {
      it('is present', () => {
        const result = getFieldByNameKey('petitionId', FIELDS_SUPPORTING);
        const actual = result.name;
        const expected = 'petitionId';

        assert.equal(actual, expected);
      });

      it('is an input', () => {
        const result = getFieldByNameKey('petitionId', FIELDS_SUPPORTING);
        const actual = result.element;
        const expected = 'input';

        assert.equal(actual, expected);
      });

      it('is hidden', () => {
        const result = getFieldByNameKey('petitionId', FIELDS_SUPPORTING);
        const actual = result.hidden;

        assert.isTrue(actual);
      });

      it('has `hidden` html attr', () => {
        const result = getFieldByNameKey('petitionId', FIELDS_SUPPORTING);
        const actual = result.html.type;
        const expected = 'hidden';

        assert.equal(actual, expected);
      });
    });

    describe('`user.mobile` field', () => {
      it('is present', () => {
        const result = getFieldByNameKey('user.mobile', FIELDS_SUPPORTING);
        const actual = result.name;
        const expected = 'user.mobile';

        assert.equal(actual, expected);
      });

      it('is an input', () => {
        const result = getFieldByNameKey('user.mobile', FIELDS_SUPPORTING);
        const actual = result.element;
        const expected = 'input';

        assert.equal(actual, expected);
      });

      it('is required', () => {
        const result = getFieldByNameKey('user.mobile', FIELDS_SUPPORTING);
        const actual = result.html.required;
        const expected = true;

        assert.equal(actual, expected);
      });

      it('has input type `tel`', () => {
        const result = getFieldByNameKey('user.mobile', FIELDS_SUPPORTING);
        const actual = result.html.type;
        const expected = 'tel';

        assert.equal(actual, expected);
      });
    });

    [
      'user.firstname',
      'user.lastname',
      'user.zip'
    ].forEach(fieldName => {
      describe(`${fieldName} field`, () => {
        it('is present', () => {
          const result = getFieldByNameKey(fieldName, FIELDS_SUPPORTING);
          const actual = result.name;
          const expected = fieldName;

          assert.equal(actual, expected);
        });

        it('is an input', () => {
          const result = getFieldByNameKey(fieldName, FIELDS_SUPPORTING);
          const actual = result.element;
          const expected = 'input';

          assert.equal(actual, expected);
        });

        it('is required', () => {
          const result = getFieldByNameKey(fieldName, FIELDS_SUPPORTING);
          const actual = result.html.required;
          const expected = true;

          assert.equal(actual, expected);
        });
      });
    });

    [
      'user.town',
      'user.email'
    ].forEach(fieldName => {
      describe(`${fieldName} field`, () => {
        it('is present', () => {
          const result = getFieldByNameKey(fieldName, FIELDS_SUPPORTING);
          const actual = result.name;
          const expected = fieldName;

          assert.equal(actual, expected);
        });

        it('is an input', () => {
          const result = getFieldByNameKey(fieldName, FIELDS_SUPPORTING);
          const actual = result.element;
          const expected = 'input';

          assert.equal(actual, expected);
        });

        it('is optional', () => {
          const result = getFieldByNameKey(fieldName, FIELDS_SUPPORTING);
          const actual = !result.html.required;
          const expected = true;

          assert.equal(actual, expected);
        });
      });
    });

    describe('`user.email` field', () => {
      it('has input type `email`', () => {
        const result = getFieldByNameKey('user.email', FIELDS_SUPPORTING);
        const actual = result.html.type;
        const expected = 'email';

        assert.equal(actual, expected);
      });
    });
  });
});
