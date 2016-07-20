import chai from 'chai';
import stylesheet from 'server/stylesheet';

const { assert } = chai;

describe('stylesheet helper', () => {
  it('returns stylesheet element', () => {
    const result = stylesheet();
    const actual = result.indexOf('<link rel=\'stylesheet\'') > -1;
    const expected = true;

    assert.equal(actual, expected);
  });

  it('returns link to stylesheet', () => {
    const result = stylesheet('//localhost:3000');
    const actual = result.indexOf('dist/styles.css') > -1;
    const expected = true;

    assert.equal(actual, expected);
  });

  it('accepts base server path', () => {
    const result = stylesheet('//localhost:3000');
    const actual = result.indexOf('//localhost:3000/') > -1;
    const expected = true;

    assert.equal(actual, expected);
  });
});
