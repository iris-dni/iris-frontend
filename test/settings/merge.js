import chai from 'chai';
import merge from 'settings/merge';

const { assert } = chai;

describe('settings merge', () => {
  it('provides empty object with no input', () => {
    const actual = merge('', undefined);
    const expected = {};

    assert.deepEqual(actual, expected);
  });

  it('passes default config', () => {
    const actual = merge({ hello: 'world' }, {});
    const expected = { hello: 'world' };

    assert.deepEqual(actual, expected);
  });

  it('passes custom config', () => {
    const actual = merge({}, { hello: 'world' });
    const expected = { hello: 'world' };

    assert.deepEqual(actual, expected);
  });

  it('merges objects', () => {
    const actual = merge({ hello: 'world' }, { foo: 'bar' });
    const expected = { hello: 'world', foo: 'bar' };

    assert.deepEqual(actual, expected);
  });

  it('overwrites default keys with custom keys', () => {
    const actual = merge({ foo: 'bar' }, { foo: 'baz' });
    const expected = { foo: 'baz' };

    assert.deepEqual(actual, expected);
  });
});
