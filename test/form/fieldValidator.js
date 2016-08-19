import chai from 'chai';
import fieldValidator from 'form/fieldValidator';

const { assert } = chai;

describe('fieldValidator', () => {
  it('returns empty errors object when field is not required', () => {
    const actual = fieldValidator(
      [
        {
          name: 'test'
        }
      ],
      { test: '' }
    );
    const expected = {};

    assert.deepEqual(actual, expected);
  });

  it('returns correct error when field is required', () => {
    const actual = fieldValidator(
      [
        {
          name: 'test',
          html: {
            required: true
          }
        }
      ],
      { test: '' }
    );
    const expected = {
      test: 'You must complete this field'
    };

    assert.deepEqual(actual, expected);
  });

  it('returns correct error when minLength is not met', () => {
    const actual = fieldValidator(
      [
        {
          name: 'test',
          html: {
            minLength: 10
          }
        }
      ],
      { test: 'test' }
    );
    const expected = {
      test: 'Must be 10 characters or more'
    };

    assert.deepEqual(actual, expected);
  });

  it('returns correct error when maxLength exceeds limit', () => {
    const actual = fieldValidator(
      [
        {
          name: 'test',
          html: {
            maxLength: 10
          }
        }
      ],
      { test: 'Words exceeding the limit' }
    );
    const expected = {
      test: 'Cannot be more than 10 characters'
    };

    assert.deepEqual(actual, expected);
  });

  it('handles multiple field errors', () => {
    const actual = fieldValidator(
      [
        {
          name: 'foo',
          html: {
            maxLength: 10
          }
        },
        {
          name: 'bar',
          html: {
            required: true
          }
        }
      ],
      {
        foo: 'Words exceeding the limit',
        bar: ''
      }
    );
    const expected = {
      foo: 'Cannot be more than 10 characters',
      bar: 'You must complete this field'
    };

    assert.deepEqual(actual, expected);
  });

  it('prioritizes "required field" error', () => {
    const actual = fieldValidator(
      [
        {
          name: 'test',
          html: {
            required: true,
            minLength: 10
          }
        }
      ],
      {
        test: ''
      }
    );
    const expected = {
      test: 'You must complete this field'
    };

    assert.deepEqual(actual, expected);
  });

  it('fails silently', () => {
    const actual = fieldValidator();
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
