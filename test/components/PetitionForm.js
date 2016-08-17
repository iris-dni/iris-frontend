import chai from 'chai';
import { FIELDS } from 'components/PetitionForm';

const { assert } = chai;

const getFieldByNameKey = (name) => {
  const filteredField = FIELDS.filter(field => field && field.name === name);
  return filteredField[0];
};

describe('PetitionForm', () => {
  describe('exported FIELDS const', () => {
    it('is 3 fields in length', () => {
      const actual = FIELDS.length;
      const expected = 3;

      assert.equal(actual, expected);
    });

    it('contains `title` field object', () => {
      const result = getFieldByNameKey('title');
      const actual = result.name;
      const expected = 'title';

      assert.equal(actual, expected);
    });

    it('`title` field is an input', () => {
      const result = getFieldByNameKey('title');
      const actual = result.element;
      const expected = 'input';

      assert.equal(actual, expected);
    });

    it('`title` field is required', () => {
      const result = getFieldByNameKey('title');
      const actual = result.html.required;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`title` field has a minLength', () => {
      const result = getFieldByNameKey('title');
      const actual = result.html.minLength > 0;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`title` field has a maxLength', () => {
      const result = getFieldByNameKey('title');
      const actual = result.html.maxLength > 0;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('contains `description` field object', () => {
      const result = getFieldByNameKey('description');
      const actual = result.name;
      const expected = 'description';

      assert.equal(actual, expected);
    });

    it('`description` field is a textarea', () => {
      const result = getFieldByNameKey('description');
      const actual = result.element;
      const expected = 'textarea';

      assert.equal(actual, expected);
    });

    it('`description` field is required', () => {
      const result = getFieldByNameKey('description');
      const actual = result.html.required;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`description` field has a minLength', () => {
      const result = getFieldByNameKey('title');
      const actual = result.html.minLength > 0;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`description` field has a maxLength', () => {
      const result = getFieldByNameKey('title');
      const actual = result.html.maxLength > 0;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('contains `suggested_solution` field object', () => {
      const result = getFieldByNameKey('suggested_solution');
      const actual = result.name;
      const expected = 'suggested_solution';

      assert.equal(actual, expected);
    });

    it('`suggested_solution` field is optional', () => {
      const result = getFieldByNameKey('suggested_solution');
      const actual = !result.html.required;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`suggested_solution` field is a textarea', () => {
      const result = getFieldByNameKey('suggested_solution');
      const actual = result.element;
      const expected = 'textarea';

      assert.equal(actual, expected);
    });
  });
});
