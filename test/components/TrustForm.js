import chai from 'chai';
import FIELDS from 'components/TrustSupportForm/fields';
import { getFieldByNameKey } from './PetitionForm';

const { assert } = chai;

describe('TrustSupportForm', () => {
  context('FIELDS', () => {
    it('is 7 fields in length', () => {
      const actual = FIELDS.length;
      const expected = 7;

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

    describe('`user.mobile` field', () => {
      const field = getFieldByNameKey('user.mobile', FIELDS);

      it('is present', () => {
        const actual = field.name;
        const expected = 'user.mobile';

        assert.equal(actual, expected);
      });

      it('is an input', () => {
        const actual = field.element;
        const expected = 'input';

        assert.equal(actual, expected);
      });

      it('is required', () => {
        const actual = field.html.required;
        const expected = true;

        assert.equal(actual, expected);
      });

      it('has input type `tel`', () => {
        const actual = field.html.type;
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
        const field = getFieldByNameKey(fieldName, FIELDS);

        it('is present', () => {
          const actual = field.name;
          const expected = fieldName;

          assert.equal(actual, expected);
        });

        it('is an input', () => {
          const actual = field.element;
          const expected = 'input';

          assert.equal(actual, expected);
        });

        it('is required', () => {
          const actual = field.html.required;
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
        const field = getFieldByNameKey(fieldName, FIELDS);

        it('is present', () => {
          const actual = field.name;
          const expected = fieldName;

          assert.equal(actual, expected);
        });

        it('is an input', () => {
          const actual = field.element;
          const expected = 'input';

          assert.equal(actual, expected);
        });

        it('is optional', () => {
          const actual = !field.html.required;
          const expected = true;

          assert.equal(actual, expected);
        });
      });
    });

    describe('`user.email` field', () => {
      const field = getFieldByNameKey('user.email', FIELDS);

      it('has input type `email`', () => {
        const actual = field.html.type;
        const expected = 'email';

        assert.equal(actual, expected);
      });
    });
  });
});
