import chai from 'chai';
import FIELDS from 'components/PetitionForm/fields';

const { assert } = chai;

export const getFieldByNameKey = (name) => {
  const filteredField = FIELDS.filter(field => field && field.name === name);
  return filteredField[0];
};

describe('PetitionForm', () => {
  describe('exported FIELDS const', () => {
    it('is 5 fields in length', () => {
      const actual = FIELDS.length;
      const expected = 5;

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

    it('contains `city` field object', () => {
      const result = getFieldByNameKey('city');
      const actual = result.name;
      const expected = 'city';

      assert.equal(actual, expected);
    });

    it('`city` field is an Autocomplete', () => {
      const result = getFieldByNameKey('city');
      const actual = result.element;
      const expected = 'Autocomplete';

      assert.equal(actual, expected);
    });

    it('`city` field uses `cities` endpoint', () => {
      const result = getFieldByNameKey('city');
      const actual = result.endpoint;
      const expected = 'cities';

      assert.equal(actual, expected);
    });

    it('`city` field is optional', () => {
      const result = getFieldByNameKey('city');
      const actual = !result.html.required;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`city` field has a `suggestionsLimit` of 4', () => {
      const result = getFieldByNameKey('city');
      const actual = result.suggestionsLimit;
      const expected = 4;

      assert.equal(actual, expected);
    });

    it('`city` field has a `suggestionFormatter` callback', () => {
      const result = getFieldByNameKey('city');
      const actual = typeof result.suggestionFormatter;
      const expected = 'function';

      assert.equal(actual, expected);
    });

    it('`city` field has a `getFormValue` callback', () => {
      const result = getFieldByNameKey('city');
      const actual = typeof result.getFormValue;
      const expected = 'function';
      assert.equal(actual, expected);
    });
  });
});
