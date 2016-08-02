import chai from 'chai';
import createApiUrl from 'helpers/createApiUrl';

const { assert } = chai;

describe('createApiUrl', () => {
  it('returns / if nothing given', () => {
    const actual = createApiUrl('', undefined);
    const expected = '/';

    assert.equal(actual, expected);
  });

  it('strips closing slash from first arguement', () => {
    const actual = createApiUrl('http://api.com/', 'hello/world');
    const expected = 'http://api.com/hello/world';

    assert.equal(actual, expected);
  });

  it('strips opening slash from second arguement', () => {
    const actual = createApiUrl('http://api.com', '/hello/world');
    const expected = 'http://api.com/hello/world';

    assert.equal(actual, expected);
  });

  it('returns correct URL when both args have slashes', () => {
    const actual = createApiUrl('http://api.com/', '/hello/world');
    const expected = 'http://api.com/hello/world';

    assert.equal(actual, expected);
  });

  it('returns correct URL when both args dont have slashes', () => {
    const actual = createApiUrl('http://api.com', 'hello/world');
    const expected = 'http://api.com/hello/world';

    assert.equal(actual, expected);
  });
});
