import chai from 'chai';
import getBundles from 'server/getBundles';

const { assert } = chai;

describe('getBundles', () => {
  it('returns javascripts key', () => {
    const result = getBundles();
    const actual = result.hasOwnProperty('javascripts');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('returns client.js path in javascripts', () => {
    const result = getBundles();
    const actual = result.javascripts.indexOf('/dist/client.js') > -1;
    const expected = true;

    assert.equal(actual, expected);
  });

  it('returns stylesheets key', () => {
    const result = getBundles();
    const actual = result.hasOwnProperty('stylesheets');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('returns styles.css path in stylesheets', () => {
    const result = getBundles();
    const actual = result.stylesheets.indexOf('/dist/styles.css') > -1;
    const expected = true;

    assert.equal(actual, expected);
  });
});
