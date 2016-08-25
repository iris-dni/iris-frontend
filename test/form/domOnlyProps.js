import chai from 'chai';
import domOnlyProps from 'form/domOnlyProps';

const { assert } = chai;

describe('domOnlyProps', () => {
  it('removes all non DOM properties', () => {
    const actual = domOnlyProps({
      initialValue: 'x',
      autofill: true,
      onUpdate: () => {},
      valid: false,
      invalid: true,
      dirty: true,
      pristine: false,
      active: true,
      touched: false,
      visited: true,
      autofilled: false,
      error: false
    });
    const expected = {};

    assert.deepEqual(actual, expected);
  });

  it('persists DOM properties', () => {
    const actual = domOnlyProps({
      error: false,
      value: 'hello world'
    });
    const expected = {
      value: 'hello world'
    };

    assert.deepEqual(actual, expected);
  });
});
