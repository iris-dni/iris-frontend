import chai from 'chai';
import bundles from 'config/bundles';

const { assert } = chai;

describe('bundles config', () => {
  it('provides javascripts', () => {
    const result = bundles();
    const actual = result.hasOwnProperty('javascripts');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('provides client.js path in javascripts', () => {
    const result = bundles();
    const actual = result.javascripts.indexOf('/dist/client.js') > -1;
    const expected = true;

    assert.equal(actual, expected);
  });

  it('provides stylesheets', () => {
    const result = bundles();
    const actual = result.hasOwnProperty('stylesheets');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('provides styles.css path in stylesheets', () => {
    const result = bundles();
    const actual = result.stylesheets.indexOf('/dist/styles.css') > -1;
    const expected = true;

    assert.equal(actual, expected);
  });
});
