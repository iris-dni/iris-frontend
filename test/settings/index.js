import chai from 'chai';
import settings from 'settings';

const { assert } = chai;

describe('settings', () => {
  it('returns default lang', () => {
    const actual = settings.lang;
    const expected = 'en';

    assert.equal(actual, expected);
  });

  it('returns default charset', () => {
    const actual = settings.charset;
    const expected = 'utf-8';

    assert.equal(actual, expected);
  });

  it('returns default title', () => {
    const actual = settings.title;
    const expected = 'iris-frontend';

    assert.equal(actual, expected);
  });
});
