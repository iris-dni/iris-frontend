import chai from 'chai';
import fieldIsInvalid from 'form/fieldIsInvalid';

const { assert } = chai;

describe('fieldIsInvalid', () => {
  it('returns false when field is not touched', () => {
    const actual = fieldIsInvalid({
      touched: false,
      error: 'Error'
    });
    const expected = false;

    assert.equal(actual, expected);
  });

  it('returns error error exists and field is touched', () => {
    const actual = fieldIsInvalid({
      touched: true,
      error: 'Error'
    });
    const expected = 'Error';

    assert.equal(actual, expected);
  });

  it('returns false when field has no error', () => {
    let actual = fieldIsInvalid({
      touched: true,
      error: ''
    });
    let expected = false;

    assert.equal(actual, expected);

    actual = fieldIsInvalid({
      touched: false,
      error: ''
    });
    expected = false;

    assert.equal(actual, expected);
  });

  it('fails silently', () => {
    const actual = fieldIsInvalid();
    const expected = undefined;

    assert.equal(actual, expected);
  });
});
