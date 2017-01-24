import chai from 'chai';
import FIELDS from 'components/RespondToPetitionForm/fields';

const { assert } = chai;

export const getFieldByNameKey = (name, fields = FIELDS) => {
  const filteredField = fields.filter(field => field && field.name === name);
  return filteredField[0];
};

describe('RespondToPetitionForm', () => {
  describe('FIELDS', () => {
    it('is 4 fields in length', () => {
      const actual = FIELDS.length;
      const expected = 4;

      assert.equal(actual, expected);
    });

    it('contains `petitionId` field object', () => {
      const result = getFieldByNameKey('petitionId');
      const actual = result.name;
      const expected = 'petitionId';

      assert.equal(actual, expected);
    });

    it('`petitionId` field is an input', () => {
      const result = getFieldByNameKey('petitionId');
      const actual = result.element;
      const expected = 'input';

      assert.equal(actual, expected);
    });

    it('`petitionId` field is hidden', () => {
      const result = getFieldByNameKey('petitionId');
      const actual = result.hidden;

      assert.isTrue(actual);
    });

    it('`petitionId` field has `hidden` html attr', () => {
      const result = getFieldByNameKey('petitionId');
      const actual = result.html.type;
      const expected = 'hidden';

      assert.equal(actual, expected);
    });

    it('contains `token` field object', () => {
      const result = getFieldByNameKey('token');
      const actual = result.name;
      const expected = 'token';

      assert.equal(actual, expected);
    });

    it('`token` field is an input', () => {
      const result = getFieldByNameKey('token');
      const actual = result.element;
      const expected = 'input';

      assert.equal(actual, expected);
    });

    it('`token` field is hidden', () => {
      const result = getFieldByNameKey('token');
      const actual = result.hidden;

      assert.isTrue(actual);
    });

    it('`token` field has `hidden` html attr', () => {
      const result = getFieldByNameKey('token');
      const actual = result.html.type;
      const expected = 'hidden';

      assert.equal(actual, expected);
    });

    it('contains `answer.text` field object', () => {
      const result = getFieldByNameKey('answer.text');
      const actual = result.name;
      const expected = 'answer.text';

      assert.equal(actual, expected);
    });

    it('`answer.text` field is a textarea', () => {
      const result = getFieldByNameKey('answer.text');
      const actual = result.element;
      const expected = 'textarea';

      assert.equal(actual, expected);
    });

    it('`answer.text` field is required', () => {
      const result = getFieldByNameKey('answer.text');
      const actual = result.html.required;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`answer.text` field has a minLength', () => {
      const result = getFieldByNameKey('answer.text');
      const actual = result.html.minLength > 0;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`answer.text` field has a maxLength', () => {
      const result = getFieldByNameKey('answer.text');
      const actual = result.html.maxLength > 0;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('contains `answer.name` field object', () => {
      const result = getFieldByNameKey('answer.name');
      const actual = result.name;
      const expected = 'answer.name';

      assert.equal(actual, expected);
    });

    it('`answer.name` field is an input', () => {
      const result = getFieldByNameKey('answer.name');
      const actual = result.element;
      const expected = 'input';

      assert.equal(actual, expected);
    });

    it('`answer.name` field is required', () => {
      const result = getFieldByNameKey('answer.name');
      const actual = result.html.required;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`answer.name` field has a minLength', () => {
      const result = getFieldByNameKey('answer.name');
      const actual = result.html.minLength > 0;
      const expected = true;

      assert.equal(actual, expected);
    });

    it('`answer.name` field has a maxLength', () => {
      const result = getFieldByNameKey('answer.name');
      const actual = result.html.maxLength > 0;
      const expected = true;

      assert.equal(actual, expected);
    });
  });
});
