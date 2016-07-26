import chai from 'chai';
import config from 'config';

const { assert } = chai;

describe('config', () => {
  it('returns bundles object', () => {
    const actual = typeof config.bundles;
    const expected = 'object';

    assert.equal(actual, expected);
  });

  it('returns default lang', () => {
    const actual = config.lang;
    const expected = 'en-us';

    assert.equal(actual, expected);
  });

  it('returns default charset', () => {
    const actual = config.charset;
    const expected = 'utf-8';

    assert.equal(actual, expected);
  });

  it('returns default title', () => {
    const actual = config.title;
    const expected = 'iris-frontend';

    assert.equal(actual, expected);
  });
});
