import chai from 'chai';
import calculateImageHeight from 'helpers/calculateImageHeight';

const { assert } = chai;

describe('calculateImageHeight', () => {
  it('returns the expected height', () => {
    const actual = calculateImageHeight(1000, { w: 800, h: 600 });
    const expected = 750;

    assert.deepEqual(actual, expected);
  });

  it('returns an integer', () => {
    const actual = calculateImageHeight(1000, { w: '800', h: '600' });
    const expected = 750;

    assert.deepEqual(actual, expected);
  });

  it('fails silently', () => {
    const actual = calculateImageHeight();
    const expected = '';

    assert.deepEqual(actual, expected);
  });
});
