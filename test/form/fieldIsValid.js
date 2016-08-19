import chai from 'chai';
import fieldIsValid from 'form/fieldIsValid';

const { assert } = chai;

describe('fieldIsValid', () => {
  it('returns false when field is not touched', () => {
    const actual = fieldIsValid({
      touched: false,
      error: '',
      value: 'Hello'
    });
    const expected = false;

    assert.equal(actual, expected);
  });

  it('returns false when field has no value', () => {
    const actual = fieldIsValid({
      touched: true,
      error: '',
      value: ''
    });
    const expected = false;

    assert.equal(actual, expected);
  });

  it('returns false when field has an error', () => {
    const actual = fieldIsValid({
      touched: true,
      error: 'Error',
      value: 'Hello'
    });
    const expected = false;

    assert.equal(actual, expected);
  });

  it('returns true when field has no error', () => {
    const actual = fieldIsValid({
      touched: true,
      error: '',
      value: 'Hello'
    });
    const expected = 'Hello';

    assert.equal(actual, expected);
  });

  it('fails silently', () => {
    const actual = fieldIsValid();
    const expected = undefined;

    assert.equal(actual, expected);
  });
});