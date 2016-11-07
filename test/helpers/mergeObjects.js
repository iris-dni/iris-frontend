import chai from 'chai';
import mergeObjects from 'helpers/mergeObjects';

const { assert } = chai;

describe('mergeObjects helper', () => {
  it('provides empty object with no input', () => {
    const actual = mergeObjects('', undefined);
    const expected = {};

    assert.deepEqual(actual, expected);
  });

  it('passes default config', () => {
    const actual = mergeObjects({ hello: 'world' }, {});
    const expected = { hello: 'world' };

    assert.deepEqual(actual, expected);
  });

  it('passes custom config', () => {
    const actual = mergeObjects({}, { hello: 'world' });
    const expected = { hello: 'world' };

    assert.deepEqual(actual, expected);
  });

  it('merges objects', () => {
    const actual = mergeObjects({ hello: 'world' }, { foo: 'bar' });
    const expected = { hello: 'world', foo: 'bar' };

    assert.deepEqual(actual, expected);
  });

  it('overwrites default keys with custom keys', () => {
    const actual = mergeObjects({ foo: 'bar' }, { foo: 'baz' });
    const expected = { foo: 'baz' };

    assert.deepEqual(actual, expected);
  });

  it('merges deep objects', () => {
    const actual = mergeObjects({ foo: { bar: { baz: { text: 'text' } } } }, { foo: { bar: {} } });
    const expected = { foo: { bar: { baz: { text: 'text' } } } };

    assert.deepEqual(actual, expected);
  });
});
