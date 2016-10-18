import chai from 'chai';
import FIELDS from 'components/TrustPublishForm/fields';
import { getFieldByNameKey } from './PetitionForm';

const { assert } = chai;

describe('TrustPublishForm', () => {
  context('FIELDS', () => {
    it('is 7 fields in length', () => {
      const actual = FIELDS.length;
      const expected = 7;

      assert.equal(actual, expected);
    });

    describe('`owner.mobile` field', () => {
      const field = getFieldByNameKey('owner.mobile', FIELDS);

      it('is present', () => {
        const actual = field.name;
        const expected = 'owner.mobile';

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

      it('has maxLength <= 15', () => {
        const actual = field.html.maxLength <= 15;

        assert.isTrue(actual);
      });
    });

    [
      'owner.firstname',
      'owner.lastname',
      'owner.street',
      'owner.zip',
      'owner.town',
      'owner.email'
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

    describe('`owner.email` field', () => {
      const field = getFieldByNameKey('owner.email', FIELDS);

      it('has input type `email`', () => {
        const actual = field.html.type;
        const expected = 'email';

        assert.equal(actual, expected);
      });
    });
  });
});
