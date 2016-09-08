import { assert } from 'chai';
import encodeParams from 'helpers/encodeParams';

describe('encodeParams', () => {
  context('with a string argument', () => {
    const actual = encodeParams('foo=bar');
    const expected = 'foo=bar';

    it('returns the original argument', () => assert.equal(actual, expected));
  });

  context('with an object argument', () => {
    const actual = encodeParams({ foo: 'bar', baz: 42 });
    const expected = 'foo=bar&baz=42';

    it('returns the serialized argument', () => assert.equal(actual, expected));
  });

  context('with a nested object argument', () => {
    const actual = encodeParams({ foo: { bar: { baz: 42 } } });
    const expected = 'foo[bar][baz]=42';

    it('returns the serialized argument', () => assert.equal(actual, expected));
  });

  context('with nested object and array arguments', () => {
    const actual = encodeParams({ a: 1, b: '2', c: { d: '3' }, foo: ['bar', 'baz'] });
    const expected = 'a=1&b=2&c[d]=3&foo[]=bar&foo[]=baz';

    it('returns the serialized argument', () => assert.equal(actual, expected));
  });
});
