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

  context('with a telephone field', () => {
    [
      '004915759646962',
      // '+4915759646962',
      '004315759646962',
      // '+4315759646962',
      '004115759646962'
      // '+4115759646962'
    ].forEach(number => {
      describe(`and number ${number}`, () => {
        it('is valid', () => {
          const actual = fieldValidator(
            [
              {
                name: 'test',
                html: {
                  type: 'tel'
                }
              }
            ],
            { test: number }
          );
          const expected = {};

          assert.deepEqual(actual, expected);
        });
      });
    });

    [
      '004815759646962',
      '+4815759646962',
      '++4815759646962',
      'abc1233456',
      '015759646962',
      '00115759646962'
    ].forEach(number => {
      describe(`and number ${number}`, () => {
        it('is invalid', () => {
          const actual = fieldValidator(
            [
              {
                name: 'test',
                html: {
                  type: 'tel'
                }
              }
            ],
            { test: number }
          );
          const expected = {
            test: 'Phone number format is invalid'
          };

          assert.deepEqual(actual, expected);
        });
      });
    });
  });

  it('fails silently', () => {
    const actual = fieldValidator();
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
