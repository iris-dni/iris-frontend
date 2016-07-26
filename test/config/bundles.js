import chai from 'chai';
import bundles from 'config/bundles';

const { assert } = chai;

describe('config bundles', () => {
  it('returns javascripts key', () => {
    const result = bundles();
    const actual = result.hasOwnProperty('javascripts');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('returns client.js path in javascripts', () => {
    const result = bundles();
    const actual = result.javascripts.indexOf('/dist/client.js') > -1;
    const expected = true;

    assert.equal(actual, expected);
  });

  it('returns stylesheets key', () => {
    const result = bundles();
    const actual = result.hasOwnProperty('stylesheets');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('returns styles.css path in stylesheets', () => {
    const result = bundles();
    const actual = result.stylesheets.indexOf('/dist/styles.css') > -1;
    const expected = true;

    assert.equal(actual, expected);
  });
});
