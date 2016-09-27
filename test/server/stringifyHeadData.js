import { assert } from 'chai';
import stringifyHeadData from 'server/stringifyHeadData';

describe('stringifyHeadData', () => {
  it('returns object with `title` key', () => {
    const result = stringifyHeadData();
    const actual = result.hasOwnProperty('title');

    assert.isTrue(actual);
  });

  it('returns object with `meta` key', () => {
    const result = stringifyHeadData();
    const actual = result.hasOwnProperty('meta');

    assert.isTrue(actual);
  });

  it('returns object with `link` key', () => {
    const result = stringifyHeadData();
    const actual = result.hasOwnProperty('link');

    assert.isTrue(actual);
  });

  it('returns object with `script` key', () => {
    const result = stringifyHeadData();
    const actual = result.hasOwnProperty('script');

    assert.isTrue(actual);
  });

  it('returns object with `style` key', () => {
    const result = stringifyHeadData();
    const actual = result.hasOwnProperty('style');

    assert.isTrue(actual);
  });
});
